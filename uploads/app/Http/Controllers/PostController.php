<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function postjob(Request $request){
        $incomingFields = $request->validate([
        'title' => 'required',
        'employment_type' => 'required',
        'work_setup'=> 'required',
        'location'=> 'required',
        'salary'=> 'required',
        //'short_description'=> 'required',
        'description'=> 'required',
        'requirements'=> 'required',
        'responsibilities'=> 'required',
        //'status'=> 'required',
        //'posted_by'=> 'required',
        'expires_at'=> 'required',
        ]);
        $slug = Str::slug($request->title);
        $count = Job::where('slug','LIKE',"{slug}%")->count();
        if($count > 0){
            $slug .= "-" . ($count+1);
        }
        $incomingFields['slug'] = $slug;
        $incomingFields['posted_by'] = auth()->user()->id;

        Job::create($incomingFields);

        return redirect('/admin/dashboard');
        
    }


}
