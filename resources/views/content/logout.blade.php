<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>ResortSphere – Logout</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
    <link href="{{ asset('css/logout.css') }}" rel="stylesheet"/>
</head>
<body>

    <div class="logout-wrapper">
        <div class="logout-card">

            <div class="logout-brand">
                <div class="brand-icon">🌴</div>
                <div>
                    <div class="brand-name">ResortSphere</div>
                    <div class="brand-sub">Admin Panel</div>
                </div>
            </div>

            <div class="logout-icon-wrap">
                <i class="bi bi-box-arrow-left logout-icon"></i>
            </div>

            <h4 class="logout-title">Logging Out</h4>
            <p class="logout-msg">Are you sure you want to logout from the admin panel?</p>

            <div class="logout-actions">
                <a href="{{ route('dashboard') }}" class="btn-cancel">
                    <i class="bi bi-arrow-left me-1"></i> Go Back
                </a>

                <form method="POST" action="{{ route('logout.confirm') }}">
                    @csrf
                    <button type="submit" class="btn-logout">
                        <i class="bi bi-box-arrow-left me-1"></i> Yes, Logout
                    </button>
                </form>
            </div>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>