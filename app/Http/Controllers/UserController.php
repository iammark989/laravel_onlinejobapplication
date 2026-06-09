<?php

namespace App\Http\Controllers;

use App\Models\Employersmessage;
use App\Models\Job;
use App\Models\Jobapplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class UserController extends Controller
{
    //  ADMIN //
    // LOGIN ATTEMPT //
    public function login(Request $request){
        $incomingFields = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        if(Auth::attempt($incomingFields)){
            $request->session()->regenerate();
            return redirect('/admin/dashboard');
        }else{
            throw ValidationException::withMessages([
        'errormsg' => ['Invalid email or password.'],
        ]);
        }

    }
    // LOGOUT
    public function logout(Request $request){
         auth()->logout(); // if using Laravel auth

        $request->session()->invalidate(); // destroys session data
        $request->session()->regenerateToken(); // regenerate CSRF token

    return redirect()->intended('/admin/login');
    }

    public function goToEmployersMessageList(){
        $messageList = Employersmessage::orderBy('created_at','ASC')->get();
        return Inertia::render('admin/employersmessagelist',[
            'messages' => $messageList,
        ]);
    }

     public function goToEmployersRequestaaaa(){
        return Inertia::render('admin/employersrequest');
    }




    //JOB APPLICATION
     public function address()
    {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
    }
    public function sendApplication(Request $request,$slug){
         $incomingFields = $request->validate([
            'first_name' => 'required|max:255',
            'middle_name' => 'max:255',
            'last_name' => 'required|max:255',
            'suffix' => 'max:255',
            'street_building' => 'required|max:255',
            'barangay' => 'required|max:255',
            'city' => 'required|max:255',
            'region' => 'required|max:255',
            'mobile_number' => 'required',
            'email' => 'required|email',
            'expected_salary' => 'required|numeric',
            'employment_status' => 'required',
            'resume' => 'required|file|mimes:pdf,doc,docx|max:3072',
            'privacy_consent' => 'required|boolean|accepted',
         ]);

         $incomingFields['consent_ip'] = $this->address();
         $incomingFields['privacy_consent_at'] = now();

         if ($request->hasFile('resume')) {
            $file = $request->file('resume');
            $filename =
                Str::slug($incomingFields['first_name'] . '-' . $incomingFields['last_name'])
                . '-'
                . time()
                . '.'
                . $file->getClientOriginalExtension();
            $file->move(public_path('files/resumes'), $filename);
            $incomingFields['resume'] = $filename;
        }

        $job = Job::where('slug',$slug)->firstOrFail();
        
        $incomingFields['job_id'] = $job['id'];

        Jobapplication::create($incomingFields);

        return redirect()->route('careers')->with('success', 'Application Submitted Successfully!');
    }

}
