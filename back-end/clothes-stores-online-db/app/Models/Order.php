<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $primaryKey = 'OD_ID';
    public $timestamps = false;


    public function orderdetail()
    {
        return $this->hasMany(orderdetail::class, "OD_ID", "OD_ID");
    }
}
