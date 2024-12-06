<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Créer un utilisateur admin
        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@cinemacomplex1.com',
            'password' => Hash::make('Cinema1!'), // Chiffrez le mot de passe
        ]);

        // Trouver ou créer le rôle 'Admin'
        $adminRole = Role::firstOrCreate(['label' => 'Admin']);  // Utilisez firstOrCreate pour éviter de créer un doublon

        // Associer le rôle 'Admin' à l'utilisateur
        $user->roles()->attach($adminRole->id); // Utilisez attach pour associer l'utilisateur au rôle
    }
}
