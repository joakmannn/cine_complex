import React from 'react';
import { Link } from '@inertiajs/react';

export default function Show({ film }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Détails du film</h1>

            <div className="mb-4">
                <p>
                    <strong>Titre :</strong> {film.titre}
                </p>
                <p>
                    <strong>Durée :</strong> {film.duree}
                </p>
                <p>
                    <strong>Synopsis :</strong> {film.synopsis || 'Aucun synopsis disponible.'}
                </p>
            </div>

            {/* Bouton de retour à la liste des films */}
            <Link
                href="/films"
                className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
                Retour à la liste des films
            </Link>
        </div>
    );
}
