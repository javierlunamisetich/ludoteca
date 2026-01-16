(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ul=[{juego:"Frosthaven",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:90,minutos_max:180,minutos:135,minutos_label:"90-180",longitud:"Largo",categorias:["Adventure","Exploration","Fantasy","Fighting","Miniatures"],categorias_str:"Adventure, Exploration, Fantasy, Fighting, Miniatures",mecanicas:["Campaign / Battle Card Driven","Communication Limits","Cooperative Game","Deck Construction","Deck","Bag","and Pool Building","Grid Movement","Hand Management","Hexagon Grid","Legacy Game","Modular Board","Multi-Use Cards","Narrative Choice / Paragraph","Once-Per-Game Abilities","Scenario / Mission / Campaign Game","Simultaneous Action Selection","Solo / Solitaire Game","Variable Player Powers"],mecanicas_str:"Campaign / Battle Card Driven, Communication Limits, Cooperative Game, Deck Construction, Deck, Bag, and Pool Building, Grid Movement, Hand Management, Hexagon Grid, Legacy Game, Modular Board, Multi-Use Cards, Narrative Choice / Paragraph, Once-Per-Game Abilities, Scenario / Mission / Campaign Game, Simultaneous Action Selection, Solo / Solitaire Game, Variable Player Powers",score:8.8,complejidad_num:4.4,complejidad:"Pesado"},{juego:"marvel champions: x-23",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:60,minutos_max:60,minutos:60,minutos_label:"60",longitud:"Moderado",categorias:["Expansion for Base-game","Comic Book / Strip","Fighting"],categorias_str:"Expansion for Base-game, Comic Book / Strip, Fighting",mecanicas:["Cooperative Game","Hand Management","Solo / Solitaire Game","Variable Player Powers"],mecanicas_str:"Cooperative Game, Hand Management, Solo / Solitaire Game, Variable Player Powers",score:8.5,complejidad_num:0,complejidad:"Liviano"},{juego:"Ark nova",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:90,minutos_max:150,minutos:120,minutos_label:"90-150",longitud:"Medio-Largo",categorias:["Animals","Card Game","Environmental"],categorias_str:"Animals, Card Game, Environmental",mecanicas:["Contracts","End Game Bonuses","Events","Grid Coverage","Hand Management","Hexagon Grid","Income","Increase Value of Unchosen Resources","Open Drafting","Race","Set Collection","Solo / Solitaire Game","Tags","Tile Placement","Track Movement","Variable Player Powers","Variable Set-up"],mecanicas_str:"Contracts, End Game Bonuses, Events, Grid Coverage, Hand Management, Hexagon Grid, Income, Increase Value of Unchosen Resources, Open Drafting, Race, Set Collection, Solo / Solitaire Game, Tags, Tile Placement, Track Movement, Variable Player Powers, Variable Set-up",score:8.5,complejidad_num:3.8,complejidad:"Medio-Pesado"},{juego:"La era de la innovación",jug_min:1,jug_max:5,jugadores:"1-5",minutos_min:40,minutos_max:200,minutos:120,minutos_label:"40-200",longitud:"Medio-Largo",categorias:["Civilization","Economic","Fantasy","Territory Building"],categorias_str:"Civilization, Economic, Fantasy, Territory Building",mecanicas:["Contracts","End Game Bonuses","Hexagon Grid","Income","Modular Board","Network and Route Building","Tech Trees / Tech Tracks","Turn Order: Pass Order","Variable Player Powers","Variable Set-up","Victory Points as a Resource"],mecanicas_str:"Contracts, End Game Bonuses, Hexagon Grid, Income, Modular Board, Network and Route Building, Tech Trees / Tech Tracks, Turn Order: Pass Order, Variable Player Powers, Variable Set-up, Victory Points as a Resource",score:8.5,complejidad_num:4.3,complejidad:"Pesado"},{juego:"marvel champions: winter soldier",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:120,minutos:82,minutos_label:"45-120",longitud:"Medio-Largo",categorias:["Expansion for Base-game","Card Game","Science Fiction"],categorias_str:"Expansion for Base-game, Card Game, Science Fiction",mecanicas:["Deck Construction","Events","Multi-Use Cards"],mecanicas_str:"Deck Construction, Events, Multi-Use Cards",score:8.5,complejidad_num:3,complejidad:"Medio"},{juego:"Gaia project",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:60,minutos_max:150,minutos:105,minutos_label:"60-150",longitud:"Medio-Largo",categorias:["Civilization","Economic","Science Fiction","Space Exploration","Territory Building"],categorias_str:"Civilization, Economic, Science Fiction, Space Exploration, Territory Building",mecanicas:["End Game Bonuses","Hexagon Grid","Income","Modular Board","Network and Route Building","Solo / Solitaire Game","Tags","Tech Trees / Tech Tracks","Turn Order: Pass Order","Variable Player Powers","Variable Set-up","Victory Points as a Resource"],mecanicas_str:"End Game Bonuses, Hexagon Grid, Income, Modular Board, Network and Route Building, Solo / Solitaire Game, Tags, Tech Trees / Tech Tracks, Turn Order: Pass Order, Variable Player Powers, Variable Set-up, Victory Points as a Resource",score:8.4,complejidad_num:4.4,complejidad:"Pesado"},{juego:"marvel champions: magneto",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:0,minutos_max:0,minutos:0,minutos_label:"0",longitud:"Corto",categorias:["Expansion for Base-game","Card Game","Collectible Components","Comic Book / Strip"],categorias_str:"Expansion for Base-game, Card Game, Collectible Components, Comic Book / Strip",mecanicas:["Cooperative Game","Deck Construction","Hand Management","Solo / Solitaire Game","Variable Player Powers"],mecanicas_str:"Cooperative Game, Deck Construction, Hand Management, Solo / Solitaire Game, Variable Player Powers",score:8.4,complejidad_num:3,complejidad:"Medio"},{juego:"Señor de los anillos duelo por la tierra media",jug_min:2,jug_max:2,jugadores:"2-2",minutos_min:30,minutos_max:30,minutos:30,minutos_label:"30",longitud:"Corto",categorias:["Card Game","Fantasy","Novel-based"],categorias_str:"Card Game, Fantasy, Novel-based",mecanicas:["Area Majority / Influence","Hand Management","Income","Layering","Market","Modular Board","Multi-Use Cards","Once-Per-Game Abilities","Open Drafting","Point to Point Movement","Race","Relative Movement","Set Collection","Sudden Death Ending","Tags","Take That","Tech Trees / Tech Tracks","Variable Player Powers","Variable Set-up"],mecanicas_str:"Area Majority / Influence, Hand Management, Income, Layering, Market, Modular Board, Multi-Use Cards, Once-Per-Game Abilities, Open Drafting, Point to Point Movement, Race, Relative Movement, Set Collection, Sudden Death Ending, Tags, Take That, Tech Trees / Tech Tracks, Variable Player Powers, Variable Set-up",score:8.4,complejidad_num:2.1,complejidad:"Medio-Liviano"},{juego:"Dune imperium",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:60,minutos_max:120,minutos:90,minutos_label:"60-120",longitud:"Medio-Largo",categorias:["Movies / TV / Radio theme","Novel-based","Political","Science Fiction"],categorias_str:"Movies / TV / Radio theme, Novel-based, Political, Science Fiction",mecanicas:["Card Play Conflict Resolution","Deck","Bag","and Pool Building","Delayed Purchase","Force Commitment","Increase Value of Unchosen Resources","Multi-Use Cards","Open Drafting","Ownership","Race","Solo / Solitaire Game","Tags","Take That","Turn Order: Progressive","Variable Player Powers","Worker Placement"],mecanicas_str:"Card Play Conflict Resolution, Deck, Bag, and Pool Building, Delayed Purchase, Force Commitment, Increase Value of Unchosen Resources, Multi-Use Cards, Open Drafting, Ownership, Race, Solo / Solitaire Game, Tags, Take That, Turn Order: Progressive, Variable Player Powers, Worker Placement",score:8.4,complejidad_num:3.1,complejidad:"Medio"},{juego:"marvel champions: nightcrawler",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:60,minutos:52,minutos_label:"45-60",longitud:"Moderado",categorias:["Expansion for Base-game","Card Game"],categorias_str:"Expansion for Base-game, Card Game",mecanicas:["Cooperative Game","Deck Construction","Hand Management","Solo / Solitaire Game","Variable Player Powers"],mecanicas_str:"Cooperative Game, Deck Construction, Hand Management, Solo / Solitaire Game, Variable Player Powers",score:8.4,complejidad_num:3,complejidad:"Medio"},{juego:"Terraforming mars",jug_min:1,jug_max:5,jugadores:"1-5",minutos_min:120,minutos_max:120,minutos:120,minutos_label:"120",longitud:"Medio-Largo",categorias:["Civilization","Economic","Environmental","Industry / Manufacturing","Science Fiction","Space Exploration","Territory Building"],categorias_str:"Civilization, Economic, Environmental, Industry / Manufacturing, Science Fiction, Space Exploration, Territory Building",mecanicas:["Closed Drafting","Contracts","End Game Bonuses","Hand Management","Hexagon Grid","Income","Solo / Solitaire Game","Tags","Take That","Tile Placement","Turn Order: Progressive","Variable Player Powers","Variable Set-up"],mecanicas_str:"Closed Drafting, Contracts, End Game Bonuses, Hand Management, Hexagon Grid, Income, Solo / Solitaire Game, Tags, Take That, Tile Placement, Turn Order: Progressive, Variable Player Powers, Variable Set-up",score:8.3,complejidad_num:3.3,complejidad:"Medio-Pesado"},{juego:"marvel champions: psylocke",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:60,minutos_max:60,minutos:60,minutos_label:"60",longitud:"Moderado",categorias:["Expansion for Base-game","Card Game","Comic Book / Strip","Fighting"],categorias_str:"Expansion for Base-game, Card Game, Comic Book / Strip, Fighting",mecanicas:["Cooperative Game","Hand Management","Solo / Solitaire Game","Variable Player Powers"],mecanicas_str:"Cooperative Game, Hand Management, Solo / Solitaire Game, Variable Player Powers",score:8.3,complejidad_num:3,complejidad:"Medio"},{juego:"marvel champions: angel ",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:60,minutos_max:60,minutos:60,minutos_label:"60",longitud:"Moderado",categorias:["Expansion for Base-game","Comic Book / Strip","Fighting"],categorias_str:"Expansion for Base-game, Comic Book / Strip, Fighting",mecanicas:["Cooperative Game","Hand Management","Solo / Solitaire Game","Variable Player Powers"],mecanicas_str:"Cooperative Game, Hand Management, Solo / Solitaire Game, Variable Player Powers",score:8.3,complejidad_num:3,complejidad:"Medio"},{juego:"Heat: vision de tunel",jug_min:1,jug_max:7,jugadores:"1-7",minutos_min:30,minutos_max:60,minutos:45,minutos_label:"30-60",longitud:"Corto",categorias:["Expansion for Base-game","Racing","Sports"],categorias_str:"Expansion for Base-game, Racing, Sports",mecanicas:["Catch the Leader","Hand Management","Push Your Luck","Race","Simulation","Simultaneous Action Selection","Track Movement","Variable Set-up"],mecanicas_str:"Catch the Leader, Hand Management, Push Your Luck, Race, Simulation, Simultaneous Action Selection, Track Movement, Variable Set-up",score:8.2,complejidad_num:2.2,complejidad:"Medio-Liviano"},{juego:"Brass lancashire",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:60,minutos_max:120,minutos:90,minutos_label:"60-120",longitud:"Medio-Largo",categorias:["Economic","Educational","Industry / Manufacturing","Post-Napoleonic","Transportation"],categorias_str:"Economic, Educational, Industry / Manufacturing, Post-Napoleonic, Transportation",mecanicas:["Chaining","End Game Bonuses","Hand Management","Income","Loans","Market","Multi-Use Cards","Network and Route Building","Ownership","Tags","Tech Trees / Tech Tracks","Tile Placement","Turn Order: Stat-Based","Variable Set-up"],mecanicas_str:"Chaining, End Game Bonuses, Hand Management, Income, Loans, Market, Multi-Use Cards, Network and Route Building, Ownership, Tags, Tech Trees / Tech Tracks, Tile Placement, Turn Order: Stat-Based, Variable Set-up",score:8.2,complejidad_num:3.9,complejidad:"Pesado"},{juego:"marvel champions: silk",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:120,minutos:82,minutos_label:"45-120",longitud:"Medio-Largo",categorias:["Expansion for Base-game","Card Game","Math","Science Fiction"],categorias_str:"Expansion for Base-game, Card Game, Math, Science Fiction",mecanicas:["Card Play Conflict Resolution","Chaining","Deck Construction","Scenario / Mission / Campaign Game"],mecanicas_str:"Card Play Conflict Resolution, Chaining, Deck Construction, Scenario / Mission / Campaign Game",score:8.2,complejidad_num:3,complejidad:"Medio"},{juego:"marvel champions: falcon",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:120,minutos:82,minutos_label:"45-120",longitud:"Medio-Largo",categorias:["Expansion for Base-game","Card Game","Science Fiction"],categorias_str:"Expansion for Base-game, Card Game, Science Fiction",mecanicas:["Deck Construction","Events","Multi-Use Cards"],mecanicas_str:"Deck Construction, Events, Multi-Use Cards",score:8.2,complejidad_num:3,complejidad:"Medio"},{juego:"Cyclades edicion legendaria",jug_min:2,jug_max:6,jugadores:"2-6",minutos_min:60,minutos_max:90,minutos:75,minutos_label:"60-90",longitud:"Moderado",categorias:["Ancient","City Building","Civilization","Fighting","Mythology","Nautical"],categorias_str:"Ancient, City Building, Civilization, Fighting, Mythology, Nautical",mecanicas:["Area Majority / Influence","Area Movement","Auction / Bidding","Auction: Fixed Placement","Constrained Bidding","Dice Rolling","Set Collection","Turn Order: Auction","Variable Phase Order","Variable Set-up"],mecanicas_str:"Area Majority / Influence, Area Movement, Auction / Bidding, Auction: Fixed Placement, Constrained Bidding, Dice Rolling, Set Collection, Turn Order: Auction, Variable Phase Order, Variable Set-up",score:8.2,complejidad_num:2.9,complejidad:"Medio"},{juego:"Great western trail Argentina",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:75,minutos_max:150,minutos:112,minutos_label:"75-150",longitud:"Medio-Largo",categorias:["Animals"],categorias_str:"Animals",mecanicas:["Deck","Bag","and Pool Building","Hand Management","Ownership","Set Collection","Solo / Solitaire Game","Track Movement","Variable Set-up"],mecanicas_str:"Deck, Bag, and Pool Building, Hand Management, Ownership, Set Collection, Solo / Solitaire Game, Track Movement, Variable Set-up",score:8.2,complejidad_num:3.9,complejidad:"Pesado"},{juego:"El banquete de Odin",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:30,minutos_max:120,minutos:75,minutos_label:"30-120",longitud:"Moderado",categorias:["Animals","Farming","Industry / Manufacturing","Medieval","Puzzle"],categorias_str:"Animals, Farming, Industry / Manufacturing, Medieval, Puzzle",mecanicas:["Action Points","Automatic Resource Growth","Dice Rolling","Enclosure","Grid Coverage","Hand Management","Income","Layering","Pattern Recognition","Push Your Luck","Solo / Solitaire Game","Square Grid","Tile Placement","Turn Order: Pass Order","Worker Placement"],mecanicas_str:"Action Points, Automatic Resource Growth, Dice Rolling, Enclosure, Grid Coverage, Hand Management, Income, Layering, Pattern Recognition, Push Your Luck, Solo / Solitaire Game, Square Grid, Tile Placement, Turn Order: Pass Order, Worker Placement",score:8.2,complejidad_num:3.9,complejidad:"Pesado"},{juego:"marvel champions: iceman",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:60,minutos:52,minutos_label:"45-60",longitud:"Moderado",categorias:["Expansion for Base-game","Card Game"],categorias_str:"Expansion for Base-game, Card Game",mecanicas:[],mecanicas_str:"",score:8.1,complejidad_num:3,complejidad:"Medio"},{juego:"marvel champions: black panther",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:120,minutos:82,minutos_label:"45-120",longitud:"Medio-Largo",categorias:["Expansion for Base-game","Card Game","Science Fiction"],categorias_str:"Expansion for Base-game, Card Game, Science Fiction",mecanicas:["Campaign / Battle Card Driven","Deck Construction","Events","Multi-Use Cards"],mecanicas_str:"Campaign / Battle Card Driven, Deck Construction, Events, Multi-Use Cards",score:8.1,complejidad_num:3,complejidad:"Medio"},{juego:"Sky team",jug_min:2,jug_max:2,jugadores:"2-2",minutos_min:20,minutos_max:20,minutos:20,minutos_label:"20",longitud:"Corto",categorias:["Aviation / Flight","Dice"],categorias_str:"Aviation / Flight, Dice",mecanicas:["Communication Limits","Cooperative Game","Dice Rolling","Scenario / Mission / Campaign Game","Turn Order: Progressive","Variable Player Powers","Variable Set-up","Worker Placement with Dice Workers"],mecanicas_str:"Communication Limits, Cooperative Game, Dice Rolling, Scenario / Mission / Campaign Game, Turn Order: Progressive, Variable Player Powers, Variable Set-up, Worker Placement with Dice Workers",score:8.1,complejidad_num:2,complejidad:"Medio-Liviano"},{juego:"Sleeping gods",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:60,minutos_max:120,minutos:90,minutos_label:"60-120",longitud:"Medio-Largo",categorias:["Adventure","Exploration","Fantasy","Fighting","Nautical"],categorias_str:"Adventure, Exploration, Fantasy, Fighting, Nautical",mecanicas:["Action Points","Cooperative Game","Events","Hand Management","Narrative Choice / Paragraph","Push Your Luck","Scenario / Mission / Campaign Game","Solo / Solitaire Game","Storytelling"],mecanicas_str:"Action Points, Cooperative Game, Events, Hand Management, Narrative Choice / Paragraph, Push Your Luck, Scenario / Mission / Campaign Game, Solo / Solitaire Game, Storytelling",score:8.1,complejidad_num:3.3,complejidad:"Medio-Pesado"},{juego:"Anachrony",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:30,minutos_max:120,minutos:75,minutos_label:"30-120",longitud:"Moderado",categorias:["Economic","Science Fiction"],categorias_str:"Economic, Science Fiction",mecanicas:["Contracts","Dice Rolling","Die Icon Resolution","End Game Bonuses","Events","Map Reduction","Open Drafting","Set Collection","Solo / Solitaire Game","Turn Order: Claim Action","Variable Player Powers","Variable Set-up","Worker Placement","Worker Placement","Different Worker Types"],mecanicas_str:"Contracts, Dice Rolling, Die Icon Resolution, End Game Bonuses, Events, Map Reduction, Open Drafting, Set Collection, Solo / Solitaire Game, Turn Order: Claim Action, Variable Player Powers, Variable Set-up, Worker Placement, Worker Placement, Different Worker Types",score:8.1,complejidad_num:4,complejidad:"Pesado"},{juego:"Arkham horror el juego de cartas",jug_min:1,jug_max:2,jugadores:"1-2",minutos_min:60,minutos_max:120,minutos:90,minutos_label:"60-120",longitud:"Medio-Largo",categorias:["Adventure","Card Game","Collectible Components","Exploration","Horror","Novel-based"],categorias_str:"Adventure, Card Game, Collectible Components, Exploration, Horror, Novel-based",mecanicas:["Action Points","Area Movement","Communication Limits","Cooperative Game","Deck Construction","Events","Hand Management","Map Deformation","Modular Board","Player Elimination","Push Your Luck","Role Playing","Scenario / Mission / Campaign Game","Solo / Solitaire Game","Stat Check Resolution","Variable Player Powers"],mecanicas_str:"Action Points, Area Movement, Communication Limits, Cooperative Game, Deck Construction, Events, Hand Management, Map Deformation, Modular Board, Player Elimination, Push Your Luck, Role Playing, Scenario / Mission / Campaign Game, Solo / Solitaire Game, Stat Check Resolution, Variable Player Powers",score:8.1,complejidad_num:3.6,complejidad:"Medio-Pesado"},{juego:"marvel champions: drax",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:90,minutos:68,minutos_label:"45-90",longitud:"Moderado",categorias:["Expansion for Base-game","Card Game","Collectible Components","Comic Book / Strip"],categorias_str:"Expansion for Base-game, Card Game, Collectible Components, Comic Book / Strip",mecanicas:["Cooperative Game","Deck Construction","Hand Management","Scenario / Mission / Campaign Game","Solo / Solitaire Game","Variable Player Powers","Variable Set-up"],mecanicas_str:"Cooperative Game, Deck Construction, Hand Management, Scenario / Mission / Campaign Game, Solo / Solitaire Game, Variable Player Powers, Variable Set-up",score:8,complejidad_num:2.8,complejidad:"Medio"},{juego:"Orleans",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:90,minutos_max:90,minutos:90,minutos_label:"90",longitud:"Medio-Largo",categorias:["Medieval","Religious","Travel"],categorias_str:"Medieval, Religious, Travel",mecanicas:["Contracts","Deck","Bag","and Pool Building","End Game Bonuses","Events","Kill Steal","Point to Point Movement","Simultaneous Action Selection","Tech Trees / Tech Tracks","Turn Order: Progressive","Variable Set-up","Worker Placement","Different Worker Types"],mecanicas_str:"Contracts, Deck, Bag, and Pool Building, End Game Bonuses, Events, Kill Steal, Point to Point Movement, Simultaneous Action Selection, Tech Trees / Tech Tracks, Turn Order: Progressive, Variable Set-up, Worker Placement, Different Worker Types",score:8,complejidad_num:3,complejidad:"Medio"},{juego:"marvel champions: jubilee",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:60,minutos:52,minutos_label:"45-60",longitud:"Moderado",categorias:["Expansion for Base-game","Card Game"],categorias_str:"Expansion for Base-game, Card Game",mecanicas:[],mecanicas_str:"",score:7.9,complejidad_num:3,complejidad:"Medio"},{juego:"marvel champions héroes reunidos 2 ",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:45,minutos_max:90,minutos:68,minutos_label:"45-90",longitud:"Moderado",categorias:["Expansion for Base-game","Card Game","Collectible Components","Comic Book / Strip","Fighting"],categorias_str:"Expansion for Base-game, Card Game, Collectible Components, Comic Book / Strip, Fighting",mecanicas:["Cooperative Game","Deck Construction","Hand Management","Scenario / Mission / Campaign Game","Solo / Solitaire Game","Turn Order: Progressive","Variable Player Powers","Variable Set-up"],mecanicas_str:"Cooperative Game, Deck Construction, Hand Management, Scenario / Mission / Campaign Game, Solo / Solitaire Game, Turn Order: Progressive, Variable Player Powers, Variable Set-up",score:7.9,complejidad_num:0,complejidad:"Liviano"},{juego:"Señor de los anillos viajes por la tierra media",jug_min:1,jug_max:5,jugadores:"1-5",minutos_min:60,minutos_max:120,minutos:90,minutos_label:"60-120",longitud:"Medio-Largo",categorias:["Adventure","Exploration","Fantasy","Fighting","Novel-based"],categorias_str:"Adventure, Exploration, Fantasy, Fighting, Novel-based",mecanicas:["Action Points","Area Movement","Campaign / Battle Card Driven","Cooperative Game","Deck","Bag","and Pool Building","Map Addition","Modular Board","Role Playing","Scenario / Mission / Campaign Game","Solo / Solitaire Game","Stat Check Resolution","Variable Player Powers"],mecanicas_str:"Action Points, Area Movement, Campaign / Battle Card Driven, Cooperative Game, Deck, Bag, and Pool Building, Map Addition, Modular Board, Role Playing, Scenario / Mission / Campaign Game, Solo / Solitaire Game, Stat Check Resolution, Variable Player Powers",score:7.9,complejidad_num:2.7,complejidad:"Medio"},{juego:"El muro de Adriano",jug_min:1,jug_max:6,jugadores:"1-6",minutos_min:30,minutos_max:60,minutos:45,minutos_label:"30-60",longitud:"Corto",categorias:["Ancient","City Building"],categorias_str:"Ancient, City Building",mecanicas:["Hand Management","Paper-and-Pencil","Solo / Solitaire Game","Tech Trees / Tech Tracks"],mecanicas_str:"Hand Management, Paper-and-Pencil, Solo / Solitaire Game, Tech Trees / Tech Tracks",score:7.9,complejidad_num:3.2,complejidad:"Medio"},{juego:"Undaunted Normandy",jug_min:2,jug_max:2,jugadores:"2-2",minutos_min:45,minutos_max:60,minutos:52,minutos_label:"45-60",longitud:"Moderado",categorias:["Wargame","World War II"],categorias_str:"Wargame, World War II",mecanicas:["Deck","Bag","and Pool Building","Dice Rolling","Hand Management","Modular Board","Open Drafting","Scenario / Mission / Campaign Game","Simulation"],mecanicas_str:"Deck, Bag, and Pool Building, Dice Rolling, Hand Management, Modular Board, Open Drafting, Scenario / Mission / Campaign Game, Simulation",score:7.8,complejidad_num:2.3,complejidad:"Medio-Liviano"},{juego:"Challengers torneo de verano",jug_min:1,jug_max:8,jugadores:"1-8",minutos_min:45,minutos_max:45,minutos:45,minutos_label:"45",longitud:"Corto",categorias:["Animals","Card Game","Sports"],categorias_str:"Animals, Card Game, Sports",mecanicas:["Deck Construction","Deck","Bag","and Pool Building","Finale Ending","Hand Management","Open Drafting"],mecanicas_str:"Deck Construction, Deck, Bag, and Pool Building, Finale Ending, Hand Management, Open Drafting",score:7.8,complejidad_num:2.1,complejidad:"Medio-Liviano"},{juego:"War chest",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:30,minutos_max:30,minutos:30,minutos_label:"30",longitud:"Corto",categorias:["Abstract Strategy","Medieval","Wargame"],categorias_str:"Abstract Strategy, Medieval, Wargame",mecanicas:["Area Majority / Influence","Deck","Bag","and Pool Building","Delayed Purchase","Grid Movement","Hand Management","Hexagon Grid","Team-Based Game","Turn Order: Claim Action","Variable Player Powers"],mecanicas_str:"Area Majority / Influence, Deck, Bag, and Pool Building, Delayed Purchase, Grid Movement, Hand Management, Hexagon Grid, Team-Based Game, Turn Order: Claim Action, Variable Player Powers",score:7.8,complejidad_num:2.3,complejidad:"Medio-Liviano"},{juego:"Arkwright",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:120,minutos_max:240,minutos:180,minutos_label:"120-240",longitud:"Largo",categorias:["Economic","Industry / Manufacturing"],categorias_str:"Economic, Industry / Manufacturing",mecanicas:["Commodity Speculation","Contracts","End Game Bonuses","Events","Income","Investment","Loans","Market","Simulation","Stock Holding","Tech Trees / Tech Tracks","Tile Placement","Turn Order: Stat-Based","Variable Phase Order","Variable Set-up","Victory Points as a Resource","Worker Placement"],mecanicas_str:"Commodity Speculation, Contracts, End Game Bonuses, Events, Income, Investment, Loans, Market, Simulation, Stock Holding, Tech Trees / Tech Tracks, Tile Placement, Turn Order: Stat-Based, Variable Phase Order, Variable Set-up, Victory Points as a Resource, Worker Placement",score:7.8,complejidad_num:4.6,complejidad:"Pesado"},{juego:"Tekhenu: el obelisco del sol ",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:60,minutos_max:120,minutos:90,minutos_label:"60-120",longitud:"Medio-Largo",categorias:["Ancient","Dice","Mythology"],categorias_str:"Ancient, Dice, Mythology",mecanicas:["Action Drafting","Income","Open Drafting","Pattern Building","Turn Order: Stat-Based","Variable Set-up"],mecanicas_str:"Action Drafting, Income, Open Drafting, Pattern Building, Turn Order: Stat-Based, Variable Set-up",score:7.7,complejidad_num:4.1,complejidad:"Pesado"},{juego:"El dilema del rey",jug_min:3,jug_max:5,jugadores:"3-5",minutos_min:45,minutos_max:60,minutos:52,minutos_label:"45-60",longitud:"Moderado",categorias:["Fantasy","Negotiation","Political"],categorias_str:"Fantasy, Negotiation, Political",mecanicas:["Bias","Bribery","End Game Bonuses","Legacy Game","Storytelling","Voting"],mecanicas_str:"Bias, Bribery, End Game Bonuses, Legacy Game, Storytelling, Voting",score:7.7,complejidad_num:2.2,complejidad:"Medio-Liviano"},{juego:"Bonfire",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:70,minutos_max:100,minutos:85,minutos_label:"70-100",longitud:"Medio-Largo",categorias:["Fantasy"],categorias_str:"Fantasy",mecanicas:["Contracts","Market","Pattern Building","Point to Point Movement","Set Collection","Solo / Solitaire Game","Tile Placement"],mecanicas_str:"Contracts, Market, Pattern Building, Point to Point Movement, Set Collection, Solo / Solitaire Game, Tile Placement",score:7.6,complejidad_num:3.6,complejidad:"Medio-Pesado"},{juego:"Just one",jug_min:3,jug_max:7,jugadores:"3-7",minutos_min:20,minutos_max:60,minutos:40,minutos_label:"20-60",longitud:"Corto",categorias:["Deduction","Party Game","Word Game"],categorias_str:"Deduction, Party Game, Word Game",mecanicas:["Communication Limits","Cooperative Game","Deduction","Score-and-Reset Game"],mecanicas_str:"Communication Limits, Cooperative Game, Deduction, Score-and-Reset Game",score:7.6,complejidad_num:1,complejidad:"Liviano"},{juego:"Arte moderno",jug_min:3,jug_max:5,jugadores:"3-5",minutos_min:45,minutos_max:45,minutos:45,minutos_label:"45",longitud:"Corto",categorias:["Card Game","Economic"],categorias_str:"Card Game, Economic",mecanicas:["Auction / Bidding","Auction: English","Auction: Once Around","Auction: Sealed Bid","Auction: Turn Order Until Pass","Commodity Speculation","Hand Management","Victory Points as a Resource"],mecanicas_str:"Auction / Bidding, Auction: English, Auction: Once Around, Auction: Sealed Bid, Auction: Turn Order Until Pass, Commodity Speculation, Hand Management, Victory Points as a Resource",score:7.5,complejidad_num:2.3,complejidad:"Medio-Liviano"},{juego:"Arkham lovecraft letter",jug_min:2,jug_max:6,jugadores:"2-6",minutos_min:15,minutos_max:20,minutos:18,minutos_label:"15-20",longitud:"Corto",categorias:["Card Game","Horror"],categorias_str:"Card Game, Horror",mecanicas:["Hand Management","Player Elimination","Score-and-Reset Game","Take That"],mecanicas_str:"Hand Management, Player Elimination, Score-and-Reset Game, Take That",score:7.5,complejidad_num:1.5,complejidad:"Liviano"},{juego:"Las Vegas royale",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:45,minutos_max:60,minutos:52,minutos_label:"45-60",longitud:"Moderado",categorias:["Dice"],categorias_str:"Dice",mecanicas:["Area Majority / Influence","Dice Rolling"],mecanicas_str:"Area Majority / Influence, Dice Rolling",score:7.5,complejidad_num:1.4,complejidad:"Liviano"},{juego:"Calico",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:30,minutos_max:45,minutos:38,minutos_label:"30-45",longitud:"Corto",categorias:["Animals","Puzzle"],categorias_str:"Animals, Puzzle",mecanicas:["Enclosure","End Game Bonuses","Grid Coverage","Hexagon Grid","Open Drafting","Pattern Building","Set Collection","Solo / Solitaire Game","Tile Placement"],mecanicas_str:"Enclosure, End Game Bonuses, Grid Coverage, Hexagon Grid, Open Drafting, Pattern Building, Set Collection, Solo / Solitaire Game, Tile Placement",score:7.5,complejidad_num:2.2,complejidad:"Medio-Liviano"},{juego:"Smart 10",jug_min:2,jug_max:8,jugadores:"2-8",minutos_min:20,minutos_max:20,minutos:20,minutos_label:"20",longitud:"Corto",categorias:["Expansion for Base-game","Trivia"],categorias_str:"Expansion for Base-game, Trivia",mecanicas:[],mecanicas_str:"",score:7.4,complejidad_num:1,complejidad:"Liviano"},{juego:"Qe",jug_min:3,jug_max:5,jugadores:"3-5",minutos_min:45,minutos_max:45,minutos:45,minutos_label:"45",longitud:"Corto",categorias:["Economic"],categorias_str:"Economic",mecanicas:["Auction / Bidding","Auction: Sealed Bid","End Game Bonuses","Memory","Set Collection"],mecanicas_str:"Auction / Bidding, Auction: Sealed Bid, End Game Bonuses, Memory, Set Collection",score:7.4,complejidad_num:1.5,complejidad:"Liviano"},{juego:"Aventureros al tren",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:30,minutos_max:60,minutos:45,minutos_label:"30-60",longitud:"Corto",categorias:["Trains"],categorias_str:"Trains",mecanicas:["Connections","Contracts","End Game Bonuses","Hand Management","Network and Route Building","Open Drafting","Push Your Luck","Set Collection"],mecanicas_str:"Connections, Contracts, End Game Bonuses, Hand Management, Network and Route Building, Open Drafting, Push Your Luck, Set Collection",score:7.4,complejidad_num:1.8,complejidad:"Medio-Liviano"},{juego:"Cubitos",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:30,minutos_max:60,minutos:45,minutos_label:"30-60",longitud:"Corto",categorias:["Dice","Racing"],categorias_str:"Dice, Racing",mecanicas:["Catch the Leader","Deck","Bag","and Pool Building","Delayed Purchase","Dice Rolling","Grid Movement","Market","Push Your Luck","Race","Re-rolling and Locking","Variable Set-up"],mecanicas_str:"Catch the Leader, Deck, Bag, and Pool Building, Delayed Purchase, Dice Rolling, Grid Movement, Market, Push Your Luck, Race, Re-rolling and Locking, Variable Set-up",score:7.4,complejidad_num:2.2,complejidad:"Medio-Liviano"},{juego:"Mansiones de la locura",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:120,minutos_max:180,minutos:150,minutos_label:"120-180",longitud:"Largo",categorias:["Adventure","Exploration","Fantasy","Fighting","Horror","Miniatures","Murder / Mystery","Puzzle"],categorias_str:"Adventure, Exploration, Fantasy, Fighting, Horror, Miniatures, Murder / Mystery, Puzzle",mecanicas:["Area Movement","Dice Rolling","Hand Management","Modular Board","Pick-up and Deliver","Role Playing","Scenario / Mission / Campaign Game","Team-Based Game","Variable Player Powers"],mecanicas_str:"Area Movement, Dice Rolling, Hand Management, Modular Board, Pick-up and Deliver, Role Playing, Scenario / Mission / Campaign Game, Team-Based Game, Variable Player Powers",score:7.3,complejidad_num:3.2,complejidad:"Medio"},{juego:"Paris la cite de la lumiere",jug_min:2,jug_max:2,jugadores:"2-2",minutos_min:30,minutos_max:30,minutos:30,minutos_label:"30",longitud:"Corto",categorias:["Abstract Strategy","Puzzle","Territory Building"],categorias_str:"Abstract Strategy, Puzzle, Territory Building",mecanicas:["Action Drafting","Grid Coverage","Modular Board","Open Drafting","Square Grid","Tile Placement"],mecanicas_str:"Action Drafting, Grid Coverage, Modular Board, Open Drafting, Square Grid, Tile Placement",score:7.2,complejidad_num:2,complejidad:"Medio-Liviano"},{juego:"Mysterium",jug_min:2,jug_max:7,jugadores:"2-7",minutos_min:42,minutos_max:42,minutos:42,minutos_label:"42",longitud:"Corto",categorias:["Deduction","Murder / Mystery","Party Game","Real-time"],categorias_str:"Deduction, Murder / Mystery, Party Game, Real-time",mecanicas:["Communication Limits","Cooperative Game","Deduction","Finale Ending","Hand Management","Pattern Recognition","Real-Time","Storytelling","Voting"],mecanicas_str:"Communication Limits, Cooperative Game, Deduction, Finale Ending, Hand Management, Pattern Recognition, Real-Time, Storytelling, Voting",score:7.2,complejidad_num:1.9,complejidad:"Medio-Liviano"},{juego:"Small world",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:40,minutos_max:80,minutos:60,minutos_label:"40-80",longitud:"Moderado",categorias:["Fantasy","Fighting","Territory Building"],categorias_str:"Fantasy, Fighting, Territory Building",mecanicas:["Area Majority / Influence","Area Movement","Dice Rolling","Hidden Victory Points","Increase Value of Unchosen Resources","Variable Player Powers","Variable Set-up","Victory Points as a Resource"],mecanicas_str:"Area Majority / Influence, Area Movement, Dice Rolling, Hidden Victory Points, Increase Value of Unchosen Resources, Variable Player Powers, Variable Set-up, Victory Points as a Resource",score:7.2,complejidad_num:2.3,complejidad:"Medio-Liviano"},{juego:"Cytosis",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:60,minutos_max:90,minutos:75,minutos_label:"60-90",longitud:"Moderado",categorias:["Economic","Educational","Expansion for Base-game","Industry / Manufacturing","Medical"],categorias_str:"Economic, Educational, Expansion for Base-game, Industry / Manufacturing, Medical",mecanicas:["Set Collection","Worker Placement"],mecanicas_str:"Set Collection, Worker Placement",score:7.2,complejidad_num:2,complejidad:"Medio-Liviano"},{juego:"Monkey palace",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:45,minutos_max:45,minutos:45,minutos_label:"45",longitud:"Corto",categorias:["Abstract Strategy","Animals","Children's Game"],categorias_str:"Abstract Strategy, Animals, Children's Game",mecanicas:["End Game Bonuses","Hot Potato","Income","Open Drafting","Pattern Building","Pieces as Map","Three Dimensional Movement","Tile Placement"],mecanicas_str:"End Game Bonuses, Hot Potato, Income, Open Drafting, Pattern Building, Pieces as Map, Three Dimensional Movement, Tile Placement",score:7.2,complejidad_num:2,complejidad:"Medio-Liviano"},{juego:"High society",jug_min:3,jug_max:5,jugadores:"3-5",minutos_min:15,minutos_max:30,minutos:22,minutos_label:"15-30",longitud:"Corto",categorias:["Card Game"],categorias_str:"Card Game",mecanicas:["Auction / Bidding","Auction: Turn Order Until Pass","Constrained Bidding","Hand Management"],mecanicas_str:"Auction / Bidding, Auction: Turn Order Until Pass, Constrained Bidding, Hand Management",score:7.2,complejidad_num:1.5,complejidad:"Liviano"},{juego:"Kitchen rush",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:30,minutos_max:45,minutos:38,minutos_label:"30-45",longitud:"Corto",categorias:["Real-time"],categorias_str:"Real-time",mecanicas:["Action Timer","Cooperative Game","Real-Time","Simulation","Solo / Solitaire Game","Worker Placement"],mecanicas_str:"Action Timer, Cooperative Game, Real-Time, Simulation, Solo / Solitaire Game, Worker Placement",score:7.2,complejidad_num:2.2,complejidad:"Medio-Liviano"},{juego:"Namiji",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:30,minutos_max:45,minutos:38,minutos_label:"30-45",longitud:"Corto",categorias:["Travel"],categorias_str:"Travel",mecanicas:["Push Your Luck","Set Collection","Track Movement","Turn Order: Time Track","Variable Player Powers"],mecanicas_str:"Push Your Luck, Set Collection, Track Movement, Turn Order: Time Track, Variable Player Powers",score:7.1,complejidad_num:1.7,complejidad:"Liviano"},{juego:"Hanabi",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:25,minutos_max:25,minutos:25,minutos_label:"25",longitud:"Corto",categorias:["Card Game","Deduction","Memory"],categorias_str:"Card Game, Deduction, Memory",mecanicas:["Communication Limits","Cooperative Game","Hand Management","Memory","Ordering","Set Collection"],mecanicas_str:"Communication Limits, Cooperative Game, Hand Management, Memory, Ordering, Set Collection",score:7,complejidad_num:1.7,complejidad:"Liviano"},{juego:"Ranking top",jug_min:3,jug_max:5,jugadores:"3-5",minutos_min:15,minutos_max:25,minutos:20,minutos_label:"15-25",longitud:"Corto",categorias:["Card Game","Movies / TV / Radio theme","Music","Racing"],categorias_str:"Card Game, Movies / TV / Radio theme, Music, Racing",mecanicas:["Card Play Conflict Resolution","Hand Management","Interrupts","Multi-Use Cards","Race","Take That"],mecanicas_str:"Card Play Conflict Resolution, Hand Management, Interrupts, Multi-Use Cards, Race, Take That",score:7,complejidad_num:1,complejidad:"Liviano"},{juego:"Amanecer rojo",jug_min:1,jug_max:6,jugadores:"1-6",minutos_min:45,minutos_max:60,minutos:52,minutos_label:"45-60",longitud:"Moderado",categorias:["Card Game","Novel-based","Science Fiction"],categorias_str:"Card Game, Novel-based, Science Fiction",mecanicas:["Dice Rolling","End Game Bonuses","Hand Management","Open Drafting","Set Collection","Solo / Solitaire Game","Take That","Variable Player Powers"],mecanicas_str:"Dice Rolling, End Game Bonuses, Hand Management, Open Drafting, Set Collection, Solo / Solitaire Game, Take That, Variable Player Powers",score:7,complejidad_num:2.3,complejidad:"Medio-Liviano"},{juego:"Doggy style",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:20,minutos_max:40,minutos:30,minutos_label:"20-40",longitud:"Corto",categorias:["Animals","Card Game","Humor","Movies / TV / Radio theme","Party Game"],categorias_str:"Animals, Card Game, Humor, Movies / TV / Radio theme, Party Game",mecanicas:["Hand Management","Set Collection"],mecanicas_str:"Hand Management, Set Collection",score:6.9,complejidad_num:2,complejidad:"Medio-Liviano"},{juego:"No puedo parar",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:30,minutos_max:30,minutos:30,minutos_label:"30",longitud:"Corto",categorias:["Dice"],categorias_str:"Dice",mecanicas:["Dice Rolling","Push Your Luck","Race","Roll / Spin and Move","Track Movement"],mecanicas_str:"Dice Rolling, Push Your Luck, Race, Roll / Spin and Move, Track Movement",score:6.9,complejidad_num:1.1,complejidad:"Liviano"},{juego:"Ghost adventure",jug_min:1,jug_max:4,jugadores:"1-4",minutos_min:15,minutos_max:30,minutos:22,minutos_label:"15-30",longitud:"Corto",categorias:["Action / Dexterity"],categorias_str:"Action / Dexterity",mecanicas:["Cooperative Game","Scenario / Mission / Campaign Game"],mecanicas_str:"Cooperative Game, Scenario / Mission / Campaign Game",score:6.8,complejidad_num:1.2,complejidad:"Liviano"},{juego:"Feria de las pulgas ",jug_min:3,jug_max:8,jugadores:"3-8",minutos_min:30,minutos_max:90,minutos:60,minutos_label:"30-90",longitud:"Moderado",categorias:["Card Game","Economic","Party Game"],categorias_str:"Card Game, Economic, Party Game",mecanicas:["Commodity Speculation","Negotiation","Real-Time","Set Collection","Trading"],mecanicas_str:"Commodity Speculation, Negotiation, Real-Time, Set Collection, Trading",score:6.4,complejidad_num:1.2,complejidad:"Liviano"},{juego:"Nebula",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:20,minutos_max:20,minutos:20,minutos_label:"20",longitud:"Corto",categorias:["Abstract Strategy"],categorias_str:"Abstract Strategy",mecanicas:[],mecanicas_str:"",score:6.4,complejidad_num:0,complejidad:"Liviano"},{juego:"Burger ya ",jug_min:2,jug_max:5,jugadores:"2-5",minutos_min:15,minutos_max:15,minutos:15,minutos_label:"15",longitud:"Corto",categorias:["Card Game","Real-time"],categorias_str:"Card Game, Real-time",mecanicas:["Matching","Ordering","Real-Time"],mecanicas_str:"Matching, Ordering, Real-Time",score:6.4,complejidad_num:1,complejidad:"Liviano"},{juego:"Criaturas de las sombras",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:30,minutos_max:60,minutos:45,minutos_label:"30-60",longitud:"Corto",categorias:["Abstract Strategy","Animals","Children's Game","Fantasy"],categorias_str:"Abstract Strategy, Animals, Children's Game, Fantasy",mecanicas:["Action Points","Area Movement","Dice Rolling","Hexagon Grid","Player Elimination"],mecanicas_str:"Action Points, Area Movement, Dice Rolling, Hexagon Grid, Player Elimination",score:6.3,complejidad_num:2.3,complejidad:"Medio-Liviano"},{juego:"Throw throw burrito",jug_min:2,jug_max:6,jugadores:"2-6",minutos_min:15,minutos_max:15,minutos:15,minutos_label:"15",longitud:"Corto",categorias:["Action / Dexterity","Card Game","Party Game"],categorias_str:"Action / Dexterity, Card Game, Party Game",mecanicas:["Real-Time","Set Collection","Take That"],mecanicas_str:"Real-Time, Set Collection, Take That",score:6.2,complejidad_num:1.1,complejidad:"Liviano"},{juego:"Heat",jug_min:3,jug_max:5,jugadores:"3-5",minutos_min:20,minutos_max:30,minutos:25,minutos_label:"20-30",longitud:"Corto",categorias:["Card Game","Mafia","Print & Play"],categorias_str:"Card Game, Mafia, Print & Play",mecanicas:["Open Drafting","Simultaneous Action Selection"],mecanicas_str:"Open Drafting, Simultaneous Action Selection",score:6.1,complejidad_num:1.6,complejidad:"Liviano"},{juego:"Space base",jug_min:2,jug_max:4,jugadores:"2-4",minutos_min:0,minutos_max:0,minutos:0,minutos_label:"0",longitud:"Corto",categorias:["City Building","Economic","Industry / Manufacturing","Science Fiction"],categorias_str:"City Building, Economic, Industry / Manufacturing, Science Fiction",mecanicas:["Tile Placement"],mecanicas_str:"Tile Placement",score:5.3,complejidad_num:3,complejidad:"Medio"},{juego:"Five tribes ",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:4,complejidad_num:0,complejidad:"Liviano"},{juego:"Arkham 3ra edicion",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Arkham 3ra edicion: expa secretos de la orden",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Arkham horror lcg llaves de escarlata expansión de investigadores",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Brass: Birmingham deluxe",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Camel up 2.0 cartas",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Concordia 8va edicion",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"De 0 a 100",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Dice throne: Bárbaro vs Elfa lunar",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Frosthaven: stickers removibles",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Lisboa Deluxe ",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Marvel champions base",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"marvel champions: agentes de shield",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"marvel champions: la era del apocalipsis",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Oso park",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Rush MD",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Sky team: expansión turbulencia",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Smart 10: viajes paquete de ampliación",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Space base: expansión estación de mando ",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Strike Harry Potter",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Telestrations 80s y 90s expansión",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Throw throw burrito: Edición extrema para exteriores",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Times up party",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""},{juego:"Undaunted battle of Brittain",jug_min:null,jug_max:null,jugadores:"",minutos_min:null,minutos_max:null,minutos:null,minutos_label:"",longitud:"",categorias:[],categorias_str:"",mecanicas:[],mecanicas_str:"",score:NaN,complejidad_num:NaN,complejidad:""}],Ie={players:"",complexity:"",duration:"",search:""};let Ao=[],Ft=null,Yn=new Set,Ks=null,Qs=null;const Iu=document.querySelectorAll("[data-filter]"),Qn=document.querySelector("#search"),oi=document.querySelector("#matchCount"),ai=document.querySelector("#results"),bu=document.querySelector("#resetFilters"),Au=["Liviano","Medio-Liviano","Medio","Medio-Pesado","Pesado"];function vm(n){Ao=n;const e=document.querySelector('[data-filter="players"]');e&&e.children.length<=1&&[1,2,3,4,5,6,7,8].forEach(r=>{const i=document.createElement("button");i.type="button",i.className="chip",i.dataset.value=String(r),i.textContent=r,e.appendChild(i)}),Im(),qt()}function cr(n){Ao=n,qt()}function Su(n){Ft=n,qt()}function Em(n){Yn=new Set(n),qt()}function Tm(n){Ks=n}function wm(n){Qs=n}function Im(){Iu.forEach(n=>{n.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;const r=t.dataset.value??"",i=n.dataset.filter;Ie[i]===r&&r!==""?(Ie[i]="",n.querySelectorAll("button").forEach(s=>s.classList.toggle("is-active",s.dataset.value===""))):(Ie[i]=r,n.querySelectorAll("button").forEach(s=>s.classList.toggle("is-active",s===t)),r===""&&n.querySelectorAll("button").forEach(s=>{s.dataset.value===""&&s.classList.add("is-active")})),qt()})}),Qn&&Qn.addEventListener("input",()=>{Ie.search=Qn.value.trim().toLowerCase(),qt()}),bu&&bu.addEventListener("click",()=>{Ie.players=Ie.complexity=Ie.duration=Ie.search="",Qn&&(Qn.value=""),Iu.forEach(n=>{n.querySelectorAll("button").forEach(e=>{const t=e.dataset.value==="";e.classList.toggle("is-active",t)})}),qt()})}function bm(n){if(!Ie.players)return!0;const e=parseInt(Ie.players,10),t=n.jug_min,r=n.jug_max;return t!==null&&r!==null?e>=t&&e<=r:t!==null?e>=t:r!==null?e<=r:!0}function Am(n){if(!Ie.complexity)return!0;if(!n.complejidad)return!1;const e=Au.indexOf(Ie.complexity),t=Au.indexOf(n.complejidad);return e===-1?!0:t===-1?!1:t<=e}function Sm(n){return Ie.duration?n.longitud===Ie.duration:!0}function Pm(n){return Ie.search?[n.juego,n.categorias_str||"",n.mecanicas_str||""].join(" ").toLowerCase().includes(Ie.search):!0}function qt(){const n=Ao.filter(e=>bm(e)&&Am(e)&&Sm(e)&&Pm(e)).sort((e,t)=>{const r=e.score??0,i=t.score??0;return r===i?(e.juego||"").localeCompare(t.juego||""):i-r});Cm(n.length),Rm(n.slice(0,30))}function Cm(n){oi&&(n===0?oi.textContent="Sin coincidencias":n===1?oi.textContent="1 juego encontrado":oi.textContent=`${n} juegos encontrados`)}function Rm(n){if(ai){if(ai.innerHTML="",n.length===0){const e=document.createElement("div");e.className="empty",e.textContent="No hay juegos que cumplan esos filtros. Ajusta alguna condición.",ai.appendChild(e);return}n.forEach(e=>{const t=document.createElement("article");t.className="card";const r=e.score!==null&&e.score!==void 0?Number(e.score).toFixed(1):"–",i=e.minutos_label||e.longitud,s=i?e.minutos_label?`${i} min`:i:"Duración variable",a=e.jugadores||"Jugadores variables",u=e.complejidad||"Sin dato",l=Array.isArray(e.categorias)?e.categorias.slice(0,3):[],d=Array.isArray(e.mecanicas)?e.mecanicas.slice(0,2):[];let f="";e.ownerName&&(f=`<div style="font-size:12px; color:#f97316; margin-bottom:4px;">De: <strong>${e.ownerName}</strong></div>`);let y="";if(Ft&&(e.ownerId===Ft||!e.ownerId&&e.id),Ft&&e.ownerId===Ft){const D=e.lookingForPlayers||!1;y=`
                <div style="margin-top: 8px; border-top: 1px solid #eee; padding-top: 8px;">
                    <label style="font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 5px;">
                        <input type="checkbox" class="lfp-toggle" data-id="${e.id}" ${D?"checked":""}>
                        Busco gente para jugar
                    </label>
                </div>
            `}else e.lookingForPlayers&&(y=`
                <div style="margin-top: 8px; border-top: 1px solid #eee; padding-top: 8px;">
                    <span style="font-size: 12px; background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px;">
                        👋 Busca jugadores
                    </span>
                </div>
            `);let I="";if(Ft&&e.ownerId!==Ft&&e.id){const D=Yn.has(e.id),C=D?"#ef4444":"#ccc";I=`
                <button class="wishlist-btn" data-id="${e.id}" style="background:none; border:none; cursor:pointer; position: absolute; top: 10px; right: 10px; font-size: 20px; color: ${C};" title="${D?"Quitar de mi lista":"Quiero jugar este juego"}">
                    ♥
                </button>
            `}t.innerHTML=`
      ${I}
      <div>
        ${f}
        <h2>${e.juego||"Juego sin nombre"}</h2>
        <p class="subtitle">${e.categorias_str||"Sin categorías"}</p>
      </div>
      <div class="meta">
        <span><strong>${a}</strong> jugadores</span>
        <span>${s} min</span>
        <span>Complejidad: <strong>${u}</strong></span>
        <span class="score">Puntaje ${r}</span>
      </div>
      <div class="tags">
        ${l.map(D=>`<span>${D}</span>`).join("")}
        ${d.map(D=>`<span>${D}</span>`).join("")}
      </div>
      ${y}
    `;const S=t.querySelector(".lfp-toggle");S&&S.addEventListener("change",D=>{Ks&&Ks(e.id,D.target.checked)});const k=t.querySelector(".wishlist-btn");k&&k.addEventListener("click",D=>{const C=Yn.has(e.id);C?(Yn.delete(e.id),D.target.style.color="#ccc"):(Yn.add(e.id),D.target.style.color="#ef4444"),Qs&&Qs(e,!C)}),ai.appendChild(t)})}}var Pu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},km=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,f=s>>2,y=(s&3)<<4|u>>4;let I=(u&15)<<2|d>>6,S=d&63;l||(S=64,a||(I=64)),r.push(t[f],t[y],t[I],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):km(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||y==null)throw new Dm;const I=s<<2|u>>4;if(r.push(I),d!==64){const S=u<<4&240|d>>2;if(r.push(S),y!==64){const k=d<<6&192|y;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vm=function(n){const e=cl(n);return ll.encodeByteArray(e,!0)},Ai=function(n){return Vm(n).replace(/\./g,"")},hl=function(n){try{return ll.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=()=>Om().__FIREBASE_DEFAULTS__,Nm=()=>{if(typeof process>"u"||typeof Pu>"u")return;const n=Pu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hl(n[1]);return e&&JSON.parse(e)},$i=()=>{try{return Mm()||Nm()||jm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dl=n=>{var e,t;return(t=(e=$i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xm=n=>{const e=dl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ml=()=>{var n;return(n=$i())===null||n===void 0?void 0:n.config},fl=n=>{var e;return(e=$i())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ai(JSON.stringify(t)),Ai(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Um(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Bm(){var n;const e=(n=$i())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $m(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hm(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zm(){return!Bm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Km(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="FirebaseError";class ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qm,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Xm(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new ft(i,u,r)}}function Xm(n,e){return n.replace(Ym,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ym=/\{\$([^}]+)}/g;function Jm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Si(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Cu(s)&&Cu(a)){if(!Si(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Cu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zm(n,e){const t=new ef(n,e);return t.subscribe.bind(t)}class ef{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");tf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Rs),i.error===void 0&&(i.error=Rs),i.complete===void 0&&(i.complete=Rs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sf(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rf(n){return n===Ut?void 0:n}function sf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const af={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},uf=q.INFO,cf={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},lf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=cf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class So{constructor(e){this.name=e,this._logLevel=uf,this._logHandler=lf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?af[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const hf=(n,e)=>e.some(t=>n instanceof t);let Ru,ku;function df(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mf(){return ku||(ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gl=new WeakMap,Xs=new WeakMap,pl=new WeakMap,ks=new WeakMap,Po=new WeakMap;function ff(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(At(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gl.set(t,n)}).catch(()=>{}),Po.set(e,n),e}function gf(n){if(Xs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Xs.set(n,e)}let Ys={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pf(n){Ys=n(Ys)}function _f(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ds(this),e,...t);return pl.set(r,e.sort?e.sort():[e]),At(r)}:mf().includes(n)?function(...e){return n.apply(Ds(this),e),At(gl.get(this))}:function(...e){return At(n.apply(Ds(this),e))}}function yf(n){return typeof n=="function"?_f(n):(n instanceof IDBTransaction&&gf(n),hf(n,df())?new Proxy(n,Ys):n)}function At(n){if(n instanceof IDBRequest)return ff(n);if(ks.has(n))return ks.get(n);const e=yf(n);return e!==n&&(ks.set(n,e),Po.set(e,n)),e}const Ds=n=>Po.get(n);function vf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),u=At(a);return r&&a.addEventListener("upgradeneeded",l=>{r(At(a.result),l.oldVersion,l.newVersion,At(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Ef=["get","getKey","getAll","getAllKeys","count"],Tf=["put","add","delete","clear"],Vs=new Map;function Du(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vs.get(e))return Vs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Tf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ef.includes(t)))return;const s=async function(a,...u){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return Vs.set(e,s),s}pf(n=>({...n,get:(e,t,r)=>Du(e,t)||n.get(e,t,r),has:(e,t)=>!!Du(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(If(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function If(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Js="@firebase/app",Vu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new So("@firebase/app"),bf="@firebase/app-compat",Af="@firebase/analytics-compat",Sf="@firebase/analytics",Pf="@firebase/app-check-compat",Cf="@firebase/app-check",Rf="@firebase/auth",kf="@firebase/auth-compat",Df="@firebase/database",Vf="@firebase/data-connect",Of="@firebase/database-compat",Mf="@firebase/functions",Nf="@firebase/functions-compat",jf="@firebase/installations",xf="@firebase/installations-compat",Lf="@firebase/messaging",Ff="@firebase/messaging-compat",Uf="@firebase/performance",Bf="@firebase/performance-compat",Gf="@firebase/remote-config",$f="@firebase/remote-config-compat",qf="@firebase/storage",Hf="@firebase/storage-compat",zf="@firebase/firestore",Wf="@firebase/vertexai-preview",Kf="@firebase/firestore-compat",Qf="firebase",Xf="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]",Yf={[Js]:"fire-core",[bf]:"fire-core-compat",[Sf]:"fire-analytics",[Af]:"fire-analytics-compat",[Cf]:"fire-app-check",[Pf]:"fire-app-check-compat",[Rf]:"fire-auth",[kf]:"fire-auth-compat",[Df]:"fire-rtdb",[Vf]:"fire-data-connect",[Of]:"fire-rtdb-compat",[Mf]:"fire-fn",[Nf]:"fire-fn-compat",[jf]:"fire-iid",[xf]:"fire-iid-compat",[Lf]:"fire-fcm",[Ff]:"fire-fcm-compat",[Uf]:"fire-perf",[Bf]:"fire-perf-compat",[Gf]:"fire-rc",[$f]:"fire-rc-compat",[qf]:"fire-gcs",[Hf]:"fire-gcs-compat",[zf]:"fire-fst",[Kf]:"fire-fst-compat",[Wf]:"fire-vertex","fire-js":"fire-js",[Qf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map,Jf=new Map,eo=new Map;function Ou(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _n(n){const e=n.name;if(eo.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,n);for(const t of Pi.values())Ou(t,n);for(const t of Jf.values())Ou(t,n);return!0}function Co(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function it(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new Ar("app","Firebase",Zf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=Xf;function _l(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(t||(t=ml()),!t)throw St.create("no-options");const s=Pi.get(i);if(s){if(Si(t,s.options)&&Si(r,s.config))return s;throw St.create("duplicate-app",{appName:i})}const a=new of(i);for(const l of eo.values())a.addComponent(l);const u=new eg(t,r,a);return Pi.set(i,u),u}function yl(n=Zs){const e=Pi.get(n);if(!e&&n===Zs&&ml())return _l();if(!e)throw St.create("no-app",{appName:n});return e}function Pt(n,e,t){var r;let i=(r=Yf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(u.join(" "));return}_n(new Wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebase-heartbeat-database",ng=1,lr="firebase-heartbeat-store";let Os=null;function vl(){return Os||(Os=vf(tg,ng,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw St.create("idb-open",{originalErrorMessage:n.message})})),Os}async function rg(n){try{const t=(await vl()).transaction(lr),r=await t.objectStore(lr).get(El(n));return await t.done,r}catch(e){if(e instanceof ft)ct.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(t.message)}}}async function Mu(n,e){try{const r=(await vl()).transaction(lr,"readwrite");await r.objectStore(lr).put(e,El(n)),await r.done}catch(t){if(t instanceof ft)ct.warn(t.message);else{const r=St.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ct.warn(r.message)}}}function El(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=1024,sg=30*24*60*60*1e3;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ug(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=sg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nu(),{heartbeatsToSend:r,unsentEntries:i}=ag(this._heartbeatsCache.heartbeats),s=Ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ct.warn(t),""}}}function Nu(){return new Date().toISOString().substring(0,10)}function ag(n,e=ig){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ju(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ju(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ug{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?Km().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ju(n){return Ai(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n){_n(new Wt("platform-logger",e=>new wf(e),"PRIVATE")),_n(new Wt("heartbeat",e=>new og(e),"PRIVATE")),Pt(Js,Vu,n),Pt(Js,Vu,"esm2017"),Pt("fire-js","")}cg("");var lg="firebase",hg="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(lg,hg,"app");function Ro(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Tl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dg=Tl,wl=new Ar("auth","Firebase",Tl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new So("@firebase/auth");function mg(n,...e){Ci.logLevel<=q.WARN&&Ci.warn(`Auth (${Pn}): ${n}`,...e)}function gi(n,...e){Ci.logLevel<=q.ERROR&&Ci.error(`Auth (${Pn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw Do(n,...e)}function qe(n,...e){return Do(n,...e)}function ko(n,e,t){const r=Object.assign(Object.assign({},dg()),{[e]:t});return new Ar("auth","Firebase",r).create(e,{appName:n.name})}function Ht(n){return ko(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(n,"argument-error"),ko(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Do(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return wl.create(n,...e)}function j(n,e,...t){if(!n)throw Do(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gi(e),new Error(e)}function lt(n,e){n||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gg(){return xu()==="http:"||xu()==="https:"}function xu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gg()||$m()||"connection"in navigator)?navigator.onLine:!0}function _g(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=Um()||qm()}get(){return pg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Pr(3e4,6e4);function Oo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Cn(n,e,t,r,i={}){return bl(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=Sr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},s);return Gm()||(d.referrerPolicy="no-referrer"),Il.fetch()(Al(n,n.config.apiHost,t,u),d)})}async function bl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yg),e);try{const i=new Tg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ui(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ui(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ui(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ui(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ko(n,f,d);Ye(n,f)}}catch(i){if(i instanceof ft)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function Eg(n,e,t,r,i={}){const s=await Cn(n,e,t,r,i);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Al(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Vo(n.config,i):`${n.config.apiScheme}://${i}`}class Tg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),vg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ui(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=qe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(n,e){return Cn(n,"POST","/v1/accounts:delete",e)}async function Sl(n,e){return Cn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ig(n,e=!1){const t=De(n),r=await t.getIdToken(e),i=Mo(r);j(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:rr(Ms(i.auth_time)),issuedAtTime:rr(Ms(i.iat)),expirationTime:rr(Ms(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ms(n){return Number(n)*1e3}function Mo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const i=hl(t);return i?JSON.parse(i):(gi("Failed to decode base64 JWT payload"),null)}catch(i){return gi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lu(n){const e=Mo(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ft&&bg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rr(this.lastLoginAt),this.creationTime=rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(n){var e;const t=n.auth,r=await n.getIdToken(),i=await hr(n,Sl(t,{idToken:r}));j(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Pl(s.providerUserInfo):[],u=Pg(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(u!=null&&u.length),f=l?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new no(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function Sg(n){const e=De(n);await Ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pl(n){return n.map(e=>{var{providerId:t}=e,r=Ro(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(n,e){const t=await bl(n,{},async()=>{const r=Sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Al(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Il.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rg(n,e){return Cn(n,"POST","/v2/accounts:revokeToken",Oo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=Lu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Cg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new mn;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ag(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new no(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await hr(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ig(this,e)}reload(){return Sg(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(Ht(this.auth));const e=await this.getIdToken();return await hr(this,wg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,f;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(u=t.tenantId)!==null&&u!==void 0?u:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,L=(d=t.createdAt)!==null&&d!==void 0?d:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:G,emailVerified:Y,isAnonymous:ue,providerData:K,stsTokenManager:T}=t;j(G&&T,e,"internal-error");const g=mn.fromJSON(this.name,T);j(typeof G=="string",e,"internal-error"),vt(y,e.name),vt(I,e.name),j(typeof Y=="boolean",e,"internal-error"),j(typeof ue=="boolean",e,"internal-error"),vt(S,e.name),vt(k,e.name),vt(D,e.name),vt(C,e.name),vt(L,e.name),vt(B,e.name);const p=new ot({uid:G,auth:e,email:I,emailVerified:Y,displayName:y,isAnonymous:ue,photoURL:k,phoneNumber:S,tenantId:D,stsTokenManager:g,createdAt:L,lastLoginAt:B});return K&&Array.isArray(K)&&(p.providerData=K.map(v=>Object.assign({},v))),C&&(p._redirectEventId=C),p}static async _fromIdTokenResponse(e,t,r=!1){const i=new mn;i.updateFromServerResponse(t);const s=new ot({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ri(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Pl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new mn;u.updateFromIdToken(r);const l=new ot({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new no(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Map;function at(n){lt(n instanceof Function,"Expected a class definition");let e=Fu.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cl.type="NONE";const Uu=Cl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e,t){return`firebase:${n}:${e}:${t}`}class fn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pi(this.userKey,i.apiKey,s),this.fullPersistenceKey=pi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new fn(at(Uu),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||at(Uu);const a=pi(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const f=await d._get(a);if(f){const y=ot._fromJSON(e,f);d!==s&&(u=y),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fn(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new fn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ml(e))return"Blackberry";if(Nl(e))return"Webos";if(kl(e))return"Safari";if((e.includes("chrome/")||Dl(e))&&!e.includes("edge/"))return"Chrome";if(Ol(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rl(n=Se()){return/firefox\//i.test(n)}function kl(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dl(n=Se()){return/crios\//i.test(n)}function Vl(n=Se()){return/iemobile/i.test(n)}function Ol(n=Se()){return/android/i.test(n)}function Ml(n=Se()){return/blackberry/i.test(n)}function Nl(n=Se()){return/webos/i.test(n)}function No(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kg(n=Se()){var e;return No(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dg(){return Hm()&&document.documentMode===10}function jl(n=Se()){return No(n)||Ol(n)||Nl(n)||Ml(n)||/windows phone/i.test(n)||Vl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,e=[]){let t;switch(n){case"Browser":t=Bu(Se());break;case"Worker":t=`${Bu(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,u)=>{try{const l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(n,e={}){return Cn(n,"GET","/v2/passwordPolicy",Oo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=6;class Ng{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Mg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gu(this),this.idTokenSubscription=new Gu(this),this.beforeStateQueue=new Vg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sl(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(it(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ri(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_g()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(Ht(this));const t=e?De(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Og(this),t=new Ng(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qi(n){return De(n)}class Gu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zm(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xg(n){jo=n}function Lg(n){return jo.loadJS(n)}function Fg(){return jo.gapiScript}function Ug(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n,e){const t=Co(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Si(s,e??{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function Gg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $g(n,e,t){const r=qi(n);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ll(e),{host:a,port:u}=qg(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Hg()}function Ll(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qg(n){const e=Ll(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$u(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:$u(a)}}}function $u(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Hg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(n,e){return Eg(n,"POST","/v1/accounts:signInWithIdp",Oo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="http://localhost";class Kt extends Fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ro(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Kt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return gn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gn(e,t)}buildRequest(){const e={requestUri:zg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends xo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Cr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rt.credential(t,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Cr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Cr{constructor(){super("twitter.com")}static credential(e,t){return Kt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return It.credential(t,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ot._fromIdTokenResponse(e,r,i),a=qu(r);return new yn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=qu(r);return new yn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function qu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends ft{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ki.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ki(e,t,r,i)}}function Ul(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(n,s,e,r):s})}async function Wg(n,e,t=!1){const r=await hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(n,e,t=!1){const{auth:r}=n;if(it(r.app))return Promise.reject(Ht(r));const i="reauthenticate";try{const s=await hr(n,Ul(r,i,e,n),t);j(s.idToken,r,"internal-error");const a=Mo(s.idToken);j(a,r,"internal-error");const{sub:u}=a;return j(n.uid===u,r,"user-mismatch"),yn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,e,t=!1){if(it(n.app))return Promise.reject(Ht(n));const r="signIn",i=await Ul(n,r,e),s=await yn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Xg(n,e,t,r){return De(n).onIdTokenChanged(e,t,r)}function Yg(n,e,t){return De(n).beforeAuthStateChanged(e,t)}function Jg(n,e,t,r){return De(n).onAuthStateChanged(e,t,r)}function Zg(n){return De(n).signOut()}const Di="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Di,"1"),this.storage.removeItem(Di),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=1e3,tp=10;class Gl extends Bl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Dg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ep)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const np=Gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$l.type="SESSION";const ql=$l;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Hi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,s)),l=await rp(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{const d=Lo("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const I=y;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(I.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function sp(n){Ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function op(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ap(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function up(){return Hl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="firebaseLocalStorageDb",cp=1,Vi="firebaseLocalStorage",Wl="fbase_key";class Rr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zi(n,e){return n.transaction([Vi],e?"readwrite":"readonly").objectStore(Vi)}function lp(){const n=indexedDB.deleteDatabase(zl);return new Rr(n).toPromise()}function ro(){const n=indexedDB.open(zl,cp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vi,{keyPath:Wl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vi)?e(r):(r.close(),await lp(),e(await ro()))})})}async function Hu(n,e,t){const r=zi(n,!0).put({[Wl]:e,value:t});return new Rr(r).toPromise()}async function hp(n,e){const t=zi(n,!1).get(e),r=await new Rr(t).toPromise();return r===void 0?null:r.value}function zu(n,e){const t=zi(n,!0).delete(e);return new Rr(t).toPromise()}const dp=800,mp=3;class Kl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ro(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>mp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hi._getInstance(up()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await op(),!this.activeServiceWorker)return;this.sender=new ip(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ap()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ro();return await Hu(e,Di,"1"),await zu(e,Di),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zi(i,!1).getAll();return new Rr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kl.type="LOCAL";const fp=Kl;new Pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n,e){return e?at(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gp(n){return Qg(n.auth,new Fo(n),n.bypassAuthState)}function pp(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Kg(t,new Fo(n),n.bypassAuthState)}async function _p(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Wg(t,new Fo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gp;case"linkViaPopup":case"linkViaRedirect":return _p;case"reauthViaPopup":case"reauthViaRedirect":return pp;default:Ye(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new Pr(2e3,1e4);async function vp(n,e,t){if(it(n.app))return Promise.reject(qe(n,"operation-not-supported-in-this-environment"));const r=qi(n);fg(n,e,xo);const i=Ql(r,t);return new Bt(r,"signInViaPopup",e,i).executeNotNull()}class Bt extends Xl{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yp.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="pendingRedirect",_i=new Map;class Tp extends Xl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_i.get(this.auth._key());if(!e){try{const r=await wp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_i.set(this.auth._key(),e)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wp(n,e){const t=Ap(e),r=bp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Ip(n,e){_i.set(n._key(),e)}function bp(n){return at(n._redirectPersistence)}function Ap(n){return pi(Ep,n.config.apiKey,n.name)}async function Sp(n,e,t=!1){if(it(n.app))return Promise.reject(Ht(n));const r=qi(n),i=Ql(r,e),a=await new Tp(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=10*60*1e3;class Cp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wu(e))}saveEventToCache(e){this.cachedEventUids.add(Wu(e)),this.lastProcessedEventTime=Date.now()}}function Wu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(n,e={}){return Cn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vp=/^https?/;async function Op(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kp(n);for(const t of e)try{if(Mp(t))return}catch{}Ye(n,"unauthorized-domain")}function Mp(n){const e=to(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Vp.test(t))return!1;if(Dp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new Pr(3e4,6e4);function Ku(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jp(n){return new Promise((e,t)=>{var r,i,s;function a(){Ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ku(),t(qe(n,"network-request-failed"))},timeout:Np.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)a();else{const u=Ug("iframefcb");return Ke()[u]=()=>{gapi.load?a():t(qe(n,"network-request-failed"))},Lg(`${Fg()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw yi=null,e})}let yi=null;function xp(n){return yi=yi||jp(n),yi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Pr(5e3,15e3),Fp="__/auth/iframe",Up="emulator/auth/iframe",Bp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $p(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vo(e,Up):`https://${n.config.authDomain}/${Fp}`,r={apiKey:e.apiKey,appName:n.name,v:Pn},i=Gp.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Sr(r).slice(1)}`}async function qp(n){const e=await xp(n),t=Ke().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:$p(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bp,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=qe(n,"network-request-failed"),u=Ke().setTimeout(()=>{s(a)},Lp.get());function l(){Ke().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zp=500,Wp=600,Kp="_blank",Qp="http://localhost";class Qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xp(n,e,t,r=zp,i=Wp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},Hp),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Se().toLowerCase();t&&(u=Dl(d)?Kp:t),Rl(d)&&(e=e||Qp,l.scrollbars="yes");const f=Object.entries(l).reduce((I,[S,k])=>`${I}${S}=${k},`,"");if(kg(d)&&u!=="_self")return Yp(e||"",u),new Qu(null);const y=window.open(e||"",u,f);j(y,n,"popup-blocked");try{y.focus()}catch{}return new Qu(y)}function Yp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="__/auth/handler",Zp="emulator/auth/handler",e_=encodeURIComponent("fac");async function Xu(n,e,t,r,i,s){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pn,eventId:i};if(e instanceof xo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Jm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof Cr){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const l=await n._getAppCheckToken(),d=l?`#${e_}=${encodeURIComponent(l)}`:"";return`${t_(n)}?${Sr(u).slice(1)}${d}`}function t_({config:n}){return n.emulator?Vo(n,Zp):`https://${n.authDomain}/${Jp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class n_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ql,this._completeRedirectFn=Sp,this._overrideRedirectResult=Ip}async _openPopup(e,t,r,i){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Xu(e,t,r,to(),i);return Xp(e,a,Lo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Xu(e,t,r,to(),i);return sp(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qp(e),r=new Cp(e);return t.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ns,{type:Ns},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ns];a!==void 0&&t(!!a),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Op(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jl()||kl()||No()}}const r_=n_;var Yu="@firebase/auth",Ju="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o_(n){_n(new Wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xl(n)},d=new jg(r,i,s,l);return Gg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),_n(new Wt("auth-internal",e=>{const t=qi(e.getProvider("auth").getImmediate());return(r=>new i_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Yu,Ju,s_(n)),Pt(Yu,Ju,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=5*60,u_=fl("authIdTokenMaxAge")||a_;let Zu=null;const c_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>u_)return;const i=t==null?void 0:t.token;Zu!==i&&(Zu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function l_(n=yl()){const e=Co(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Bg(n,{popupRedirectResolver:r_,persistence:[fp,np,ql]}),r=fl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=c_(s.toString());Yg(t,a,()=>a(t.currentUser)),Xg(t,u=>a(u))}}const i=dl("auth");return i&&$g(t,`http://${i}`),t}function h_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",h_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o_("Browser");var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zt,Jl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function p(){}p.prototype=g.prototype,T.D=g.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(v,E,w){for(var _=Array(arguments.length-2),de=2;de<arguments.length;de++)_[de-2]=arguments[de];return g.prototype[E].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,p){p||(p=0);var v=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)v[E]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(E=0;16>E;++E)v[E]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=T.g[0],p=T.g[1],E=T.g[2];var w=T.g[3],_=g+(w^p&(E^w))+v[0]+3614090360&4294967295;g=p+(_<<7&4294967295|_>>>25),_=w+(E^g&(p^E))+v[1]+3905402710&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(p^w&(g^p))+v[2]+606105819&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(g^E&(w^g))+v[3]+3250441966&4294967295,p=E+(_<<22&4294967295|_>>>10),_=g+(w^p&(E^w))+v[4]+4118548399&4294967295,g=p+(_<<7&4294967295|_>>>25),_=w+(E^g&(p^E))+v[5]+1200080426&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(p^w&(g^p))+v[6]+2821735955&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(g^E&(w^g))+v[7]+4249261313&4294967295,p=E+(_<<22&4294967295|_>>>10),_=g+(w^p&(E^w))+v[8]+1770035416&4294967295,g=p+(_<<7&4294967295|_>>>25),_=w+(E^g&(p^E))+v[9]+2336552879&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(p^w&(g^p))+v[10]+4294925233&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(g^E&(w^g))+v[11]+2304563134&4294967295,p=E+(_<<22&4294967295|_>>>10),_=g+(w^p&(E^w))+v[12]+1804603682&4294967295,g=p+(_<<7&4294967295|_>>>25),_=w+(E^g&(p^E))+v[13]+4254626195&4294967295,w=g+(_<<12&4294967295|_>>>20),_=E+(p^w&(g^p))+v[14]+2792965006&4294967295,E=w+(_<<17&4294967295|_>>>15),_=p+(g^E&(w^g))+v[15]+1236535329&4294967295,p=E+(_<<22&4294967295|_>>>10),_=g+(E^w&(p^E))+v[1]+4129170786&4294967295,g=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(g^p))+v[6]+3225465664&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^p&(w^g))+v[11]+643717713&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^g&(E^w))+v[0]+3921069994&4294967295,p=E+(_<<20&4294967295|_>>>12),_=g+(E^w&(p^E))+v[5]+3593408605&4294967295,g=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(g^p))+v[10]+38016083&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^p&(w^g))+v[15]+3634488961&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^g&(E^w))+v[4]+3889429448&4294967295,p=E+(_<<20&4294967295|_>>>12),_=g+(E^w&(p^E))+v[9]+568446438&4294967295,g=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(g^p))+v[14]+3275163606&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^p&(w^g))+v[3]+4107603335&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^g&(E^w))+v[8]+1163531501&4294967295,p=E+(_<<20&4294967295|_>>>12),_=g+(E^w&(p^E))+v[13]+2850285829&4294967295,g=p+(_<<5&4294967295|_>>>27),_=w+(p^E&(g^p))+v[2]+4243563512&4294967295,w=g+(_<<9&4294967295|_>>>23),_=E+(g^p&(w^g))+v[7]+1735328473&4294967295,E=w+(_<<14&4294967295|_>>>18),_=p+(w^g&(E^w))+v[12]+2368359562&4294967295,p=E+(_<<20&4294967295|_>>>12),_=g+(p^E^w)+v[5]+4294588738&4294967295,g=p+(_<<4&4294967295|_>>>28),_=w+(g^p^E)+v[8]+2272392833&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^p)+v[11]+1839030562&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^g)+v[14]+4259657740&4294967295,p=E+(_<<23&4294967295|_>>>9),_=g+(p^E^w)+v[1]+2763975236&4294967295,g=p+(_<<4&4294967295|_>>>28),_=w+(g^p^E)+v[4]+1272893353&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^p)+v[7]+4139469664&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^g)+v[10]+3200236656&4294967295,p=E+(_<<23&4294967295|_>>>9),_=g+(p^E^w)+v[13]+681279174&4294967295,g=p+(_<<4&4294967295|_>>>28),_=w+(g^p^E)+v[0]+3936430074&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^p)+v[3]+3572445317&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^g)+v[6]+76029189&4294967295,p=E+(_<<23&4294967295|_>>>9),_=g+(p^E^w)+v[9]+3654602809&4294967295,g=p+(_<<4&4294967295|_>>>28),_=w+(g^p^E)+v[12]+3873151461&4294967295,w=g+(_<<11&4294967295|_>>>21),_=E+(w^g^p)+v[15]+530742520&4294967295,E=w+(_<<16&4294967295|_>>>16),_=p+(E^w^g)+v[2]+3299628645&4294967295,p=E+(_<<23&4294967295|_>>>9),_=g+(E^(p|~w))+v[0]+4096336452&4294967295,g=p+(_<<6&4294967295|_>>>26),_=w+(p^(g|~E))+v[7]+1126891415&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~p))+v[14]+2878612391&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~g))+v[5]+4237533241&4294967295,p=E+(_<<21&4294967295|_>>>11),_=g+(E^(p|~w))+v[12]+1700485571&4294967295,g=p+(_<<6&4294967295|_>>>26),_=w+(p^(g|~E))+v[3]+2399980690&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~p))+v[10]+4293915773&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~g))+v[1]+2240044497&4294967295,p=E+(_<<21&4294967295|_>>>11),_=g+(E^(p|~w))+v[8]+1873313359&4294967295,g=p+(_<<6&4294967295|_>>>26),_=w+(p^(g|~E))+v[15]+4264355552&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~p))+v[6]+2734768916&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~g))+v[13]+1309151649&4294967295,p=E+(_<<21&4294967295|_>>>11),_=g+(E^(p|~w))+v[4]+4149444226&4294967295,g=p+(_<<6&4294967295|_>>>26),_=w+(p^(g|~E))+v[11]+3174756917&4294967295,w=g+(_<<10&4294967295|_>>>22),_=E+(g^(w|~p))+v[2]+718787259&4294967295,E=w+(_<<15&4294967295|_>>>17),_=p+(w^(E|~g))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var p=g-this.blockSize,v=this.B,E=this.h,w=0;w<g;){if(E==0)for(;w<=p;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<g;)if(v[E++]=T.charCodeAt(w++),E==this.blockSize){i(this,v),E=0;break}}else for(;w<g;)if(v[E++]=T[w++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var p=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=p&255,p/=256;for(this.u(T),T=Array(16),g=p=0;4>g;++g)for(var v=0;32>v;v+=8)T[p++]=this.g[g]>>>v&255;return T};function s(T,g){var p=u;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=g(T)}function a(T,g){this.h=g;for(var p=[],v=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;v&&w==g||(p[E]=w,v=!1)}this.g=p}var u={};function l(T){return-128<=T&&128>T?s(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return C(d(-T));for(var g=[],p=1,v=0;T>=p;v++)g[v]=T/p|0,p*=4294967296;return new a(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return C(f(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(g,8)),v=y,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),_=parseInt(T.substring(E,E+w),g);8>w?(w=d(Math.pow(g,w)),v=v.j(w).add(d(_))):(v=v.j(p),v=v.add(d(_)))}return v}var y=l(0),I=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-C(this).m();for(var T=0,g=1,p=0;p<this.g.length;p++){var v=this.i(p);T+=(0<=v?v:4294967296+v)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(D(this))return"-"+C(this).toString(T);for(var g=d(Math.pow(T,6)),p=this,v="";;){var E=Y(p,g).g;p=L(p,E.j(g));var w=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=E,k(p))return w+v;for(;6>w.length;)w="0"+w;v=w+v}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=L(this,T),D(T)?-1:k(T)?0:1};function C(T){for(var g=T.g.length,p=[],v=0;v<g;v++)p[v]=~T.g[v];return new a(p,~T.h).add(I)}n.abs=function(){return D(this)?C(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),p=[],v=0,E=0;E<=g;E++){var w=v+(this.i(E)&65535)+(T.i(E)&65535),_=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=_>>>16,w&=65535,_&=65535,p[E]=_<<16|w}return new a(p,p[p.length-1]&-2147483648?-1:0)};function L(T,g){return T.add(C(g))}n.j=function(T){if(k(this)||k(T))return y;if(D(this))return D(T)?C(this).j(C(T)):C(C(this).j(T));if(D(T))return C(this.j(C(T)));if(0>this.l(S)&&0>T.l(S))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,p=[],v=0;v<2*g;v++)p[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<T.g.length;E++){var w=this.i(v)>>>16,_=this.i(v)&65535,de=T.i(E)>>>16,ne=T.i(E)&65535;p[2*v+2*E]+=_*ne,B(p,2*v+2*E),p[2*v+2*E+1]+=w*ne,B(p,2*v+2*E+1),p[2*v+2*E+1]+=_*de,B(p,2*v+2*E+1),p[2*v+2*E+2]+=w*de,B(p,2*v+2*E+2)}for(v=0;v<g;v++)p[v]=p[2*v+1]<<16|p[2*v];for(v=g;v<2*g;v++)p[v]=0;return new a(p,0)};function B(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function G(T,g){this.g=T,this.h=g}function Y(T,g){if(k(g))throw Error("division by zero");if(k(T))return new G(y,y);if(D(T))return g=Y(C(T),g),new G(C(g.g),C(g.h));if(D(g))return g=Y(T,C(g)),new G(C(g.g),g.h);if(30<T.g.length){if(D(T)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var p=I,v=g;0>=v.l(T);)p=ue(p),v=ue(v);var E=K(p,1),w=K(v,1);for(v=K(v,2),p=K(p,2);!k(v);){var _=w.add(v);0>=_.l(T)&&(E=E.add(p),w=_),v=K(v,1),p=K(p,1)}return g=L(T,E.j(g)),new G(E,g)}for(E=y;0<=T.l(g);){for(p=Math.max(1,Math.floor(T.m()/g.m())),v=Math.ceil(Math.log(p)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),w=d(p),_=w.j(g);D(_)||0<_.l(T);)p-=v,w=d(p),_=w.j(g);k(w)&&(w=I),E=E.add(w),T=L(T,_)}return new G(E,T)}n.A=function(T){return Y(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)&T.i(v);return new a(p,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)|T.i(v);return new a(p,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)^T.i(v);return new a(p,this.h^T.h)};function ue(T){for(var g=T.g.length+1,p=[],v=0;v<g;v++)p[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(p,T.h)}function K(T,g){var p=g>>5;g%=32;for(var v=T.g.length-p,E=[],w=0;w<v;w++)E[w]=0<g?T.i(w+p)>>>g|T.i(w+p+1)<<32-g:T.i(w+p);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,zt=a}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zl,Jn,eh,vi,io,th,nh,rh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var b=o[m];if(!(b in h))break e;h=h[b]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,m=!1,b={next:function(){if(!m&&h<o.length){var A=h++;return{value:c(A,o[A]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,I.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function k(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,b,A){for(var V=Array(arguments.length-2),X=2;X<arguments.length;X++)V[X-2]=arguments[X];return c.prototype[b].apply(m,V)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function C(o,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const b=o.length||0,A=m.length||0;o.length=b+A;for(let V=0;V<A;V++)o[b+V]=m[V]}else o.push(m)}}class L{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function B(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var ue=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function K(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let h,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(h in m)o[h]=m[h];for(let A=0;A<p.length;A++)h=p[A],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function E(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function w(o){u.setTimeout(()=>{throw o},0)}function _(){var o=et;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class de{constructor(){this.h=this.g=null}add(c,h){const m=ne.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var ne=new L(()=>new ce,o=>o.reset());class ce{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,Le=!1,et=new de,Ve=()=>{const o=u.Promise.resolve(void 0);xe=()=>{o.then(Vt)}};var Vt=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){w(h)}var c=ne;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Le=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var Nn=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function gt(o,c){if(se.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(ue){e:{try{Y(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ur[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&gt.aa.h.call(this)}}k(gt,se);var Ur={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),Br=0;function $d(o,c,h,m,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=b,this.key=++Br,this.da=this.fa=!1}function Gr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function $r(o){this.src=o,this.g={},this.h=0}$r.prototype.add=function(o,c,h,m,b){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var V=as(o,c,m,b);return-1<V?(c=o[V],h||(c.fa=!1)):(c=new $d(c,this.src,A,!!m,b),c.fa=h,o.push(c)),c};function os(o,c){var h=c.type;if(h in o.g){var m=o.g[h],b=Array.prototype.indexOf.call(m,c,void 0),A;(A=0<=b)&&Array.prototype.splice.call(m,b,1),A&&(Gr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function as(o,c,h,m){for(var b=0;b<o.length;++b){var A=o[b];if(!A.da&&A.listener==c&&A.capture==!!h&&A.ha==m)return b}return-1}var us="closure_lm_"+(1e6*Math.random()|0),cs={};function ba(o,c,h,m,b){if(Array.isArray(c)){for(var A=0;A<c.length;A++)ba(o,c[A],h,m,b);return null}return h=Pa(h),o&&o[Ot]?o.K(c,h,d(m)?!!m.capture:!1,b):qd(o,c,h,!1,m,b)}function qd(o,c,h,m,b,A){if(!c)throw Error("Invalid event type");var V=d(b)?!!b.capture:!!b,X=hs(o);if(X||(o[us]=X=new $r(o)),h=X.add(c,h,m,V,A),h.proxy)return h;if(m=Hd(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)Nn||(b=V),b===void 0&&(b=!1),o.addEventListener(c.toString(),m,b);else if(o.attachEvent)o.attachEvent(Sa(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Hd(){function o(h){return c.call(o.src,o.listener,h)}const c=zd;return o}function Aa(o,c,h,m,b){if(Array.isArray(c))for(var A=0;A<c.length;A++)Aa(o,c[A],h,m,b);else m=d(m)?!!m.capture:!!m,h=Pa(h),o&&o[Ot]?(o=o.i,c=String(c).toString(),c in o.g&&(A=o.g[c],h=as(A,h,m,b),-1<h&&(Gr(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[c],o.h--)))):o&&(o=hs(o))&&(c=o.g[c.toString()],o=-1,c&&(o=as(c,h,m,b)),(h=-1<o?c[o]:null)&&ls(h))}function ls(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ot])os(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(Sa(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=hs(c))?(os(h,o),h.h==0&&(h.src=null,c[us]=null)):Gr(o)}}}function Sa(o){return o in cs?cs[o]:cs[o]="on"+o}function zd(o,c){if(o.da)o=!0;else{c=new gt(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&ls(o),o=h.call(m,c)}return o}function hs(o){return o=o[us],o instanceof $r?o:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(o){return typeof o=="function"?o:(o[ds]||(o[ds]=function(c){return o.handleEvent(c)}),o[ds])}function ve(){le.call(this),this.i=new $r(this),this.M=this,this.F=null}k(ve,le),ve.prototype[Ot]=!0,ve.prototype.removeEventListener=function(o,c,h,m){Aa(this,o,c,h,m)};function Pe(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new se(c,o);else if(c instanceof se)c.target=c.target||o;else{var b=c;c=new se(m,o),v(c,b)}if(b=!0,h)for(var A=h.length-1;0<=A;A--){var V=c.g=h[A];b=qr(V,m,!0,c)&&b}if(V=c.g=o,b=qr(V,m,!0,c)&&b,b=qr(V,m,!1,c)&&b,h)for(A=0;A<h.length;A++)V=c.g=h[A],b=qr(V,m,!1,c)&&b}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)Gr(h[m]);delete o.g[c],o.h--}}this.F=null},ve.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},ve.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function qr(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,A=0;A<c.length;++A){var V=c[A];if(V&&!V.da&&V.capture==h){var X=V.listener,fe=V.ha||V.src;V.fa&&os(o.i,V),b=X.call(fe,m)!==!1&&b}}return b&&!m.defaultPrevented}function Ca(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ra(o){o.g=Ca(()=>{o.g=null,o.i&&(o.i=!1,Ra(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Wd extends le{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ra(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jn(o){le.call(this),this.h=o,this.g={}}k(jn,le);var ka=[];function Da(o){K(o.g,function(c,h){this.g.hasOwnProperty(h)&&ls(c)},o),o.g={}}jn.prototype.N=function(){jn.aa.N.call(this),Da(this)},jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ms=u.JSON.stringify,Kd=u.JSON.parse,Qd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function fs(){}fs.prototype.h=null;function Va(o){return o.h||(o.h=o.i())}function Oa(){}var xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gs(){se.call(this,"d")}k(gs,se);function ps(){se.call(this,"c")}k(ps,se);var Mt={},Ma=null;function Hr(){return Ma=Ma||new ve}Mt.La="serverreachability";function Na(o){se.call(this,Mt.La,o)}k(Na,se);function Ln(o){const c=Hr();Pe(c,new Na(c))}Mt.STAT_EVENT="statevent";function ja(o,c){se.call(this,Mt.STAT_EVENT,o),this.stat=c}k(ja,se);function Ce(o){const c=Hr();Pe(c,new ja(c,o))}Mt.Ma="timingevent";function xa(o,c){se.call(this,Mt.Ma,o),this.size=c}k(xa,se);function Fn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Xd(o,c,h,m,b,A){o.info(function(){if(o.g)if(A)for(var V="",X=A.split("&"),fe=0;fe<X.length;fe++){var z=X[fe].split("=");if(1<z.length){var Ee=z[0];z=z[1];var Te=Ee.split("_");V=2<=Te.length&&Te[1]=="type"?V+(Ee+"="+z+"&"):V+(Ee+"=redacted&")}}else V=null;else V=A;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+c+`
`+h+`
`+V})}function Yd(o,c,h,m,b,A,V){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+c+`
`+h+`
`+A+" "+V})}function nn(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Zd(o,h)+(m?" "+m:"")})}function Jd(o,c){o.info(function(){return"TIMEOUT: "+c})}Un.prototype.info=function(){};function Zd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var A=b[0];if(A!="noop"&&A!="stop"&&A!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return ms(h)}catch{return c}}var zr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},La={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function Wr(){}k(Wr,fs),Wr.prototype.g=function(){return new XMLHttpRequest},Wr.prototype.i=function(){return{}},_s=new Wr;function pt(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new jn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Ua={},ys={};function vs(o,c,h){o.L=1,o.v=Yr(tt(c)),o.m=h,o.P=!0,Ba(o,null)}function Ba(o,c){o.F=Date.now(),Kr(o),o.A=tt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),tu(h.i,"t",m),o.C=0,h=o.j.J,o.h=new Fa,o.g=vu(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Wd(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(ka[0]=b.toString()),b=ka);for(var A=0;A<b.length;A++){var V=ba(h,b[A],m||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Ln(),Xd(o.i,o.u,o.A,o.l,o.R,o.m)}pt.prototype.ca=function(o){o=o.target;const c=this.M;c&&nt(o)==3?c.j():this.Y(o)},pt.prototype.Y=function(o){try{if(o==this.g)e:{const Te=nt(this.g);var c=this.g.Ba();const on=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||uu(this.g)))){this.J||Te!=4||c==7||(c==8||0>=on?Ln(3):Ln(2)),Es(this);var h=this.g.Z();this.X=h;t:if(Ga(this)){var m=uu(this.g);o="";var b=m.length,A=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Bn(this);var V="";break t}this.h.i=new u.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(A&&c==b-1)});m.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,Yd(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,fe=this.g;if((X=fe.g?fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(X)){var z=X;break t}}z=null}if(h=z)nn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ts(this,h);else{this.o=!1,this.s=3,Ce(12),Nt(this),Bn(this);break e}}if(this.P){h=!0;let Fe;for(;!this.J&&this.C<V.length;)if(Fe=em(this,V),Fe==ys){Te==4&&(this.s=4,Ce(14),h=!1),nn(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Ua){this.s=4,Ce(15),nn(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else nn(this.i,this.l,Fe,null),Ts(this,Fe);if(Ga(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||V.length!=0||this.h.h||(this.s=1,Ce(16),h=!1),this.o=this.o&&h,!h)nn(this.i,this.l,V,"[Invalid Chunked Response]"),Nt(this),Bn(this);else if(0<V.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ps(Ee),Ee.M=!0,Ce(11))}}else nn(this.i,this.l,V,null),Ts(this,V);Te==4&&Nt(this),this.o&&!this.J&&(Te==4?gu(this.j,this):(this.o=!1,Kr(this)))}else _m(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),Nt(this),Bn(this)}}}catch{}finally{}};function Ga(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function em(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?ys:(h=Number(c.substring(h,m)),isNaN(h)?Ua:(m+=1,m+h>c.length?ys:(c=c.slice(m,m+h),o.C=m+h,c)))}pt.prototype.cancel=function(){this.J=!0,Nt(this)};function Kr(o){o.S=Date.now()+o.I,$a(o,o.I)}function $a(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Fn(I(o.ba,o),c)}function Es(o){o.B&&(u.clearTimeout(o.B),o.B=null)}pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Jd(this.i,this.A),this.L!=2&&(Ln(),Ce(17)),Nt(this),this.s=2,Bn(this)):$a(this,this.S-o)};function Bn(o){o.j.G==0||o.J||gu(o.j,o)}function Nt(o){Es(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Da(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ts(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ws(h.h,o))){if(!o.K&&ws(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ri(h),ti(h);else break e;Ss(h),Ce(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Fn(I(h.Za,h),6e3));if(1>=za(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else xt(h,11)}else if((o.K||h.g==o)&&ri(h),!B(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let z=b[c];if(h.T=z[0],z=z[1],h.G==2)if(z[0]=="c"){h.K=z[1],h.ia=z[2];const Ee=z[3];Ee!=null&&(h.la=Ee,h.j.info("VER="+h.la));const Te=z[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const on=z[5];on!=null&&typeof on=="number"&&0<on&&(m=1.5*on,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Fe=o.g;if(Fe){const si=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var A=m.h;A.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Is(A,A.h),A.h=null))}if(m.D){const Cs=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;Cs&&(m.ya=Cs,J(m.I,m.D,Cs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var V=o;if(m.qa=yu(m,m.J?m.ia:null,m.W),V.K){Wa(m.h,V);var X=V,fe=m.L;fe&&(X.I=fe),X.B&&(Es(X),Kr(X)),m.g=V}else mu(m);0<h.i.length&&ni(h)}else z[0]!="stop"&&z[0]!="close"||xt(h,7);else h.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?xt(h,7):As(h):z[0]!="noop"&&h.l&&h.l.ta(z),h.v=0)}}Ln(4)}catch{}}var tm=class{constructor(o,c){this.g=o,this.map=c}};function qa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ha(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function za(o){return o.h?1:o.g?o.g.size:0}function ws(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Is(o,c){o.g?o.g.add(c):o.h=c}function Wa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}qa.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ka(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function nm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function rm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const m in o)c[h++]=m;return c}}}function Qa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=rm(o),m=nm(o),b=m.length,A=0;A<b;A++)c.call(void 0,m[A],h&&h[A],o)}var Xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function im(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),b=null;if(0<=m){var A=o[h].substring(0,m);b=o[h].substring(m+1)}else A=o[h];c(A,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof jt){this.h=o.h,Qr(this,o.j),this.o=o.o,this.g=o.g,Xr(this,o.s),this.l=o.l;var c=o.i,h=new qn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Ya(this,h),this.m=o.m}else o&&(c=String(o).match(Xa))?(this.h=!1,Qr(this,c[1]||"",!0),this.o=Gn(c[2]||""),this.g=Gn(c[3]||"",!0),Xr(this,c[4]),this.l=Gn(c[5]||"",!0),Ya(this,c[6]||"",!0),this.m=Gn(c[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}jt.prototype.toString=function(){var o=[],c=this.j;c&&o.push($n(c,Ja,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push($n(c,Ja,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push($n(h,h.charAt(0)=="/"?am:om,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",$n(h,cm)),o.join("")};function tt(o){return new jt(o)}function Qr(o,c,h){o.j=h?Gn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Xr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ya(o,c,h){c instanceof qn?(o.i=c,lm(o.i,o.h)):(h||(c=$n(c,um)),o.i=new qn(c,o.h))}function J(o,c,h){o.i.set(c,h)}function Yr(o){return J(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $n(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,sm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function sm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ja=/[#\/\?@]/g,om=/[#\?:]/g,am=/[#\?]/g,um=/[#\?@]/g,cm=/#/g;function qn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function _t(o){o.g||(o.g=new Map,o.h=0,o.i&&im(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=qn.prototype,n.add=function(o,c){_t(this),this.i=null,o=rn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Za(o,c){_t(o),c=rn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function eu(o,c){return _t(o),c=rn(o,c),o.g.has(c)}n.forEach=function(o,c){_t(this),this.g.forEach(function(h,m){h.forEach(function(b){o.call(c,b,m,this)},this)},this)},n.na=function(){_t(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const b=o[m];for(let A=0;A<b.length;A++)h.push(c[m])}return h},n.V=function(o){_t(this);let c=[];if(typeof o=="string")eu(this,o)&&(c=c.concat(this.g.get(rn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return _t(this),this.i=null,o=rn(this,o),eu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function tu(o,c,h){Za(o,c),0<h.length&&(o.i=null,o.g.set(rn(o,c),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const A=encodeURIComponent(String(m)),V=this.V(m);for(m=0;m<V.length;m++){var b=A;V[m]!==""&&(b+="="+encodeURIComponent(String(V[m]))),o.push(b)}}return this.i=o.join("&")};function rn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function lm(o,c){c&&!o.j&&(_t(o),o.i=null,o.g.forEach(function(h,m){var b=m.toLowerCase();m!=b&&(Za(this,m),tu(this,b,h))},o)),o.j=c}function hm(o,c){const h=new Un;if(u.Image){const m=new Image;m.onload=S(yt,h,"TestLoadImage: loaded",!0,c,m),m.onerror=S(yt,h,"TestLoadImage: error",!1,c,m),m.onabort=S(yt,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=S(yt,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function dm(o,c){const h=new Un,m=new AbortController,b=setTimeout(()=>{m.abort(),yt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(A=>{clearTimeout(b),A.ok?yt(h,"TestPingServer: ok",!0,c):yt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),yt(h,"TestPingServer: error",!1,c)})}function yt(o,c,h,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(h)}catch{}}function mm(){this.g=new Qd}function fm(o,c,h){const m=h||"";try{Qa(o,function(b,A){let V=b;d(b)&&(V=ms(b)),c.push(m+A+"="+encodeURIComponent(V))})}catch(b){throw c.push(m+"type="+encodeURIComponent("_badmap")),b}}function Jr(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Jr,fs),Jr.prototype.g=function(){return new Zr(this.l,this.j)},Jr.prototype.i=function(o){return function(){return o}}({});function Zr(o,c){ve.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Zr,ve),n=Zr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,zn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function nu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Hn(this):zn(this),this.readyState==3&&nu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Hn(this))},n.Qa=function(o){this.g&&(this.response=o,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,zn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function zn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ru(o){let c="";return K(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function bs(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=ru(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):J(o,c,h))}function re(o){ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(re,ve);var gm=/^https?$/i,pm=["POST","PUT"];n=re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?Va(this.o):Va(_s),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(A){iu(this,A);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)h.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const A of m.keys())h.set(A,m.get(A));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),b=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(pm,c,void 0))||m||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,V]of h)this.g.setRequestHeader(A,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{au(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){iu(this,A)}};function iu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,su(o),ei(o)}function su(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ou(this):this.bb())},n.bb=function(){ou(this)};function ou(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nt(o)!=4||o.Z()!=2)){if(o.u&&nt(o)==4)Ca(o.Ea,0,o);else if(Pe(o,"readystatechange"),nt(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=V===0){var b=String(o.D).match(Xa)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),m=!gm.test(b?b.toLowerCase():"")}h=m}if(h)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var A=2<nt(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",su(o)}}finally{ei(o)}}}}function ei(o,c){if(o.g){au(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Pe(o,"ready");try{h.onreadystatechange=m}catch{}}}function au(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Kd(c)}};function uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function _m(o){const c={};o=(o.g&&2<=nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(B(o[m]))continue;var h=E(o[m]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=c[b]||[];c[b]=A,A.push(h)}T(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function cu(o){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,o),this.cb=Wn("retryDelaySeedMs",1e4,o),this.Wa=Wn("forwardChannelMaxRetries",2,o),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new qa(o&&o.concurrentRequestLimit),this.Da=new mm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=cu.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,m){Ce(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=yu(this,null,this.W),ni(this)};function As(o){if(lu(o),o.G==3){var c=o.U++,h=tt(o.I);if(J(h,"SID",o.K),J(h,"RID",c),J(h,"TYPE","terminate"),Kn(o,h),c=new pt(o,o.j,c),c.L=2,c.v=Yr(tt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=vu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Kr(c)}_u(o)}function ti(o){o.g&&(Ps(o),o.g.cancel(),o.g=null)}function lu(o){ti(o),o.u&&(u.clearTimeout(o.u),o.u=null),ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ni(o){if(!Ha(o.h)&&!o.s){o.s=!0;var c=o.Ga;xe||Ve(),Le||(xe(),Le=!0),et.add(c,o),o.B=0}}function ym(o,c){return za(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Fn(I(o.Ga,o,c),pu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new pt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=g(A),v(A,this.S)):A=this.S),this.m!==null||this.O||(b.H=A,A=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=du(this,b,c),h=tt(this.I),J(h,"RID",o),J(h,"CVER",22),this.D&&J(h,"X-HTTP-Session-Id",this.D),Kn(this,h),A&&(this.O?c="headers="+encodeURIComponent(String(ru(A)))+"&"+c:this.m&&bs(h,this.m,A)),Is(this.h,b),this.Ua&&J(h,"TYPE","init"),this.P?(J(h,"$req",c),J(h,"SID","null"),b.T=!0,vs(b,h,null)):vs(b,h,c),this.G=2}}else this.G==3&&(o?hu(this,o):this.i.length==0||Ha(this.h)||hu(this))};function hu(o,c){var h;c?h=c.l:h=o.U++;const m=tt(o.I);J(m,"SID",o.K),J(m,"RID",h),J(m,"AID",o.T),Kn(o,m),o.m&&o.o&&bs(m,o.m,o.o),h=new pt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=du(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Is(o.h,h),vs(h,m,c)}function Kn(o,c){o.H&&K(o.H,function(h,m){J(c,m,h)}),o.l&&Qa({},function(h,m){J(c,m,h)})}function du(o,c,h){h=Math.min(o.i.length,h);var m=o.l?I(o.l.Na,o.l,o):null;e:{var b=o.i;let A=-1;for(;;){const V=["count="+h];A==-1?0<h?(A=b[0].g,V.push("ofs="+A)):A=0:V.push("ofs="+A);let X=!0;for(let fe=0;fe<h;fe++){let z=b[fe].g;const Ee=b[fe].map;if(z-=A,0>z)A=Math.max(0,b[fe].g-100),X=!1;else try{fm(Ee,V,"req"+z+"_")}catch{m&&m(Ee)}}if(X){m=V.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,m}function mu(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;xe||Ve(),Le||(xe(),Le=!0),et.add(c,o),o.v=0}}function Ss(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Fn(I(o.Fa,o),pu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Fn(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),ti(this),fu(this))};function Ps(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function fu(o){o.g=new pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=tt(o.qa);J(c,"RID","rpc"),J(c,"SID",o.K),J(c,"AID",o.T),J(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&J(c,"TO",o.ja),J(c,"TYPE","xmlhttp"),Kn(o,c),o.m&&o.o&&bs(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Yr(tt(c)),h.m=null,h.P=!0,Ba(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ti(this),Ss(this),Ce(19))};function ri(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function gu(o,c){var h=null;if(o.g==c){ri(o),Ps(o),o.g=null;var m=2}else if(ws(o.h,c))h=c.D,Wa(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;m=Hr(),Pe(m,new xa(m,h)),ni(o)}else mu(o);else if(b=c.s,b==3||b==0&&0<c.X||!(m==1&&ym(o,c)||m==2&&Ss(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:xt(o,5);break;case 4:xt(o,10);break;case 3:xt(o,6);break;default:xt(o,2)}}}function pu(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function xt(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),m=o.Xa;const b=!m;m=new jt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Qr(m,"https"),Yr(m),b?hm(m.toString(),h):dm(m.toString(),h)}else Ce(2);o.G=0,o.l&&o.l.sa(c),_u(o),lu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function _u(o){if(o.G=0,o.ka=[],o.l){const c=Ka(o.h);(c.length!=0||o.i.length!=0)&&(C(o.ka,c),C(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function yu(o,c,h){var m=h instanceof jt?tt(h):new jt(h);if(m.g!="")c&&(m.g=c+"."+m.g),Xr(m,m.s);else{var b=u.location;m=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var A=new jt(null);m&&Qr(A,m),c&&(A.g=c),b&&Xr(A,b),h&&(A.l=h),m=A}return h=o.D,c=o.ya,h&&c&&J(m,h,c),J(m,"VER",o.la),Kn(o,m),m}function vu(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new re(new Jr({eb:h})):new re(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eu(){}n=Eu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ii(){}ii.prototype.g=function(o,c){return new Oe(o,c)};function Oe(o,c){ve.call(this),this.g=new cu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!B(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!B(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new sn(this)}k(Oe,ve),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){As(this.g)},Oe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ms(o),o=h);c.i.push(new tm(c.Ya++,o)),c.G==3&&ni(c)},Oe.prototype.N=function(){this.g.l=null,delete this.j,As(this.g),delete this.g,Oe.aa.N.call(this)};function Tu(o){gs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}k(Tu,gs);function wu(){ps.call(this),this.status=1}k(wu,ps);function sn(o){this.g=o}k(sn,Eu),sn.prototype.ua=function(){Pe(this.g,"a")},sn.prototype.ta=function(o){Pe(this.g,new Tu(o))},sn.prototype.sa=function(o){Pe(this.g,new wu)},sn.prototype.ra=function(){Pe(this.g,"b")},ii.prototype.createWebChannel=ii.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,rh=function(){return new ii},nh=function(){return Hr()},th=Mt,io={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,vi=zr,La.COMPLETE="complete",eh=La,Oa.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,Jn=Oa,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,Zl=re}).apply(typeof ci<"u"?ci:typeof self<"u"?self:typeof window<"u"?window:{});const tc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new So("@firebase/firestore");function Xn(){return Qt.logLevel}function M(n,...e){if(Qt.logLevel<=q.DEBUG){const t=e.map(Uo);Qt.debug(`Firestore (${Rn}): ${n}`,...t)}}function ht(n,...e){if(Qt.logLevel<=q.ERROR){const t=e.map(Uo);Qt.error(`Firestore (${Rn}): ${n}`,...t)}}function vn(n,...e){if(Qt.logLevel<=q.WARN){const t=e.map(Uo);Qt.warn(`Firestore (${Rn}): ${n}`,...t)}}function Uo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const e=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: `+n;throw ht(e),new Error(e)}function Q(n,e){n||x()}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class m_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class f_{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ut,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new ih(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new be(e)}}class g_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class p_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new g_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class __{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new __(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=v_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function W(n,e){return n<e?-1:n>e?1:0}function En(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new he(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new he(0,0))}static max(){return new F(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return dr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends dr{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const E_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends dr{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return E_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(Z.fromString(e))}static fromName(e){return new N(Z.fromString(e).popFirst(5))}static empty(){return new N(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new Z(e.slice()))}}function T_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Rt(i,N.empty(),e)}function w_(n){return new Rt(n.readTime,n.key,-1)}class Rt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Rt(F.min(),N.empty(),-1)}static max(){return new Rt(F.max(),N.empty(),-1)}}function I_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==b_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(i=>i?R.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new R((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(f=>{a[d]=f,++u,u===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new R((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function S_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bo.oe=-1;function Wi(n){return n==null}function Oi(n){return n===0&&1/n==-1/0}function P_(n){return typeof n=="number"&&Number.isInteger(n)&&!Oi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function kn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function oh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new li(this.root,e,this.comparator,!1)}getReverseIterator(){return new li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new li(this.root,e,this.comparator,!0)}}class li{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ge.RED,this.left=i??ge.EMPTY,this.right=s??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ge(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rc(this.data.getIterator())}getIteratorFrom(e){return new rc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class rc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new $e([])}unionWith(e){let t=new _e(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ah("Invalid base64 string: "+s):s}}(e);return new ye(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const C_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(n){if(Q(!!n),typeof n=="string"){let e=0;const t=C_.exec(n);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(n.seconds),nanos:ie(n.nanos)}}function ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $o(n){const e=n.mapValue.fields.__previous_value__;return Go(e)?$o(e):e}function mr(n){const e=kt(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,r,i,s,a,u,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}class fr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={mapValue:{}};function Yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Go(n)?4:D_(n)?9007199254740991:k_(n)?10:11:x()}function Je(n,e){if(n===e)return!0;const t=Yt(n);if(t!==Yt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mr(n).isEqual(mr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=kt(i.timestampValue),u=kt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Xt(i.bytesValue).isEqual(Xt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ie(i.geoPointValue.latitude)===ie(s.geoPointValue.latitude)&&ie(i.geoPointValue.longitude)===ie(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ie(i.integerValue)===ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ie(i.doubleValue),u=ie(s.doubleValue);return a===u?Oi(a)===Oi(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return En(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(nc(a)!==nc(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Je(a[l],u[l])))return!1;return!0}(n,e);default:return x()}}function gr(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function Tn(n,e){if(n===e)return 0;const t=Yt(n),r=Yt(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return function(s,a){const u=ie(s.integerValue||s.doubleValue),l=ie(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return ic(n.timestampValue,e.timestampValue);case 4:return ic(mr(n),mr(e));case 5:return W(n.stringValue,e.stringValue);case 6:return function(s,a){const u=Xt(s),l=Xt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const f=W(u[d],l[d]);if(f!==0)return f}return W(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const u=W(ie(s.latitude),ie(a.latitude));return u!==0?u:W(ie(s.longitude),ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return sc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,f;const y=s.fields||{},I=a.fields||{},S=(u=y.value)===null||u===void 0?void 0:u.arrayValue,k=(l=I.value)===null||l===void 0?void 0:l.arrayValue,D=W(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:sc(S,k)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===hi.mapValue&&a===hi.mapValue)return 0;if(s===hi.mapValue)return 1;if(a===hi.mapValue)return-1;const u=s.fields||{},l=Object.keys(u),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let y=0;y<l.length&&y<f.length;++y){const I=W(l[y],f[y]);if(I!==0)return I;const S=Tn(u[l[y]],d[f[y]]);if(S!==0)return S}return W(l.length,f.length)}(n.mapValue,e.mapValue);default:throw x()}}function ic(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=kt(n),r=kt(e),i=W(t.seconds,r.seconds);return i!==0?i:W(t.nanos,r.nanos)}function sc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Tn(t[i],r[i]);if(s)return s}return W(t.length,r.length)}function wn(n){return so(n)}function so(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return N.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=so(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${so(t.fields[a])}`;return i+"}"}(n.mapValue):x()}function oc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function oo(n){return!!n&&"integerValue"in n}function qo(n){return!!n&&"arrayValue"in n}function ac(n){return!!n&&"nullValue"in n}function uc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ei(n){return!!n&&"mapValue"in n}function k_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return kn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ir(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ir(n.arrayValue.values[t]);return e}return Object.assign({},n)}function D_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ir(t)}setAll(e){let t=pe.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=ir(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ei(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){kn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new je(ir(this.value))}}function uh(n){const e=[];return kn(n.fields,(t,r)=>{const i=new pe([t]);if(Ei(r)){const s=uh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new $e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ae(e,0,F.min(),F.min(),F.min(),je.empty(),0)}static newFoundDocument(e,t,r,i){return new Ae(e,1,t,F.min(),r,i,0)}static newNoDocument(e,t){return new Ae(e,2,t,F.min(),F.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,F.min(),F.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.position=e,this.inclusive=t}}function cc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(a.referenceValue),t.key):r=Tn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t="asc"){this.field=e,this.dir=t}}function V_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{}class ae extends ch{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new M_(e,t,r):t==="array-contains"?new x_(e,r):t==="in"?new L_(e,r):t==="not-in"?new F_(e,r):t==="array-contains-any"?new U_(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new N_(e,r):new j_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Tn(t,this.value)):t!==null&&Yt(this.value)===Yt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends ch{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ze(e,t)}matches(e){return lh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lh(n){return n.op==="and"}function hh(n){return O_(n)&&lh(n)}function O_(n){for(const e of n.filters)if(e instanceof ze)return!1;return!0}function ao(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(hh(n))return n.filters.map(e=>ao(e)).join(",");{const e=n.filters.map(t=>ao(t)).join(",");return`${n.op}(${e})`}}function dh(n,e){return n instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&Je(r.value,i.value)}(n,e):n instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&dh(a,i.filters[u]),!0):!1}(n,e):void x()}function mh(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${wn(t.value)}`}(n):n instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(mh).join(" ,")+"}"}(n):"Filter"}class M_ extends ae{constructor(e,t,r){super(e,t,r),this.key=N.fromName(r.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class N_ extends ae{constructor(e,t){super(e,"in",t),this.keys=fh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class j_ extends ae{constructor(e,t){super(e,"not-in",t),this.keys=fh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>N.fromName(r.referenceValue))}class x_ extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qo(t)&&gr(t.arrayValue,this.value)}}class L_ extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gr(this.value.arrayValue,t)}}class F_ extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!gr(this.value.arrayValue,t)}}class U_ extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>gr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function hc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new B_(n,e,t,r,i,s,a)}function Ho(n){const e=U(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ao(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wn(r)).join(",")),e.ue=t}return e.ue}function zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!V_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lc(n.startAt,e.startAt)&&lc(n.endAt,e.endAt)}function uo(n){return N.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function G_(n,e,t,r,i,s,a,u){return new Vr(n,e,t,r,i,s,a,u)}function Wo(n){return new Vr(n)}function dc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gh(n){return n.collectionGroup!==null}function sr(n){const e=U(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new _e(pe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ni(s,r))}),t.has(pe.keyField().canonicalString())||e.ce.push(new Ni(pe.keyField(),r))}return e.ce}function Qe(n){const e=U(n);return e.le||(e.le=$_(e,sr(n))),e.le}function $_(n,e){if(n.limitType==="F")return hc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ni(i.field,s)});const t=n.endAt?new Mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mi(n.startAt.position,n.startAt.inclusive):null;return hc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function co(n,e){const t=n.filters.concat([e]);return new Vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lo(n,e,t){return new Vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ki(n,e){return zo(Qe(n),Qe(e))&&n.limitType===e.limitType}function ph(n){return`${Ho(Qe(n))}|lt:${n.limitType}`}function an(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>mh(i)).join(", ")}]`),Wi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>wn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>wn(i)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function Qi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of sr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){const d=cc(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,sr(r),i)||r.endAt&&!function(a,u,l){const d=cc(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,sr(r),i))}(n,e)}function q_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _h(n){return(e,t)=>{let r=!1;for(const i of sr(n)){const s=H_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function H_(n,e,t){const r=n.field.isKeyField()?N.comparator(e.key,t.key):function(s,a,u){const l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?Tn(l,d):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return oh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=new te(N.comparator);function dt(){return z_}const yh=new te(N.comparator);function Zn(...n){let e=yh;for(const t of n)e=e.insert(t.key,t);return e}function vh(n){let e=yh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Gt(){return or()}function Eh(){return or()}function or(){return new Dn(n=>n.toString(),(n,e)=>n.isEqual(e))}const W_=new te(N.comparator),K_=new _e(N.comparator);function $(...n){let e=K_;for(const t of n)e=e.add(t);return e}const Q_=new _e(W);function X_(){return Q_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oi(e)?"-0":e}}function Th(n){return{integerValue:""+n}}function Y_(n,e){return P_(e)?Th(e):Ko(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this._=void 0}}function J_(n,e,t){return n instanceof ji?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Go(s)&&(s=$o(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof pr?Ih(n,e):n instanceof _r?bh(n,e):function(i,s){const a=wh(i,s),u=mc(a)+mc(i.Pe);return oo(a)&&oo(i.Pe)?Th(u):Ko(i.serializer,u)}(n,e)}function Z_(n,e,t){return n instanceof pr?Ih(n,e):n instanceof _r?bh(n,e):t}function wh(n,e){return n instanceof xi?function(r){return oo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ji extends Xi{}class pr extends Xi{constructor(e){super(),this.elements=e}}function Ih(n,e){const t=Ah(e);for(const r of n.elements)t.some(i=>Je(i,r))||t.push(r);return{arrayValue:{values:t}}}class _r extends Xi{constructor(e){super(),this.elements=e}}function bh(n,e){let t=Ah(e);for(const r of n.elements)t=t.filter(i=>!Je(i,r));return{arrayValue:{values:t}}}class xi extends Xi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function mc(n){return ie(n.integerValue||n.doubleValue)}function Ah(n){return qo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ey(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof pr&&i instanceof pr||r instanceof _r&&i instanceof _r?En(r.elements,i.elements,Je):r instanceof xi&&i instanceof xi?Je(r.Pe,i.Pe):r instanceof ji&&i instanceof ji}(n.transform,e.transform)}class ty{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yi{}function Sh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qo(n.key,He.none()):new Or(n.key,n.data,He.none());{const t=n.data,r=je.empty();let i=new _e(pe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Zt(n.key,r,new $e(i.toArray()),He.none())}}function ny(n,e,t){n instanceof Or?function(i,s,a){const u=i.value.clone(),l=gc(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Zt?function(i,s,a){if(!Ti(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=gc(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Ph(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ar(n,e,t,r){return n instanceof Or?function(s,a,u,l){if(!Ti(s.precondition,a))return u;const d=s.value.clone(),f=pc(s.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zt?function(s,a,u,l){if(!Ti(s.precondition,a))return u;const d=pc(s.fieldTransforms,l,a),f=a.data;return f.setAll(Ph(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,u){return Ti(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function ry(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=wh(r.transform,i||null);s!=null&&(t===null&&(t=je.empty()),t.set(r.field,s))}return t||null}function fc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&En(r,i,(s,a)=>ey(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Or extends Yi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends Yi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ph(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function gc(n,e,t){const r=new Map;Q(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,Z_(a,u,t[i]))}return r}function pc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,J_(s,a,e))}return r}class Qo extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iy extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ny(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ar(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ar(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Eh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const l=Sh(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,(t,r)=>fc(t,r))&&En(this.baseMutations,e.baseMutations,(t,r)=>fc(t,r))}}class Xo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length);let i=function(){return W_}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Xo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,H;function uy(n){switch(n){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Ch(n){if(n===void 0)return ht("GRPC error has no .code"),P.UNKNOWN;switch(n){case oe.OK:return P.OK;case oe.CANCELLED:return P.CANCELLED;case oe.UNKNOWN:return P.UNKNOWN;case oe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case oe.INTERNAL:return P.INTERNAL;case oe.UNAVAILABLE:return P.UNAVAILABLE;case oe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case oe.NOT_FOUND:return P.NOT_FOUND;case oe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case oe.ABORTED:return P.ABORTED;case oe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case oe.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(H=oe||(oe={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new zt([4294967295,4294967295],0);function _c(n){const e=cy().encode(n),t=new Jl;return t.update(e),new Uint8Array(t.digest())}function yc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zt([t,r],0),new zt([i,s],0)]}class Yo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new er(`Invalid padding: ${t}`);if(r<0)throw new er(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new er(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new er(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=zt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(zt.fromNumber(r)));return i.compare(ly)===1&&(i=new zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=_c(e),[r,i]=yc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Yo(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=_c(e),[r,i]=yc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Mr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ji(F.min(),i,new te(W),dt(),$())}}class Mr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mr(r,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Rh{constructor(e,t){this.targetId=e,this.me=t}}class kh{constructor(e,t,r=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class vc{constructor(){this.fe=0,this.ge=Tc(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=$(),t=$(),r=$();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x()}}),new Mr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Tc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hy{constructor(e){this.Le=e,this.Be=new Map,this.ke=dt(),this.qe=Ec(),this.Qe=new te(W)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(uo(s))if(r===0){const a=new N(s.path);this.Ue(t,a,Ae.newNoDocument(a,F.min()))}else Q(r===1);else{const a=this.Ye(t);if(a!==r){const u=this.Ze(e),l=u?this.Xe(u,e,a):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=Xt(r).toUint8Array()}catch(l){if(l instanceof ah)return vn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Yo(a,i,s)}catch(l){return vn(l instanceof er?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const u=this.Je(a);if(u){if(s.current&&uo(u.target)){const l=new N(u.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Ae.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=$();this.qe.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Ji(e,t,this.Qe,this.ke,r);return this.ke=dt(),this.qe=Ec(),this.Qe=new te(W),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new vc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new _e(W),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ec(){return new te(N.comparator)}function Tc(){return new te(N.comparator)}const dy={asc:"ASCENDING",desc:"DESCENDING"},my={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fy={and:"AND",or:"OR"};class gy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ho(n,e){return n.useProto3Json||Wi(e)?e:{value:e}}function Li(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function py(n,e){return Li(n,e.toTimestamp())}function Xe(n){return Q(!!n),F.fromTimestamp(function(t){const r=kt(t);return new he(r.seconds,r.nanos)}(n))}function Jo(n,e){return mo(n,e).canonicalString()}function mo(n,e){const t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vh(n){const e=Z.fromString(n);return Q(xh(e)),e}function fo(n,e){return Jo(n.databaseId,e.path)}function js(n,e){const t=Vh(e);if(t.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new N(Mh(t))}function Oh(n,e){return Jo(n.databaseId,e)}function _y(n){const e=Vh(n);return e.length===4?Z.emptyPath():Mh(e)}function go(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mh(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wc(n,e,t){return{name:fo(n,e),fields:t.value.mapValue.fields}}function yy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Q(f===void 0||typeof f=="string"),ye.fromBase64String(f||"")):(Q(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ye.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const f=d.code===void 0?P.UNKNOWN:Ch(d.code);return new O(f,d.message||"")}(a);t=new kh(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=js(n,r.document.name),s=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):F.min(),u=new je({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(i,s,a,u),d=r.targetIds||[],f=r.removedTargetIds||[];t=new wi(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=js(n,r.document),s=r.readTime?Xe(r.readTime):F.min(),a=Ae.newNoDocument(i,s),u=r.removedTargetIds||[];t=new wi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=js(n,r.document),s=r.removedTargetIds||[];t=new wi([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new ay(i,s),u=r.targetId;t=new Rh(u,a)}}return t}function vy(n,e){let t;if(e instanceof Or)t={update:wc(n,e.key,e.value)};else if(e instanceof Qo)t={delete:fo(n,e.key)};else if(e instanceof Zt)t={update:wc(n,e.key,e.data),updateMask:Cy(e.fieldMask)};else{if(!(e instanceof iy))return x();t={verify:fo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof ji)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof pr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof _r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof xi)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:py(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:x()}(n,e.precondition)),t}function Ey(n,e){return n&&n.length>0?(Q(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Xe(i.updateTime):Xe(s);return a.isEqual(F.min())&&(a=Xe(s)),new ty(a,i.transformResults||[])}(t,e))):[]}function Ty(n,e){return{documents:[Oh(n,e.path)]}}function wy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Oh(n,i);const s=function(d){if(d.length!==0)return jh(ze.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:un(I.field),direction:Ay(I.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=ho(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Iy(n){let e=_y(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){const I=Nh(y);return I instanceof ze&&hh(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(I=>function(k){return new Ni(cn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(I))}(t.orderBy));let u=null;t.limit&&(u=function(y){let I;return I=typeof y=="object"?y.value:y,Wi(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(y){const I=!!y.before,S=y.values||[];return new Mi(S,I)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const I=!y.before,S=y.values||[];return new Mi(S,I)}(t.endAt)),G_(e,i,a,s,u,"F",l,d)}function by(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=cn(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=cn(t.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=cn(t.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cn(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ae.create(cn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(r=>Nh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function Ay(n){return dy[n]}function Sy(n){return my[n]}function Py(n){return fy[n]}function un(n){return{fieldPath:n.canonicalString()}}function cn(n){return pe.fromServerFormat(n.fieldPath)}function jh(n){return n instanceof ae?function(t){if(t.op==="=="){if(uc(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NAN"}};if(ac(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(uc(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NAN"}};if(ac(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(t.field),op:Sy(t.op),value:t.value}}}(n):n instanceof ze?function(t){const r=t.getFilters().map(i=>jh(i));return r.length===1?r[0]:{compositeFilter:{op:Py(t.op),filters:r}}}(n):x()}function Cy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,r,i,s=F.min(),a=F.min(),u=ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.ct=e}}function ky(n){const e=Iy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.un=new Vy}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Rt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Vy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new _e(Z.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new In(0)}static kn(){return new In(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.changes=new Dn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ar(r.mutation,i,$e.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,$()).next(()=>r))}getLocalViewOfDocuments(e,t,r=$()){const i=Gt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Zn();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Gt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,$()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=dt();const a=or(),u=function(){return or()}();return t.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Zt)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ar(f.mutation,d,f.mutation.getFieldMask(),he.now())):a.set(d.key,$e.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var y;return u.set(d,new My(f,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(e,t){const r=or();let i=new te((a,u)=>a-u),s=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||$e.empty();f=u.applyToLocalView(d,f),r.set(l,f);const y=(i.get(u.batchId)||$()).add(l);i=i.insert(u.batchId,y)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,f=l.value,y=Eh();f.forEach(I=>{if(!s.has(I)){const S=Sh(t.get(I),r.get(I));S!==null&&y.set(I,S),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):R.resolve(Gt());let u=-1,l=s;return a.next(d=>R.forEach(d,(f,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),s.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{l=l.insert(f,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,$())).next(f=>({batchId:u,changes:vh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next(r=>{let i=Zn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Zn();return this.indexManager.getCollectionParents(e,s).next(u=>R.forEach(u,l=>{const d=function(y,I){return new Vr(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ae.newInvalidDocument(f)))});let u=Zn();return a.forEach((l,d)=>{const f=s.get(l);f!==void 0&&ar(f.mutation,d,$e.empty(),he.now()),Qi(t,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:ky(i.bundledQuery),readTime:Xe(i.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.overlays=new te(N.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Gt();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const i=Gt(),s=t.length+1,a=new N(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new te((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Gt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Gt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=i)););return R.resolve(u)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new oy(t,r));let s=this.Ir.get(t);s===void 0&&(s=$(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.Tr=new _e(me.Er),this.dr=new _e(me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new me(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new me(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new N(new Z([])),r=new me(t,e),i=new me(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new N(new Z([])),r=new me(t,e),i=new me(t,e+1);let s=$();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new me(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return N.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||N.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new _e(me.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sy(s,t,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new me(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);s.push(u)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(W);return t.forEach(i=>{const s=new me(i,0),a=new me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],u=>{r=r.add(u.wr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const a=new me(new N(s),0);let u=new _e(W);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.wr)),!0)},a),R.resolve(this.Cr(u))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return R.forEach(t.mutations,i=>{const s=new me(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new me(t,0),i=this.br.firstAfterOrEqual(r);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.Mr=e,this.docs=function(){return new te(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=dt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ae.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=dt();const a=t.path,u=new N(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||I_(w_(f),r)<=0||(i.has(f.key)||Qi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,t,r,i){x()}Or(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new By(this)}getSize(e){return R.resolve(this.size)}}class By extends Oy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.persistence=e,this.Nr=new Dn(t=>Ho(t),zo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zo,this.targetCount=0,this.kr=In.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new In(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Bo(0),this.Kr=!1,this.Kr=!0,this.$r=new Ly,this.referenceDelegate=e(this),this.Ur=new Gy(this),this.indexManager=new Dy,this.remoteDocumentCache=function(i){return new Uy(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ry(t),this.Gr=new jy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Fy(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new qy(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return R.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class qy extends A_{constructor(e){super(),this.currentSequenceNumber=e}}class ea{constructor(e){this.persistence=e,this.Jr=new Zo,this.Yr=null}static Zr(e){return new ea(e)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,r=>{const i=N.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,F.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=$(),i=$();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ta(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zm()?8:S_(Se())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Hy;return this.Xi(e,t,a).next(u=>{if(s.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Xn()<=q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",an(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Xn()<=q.DEBUG&&M("QueryEngine","Query:",an(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Xn()<=q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",an(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):R.resolve())}Yi(e,t){if(dc(t))return R.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=lo(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=$(...s);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,u);return this.ns(t,d,a,l.readTime)?this.Yi(e,lo(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,i){return dc(t)||i.isEqual(F.min())?R.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?R.resolve(null):(Xn()<=q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),an(t)),this.rs(e,a,t,T_(i,-1)).next(u=>u))})}ts(e,t){let r=new _e(_h(e));return t.forEach((i,s)=>{Qi(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Xn()<=q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",an(t)),this.Ji.getDocumentsMatchingQuery(e,t,Rt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new te(W),this._s=new Dn(s=>Ho(s),zo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ny(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Ky(n,e,t,r){return new Wy(n,e,t,r)}async function Lh(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],u=[];let l=$();for(const d of i){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of s){u.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Qy(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(u,l,d,f){const y=d.batch,I=y.keys();let S=R.resolve();return I.forEach(k=>{S=S.next(()=>f.getEntry(l,k)).next(D=>{const C=d.docVersions.get(k);Q(C!==null),D.version.compareTo(C)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(l,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=$();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Fh(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Xy(n,e){const t=U(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const u=[];e.targetChanges.forEach((f,y)=>{const I=i.get(y);if(!I)return;u.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,y)));let S=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(ye.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(y,S),function(D,C,L){return D.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(I,S,f)&&u.push(t.Ur.updateTargetData(s,S))});let l=dt(),d=$();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(Yy(s,a,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(F.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(y=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(f)}return R.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.os=i,s))}function Yy(n,e,t){let r=$(),i=$();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=dt();return t.forEach((u,l)=>{const d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:i}})}function Jy(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zy(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new bt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function po(n,e,t){const r=U(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Dr(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ic(n,e,t){const r=U(n);let i=F.min(),s=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const y=U(l),I=y._s.get(f);return I!==void 0?R.resolve(y.os.get(I)):y.Ur.getTargetData(d,f)}(r,a,Qe(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:F.min(),t?s:$())).next(u=>(ev(r,q_(e),u),{documents:u,Ts:s})))}function ev(n,e,t){let r=n.us.get(e)||F.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class bc{constructor(){this.activeTargetIds=X_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tv{constructor(){this.so=new bc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di=null;function xs(){return di===null?di=function(){return 268435456+Math.round(2147483648*Math.random())}():di++,"0x"+di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="WebChannelConnection";class sv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const u=xs(),l=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${u}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(t,l,d,i).then(f=>(M("RestConnection",`Received RPC '${t}' ${u}: `,f),f),f=>{throw vn("RestConnection",`RPC '${t}' ${u} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(t,r,i,s,a,u){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=rv[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=xs();return new Promise((a,u)=>{const l=new Zl;l.setWithCredentials(!0),l.listenOnce(eh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vi.NO_ERROR:const f=l.getResponseJson();M(we,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case vi.TIMEOUT:M(we,`RPC '${e}' ${s} timed out`),u(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case vi.HTTP_ERROR:const y=l.getStatus();if(M(we,`RPC '${e}' ${s} failed with status:`,y,"response text:",l.getResponseText()),y>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const k=function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(L)>=0?L:P.UNKNOWN}(S.status);u(new O(k,S.message))}else u(new O(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new O(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{M(we,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);M(we,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=xs(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=rh(),u=nh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=s.join("");M(we,`Creating RPC '${e}' stream ${i}: ${f}`,l);const y=a.createWebChannel(f,l);let I=!1,S=!1;const k=new iv({Io:C=>{S?M(we,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(I||(M(we,`Opening RPC '${e}' stream ${i} transport.`),y.open(),I=!0),M(we,`RPC '${e}' stream ${i} sending:`,C),y.send(C))},To:()=>y.close()}),D=(C,L,B)=>{C.listen(L,G=>{try{B(G)}catch(Y){setTimeout(()=>{throw Y},0)}})};return D(y,Jn.EventType.OPEN,()=>{S||(M(we,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),D(y,Jn.EventType.CLOSE,()=>{S||(S=!0,M(we,`RPC '${e}' stream ${i} transport closed`),k.So())}),D(y,Jn.EventType.ERROR,C=>{S||(S=!0,vn(we,`RPC '${e}' stream ${i} transport errored:`,C),k.So(new O(P.UNAVAILABLE,"The operation could not be completed")))}),D(y,Jn.EventType.MESSAGE,C=>{var L;if(!S){const B=C.data[0];Q(!!B);const G=B,Y=G.error||((L=G[0])===null||L===void 0?void 0:L.error);if(Y){M(we,`RPC '${e}' stream ${i} received error:`,Y);const ue=Y.status;let K=function(p){const v=oe[p];if(v!==void 0)return Ch(v)}(ue),T=Y.message;K===void 0&&(K=P.INTERNAL,T="Unknown error status: "+ue+" with message "+Y.message),S=!0,k.So(new O(K,T)),y.close()}else M(we,`RPC '${e}' stream ${i} received:`,B),k.bo(B)}}),D(u,th.STAT_EVENT,C=>{C.stat===io.PROXY?M(we,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===io.NOPROXY&&M(we,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){return new gy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,r,i,s,a,u,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Uh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ht(t.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ov extends Bh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=yy(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Xe(a.readTime):F.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=go(this.serializer),t.addTarget=function(s,a){let u;const l=a.target;if(u=uo(l)?{documents:Ty(s,l)}:{query:wy(s,l)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Dh(s,a.resumeToken);const d=ho(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){u.readTime=Li(s,a.snapshotVersion.toTimestamp());const d=ho(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=by(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=go(this.serializer),t.removeTarget=e,this.a_(t)}}class av extends Bh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Ey(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=go(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vy(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,mo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(P.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,mo(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class cv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ht(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{en(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=U(l);d.L_.add(4),await Nr(d),d.q_.set("Unknown"),d.L_.delete(4),await es(d)}(this))})}),this.q_=new cv(r,i)}}async function es(n){if(en(n))for(const e of n.B_)await e(!0)}async function Nr(n){for(const e of n.B_)await e(!1)}function Gh(n,e){const t=U(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),sa(t)?ia(t):Vn(t).r_()&&ra(t,e))}function na(n,e){const t=U(n),r=Vn(t);t.N_.delete(e),r.r_()&&$h(t,e),t.N_.size===0&&(r.r_()?r.o_():en(t)&&t.q_.set("Unknown"))}function ra(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vn(n).A_(e)}function $h(n,e){n.Q_.xe(e),Vn(n).R_(e)}function ia(n){n.Q_=new hy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Vn(n).start(),n.q_.v_()}function sa(n){return en(n)&&!Vn(n).n_()&&n.N_.size>0}function en(n){return U(n).L_.size===0}function qh(n){n.Q_=void 0}async function hv(n){n.q_.set("Online")}async function dv(n){n.N_.forEach((e,t)=>{ra(n,e)})}async function mv(n,e){qh(n),sa(n)?(n.q_.M_(e),ia(n)):n.q_.set("Unknown")}async function fv(n,e,t){if(n.q_.set("Online"),e instanceof kh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fi(n,r)}else if(e instanceof wi?n.Q_.Ke(e):e instanceof Rh?n.Q_.He(e):n.Q_.We(e),!t.isEqual(F.min()))try{const r=await Fh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const u=s.Q_.rt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const f=s.N_.get(l);if(!f)return;s.N_.set(l,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),$h(s,l);const y=new bt(f.target,l,d,f.sequenceNumber);ra(s,y)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Fi(n,r)}}async function Fi(n,e,t){if(!Dr(e))throw e;n.L_.add(1),await Nr(n),n.q_.set("Offline"),t||(t=()=>Fh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await es(n)})}function Hh(n,e){return e().catch(t=>Fi(n,t,e))}async function ts(n){const e=U(n),t=Dt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;gv(e);)try{const i=await Jy(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,pv(e,i)}catch(i){await Fi(e,i)}zh(e)&&Wh(e)}function gv(n){return en(n)&&n.O_.length<10}function pv(n,e){n.O_.push(e);const t=Dt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function zh(n){return en(n)&&!Dt(n).n_()&&n.O_.length>0}function Wh(n){Dt(n).start()}async function _v(n){Dt(n).p_()}async function yv(n){const e=Dt(n);for(const t of n.O_)e.m_(t.mutations)}async function vv(n,e,t){const r=n.O_.shift(),i=Xo.from(r,e,t);await Hh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ts(n)}async function Ev(n,e){e&&Dt(n).V_&&await async function(r,i){if(function(a){return uy(a)&&a!==P.ABORTED}(i.code)){const s=r.O_.shift();Dt(r).s_(),await Hh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ts(r)}}(n,e),zh(n)&&Wh(n)}async function Sc(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=en(t);t.L_.add(3),await Nr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await es(t)}async function Tv(n,e){const t=U(n);e?(t.L_.delete(2),await es(t)):e||(t.L_.add(2),await Nr(t),t.q_.set("Unknown"))}function Vn(n){return n.K_||(n.K_=function(t,r,i){const s=U(t);return s.w_(),new ov(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:hv.bind(null,n),Ro:dv.bind(null,n),mo:mv.bind(null,n),d_:fv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),sa(n)?ia(n):n.q_.set("Unknown")):(await n.K_.stop(),qh(n))})),n.K_}function Dt(n){return n.U_||(n.U_=function(t,r,i){const s=U(t);return s.w_(),new av(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_v.bind(null,n),mo:Ev.bind(null,n),f_:yv.bind(null,n),g_:vv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ts(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,u=new oa(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aa(n,e){if(ht("AsyncQueue",`${e}: ${n}`),Dr(n))return new O(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||N.comparator(t.key,r.key):(t,r)=>N.comparator(t.key,r.key),this.keyedMap=Zn(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new pn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new pn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.W_=new te(N.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):x():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class bn{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new bn(e,t,pn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ki(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Iv{constructor(){this.queries=Cc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=U(t),s=i.queries;i.queries=Cc(),s.forEach((a,u)=>{for(const l of u.j_)l.onError(r)})})(this,new O(P.ABORTED,"Firestore shutting down"))}}function Cc(){return new Dn(n=>ph(n),Ki)}async function Kh(n,e){const t=U(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new wv,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=aa(a,`Initialization of query '${an(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&ua(t)}async function Qh(n,e){const t=U(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function bv(n,e){const t=U(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&ua(t)}function Av(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function ua(n){n.Y_.forEach(e=>{e.next()})}var _o,Rc;(Rc=_o||(_o={})).ea="default",Rc.Cache="cache";class Xh{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_o.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.key=e}}class Jh{constructor(e){this.key=e}}class Sv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=$(),this.mutatedKeys=$(),this.Aa=_h(e),this.Ra=new pn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Pc,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const I=i.get(f),S=Qi(this.query,y)?y:null,k=!!I&&this.mutatedKeys.has(I.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;I&&S?I.data.isEqual(S.data)?k!==D&&(r.track({type:3,doc:S}),C=!0):this.ga(I,S)||(r.track({type:2,doc:S}),C=!0,(l&&this.Aa(S,l)>0||d&&this.Aa(S,d)<0)&&(u=!0)):!I&&S?(r.track({type:0,doc:S}),C=!0):I&&!S&&(r.track({type:1,doc:I}),C=!0,(l||d)&&(u=!0)),C&&(S?(a=a.add(S),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:u,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,y)=>function(S,k){const D=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return D(S)-D(k)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const u=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new bn(this.query,e.Ra,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=$(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Jh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Yh(r))}),t}ba(e){this.Ta=e.Ts,this.da=$();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return bn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Pv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Cv{constructor(e){this.key=e,this.va=!1}}class Rv{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Dn(u=>ph(u),Ki),this.Ma=new Map,this.xa=new Set,this.Oa=new te(N.comparator),this.Na=new Map,this.La=new Zo,this.Ba={},this.ka=new Map,this.qa=In.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kv(n,e,t=!0){const r=id(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Zh(r,e,t,!0),i}async function Dv(n,e){const t=id(n);await Zh(t,e,!0,!1)}async function Zh(n,e,t,r){const i=await Zy(n.localStore,Qe(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await Vv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Gh(n.remoteStore,i),u}async function Vv(n,e,t,r,i){n.Ka=(y,I,S)=>async function(D,C,L,B){let G=C.view.ma(L);G.ns&&(G=await Ic(D.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,G)));const Y=B&&B.targetChanges.get(C.targetId),ue=B&&B.targetMismatches.get(C.targetId)!=null,K=C.view.applyChanges(G,D.isPrimaryClient,Y,ue);return Dc(D,C.targetId,K.wa),K.snapshot}(n,y,I,S);const s=await Ic(n.localStore,e,!0),a=new Sv(e,s.Ts),u=a.ma(s.documents),l=Mr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);Dc(n,t,d.wa);const f=new Pv(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Ov(n,e,t){const r=U(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Ki(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await po(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&na(r.remoteStore,i.targetId),yo(r,i.targetId)}).catch(kr)):(yo(r,i.targetId),await po(r.localStore,i.targetId,!0))}async function Mv(n,e){const t=U(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),na(t.remoteStore,r.targetId))}async function Nv(n,e,t){const r=Gv(n);try{const i=await function(a,u){const l=U(a),d=he.now(),f=u.reduce((S,k)=>S.add(k.key),$());let y,I;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=dt(),D=$();return l.cs.getEntries(S,f).next(C=>{k=C,k.forEach((L,B)=>{B.isValidDocument()||(D=D.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,k)).next(C=>{y=C;const L=[];for(const B of u){const G=ry(B,y.get(B.key).overlayedDocument);G!=null&&L.push(new Zt(B.key,G,uh(G.value.mapValue),He.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,L,u)}).next(C=>{I=C;const L=C.applyToLocalDocumentSet(y,D);return l.documentOverlayCache.saveOverlays(S,C.batchId,L)})}).then(()=>({batchId:I.batchId,changes:vh(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new te(W)),d=d.insert(u,l),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await jr(r,i.changes),await ts(r.remoteStore)}catch(i){const s=aa(i,"Failed to persist write");t.reject(s)}}async function ed(n,e){const t=U(n);try{const r=await Xy(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Q(a.va):i.removedDocuments.size>0&&(Q(a.va),a.va=!1))}),await jr(t,r,e)}catch(r){await kr(r)}}function kc(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const l=U(a);l.onlineState=u;let d=!1;l.queries.forEach((f,y)=>{for(const I of y.j_)I.Z_(u)&&(d=!0)}),d&&ua(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jv(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new te(N.comparator);a=a.insert(s,Ae.newNoDocument(s,F.min()));const u=$().add(s),l=new Ji(F.min(),new Map,new te(W),a,u);await ed(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),ca(r)}else await po(r.localStore,e,!1).then(()=>yo(r,e,t)).catch(kr)}async function xv(n,e){const t=U(n),r=e.batch.batchId;try{const i=await Qy(t.localStore,e);nd(t,r,null),td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await jr(t,i)}catch(i){await kr(i)}}async function Lv(n,e,t){const r=U(n);try{const i=await function(a,u){const l=U(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,u).next(y=>(Q(y!==null),f=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);nd(r,e,t),td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await jr(r,i)}catch(i){await kr(i)}}function td(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function nd(n,e,t){const r=U(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function yo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||rd(n,r)})}function rd(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(na(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ca(n))}function Dc(n,e,t){for(const r of t)r instanceof Yh?(n.La.addReference(r.key,e),Fv(n,r)):r instanceof Jh?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||rd(n,r.key)):x()}function Fv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),ca(n))}function ca(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new N(Z.fromString(e)),r=n.qa.next();n.Na.set(r,new Cv(t)),n.Oa=n.Oa.insert(t,r),Gh(n.remoteStore,new bt(Qe(Wo(t.path)),r,"TargetPurposeLimboResolution",Bo.oe))}}async function jr(n,e,t){const r=U(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,l)=>{a.push(r.Ka(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){i.push(d);const y=ta.Wi(l.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(l,d){const f=U(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>R.forEach(d,I=>R.forEach(I.$i,S=>f.persistence.referenceDelegate.addReference(y,I.targetId,S)).next(()=>R.forEach(I.Ui,S=>f.persistence.referenceDelegate.removeReference(y,I.targetId,S)))))}catch(y){if(!Dr(y))throw y;M("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const I=y.targetId;if(!y.fromCache){const S=f.os.get(I),k=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(I,D)}}}(r.localStore,s))}async function Uv(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Lh(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(u=>{u.forEach(l=>{l.reject(new O(P.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jr(t,r.hs)}}function Bv(n,e){const t=U(n),r=t.Na.get(e);if(r&&r.va)return $().add(r.key);{let i=$();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function id(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jv.bind(null,e),e.Ca.d_=bv.bind(null,e.eventManager),e.Ca.$a=Av.bind(null,e.eventManager),e}function Gv(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lv.bind(null,e),e}class Ui{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Ky(this.persistence,new zy,e.initialUser,this.serializer)}Ga(e){return new $y(ea.Zr,this.serializer)}Wa(e){return new tv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ui.provider={build:()=>new Ui};class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uv.bind(null,this.syncEngine),await Tv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Iv}()}createDatastore(e){const t=Zi(e.databaseInfo.databaseId),r=function(s){return new sv(s)}(e.databaseInfo);return function(s,a,u,l){return new uv(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new lv(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>kc(this.syncEngine,t,0),function(){return Ac.D()?new Ac:new nv}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,f){const y=new Rv(i,s,a,u,l,d);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=U(i);M("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Nr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vo.provider={build:()=>new vo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=sh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=aa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fs(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Vc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qv(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Sc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Sc(e.remoteStore,i)),n._onlineComponents=e}async function qv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;vn("Error using user provided cache. Falling back to memory cache: "+t),await Fs(n,new Ui)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Fs(n,new Ui);return n._offlineComponents}async function od(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Vc(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Vc(n,new vo))),n._onlineComponents}function Hv(n){return od(n).then(e=>e.syncEngine)}async function ad(n){const e=await od(n),t=e.eventManager;return t.onListen=kv.bind(null,e.syncEngine),t.onUnlisten=Ov.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Dv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Mv.bind(null,e.syncEngine),t}function zv(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){const f=new sd({next:I=>{f.Za(),a.enqueueAndForget(()=>Qh(s,y));const S=I.docs.has(u);!S&&I.fromCache?d.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&l&&l.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new Xh(Wo(u.path),f,{includeMetadataChanges:!0,_a:!0});return Kh(s,y)}(await ad(n),n.asyncQueue,e,t,r)),r.promise}function Wv(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){const f=new sd({next:I=>{f.Za(),a.enqueueAndForget(()=>Qh(s,y)),I.fromCache&&l.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new Xh(u,f,{includeMetadataChanges:!0,_a:!0});return Kh(s,y)}(await ad(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Kv(n,e,t,r){if(e===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Mc(n){if(!N.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nc(n){if(N.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ns(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function mt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ns(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ud((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d_;switch(r.type){case"firstParty":return new p_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Oc.get(t);r&&(M("ComponentProvider","Removing Datastore"),Oc.delete(t),r.terminate())}(this),Promise.resolve()}}function Qv(n,e,t,r={}){var i;const s=(n=mt(n,rs))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=be.MOCK_USER;else{u=Fm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new be(d)}n._authCredentials=new m_(new ih(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new On(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class Ct extends On{constructor(e,t,r){super(e,t,Wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new N(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function la(n,e,...t){if(n=De(n),cd("collection","path",e),n instanceof rs){const r=Z.fromString(e,...t);return Nc(r),new Ct(n,null,r)}{if(!(n instanceof ke||n instanceof Ct))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Nc(r),new Ct(n.firestore,null,r)}}function xr(n,e,...t){if(n=De(n),arguments.length===1&&(e=sh.newId()),cd("doc","path",e),n instanceof rs){const r=Z.fromString(e,...t);return Mc(r),new ke(n,null,new N(r))}{if(!(n instanceof ke||n instanceof Ct))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Mc(r),new ke(n.firestore,n instanceof Ct?n.converter:null,new N(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Uh(this,"async_queue_retry"),this.Vu=()=>{const r=Ls();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ls();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ut;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Dr(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=oa.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Mn extends rs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new xc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xc(e),this._firestoreClient=void 0,await e}}}function Xv(n,e){const t=typeof n=="object"?n:yl(),r=typeof n=="string"?n:"(default)",i=Co(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xm("firestore");s&&Qv(i,...s)}return i}function ha(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yv(n),n._firestoreClient}function Yv(n){var e,t,r;const i=n._freezeSettings(),s=function(u,l,d,f){return new R_(u,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ud(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new $v(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(ye.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=/^__.*__$/;class Zv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Or(e,this.data,t,this.fieldTransforms)}}function hd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ga{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(hd(this.Cu)&&Jv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class eE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zi(e)}Qu(e,t,r,i=!1){return new ga({Cu:e,methodName:t,qu:r,path:pe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pa(n){const e=n._freezeSettings(),t=Zi(n._databaseId);return new eE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dd(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);gd("Data must be an object, but it was:",a,r);const u=md(r,a);let l,d;if(s.merge)l=new $e(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const I=nE(e,y,t);if(!a.contains(I))throw new O(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);iE(f,I)||f.push(I)}l=new $e(f),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new Zv(new je(u),l,d)}function tE(n,e,t,r=!1){return _a(t,n.Qu(r?4:3,e))}function _a(n,e){if(fd(n=De(n)))return gd("Unsupported field value:",e,n),md(n,e);if(n instanceof ld)return function(r,i){if(!hd(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const u of r){let l=_a(u,i.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Y_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:Li(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Li(i.serializer,s)}}if(r instanceof ma)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:Dh(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fa)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw u.Bu("VectorValues must only contain numeric values.");return Ko(u.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ns(r)}`)}(n,e)}function md(n,e){const t={};return oh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kn(n,(r,i)=>{const s=_a(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function fd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof ma||n instanceof An||n instanceof ke||n instanceof ld||n instanceof fa)}function gd(n,e,t){if(!fd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ns(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function nE(n,e,t){if((e=De(e))instanceof da)return e._internalPath;if(typeof e=="string")return pd(n,e);throw Bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const rE=new RegExp("[~\\*/\\[\\]]");function pd(n,e,t){if(e.search(rE)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new da(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new O(P.INVALID_ARGUMENT,u+n+l)}function iE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(yd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sE extends _d{data(){return super.data()}}function yd(n,e){return typeof e=="string"?pd(n,e):e instanceof da?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ya{}class aE extends ya{}function uE(n,e,...t){let r=[];e instanceof ya&&r.push(e),r=r.concat(t),function(s){const a=s.filter(l=>l instanceof Ea).length,u=s.filter(l=>l instanceof va).length;if(a>1||a>0&&u>0)throw new O(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class va extends aE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new va(e,t,r)}_apply(e){const t=this._parse(e);return vd(e._query,t),new On(e.firestore,e.converter,co(e._query,t))}_parse(e){const t=pa(e.firestore);return function(s,a,u,l,d,f,y){let I;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Fc(y,f);const S=[];for(const k of y)S.push(Lc(l,s,k));I={arrayValue:{values:S}}}else I=Lc(l,s,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Fc(y,f),I=tE(u,a,y,f==="in"||f==="not-in");return ae.create(d,f,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ea extends ya{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ea(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const u=s.getFlattenedFilters();for(const l of u)vd(a,l),a=co(a,l)}(e._query,t),new On(e.firestore,e.converter,co(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lc(n,e,t){if(typeof(t=De(t))=="string"){if(t==="")throw new O(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gh(e)&&t.indexOf("/")!==-1)throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Z.fromString(t));if(!N.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oc(n,new N(r))}if(t instanceof ke)return oc(n,t._key);throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ns(t)}.`)}function Fc(n,e){if(!Array.isArray(n)||n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vd(n,e){const t=function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class cE{convertValue(e,t="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return kn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ie(a.doubleValue));return new fa(s)}convertGeoPoint(e){return new ma(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$o(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mr(e));default:return null}}convertTimestamp(e){const t=kt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);Q(xh(r));const i=new fr(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(t)||ht(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Td extends _d{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(yd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ii extends Td{data(e={}){return super.data(e)}}class lE{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new tr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ii(this._firestore,this._userDataWriter,r.key,r,new tr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const l=new Ii(i._firestore,i._userDataWriter,u.doc.key,u.doc,new tr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const l=new Ii(i._firestore,i._userDataWriter,u.doc.key,u.doc,new tr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:hE(u.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){n=mt(n,ke);const e=mt(n.firestore,Mn);return zv(ha(e),n._key).then(t=>gE(e,n,t))}class wd extends cE{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function Id(n){n=mt(n,On);const e=mt(n.firestore,Mn),t=ha(e),r=new wd(e);return oE(n._query),Wv(t,n._query).then(i=>new lE(e,r,n,i))}function is(n,e,t){n=mt(n,ke);const r=mt(n.firestore,Mn),i=Ed(n.converter,e,t);return Ta(r,[dd(pa(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function mE(n){return Ta(mt(n.firestore,Mn),[new Qo(n._key,He.none())])}function fE(n,e){const t=mt(n.firestore,Mn),r=xr(n),i=Ed(n.converter,e);return Ta(t,[dd(pa(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,He.exists(!1))]).then(()=>r)}function Ta(n,e){return function(r,i){const s=new ut;return r.asyncQueue.enqueueAndForget(async()=>Nv(await Hv(r),i,s)),s.promise}(ha(n),e)}function gE(n,e,t){const r=t.docs.get(e._key),i=new wd(n);return new Td(n,i,e._key,r,new tr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Rn=i})(Pn),_n(new Wt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new Mn(new f_(r.getProvider("auth-internal")),new y_(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Pt(tc,"4.7.3",e),Pt(tc,"4.7.3","esm2017")})();const pE={apiKey:"AIzaSyAphMv-VXdQW9FmSpllpkZvD8eADWJfTGs",authDomain:"ludoteca-dd2a3.firebaseapp.com",projectId:"ludoteca-dd2a3",storageBucket:"ludoteca-dd2a3.firebasestorage.app",messagingSenderId:"1081800731370",appId:"1:1081800731370:web:20f29904827b49fc218593",measurementId:"G-881R33BB86"},bd=_l(pE),Re=l_(bd),tn=Xv(bd),_E=new rt;async function yE(n){const e=xr(tn,"users",n.uid),t=await dE(e);if(t.exists())return console.log("User profile already exists for:",n.uid),t.data();{const r={displayName:n.displayName,email:n.email,photoURL:n.photoURL,createdAt:new Date,isPublic:!1};try{return await is(e,r),console.log("User profile created for:",n.uid),r}catch(i){return console.error("Error creating user profile:",i),null}}}async function vE(n,e){const t=xr(tn,"users",n);try{await is(t,{isPublic:e},{merge:!0}),console.log("User visibility updated to:",e)}catch(r){throw console.error("Error updating user visibility:",r),r}}async function wa(n){const e=la(tn,"users",n,"games"),t=uE(e),r=await Id(t),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function Ad(n,e){try{const t=la(tn,"users",n,"games");await fE(t,e),console.log("Game added to library")}catch(t){throw console.error("Error adding game:",t),t}}async function EE(n,e,t){const r=xr(tn,"users",n,"games",e);try{await is(r,{lookingForPlayers:t},{merge:!0}),console.log(`Game ${e} lookingForPlayers set to ${t}`)}catch(i){throw console.error("Error updating game status:",i),i}}async function TE(n,e,t){const r=xr(tn,"users",n,"wishlist",e.id);try{t?await is(r,{...e,addedAt:new Date}):await mE(r),console.log(`Game ${e.id} wishlist status: ${t}`)}catch(i){throw console.error("Error updating wishlist:",i),i}}async function wE(n){const e=la(tn,"users",n,"wishlist"),t=await Id(e),r=[];return t.forEach(i=>r.push(i.data())),r}const IE={createDocument:function(e){return new DOMParser().parseFromString(e.trim(),"text/xml")}};var Me=Uint8Array,$t=Uint16Array,Sd=Uint32Array,Pd=new Me([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cd=new Me([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bE=new Me([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Rd=function(n,e){for(var t=new $t(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new Sd(t[30]),r=1;r<30;++r)for(var s=t[r];s<t[r+1];++s)i[s]=s-t[r]<<5|r;return[t,i]},kd=Rd(Pd,2),Dd=kd[0],AE=kd[1];Dd[28]=258,AE[258]=28;var SE=Rd(Cd,0),PE=SE[0],Eo=new $t(32768);for(var ee=0;ee<32768;++ee){var Et=(ee&43690)>>>1|(ee&21845)<<1;Et=(Et&52428)>>>2|(Et&13107)<<2,Et=(Et&61680)>>>4|(Et&3855)<<4,Eo[ee]=((Et&65280)>>>8|(Et&255)<<8)>>>1}var ur=function(n,e,t){for(var r=n.length,i=0,s=new $t(e);i<r;++i)n[i]&&++s[n[i]-1];var a=new $t(e);for(i=0;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var u;if(t){u=new $t(1<<e);var l=15-e;for(i=0;i<r;++i)if(n[i])for(var d=i<<4|n[i],f=e-n[i],y=a[n[i]-1]++<<f,I=y|(1<<f)-1;y<=I;++y)u[Eo[y]>>>l]=d}else for(u=new $t(r),i=0;i<r;++i)n[i]&&(u[i]=Eo[a[n[i]-1]++]>>>15-n[i]);return u},Lr=new Me(288);for(var ee=0;ee<144;++ee)Lr[ee]=8;for(var ee=144;ee<256;++ee)Lr[ee]=9;for(var ee=256;ee<280;++ee)Lr[ee]=7;for(var ee=280;ee<288;++ee)Lr[ee]=8;var Vd=new Me(32);for(var ee=0;ee<32;++ee)Vd[ee]=5;var CE=ur(Lr,9,1),RE=ur(Vd,5,1),Us=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Ue=function(n,e,t){var r=e/8|0;return(n[r]|n[r+1]<<8)>>(e&7)&t},Bs=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},kE=function(n){return(n+7)/8|0},Ia=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var r=new(n.BYTES_PER_ELEMENT==2?$t:n.BYTES_PER_ELEMENT==4?Sd:Me)(t-e);return r.set(n.subarray(e,t)),r},DE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Be=function(n,e,t){var r=new Error(e||DE[n]);if(r.code=n,Error.captureStackTrace&&Error.captureStackTrace(r,Be),!t)throw r;return r},VE=function(n,e,t){var r=n.length;if(!r||t&&t.f&&!t.l)return e||new Me(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new Me(r*3));var a=function(Ur){var Ot=e.length;if(Ur>Ot){var Br=new Me(Math.max(Ot*2,Ur));Br.set(e),e=Br}},u=t.f||0,l=t.p||0,d=t.b||0,f=t.l,y=t.d,I=t.m,S=t.n,k=r*8;do{if(!f){u=Ue(n,l,1);var D=Ue(n,l+1,3);if(l+=3,D)if(D==1)f=CE,y=RE,I=9,S=5;else if(D==2){var G=Ue(n,l,31)+257,Y=Ue(n,l+10,15)+4,ue=G+Ue(n,l+5,31)+1;l+=14;for(var K=new Me(ue),T=new Me(19),g=0;g<Y;++g)T[bE[g]]=Ue(n,l+g*3,7);l+=Y*3;for(var p=Us(T),v=(1<<p)-1,E=ur(T,p,1),g=0;g<ue;){var w=E[Ue(n,l,v)];l+=w&15;var C=w>>>4;if(C<16)K[g++]=C;else{var _=0,de=0;for(C==16?(de=3+Ue(n,l,3),l+=2,_=K[g-1]):C==17?(de=3+Ue(n,l,7),l+=3):C==18&&(de=11+Ue(n,l,127),l+=7);de--;)K[g++]=_}}var ne=K.subarray(0,G),ce=K.subarray(G);I=Us(ne),S=Us(ce),f=ur(ne,I,1),y=ur(ce,S,1)}else Be(1);else{var C=kE(l)+4,L=n[C-4]|n[C-3]<<8,B=C+L;if(B>r){s&&Be(0);break}i&&a(d+L),e.set(n.subarray(C,B),d),t.b=d+=L,t.p=l=B*8,t.f=u;continue}if(l>k){s&&Be(0);break}}i&&a(d+131072);for(var xe=(1<<I)-1,Le=(1<<S)-1,et=l;;et=l){var _=f[Bs(n,l)&xe],Ve=_>>>4;if(l+=_&15,l>k){s&&Be(0);break}if(_||Be(2),Ve<256)e[d++]=Ve;else if(Ve==256){et=l,f=null;break}else{var Vt=Ve-254;if(Ve>264){var g=Ve-257,le=Pd[g];Vt=Ue(n,l,(1<<le)-1)+Dd[g],l+=le}var se=y[Bs(n,l)&Le],Nn=se>>>4;se||Be(3),l+=se&15;var ce=PE[Nn];if(Nn>3){var le=Cd[Nn];ce+=Bs(n,l)&(1<<le)-1,l+=le}if(l>k){s&&Be(0);break}i&&a(d+131072);for(var gt=d+Vt;d<gt;d+=4)e[d]=e[d-ce],e[d+1]=e[d+1-ce],e[d+2]=e[d+2-ce],e[d+3]=e[d+3-ce];d=gt}}t.l=f,t.p=et,t.b=d,t.f=u,f&&(u=1,t.m=I,t.d=y,t.n=S)}while(!u);return d==e.length?e:Ia(e,0,d)},OE=new Me(0),We=function(n,e){return n[e]|n[e+1]<<8},Ge=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Gs=function(n,e){return Ge(n,e)+Ge(n,e+4)*4294967296};function ME(n,e){return VE(n,e)}var To=typeof TextDecoder<"u"&&new TextDecoder,NE=0;try{To.decode(OE,{stream:!0}),NE=1}catch{}var jE=function(n){for(var e="",t=0;;){var r=n[t++],i=(r>127)+(r>223)+(r>239);if(t+i>n.length)return[e,Ia(n,t-1)];i?i==3?(r=((r&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|n[t++]&63):e+=String.fromCharCode((r&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(r)}};function Od(n,e){if(e){for(var t="",r=0;r<n.length;r+=16384)t+=String.fromCharCode.apply(null,n.subarray(r,r+16384));return t}else{if(To)return To.decode(n);var i=jE(n),s=i[0],a=i[1];return a.length&&Be(8),s}}var xE=function(n,e){return e+30+We(n,e+26)+We(n,e+28)},LE=function(n,e,t){var r=We(n,e+28),i=Od(n.subarray(e+46,e+46+r),!(We(n,e+8)&2048)),s=e+46+r,a=Ge(n,e+20),u=t&&a==4294967295?FE(n,s):[a,Ge(n,e+24),Ge(n,e+42)],l=u[0],d=u[1],f=u[2];return[We(n,e+10),l,d,i,s+We(n,e+30)+We(n,e+32),f]},FE=function(n,e){for(;We(n,e)!=1;e+=4+We(n,e+2));return[Gs(n,e+12),Gs(n,e+4),Gs(n,e+20)]};function UE(n,e){for(var t={},r=n.length-22;Ge(n,r)!=101010256;--r)(!r||n.length-r>65558)&&Be(13);var i=We(n,r+8);if(!i)return{};var s=Ge(n,r+16),a=s==4294967295||i==65535;if(a){var u=Ge(n,r-12);a=Ge(n,u)==101075792,a&&(i=Ge(n,u+32),s=Ge(n,u+48))}for(var l=0;l<i;++l){var d=LE(n,s,a),f=d[0],y=d[1],I=d[2],S=d[3],k=d[4],D=d[5],C=xE(n,D);s=k,f?f==8?t[S]=ME(n.subarray(C,C+y),new Me(I)):Be(14,"unknown compression type "+f):t[S]=Ia(n,C,C+y)}return t}function BE(n){return n instanceof File||n instanceof Blob?n.arrayBuffer().then($s):$s(n)}function $s(n){var e=new Uint8Array(n),t=UE(e);return Promise.resolve(GE(t))}function GE(n){for(var e=[],t=0,r=Object.keys(n);t<r.length;t++){var i=r[t];e[i]=Od(n[i])}return e}function Ze(n,e){for(var t=0;t<n.childNodes.length;){var r=n.childNodes[t];if(r.nodeType===1&&Jt(r)===e)return r;t++}}function Fr(n,e){for(var t=[],r=0;r<n.childNodes.length;){var i=n.childNodes[r];i.nodeType===1&&Jt(i)===e&&t.push(i),r++}return t}function Gi(n,e,t){for(var r=0;r<n.childNodes.length;){var i=n.childNodes[r];e?i.nodeType===1&&Jt(i)===e&&t(i,r):t(i,r),r++}}function $E(n,e,t){var r=[];return Gi(n,e,function(i,s){r.push(t(i,s))}),r}var qE=/.+\:/;function Jt(n){return n.tagName.replace(qE,"")}function Md(n){if(n.nodeType!==1)return n.textContent;for(var e="<"+Jt(n),t=0;t<n.attributes.length;)e+=" "+n.attributes[t].name+'="'+n.attributes[t].value+'"',t++;e+=">";for(var r=0;r<n.childNodes.length;)e+=Md(n.childNodes[r]),r++;return e+="</"+Jt(n)+">",e}function HE(n){var e=n.documentElement,t=Ze(e,"sheetData"),r=[];return Gi(t,"row",function(i){Gi(i,"c",function(s){r.push(s)})}),r}function zE(n,e){return Ze(e,"v")}function WE(n,e){if(e.firstChild&&Jt(e.firstChild)==="is"&&e.firstChild.firstChild&&Jt(e.firstChild.firstChild)==="t")return e.firstChild.firstChild.textContent}function KE(n){var e=n.documentElement,t=Ze(e,"dimension");if(t)return t.getAttribute("ref")}function QE(n){var e=n.documentElement,t=Ze(e,"cellStyleXfs");return t?Fr(t,"xf"):[]}function XE(n){var e=n.documentElement,t=Ze(e,"cellXfs");return t?Fr(t,"xf"):[]}function YE(n){var e=n.documentElement,t=Ze(e,"numFmts");return t?Fr(t,"numFmt"):[]}function JE(n){var e=n.documentElement;return $E(e,"si",function(t){var r=Ze(t,"t");if(r)return r.textContent;var i="";return Gi(t,"r",function(s){i+=Ze(s,"t").textContent}),i})}function ZE(n){var e=n.documentElement;return Ze(e,"workbookPr")}function eT(n){var e=n.documentElement;return Fr(e,"Relationship")}function tT(n){var e=n.documentElement,t=Ze(e,"sheets");return Fr(t,"sheet")}function nT(n,e){var t=e.createDocument(n),r={},i=ZE(t);i&&i.getAttribute("date1904")==="1"&&(r.epoch1904=!0),r.sheets=[];var s=function(u){u.getAttribute("name")&&r.sheets.push({id:u.getAttribute("sheetId"),name:u.getAttribute("name"),relationId:u.getAttribute("r:id")})};return tT(t).forEach(s),r}function rT(n,e){var t=e.createDocument(n),r={sheets:{},sharedStrings:void 0,styles:void 0},i=function(a){var u=a.getAttribute("Target"),l=a.getAttribute("Type");switch(l){case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":r.styles=qs(u);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":r.sharedStrings=qs(u);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":r.sheets[a.getAttribute("Id")]=qs(u);break}};return eT(t).forEach(i),r}function qs(n){return n[0]==="/"?n.slice(1):"xl/"+n}function yr(n){"@babel/helpers - typeof";return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yr(n)}function Uc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Bc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Uc(Object(t),!0).forEach(function(r){iT(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Uc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function iT(n,e,t){return e=sT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function sT(n){var e=oT(n,"string");return yr(e)==="symbol"?e:String(e)}function oT(n,e){if(yr(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(yr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function aT(n,e){if(!n)return{};var t=e.createDocument(n),r=QE(t).map(Hs),i=YE(t).map(uT).reduce(function(a,u){return a[u.id]=u,a},[]),s=function(u){return u.hasAttribute("xfId")?Bc(Bc({},r[u.xfId]),Hs(u,i)):Hs(u,i)};return XE(t).map(s)}function uT(n){return{id:n.getAttribute("numFmtId"),template:n.getAttribute("formatCode")}}function Hs(n,e){var t={};if(n.hasAttribute("numFmtId")){var r=n.getAttribute("numFmtId");e[r]?t.numberFormat=e[r]:t.numberFormat={id:r}}return t}function cT(n,e){return n?JE(e.createDocument(n)):[]}function Nd(n,e){e&&e.epoch1904&&(n+=1462);var t=70*365+19,r=60*60*1e3;return new Date(Math.round((n-t)*24*r))}function lT(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=hT(n))||e){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hT(n,e){if(n){if(typeof n=="string")return Gc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Gc(n,e)}}function Gc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function dT(n,e,t){if(n){var r=e[n];if(!r)throw new Error("Cell style not found: ".concat(n));if(!r.numberFormat)return!1;if(mT.indexOf(Number(r.numberFormat.id))>=0||t.dateFormat&&r.numberFormat.template===t.dateFormat||t.smartDateParser!==!1&&r.numberFormat.template&&pT(r.numberFormat.template))return!0}}var mT=[14,15,16,17,18,19,20,21,22,27,30,36,45,46,47,50,57],fT=/^\[\$-414\]/,gT=/;@$/;function pT(n){n=n.toLowerCase(),n=n.replace(fT,""),n=n.replace(gT,"");for(var e=n.split(/\W+/),t=lT(e),r;!(r=t()).done;){var i=r.value;if(_T.indexOf(i)<0)return!1}return!0}var _T=["ss","mm","h","hh","am","pm","d","dd","m","mm","mmm","mmmm","yy","yyyy","e"];function yT(n,e,t){var r=t.getInlineStringValue,i=t.getInlineStringXml,s=t.getStyleId,a=t.styles,u=t.values,l=t.properties,d=t.options;switch(e||(e="n"),e){case"str":n=zs(n,d);break;case"inlineStr":if(n=r(),n===void 0)throw new Error('Unsupported "inline string" cell value structure: '.concat(i()));n=zs(n,d);break;case"s":var f=Number(n);if(isNaN(f))throw new Error('Invalid "shared" string index: '.concat(n));if(f>=u.length)throw new Error('An out-of-bounds "shared" string index: '.concat(n));n=u[f],n=zs(n,d);break;case"b":if(n==="1")n=!0;else if(n==="0")n=!1;else throw new Error('Unsupported "boolean" cell value: '.concat(n));break;case"z":n=void 0;break;case"e":n=vT(n);break;case"d":if(n===void 0)break;var y=new Date(n);if(isNaN(y.valueOf()))throw new Error('Unsupported "date" cell value: '.concat(n));n=y;break;case"n":if(n===void 0)break;var I=dT(s(),a,d);I?(n=$c(n),n=Nd(n,l)):n=(d.parseNumber||$c)(n);break;default:throw new TypeError("Cell type not supported: ".concat(e))}return n===void 0&&(n=null),n}function vT(n){switch(n){case 0:return"#NULL!";case 7:return"#DIV/0!";case 15:return"#VALUE!";case 23:return"#REF!";case 29:return"#NAME?";case 36:return"#NUM!";case 42:return"#N/A";case 43:return"#GETTING_DATA";default:return"#ERROR_".concat(n)}}function zs(n,e){return e.trim!==!1&&(n=n.trim()),n===""&&(n=void 0),n}function $c(n){var e=Number(n);if(isNaN(e))throw new Error('Invalid "numeric" cell value: '.concat(n));return e}var ET=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function TT(n){var e=function(d,f){return d-f},t=n.map(function(l){return l.row}).sort(e),r=n.map(function(l){return l.column}).sort(e),i=t[0],s=t[t.length-1],a=r[0],u=r[r.length-1];return[{row:i,column:a},{row:s,column:u}]}function wT(n){for(var e=0,t=0;t<n.length;)e*=26,e+=ET.indexOf(n[t]),t++;return e}function jd(n){return n=n.split(/(\d+)/),[parseInt(n[1]),wT(n[0].trim())]}function IT(n,e,t,r,i,s,a){var u=jd(n.getAttribute("r")),l=zE(e,n),d=l&&l.textContent,f;return n.hasAttribute("t")&&(f=n.getAttribute("t")),{row:u[0],column:u[1],value:yT(d,f,{getInlineStringValue:function(){return WE(e,n)},getInlineStringXml:function(){return Md(n)},getStyleId:function(){return n.getAttribute("s")},styles:i,values:r,properties:s,options:a})}}function bT(n,e,t,r,i,s){var a=HE(n);return a.length===0?[]:a.map(function(u){return IT(u,n,e,t,r,i,s)})}function AT(n,e){return RT(n)||CT(n,e)||PT(n,e)||ST()}function ST(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PT(n,e){if(n){if(typeof n=="string")return qc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qc(n,e)}}function qc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function CT(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,s,a,u=[],l=!0,d=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(l=(r=s.call(t)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(f){d=!0,i=f}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw i}}return u}}function RT(n){if(Array.isArray(n))return n}function kT(n){var e=KE(n);if(e)return e=e.split(":").map(jd).map(function(t){var r=AT(t,2),i=r[0],s=r[1];return{row:i,column:s}}),e.length===1&&(e=[e[0],e[0]]),e}function DT(n,e,t,r,i,s){var a=e.createDocument(n),u=bT(a,e,t,r,i,s),l=kT(a)||TT(u);return{cells:u,dimensions:l}}function VT(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=OT(n))||e){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OT(n,e){if(n){if(typeof n=="string")return Hc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Hc(n,e)}}function Hc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function MT(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.rowIndexMap,r=e.accessor,i=r===void 0?function(y){return y}:r,s=e.onlyTrimAtTheEnd,a=n.length-1;a>=0;){for(var u=!0,l=VT(n[a]),d;!(d=l()).done;){var f=d.value;if(i(f)!==null){u=!1;break}}if(u)n.splice(a,1),t&&t.splice(a,1);else if(s)break;a--}return n}function NT(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=jT(n))||e){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jT(n,e){if(n){if(typeof n=="string")return zc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zc(n,e)}}function zc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function xT(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.accessor,r=t===void 0?function(y){return y}:t,i=e.onlyTrimAtTheEnd,s=n[0].length-1;s>=0;){for(var a=!0,u=NT(n),l;!(l=u()).done;){var d=l.value;if(r(d[s])!==null){a=!1;break}}if(a)for(var f=0;f<n.length;)n[f].splice(s,1),f++;else if(i)break;s--}return n}function LT(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=xd(n))||e){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FT(n,e){return GT(n)||BT(n,e)||xd(n,e)||UT()}function UT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xd(n,e){if(n){if(typeof n=="string")return Wc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wc(n,e)}}function Wc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function BT(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,s,a,u=[],l=!0,d=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(l=(r=s.call(t)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(f){d=!0,i=f}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw i}}return u}}function GT(n){if(Array.isArray(n))return n}function $T(n,e){var t=n.dimensions,r=n.cells;if(r.length===0)return[];var i=FT(t,2);i[0];for(var s=i[1],a=s.column,u=s.row,l=new Array(u),d=0;d<u;){l[d]=new Array(a);for(var f=0;f<a;)l[d][f]=null,f++;d++}for(var y=LT(r),I;!(I=y()).done;){var S=I.value,k=S.row-1,D=S.column-1;D<a&&k<u&&(l[k][D]=S.value)}var C=e.rowMap;if(C)for(var L=0;L<l.length;)C[L]=L,L++;return l=MT(xT(l,{onlyTrimAtTheEnd:!0}),{onlyTrimAtTheEnd:!0,rowIndexMap:C}),e.transformData&&(l=e.transformData(l)),l}function vr(n){"@babel/helpers - typeof";return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vr(n)}function qT(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=HT(n))||e){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HT(n,e){if(n){if(typeof n=="string")return Kc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Kc(n,e)}}function Kc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Qc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Xc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qc(Object(t),!0).forEach(function(r){zT(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Qc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function zT(n,e,t){return e=WT(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function WT(n){var e=KT(n,"string");return vr(e)==="symbol"?e:String(e)}function KT(n,e){if(vr(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(vr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function QT(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};t.sheet||(t=Xc({sheet:1},t));var r=function(I){if(!n[I])throw new Error('"'.concat(I,'" file not found inside the *.xlsx file zip archive'));return n[I]},i=rT(r("xl/_rels/workbook.xml.rels"),e),s=i.sharedStrings?cT(r(i.sharedStrings),e):[],a=i.styles?aT(r(i.styles),e):{},u=nT(r("xl/workbook.xml"),e);if(t.getSheets)return u.sheets.map(function(y){var I=y.name;return{name:I}});var l=XT(t.sheet,u.sheets);if(!l||!i.sheets[l])throw YT(t.sheet,u.sheets);var d=DT(r(i.sheets[l]),e,s,a,u,t);t=Xc({rowMap:[]},t);var f=$T(d,t);return t.properties?{data:f,properties:u}:f}function XT(n,e){if(typeof n=="number"){var t=e[n-1];return t&&t.relationId}for(var r=qT(e),i;!(i=r()).done;){var s=i.value;if(s.name===n)return s.relationId}}function YT(n,e){var t=e&&e.map(function(r,i){return'"'.concat(r.name,'" (#').concat(i+1,")")}).join(", ");return new Error("Sheet ".concat(typeof n=="number"?"#"+n:'"'+n+'"'," not found in the *.xlsx file.").concat(e?" Available sheets: "+t+".":""))}function wo(n){"@babel/helpers - typeof";return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wo(n)}function JT(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function ZT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function ew(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Er(n,e)}function tw(n){var e=Ld();return function(){var r=Tr(n),i;if(e){var s=Tr(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return nw(this,i)}}function nw(n,e){if(e&&(wo(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rw(n)}function rw(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Io(n){var e=typeof Map=="function"?new Map:void 0;return Io=function(r){if(r===null||!iw(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return bi(r,arguments,Tr(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Er(i,r)},Io(n)}function bi(n,e,t){return Ld()?bi=Reflect.construct.bind():bi=function(i,s,a){var u=[null];u.push.apply(u,s);var l=Function.bind.apply(i,u),d=new l;return a&&Er(d,a.prototype),d},bi.apply(null,arguments)}function Ld(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function iw(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function Er(n,e){return Er=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Er(n,e)}function Tr(n){return Tr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Tr(n)}var Ne=function(n){ew(t,n);var e=tw(t);function t(r){var i;return ZT(this,t),i=e.call(this,"invalid"),i.reason=r,i}return JT(t)}(Io(Error));function sw(n){if(typeof n=="string"){var e=n;if(n=Number(n),String(n)!==e)throw new Ne("not_a_number")}if(typeof n!="number")throw new Ne("not_a_number");if(isNaN(n))throw new Ne("invalid_number");if(!isFinite(n))throw new Ne("out_of_bounds");return n}function ow(n){if(typeof n=="string")return n;if(typeof n=="number"){if(isNaN(n))throw new Ne("invalid_number");if(!isFinite(n))throw new Ne("out_of_bounds");return String(n)}throw new Ne("not_a_string")}function aw(n){if(typeof n=="boolean")return n;throw new Ne("not_a_boolean")}function uw(n,e){var t=e.properties;if(n instanceof Date){if(isNaN(n.valueOf()))throw new Ne("out_of_bounds");return n}if(typeof n=="number"){if(isNaN(n))throw new Ne("invalid_number");if(!isFinite(n))throw new Ne("out_of_bounds");var r=Nd(n,t);if(isNaN(r.valueOf()))throw new Ne("out_of_bounds");return r}throw new Ne("not_a_date")}function cw(n,e){return dw(n)||hw(n,e)||Fd(n,e)||lw()}function lw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,s,a,u=[],l=!0,d=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(l=(r=s.call(t)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(f){d=!0,i=f}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw i}}return u}}function dw(n){if(Array.isArray(n))return n}function Sn(n){"@babel/helpers - typeof";return Sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sn(n)}function mw(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=Fd(n))||e){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fd(n,e){if(n){if(typeof n=="string")return Yc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yc(n,e)}}function Yc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Jc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Zc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Jc(Object(t),!0).forEach(function(r){fw(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Jc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function fw(n,e,t){return e=gw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function gw(n){var e=pw(n,"string");return Sn(e)==="symbol"?e:String(e)}function pw(n,e){if(Sn(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Sn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var el={schemaPropertyValueForMissingColumn:void 0,schemaPropertyValueForUndefinedCellValue:void 0,schemaPropertyValueForNullCellValue:null,schemaPropertyShouldSkipRequiredValidationForMissingColumn:function(){return!1},getEmptyObjectValue:function(){return null},getEmptyArrayValue:function(){return null},isColumnOriented:!1,arrayValueSeparator:","};function _w(n,e,t){t?t=Zc(Zc({},el),t):t=el;var r=t,i=r.isColumnOriented,s=r.rowIndexMap;Tw(e),i&&(n=Ew(n));for(var a=n[0],u=[],l=[],d=1;d<n.length;d++){var f=Ud(e,n[d],d,void 0,a,l,t);u.push(f)}if(s)for(var y=mw(l),I;!(I=y()).done;){var S=I.value;S.row=s[S.row-1]+1}return{rows:u,errors:l}}function Ud(n,e,t,r,i,s,a){for(var u={},l=!0,d=function(g){var p=g.column,v=g.value,E=g.error,w=g.reason,_={error:E,row:t+1,column:p,value:v};return w&&(_.reason=w),n[p].type&&(_.type=n[p].type),_},f=[],y=function(){var g=S[I],p=n[g],v=Sn(p.type)==="object"&&!Array.isArray(p.type),E="".concat(r||"",".").concat(p.prop),w,_=i.indexOf(g),de=_<0;de||(w=e[_]);var ne,ce,xe;if(v)ne=Ud(p.type,e,t,E,i,s,a);else if(de)ne=a.schemaPropertyValueForMissingColumn;else if(w===void 0)ne=a.schemaPropertyValueForUndefinedCellValue;else if(w===null)ne=a.schemaPropertyValueForNullCellValue;else if(Array.isArray(p.type)){var Le=vw(w,a.arrayValueSeparator).map(function(Vt){if(!ce){var le=tl(Vt,p,a);return le.error&&(ne=Vt,ce=le.error,xe=le.reason),le.value}});if(!ce){var et=Le.every(Ws);ne=et?a.getEmptyArrayValue(Le,{path:E}):Le}}else{var Ve=tl(w,p,a);ce=Ve.error,xe=Ve.reason,ne=ce?w:Ve.value}!ce&&Ws(ne)&&p.required&&f.push({column:g,value:ne,isMissingColumn:de}),ce?s.push(d({column:g,value:ne,error:ce,reason:xe})):(l&&!Ws(ne)&&(l=!1),ne!==void 0&&(u[p.prop]=ne))},I=0,S=Object.keys(n);I<S.length;I++)y();if(l)return a.getEmptyObjectValue(u,{path:r});for(var k=0,D=f;k<D.length;k++){var C=D[k],L=C.column,B=C.value,G=C.isMissingColumn,Y=G&&a.schemaPropertyShouldSkipRequiredValidationForMissingColumn(L,{object:u});if(!Y){var ue=n[L].required,K=typeof ue=="boolean"?ue:ue(u);K&&s.push(d({column:L,value:B,error:"required"}))}}return u}function tl(n,e,t){if(n===null)return{value:null};var r;if(e.parse?r=ln(n,e.parse):e.type?r=yw(n,Array.isArray(e.type)?e.type[0]:e.type,t):r={value:n},r.error)return r;if(r.value!==null){if(e.oneOf&&e.oneOf.indexOf(r.value)<0)return{error:"invalid",reason:"unknown"};if(e.validate)try{e.validate(r.value)}catch(i){return{error:i.message}}}return r}function ln(n,e){try{var t=e(n);return t===void 0?{value:null}:{value:t}}catch(i){var r={error:i.message};return i.reason&&(r.reason=i.reason),r}}function yw(n,e,t){switch(e){case String:return ln(n,ow);case Number:return ln(n,sw);case Date:return ln(n,function(r){return uw(r,{properties:t.properties})});case Boolean:return ln(n,aw);default:if(typeof e=="function")return ln(n,e);throw new Error("Unsupported schema type: ".concat(e&&e.name||e))}}function Bd(n,e,t){for(var r=0,i="";t+r<n.length;){var s=n[t+r];if(s===e)return[i,r];if(s==='"'){var a=Bd(n,'"',t+r+1);i+=a[0],r+=1+a[1]+1}else i+=s,r++}return[i,r]}function vw(n,e){for(var t=[],r=0;r<n.length;){var i=Bd(n,e,r),s=cw(i,2),a=s[0],u=s[1];r+=u+e.length,t.push(a.trim())}return t}var Ew=function(e){return e[0].map(function(t,r){return e.map(function(i){return i[r]})})};function Tw(n){for(var e=0,t=Object.keys(n);e<t.length;e++){var r=t[e],i=n[r];if(!i.prop)throw new Error('"prop" not defined for schema entry "'.concat(r,'".'))}}function Ws(n){return n==null}function wr(n){"@babel/helpers - typeof";return wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wr(n)}function nl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function rl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nl(Object(t),!0).forEach(function(r){ww(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):nl(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ww(n,e,t){return e=Iw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Iw(n){var e=bw(n,"string");return wr(e)==="symbol"?e:String(e)}function bw(n,e){if(wr(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(wr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Aw(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.includeNullValues,i=t.ignoreEmptyRows,s=t.isColumnOriented,a=t.rowMap,u={schemaPropertyValueForMissingColumn:void 0,schemaPropertyValueForUndefinedCellValue:void 0,schemaPropertyValueForNullCellValue:void 0,schemaPropertyShouldSkipRequiredValidationForMissingColumn:function(f,y){return y.path,!1},getEmptyObjectValue:function(f,y){var I=y.path;return I?void 0:null},getEmptyArrayValue:function(){return null},arrayValueSeparator:","};r&&(u.schemaPropertyValueForMissingColumn=null,u.schemaPropertyValueForUndefinedCellValue=null,u.schemaPropertyValueForNullCellValue=null,u.getEmptyObjectValue=function(d,f){return f.path,null});var l=_w(n,e,rl(rl({},u),{},{rowIndexMap:a,isColumnOriented:s}));return i!==!1&&(l.rows=l.rows.filter(function(d){return d!==u.getEmptyObjectValue(d,{path:void 0})})),l}function Ir(n){"@babel/helpers - typeof";return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ir(n)}var Sw=["schemaPropertyValueForEmptyCell"];function il(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function sl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?il(Object(t),!0).forEach(function(r){Pw(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):il(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Pw(n,e,t){return e=Cw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Cw(n){var e=Rw(n,"string");return Ir(e)==="symbol"?e:String(e)}function Rw(n,e){if(Ir(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(Ir(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function kw(n,e){if(n==null)return{};var t=Dw(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Dw(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function Vw(n,e,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=r.schemaPropertyValueForEmptyCell,s=kw(r,Sw);return n(e,t,sl(sl({},s),{},{schemaPropertyValueForNullCellValue:i}))}function bo(n){"@babel/helpers - typeof";return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bo(n)}function Gd(n){for(var e={},t=0,r=Object.keys(n);t<r.length;t++){var i=r[t],s=n[i],a=void 0;bo(s)==="object"&&(s=Object.keys(n[i])[0],a=Gd(n[i][s])),e[i]={prop:s},a&&(e[i].type=a)}return e}function br(n){"@babel/helpers - typeof";return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},br(n)}var Ow=["schema","map"];function ol(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function mi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ol(Object(t),!0).forEach(function(r){Mw(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ol(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Mw(n,e,t){return e=Nw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Nw(n){var e=jw(n,"string");return br(e)==="symbol"?e:String(e)}function jw(n,e){if(br(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(br(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function xw(n,e){if(n==null)return{};var t=Lw(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Lw(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function Fw(n,e,t){var r=t.schema,i=t.map,s=xw(t,Ow);!r&&i&&(r=Gd(i));var a=QT(n,e,mi(mi({},s),{},{properties:r||s.properties}));return r?Vw(Aw,a.data,r,mi(mi({},s),{},{properties:a.properties})):a}function Uw(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return BE(n).then(function(t){return Fw(t,IE,e)})}async function Bw(n,e){try{const t=await Uw(n),i=t[0].map(a=>String(a).toLowerCase()).findIndex(a=>a.includes("juego")||a.includes("name")||a.includes("titulo"));if(i===-1)throw new Error("No se encontró la columna 'Juego' o 'Nombre' en el Excel.");let s=0;for(let a=1;a<t.length;a++){const l=t[a][i];if(!l)continue;await Ad(e,{juego:l,jug_min:1,jug_max:4,minutos:60,complejidad:"Medio",categorias:[],mecanicas:[],createdAt:new Date}),s++}return s}catch(t){throw console.error("Error importing Excel:",t),t}}vm(ul);Tm(async(n,e)=>{if(Re.currentUser)try{await EE(Re.currentUser.uid,n,e)}catch(t){alert("Error al actualizar estado: "+t.message)}});wm(async(n,e)=>{if(Re.currentUser)try{await TE(Re.currentUser.uid,n,e)}catch(t){alert("Error al actualizar wishlist: "+t.message)}});const hn=document.getElementById("loginBtn"),Lt=document.getElementById("userDisplay"),fi=document.getElementById("mainNav");document.getElementById("addGameBtn");const ss=document.getElementById("addGameDialog"),nr=document.getElementById("addGameForm"),al=document.getElementById("cancelAddGame"),dn=document.getElementById("excelInput");hn&&hn.addEventListener("click",async()=>{try{await vp(Re,_E)}catch(n){console.error("Login failed",n)}});Jg(Re,async n=>{if(n){Su(n.uid);const e=await wE(n.uid);if(Em(e.map(r=>r.id)),hn&&(hn.style.display="none"),Lt){Lt.style.display="block";const r=await yE(n),i=r?r.isPublic:!1;Lt.innerHTML=`
                <span>Hola, ${n.displayName}</span>
                <label style="margin-left: 10px; font-size: 0.8em; cursor: pointer;">
                    <input type="checkbox" id="publicToggle" ${i?"checked":""}>
                    Pública
                </label>
            `;const s=document.createElement("button");s.id="logoutBtn",s.textContent="(Salir)",s.style.background="none",s.style.border="none",s.style.color="white",s.style.cursor="pointer",s.style.marginLeft="5px",s.style.fontSize="12px",s.addEventListener("click",()=>Zg(Re)),Lt.appendChild(s);const a=document.getElementById("publicToggle");a&&a.addEventListener("change",async u=>{try{await vE(n.uid,u.target.checked)}catch(l){console.error(l),u.target.checked=!u.target.checked,alert("Error al actualizar visibilidad")}})}fi&&(fi.style.display="block"),console.log("User logged in:",n.uid);const t=await getPublicLibrary();cr(t)}else Su(null),hn&&(hn.style.display="block"),Lt&&(Lt.style.display="none",Lt.textContent=""),fi&&(fi.style.display="none"),console.log("User logged out")});document.querySelectorAll(".nav-btn").forEach(n=>{n.addEventListener("click",async e=>{if(e.target.id==="addGameBtn"){ss.showModal();return}document.querySelectorAll(".nav-btn").forEach(r=>r.classList.remove("active")),e.target.classList.add("active");const t=e.target.dataset.view;if(t==="home")cr(ul);else if(t==="my-library"&&Re.currentUser){const r=await wa(Re.currentUser.uid);cr(r)}})});al&&al.addEventListener("click",()=>{ss.close(),nr.reset(),dn&&(dn.value="")});dn&&dn.addEventListener("change",async n=>{if(!Re.currentUser)return;const e=n.target.files[0];if(e)try{const t=await Bw(e,Re.currentUser.uid);alert(`Se importaron ${t} juegos correctamente.`),ss.close(),dn&&(dn.value="");const r=document.querySelector(".nav-btn.active");if(r&&r.dataset.view==="my-library"){const i=await wa(Re.currentUser.uid);cr(i)}}catch(t){alert("Error al importar Excel: "+t.message),console.error(t)}});nr&&nr.addEventListener("submit",async n=>{if(n.preventDefault(),!Re.currentUser)return;const e=new FormData(nr),t={juego:e.get("juego"),jug_min:Number(e.get("jug_min")),jug_max:Number(e.get("jug_max")),minutos:Number(e.get("minutos")),complejidad:e.get("complejidad"),categorias_str:e.get("categorias"),mecanicas_str:e.get("mecanicas"),jugadores:`${e.get("jug_min")}-${e.get("jug_max")}`,minutos_label:e.get("minutos"),longitud:Gw(Number(e.get("minutos"))),categorias:e.get("categorias").split(",").map(r=>r.trim()),mecanicas:e.get("mecanicas").split(",").map(r=>r.trim()),score:0};try{await Ad(Re.currentUser.uid,t),ss.close(),nr.reset(),alert("Juego añadido correctamente");const r=document.querySelector(".nav-btn.active");if(r&&r.dataset.view==="my-library"){const i=await wa(Re.currentUser.uid);cr(i)}}catch(r){alert("Error al añadir juego: "+r.message)}});function Gw(n){return n<=30?"Corto":n<=60?"Moderado":n<=120?"Medio-Largo":"Largo"}
