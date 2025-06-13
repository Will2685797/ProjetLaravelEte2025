<?php
use App\Http\Controllers\Api\GameController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});





Route::get('/games', [GameController::class, 'index']);

