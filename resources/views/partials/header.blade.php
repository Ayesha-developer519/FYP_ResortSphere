<div class="topbar">
    <div class="topbar-left">
        <button class="btn-hamburger" onclick="toggleSidebar()">
            <i class="bi bi-list"></i>
        </button>
        <span class="page-title">@yield('page_title')</span>
    </div>

    <div class="topbar-right">
        <div class="search-wrap d-none d-md-block">
            <span class="si"><i class="bi bi-search"></i></span>
            <input type="text" placeholder="Search here..." id="topSearch" oninput="if(typeof filterTable==='function') filterTable()"/>
        </div>

        <div class="bell-btn" title="Notifications">
            <i class="bi bi-bell-fill"></i>
            <span class="bell-dot"></span>
        </div>

        <div class="avatar-circle">
            <i class="bi bi-person-fill" style="font-size:25px;color:#334155;"></i>
        </div>

        <div class="user-info-text d-none d-md-block">
            <div class="user-name">Admin User</div>
            <div class="user-role">Super Administrator</div>
        </div>
    </div>
</div>
