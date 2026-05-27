<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function logout(Request $request){
         auth()->logout(); // if using Laravel auth

        $request->session()->invalidate(); // destroys session data
        $request->session()->regenerateToken(); // regenerate CSRF token

    return redirect()->intended('/admin/login');
    }

}
