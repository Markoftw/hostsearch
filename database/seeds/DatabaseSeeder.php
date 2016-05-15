<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);
        factory(App\ServerProvider::class, 10)->create()->each(function($u) {
            $u->dedicated()->saveMany(factory(App\DedicatedServer::class, 2)->make());
            $u->vps()->saveMany(factory(App\VPSServer::class, 2)->make());
            $u->cloud()->saveMany(factory(App\CloudServer::class, 2)->make());
        });
        
        factory(App\Contact::class, 5)->create();

        factory(App\User::class, 5)->create()->each(function($u) {
            $u->articles()->saveMany(factory(App\News::class, 2)->make());
        });
        
        factory(App\Comments::class, 15)->create();

    }
}
