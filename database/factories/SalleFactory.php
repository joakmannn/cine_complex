<?php

namespace Database\Factories;

use App\Models\Salle;
use App\Models\Cinema;
use Illuminate\Database\Eloquent\Factories\Factory;

class SalleFactory extends Factory
{
    protected $model = Salle::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nom' => $this->faker->word(),
            'capacite' => $this->faker->numberBetween(50, 300),
            'cinema_id' => Cinema::factory(), // Crée un cinéma lié
        ];
    }
}
