<?php

namespace App\Http\Controllers;

use App\VPSServer;
use Illuminate\Http\Request;
use App\Http\Requests;

class VPSController extends Controller
{
    /**
     * Return all Virtual private servers
     * @return mixed
     */
    public function showAll()
    {
        $results = VPSServer::with('provider')->get();

        if(count($results) > 0) {
            return response()->success($results);
        }

        return response()->success('There are no servers stored.');
    }

    /**
     * Get a single Virtual private server
     * @param Request $request
     * @return mixed
     */
    public function showOne(Request $request)
    {
        $this->validate($request, [
            'server_id' => 'required|numeric'
        ]);

        $check = VPSServer::with('provider')->find($request->server_id);

        if (!$check) {
            return response()->error('Server does not exist', 422);
        }

        return response()->success($check);
    }
}
