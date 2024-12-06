<?php
namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Cinema;
use App\Models\Salle;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Validation\ValidationException;

class SalleApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test de la création d'une salle valide.
     */
    public function testCreationSalle()
    {
        // Créer un cinéma simulé
        $cinema = Cinema::factory()->create();

        // Données valides pour la salle
        $data = [
            'nom' => 'Salle Test',
            'capacite' => 100,
            'cinema_id' => $cinema->id,
        ];

        // Utiliser directement le modèle pour créer la salle
        $salle = Salle::create($data);

        // Vérifications
        $this->assertDatabaseHas('salles', $data);
        $this->assertEquals($cinema->id, $salle->cinema_id);
        $this->assertEquals('Salle Test', $salle->nom);
    }

    /**
     * Test de la validation lors de la création d'une salle.
     */
    public function testValidationCreationSalle()
    {
        $this->expectException(ValidationException::class);

        // Données invalides pour la salle
        $data = [
            'nom' => '', // Champ requis vide
            'capacite' => -10, // Valeur invalide
            'cinema_id' => null, // Non défini
        ];

        // Tenter de créer une salle avec des données invalides
        Salle::create($data);

        // Vérification que les données invalides ne sont pas enregistrées
        $this->assertDatabaseMissing('salles', $data);
    }
}
