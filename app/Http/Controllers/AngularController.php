<?php

namespace App\Http\Controllers;

class AngularController extends Controller
{
    /**
     * Serving the application
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function serveApp()
    {
        return view('index');
    }

    /**
     * Unsupported browser view for IE < 10
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function unsupported()
    {
        return view('unsupported_browser');
    }

    /**
     * Example data
     * @return mixed
     */
    public function protectedData()
    {
        return response()->success(['sample', 'of', 'jwt', 'protected', 'data' => ['response', 'from', 'API',]]);
    }
}
