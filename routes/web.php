<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\UserController;
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


            // ADMIN
Route::get('/admin/login', function () {
    return Inertia::render('admin/login');
})->name('adminlogin');

Route::get('/admin/dashboard',[QueryController::class,'goToAdminDashboard'])->name('admindashboard')->middleware('adminonly');

Route::get('/admin/careers', function () {
    return Inertia::render('admin/careers');
})->name('admincareers')->middleware('adminonly');

    // USER CONTROLLERS
Route::post('/admin/loginattempt',[UserController::class,'login'])->name('login');

Route::post('/admin/logout',[UserController::class,'logout'])->name('logout')->middleware('adminonly');

    // POST CONTROLLERS
Route::post('/admin/post-job',[PostController::class,'postjob'])->name('postjob')->middleware('adminonly');


require __DIR__.'/settings.php';
//require __DIR__.'/auth.php';
