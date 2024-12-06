<?php

namespace App\Models;
use App\Models\Film;
use App\Models\Salle;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
    use HasFactory;

    protected $fillable = ['horaire', 'id_film', 'id_salle'];

    public function film()
    {
        return $this->belongsTo(Film::class, 'id_film');
    }

    public function salle()
    {
        return $this->belongsTo(Salle::class, 'id_salle');
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
