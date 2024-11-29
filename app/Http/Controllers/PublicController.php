<?php
namespace App\Http\Controllers;

use App\Models\Cinema;
use App\Models\Film;
use App\Models\Seance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function index()
    {
        $cinemas = Cinema::withCount('salles')->get();
        $films = Film::all();
        $seances = Seance::with(['film', 'salle.cinema'])->get(); // Vérifiez bien la structure
    
        return Inertia::render('Public/Home', [
            'cinemas' => $cinemas,
            'films' => $films,
            'seances' => $seances,
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
