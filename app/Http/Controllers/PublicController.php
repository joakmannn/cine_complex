<?php
namespace App\Http\Controllers;

use App\Models\Cinema;
use App\Models\Film;
use App\Models\Seance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tarif;
use App\Models\Reservation;


class PublicController extends Controller
{
    public function index()
    {
        $cinemas = Cinema::withCount('salles')->get();
        $films = Film::all();
        $tarifs = Tarif::all(); // Récupérer les tarifs

        $seances = Seance::with(['film', 'salle.cinema', 'reservations'])->get();

        // Calculer le nombre de places réservées et la capacité restante pour chaque séance
        $seances = $seances->map(function ($seance) {
            $placesReservees = $seance->reservations->sum('places_reservees');
            $seance->placesReservees = $placesReservees;
            $seance->capaciteRestante = $seance->salle->capacite - $placesReservees;

            return $seance;
        });

        return Inertia::render('Public/Home', [
            'cinemas' => $cinemas,
            'films' => $films,
            'seances' => $seances,
            'tarifs' => $tarifs, // Passer les tarifs à la vue
        ]);
    }

    

    public function cinemaShow($id)
    {
        $cinema = Cinema::select('id', 'nom', 'adresse')
            ->with(['salles:id,nom,capacite,id_cinema'])
            ->findOrFail($id);

        return Inertia::render('Public/CinemaShow', [
            'cinema' => $cinema,
        ]);
    }

    public function filmShow($id)
    {
        $film = Film::select('id', 'titre', 'duree', 'synopsis')
            ->with([
                'seances:id,horaire,id_salle,id_film',
                'seances.salle:id,nom,id_cinema',
                'seances.salle.cinema:id,nom',
            ])
            ->findOrFail($id);

        return Inertia::render('Public/FilmShow', [
            'film' => $film,
        ]);
    }
}
