@extends('layouts.master')

@section('page_title', 'Users')

@section('css')
    <link href="{{ asset('css/users.css') }}" rel="stylesheet"/>
@endsection

@section('content')

    <div class="filter-bar">
        <div class="filter-select-wrap">
            <label>Role:</label>
            <select id="roleFilter" onchange="filterTable()">
                <option value="">All</option>
                <option value="User">User</option>
                <option value="Manager">Manager</option>
            </select>
        </div>
        <div class="filter-select-wrap">
            <label>Status:</label>
            <select id="statusFilter" onchange="filterTable()">
                <option value="">All</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
                <option value="Suspended">Suspended</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
        </div>
        <div class="filter-search-wrap">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search users..." id="filterSearch" oninput="filterTable()"/>
        </div>
        <button class="btn-reset" onclick="resetFilters()"><i class="bi bi-arrow-counterclockwise"></i> Reset</button>
    </div>

    <div class="table-card">
        <div class="table-card-header">
            <h5>All Users</h5>
            <div class="hdr-search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search..." id="cardSearch" oninput="filterTable()"/>
            </div>
        </div>
        <div class="table-responsive-wrap">
            <table>
                <thead>
                    <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr>
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
    <script src="{{ asset('js/users.js') }}"></script>
@endsection
