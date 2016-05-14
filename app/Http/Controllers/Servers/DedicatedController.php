<?php

namespace App\Http\Controllers\Servers;

use App\DedicatedServer;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class DedicatedController extends Controller
{

    /**
     * Return all dedicated servers
     * @return mixed
     */
    public function showAll()
    {
        $results = DedicatedServer::with('provider')->get();
        
        if(count($results) > 0) {
            return response()->success($results);
        }

        return response()->success('There are no servers stored.');
    }

    /**
     * Get a single Dedicated server
     * @param Request $request
     * @return mixed
     */
    public function showOne(Request $request)
    {
        $this->validate($request, [
            'server_id' => 'required|numeric'
        ]);

        $check = DedicatedServer::with('provider')->find($request->server_id);

        if (!$check) {
            return response()->error('Server does not exist', 422);
        }

        return response()->success($check);
    }
}
