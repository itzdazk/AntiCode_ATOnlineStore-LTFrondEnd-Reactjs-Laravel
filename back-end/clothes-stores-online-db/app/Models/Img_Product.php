<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Img_Product extends Model
{
    protected $table = 'img_product';
    protected $primaryKey = 'IMG_ID';
    protected $fillable = [
        'PRO_ID', 'Image'
    ];

    public $timestamps = false;

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/' . $value),
        );
    }
}
