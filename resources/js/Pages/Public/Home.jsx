import React from 'react';

export default function Home({ cinemas, films, seances }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Reservation Rapide</h1>

            {/* Section des cinémas */}
            <h2 className="text-2xl font-semibold mb-4">Cinemas</h2>
            <ul>
                {cinemas.map((cinema) => (
                    <li key={cinema.id}>
                        {cinema.nom} ({cinema.salles_count} salles)
                    </li>
                ))}
            </ul>

            {/* Section des films */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Films</h2>
            <ul>
                {films.map((film) => (
                    <li key={film.id}>{film.titre}</li>
                ))}
            </ul>

            {/* Section des séances */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Séances</h2>
            <ul>
                {seances.map((seance) => (
                    <li key={seance.id}>
                        <div>
                            <strong>Film :</strong> {seance.film?.titre || 'Inconnu'}
                        </div>
                        <div>
                            <strong>Cinéma :</strong>{' '}
                            {seance.salle?.cinema?.nom || 'Inconnu'}
                        </div>
                        <div>
                            <strong>Salle :</strong>{' '}
                            {seance.salle?.nom || 'Inconnu'}{' '}
                            ({seance.salle?.capacite || 0} places)
                        </div>
                        <div>
                            <strong>Horaire :</strong> {seance.horaire}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
