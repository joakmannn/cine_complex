<?php
namespace App\Http\Controllers;

use App\Models\Film;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FilmController extends Controller
{
    public function index()
    {
        $films = Film::all();
        return Inertia::render('Films/Index', [
            'films' => $films,
        ]);
    }

    public function create()
    {
        return Inertia::render('Films/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'duree' => 'required|string',
            'synopsis' => 'nullable|string',
        ]);

        Film::create([
            'titre' => $request->titre,
            'duree' => $request->duree,
            'synopsis' => $request->synopsis,
        ]);

        return redirect()->route('films.index')->with('success', 'Film ajouté avec succès.');
    }

    public function show($id)
    {
        $film = Film::findOrFail($id);
        return Inertia::render('Films/Show', [
            'film' => $film,
        ]);
    }

    public function destroy($id)
    {
        $film = Film::findOrFail($id);
        $film->delete();

        return redirect()->route('films.index')->with('success', 'Film supprimé avec succès.');
    }
}
