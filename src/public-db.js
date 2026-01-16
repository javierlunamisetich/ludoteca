import { db } from './firebase-config.js';
import { collection, query, where, getDocs, collectionGroup } from "firebase/firestore";

/**
 * Fetch all games from users who have set their profile to public.
 * Note: In a real app, we would duplicate data or use a better index strategy.
 * For this prototype, we will fetch all public users, then their games.
 * OR use a collectionGroup query if we structure it right.
 * 
 * Let's try collectionGroup "games". But we need to know if the parent user is public.
 * Easier approach for now:
 * 1. Query users where isPublic == true.
 * 2. For each user, fetch their games.
 */
export async function getPublicLibrary() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("isPublic", "==", true));
        const userSnaps = await getDocs(q);

        let allGames = [];

        for (const userDoc of userSnaps.docs) {
            const userData = userDoc.data();
            const gamesRef = collection(db, "users", userDoc.id, "games");
            const gamesSnap = await getDocs(gamesRef);

            gamesSnap.forEach(doc => {
                allGames.push({
                    ...doc.data(),
                    id: doc.id,
                    ownerId: userDoc.id,
                    ownerName: userData.displayName
                });
            });
        }

        return allGames;
    } catch (e) {
        console.error("Error fetching public library:", e);
        return [];
    }
}
