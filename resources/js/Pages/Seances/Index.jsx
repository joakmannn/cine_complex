import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index({ seances }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des séances</h1>

            <Link
                href="/seances/create"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Ajouter une séance
            </Link>
            <Link
                href="/dashboard"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-4"
            >
                Retour au Dashboard
            </Link>

            <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Horaire</th>
                        <th className="border border-gray-300 px-4 py-2">Film</th>
                        <th className="border border-gray-300 px-4 py-2">Salle</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {seances.map((seance) => (
                        <tr key={seance.id}>
                            <td className="border border-gray-300 px-4 py-2">{seance.horaire}</td>
                            <td className="border border-gray-300 px-4 py-2">{seance.film.titre}</td>
                            <td className="border border-gray-300 px-4 py-2">{seance.salle.nom}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    href={`/seances/${seance.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir
                                </Link>
                                {' | '}
                                <form
                                    method="POST"
                                    action={`/seances/${seance.id}`}
                                    onSubmit={(e) => {
                                        if (!confirm('Voulez-vous vraiment supprimer cette séance ?')) {
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
