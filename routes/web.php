<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('welcome');
});

Route::get('/datatable', function () {
    return inertia('datatable');
});

Route::get('/formulario', function () {
    return inertia('Formulario');
});

Route::get('/register', function () {
    return inertia('FormRegister');
});
