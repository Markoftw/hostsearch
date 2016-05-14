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

    public function memoryInfo()
    {

    }

    public function storageInfo()
    {

    }
    
    public function getUsedStorage()
    {
        $ds = shell_exec('df -h /');
        $arr_ds = explode("\n",$ds);
        $line = $arr_ds[1];
        $arr_data = explode('  ',$line);
        
        return response()->success(round(intval($arr_data[6]),2));
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
    
    public function getUsedMemory()
    {
        $free = (string)trim(shell_exec('free'));
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        $memory_usage = $mem[2]/$mem[1]*100;

        return response()->success(round($memory_usage,2));
    }

    public function numberOfThreads()
    {
        $threads = shell_exec('ps -eo nlwp | tail -n +2 | awk \'{ num_threads += $1 } END { print num_threads }\'');

        return response()->success($threads);
    }

    public function numberOfLoggedInUsers()
    {
        $users = shell_exec('users | wc -w');

        return response()->success($users);
    }
}
