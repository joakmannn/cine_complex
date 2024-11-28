import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        titre: '',
        duree: '',
        synopsis: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/films');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ajouter un film</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="titre" className="block font-medium">
                        Titre :
                    </label>
                    <input
                        id="titre"
                        type="text"
                        value={data.titre}
                        onChange={(e) => setData('titre', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.titre && <p className="text-red-500 text-sm">{errors.titre}</p>}
                </div>

                <div>
                    <label htmlFor="duree" className="block font-medium">
                        Durée :
                    </label>
                    <input
                        id="duree"
                        type="text"
                        value={data.duree}
                        onChange={(e) => setData('duree', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.duree && <p className="text-red-500 text-sm">{errors.duree}</p>}
                </div>

                <div>
                    <label htmlFor="synopsis" className="block font-medium">
                        Synopsis :
                    </label>
                    <textarea
                        id="synopsis"
                        value={data.synopsis}
                        onChange={(e) => setData('synopsis', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.synopsis && (
                        <p className="text-red-500 text-sm">{errors.synopsis}</p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <Link
                        href="/films"
                        className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Retour à la liste des films
                    </Link>

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
