import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function Create({ films, salles }) {
    const { data, setData, post, errors } = useForm({
        horaire: '',
        id_film: '', // Film sélectionné
        id_salle: '', // Salle sélectionnée
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/seances'); // Envoie les données au backend pour créer la séance
    };

    // Grouper les salles par cinéma
    const sallesByCinema = salles.reduce((grouped, salle) => {
        const cinemaName = salle.cinema.nom;
        if (!grouped[cinemaName]) {
            grouped[cinemaName] = [];
        }
        grouped[cinemaName].push(salle);
        return grouped;
    }, {});

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ajouter une séance</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Sélection du film */}
                <div>
                    <label htmlFor="film" className="block font-medium">
                        Film :
                    </label>
                    <select
                        id="film"
                        value={data.id_film}
                        onChange={(e) => setData('id_film', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    >
                        <option value="">-- Sélectionner un film --</option>
                        {films.map((film) => (
                            <option key={film.id} value={film.id}>
                                {film.titre}
                            </option>
                        ))}
                    </select>
                    {errors.id_film && <p className="text-red-500 text-sm">{errors.id_film}</p>}
                </div>

                {/* Sélection de la salle, triée par cinéma */}
                <div>
                    <label htmlFor="salle" className="block font-medium">
                        Salle :
                    </label>
                    <select
                        id="salle"
                        value={data.id_salle}
                        onChange={(e) => setData('id_salle', e.target.value)}
                        className="border border-gray-300 rounded w-full px-4 py-2"
                    >
                        <option value="">-- Sélectionner une salle --</option>
                        {Object.entries(sallesByCinema).map(([cinemaName, cinemaSalles]) => (
                            <optgroup key={cinemaName} label={cinemaName}>
                                {cinemaSalles.map((salle) => (
                                    <option key={salle.id} value={salle.id}>
                                        {salle.nom}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                    {errors.id_salle && <p className="text-red-500 text-sm">{errors.id_salle}</p>}
                </div>

                {/* Horaire de la séance */}
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

                {/* Boutons */}
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
