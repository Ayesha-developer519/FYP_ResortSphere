@extends('layouts.master')

@section('page_title', 'Dashboard')

@section('css')
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet"/>
@endsection

@section('content')

    <p class="welcome-msg">Welcome back, Admin! Here's what's happening with your resort booking platform.</p>

    <div class="row g-3 mb-4">
        <div class="col-6 col-md-3">
            <div class="stat-card">
                <div class="stat-icon" style="background:#eef2ff;"><i class="bi bi-people-fill" style="color:#3b6ef5;"></i></div>
                <div class="stat-label">Total Users</div>
                <div class="stat-value">2,543</div>
                <div class="stat-sub">Customers registered</div>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-card">
                <div class="stat-icon" style="background:#ecfdf5;"><i class="bi bi-buildings-fill" style="color:#059669;"></i></div>
                <div class="stat-label">Active Resorts</div>
                <div class="stat-value">156</div>
                <div class="stat-sub">Listed on platform</div>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-card">
                <div class="stat-icon" style="background:#fffbeb;"><i class="bi bi-calendar-check-fill" style="color:#d97706;"></i></div>
                <div class="stat-label">Total Bookings</div>
                <div class="stat-value">1,289</div>
                <div class="stat-sub">This month</div>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-card">
                <div class="stat-icon" style="background:#f5f3ff;"><i class="bi bi-cash-stack" style="color:#7c3aed;"></i></div>
                <div class="stat-label">Total Revenue</div>
                <div class="stat-value">PKR 2.4M</div>
                <div class="stat-sub">This month</div>
            </div>
        </div>
    </div>

    <div class="table-card">
        <div class="table-card-header">
            <h5>Recent Bookings</h5>
            <a href="{{ route('bookings.index') }}" class="btn-view-all">View All <i class="bi bi-chevron-right"></i></a>
        </div>
        <div class="table-responsive-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th><th>Guest</th><th>Resort</th>
                        <th>Check-In</th><th>Check-Out</th><th>Amount</th><th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="fw-bold">BK001</td><td class="fw-600">Ahmad Hasan</td><td class="text-muted-sm">Sea View Hotel</td><td><div class="date-main">Dec 15</div><div class="date-sub">2024</div></td><td><div class="date-main">Dec 20</div><div class="date-sub">2024</div></td><td class="fw-bold">PKR 25,000</td><td><span class="badge-status bs-confirmed">Confirmed</span></td></tr>
                    <tr><td class="fw-bold">BK002</td><td class="fw-600">Omar Faisal</td><td class="text-muted-sm">Mountain Retreat</td><td><div class="date-main">Dec 16</div><div class="date-sub">2024</div></td><td><div class="date-main">Dec 19</div><div class="date-sub">2024</div></td><td class="fw-bold">PKR 30,000</td><td><span class="badge-status bs-pending">Pending</span></td></tr>
                    <tr><td class="fw-bold">BK003</td><td class="fw-600">Usman Khan</td><td class="text-muted-sm">Luxury Beach Resort</td><td><div class="date-main">Dec 25</div><div class="date-sub">2024</div></td><td><div class="date-main">Dec 28</div><div class="date-sub">2024</div></td><td class="fw-bold">PKR 92,000</td><td><span class="badge-status bs-confirmed">Confirmed</span></td></tr>
                    <tr><td class="fw-bold">BK004</td><td class="fw-600">Sara Ahmed</td><td class="text-muted-sm">Royal Palm Resort</td><td><div class="date-main">Dec 10</div><div class="date-sub">2024</div></td><td><div class="date-main">Dec 12</div><div class="date-sub">2024</div></td><td class="fw-bold">PKR 18,000</td><td><span class="badge-status bs-cancelled">Cancelled</span></td></tr>
                    <tr><td class="fw-bold">BK005</td><td class="fw-600">Bilal Qureshi</td><td class="text-muted-sm">Aman Resort</td><td><div class="date-main">Dec 18</div><div class="date-sub">2024</div></td><td><div class="date-main">Dec 22</div><div class="date-sub">2024</div></td><td class="fw-bold">PKR 22,000</td><td><span class="badge-status bs-confirmed">Confirmed</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>

@endsection

@section('js')
    <script src="{{ asset('js/dashboard.js') }}"></script>
@endsection
