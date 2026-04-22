<div class="sidebar-brand">
    <div class="brand-icon">🌴</div>
    <div>
        <div class="brand-name">Resort<span>Sphere</span></div>
        <div class="brand-sub">Admin Panel</div>
    </div>
</div>

<nav class="sidebar-nav">
    <ul class="list-unstyled d-flex flex-column gap-1">
        <li><a href="{{ route('dashboard') }}"     class="sidebar-link {{ request()->routeIs('dashboard')     ? 'active' : '' }}"><i class="bi bi-grid-fill"></i> Dashboard</a></li>
        <li><a href="{{ route('users.index') }}"   class="sidebar-link {{ request()->routeIs('users.*')       ? 'active' : '' }}"><i class="bi bi-people-fill"></i> Users</a></li>
        <li><a href="{{ route('resort-owners.index') }}" class="sidebar-link {{ request()->routeIs('resort-owners.*') ? 'active' : '' }}"><i class="bi bi-person-badge-fill"></i> Resort Owners</a></li>
        <li><a href="{{ route('resorts.index') }}" class="sidebar-link {{ request()->routeIs('resorts.*')     ? 'active' : '' }}"><i class="bi bi-buildings-fill"></i> Resorts</a></li>
        <li><a href="{{ route('bookings.index') }}" class="sidebar-link {{ request()->routeIs('bookings.*')   ? 'active' : '' }}"><i class="bi bi-calendar-check-fill"></i> Bookings</a></li>
        <li><a href="{{ route('reports.index') }}" class="sidebar-link {{ request()->routeIs('reports.*')     ? 'active' : '' }}"><i class="bi bi-bar-chart-fill"></i> Reports</a></li>
        <li style="margin-top:auto; padding-top:12px; border-top:1px solid rgba(255,255,255,.07); margin-left:12px; margin-right:12px;"><a href="{{ route('logout') }}" class="sidebar-link sidebar-logout"><i class="bi bi-box-arrow-left"></i> Logout</a></li>
    </ul>
</nav>
