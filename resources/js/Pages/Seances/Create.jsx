import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function Create({ films, salles }) {
    const { data, setData, post, errors } = useForm({
        horaire: '',
        film_id: '',
        salle_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/seances');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ajouter une séance</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="horaire" className="block font-medium">
                        Horaire :
                    </label>
                    <input
                        id="horaire"
                        type="datetime-local"
                        value={data.horaire}
                        onChange={(e) => setData('horaire', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    />
                    {errors.horaire && <p className="text-red-500 text-sm">{errors.horaire}</p>}
                </div>

                <div>
                    <label htmlFor="film" className="block font-medium">
                        Film :
                    </label>
                    <select
                        id="film"
                        value={data.film_id}
                        onChange={(e) => setData('film_id', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    >
                        <option value="">-- Sélectionner un film --</option>
                        {films.map((film) => (
                            <option key={film.id} value={film.id}>
                                {film.titre}
                            </option>
                        ))}
                    </select>
                    {errors.film_id && <p className="text-red-500 text-sm">{errors.film_id}</p>}
                </div>

                <div>
                    <label htmlFor="salle" className="block font-medium">
                        Salle :
                    </label>
                    <select
                        id="salle"
                        value={data.salle_id}
                        onChange={(e) => setData('salle_id', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    >
                        <option value="">-- Sélectionner une salle --</option>
                        {salles.map((salle) => (
                            <option key={salle.id} value={salle.id}>
                                {salle.nom}
                            </option>
                        ))}
                    </select>
                    {errors.salle_id && <p className="text-red-500 text-sm">{errors.salle_id}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <Link
                        href="/seances"
                        className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Retour
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
