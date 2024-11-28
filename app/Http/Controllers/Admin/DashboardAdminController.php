<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DashboardAdminController extends Controller
{
    public function index()
    {
        // Logique spécifique aux administrateurs, si nécessaire
        return Inertia::render('Admin/IndexAdmin');
    }
}
