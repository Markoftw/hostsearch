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

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name'  => $faker->firstName,
        'email' => $faker->safeEmail,
        //use bcrypt('password') if you want to assert for a specific password, but it might slow down your tests
        'password' => str_random(10),
    ];
});

$factory->define(App\PasswordReset::class, function (Faker\Generator $faker) {
    return [
        'email'  => $faker->safeEmail,
        'token' => str_random(10),
    ];
});

$factory->define(App\ServerProvider::class, function (Faker\Generator $faker) {
    return [
        'provider_name'  => $faker->company,
        'website' => $faker->domainName,
        'open_year' => $faker->year,
        'slogan' => $faker->paragraph,
        'description' => $faker->paragraph,
        'operating_country' => $faker->country,
        'ceo' => $faker->name
    ];
});

$factory->define(App\DedicatedServer::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'url' => $faker->domainName,
        'location' => $faker->randomElement(['Europe', 'America', 'Asia', 'Other']),
        'server_price' => $faker->numberBetween(1, 250),
        'setup_price' => $faker->numberBetween(1,25),
        'ram_type' => $faker->randomElement(['DDR3', 'DDR4', 'ECC']),
        'ram_size' => $faker->numberBetween(1,48),
        'hdd_type' => $faker->randomElement(['HDD', 'SSD', 'Hybrid']),
        'hdd_size' => $faker->numberBetween(120,10000),
        'cpu_version' => $faker->word,
        'cpu_cores' => $faker->numberBetween(1, 32),
        'cpu_power' => $faker->randomFloat(null, 1, 5),
        'bandwidth_tb' => $faker->numberBetween(1, 100),
        'num_ips' => $faker->numberBetween(1, 16),
        'platform_os' => $faker->randomElement(['Linux', 'Windows', 'Macintosh']),
        'rating' => $faker->randomFloat(null, 1, 5),
        'other_info' => $faker->paragraph
    ];
});

$factory->define(App\VPSServer::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'url' => $faker->domainName,
        'location' => $faker->randomElement(['Europe', 'America', 'Asia', 'Other']),
        'server_price' => $faker->numberBetween(1, 250),
        'setup_price' => $faker->numberBetween(1,25),
        'ram_type' => $faker->randomElement(['DDR3', 'DDR4', 'ECC']),
        'ram_size' => $faker->numberBetween(1,48),
        'hdd_type' => $faker->randomElement(['HDD', 'SSD', 'Hybrid']),
        'hdd_size' => $faker->numberBetween(120,10000),
        'cpu_version' => $faker->word,
        'cpu_cores' => $faker->numberBetween(1, 32),
        'cpu_power' => $faker->randomFloat(null, 1, 5),
        'bandwidth_tb' => $faker->numberBetween(1, 100),
        'num_ips' => $faker->numberBetween(1, 16),
        'platform_os' => $faker->randomElement(['Linux', 'Windows', 'Macintosh']),
        'rating' => $faker->randomFloat(null, 1, 5),
        'other_info' => $faker->paragraph
    ];
});

$factory->define(App\Contact::class, function (Faker\Generator $faker) {
    return [
        'first_name'  => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->email,
        'message' => $faker->paragraph
    ];
});
