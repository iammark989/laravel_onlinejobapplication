<?php

namespace App\Models;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Jobapplication extends Model
{
     use HasFactory, Notifiable;

       protected $fillable = [
        'job_id',
        'first_name',
        'middle_name',
        'last_name',
        'suffix',
        'street_building',
        'barangay',
        'city',
        'region',
        'mobile_number',
        'email',
        'expected_salary',
        'employment_status',
        'resume_path',
        'application_status',
        'interview_date',
        'interview_notes',
        'hired_at',
        'viewed_at',
        'archived_at',
        'admin_notes',
        'reviewed_by',
        ];

        public function user(){
          return $this->belongsTo(User::class,'reviewed_by','id');
        }

        public function job(){
          return $this->belongsTo(Job::class,'job_id','id');
        }
}
