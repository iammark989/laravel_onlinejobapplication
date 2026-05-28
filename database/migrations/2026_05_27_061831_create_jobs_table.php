<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
           $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('employment_type');
            $table->string('work_setup');
            $table->string('location');
            $table->string('salary');
            $table->text('short_description')->nullable();
            $table->longText('description');
            $table->text('requirements')->nullable();
            $table->text('responsibilities')->nullable();
            $table->string('status')->default('Published');;
            $table->foreignId('posted_by')->constrained('users')->cascadeOnDelete();
            $table->string('expires_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
