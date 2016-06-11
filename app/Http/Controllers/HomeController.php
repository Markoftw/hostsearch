<?php

namespace App\Http\Controllers;

use App\CloudServer;
use App\DedicatedServer;
use App\News;
use App\VPSServer;
use Illuminate\Http\Request;
use App\Http\Requests;
use JWTAuth;
use Carbon\Carbon;
use Thujohn\Twitter\Facades\Twitter;

class HomeController extends Controller
{
    /**
     * Get logged in users username
     * @return mixed
     */
    public function protectedUsername()
    {
        $user = JWTAuth::parseToken()->authenticate();
        $time = Carbon::now();
        return response()->success(['username' => $user->name, 'time' => $time]);
    }

    /**
     * Get the current project version and git information
     * @return mixed
     */
    public function gitStatus()
    {
        $current_tag = shell_exec("git describe");
        $current_branch = shell_exec("git rev-parse --abbrev-ref HEAD");
        $total_commits = shell_exec("git rev-list --all --count");
        $log = shell_exec("git log -1 --pretty=format:%h,%cd,%cr,%s --abbrev-commit");
        $log_items = explode(',', $log);

        $output = "Version: " . $current_tag . " (" . trim($current_branch) . ", " . $log_items[0] . ", commit " . trim($total_commits) . ") — Last commit: " . $log_items[1];

        return response()->success($output);
    }

    /**
     * Get the home page information data
     * @return mixed
     */
    public function homeData()
    {
        $popular = $this->sortServeryBy('views');
        $recent = $this->sortServeryBy('created_at');
        $news = $this->getNews();

        return response()->success([
            'news' => $news,
            'popular' => $popular,
            'recent' => $recent
        ]);
    }

    /**
     * Get latest tweets
     * @return mixed
     */
    public function tweets()
    {
        $tweets = Twitter::getUserTimeline(['screen_name' => 'ByronBernstein', 'count' => 5, 'format' => 'array']);

        return ['tweets' => $tweets];
    }

    /**
     * Get the latest news article
     * @return array
     */
    private function getNews()
    {
        $article = News::orderBy('created_at', 'desc')->first();

        return ['title' => $article->title, 'body' => $article->content];
    }

    /**
     * Order servers by specific type
     * @param $type
     * @return array
     */
    private function sortServeryBy($type)
    {
        $dedicated = DedicatedServer::orderBy($type, 'desc')->take(5)->get();
        $vps = VPSServer::orderBy($type, 'desc')->take(5)->get();
        $cloud = CloudServer::orderBy($type, 'desc')->take(5)->get();

        $comined = array_merge($dedicated->toArray(), $vps->toArray(), $cloud->toArray());

        $sorted = array_reverse(array_values(array_sort($comined, function ($value) use ($type) {
            return $value[$type];
        })));

        return array_slice($sorted, 0, 5);
    }

}
