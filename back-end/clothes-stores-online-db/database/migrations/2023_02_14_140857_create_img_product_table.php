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
        Schema::create('img_product', function (Blueprint $table) {
            $table->bigIncrements('IMG_ID');
            $table->unsignedBigInteger('PRO_ID');
            $table->foreign('PRO_ID')->references('PRO_ID')->on('products');
            $table->string('Image', 255);
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
        Schema::dropIfExists('img_product');
    }
};
