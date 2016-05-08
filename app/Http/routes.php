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

    // Authentication Routes...
    $api->post('auth/login', 'Auth\AuthController@login');
    $api->post('auth/register', 'Auth\AuthController@register');

    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');

    $api->get('sample/test', 'AngularController@protectedData');

    // Advanced Search Routes...
    $api->get('dedicated/all', 'DedicatedController@showAll');
    $api->get('dedicated/show', 'DedicatedController@showOne');
    $api->get('vps/all', 'VPSController@showAll');
    $api->get('vps/show', 'VPSController@showOne');

    // About Page Routes...
    $api->post('about/new', 'ContactController@store');

    // git information
    $api->get('git/status', 'AngularController@gitStatus');

});

//protected API routes with JWT (must be logged in)
$api->group(['middleware' => ['api', 'api.auth']], function ($api) {

    $api->get('sample/protected', 'AngularController@protectedData');
    //$api->get('profile/username', 'AngularController@protectedProfileUsername');

    $api->group(['middleware' => ['jwt.refresh']], function ($api) {
        $api->get('profile/username', 'AngularController@protectedProfileUsername');
    });

});
