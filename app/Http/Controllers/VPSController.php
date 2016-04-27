<?php

namespace App\Http\Controllers;

use App\VPSServer;
use Illuminate\Http\Request;
use App\Http\Requests;

class VPSController extends Controller
{
    public function showAll()
    {
        $results = VPSServer::with('provider')->get();

        return response()->success($results);
    }
}
