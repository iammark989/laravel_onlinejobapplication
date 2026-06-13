<?php

use App\Http\Controllers\CareerController;
use App\Http\Controllers\ContactController;
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

            //SERVICES
Route::get('/services/executive-virtual-assistant', function (){
    return Inertia::render('services/executiveva');
})->name('executiveva');

Route::get('/services/general-administrative-virtual-assistant', function (){
    return Inertia::render('services/generaladminva');
})->name('generaladminva');

Route::get('/services/financial-bookkeeping-virtual-assistant', function (){
    return Inertia::render('services/financebookkeepingva');
})->name('financebookkeepingva');

Route::get('/services/ecommerce-amazon-virtual-assistant', function (){
    return Inertia::render('services/ecommerceamazonva');
})->name('ecommerceamazonva');

        // GO TO CONTACT PAGE
Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');
Route::post('/contact-us',[ContactController::class,'employermessage'])->name('employermessage');
        // GO TO ABOUT PAGE
Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');
        //GO TO CAREERS APPLY PAGE
Route::get('/careers/apply', function () {
    return Inertia::render('application');
})->name('apply');
        //GOT TO PRIVACY POLICY PAGE
Route::get('/privacy-policy', function () {
    return Inertia::render('privacypolicy');
})->name('privacypolicy');
        //GOT TO TERMS AND CONDITIONS PAGE PAGE
Route::get('/terms-and-conditions', function () {
    return Inertia::render('termsandconditions');
})->name('termsandconditions');

            // ADMIN
Route::get('/admin/login', function () {
    return Inertia::render('admin/login');
})->name('adminlogin');

Route::get('/admin',[QueryController::class,'goToAdminDashboard'])->name('adminhome')->middleware('adminonly');


        // PROFILE - GO TO USER PROFILE
Route::get('/admin/profile',function (){
    return Inertia::render('admin/userprofile');
})->name('userprofile')->middleware('adminonly');
        
        // PROFILE - ADMI USER CHANGE PASSWORD
Route::put('/admin/profile/change-password',[userController::class,'adminUserChangePassword'])->name('adminuserchangepassword')->middleware('adminonly');

        // PROFILE - GO TO USER EDIT PAGE
Route::get('/admin/users/{username}/edit',[UserController::class,'goToUserEdit'])->name('gotouseredit')->middleware('adminonly');
        
        // PROFILE - SAVE EDIT
Route::post('/admin/users/{username}/save',[UserController::class,'saveUserProfileUpdate'])->name('saveuserprofileupdate')->middleware('adminonly');

        // PROFILE - GO TO USER MAINTENANCE
Route::get('/admin/user-maintenance',[UserController::class,'goToUserMaintenancePage'])->name('usermaintenance')->middleware('adminonly');

        // PROFILE - GO TO CREATE USER
Route::get('/admin/user-maintenance/create-user',function(){
    return Inertia::render('admin/usercreate');
})->name('usercreatepage')->middleware('adminonly');

        // PROFILE - CREATE NEW USER
Route::post('/create-new-user',[UserController::class,'createNewuser'])->name('usercreate')->middleware('adminonly');

Route::get('/admin/dashboard',[QueryController::class,'goToAdminDashboard'])->name('admindashboard')->middleware('adminonly');

Route::get('/admin/careers',[QueryController::class,'goToAdminCareers'])->name('admincareers')->middleware('adminonly');

        // EMPLOYER MESSAGE / INQUERIES 
Route::get('/admin/employers-messages',[UserController::class,'goToEmployersMessageList'])->name('adminemployersmessagelist')->middleware('adminonly');
Route::get('/admin/employer-messages/{id}',[UserController::class,'goToEmployersRequest'])->name('adminemployersrequest')->middleware('adminonly');
        // GO TO REPLY TO EMPLOYER INQUIRY - CONTACT EMPLOYER
Route::get('/admin/employer-messages/{id}/reply',[ContactController::class,'contactEmployer'])->name('contactemployer')->middleware('adminonly');
        // SEND MESSAGE / REPLY TO EMPLOYER
Route::post('/admin/employer-message/{id}/send',[ContactController::class,'contactEmployerSend'])->name('contactemployersend')->middleware('adminonly');

// USER CONTROLLERS
Route::post('/admin/loginattempt',[UserController::class,'login'])->name('login');

Route::post('/admin/logout',[UserController::class,'logout'])->name('logout')->middleware('adminonly');

    // CAREER CONTROLLERS
        // POST JOB OPENING
Route::post('/admin/post-job',[CareerController::class,'postjob'])->name('postjob')->middleware('adminonly');
        // EDIT POSTED JOB
Route::get('/admin/careers/{slug}/edit',[CareerController::class,'editjob'])->name('editjob')->middleware('adminonly');
        // SAVE EDIT/UPDATE ON POSTED JOB
Route::put('/admin/careers/{id}',[CareerController::class,'updatepostedjob'])->name('updatepostedjob')->middleware('adminonly');
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
