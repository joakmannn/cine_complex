<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Salle extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'capacite', 'id_cinema']; // Inclut id_cinema

    public function cinema(): BelongsTo
    {
        return $this->belongsTo(Cinema::class, 'id_cinema'); // Relation avec la clé étrangère personnalisée
    }
}
