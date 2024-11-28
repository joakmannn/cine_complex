<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);

        // Attacher le rôle Admin
        $adminRole = Role::where('label', 'Admin')->first();
        $admin->roles()->attach($adminRole->id);
    }
}
