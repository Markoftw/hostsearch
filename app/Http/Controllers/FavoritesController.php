<?php

namespace App\Http\Controllers;

use App\CloudServer;
use App\DedicatedServer;
use App\Favorite;
use App\User;
use App\VPSServer;
use Dingo\Api\Http\Middleware\Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use JWTAuth;

class FavoritesController extends Controller
{
    private $jwt_user;

    public function __construct(User $user)
    {
        $this->jwt_user = $user->findOrFail(JWTAuth::parseToken()->authenticate()->id);
    }

    public function dedicated()
    {

    }

    public function vps()
    {

    }

    public function cloud()
    {

    }

    /**
     * Add server to user favorites
     * @param $server_type
     * @param $server_id
     * @return mixed
     */
    public function store($server_type, $server_id)
    {
        if (!$this->isFavored($server_type, $server_id)) {
            $saved = $this->jwt_user->favorites()->create([
                'server_id' => $server_id,
                'server_type' => $server_type
            ]);

            if ($saved) {
                return response()->success(true);
            }

            return response()->error('Could not add to favorites!', 422);
        }

        return response()->error('Server already favored!', 422);
    }

    /**
     * Remove server from user favorites
     * @param $server_type
     * @param $server_id
     * @return mixed
     */
    public function destroy($server_type, $server_id)
    {
        $removed = Favorite::whereUserId($this->jwt_user->id)
            ->where('server_id', '=', $server_id)
            ->where('server_type', '=', $server_type)
            ->delete();

        if ($removed) {
            return response()->success(true);
        }

        return response()->error('Could not remove from favorites!', 422);
    }

    /**
     * Check if server is already favored by user
     * @param $server_type
     * @param $server_id
     * @return mixed
     */
    private function isFavored($server_type, $server_id)
    {
        $favored = Favorite::whereUserId($this->jwt_user->id)
            ->where('server_id', '=', $server_id)
            ->where('server_type', '=', $server_type)
            ->get();

        if (count($favored)) {
            return true;
        }

        return false;
    }
}
