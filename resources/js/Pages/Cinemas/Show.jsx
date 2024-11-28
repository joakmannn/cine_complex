import React from 'react';
import { Link } from '@inertiajs/react';

export default function Show({ cinema }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Détails du cinéma</h1>

            <p>
                <strong>Nom :</strong> {cinema.nom}
            </p>
            <p>
                <strong>Adresse :</strong> {cinema.adresse}
            </p>

            {/* Bouton pour revenir à la liste des cinémas */}
            <Link
                href="/cinemas"
                className="mt-4 inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
                Retour à la liste des cinémas
            </Link>
        </div>
    );
}
