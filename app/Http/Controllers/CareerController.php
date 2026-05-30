<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\Jobapplication;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CareerController extends Controller
{

    // POST JOB OPENING
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

        // CLOSE JOB
    public function close(Job $job)
    {
        $job->update([
            'status' => 'Closed',
            'closed_at' => now(),
        ]);

        return back()->with(
            'success',
            'Job has been closed successfully.'
        );
    }
        // DELETE JOB
    public function destroy(Job $job)
    {
        $job->delete(); // Soft Delete

        return back()->with(
            'success',
            'Job moved to trash successfully.'
        );
    }

            // VIEW APPLICANTS
    public function viewApplicants($slug){
        $jobs = Job::where('slug',$slug)->firstOrFail();
        $applicants = Jobapplication::where('job_id',$jobs['id'])->get();

        return Inertia::render('admin/applicants',[
            'applicants' => $applicants,
            'job' => $jobs,
        ]);
    }

        // UPDATE APPLICANT STATUS
    public function updateApplicantStatus(Request $request,$id){
        $incomingFields = $request->validate([
         'application_status' => [
                'required',
                'in:pending,reviewed,shortlisted,for_interview,final_interview,hired,rejected'
            ],
            'interview_date' => 'nullable|date',
            'interview_notes' => 'nullable|string|max:5000',
            'admin_notes' => 'nullable|string|max:5000',
        ]);
        $incomingFields['id'] = $id;
        $incomingFields['reviewed_by'] = auth()->user()->id;
        $incomingFields['viewed_at'] = now();
        if ($request->application_status === 'hired') {
        $incomingFields['hired_at'] = now();
        $incomingFields['rejected_at'] = null;
        }

        if ($request->application_status === 'rejected') {
        $incomingFields['rejected_at'] = now();
        $incomingFields['hired_at'] = null;
        }

        $applicant = Jobapplication::findOrFail($id);
        {/*if($request->application_status === 'hired'){
            Job::where('id', $applicant->job_id)
                ->update([
                    'status' => 'Closed',
                    'closed_at' => now(),
                ]);
        }*/}

        $applicant->update($incomingFields);

        return back()->with('success', 'Applicant updated successfully.');
    }
}
