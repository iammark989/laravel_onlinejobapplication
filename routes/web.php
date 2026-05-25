<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/careers', function () {
    return Inertia::render('careers');
})->name('careers');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/careers/apply', function () {
    return Inertia::render('application');
})->name('apply');

require __DIR__.'/settings.php';
//require __DIR__.'/auth.php';
