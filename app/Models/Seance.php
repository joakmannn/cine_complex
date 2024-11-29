<?php

namespace App\Models;
use App\Models\film;
use App\Models\salle;
use App\Models\reservations;




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
