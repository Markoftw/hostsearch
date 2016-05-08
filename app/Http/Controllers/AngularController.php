<?php

namespace App\Http\Controllers;

use JWTAuth;

class AngularController extends Controller
{
    public function serveApp()
    {
        return view('index');
    }

    public function unsupported()
    {
        return view('unsupported_browser');
    }

    public function protectedData()
    {
        return response()->success(['sample', 'of', 'jwt', 'protected', 'data' => ['response', 'from', 'API',]]);
    }

    public function protectedProfileUsername()
    {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->success($user->name);
    }

    public function gitStatus()
    {
        $current_tag = shell_exec("git describe");
        $current_branch = shell_exec("git rev-parse --abbrev-ref HEAD");
        $total_commits = shell_exec("git rev-list --all --count");
        $log = shell_exec("git log -1 --pretty=format:%h,%s,%cd,%cr --abbrev-commit");
        $log_items = explode(',', $log);

        $output = "Version: " . $current_tag . " (" . trim($current_branch) . ", ".$log_items[0].", commit " . trim($total_commits) . ") — Last commit: " . $log_items[2];

        return response()->success($output);
    }

}
