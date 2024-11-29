import React from 'react';
import { Link } from '@inertiajs/react';

export default function Show({ seance }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Détails de la séance</h1>

            <p>
                <strong>Horaire :</strong> {seance.horaire}
            </p>
            <p>
                <strong>Film :</strong> {seance.film.titre}
            </p>
            <p>
                <strong>Salle :</strong> {seance.salle.nom}
            </p>

            <Link
                href="/seances"
                className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
                Retour
            </Link>
        </div>
    );
}
