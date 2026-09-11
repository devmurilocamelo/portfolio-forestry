<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Rotas futuras do "jardim digital" (notas em markdown), preparadas mas ainda
// não implementadas nesta primeira leva de dependências:
// Route::get('/jardim', [GardenController::class, 'index'])->name('garden.index');
// Route::get('/jardim/{note:slug}', [GardenController::class, 'show'])->name('garden.show');
