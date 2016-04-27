<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VPSServer extends Model
{
    protected $table = 'vps_servers';

    protected $fillable = ['name', 'url', 'location', 'server_price', 'setup_price', 'ram_type', 'ram_size', 'had_type', 'hdd_size', 'cpu_version', 'cpu_cores', 'cpu_power', 'bandwidth_tb', 'num_ips', 'platform_os', 'other_info'];

    protected $hidden = [];

    /**
     * Get the Virtual private server Provider.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function provider()
    {
        return $this->belongsTo(ServerProvider::class, 'server_provider_id'); // 'App\ServerProvider'
    }
}
