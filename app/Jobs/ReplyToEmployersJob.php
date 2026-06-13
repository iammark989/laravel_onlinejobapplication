<?php

namespace App\Jobs;

use App\Mail\ReplyToEmployers;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class ReplyToEmployersJob implements ShouldQueue
{
   use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

   public $jemail;
   public $jsubject;
   public $jmessage;
   public $jname;
    /**
     * Create a new job instance.
     */
    public function __construct($jemail,$jsubject,$jmessage,$jname)
    {
        $this->jemail = $jemail;
        $this->jsubject = $jsubject;
        $this->jmessage = $jmessage;
        $this->jname = $jname;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
       Mail::mailer('recruitment')
        ->to($this->jmessage)
            ->send(new ReplyToEmployers(
                 $this->jemail,
                 $this->jsubject,
                 $this->jmessage,
                 $this->jname,
            ));

    }
}
