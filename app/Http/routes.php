<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {

    Route::get('/', 'AngularController@serveApp');

    Route::get('/unsupported-browser', 'AngularController@unsupported');

});

//public API routes
$api->group(['middleware' => ['api']], function ($api) {
    $api->group(['prefix' => 'auth'], function ($api) {
        // Authentication Routes...
        $api->post('login', 'Auth\AuthController@login');
        $api->post('register', 'Auth\AuthController@register');
        // Password Reset Routes...
        $api->post('password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
        $api->get('password/verify', 'Auth\PasswordResetController@verify');
        $api->post('password/reset', 'Auth\PasswordResetController@reset');
    });

    $api->get('sample/test', 'AngularController@protectedData');

    // Advanced Search Routes...
    $api->get('dedicated/all', 'Servers\DedicatedController@showAll');
    $api->get('dedicated/show', 'Servers\DedicatedController@showOne');
    $api->get('vps/all', 'Servers\VPSController@showAll');
    $api->get('vps/show', 'Servers\VPSController@showOne');
    $api->get('cloud/all', 'Servers\CloudController@showAll');
    $api->get('cloud/show', 'Servers\CloudController@showOne');
    $api->get('servers/all', 'ProviderController@showAllServers');
    $api->get('providers/all', 'ProviderController@showAllProviders');

    // About Page Routes...
    $api->post('about/new', 'ContactController@store');

    // git information
    $api->get('git/status', 'HomeController@gitStatus');

    // Home page data
    $api->get('home/items', 'HomeController@homeData');
    $api->get('home/tweets', 'HomeController@tweets');

    // Reports
    $api->post('reports/{server_type}/{server_id}/add', 'ReportsController@store');
});

// Protected API routes with JWT (must be logged in)
$api->group(['middleware' => ['api', 'api.auth']], function ($api) {
    // User profile routes
    $api->post('auth/password/change', 'Auth\PasswordResetController@changePassword');
    $api->post('profile/favorites/dedicated', 'FavoritesController@dedicated');
    $api->post('profile/favorites/vps', 'FavoritesController@vps');
    $api->post('profile/favorites/cloud', 'FavoritesController@cloud');

    // Favorites
    $api->post('favorites/{server_type}/{server_id}/add', 'FavoritesController@store');
    $api->post('favorites/{server_type}/{server_id}/delete', 'FavoritesController@destroy');
    $api->get('favorites/{server_type}/all', 'FavoritesController@showAll');

    // Server information
    $api->group(['prefix' => 'server'], function ($api) {
        $api->get('usage', 'ServerController@usage');
    });

    $api->get('sample/protected', 'AngularController@protectedData');

    // Token refresh routes
    $api->group(['middleware' => ['jwt.refresh']], function ($api) {
        $api->get('profile/username', 'HomeController@protectedUser');
    });
});
