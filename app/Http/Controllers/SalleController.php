<?php
namespace App\Http\Controllers;

use App\Models\Cinema;
use App\Models\Salle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalleController extends Controller
{
    public function index($cinemaId)
{
    $cinema = Cinema::with(['salles' => function ($query) use ($cinemaId) {
        $query->where('id_cinema', $cinemaId);
    }])->findOrFail($cinemaId);

    return Inertia::render('Salles/Index', [
        'cinema' => $cinema,
        'salles' => $cinema->salles,
    ]);
}

   
    // Afficher le formulaire pour ajouter une salle
    public function create($cinemaId)
    {
        $cinema = Cinema::findOrFail($cinemaId);

        return Inertia::render('Salles/Create', [
            'cinema' => $cinema,
        ]);
    }

    public function store(Request $request, $cinemaId)
{
    $request->validate([
        'nom' => 'required|string|max:255',
        'capacite' => 'required|integer|min:1',
    ]);

    Salle::create([
        'nom' => $request->nom,
        'capacite' => $request->capacite,
        'id_cinema' => $cinemaId, // Utilise id_cinema
    ]);

    // Redirige vers la vue "Show" du cinéma
    return redirect()->route('cinemas.show', $cinemaId)
        ->with('success', 'Salle ajoutée avec succès.');
}

    

    public function destroy($cinemaId, $salleId)
    {
        $salle = Salle::where('id_cinema', $cinemaId)->findOrFail($salleId);
        $salle->delete();

        return redirect()->route('cinemas.show', $cinemaId)
            ->with('success', 'Salle supprimée avec succès.');
    }

}
