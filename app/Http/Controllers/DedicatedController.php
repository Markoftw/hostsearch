<?php

namespace App\Http\Controllers;

use App\DedicatedServer;
use Illuminate\Http\Request;
use App\Http\Requests;

class DedicatedController extends Controller
{
    public function showAll()
    {
        $results = DedicatedServer::with('provider')->get();

        return response()->success($results);
    }
}
