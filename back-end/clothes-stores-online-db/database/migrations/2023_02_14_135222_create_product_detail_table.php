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
        Schema::create('product_detail', function (Blueprint $table) {
            $table->bigIncrements('PDETAIL_ID');
            $table->unsignedBigInteger('PRO_ID');
            $table->foreign('PRO_ID')->references('PRO_ID')->on('products');
            $table->string('SKU', 50);
            $table->integer('Quantity');
            $table->string('Size', 10);
            $table->timestamp('create_at')->useCurrent();
            $table->timestamp('update_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventory');
    }
};
