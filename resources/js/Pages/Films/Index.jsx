import React from 'react';
import { Link, router } from '@inertiajs/react';

export default function Index({ films }) {
    const handleDelete = (id) => {
        if (confirm('Voulez-vous vraiment supprimer ce film ?')) {
            router.delete(route('films.destroy', id), {
                onSuccess: () => alert('Film supprimé avec succès'),
                onError: (errors) => console.error(errors),
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des films</h1>

            <Link
                href={route('films.create')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Ajouter un film
            </Link>
            <Link
                href={route('dashboard')}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-4"
            >
                Retour au Dashboard
            </Link>

            <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Titre</th>
                        <th className="border border-gray-300 px-4 py-2">Durée</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {films.map((film) => (
                        <tr key={film.id}>
                            <td className="border border-gray-300 px-4 py-2">{film.titre}</td>
                            <td className="border border-gray-300 px-4 py-2">{film.duree}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    href={route('films.show', film.id)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir
                                </Link>
                                {' | '}
                                <button
                                    onClick={() => handleDelete(film.id)}
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
