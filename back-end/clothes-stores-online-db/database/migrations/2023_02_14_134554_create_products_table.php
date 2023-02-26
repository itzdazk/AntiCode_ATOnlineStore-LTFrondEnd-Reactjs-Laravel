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
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('PRO_ID');
            $table->string('Name', 75);
            $table->string('Color', 20);
            $table->decimal('Price', 9, 3);
            $table->text('DES');
            $table->unsignedBigInteger('CATE_ID');
            $table->foreign('CATE_ID')->references('CATE_ID')->on('category');
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
        Schema::dropIfExists('products');
    }
};
