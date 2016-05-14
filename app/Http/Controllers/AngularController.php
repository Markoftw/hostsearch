<?php

namespace App\Http\Controllers;

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
}
