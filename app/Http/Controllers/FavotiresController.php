<?php

namespace App\Http\Controllers;

use App\CloudServer;
use App\DedicatedServer;
use App\Favorite;
use App\User;
use App\VPSServer;
use Dingo\Api\Http\Middleware\Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use JWTAuth;

class FavotiresController extends Controller
{
    public function dedicated()
    {

    }

    public function vps()
    {

    }

    public function cloud()
    {

    }

    public function add(User $user, $type, $server_id)
    {
        $jwt = JWTAuth::parseToken()->authenticate();
        $user = $user->findOrFail($jwt->sub);
        if ($user) {
            $user->favorites()->create([
                'server_id' => $server_id,
                'server_type' => $type
            ]);
        }

        return response()->success(true);
    }
}
