<?php

namespace App\Http\Controllers;

use App\CloudServer;
use App\DedicatedServer;
use App\VPSServer;
use JWTAuth;

class AngularController extends Controller
{
    public function serveApp()
    {
        return view('index');
    }

    public function unsupported()
    {
        return view('unsupported_browser');
    }

    public function protectedData()
    {
        return response()->success(['sample', 'of', 'jwt', 'protected', 'data' => ['response', 'from', 'API',]]);
    }

    public function protectedUsername()
    {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->success($user->name);
    }
}
