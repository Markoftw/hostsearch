<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServerProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('server_providers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('provider_name');
            $table->string('website');
            $table->string('open_year')->nullable();
            $table->string('slogan')->nullable();
            $table->string('description')->nullable();
            $table->string('operating_country')->nullable();
            $table->string('ceo')->nullable();
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
        Schema::drop('server_providers');
    }
}
