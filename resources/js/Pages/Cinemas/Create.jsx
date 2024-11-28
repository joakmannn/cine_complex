import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        nom: '', // Correspond à la colonne `nom` dans la table
        adresse: '', // Correspond à la colonne `adresse` dans la table
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/cinemas');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ajouter un cinéma</h1>

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
                    {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
                </div>

                <div>
                    <label htmlFor="adresse" className="block font-medium">
                        Adresse :
                    </label>
                    <input
                        id="adresse"
                        type="text"
                        value={data.adresse}
                        onChange={(e) => setData('adresse', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.adresse && <p className="text-red-500 text-sm">{errors.adresse}</p>}
                </div>

                <div className="flex items-center justify-between">
                    {/* Bouton pour retourner à la liste des cinémas */}
                    <Link
                        href="/cinemas"
                        className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Retour à la liste des cinémas
                    </Link>

                    {/* Bouton pour soumettre le formulaire */}
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
