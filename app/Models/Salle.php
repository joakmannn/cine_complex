<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cinema; 


class Salle extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'capacite',
        'id_cinema',
    ];

    /**
     * Relation avec le modèle Cinema
     */
    public function cinema()
    {
        return $this->belongsTo(Cinema::class, 'id_cinema');
    }
}
