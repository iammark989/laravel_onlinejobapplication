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
        Schema::create('jobapplications', function (Blueprint $table) {
        $table->id();
        /*
        |--------------------------------------------------------------------------
        | Job Reference
        |--------------------------------------------------------------------------
        */

        $table->foreignId('job_id')
            ->constrained('jobs')
            ->cascadeOnDelete();

        /*
        |--------------------------------------------------------------------------
        | Applicant Information
        |--------------------------------------------------------------------------
        */

        $table->string('first_name');
        $table->string('middle_name')->nullable();
        $table->string('last_name');
        $table->string('suffix')->nullable();

        /*
        |--------------------------------------------------------------------------
        | Address
        |--------------------------------------------------------------------------
        */

        $table->string('street_building')->nullable();
        $table->string('barangay');
        $table->string('city');
        $table->string('region');

        /*
        |--------------------------------------------------------------------------
        | Contact Information
        |--------------------------------------------------------------------------
        */

        $table->string('mobile_number');
        $table->string('email');

        /*
        |--------------------------------------------------------------------------
        | Employment Details
        |--------------------------------------------------------------------------
        */

        $table->string('expected_salary')->nullable();

        $table->enum('employment_status', [
            'employed',
            'unemployed',
            'self_employed',
            'student',
            'freelancer',
        ])->nullable();

        /*
        |--------------------------------------------------------------------------
        | Resume
        |--------------------------------------------------------------------------
        */

        $table->string('resume_path');

        /*
        |--------------------------------------------------------------------------
        | Recruitment Tracking
        |--------------------------------------------------------------------------
        */

        $table->enum('application_status', [
            'pending',
            'reviewed',
            'shortlisted',
            'for_interview',
            'final_interview',
            'hired',
            'rejected',
        ])->default('pending');

        $table->timestamp('interview_date')->nullable();

        $table->longText('interview_notes')->nullable();

        $table->timestamp('hired_at')->nullable();

        /*
        |--------------------------------------------------------------------------
        | Admin Features
        |--------------------------------------------------------------------------
        */

        $table->timestamp('viewed_at')->nullable();

        $table->timestamp('archived_at')->nullable();

        $table->longText('admin_notes')->nullable();

        $table->foreignId('reviewed_by')
            ->nullable()
            ->constrained('users')
            ->nullOnDelete();

        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobapplications');
    }
};
