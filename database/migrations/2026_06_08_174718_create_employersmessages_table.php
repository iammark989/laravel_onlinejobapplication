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
        Schema::create('employersmessages', function (Blueprint $table) {
            $table->id();
             // contact
            $table->string('name');
            $table->string('email');
            $table->string('contact')->nullable();

            // company
            $table->string('company_name')->nullable();
            $table->string('company_website')->nullable();
           // $table->string('company_size')->nullable();
            $table->string('industry')->nullable();

            // hiring
            $table->string('position')->nullable();
            $table->string('category')->nullable();
            $table->string('job_type')->nullable();
            $table->string('experience_level')->nullable();

            // budget
            $table->string('salary_range')->nullable();
            $table->string('timeline')->nullable();

            // message
            $table->text('message')->nullable();

            //** PRIVACY CONSENT */

            $table->boolean('privacy_consent')->default(false);
            $table->timestamp('privacy_consent_at')->nullable();
            $table->string('consent_ip')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employersmessages');
    }
};
