/* ══════ RESORT OWNERS PAGE JS — ResortSphere Admin ══════ */

const owners = [
    { name: 'Tariq Mahmood',  email: 'tariq@gmail.com',   phone: '0300-1234567', resorts: 3, status: 'Approved'  },
    { name: 'Farrukh Awan',   email: 'farrukh@gmail.com', phone: '0311-2345678', resorts: 1, status: 'Pending'   },
    { name: 'Nadia Siddiqui', email: 'nadia@gmail.com',   phone: '0322-3456789', resorts: 2, status: 'Approved'  },
    { name: 'Kamran Baig',    email: 'kamran@gmail.com',  phone: '0333-4567890', resorts: 0, status: 'Rejected'  },
    { name: 'Sabiha Rehman',  email: 'sabiha@gmail.com',  phone: '0344-5678901', resorts: 1, status: 'Pending'   },
    { name: 'Irfan Shah',     email: 'irfan@gmail.com',   phone: '0355-6789012', resorts: 4, status: 'Approved'  },
    { name: 'Lubna Malik',    email: 'lubna@gmail.com',   phone: '0366-7890123', resorts: 0, status: 'Suspended' },
    { name: 'Asad Butt',      email: 'asad@gmail.com',    phone: '0377-8901234', resorts: 2, status: 'Approved'  },
    { name: 'Zara Khan',      email: 'zara@gmail.com',    phone: '0388-9012345', resorts: 1, status: 'Pending'   },
    { name: 'Bilal Hussain',  email: 'bilalh@gmail.com',  phone: '0399-0123456', resorts: 0, status: 'Rejected'  },
    { name: 'Mehwish Akhtar', email: 'mehwish@gmail.com', phone: '0312-1122334', resorts: 3, status: 'Approved'  },
    { name: 'Junaid Raza',    email: 'junaid@gmail.com',  phone: '0323-2233445', resorts: 1, status: 'Pending'   },
];

const bmap = {
    Approved: 'bs-approved', Pending: 'bs-pending',
    Rejected: 'bs-rejected', Suspended: 'bs-suspended'
};

let filtered = [...owners], cp = 1;

function badge(s) {
    return `<span class="badge-status ${bmap[s] || 'bs-pending'}">${s}</span>`;
}

function actions(o) {
    let b = `<button class="btn-action btn-edit me-1">Edit</button>`;
    if (o.status === 'Pending')   b += `<button class="btn-action btn-approve me-1">Approve</button><button class="btn-action btn-reject me-1">Reject</button>`;
    if (o.status === 'Approved')  b += `<button class="btn-action btn-suspend me-1">Suspend</button>`;
    if (o.status === 'Suspended') b += `<button class="btn-action btn-unsuspend me-1">Unsuspend</button>`;
    if (['Rejected', 'Suspended'].includes(o.status)) b += `<button class="btn-action btn-delete">Delete</button>`;
    return b;
}

function row(o) {
    return `<tr>
        <td class="fw-600">${o.name}</td>
        <td class="text-muted-sm">${o.email}</td>
        <td class="text-muted-sm">${o.phone}</td>
        <td><span class="fw-600">${o.resorts}</span></td>
        <td>${badge(o.status)}</td>
        <td>${actions(o)}</td>
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

    filtered = owners.filter(o =>
        (!status || o.status.toLowerCase() === status) &&
        (!s      || o.name.toLowerCase().includes(s) || o.email.toLowerCase().includes(s))
    );
    cp = 1; draw();
}

function resetFilters() {
    ['statusFilter', 'filterSearch', 'cardSearch', 'topSearch'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    filtered = [...owners]; cp = 1; draw();
}

document.addEventListener('DOMContentLoaded', function () {
    draw();
});
