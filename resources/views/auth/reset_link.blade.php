<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Password Reset</title>
    <style>
        div {
            font-size: 1.3em;
            background-color: #19191F;
            color: white;
            padding: 20px;
        }

        a {
            color: yellowgreen;
        }
    </style>
</head>
<body>

<div>
    Hello!<br><br>

    We have received a request to reset the password for your <a href="http://servfinder.marefx.com">Server Finder</a> account.<br><br>

    To reset your password, click the link below or copy and paste it into your browser: <br>

    <a href="http://servfinder.marefx.com/#/reset-password/{{$email}}/{{$token}}">
        http://servfinder.marefx.com/#/reset-password/{{$email}}/{{$token}}
    </a><br><br>

    If you did not submit this password reset request then please change your password immediately as the account may be insecure.<br><br>

    Kind regards,<br>
    Server Finder Support
</div>

</body>
</html>