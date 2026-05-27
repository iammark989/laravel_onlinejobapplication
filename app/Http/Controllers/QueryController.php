<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class QueryController extends Controller
{
    public function goToAdminDashboard(){
     
        $totalOPenJobs = Job::where('status','Published')->count();
        $totalClosedJobs = Job::where('status','Closed')->count();
        return Inertia::render('admin/dashboard',[
            'openJobs' => $totalOPenJobs,
            'closedJobs' => $totalClosedJobs,
        ]);
    }

    public function goToAdminCareers(){
        $openedJobs = DB::table('jobs as t0')
                ->leftJoin('jobapplications as t1', 't0.id', '=', 't1.job_id')
                ->select(
                    't0.id',
                    't0.title',
                    't0.employment_type',
                    't0.work_setup',
                    't0.location',
                    DB::raw('COUNT(t1.job_id) as applicants')
                )
                ->where('t0.status', 'published')
                ->groupBy(
                    't0.id',
                    't0.title',
                    't0.employment_type',
                    't0.work_setup',
                    't0.location',
                )
                ->latest('t0.created_at')
                ->get();

        return Inertia::render('admin/careers', [
            'openedJobs' => $openedJobs,
        ]);
    }
}
