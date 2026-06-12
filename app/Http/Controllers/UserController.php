<?php

namespace App\Http\Controllers;

use App\Models\Employersmessage;
use App\Models\Job;
use App\Models\Jobapplication;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
                $user = User::where('username', $request->username)->firstOrFail();
                if (!$user->is_active) {
                throw ValidationException::withMessages([
                'errormsg' => ['Invalid username or password.'],
                ]);
                }else{
                    $request->session()->regenerate();
                    return redirect('/admin/dashboard');
                }
            }else{
                throw ValidationException::withMessages([
                'errormsg' => ['Invalid username or password.'],
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

    // VIEW EMPLOYER MESSAGE / INQUIRY LIST
    public function goToEmployersMessageList(){
        $messageList = Employersmessage::orderBy('created_at','ASC')->get();
        return Inertia::render('admin/employersmessagelist',[
            'messages' => $messageList,
        ]);
    }

    // GO TO USER MAINTENANCE
    public function goToUserMaintenancePage(){
        $users = User::where('role','!=','developer')->get();
        return Inertia::render('admin/usermaintenance',['users' => $users,]);
    }

     public function goToEmployersRequest($id){
        $message = Employersmessage::where('id','=',$id)->firstOrFail();
        return Inertia::render('admin/employersrequest',[
            'message' => $message,
        ]);
    }

        // ADMIN USER CHANGE PASSWORD
        public function adminUserChangePassword(Request $request){
            $incomingFields = $request->validate([
                'current_password' => 'required',
                'password' => 'required|min:8|confirmed|max:16',
            ]);

            if(Hash::check($incomingFields['current_password'],Auth()->user()->password)){
            Auth::user()->update(['password' => Hash::make($incomingFields['password'])]);
            }else{
            throw ValidationException::withMessages([
            'current_password' => ['Current password is incorrect']
            ]);
            }
        }

        // GO TO USER EDIT PAGE
        public function goToUserEdit($username){
                $users = User::where('username','=',$username)->firstOrFail();
            return Inertia::render('admin/useredit',['users' => $users]);
        }

        // SAVE USER PROFILE UPDATE
        public function saveUserProfileUpdate(Request $request,$username){
            $incomingFields =  $request->validate([
                'name' => 'required|string|max:100',
                'email' => 'required|email|',
                'role' => 'required',
                'is_active' => 'required|boolean',
                'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            ]);
                

            $user = User::where('username', $username)->firstOrFail();

            if ($request->hasFile('image')) {
                    $filename = $incomingFields['username'] . "-" . uniqid() . ".jpg" ;
                    //$path = $request->file('images')->storeAs('images',$filename, 'public');
                    $file = $request->file('image');
                    $file->move(public_path('files/empimages'), $filename);
                    $path = 'images/' . $filename;
                    $incomingFields['image'] = $filename;
                }else{
                    $incomingFields['image'] = $user->image;
                }

            $user->update($incomingFields);
        }

        //CREATE NEW USER
    public function createNewuser(Request $request){
        $incomingFields = $request->validate([
                'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
                'username' => 'required|string|max:50|unique:users,username',
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255|unique:users,email',
                'role' => 'required|in:administrator,recruitment,marketing',
                'password' => 'required|min:8|confirmed|max:16',
            ]);
        
                if ($request->hasFile('image')) {
                    $filename = $incomingFields['username'] . "-" . uniqid() . ".jpg" ;
                    //$path = $request->file('images')->storeAs('images',$filename, 'public');
                    $file = $request->file('image');
                    $file->move(public_path('files/empimages'), $filename);
                    $path = 'images/' . $filename;
                    $incomingFields['image'] = $filename;
                }else{
                    $incomingFields['image'] = 'fallback-image.jpg';
                }
            User::create($incomingFields);
            
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
