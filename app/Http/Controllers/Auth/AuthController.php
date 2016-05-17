<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Illuminate\Database\Eloquent\Collection;
use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        $user = User::where('email', $credentials['email'])->first();

        if ($user) {
            if($this->isAdmin($user)) {
                $customClaims = ['aud' => 'admin'];
            } else {
                $customClaims = [];
            }
        } else {
            $customClaims = [];
        }

        try {
            // verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials, $customClaims)) {
                return response()->error('Invalid credentials', 401);
            }
        } catch (\JWTException $e) {
            return response()->error('Could not create token', 500);
        }

        $user = Auth::user();

        return response()->success(compact('user', 'token'));
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:20|unique:users|alpha_dash',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|max:255',
        ]);

        $user = new User;
        $user->name = trim($request->name);
        $user->email = trim(strtolower($request->email));
        $user->password = bcrypt($request->password);
        $user->save();

        $user->roles()->attach(9); // 9 = Member, 10 = Guest, 11 = Validating (email confirm)

        $token = JWTAuth::fromUser($user);

        return response()->success(compact('user', 'token'));
    }

    private function isAdmin(User $collection)
    {
        $admin = $collection->roles()->get()->contains(function ($key, $value) {
            return $value['level'] >= 1337;
        });

        if ($admin) {
            return true;
        }

        return false;
    }
}
