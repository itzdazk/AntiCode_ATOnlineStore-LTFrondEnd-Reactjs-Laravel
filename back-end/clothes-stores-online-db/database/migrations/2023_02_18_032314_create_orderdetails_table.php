<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orderdetails', function (Blueprint $table) {
            $table->bigIncrements('ODD_ID');
            $table->unsignedBigInteger('PDETAIL_ID');
            $table->unsignedBigInteger('OD_ID');
            $table->foreign('OD_ID')->references('OD_ID')->on('orders');
            $table->foreign('PDETAIL_ID')->references('PDETAIL_ID')->on('product_detail');
            $table->integer('Quantity');
            $table->integer('Price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orderdetails');
    }
};
