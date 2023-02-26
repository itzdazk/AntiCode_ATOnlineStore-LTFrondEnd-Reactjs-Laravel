<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'PRO_ID';
    public $timestamps = false;

    public function image()
    {
        // return $this->hasMany(Img_Product::class, "PRO_ID", "PRO_ID");
        return $this->hasMany(Img_Product::class, "PRO_ID", "PRO_ID");
    }

    public function detail()
    {
        return $this->hasMany(ProductDetail::class, "PRO_ID", "PRO_ID");
    }

    // public function detail()
    // {
    //     return $this->hasMany('product_detail');
    // }
}
