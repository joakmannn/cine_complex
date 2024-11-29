<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CinemaController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\SeanceController;
use App\Http\Controllers\SalleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PublicController;

Route::get('/', [PublicController::class, 'index'])->name('public.home'); // Page d'accueil publique
Route::get('/cinemas/{id}', [PublicController::class, 'cinemaShow'])->name('public.cinema.show'); // Détails d'un cinéma
Route::get('/films/{id}', [PublicController::class, 'filmShow'])->name('public.film.show'); // Détails d'un film



// Dashboard route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Authenticated routes
Route::middleware('auth')->group(function () {
    // Profile management
    Route::prefix('/profile')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    // Cinema management
    Route::prefix('/cinemas')->group(function () {
        Route::get('/', [CinemaController::class, 'index'])->name('cinemas.index');
        Route::get('/create', [CinemaController::class, 'create'])->name('cinemas.create');
        Route::post('/', [CinemaController::class, 'store'])->name('cinemas.store');
        Route::get('/{id}', [CinemaController::class, 'show'])->name('cinemas.show');
        Route::delete('/{id}', [CinemaController::class, 'destroy'])->name('cinemas.destroy'); // PAS "cinemas/{id}"
        Route::get('/{cinemaId}/salles', [CinemaController::class, 'loadSalles'])->name('cinemas.salles');


        
        // Salles management for a specific cinema
        Route::prefix('/{cinemaId}/salles')->group(function () {
            Route::get('/', [SalleController::class, 'index'])->name('cinemas.salles.index');
            Route::get('/create', [SalleController::class, 'create'])->name('cinemas.salles.create');
            Route::post('/', [SalleController::class, 'store'])->name('cinemas.salles.store');
            Route::delete('/{salleId}', [SalleController::class, 'destroy'])->name('cinemas.salles.destroy');
        });
    });

    // Film management
    Route::prefix('/films')->group(function () {
        Route::get('/', [FilmController::class, 'index'])->name('films.index');
        Route::get('/create', [FilmController::class, 'create'])->name('films.create');
        Route::post('/', [FilmController::class, 'store'])->name('films.store');
        Route::get('/{id}', [FilmController::class, 'show'])->name('films.show');
        Route::delete('/{id}', [FilmController::class, 'destroy'])->name('films.destroy');
    });

    // Seance management
    Route::prefix('/seances')->group(function () {
        Route::get('/', [SeanceController::class, 'index'])->name('seances.index');
        Route::get('/create', [SeanceController::class, 'create'])->name('seances.create');
        Route::post('/', [SeanceController::class, 'store'])->name('seances.store');
        Route::get('/{id}', [SeanceController::class, 'show'])->name('seances.show');
        Route::delete('/{id}', [SeanceController::class, 'destroy'])->name('seances.destroy');
    });
});

require __DIR__ . '/auth.php';
