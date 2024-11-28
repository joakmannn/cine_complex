import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index({ cinemas }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des cinémas</h1>

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
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cinemas.map((cinema) => (
                        <tr key={cinema.id}>
                            <td className="border border-gray-300 px-4 py-2">{cinema.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{cinema.address}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    href={`/cinemas/${cinema.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir
                                </Link>
                                {' | '}
                                <form
                                    method="POST"
                                    action={`/cinemas/${cinema.id}`}
                                    onSubmit={(e) => {
                                        if (!confirm('Voulez-vous vraiment supprimer ce cinéma ?')) {
                                            e.preventDefault();
                                        }
                                    }}
                                    style={{ display: 'inline' }}
                                >
                                    <input type="hidden" name="_method" value="DELETE" />
                                    <button
                                        type="submit"
                                        className="text-red-500 hover:underline ml-2"
                                    >
                                        Supprimer
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
