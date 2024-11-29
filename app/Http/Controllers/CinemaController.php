<?php

namespace App\Http\Controllers;

use App\Models\Cinema;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CinemaController extends Controller
{
    public function index()
{
    $cinemas = Cinema::withCount('salles')->get();

    return Inertia::render('Cinemas/Index', [
        'cinemas' => $cinemas,
    ]);
}


    // Méthode pour afficher le formulaire d'ajout d'un cinéma
    public function create()
    {
        return Inertia::render('Cinemas/Create');
    }

    // Méthode pour enregistrer un nouveau cinéma
    public function store(Request $request)
{
    $request->validate([
        'nom' => 'required|string|max:255',
        'adresse' => 'required|string|max:255',
    ]);

    Cinema::create([
        'nom' => $request->nom,
        'adresse' => $request->adresse,
    ]);

    return redirect()->route('cinemas.index')->with('success', 'Cinéma ajouté avec succès.');
}


    public function show($id)
    {
        $cinema = Cinema::with('salles')->findOrFail($id);

        return Inertia::render('Cinemas/Show', [
            'cinema' => $cinema,
        ]);
    }


    public function destroy($id)
    {
        $cinema = Cinema::findOrFail($id);
    
        $cinema->delete();
    
        return redirect()->route('cinemas.index')->with('success', 'Cinéma supprimé avec succès.');
    }
    

}
