import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index({ cinema, salles }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Salles du cinéma : {cinema.nom}</h1>

            <Link
                href={`/cinemas/${cinema.id}/salles/create`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Ajouter une salle
            </Link>

            <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Nom</th>
                        <th className="border border-gray-300 px-4 py-2">Capacité</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {salles.map((salle) => (
                        <tr key={salle.id}>
                            <td className="border border-gray-300 px-4 py-2">{salle.nom}</td>
                            <td className="border border-gray-300 px-4 py-2">{salle.capacite}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    href={`/cinemas/${cinema.id}/salles/${salle.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir
                                </Link>
                                {' | '}
                                <form
                                    method="POST"
                                    action={`/cinemas/${cinema.id}/salles/${salle.id}`}
                                    onSubmit={(e) => {
                                        if (!confirm('Voulez-vous vraiment supprimer cette salle ?')) {
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
