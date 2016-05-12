<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ServerController extends Controller
{

    public function __construct()
    {
        /*if(strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            dd('This system is running Windows! This only works on *nix systems.');
        }*/
    }

    public function cpuInfo()
    {

    }

    public function ramInfo()
    {

    }

    public function hddInfo()
    {

    }

    public function processesInfo()
    {

    }

    public function bandwidthInfo()
    {

    }

    public function cpuLoad()
    {
        return response()->success(rand(0,100));
    }

    public function cpuAverage()
    {
        
    }
    
    public function ramUsed()
    {
        
    }
}
