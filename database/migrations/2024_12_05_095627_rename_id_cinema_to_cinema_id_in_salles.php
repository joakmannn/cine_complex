<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('salles', function (Blueprint $table) {
            $table->renameColumn('id_cinema', 'cinema_id'); // Renommer la colonne
        });
    }

    public function down()
    {
        Schema::table('salles', function (Blueprint $table) {
            $table->renameColumn('cinema_id', 'id_cinema'); // Annuler le changement si besoin
        });
    }
};
