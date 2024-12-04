import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Hero({ films, filmClicks }) {
    const [selectedFilm, setSelectedFilm] = useState(null);

    const handleSelectFilm = (film) => {
        setSelectedFilm(film);

        // Envoyer une requête Inertia pour incrémenter les clics
        Inertia.post(`/films/${film.id}/click`, {}, {
            onSuccess: () => console.log(`Clic comptabilisé pour le film ${film.titre}`),
            onError: (errors) => console.error("Erreur:", errors),
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Films disponibles</h1>

            <div className="flex flex-wrap justify-center gap-6">
            {films.map((film) => (
                    film && (
                        <div
                            key={film.id}
                            onClick={() => handleSelectFilm(film)}
                            className="w-60 p-4 bg-white shadow-md rounded-lg border cursor-pointer hover:border-blue-500"
                        >
                            <h2 className="text-xl font-semibold mb-2">{film.titre}</h2>
                            <p className="text-gray-500">Durée : {film.duree} minutes</p>
                            <p className="text-gray-700 mt-2">
                                {film.synopsis?.length > 60
                                    ? `${film.synopsis.substring(0, 60)}...`
                                    : film.synopsis}
                            </p>
                        </div>
                    )
                ))}
            </div>

            {selectedFilm && (
                <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Détails du film : {selectedFilm.titre}</h2>
                    <p>
                        <strong>Durée :</strong> {selectedFilm.duree} minutes
                    </p>
                    <p className="mt-4">
                        <strong>Synopsis :</strong> {selectedFilm.synopsis}
                    </p>
                    <button
                        onClick={() => setSelectedFilm(null)}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Fermer
                    </button>
                </div>
            )}
        </div>
    );
}
