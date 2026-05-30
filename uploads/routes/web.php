<?php

use App\Http\Controllers\CareerController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/careers', [QueryController::class,'goToCareers'])->name('careers');
Route::get('careers/{slug}',[QueryController::class,'goToJobDetails'])->name('jobdetails');
Route::get('/careers/{slug}/apply',[QueryController::class,'goToApplyPage'])->name('applypage');
Route::post('/careers/apply/{slug}',[UserController::class,'sendApplication'])->name('sendapplication');

Route::get('/services/employers', function (){
    return Inertia::render('employer');
})->name('employers');
Route::get('/services/job-seekers', function (){
    return Inertia::render('jobseekers');
})->name('jobseekers');

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

Route::get('/admin/careers',[QueryController::class,'goToAdminCareers'])->name('admincareers')->middleware('adminonly');

    // USER CONTROLLERS
Route::post('/admin/loginattempt',[UserController::class,'login'])->name('login');

Route::post('/admin/logout',[UserController::class,'logout'])->name('logout')->middleware('adminonly');

    // CAREER CONTROLLERS
        // POST JOB OPENING
Route::post('/admin/post-job',[CareerController::class,'postjob'])->name('postjob')->middleware('adminonly');
        // CLOSE JOB
Route::patch('/admin/careers/{job}/close',[CareerController::class,'close'])->name('closejob')->middleware('adminonly');
        // DELETE JOB
Route::delete('/admin/careers/{job}',[CareerController::class,'destroy'])->name('deletejob')->middleware('adminonly');
        // VIEW APPLICANTS
Route::get('/admin/careers/{slug}/applicants',[CareerController::class,'viewApplicants'])->name('viewapplicants')->middleware('adminonly');
        // UPDATE APPLICANT STATUS
Route::put('/admin/applicants/{id}',[CareerController::class,'updateApplicantStatus'])->name('updateapplicantstatus')->middleware('adminonly');

require __DIR__.'/settings.php';
//require __DIR__.'/auth.php';
