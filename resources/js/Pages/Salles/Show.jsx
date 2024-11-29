import React from 'react';
import { Link } from '@inertiajs/react';

export default function Show({ salle, cinema }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Détails de la salle</h1>

            <p>
                <strong>Nom :</strong> {salle.nom}
            </p>
            <p>
                <strong>Capacité :</strong> {salle.capacite}
            </p>
            <p>
                <strong>Cinéma :</strong> {cinema.nom}
            </p>

            <Link
                href={`/cinemas/${cinema.id}/salles`}
                className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
                Retour
            </Link>
        </div>
    );
}
