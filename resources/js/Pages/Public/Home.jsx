// Home.jsx
import React from 'react';
import ReservationForm from './ReservationForm';

export default function Home({ cinemas, films, seances, tarifs }) {
    return (
        <div className="container mx-auto p-4">
            {/* Votre code existant pour afficher les cinémas et les films */}

            {/* Section des séances */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Séances</h2>
            <ul>
                {seances.map((seance) => (
                    <li key={seance.id} className="mb-4 border-b pb-4">
                        {/* Affichage des détails de la séance */}
                        <div>
                            <strong>Film :</strong> {seance.film?.titre || 'Inconnu'}
                        </div>
                        <div>
                            <strong>Cinéma :</strong> {seance.salle?.cinema?.nom || 'Inconnu'}
                        </div>
                        <div>
                            <strong>Salle :</strong> {seance.salle?.nom || 'Inconnu'}{' '}
                            ({seance.salle?.capacite || 0} places)
                        </div>
                        <div>
                            <strong>Horaire :</strong> {seance.horaire}
                        </div>
                        <div>
                            <strong>Places disponibles :</strong> {seance.capaciteRestante}
                        </div>

                        {/* Affichage du formulaire ou message si complet */}
                        {seance.capaciteRestante <= 0 ? (
                            <div className="text-red-500 mt-4">
                                Cette séance est complète. Aucune réservation supplémentaire n'est possible.
                            </div>
                        ) : (
                            <ReservationForm seance={seance} tarifs={tarifs} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
