<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCloudServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cloud_servers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('server_provider_id')->unsigned()->index();
            $table->foreign('server_provider_id')->references('id')->on('server_providers')->onDelete('cascade');
            $table->string('name');
            $table->string('url');
            $table->string('location');
            $table->integer('server_price')->unsigned(); //positive
            $table->integer('setup_price')->unsigned();
            $table->string('ram_type');
            $table->integer('ram_size')->unsigned();
            $table->string('hdd_type');
            $table->integer('hdd_size')->unsigned();
            $table->integer('cpu_version')->unsigned();
            $table->integer('cpu_cores')->unsigned();
            $table->float('cpu_power')->unsigned();
            $table->integer('bandwidth_tb')->unsigned();
            $table->integer('num_ips')->unsigned();
            $table->string('platform_os');
            $table->float('rating')->unsigned();
            $table->text('other_info');
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
        Schema::drop('cloud_servers');
    }
}
