import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function Index({ seances }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Voulez-vous vraiment supprimer cette séance ?')) {
            destroy(route('seances.destroy', id), {
                onSuccess: () => alert('Séance supprimée avec succès'),
                onError: (errors) => console.error(errors),
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des séances</h1>

            <Link
                href={route('seances.create')}
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
                        <th className="border border-gray-300 px-4 py-2">Cinéma</th>
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
                                {seance.salle.cinema.nom} ({seance.salle.cinema.adresse})
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link
                                    href={`/seances/${seance.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir
                                </Link>
                                {' | '}
                                <button
                                    onClick={() => handleDelete(seance.id)}
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
