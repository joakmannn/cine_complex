<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyReservationsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('reservations', function (Blueprint $table) {
            // Suppression des colonnes inutiles
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');

            $table->dropForeign(['tarif_id']);
            $table->dropColumn('tarif_id');

            // Ajout des nouvelles colonnes
            $table->string('nom')->after('seance_id');
            $table->string('prenom')->after('nom');
            $table->decimal('prix_total', 8, 2)->nullable()->after('places_reservees');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('reservations', function (Blueprint $table) {
            // Ajout des colonnes supprimées
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->foreignId('tarif_id')->nullable()->constrained('tarifs')->onDelete('set null');

            // Suppression des nouvelles colonnes
            $table->dropColumn('nom');
            $table->dropColumn('prenom');
            $table->dropColumn('prix_total');
        });
    }
}
