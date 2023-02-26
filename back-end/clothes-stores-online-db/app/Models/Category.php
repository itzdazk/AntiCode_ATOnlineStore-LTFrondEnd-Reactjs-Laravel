<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Category extends Model
{
    protected $table = 'category';
    protected $primaryKey = 'CATE_ID';
    protected $fillable = [
        'Name', 'Image'
    ];


    public $timestamps = false;

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/' . $value),
        );
    }

    public function product()
    {
        return $this->hasMany(Product::class, "CATE_ID", "CATE_ID");
    }
}
