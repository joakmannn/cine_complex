import React from 'react';
import { usePage, Link } from '@inertiajs/react';

export default function Index({ reservations }) {
    const { flash = {} } = usePage().props;

    return (
        <div className="container mx-auto p-4">
              <Link href={route('dashboard')} className="text-blue-500 hover:underline mb-4 block">
                &larr; Retour au Dashboard
             </Link>
            <h1 className="text-3xl font-bold mb-4">Réservations</h1>

            {flash.success && (
                <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
                    {flash.success}
                </div>
            )}

            {reservations.length === 0 ? (
                <p>Aucune réservation n'a été effectuée.</p>
            ) : (
                <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id} className="mb-4 border-b pb-4">
                            {/* Affichage du nom et prénom */}
                            <div>
                                <strong>Nom :</strong> {reservation.nom} {reservation.prenom}
                            </div>
                            {/* Autres informations de la réservation */}
                            <div>
                                <strong>Film :</strong> {reservation.seance.film.titre}
                            </div>
                            <div>
                                <strong>Cinéma :</strong> {reservation.seance.salle.cinema.nom}
                            </div>
                            <div>
                                <strong>Salle :</strong> {reservation.seance.salle.nom}
                            </div>
                            <div>
                                <strong>Date et Heure :</strong> {reservation.seance.horaire}
                            </div>
                            <div>
                                <strong>Places Réservées :</strong> {reservation.places_reservees}
                            </div>
                            <div>
                                <strong>Prix Total :</strong> {parseFloat(reservation.prix_total).toFixed(2)} €
                            </div>
                            <div>
                                <strong>Places Disponibles :</strong> {reservation.seance.capaciteRestante}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
