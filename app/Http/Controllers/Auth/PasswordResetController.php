<?php

namespace App\Http\Controllers\Auth;

use Hash;
use JWTAuth;
use Mail;
use App\User;
use App\PasswordReset;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PasswordResetController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email',
        ]);

        //invalidate old tokens
        PasswordReset::whereEmail($request->email)->delete();

        $email = $request->email;
        $reset = PasswordReset::create([
            'email' => $email,
            'token' => str_random(10),
        ]);

        $token = $reset->token;

        Mail::send('auth.reset_link', compact('email', 'token'), function ($mail) use ($email) {
            $mail->to($email)
            ->from('support@marefx.com')
            ->subject('Reset your Server Finder password');
        });

        return response()->success(true);
    }

    public function verify(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'token' => 'required',
        ]);

        $check = PasswordReset::whereEmail($request->email)
        ->whereToken($request->token)
        ->first();

        if (! $check) {
            return response()->error('Email does not exist', 422);
        }

        return response()->success(true);
    }

    public function reset(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email',
            'token'    => "required|exists:password_resets,token,email,{$request->email}",
            'password' => 'required|min:6|confirmed',
        ]);

        $user = User::whereEmail($request->email)->firstOrFail();
        $user->password = bcrypt($request->password);
        $user->save();

        //delete pending resets
        PasswordReset::whereEmail($request->email)->delete();

        return response()->success(true);
    }

    public function changePassword(Request $request)
    {
        $this->validate($request, [
            'current_password' => 'required|min:6|max:255',
            'password' => 'required|min:6|max:255|confirmed',
            'password_confirmation' => 'required|min:6|max:255',
        ]);

        $user = User::whereId(JWTAuth::parseToken()->getPayload()->get('sub'))->firstOrFail();

        if(!Hash::check($request->current_password, $user->password)) {
            return response()->error('Your current password does not match!');
        }

        if(Hash::check($request->password, $user->password)) {
            return response()->error('Please use a different password than your current one!');
        }
        
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->success(true);
    }
}
