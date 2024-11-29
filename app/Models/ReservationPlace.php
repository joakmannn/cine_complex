<?php
// App\Models\ReservationPlace.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReservationPlace extends Model
{
    protected $fillable = ['reservation_id', 'tarif_id'];

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function tarif()
    {
        return $this->belongsTo(Tarif::class);
    }
}
