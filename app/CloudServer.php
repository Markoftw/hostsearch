<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CloudServer extends Model
{
    protected $table = 'cloud_servers';

    protected $fillable = [''];

    protected $hidden = [];

    /**
     * Get the Dedicated server Provider.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function provider()
    {
        return $this->belongsTo(ServerProvider::class, 'server_provider_id'); // 'App\ServerProvider'
    }
}
