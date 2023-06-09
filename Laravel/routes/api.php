<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [TaskController::class, 'index']);
Route::get('/{id}', [TaskController::class, 'show']);
Route::post('/', [TaskController::class, 'store']);
Route::put('/{id}', [TaskController::class, 'update']);
Route::delete('/{id}', [TaskController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

