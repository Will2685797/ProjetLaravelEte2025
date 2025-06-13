<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = ['titre', 'type', 'description', 'data', 'image_url'];

    protected $casts = [
        'data' => 'array',
    ];
}
