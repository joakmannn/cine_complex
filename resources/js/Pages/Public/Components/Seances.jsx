import React, { useState } from "react";
import ReservationForm from "./ReservationForm";

export default function Seances({ seances, tarifs }) {
    const [selectedSeance, setSelectedSeance] = useState(null);

    const handleSelectSeance = (seance) => {
        setSelectedSeance(seance);
    };

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">Séances</h2>

            {/* Affichage des séances */}
            <div className="flex flex-wrap justify-center gap-6">
                {seances.map((seance) => (
                    <div
                        key={seance.id}
                        className={`w-80 p-4 bg-white shadow-md rounded-lg border flex flex-col ${
                            selectedSeance?.id === seance.id ? "border-blue-500" : "border-gray-300"
                        }`}
                        onClick={() => handleSelectSeance(seance)}
                    >
                        <div>
                            <strong>Film :</strong> {seance.film?.titre || "Inconnu"}
                        </div>
                        <div>
                            <strong>Cinéma :</strong> {seance.salle?.cinema?.nom || "Inconnu"}
                        </div>
                        <div>
                            <strong>Salle :</strong> {seance.salle?.nom || "Inconnu"} (
                            {seance.salle?.capacite || 0} places)
                        </div>
                        <div>
                            <strong>Horaire :</strong> {seance.horaire}
                        </div>
                        <div>
                            <strong>Places disponibles :</strong> {seance.capaciteRestante}
                        </div>
                    </div>
                ))}
            </div>

            {/* Formulaire de réservation */}
            {selectedSeance && (
                <div className="w-full mt-8">
                    <ReservationForm seance={selectedSeance} tarifs={tarifs} />
                </div>
            )}
        </div>
    );
}
