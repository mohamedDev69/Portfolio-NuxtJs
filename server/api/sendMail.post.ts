import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    try {
        // Récupère le corps de la requête
        const body = await readBody(event);
        const config = useRuntimeConfig();
        const secretUrl = config.private.API_SECRET_URL;

        const response = await fetch(secretUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            // Retourne un objet avec success: true
            return { success: true };
        } else {
            return { success: false };
        }
    } catch (error) {
        // Log l'erreur pour le débogage
        console.error('Erreur lors de l\'envoi du formulaire :', error);

        // Lance une erreur avec le code 500 pour une erreur serveur
        throw new Error('Internal Server Error');
    }
});
