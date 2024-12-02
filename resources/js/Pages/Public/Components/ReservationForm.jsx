import React from "react";
import { useForm } from "@inertiajs/react";

export default function ReservationForm({ seance, tarifs }) {
    const { data, setData, post, reset, errors } = useForm({
        seance_id: seance.id,
        nom: "",
        prenom: "",
        places: [{ tarif_id: "" }],
    });

    const handleAddPlace = () => {
        if (data.places.length < 7) {
            setData("places", [...data.places, { tarif_id: "" }]);
        }
    };

    const handleRemovePlace = (index) => {
        const newPlaces = data.places.filter((_, i) => i !== index);
        setData("places", newPlaces);
    };

    const handleChangePlaceTarif = (index, tarif_id) => {
        const newPlaces = data.places.map((place, i) =>
            i === index ? { ...place, tarif_id } : place
        );
        setData("places", newPlaces);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/reservations", {
            onSuccess: () => {
                alert("Réservation réussie !");
                reset();
            },
            onError: () => {
                alert("Erreur lors de la réservation.");
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg border">
            <h3 className="text-xl font-bold mb-4 text-center">
                Réservation pour la séance : {seance.film?.titre || "Inconnu"}
            </h3>

            <label className="block mb-2">
                <strong>Nom :</strong>
                <input
                    type="text"
                    value={data.nom}
                    onChange={(e) => setData("nom", e.target.value)}
                    className="border border-gray-300 rounded w-full px-4 py-2 mt-1"
                    required
                />
            </label>
            {errors.nom && <p className="text-red-500">{errors.nom}</p>}

            <label className="block mb-2">
                <strong>Prénom :</strong>
                <input
                    type="text"
                    value={data.prenom}
                    onChange={(e) => setData("prenom", e.target.value)}
                    className="border border-gray-300 rounded w-full px-4 py-2 mt-1"
                    required
                />
            </label>
            {errors.prenom && <p className="text-red-500">{errors.prenom}</p>}

            <div>
                <strong>Places :</strong>
                {data.places.map((place, index) => (
                    <div key={index} className="mb-2">
                        <label>
                            <strong>Tarif pour la place {index + 1} :</strong>
                            <select
                                value={place.tarif_id}
                                onChange={(e) => handleChangePlaceTarif(index, e.target.value)}
                                className="border border-gray-300 rounded w-full px-4 py-2 mt-1"
                                required
                            >
                                <option value="">Sélectionnez un tarif</option>
                                {tarifs.map((tarif) => (
                                    <option key={tarif.id} value={tarif.id}>
                                        {tarif.type} - {tarif.prix}€
                                    </option>
                                ))}
                            </select>
                        </label>
                        {data.places.length > 1 && (
                            <button
                                type="button"
                                onClick={() => handleRemovePlace(index)}
                                className="text-red-500"
                            >
                                Supprimer la place
                            </button>
                        )}
                    </div>
                ))}
                {data.places.length < 7 && (
                    <button
                        type="button"
                        onClick={handleAddPlace}
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Ajouter une place
                    </button>
                )}
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Réserver
            </button>
        </form>
    );
}
