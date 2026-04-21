<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>ResortSphere – @yield('page_title', 'Admin')</title>

    {{-- Bootstrap CSS --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    {{-- Bootstrap Icons --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet"/>
    {{-- Google Font --}}
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

    {{-- Shared CSS --}}
    <link href="{{ asset('css/shared.css') }}" rel="stylesheet"/>

    {{-- Page specific CSS --}}
    @yield('css')
</head>
<body>

{{-- Overlay for mobile sidebar --}}
<div id="overlay"></div>

{{-- Sidebar --}}
<aside id="sidebar">
    @include('partials.sidebar')
</aside>

{{-- Main Content --}}
<div id="main">

    {{-- Header --}}
    @include('partials.header')

    {{-- Page Content --}}
    @yield('content')

    {{-- Footer --}}
    @include('partials.footer')

</div>

{{-- Bootstrap JS --}}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

{{-- Shared JS --}}
<script src="{{ asset('js/shared.js') }}"></script>

{{-- Page specific JS --}}
@yield('js')

</body>
</html>
