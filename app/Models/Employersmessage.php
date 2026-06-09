<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Employersmessage extends Model
{
     use HasFactory, Notifiable;
    protected $fillable = [
             'name',
            'email',
            'contact',
            'company_name',
            'company_website',
            'company_size',
            'industry',
            'position',
            'category',
            'job_type',
            'experience_level',
            'salary_range',
            'timeline',
            'message',
            'privacy_consent',
            'privacy_consent_at',
            'consent_ip',
    ];
}
