<?php

namespace App\Http\Controllers;

use App\CloudServer;
use App\DedicatedServer;
use App\ServerProvider;
use App\VPSServer;
use Illuminate\Http\Request;
use App\Http\Requests;

class ProviderController extends Controller
{
    /**
     * Get all stored providers
     * @return mixed
     */
    public function showAllProviders()
    {
        $providers = ServerProvider::all();

        if(count($providers) > 0) {
            return response()->success($providers);
        }

        return response()->success('There are no providers stored.');
    }

    /**
     * Get all stored servers
     * @return mixed
     */
    public function showAllServers()
    {
        $dedicated = DedicatedServer::with('provider')->get();
        $vps = VPSServer::with('provider')->get();
        $cloud = CloudServer::with('provider')->get();

        if((count($dedicated) + count($vps) + count($cloud)) > 0) {
            $merged = array_merge($dedicated->toArray(), $vps->toArray(), $cloud->toArray());
            return response()->success($merged);
        }

        return response()->success('There are no servers stored.');
    }
}
