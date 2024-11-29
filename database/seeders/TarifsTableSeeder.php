<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tarif;

class TarifsTableSeeder extends Seeder
{
    public function run()
    {
        Tarif::create(['type' => 'Plein tarif', 'prix' => 9.20]);
        Tarif::create(['type' => 'Étudiant', 'prix' => 7.60]);
        Tarif::create(['type' => 'Moins de 14 ans', 'prix' => 5.90]);
    }
}
