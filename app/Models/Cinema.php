<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Salle; 


class Cinema extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'adresse'];

    public function salles()
    {
        return $this->hasMany(Salle::class, 'cinema_id', 'id');
    }
}




