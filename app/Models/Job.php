<?php

namespace App\Models;

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
}
