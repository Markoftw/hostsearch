<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

use App\News;
use App\User;

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->firstName,
        'email' => $faker->safeEmail,
        //use bcrypt('password') if you want to assert for a specific password, but it might slow down your tests
        'password' => str_random(10),
    ];
});

$factory->define(App\PasswordReset::class, function (Faker\Generator $faker) {
    return [
        'email' => $faker->safeEmail,
        'token' => str_random(10),
    ];
});

$factory->define(App\ServerProvider::class, function (Faker\Generator $faker) {
    return [
        'provider_name' => $faker->company,
        'website' => $faker->domainName,
        'logo' => $faker->domainName,
        'open_year' => $faker->year,
        'slogan' => $faker->paragraph,
        'description' => $faker->paragraph,
        'operating_country' => $faker->country,
        'ceo' => $faker->name
    ];
});

$factory->define(App\DedicatedServer::class, function (Faker\Generator $faker) {
    return [
        'server_type' => 'dedicated',
        'icon' => 'ic_storage_black_24px.svg',
        'name' => $faker->word,
        'url' => $faker->domainName,
        'location' => $faker->randomElement(['Europe', 'America', 'Asia', 'Other']),
        'server_price' => $faker->randomFloat(null, 1, 500),
        'setup_price' => $faker->randomFloat(null, 1, 25),
        'ram_type' => $faker->randomElement(['DDR3', 'DDR4', 'ECC']),
        'ram_size' => $faker->numberBetween(1, 48),
        'hdd_type' => $faker->randomElement(['HDD', 'SSD', 'Hybrid']),
        'hdd_size' => $faker->numberBetween(120, 10000),
        'cpu_version' => $faker->word,
        'cpu_cores' => $faker->numberBetween(1, 32),
        'cpu_power' => $faker->randomFloat(null, 1, 5),
        'bandwidth_tb' => $faker->numberBetween(1, 100),
        'num_ips' => $faker->numberBetween(1, 100),
        'platform_os' => $faker->randomElement(['Linux', 'Windows', 'Macintosh']),
        'rating' => $faker->randomFloat(null, 1, 5),
        'views' => $faker->numberBetween(1, 1000),
        'other_info' => $faker->paragraph
    ];
});

$factory->define(App\VPSServer::class, function (Faker\Generator $faker) {
    return [
        'server_type' => 'vps',
        'icon' => 'ic_list_black_24px.svg',
        'name' => $faker->word,
        'url' => $faker->domainName,
        'location' => $faker->randomElement(['Europe', 'America', 'Asia', 'Other']),
        'server_price' => $faker->randomFloat(null, 1, 500),
        'setup_price' => $faker->randomFloat(null, 1, 25),
        'ram_type' => $faker->randomElement(['DDR3', 'DDR4', 'ECC']),
        'ram_size' => $faker->numberBetween(1, 48),
        'hdd_type' => $faker->randomElement(['HDD', 'SSD', 'Hybrid']),
        'hdd_size' => $faker->numberBetween(120, 10000),
        'cpu_version' => $faker->word,
        'cpu_cores' => $faker->numberBetween(1, 32),
        'cpu_power' => $faker->randomFloat(null, 1, 5),
        'bandwidth_tb' => $faker->numberBetween(1, 100),
        'num_ips' => $faker->numberBetween(1, 100),
        'platform_os' => $faker->randomElement(['Linux', 'Windows', 'Macintosh']),
        'rating' => $faker->randomFloat(null, 1, 5),
        'views' => $faker->numberBetween(1, 1000),
        'other_info' => $faker->paragraph
    ];
});

$factory->define(App\Contact::class, function (Faker\Generator $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->email,
        'message' => $faker->paragraph
    ];
});

$factory->define(App\CloudServer::class, function (Faker\Generator $faker) {
    return [
        'server_type' => 'cloud',
        'icon' => 'ic_cloud_black_24px.svg',
        'name' => $faker->word,
        'url' => $faker->domainName,
        'location' => $faker->randomElement(['Europe', 'America', 'Asia', 'Other']),
        'server_price' => $faker->randomFloat(null, 1, 500),
        'server_price_hr' => $faker->randomFloat(null, 0.007, 0.952),
        'ram_type' => $faker->randomElement(['DDR3', 'DDR4', 'ECC']),
        'ram_size' => $faker->numberBetween(1, 48),
        'hdd_type' => $faker->randomElement(['HDD', 'SSD', 'Hybrid']),
        'hdd_size' => $faker->numberBetween(120, 10000),
        'cpu_version' => $faker->word,
        'cpu_cores' => $faker->numberBetween(1, 32),
        'cpu_power' => $faker->randomFloat(null, 1, 5),
        'bandwidth_tb' => $faker->numberBetween(1, 100),
        'num_ips' => $faker->numberBetween(1, 100),
        'platform_os' => $faker->randomElement(['Linux', 'Windows', 'Macintosh']),
        'rating' => $faker->randomFloat(null, 1, 5),
        'views' => $faker->numberBetween(1, 1000),
        'other_info' => $faker->paragraph
    ];
});

$factory->define(App\News::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->sentence(5),
        'content' => $faker->text(888)
    ];
});

$factory->define(App\Comment::class, function (Faker\Generator $faker) {
    return [
        'user_id' => function () {
            return User::orderByRaw("RAND()")->first()->id;
        },
        'news_id' => function () {
            return News::orderByRaw("RAND()")->first()->id;
        },
        'comment' => $faker->paragraph
    ];
});

$factory->define(App\Role::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'slug' => $faker->word,
        'description' => $faker->paragraph,
        'level' => $faker->numberBetween(1, 1000)
    ];
});

$factory->define(App\Favorite::class, function (Faker\Generator $faker) {
    return [
        'server_id' => $faker->numberBetween(1,20),
        'server_type' => $faker->randomElement(['dedicated', 'vps', 'cloud']),
    ];
});

$factory->define(App\Report::class, function (Faker\Generator $faker) {
    return [
        'server_id' => $faker->numberBetween(1,20),
        'server_type' => $faker->randomElement(['dedicated', 'vps', 'cloud']),
        'errors' => $faker->numberBetween(0,7),
        'message' => $faker->paragraph,
    ];
});
