<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Salle; 


class Cinema extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'adresse'];

    public function salles()
    {
        return $this->hasMany(Salle::class, 'id_cinema', 'id');
    }
}




