@extends('layouts.master')

@section('page_title', 'Bookings')

@section('css')
    <link href="{{ asset('css/bookings.css') }}" rel="stylesheet"/>
@endsection

@section('content')

    <div class="row g-3 mb-4">
        <div class="col-6 col-md-3">
            <div class="stat-card">
                <div class="stat-icon" style="background:#ecfdf5;"><i class="bi bi-calendar-check-fill" style="color:#059669;"></i></div>
                <div class="stat-label">Confirmed</div>
                <div class="stat-value">847</div>
                <div class="stat-sub">This month</div>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-card">
                <div class="stat-icon" style="background:#fffbeb;"><i class="bi bi-hourglass-split" style="color:#d97706;"></i></div>
                <div class="stat-label">Pending</div>
                <div class="stat-value">234</div>
                <div class="stat-sub">Awaiting confirmation</div>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-card">
                <div class="stat-icon" style="background:#fef2f2;"><i class="bi bi-x-circle-fill" style="color:#dc2626;"></i></div>
                <div class="stat-label">Cancelled</div>
                <div class="stat-value">208</div>
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

    <div class="filter-bar">
        <div class="filter-select-wrap">
            <label>Status:</label>
            <select id="statusFilter" onchange="filterTable()">
                <option value="">All</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
            </select>
        </div>
        <div class="filter-search-wrap">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search by guest or resort..." id="filterSearch" oninput="filterTable()"/>
        </div>
        <button class="btn-reset" onclick="resetFilters()"><i class="bi bi-arrow-counterclockwise"></i> Reset</button>
    </div>

    <div class="table-card">
        <div class="table-card-header">
            <h5>All Bookings</h5>
            <div class="hdr-search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search..." id="cardSearch" oninput="filterTable()"/>
            </div>
        </div>
        <div class="table-responsive-wrap">
            <table>
                <thead>
                    <tr><th>Booking ID</th><th>Guest</th><th>Resort</th><th>Check-In</th><th>Check-Out</th><th>Amount</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody id="tableBody"></tbody>
            </table>
        </div>
        <div class="table-footer">
            <div class="pagination-wrap" id="pagination"></div>
        </div>
    </div>

@endsection

@section('js')
    <script src="{{ asset('js/bookings.js') }}"></script>
@endsection
