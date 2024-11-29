<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Film;
use App\Models\Salle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeanceController extends Controller
{
    public function index()
    {
        $seances = Seance::with(['film', 'salle'])->get();
        return Inertia::render('Seances/Index', [
            'seances' => $seances,
        ]);
    }

    public function create()
    {
        $films = Film::all();
        $salles = Salle::all();

        return Inertia::render('Seances/Create', [
            'films' => $films,
            'salles' => $salles,
        ]);
    }

    public function store(Request $request)
    {
        // Validation
        $request->validate([
            'horaire' => 'required|date',
            'id_film' => 'required|exists:films,id', // Validation pour id_film
            'id_salle' => 'required|exists:salles,id', // Validation pour id_salle
        ]);

        // Création de la séance
        Seance::create([
            'horaire' => $request->horaire,
            'id_film' => $request->id_film,
            'id_salle' => $request->id_salle,
        ]);

        // Redirection avec un message de succès
        return redirect()->route('seances.index')
            ->with('success', 'Séance ajoutée avec succès.');
    }

    public function show($id)
    {
        $seance = Seance::with(['film', 'salle'])->findOrFail($id);

        return Inertia::render('Seances/Show', [
            'seance' => $seance,
        ]);
    }

    public function destroy($id)
    {
        $seance = Seance::findOrFail($id);
        $seance->delete();

        return redirect()->route('seances.index')->with('success', 'Séance supprimée avec succès.');
    }
}