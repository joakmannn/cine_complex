import React from 'react';

export default function Show({ cinema }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Détails du cinéma</h1>

            <p>
                <strong>Nom :</strong> {cinema.name}
            </p>
            <p>
                <strong>Adresse :</strong> {cinema.address}
            </p>
        </div>
    );
}
