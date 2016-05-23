<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ServerController extends Controller
{
    private $windows = false;

    public function __construct()
    {
        if(strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            //dd('System is running Windows, this only works on *nix systems!');
            $this->windows = true;
        }
    }

    public function cpuInfo()
    {
        if($this->windows) {
            return response()->success(['cpu' => 'E3-1230-v3']);
        }
    }

    public function memoryInfo()
    {
        if($this->windows) {
            return response()->success(['total' => '123']);
        }
    }

    public function storageInfo()
    {
        if($this->windows) {
            return response()->success(['total' => '123']);
        }
    }
    
    public function getUsedStorage()
    {
        if($this->windows) {
            return response()->success(rand(0,100));
        }

        $ds = shell_exec('df -h /');
        $arr_ds = explode("\n",$ds);
        $line = $arr_ds[1];
        $arr_data = explode('  ',$line);
        
        return response()->success(round(intval($arr_data[6]),2));
    }

    public function processesInfo()
    {
        if($this->windows) {
            return response()->success(['total' => '123']);
        }
    }

    public function bandwidthInfo()
    {
        if($this->windows) {
            return response()->success(['network' => '100Mbps']);
        }
    }

    public function cpuLoad()
    {
        if($this->windows) {
            return response()->success(rand(0,100));
        }

        $stat1 = file('/proc/stat');
        sleep(1);
        $stat2 = file('/proc/stat');
        $info1 = explode(" ", preg_replace("!cpu +!", "", $stat1[0]));
        $info2 = explode(" ", preg_replace("!cpu +!", "", $stat2[0]));
        $dif = array();
        $dif['user'] = $info2[0] - $info1[0];
        $dif['nice'] = $info2[1] - $info1[1];
        $dif['sys'] = $info2[2] - $info1[2];
        $dif['idle'] = $info2[3] - $info1[3];
        $total = array_sum($dif);
        $cpu = array();
        foreach($dif as $x=>$y) $cpu[$x] = round($y / $total * 100, 1);

        return response()->success($cpu['user']);
    }

    public function cpuAverage()
    {
        if($this->windows) {
            return response()->success(['load' => '1.00']);
        }
    }
    
    public function getUsedMemory()
    {
        if($this->windows) {
            return response()->success(rand(0,100));
        }

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
        if($this->windows) {
            return response()->success(rand(0,200));
        }

        $threads = shell_exec('ps -eo nlwp | tail -n +2 | awk \'{ num_threads += $1 } END { print num_threads }\'');

        return response()->success($threads);
    }

    public function numberOfLoggedInUsers()
    {
        if($this->windows) {
            return response()->success(rand(0,10));
        }

        $users = shell_exec('users | wc -w');

        return response()->success($users);
    }
}
