<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CinemaController;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/cinemas', [CinemaController::class, 'index'])->name('cinemas.index');
    
    // Route pour afficher le formulaire d'ajout de cinéma
    Route::get('/cinemas/create', [CinemaController::class, 'create'])->name('cinemas.create');
    
    // Route pour enregistrer un nouveau cinéma
    Route::post('/cinemas', [CinemaController::class, 'store'])->name('cinemas.store');

    // Route pour afficher les détails d'un cinéma spécifique
    Route::get('/cinemas/{id}', [CinemaController::class, 'show'])->name('cinemas.show');

    // Route pour supprimer un cinéma
    Route::delete('/cinemas/{id}', [CinemaController::class, 'destroy'])->name('cinemas.destroy');
});

require __DIR__.'/auth.php';
