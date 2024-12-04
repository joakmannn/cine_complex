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
            // Supprimer les colonnes avec des clés étrangères
            if (Schema::hasColumn('reservations', 'user_id')) {
                $table->dropForeign(['user_id']);
                $table->dropColumn('user_id');
            }

            if (Schema::hasColumn('reservations', 'tarif_id')) {
                $table->dropForeign(['tarif_id']);
                $table->dropColumn('tarif_id');
            }

            // Ajouter les nouvelles colonnes
            $table->after('seance_id', function (Blueprint $table) {
                $table->string('nom');
                $table->string('prenom');
            });

            $table->after('places_reservees', function (Blueprint $table) {
                $table->decimal('prix_total', 8, 2)->nullable();
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('reservations', function (Blueprint $table) {
            // Ajouter les colonnes supprimées
            if (!Schema::hasColumn('reservations', 'user_id')) {
                $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            }

            if (!Schema::hasColumn('reservations', 'tarif_id')) {
                $table->foreignId('tarif_id')->nullable()->constrained('tarifs')->onDelete('set null');
            }

            // Supprimer les nouvelles colonnes
            if (Schema::hasColumn('reservations', 'nom')) {
                $table->dropColumn('nom');
            }

            if (Schema::hasColumn('reservations', 'prenom')) {
                $table->dropColumn('prenom');
            }

            if (Schema::hasColumn('reservations', 'prix_total')) {
                $table->dropColumn('prix_total');
            }
        });
    }
}
