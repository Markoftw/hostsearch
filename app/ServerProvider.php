<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServerProvider extends Model
{
    protected $table = 'server_providers';

    protected $fillable = ['provider', 'website', 'open_year', 'slogan', 'description', 'operating_country', 'ceo'];

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

}
