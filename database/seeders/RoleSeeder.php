<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        Role::insert([
            ['label' => 'Admin', 'created_at' => now(), 'updated_at' => now()],
            ['label' => 'User', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
