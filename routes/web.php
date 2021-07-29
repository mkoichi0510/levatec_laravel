<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('index');
});
*/

Route::get('/', 'PostController@index');
Route::get('/chat', 'ChatController@index');
Route::get('/chat/get', 'ChatController@getBlogData');
Route::get('/posts/create', 'PostController@create');
Route::get('/posts/{post}/edit', 'PostController@edit');
Route::put('/posts/{post}', 'PostController@update');
Route::get('/posts/{post}/detaile', 'PostController@detaile');
Route::get('/posts/{post}', 'PostController@show');

Route::delete('/posts/{post}', 'PostController@delete');

Route::post('/posts', 'PostController@store');
