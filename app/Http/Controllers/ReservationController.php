<?php
namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\ReservationPlace;
use App\Models\Seance;
use App\Models\Tarif;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Assurez-vous d'importer Auth
use Inertia\Inertia; // Importez Inertia ici

class ReservationController extends Controller
{
    public function index()
    {
        // Récupérer toutes les réservations
        $reservations = Reservation::with([
            'seance.film',
            'seance.salle.cinema',
            'seance.salle',
            'seance.reservations',
        ])->get();
    
        // Calculer les places restantes pour chaque séance associée à une réservation
        $reservations = $reservations->map(function ($reservation) {
            $seance = $reservation->seance;
            $placesReservees = $seance->reservations->sum('places_reservees');
            $seance->capaciteRestante = $seance->salle->capacite - $placesReservees;
            return $reservation;
        });
    
        return Inertia::render('Reservations/Index', [
            'reservations' => $reservations,
        ]);
    }
    

    public function create(Seance $seance)
    {
        $tarifs = Tarif::all();

        // Charger les relations nécessaires
        $seance->load('film', 'salle.cinema');

        return Inertia::render('Reservations/Create', [
            'seance' => $seance,
            'tarifs' => $tarifs,
        ]);
    }

    public function store(Request $request)
    {
        // Validation des données du formulaire
        $validatedData = $request->validate([
            'seance_id' => 'required|exists:seances,id',
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'places' => 'required|array|min:1|max:7',
            'places.*.tarif_id' => 'required|exists:tarifs,id',
        ]);

        $seance = Seance::with('salle', 'reservations')->findOrFail($validatedData['seance_id']);

        // Vérification de la capacité disponible
        $placesReservees = $seance->reservations->sum('places_reservees');
        $capaciteRestante = $seance->salle->capacite - $placesReservees;
        $nombrePlacesDemandees = count($validatedData['places']);

        if ($nombrePlacesDemandees > $capaciteRestante) {
            return back()->withErrors(['places' => 'Capacité insuffisante.']);
        }

        // Calcul du prix total
        $prixTotal = 0;
        foreach ($validatedData['places'] as $place) {
            $tarif = Tarif::findOrFail($place['tarif_id']);
            $prixTotal += $tarif->prix;
        }

        // Récupérer l'utilisateur authentifié (s'il existe)
        $user = Auth::user();

        // Création de la réservation
        $reservation = Reservation::create([
            'user_id' => $user ? $user->id : null, // Associer le user_id si l'utilisateur est authentifié
            'seance_id' => $validatedData['seance_id'],
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'places_reservees' => $nombrePlacesDemandees,
            'prix_total' => $prixTotal,
            'date_reservation' => now()->toDateString(),
        ]);

        // Enregistrement des places avec leur tarif
        foreach ($validatedData['places'] as $placeData) {
            $reservation->places()->create([
                'tarif_id' => $placeData['tarif_id'],
            ]);
        }

        // Redirection avec message de succès
        return redirect()->back()->with('success', 'Réservation réussie.');
    }
}
