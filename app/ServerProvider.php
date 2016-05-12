<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServerProvider extends Model
{
    protected $table = 'server_providers';

    protected $fillable = ['provider_name', 'website', 'open_year', 'slogan', 'description', 'operating_country', 'ceo'];

    protected $hidden = [];

    //DB::listen(function($query) { var_dump($query->sql); });
    
    /**
     * Get all Dedicated servers for a Provider.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    
    public function dedicated()
    {
        return $this->hasMany(DedicatedServer::class); // 'App\DedicatedServer'
    }

    /**
     * Get all Virtual private servers for a Provider
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function vps()
    {
        return $this->hasMany(VPSServer::class); // 'App\VPSServer'
    }

    /**
     * Get all Cloud servers for a Provider
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cloud()
    {
        return $this->hasMany(CloudServer::class); // 'App\CloudServer'
    }

}
