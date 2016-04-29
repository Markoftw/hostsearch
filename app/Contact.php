<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = 'contact';

    protected $fillable = ['first_name', 'last_name', 'email', 'message'];

    protected $hidden = [];
}
