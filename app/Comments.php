<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $table = 'comments';

    protected $fillable = ['comment'];

    protected $hidden = [];

    /**
     * Get the news article this comments belongs to
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function article()
    {
        return $this->belongsTo(News::class, 'user_id'); // 'App\News'
    }
    
}
