<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VPSServer extends Model
{
    protected $table = 'vps_servers';

    protected $fillable = [];

    protected $hidden = [];

    /**
     * Get the Virtual private server Provider.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function provider()
    {
        return $this->belongsTo(ServerProvider::class); // 'App\ServerProvider'
    }
}
