/* ══════ RESORTS PAGE JS — ResortSphere Admin ══════ */

const resorts = [
    { name: 'Sea View Hotel',      location: 'Karachi',    manager: 'Tariq Mahmood',  rooms: 20, status: 'Approved'  },
    { name: 'Mountain Retreat',    location: 'Murree',     manager: 'Nadia Siddiqui', rooms: 15, status: 'Approved'  },
    { name: 'Luxury Beach Resort', location: 'Gwadar',     manager: 'Irfan Shah',     rooms: 35, status: 'Pending'   },
    { name: 'Royal Palm Resort',   location: 'Lahore',     manager: 'Mehwish Akhtar', rooms: 28, status: 'Approved'  },
    { name: 'Aman Resort',         location: 'Islamabad',  manager: 'Asad Butt',      rooms: 18, status: 'Suspended' },
    { name: 'Pearl Continental',   location: 'Peshawar',   manager: 'Farrukh Awan',   rooms: 40, status: 'Pending'   },
    { name: 'Serena Hills',        location: 'Swat',       manager: 'Irfan Shah',     rooms: 22, status: 'Approved'  },
    { name: 'Margalla Heights',    location: 'Islamabad',  manager: 'Asad Butt',      rooms: 12, status: 'Rejected'  },
    { name: 'Desert Palm',         location: 'Bahawalpur', manager: 'Tariq Mahmood',  rooms: 16, status: 'Approved'  },
    { name: 'Valley View Resort',  location: 'Kaghan',     manager: 'Nadia Siddiqui', rooms: 10, status: 'Pending'   },
    { name: 'Blue Lagoon Hotel',   location: 'Karachi',    manager: 'Mehwish Akhtar', rooms: 24, status: 'Approved'  },
    { name: 'Forest Haven',        location: 'Abbottabad', manager: 'Junaid Raza',    rooms: 8,  status: 'Pending'   },
];

const bmap = {
    Approved: 'bs-approved', Pending: 'bs-pending',
    Rejected: 'bs-rejected', Suspended: 'bs-suspended'
};

let filtered = [...resorts], cp = 1;

function badge(s) {
    return `<span class="badge-status ${bmap[s] || 'bs-pending'}">${s}</span>`;
}

function actions(r) {
    let b = `<button class="btn-action btn-view me-1">View</button>`;
    if (r.status === 'Pending')   b += `<button class="btn-action btn-approve me-1">Approve</button><button class="btn-action btn-reject me-1">Reject</button>`;
    if (r.status === 'Approved')  b += `<button class="btn-action btn-suspend me-1">Suspend</button>`;
    if (r.status === 'Suspended') b += `<button class="btn-action btn-unsuspend me-1">Unsuspend</button>`;
    return b;
}

function row(r) {
    return `<tr>
        <td class="fw-600">${r.name}</td>
        <td class="text-muted-sm">${r.location}</td>
        <td class="text-muted-sm">${r.manager}</td>
        <td><span class="fw-600">${r.rooms}</span></td>
        <td>${badge(r.status)}</td>
        <td>${actions(r)}</td>
    </tr>`;
}

function draw() {
    renderTable(filtered, cp, 'tableBody', row);
    renderPagination(filtered, cp, 'pagination', 'go');
}

function go(p) {
    const t = Math.ceil(filtered.length / ROWS_PER_PAGE);
    if (p < 1 || p > t) return;
    cp = p; draw();
}

function filterTable() {
    const status = document.getElementById('statusFilter').value.toLowerCase();
    const q = ['filterSearch', 'cardSearch', 'topSearch']
        .map(id => document.getElementById(id)?.value || '')
        .find(v => v) || '';
    const s = q.toLowerCase();

    filtered = resorts.filter(r =>
        (!status || r.status.toLowerCase() === status) &&
        (!s      || r.name.toLowerCase().includes(s) || r.location.toLowerCase().includes(s))
    );
    cp = 1; draw();
}

function resetFilters() {
    ['statusFilter', 'filterSearch', 'cardSearch', 'topSearch'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    filtered = [...resorts]; cp = 1; draw();
}

document.addEventListener('DOMContentLoaded', function () {
    draw();
});
