<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactResponseMail extends Mailable
{
    use Queueable, SerializesModels;

    public $memail;
    public $msubject;
    public $mmessage;
    public $mname;


    public function __construct($memail,$msubject,$mmessage,$mname)
    {
        $this->memail = $memail;
        $this->msubject = $msubject;
        $this->mmessage = $mmessage;
        $this->mmessage = $mname;
    }

    public function build()
    {
        return $this->subject($this->msubject)
                    ->view('emails.replytoemployers');
    }
}
