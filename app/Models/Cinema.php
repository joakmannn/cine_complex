<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cinema extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'adresse'];

    public function salles(): HasMany
    {
        return $this->hasMany(Salle::class, 'id_cinema'); // Spécifie la clé étrangère correcte
    }
}

