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
        factory(App\ServerProvider::class, 30)->create()->each(function($u) {
            $u->dedicated()->save(factory(App\DedicatedServer::class)->make());
            $u->vps()->save(factory(App\VPSServer::class)->make());
            $u->cloud()->save(factory(App\CloudServer::class)->make());
        });
        
        factory(App\Contact::class, 10)->create();
    }
}
