<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            ['label' => 'Admin', 'created_at' => now(), 'updated_at' => now()],
            ['label' => 'User', 'created_at' => now(), 'updated_at' => now()],
            ['label' => 'Gérant', 'created_at' => now(), 'updated_at' => now()],
        ];

        foreach ($roles as $role) {
            Role::updateOrCreate(['label' => $role['label']], $role);
        }
    }
}
