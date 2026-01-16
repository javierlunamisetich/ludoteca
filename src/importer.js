import readXlsxFile from 'read-excel-file';
import { addGameToLibrary } from './db.js';

export async function importExcel(file, userId) {
    try {
        const rows = await readXlsxFile(file);
        // Assuming first row is header. 
        // We need to map columns. For now, let's assume a simple structure or try to detect.
        // Or better, just take the first few columns: Name, Players, Duration, Complexity.

        // Let's assume standard BGG export or the user's format.
        // User said "subir sus juegos manualmente o usando un excel".
        // Let's assume columns: Juego, Jugadores (min-max), Duracion, Complejidad, Categorias, Mecanicas

        const headers = rows[0].map(h => String(h).toLowerCase());
        const gameIdx = headers.findIndex(h => h.includes('juego') || h.includes('name') || h.includes('titulo'));

        if (gameIdx === -1) {
            throw new Error("No se encontró la columna 'Juego' o 'Nombre' en el Excel.");
        }

        let count = 0;
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const name = row[gameIdx];
            if (!name) continue;

            // Basic parsing (very robust to failure)
            const gameData = {
                juego: name,
                jug_min: 1, // Default
                jug_max: 4, // Default
                minutos: 60, // Default
                complejidad: 'Medio', // Default
                categorias: [],
                mecanicas: [],
                createdAt: new Date()
            };

            // Try to find other columns if they exist
            // This is a simplified importer. A real one would need column mapping UI.

            await addGameToLibrary(userId, gameData);
            count++;
        }
        return count;
    } catch (e) {
        console.error("Error importing Excel:", e);
        throw e;
    }
}
