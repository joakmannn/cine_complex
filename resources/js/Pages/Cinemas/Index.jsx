import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function Index({ cinemas }) {
    const { delete: inertiaDelete } = useForm();

    const handleDelete = (cinemaId) => {
        if (confirm('Voulez-vous vraiment supprimer ce cinéma ?')) {
            inertiaDelete(`/cinemas/${cinemaId}`, {
                onSuccess: () => alert('Cinéma supprimé avec succès.'),
                onError: (errors) => console.error(errors),
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des cinémas</h1>

            {/* Bouton pour revenir au dashboard */}
            <Link
                href="/dashboard"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-4"
            >
                Retour au Dashboard
            </Link>

            {/* Bouton pour ajouter un cinéma */}
            <Link
                href="/cinemas/create"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Ajouter un cinéma
            </Link>

            <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Nom</th>
                        <th className="border border-gray-300 px-4 py-2">Adresse</th>
                        <th className="border border-gray-300 px-4 py-2">Nombre de salles</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cinemas.map((cinema) => (
                        <tr key={cinema.id}>
                            <td className="border border-gray-300 px-4 py-2">{cinema.nom}</td>
                            <td className="border border-gray-300 px-4 py-2">{cinema.adresse}</td>
                            <td className="border border-gray-300 px-4 py-2">{cinema.salles_count}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    href={`/cinemas/${cinema.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir
                                </Link>
                                {' | '}
                                <button
                                    onClick={() => handleDelete(cinema.id)}
                                    className="text-red-500 hover:underline ml-2"
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
