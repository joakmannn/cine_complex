import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function Create({ cinema }) {
    const { data, setData, post, errors } = useForm({
        nom: '',
        capacite: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/cinemas/${cinema.id}/salles`); // Crée une salle pour le cinéma spécifique
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Ajouter une salle pour le cinéma : {cinema.nom}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nom" className="block font-medium">
                        Nom :
                    </label>
                    <input
                        id="nom"
                        type="text"
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.nom && (
                        <p className="text-red-500 text-sm">{errors.nom}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="capacite" className="block font-medium">
                        Capacité :
                    </label>
                    <input
                        id="capacite"
                        type="number"
                        value={data.capacite}
                        onChange={(e) => setData('capacite', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.capacite && (
                        <p className="text-red-500 text-sm">{errors.capacite}</p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    {/* Bouton retour */}
                    <Link
                        href={`/cinemas/${cinema.id}`}
                        className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Retour
                    </Link>

                    {/* Bouton ajouter */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    );
}
