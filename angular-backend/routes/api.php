<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tasks', function () {
	return \App\Task::all();
});

Route::post('/task', function (Request $request) {

	$request->validate([
		'taskTitle' => 'required',
		'taskDescription' => 'required'
	]);

	$task = new \App\Task();

	$task->taskTitle = $request->taskTitle;
	$task->taskDescription = $request->taskDescription;

	$task->save();
});