<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ServerController extends Controller
{
    private $windows = false;

    public function __construct()
    {
        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            //dd('System is running Windows, this only works on *nix systems!');
            $this->windows = true;
        }
    }

    /**
     * Get all server usage
     * @return mixed
     */
    public function usage()
    {
        $response = [
            'cpu' => $this->cpuLoad(),
            'ram' => $this->getUsedMemory(),
            'hdd' => $this->getUsedStorage(),
            'threads' => $this->numberOfThreads(),
            'users' => $this->numberOfLoggedInUsers()
        ];

        return response()->success($response);
    }

    /**
     * Processor information
     * @return array
     */
    private function cpuInfo()
    {
        if ($this->windows) {
            return ['cpu' => 'E3-1230-v3'];
        }
    }

    /**
     * Memory (RAM) information
     * @return array
     */
    private function memoryInfo()
    {
        if ($this->windows) {
            return ['total' => '123'];
        }
    }

    /**
     * Storage (HDD) information
     * @return array
     */
    private function storageInfo()
    {
        if ($this->windows) {
            return ['total' => '123'];
        }
    }

    /**
     * Get a list of all current running processes
     * @return array
     */
    private function processesInfo()
    {
        if ($this->windows) {
            return ['total' => '123'];
        }
    }

    /**
     * Get the current bandwidth speed
     * @return array
     */
    private function bandwidthInfo()
    {
        if ($this->windows) {
            return ['network' => '100Mbps'];
        }
    }

    /**
     * Get the current bandwidth speed
     * @return string
     */
    private function bandwidthUsage()
    {
        if ($this->windows) {
            return rand(0, 100) . "Mbps";
        }
    }

    /**
     * Get the current hard drive usage
     * @return float|int
     */
    private function getUsedStorage()
    {
        if ($this->windows) {
            return rand(0, 100);
        }

        $ds = shell_exec('df -h /');
        $arr_ds = explode("\n", $ds);
        $line = $arr_ds[1];
        $arr_data = explode('  ', $line);

        return round(intval($arr_data[6]), 2);
    }

    /**
     * Get the current CPU usage
     * @return int|mixed
     */
    private function cpuLoad()
    {
        if ($this->windows) {
            return rand(0, 100);
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
        foreach ($dif as $x => $y) $cpu[$x] = round($y / $total * 100, 1);

        return $cpu['user'];
    }

    private function cpuAverage()
    {
        if ($this->windows) {
            return ['load' => '1.00'];
        }
    }

    /**
     * Get the current RAM usage
     * @return float|int
     */
    private function getUsedMemory()
    {
        if ($this->windows) {
            return rand(0, 100);
        }

        $free = (string)trim(shell_exec('free'));
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        $memory_usage = $mem[2] / $mem[1] * 100;

        return round($memory_usage, 2);
    }

    /**
     * Get the total number of current threads
     * @return int|mixed
     */
    private function numberOfThreads()
    {
        if ($this->windows) {
            return rand(0, 200);
        }

        $threads = shell_exec('ps -eo nlwp | tail -n +2 | awk \'{ num_threads += $1 } END { print num_threads }\'');

        return str_replace('\n', '', $threads);
    }

    /**
     * Get the current logged in users (SSH)
     * @return int|mixed
     */
    private function numberOfLoggedInUsers()
    {
        if ($this->windows) {
            return rand(0, 10);
        }

        $users = shell_exec('users | wc -w');

        return str_replace('\n', '', $users);
    }
}
