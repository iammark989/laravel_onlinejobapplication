<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\Jobapplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class QueryController extends Controller
{
    public function goToAdminDashboard(){
     
        $totalOPenJobs = Job::where('status','Published')->count();
        $totalClosedJobs = Job::where('status','Closed')->count();
        $totalHired = Jobapplication::where('application_status','hired')->count();
        $hiredPerPosition = DB::table('jobs as t0')
                            ->rightJoin('jobapplications as t1','t0.id','=','t1.id')
                            ->select(
                                't0.id',
                                't0.title',
                                DB::raw('COUNT(t1.id) as hiredApplicants')
                                )
                            ->where('t1.application_status','hired')
                            ->groupBy('t0.id','t0.title')
                            ->get();
        return Inertia::render('admin/dashboard',[
            'openJobs' => $totalOPenJobs,
            'closedJobs' => $totalClosedJobs,
            'totalHired' => $totalHired,
            'hiredPerPosition' => $hiredPerPosition,
        ]);
    }

    public function goToAdminCareers(){
            $openJobs = DB::table('jobs as t0')
            ->leftJoin('jobapplications as t1', 't0.id', '=', 't1.job_id')
            ->select(
                't0.id',
                't0.slug',
                't0.title',
                't0.employment_type',
                't0.work_setup',
                't0.location',
                DB::raw('COUNT(t1.job_id) as applicants')
            )
            ->where('t0.status', 'Published')
            ->whereNull('t0.deleted_at')
            ->groupBy(
                't0.id',
                't0.title',
                't0.slug',
                't0.employment_type',
                't0.work_setup',
                't0.location',
            )
            ->latest('t0.created_at')
            ->get();
           
        return Inertia::render('admin/careers', [
            'openJobs' => $openJobs,
        ]);
    }

    public function goToCareers(){
        $openJobs = Job::where('status','Published')->latest('created_at')->get();       
        
        return Inertia::render('careers',[
            'openJobs' => $openJobs,
        ]);
    }

    public function goToJobDetails($slug){
        $jobDetails = Job::where('slug',$slug)->where('status','Published')->firstOrFail();
        
        return Inertia::render('jobdetails',[
            'jobDetails' => $jobDetails,
        ]);
    }

    public function goToApplyPage($slug){
        $position = Job::where('slug',$slug)->where('status','Published')->firstOrFail();

        return Inertia::render('application',[
            'position' => $position,
        ]);
    }


}
