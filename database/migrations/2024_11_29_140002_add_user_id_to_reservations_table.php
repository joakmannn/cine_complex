<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToReservationsTable extends Migration
{
    public function up()
    {
        Schema::table('reservations', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->after('id');
    
            // Ajouter la clé étrangère vers la table users
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }
    

    public function down()
    {
        Schema::table('reservations', function (Blueprint $table) {
            // Ajoutez ici le code pour supprimer la colonne user_id
        });
    }
}
