<?php

use App\Role;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('description');
            $table->integer('level')->default(40);
            $table->timestamps();
        });

        Role::create(['name' => 'Owner', 'slug' => 'owner', 'description' => 'Owner', 'level' => 65143]);
        Role::create(['name' => 'Developer', 'slug' => 'developer', 'description' => 'Developer', 'level' => 2461]);
        Role::create(['name' => 'Administrator', 'slug' => 'administrator', 'description' => 'Administrator', 'level' => 1337]);
        Role::create(['name' => 'Global moderator', 'slug' => 'global_moderator', 'description' => 'Global moderator', 'level' => 975]);
        Role::create(['name' => 'Moderator', 'slug' => 'moderator', 'description' => 'Moderator', 'level' => 855]);
        Role::create(['name' => 'Publisher', 'slug' => 'publisher', 'description' => 'Publisher', 'level' => 70]);
        Role::create(['name' => 'Editor', 'slug' => 'editor', 'description' => 'Editor', 'level' => 60]);
        Role::create(['name' => 'Subscriber', 'slug' => 'subscriber', 'description' => 'Subscriber', 'level' => 50]);
        Role::create(['name' => 'Member', 'slug' => 'member', 'description' => 'Member', 'level' => 40]);
        Role::create(['name' => 'Guest', 'slug' => 'guest', 'description' => 'Guest', 'level' => 30]);
        Role::create(['name' => 'Validating', 'slug' => 'validating', 'description' => 'Validating', 'level' => 20]);
        Role::create(['name' => 'Banned', 'slug' => 'banned', 'description' => 'BANNED', 'level' => 10]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('roles');
    }
}
