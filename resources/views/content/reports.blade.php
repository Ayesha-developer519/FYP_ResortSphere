@extends('layouts.master')

@section('page_title', 'Reports')

@section('css')
    <link href="{{ asset('css/reports.css') }}" rel="stylesheet"/>
@endsection

@section('content')

    <div class="report-filters">
        <h6><i class="bi bi-funnel-fill me-2" style="color:var(--accent);"></i>Generate Report</h6>
        <div class="row g-2 align-items-end">
            <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label" style="font-size:12px;font-weight:600;color:var(--text);">Report Type</label>
                <select class="form-select form-select-sm" id="reportType" onchange="updateReport()">
                    <option value="bookings">Booking Report</option>
                    <option value="revenue">Revenue Report</option>
                    <option value="users">User Report</option>
                    <option value="resorts">Resort Report</option>
                </select>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label" style="font-size:12px;font-weight:600;color:var(--text);">Start Date</label>
                <input type="date" class="form-control form-control-sm" id="startDate" value="2024-12-01"/>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label" style="font-size:12px;font-weight:600;color:var(--text);">End Date</label>
                <input type="date" class="form-control form-control-sm" id="endDate" value="2025-02-28"/>
            </div>
            <div class="col-12 col-sm-6 col-md-3 d-flex gap-2">
                <button class="btn-generate w-100" onclick="updateReport()">
                    <i class="bi bi-bar-chart-fill me-1"></i>Generate
                </button>
            </div>
        </div>
    </div>

    <div class="summary-row" id="summaryRow"></div>

    <div class="table-card">
        <div class="table-card-header">
            <h5 id="tableTitle">Booking Report</h5>
            <button class="btn-reset" style="padding:6px 14px;" onclick="window.print()">
                <i class="bi bi-printer-fill me-1"></i>Print
            </button>
        </div>
        <div class="table-responsive-wrap">
            <table>
                <thead id="tableHead"></thead>
                <tbody id="tableBody"></tbody>
            </table>
        </div>
        <div class="table-footer">
            <div class="pagination-wrap" id="pagination"></div>
        </div>
    </div>

@endsection

@section('js')
    <script src="{{ asset('js/reports.js') }}"></script>
@endsection
