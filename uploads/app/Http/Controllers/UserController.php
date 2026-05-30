<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\Jobapplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{

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

    //JOB APPLICATION
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
            'resume_path' => 'required|file|mimes:pdf,doc,docx|max:3072',
         ]);

         if ($request->hasFile('resume_path')) {
            $file = $request->file('resume_path');
            $filename =
                Str::slug($incomingFields['first_name'] . '-' . $incomingFields['last_name'])
                . '-'
                . time()
                . '.'
                . $file->getClientOriginalExtension();
            $file->move(public_path('files/resumes'), $filename);
            $incomingFields['resume_path'] = $filename;
        }

        $job = Job::where('slug',$slug)->firstOrFail();
        
        $incomingFields['job_id'] = $job['id'];

        Jobapplication::create($incomingFields);

        return redirect()->route('careers')->with('success', 'Application Submitted Successfully!');
    }

}
