<?php

namespace App\Http\Controllers;

use App\Models\Employersmessage;
use App\Models\Message;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function sendmessage(Request $request){
        $incomingFields = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'message' => 'required|string|max:1000',
        ]);

        Message::create($incomingFields);

        return redirect()->route('contact');
    }

    //EMPLOYERS INQUIRY / MESSAGE
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

    public function employermessage(Request $request){
            $incomingFields = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'contact' => 'required|string|max:25',
            'company_name' => 'required|string|max:30',
            'company_website' => 'string|max:50',
            'company_size' => 'required|string|max:15',
            'industry' => 'required|string|max:30',
            'position' => 'required|string|max:50',
            'category' =>  'required|string|max:50',
            'job_type' => 'required|string|max:50',
            'experience_level' => 'required|string|max:30',
            'salary_range' => 'required|string|max:30',
            'timeline' =>'required|string|max:30',
            'message' =>'required|string|max:30',
            'privacy_consent' => 'required|boolean|accepted',
            ]);
            $incomingFields['privacy_consent_at'] = now();
            $incomingFields['consent_ip'] = $this->address();

            Employersmessage::create($incomingFields);

    }
}
