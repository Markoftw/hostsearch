<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DedicatedServer extends Model
{
    protected $table = 'dedicated_servers';
    
    protected $fillable = [];
    
    protected $hidden = [];

    /**
     * Get the Dedicated server Provider.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function provider()
    {
        return $this->belongsTo(ServerProvider::class); // 'App\ServerProvider'
    }
}
