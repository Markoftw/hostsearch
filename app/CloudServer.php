<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CloudServer extends Model
{
    protected $table = 'cloud_servers';

    protected $fillable = ['server_type', 'icon', 'name', 'url', 'location', 'server_price', 'server_price_hr', 'ram_type', 'ram_size', 'had_type', 'hdd_size', 'cpu_version', 'cpu_cores', 'cpu_power', 'bandwidth_tb', 'num_ips', 'platform_os', 'views', 'other_info'];

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
