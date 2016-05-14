<?php

namespace App\Http\Controllers\Servers;


use App\CloudServer;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class CloudController extends Controller
{
    /**
     * Return all Cloud servers
     * @return mixed
     */
    public function showAll()
    {
        $results = CloudServer::with('provider')->get();

        if(count($results) > 0) {
            return response()->success($results);
        }

        return response()->success('There are no servers stored.');
    }

    /**
     * Get a single Cloud server
     * @param Request $request
     * @return mixed
     */
    public function showOne(Request $request)
    {
        $this->validate($request, [
            'server_id' => 'required|numeric'
        ]);

        $check = CloudServer::with('provider')->find($request->server_id);

        if (!$check) {
            return response()->error('Server does not exist', 422);
        }

        return response()->success($check);
    }
}
