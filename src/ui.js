
const multiFilterNames = ['players', 'complexity', 'duration', 'mechanics'];
export const filters = { players: [], complexity: [], duration: [], mechanics: [], titleSearch: "", topicSearch: "" };
let currentGames = []; // Store the current list of games
let sortedGames = [];
let searchDebounceTimer = null;
let isLoading = false;
let eventListenersReady = false;

// DOM Elements
const groups = document.querySelectorAll('[data-filter]');
const titleSearchInput = document.querySelector('#titleSearch');
const topicSearchInput = document.querySelector('#topicSearch');
const counter = document.querySelector('#matchCount');
const results = document.querySelector('#results');
const resetBtn = document.querySelector('#resetFilters');
const gameDetailDialog = document.querySelector('#gameDetailDialog');
const gameDetailContent = document.querySelector('#gameDetailContent');
const gameDetailClose = document.querySelector('#gameDetailClose');
const TOP_FILTER_CHIPS_LIMIT = 10;
const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

function buildTopFrequencyChips(games, groupSelector, fieldName) {
    const group = document.querySelector(`[data-filter="${groupSelector}"]`);
    if (!group) return;

    const freq = new Map();
    games.forEach(game => {
        const values = Array.isArray(game[fieldName]) ? game[fieldName] : [];
        values.forEach(value => {
            const normalized = String(value).trim();
            if (!normalized) return;
            freq.set(normalized, (freq.get(normalized) || 0) + 1);
        });
    });

    group.querySelectorAll('button[data-value]:not([data-value=""])').forEach(btn => btn.remove());

    const topValues = Array.from(freq.entries())
        .sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1];
            return a[0].localeCompare(b[0]);
        })
        .slice(0, TOP_FILTER_CHIPS_LIMIT)
        .map(([value]) => value);

    topValues.forEach(value => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chip';
        btn.dataset.value = value;
        btn.textContent = value;
        group.appendChild(btn);
    });

    syncFilterGroupActive(groupSelector);

    // Los elementos fuera del top de chips siguen siendo descubribles vía búsqueda libre.
}

function getSelectedValues(name) {
    return Array.isArray(filters[name]) ? filters[name] : [];
}

function toggleFilterValue(name, value) {
    if (!multiFilterNames.includes(name)) return;
    if (value === '') {
        filters[name] = [];
        return;
    }

    const selected = getSelectedValues(name);
    filters[name] = selected.includes(value)
        ? selected.filter(item => item !== value)
        : [...selected, value];
}

function syncFilterGroupActive(name) {
    const group = document.querySelector(`[data-filter="${name}"]`);
    if (!group) return;
    const selected = getSelectedValues(name);

    group.querySelectorAll('button').forEach(btn => {
        const value = btn.dataset.value ?? '';
        btn.classList.toggle('is-active', value === '' ? selected.length === 0 : selected.includes(value));
    });
}

function syncAllFilterGroups() {
    multiFilterNames.forEach(syncFilterGroupActive);
}

export function initUI(games, options = {}) {
    isLoading = Boolean(options.loading);
    setGamesDataset(games);

    // Initialize Filter Buttons
    const playerGroup = document.querySelector('[data-filter="players"]');
    // Clear existing buttons if any (except the "Cualquiera" one if we want to keep it, but easier to rebuild)
    // Actually, the HTML structure might be static, let's assume the HTML structure for filters exists.
    // The original code dynamically added player buttons.

    if (playerGroup && playerGroup.children.length <= 1) { // Only "Cualquiera" exists
        const playerOptions = [1, 2, 3, 4, 5, 6, 7, 8];
        playerOptions.forEach(num => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'chip';
            btn.dataset.value = String(num);
            btn.textContent = num;
            playerGroup.appendChild(btn);
        });
    }


    buildTopFrequencyChips(games, 'mechanics', 'mecanicas');
    buildTopFrequencyChips(games, 'categories', 'categorias');
    buildTopFrequencyChips(games, 'genres', 'generos');
    syncAllFilterGroups();

    if (!eventListenersReady) {
        setupEventListeners();
        eventListenersReady = true;
    }
    applyFilters();
}

export function updateGames(newGames) {
    isLoading = false;
    setGamesDataset(newGames);
    buildTopFrequencyChips(currentGames, 'mechanics', 'mecanicas');
    buildTopFrequencyChips(currentGames, 'categories', 'categorias');
    buildTopFrequencyChips(currentGames, 'genres', 'generos');
    syncAllFilterGroups();
    applyFilters();
}

export function setLoading(loading = true) {
    isLoading = loading;
    applyFilters();
}

function normalizeSearchText(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

function tokenizeSearchText(value) {
    return normalizeSearchText(value)
        .split(/[^a-z0-9]+/i)
        .filter(Boolean);
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => htmlEscapeMap[char]);
}

function splitTextList(value) {
    return String(value || '')
        .split(',')
        .map(item => item.trim())
        .filter(Boolean);
}

function normalizeList(value, fallback = '') {
    if (Array.isArray(value)) {
        return value.map(item => String(item || '').trim()).filter(Boolean);
    }
    return splitTextList(fallback || value);
}

function formatDecimal(value, digits = 1) {
    if (value === null || value === undefined || value === '') return '';
    const number = Number(value);
    return Number.isFinite(number) ? number.toFixed(digits) : '';
}

function getGameUrl(row) {
    if (row.bgg_url) return row.bgg_url;
    if (!row.bgg_id) return '';
    return `https://boardgamegeek.com/boardgame/${encodeURIComponent(row.bgg_id)}`;
}

function getGameDetails(row) {
    const score = formatDecimal(row.score);
    const minutesLabel = row.minutos_label || '';
    const duration = minutesLabel
        ? (String(minutesLabel).toLowerCase().includes('min') ? minutesLabel : `${minutesLabel} min`)
        : (row.longitud || 'Duración variable');
    const players = row.jugadores || 'Jugadores variables';
    const communityPlayers = row.jugadores_comunidad || row.community_players || row.suggested_numplayers || '';
    const bestPlayers = row.mejor_jugadores || row.best_players || '';
    const communityInfo = [
        communityPlayers ? `Comunidad: ${communityPlayers}` : '',
        bestPlayers ? `Mejor: ${bestPlayers}` : ''
    ].filter(Boolean).join(' · ');
    const minAge = row.edad_minima ?? row.min_age ?? null;
    const communityAge = row.edad_comunidad ?? row.community_age ?? '';
    const ageInfo = minAge ? `${minAge}+` : '';
    const complexityNumber = formatDecimal(row.complejidad_num);
    const complexity = row.complejidad
        ? `${row.complejidad}${complexityNumber ? ` (${complexityNumber}/5)` : ''}`
        : (complexityNumber ? `${complexityNumber}/5` : 'Sin dato');
    const categories = normalizeList(row.categorias, row.categorias_str);
    const mechanics = normalizeList(row.mecanicas, row.mecanicas_str);
    const rank = row.ranking_bgg || row.bgg_rank || '';

    return {
        title: row.juego || 'Juego sin nombre',
        originalName: row.nombre_excel || '',
        categoryText: row.categorias_str || categories.join(', '),
        score: score || '-',
        duration,
        players,
        communityPlayers,
        bestPlayers,
        communityInfo,
        ageInfo,
        communityAge,
        complexity,
        categories,
        mechanics,
        families: normalizeList(row.familias, row.familias_str || row.families_str),
        description: row.descripcion || row.description || '',
        image: row.imagen || row.image || row.thumbnail || '',
        year: row.anio_publicacion || row.yearpublished || row.year_published || '',
        rank: rank ? String(rank) : '',
        authors: normalizeList(row.autores, row.autores_str || row.designers_str),
        publishers: normalizeList(row.editoriales, row.editoriales_str || row.publishers_str),
        location: row.ubicacion || '',
        bggId: row.bgg_id || '',
        bggUrl: getGameUrl(row)
    };
}

function renderDetailFact(label, value) {
    if (!value) return '';
    return `
        <div class="detail-fact">
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
        </div>
    `;
}

function renderDetailTags(values) {
    if (!values.length) return '<p class="detail-empty">Sin datos cargados.</p>';
    return `<div class="detail-tags">${values.map(value => `<span>${escapeHtml(value)}</span>`).join('')}</div>`;
}

function openGameDetail(row) {
    if (!gameDetailDialog || !gameDetailContent) return;

    const details = getGameDetails(row);
    const imageBlock = details.image
        ? `<img class="game-detail-image" src="${escapeHtml(details.image)}" alt="${escapeHtml(details.title)}">`
        : `<div class="game-detail-placeholder">${escapeHtml(details.title.slice(0, 2).toUpperCase())}</div>`;
    const description = details.description || 'Todavía no hay descripción cargada para este juego.';
    const facts = [
        ['Jugadores', details.players],
        ['Comunidad', details.communityPlayers],
        ['Mejor', details.bestPlayers],
        ['Duración', details.duration],
        ['Edad', details.ageInfo],
        ['Edad comunidad', details.communityAge ? `${details.communityAge}+` : ''],
        ['Complejidad', details.complexity],
        ['Puntaje BGG', details.score],
        ['Ranking BGG', details.rank ? `#${details.rank}` : ''],
        ['Año', details.year ? String(details.year) : ''],
        ['Autores', details.authors.slice(0, 4).join(', ')],
        ['Editoriales', details.publishers.slice(0, 4).join(', ')],
        ['Ubicación', details.location]
    ];
    const familiesSection = details.families.length
        ? `
            <section class="detail-section">
                <h3>Familias</h3>
                ${renderDetailTags(details.families)}
            </section>
        `
        : '';

    gameDetailContent.innerHTML = `
        <div class="game-detail-hero">
            <div class="game-detail-media">${imageBlock}</div>
            <div class="game-detail-heading">
                <p class="game-detail-kicker">${details.bggId ? `BGG #${escapeHtml(details.bggId)}` : 'Detalle'}</p>
                <h2 id="gameDetailTitle">${escapeHtml(details.title)}</h2>
                <p>${escapeHtml(details.categoryText || 'Sin categorías')}</p>
                ${details.originalName && details.originalName !== details.title ? `<p class="detail-origin">Excel: ${escapeHtml(details.originalName)}</p>` : ''}
                ${details.bggUrl ? `<a class="bgg-link" href="${escapeHtml(details.bggUrl)}" target="_blank" rel="noopener noreferrer">Ver en BGG</a>` : ''}
            </div>
        </div>
        <div class="game-detail-body">
            <div class="detail-facts">
                ${facts.map(([label, value]) => renderDetailFact(label, value)).join('')}
            </div>
            <section class="detail-section">
                <h3>Descripción</h3>
                <p class="detail-description">${escapeHtml(description)}</p>
            </section>
            <section class="detail-section">
                <h3>Categorías</h3>
                ${renderDetailTags(details.categories)}
            </section>
            <section class="detail-section">
                <h3>Mecánicas</h3>
                ${renderDetailTags(details.mechanics)}
            </section>
            ${familiesSection}
        </div>
    `;

    if (typeof gameDetailDialog.showModal === 'function') {
        gameDetailDialog.showModal();
    } else {
        gameDetailDialog.setAttribute('open', '');
    }
}

function setGamesDataset(games) {
    currentGames = (games || []).map(game => ({
        ...game,
        title_search_tokens: tokenizeSearchText(game.juego || ''),
        topic_search_tokens: tokenizeSearchText([
            game.categorias_str || '',
            game.mecanicas_str || ''
        ].join(' '))
    }));

    sortedGames = currentGames.slice().sort((a, b) => {
        const scoreA = a.score ?? 0;
        const scoreB = b.score ?? 0;
        if (scoreA === scoreB) {
            return (a.juego || '').localeCompare(b.juego || '');
        }
        return scoreB - scoreA;
    });

    updateAutocomplete(currentGames);
}

function updateAutocomplete(games) {
    const titleSuggestions = new Set();
    const topicSuggestions = new Set();
    games.forEach(game => {
        if (game.juego) titleSuggestions.add(game.juego);
        if (game.categorias) {
            game.categorias.forEach(c => topicSuggestions.add(c));
        }
        if (game.mecanicas) {
            game.mecanicas.forEach(m => topicSuggestions.add(m));
        }
    });

    const renderOptions = (datalist, suggestions) => {
        if (!datalist) return;
        datalist.innerHTML = '';
        Array.from(suggestions).sort().forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            datalist.appendChild(option);
        });
    };

    renderOptions(document.getElementById('title-search-suggestions'), titleSuggestions);
    renderOptions(document.getElementById('topic-search-suggestions'), topicSuggestions);
}

function setupEventListeners() {
    groups.forEach(group => {
        group.addEventListener('click', ev => {
            const btn = ev.target.closest('button');
            if (!btn) return;
            const value = btn.dataset.value ?? '';
            const name = group.dataset.filter;

            toggleFilterValue(name, value);
            syncFilterGroupActive(name);
            applyFilters();
        });
    });

    const setupSearchInput = (input, filterName) => {
        if (!input) return;
        input.addEventListener('input', () => {
            filters[filterName] = input.value.trim().toLowerCase();
            if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(() => {
                applyFilters();
            }, 200);
        });
    };

    setupSearchInput(titleSearchInput, 'titleSearch');
    setupSearchInput(topicSearchInput, 'topicSearch');

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            multiFilterNames.forEach(name => {
                filters[name] = [];
            });
            filters.titleSearch = '';
            filters.topicSearch = '';
            if (titleSearchInput) titleSearchInput.value = '';
            if (topicSearchInput) topicSearchInput.value = '';
            syncAllFilterGroups();
            applyFilters();
        });
    }

    if (gameDetailDialog && gameDetailClose) {
        gameDetailClose.addEventListener('click', () => {
            gameDetailDialog.close();
        });

        gameDetailDialog.addEventListener('click', event => {
            if (event.target === gameDetailDialog) {
                gameDetailDialog.close();
            }
        });
    }
}

function matchesPlayers(row) {
    const selectedPlayers = getSelectedValues('players');
    if (selectedPlayers.length === 0) return true;
    const min = row.jug_min;
    const max = row.jug_max;
    return selectedPlayers.some(value => {
        const desired = parseInt(value, 10);
        if (Number.isNaN(desired)) return false;
        if (min !== null && max !== null) {
            return desired >= min && desired <= max;
        }
        if (min !== null) return desired >= min;
        if (max !== null) return desired <= max;
        return true;
    });
}

function matchesComplexity(row) {
    const selectedComplexities = getSelectedValues('complexity');
    if (selectedComplexities.length === 0) return true;
    if (!row.complejidad) return false;
    return selectedComplexities.includes(row.complejidad);
}

function matchesMechanics(row) {
    const selectedMechanics = getSelectedValues('mechanics');
    if (selectedMechanics.length === 0) return true;
    const list = Array.isArray(row.mecanicas) ? row.mecanicas : [];
    return list.some(m => selectedMechanics.includes(String(m)));
}

function matchesDuration(row) {
    const selectedDurations = getSelectedValues('duration');
    if (selectedDurations.length === 0) return true;
    return selectedDurations.includes(row.longitud);
}

function matchesTokenSearch(row, filterValue, rowTokenName) {
    if (!filterValue) return true;
    const queryTokens = tokenizeSearchText(filterValue);
    if (queryTokens.length === 0) return true;
    const searchTokens = Array.isArray(row[rowTokenName]) ? row[rowTokenName] : [];
    return queryTokens.every(queryToken =>
        searchTokens.some(searchToken => searchToken.startsWith(queryToken))
    );
}

function matchesSearch(row) {
    return matchesTokenSearch(row, filters.titleSearch, 'title_search_tokens') &&
        matchesTokenSearch(row, filters.topicSearch, 'topic_search_tokens');
}

function applyFilters() {
    if (isLoading) {
        updateCounter(0);
        render([], { loading: true });
        return;
    }

    const filtered = sortedGames.filter(row =>
        matchesPlayers(row) &&
        matchesComplexity(row) &&
        matchesDuration(row) &&
        matchesMechanics(row) &&
        matchesSearch(row)
    );
    updateCounter(filtered.length);
    render(filtered.slice(0, 30));
}

function updateCounter(total) {
    if (!counter) return;
    if (isLoading) {
        counter.textContent = '';
        return;
    }
    if (total === 0) {
        counter.textContent = 'Sin coincidencias';
    } else if (total === 1) {
        counter.textContent = '1 juego encontrado';
    } else {
        counter.textContent = `${total} juegos encontrados`;
    }
}

function render(rows, options = {}) {
    if (!results) return;
    results.innerHTML = '';
    if (options.loading) {
        for (let i = 0; i < 6; i++) {
            const skeleton = document.createElement('article');
            skeleton.className = 'card skeleton-card';
            skeleton.innerHTML = `
                <div>
                    <div class="skeleton-line skeleton-title"></div>
                    <div class="skeleton-line skeleton-subtitle"></div>
                </div>
                <div class="skeleton-meta">
                    <div class="skeleton-line"></div>
                    <div class="skeleton-line"></div>
                    <div class="skeleton-line"></div>
                    <div class="skeleton-line"></div>
                </div>
                <div class="skeleton-tags">
                    <div class="skeleton-pill"></div>
                    <div class="skeleton-pill"></div>
                    <div class="skeleton-pill"></div>
                </div>
            `;
            results.appendChild(skeleton);
        }
        return;
    }
    if (rows.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        empty.textContent = 'No hay juegos que cumplan esos filtros. Ajusta alguna condición.';
        results.appendChild(empty);
        return;
    }
    rows.forEach((row) => {
        const card = document.createElement('article');
        card.className = 'card';
        const details = getGameDetails(row);
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Abrir detalle de ${details.title}`);

        card.innerHTML = `
      <div>
        <h2>${escapeHtml(details.title)}</h2>
        <p class="subtitle">${escapeHtml(details.categoryText || 'Sin categorías')}</p>
      </div>
      <div class="meta">
        <span><strong>${escapeHtml(details.players)}</strong> jugadores</span>
        ${details.communityInfo ? `<span>${escapeHtml(details.communityInfo)}</span>` : ''}
        <span>${escapeHtml(details.duration)}</span>
        ${details.ageInfo ? `<span>Edad: <strong>${escapeHtml(details.ageInfo)}</strong>${details.communityAge ? ` · Comunidad: ${escapeHtml(details.communityAge)}+` : ''}</span>` : ''}
        <span>Complejidad: <strong>${escapeHtml(details.complexity)}</strong></span>
        <span class="score">Puntaje ${escapeHtml(details.score)}</span>
        ${details.location ? `<span class="muted-meta">Ubicación: ${escapeHtml(details.location)}</span>` : ''}
      </div>
      <div class="tags">
        ${details.categories.slice(0, 3).map(cat => `<span>${escapeHtml(cat)}</span>`).join('')}
        ${details.mechanics.slice(0, 2).map(mech => `<span>${escapeHtml(mech)}</span>`).join('')}
      </div>
    `;

        card.addEventListener('click', () => openGameDetail(row));
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openGameDetail(row);
            }
        });

        results.appendChild(card);
    });
}
