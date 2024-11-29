// resources/js/Pages/Reservations/Create.jsx
import React from 'react';
import { usePage } from '@inertiajs/react';
import ReservationForm from '../../Components/ReservationForm';

export default function Create({ seance, tarifs }) {
    const { flash } = usePage().props;

    return (
        <div className="container mx-auto p-4">
            {/* Affichage du message de succès ou d'erreur */}
            {flash.success && (
                <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
                    {flash.success}
                </div>
            )}

            {flash.error && (
                <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
                    {flash.error}
                </div>
            )}

            <h1 className="text-3xl font-bold mb-4">Réservation pour {seance.film?.titre}</h1>

            {/* Affichage des détails de la séance */}
            <div className="mb-4">
                <div>
                    <strong>Cinéma :</strong> {seance.salle?.cinema?.nom || 'Inconnu'}
                </div>
                <div>
                    <strong>Salle :</strong> {seance.salle?.nom || 'Inconnu'} ({seance.salle?.capacite || 0} places)
                </div>
                <div>
                    <strong>Horaire :</strong> {seance.horaire}
                </div>
            </div>

            {/* Formulaire de réservation */}
            <ReservationForm seance={seance} tarifs={tarifs} />
        </div>
    );
}
