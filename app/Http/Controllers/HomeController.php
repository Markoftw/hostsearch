<?php

namespace App\Http\Controllers;

use App\CloudServer;
use App\DedicatedServer;
use App\VPSServer;
use Illuminate\Http\Request;

use App\Http\Requests;

class HomeController extends Controller
{
    public function gitStatus()
    {
        $current_tag = shell_exec("git describe");
        $current_branch = shell_exec("git rev-parse --abbrev-ref HEAD");
        $total_commits = shell_exec("git rev-list --all --count");
        $log = shell_exec("git log -1 --pretty=format:%h,%cd,%cr,%s --abbrev-commit");
        $log_items = explode(',', $log);

        $output = "Version: " . $current_tag . " (" . trim($current_branch) . ", ".$log_items[0].", commit " . trim($total_commits) . ") — Last commit: " . $log_items[1];

        return response()->success($output);
    }
    
    public function homeData()
    {

        $dedicated = DedicatedServer::orderBy('id', 'desc')->take(5)->get();
        $vps = VPSServer::orderBy('id', 'desc')->take(5)->get();
        $cloud = CloudServer::orderBy('id', 'desc')->take(5)->get();

        return response()->success([
            'dedicated' => $dedicated,
            'vps' => $vps,
            'cloud' => $cloud,
            'news' => 'article'
        ]);

    }
    
    public function tweets()
    {
        
        $tweets = 'tweets';
        
        return response()->success([
            'tweets' => $tweets
        ]);
        
    }
}
