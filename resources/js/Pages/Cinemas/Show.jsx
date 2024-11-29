import React from 'react';
import { Link, router } from '@inertiajs/react';

export default function Show({ cinema }) {
    const handleDelete = (cinemaId, salleId) => {
        if (confirm('Voulez-vous vraiment supprimer cette salle ?')) {
            router.delete(`/cinemas/${cinemaId}/salles/${salleId}`, {
                onSuccess: () => alert('Salle supprimée avec succès.'),
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Détails du cinéma</h1>

            <p>
                <strong>Nom :</strong> {cinema.nom}
            </p>
            <p>
                <strong>Adresse :</strong> {cinema.adresse}
            </p>

            {/* Bouton pour créer une salle */}
            <Link
                href={`/cinemas/${cinema.id}/salles/create`}
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Ajouter une salle
            </Link>

            {/* Affichage des salles associées */}
            <h2 className="text-xl font-semibold mt-8 mb-4">Salles</h2>
            {cinema.salles.length > 0 ? (
                <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Nom</th>
                            <th className="border border-gray-300 px-4 py-2">Capacité</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cinema.salles.map((salle) => (
                            <tr key={salle.id}>
                                <td className="border border-gray-300 px-4 py-2">{salle.nom}</td>
                                <td className="border border-gray-300 px-4 py-2">{salle.capacite}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                  
                                    <button
                                        onClick={() => handleDelete(cinema.id, salle.id)}
                                        className="text-red-500 hover:underline ml-2"
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-700 mt-4">Aucune salle associée à ce cinéma.</p>
            )}

            {/* Bouton pour revenir à la liste des cinémas */}
            <Link
                href="/cinemas"
                className="mt-8 inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
                Retour à la liste des cinémas
            </Link>
        </div>
    );
}
