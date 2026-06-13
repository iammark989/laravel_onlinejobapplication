<!DOCTYPE html>

<html>
<head>
    <meta charset="UTF-8">
    <title>{{ $msubject }}</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">

```
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr>
        <td align="center">

            <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

                <!-- Header -->
                <tr>
                    <td style="background:#111111;padding:30px;text-align:center;">

                        <img
                            src="{{ config('app.url') }}/files/images/GetStaffed_byBKW.webp"
                            alt="GetStaffed by BKW"
                            style="max-width:220px;height:auto;"
                        >

                    </td>
                </tr>

                <!-- Gold Accent -->
                <tr>
                    <td style="height:5px;background:#D4AF37;"></td>
                </tr>

                <!-- Greeting -->
                <tr>
                    <td style="padding:40px 40px 20px;">

                        <h2 style="margin:0;color:#111111;font-size:28px;">
                            Hello {{ $mname ?? 'Valued Employer' }},
                        </h2>

                    </td>
                </tr>

                <!-- Message -->
                <tr>
                    <td style="padding:0 40px 30px;">

                        <div
                            style="
                                color:#475569;
                                font-size:16px;
                                line-height:1.8;
                                white-space:pre-line;
                            "
                        >
                            {!! nl2br(e($mmessage)) !!}
                        </div>

                    </td>
                </tr>

                <!-- Divider -->
                <tr>
                    <td style="padding:0 40px;">
                        <hr style="border:none;border-top:1px solid #e5e7eb;">
                    </td>
                </tr>

                <!-- Signature -->
                <tr>
                    <td style="padding:30px 40px;">

                        <p style="margin:0;color:#111111;font-weight:bold;">
                            GetStaffed by BKW
                        </p>

                        <p style="margin:8px 0 0;color:#64748b;font-size:14px;">
                            Connecting Businesses with Exceptional Remote Talent
                        </p>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td
                        style="
                            background:#f8fafc;
                            padding:25px;
                            text-align:center;
                            color:#94a3b8;
                            font-size:12px;
                        "
                    >

                        © {{ date('Y') }} GetStaffed by BKW.
                        All Rights Reserved.

                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>
```

</body>
</html>
