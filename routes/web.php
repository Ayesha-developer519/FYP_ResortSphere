<?php

use Illuminate\Support\Facades\Route;

// ── DASHBOARD ──
Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', function () {
    return view('content.dashboard');
})->name('dashboard');

// ── USERS ──
Route::get('/users', function () {
    return view('content.users');
})->name('users.index');

// ── RESORT OWNERS ──
Route::get('/resort-owners', function () {
    return view('content.resort-owners');
})->name('resort-owners.index');

// ── RESORTS ──
Route::get('/resorts', function () {
    return view('content.resorts');
})->name('resorts.index');

// ── BOOKINGS ──
Route::get('/bookings', function () {
    return view('content.bookings');
})->name('bookings.index');

// ── REPORTS ──
Route::get('/reports', function () {
    return view('content.reports');
})->name('reports.index');

// ── LOGOUT ──
Route::get('/logout', function () {
    return view('content.logout');
})->name('logout');

Route::post('/logout', function () {
    // Auth::logout(); // jab authentication lagao to ye uncomment karna
    return redirect()->route('dashboard');
})->name('logout.confirm');