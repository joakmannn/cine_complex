import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function Index({ cinema, salles }) {
    const { delete: destroy } = useForm(); // Utilise useForm pour gérer la suppression

    const handleDelete = (id) => {
        if (confirm('Voulez-vous vraiment supprimer cette salle ?')) {
            destroy(route('cinemas.salles.destroy', { cinemaId: cinema.id, salleId: id }), {
                onSuccess: () => alert('Salle supprimée avec succès'),
                onError: (errors) => console.error(errors),
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Salles du cinéma : {cinema.nom}</h1>

            <Link
                href={route('cinemas.salles.create', { cinemaId: cinema.id })}
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
                                    href={route('cinemas.salles.show', { cinemaId: cinema.id, salleId: salle.id })}
                                    className="text-blue-500 hover:underline"
                                >
                                    Voir
                                </Link>
                                {' | '}
                                <button
                                    onClick={() => handleDelete(salle.id)}
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
