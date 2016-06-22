<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $table = 'favorites';

    protected $fillable = ['server_id', 'server_type'];

    protected $hidden = ['id', 'created_at', 'updated_at', 'user_id'];

    /**
     * Get favorite owner
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id'); // 'App\User'
    }
}
