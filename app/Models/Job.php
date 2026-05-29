<?php

namespace App\Models;

use App\Models\Jobapplication;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Job extends Model
{
     use HasFactory, Notifiable;

       protected $fillable = [
        'title',
        'slug',
        'employment_type',
        'work_setup',
        'location',
        'salary',
        'short_description',
        'description',
        'requirements',
        'responsibilities',
        'status',
        'posted_by',
        'expires_at',
        ];

        public function user(){
          return $this->belongsTo(User::class,'posted_by','id');
        }

        public function jobapplications(){
          return $this->hasMany(Jobapplication::class,'job_id','id');
        }
      
}
