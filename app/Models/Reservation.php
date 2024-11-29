<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Seance;
use App\Models\Places;



class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'seance_id',
        'user_id', 
        'nom',
        'prenom',
        'places_reservees',
        'date_reservation',
        'prix_total',
    ];

    public function seance(): BelongsTo
    {
        return $this->belongsTo(Seance::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }



    public function places()
    {
        return $this->hasMany(ReservationPlace::class);
    }

}


