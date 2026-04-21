/* ══════ SHARED JS — ResortSphere Admin ══════ */

let sidebarOpen = true;

function toggleSidebar() { sidebarOpen = !sidebarOpen; applySidebar(); }
function closeSidebar()   { sidebarOpen = false; applySidebar(); }

function applySidebar() {
    const sb = document.getElementById('sidebar');
    const mn = document.getElementById('main');
    const ov = document.getElementById('overlay');
    if (!sb || !mn) return;

    if (sidebarOpen) {
        sb.classList.remove('hide'); sb.classList.add('open');
        ov.classList.remove('show');
        mn.style.marginLeft = window.innerWidth >= 992 ? '260px' : '0';
        if (window.innerWidth < 992) ov.classList.add('show');
    } else {
        sb.classList.add('hide'); sb.classList.remove('open');
        ov.classList.remove('show');
        mn.style.marginLeft = '0';
    }
}

// Close sidebar on mobile link click
document.addEventListener('DOMContentLoaded', function () {
    sidebarOpen = window.innerWidth >= 992;
    applySidebar();

    document.getElementById('overlay').addEventListener('click', closeSidebar);

    document.querySelectorAll('.sidebar-link').forEach(l => {
        l.addEventListener('click', () => {
            if (window.innerWidth < 992) closeSidebar();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) sidebarOpen = true;
        applySidebar();
    });
});

/* ── TABLE HELPERS ── */

const ROWS_PER_PAGE = 8;

function renderTable(filtered, currentPage, tbodyId, colRenderer) {
    const start = (currentPage - 1) * ROWS_PER_PAGE;
    const page  = filtered.slice(start, start + ROWS_PER_PAGE);
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = page.length
        ? page.map(colRenderer).join('')
        : `<tr><td colspan="20" class="text-center py-4" style="color:#9ca3af">No records found.</td></tr>`;
}

function renderPagination(filtered, currentPage, paginId, onPageChange) {
    const total = Math.ceil(filtered.length / ROWS_PER_PAGE);
    const wrap  = document.getElementById(paginId);
    if (!wrap) return;
    if (total <= 1) { wrap.innerHTML = ''; return; }

    let h = `<button class="page-btn" onclick="${onPageChange}(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&#8249;</button>`;
    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || Math.abs(i - currentPage) <= 1)
            h += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="${onPageChange}(${i})">${i}</button>`;
        else if (Math.abs(i - currentPage) === 2)
            h += `<span class="page-btn dots">…</span>`;
    }
    h += `<button class="page-btn" onclick="${onPageChange}(${currentPage + 1})" ${currentPage === total ? 'disabled' : ''}>&#8250;</button>`;
    wrap.innerHTML = h;
}
