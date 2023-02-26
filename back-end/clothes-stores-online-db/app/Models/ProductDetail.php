<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{
    protected $table = 'product_detail';
    protected $primaryKey = 'PDETAIL_ID';

    public $timestamps = false;

    public function getProduct()
    {
        return $this->belongsToMany(Product::class, "PRO_ID", "PRO_ID");
    }
}
