<?php

namespace App\Http\Controllers;

use MongoDB\Client;
use Inertia\Inertia;

class FilmClickController extends Controller
{
    protected $mongoClient;

    public function __construct()
    {
        // Initialiser le client MongoDB
        $this->mongoClient = new Client("mongodb+srv://admin_cine:CinemaSecure123@cluster0.oghbb.mongodb.net/cine_complex?retryWrites=true&w=majority");
    }

    public function incrementClick($id)
    {
        $collection = $this->mongoClient->cine_complex->film_clicks;

        // Incrémenter les clics pour le film donné
        $collection->updateOne(
            ['film_id' => (int)$id],
            ['$inc' => ['clicks' => 1]],
            ['upsert' => true]
        );

        return redirect()->back()->with('message', 'Clic comptabilisé avec succès.');
    }
}
