/* ══════ USERS PAGE JS — ResortSphere Admin ══════ */

const users = [
    { name: 'Ahmad Hassan',    email: 'ahmad@gmail.com',    role: 'User',    status: 'Approved'  },
    { name: 'Omar Faisal',     email: 'omar@gmail.com',     role: 'Manager', status: 'Pending'   },
    { name: 'Sara Ahmed',      email: 'sara@gmail.com',     role: 'Manager', status: 'Pending'   },
    { name: 'Bilal Qureshi',   email: 'ober@gmail.com',     role: 'User',    status: 'Active'    },
    { name: 'Zahad Mehmood',   email: 'zahad@gmail.com',    role: 'User',    status: 'Approved'  },
    { name: 'Faizan Khan',     email: 'basss@gmail.com',    role: 'Manager', status: 'Suspended' },
    { name: 'Ayesha Siddiqui', email: 'hassan@gmail.com',   role: 'Manager', status: 'Rejected'  },
    { name: 'Hassan Raza',     email: 'anmad@gmail.com',    role: 'User',    status: 'Suspended' },
    { name: 'Usman Ali',       email: 'bilal@gmail.com',    role: 'User',    status: 'Approved'  },
    { name: 'Maryam Rao',      email: 'anmaq@gmail.com',    role: 'Manager', status: 'Approved'  },
    { name: 'Anwar Ahmed',     email: 'kammen@gmail.com',   role: 'User',    status: 'Rejected'  },
    { name: 'Ali Kazmi',       email: 'aliketta@gmail.com', role: 'User',    status: 'Rejected'  },
    { name: 'Sana Malik',      email: 'sana@gmail.com',     role: 'Manager', status: 'Active'    },
    { name: 'Raza Hussain',    email: 'raza@gmail.com',     role: 'User',    status: 'Inactive'  },
    { name: 'Nida Baig',       email: 'nida@gmail.com',     role: 'User',    status: 'Approved'  },
    { name: 'Hamza Sheikh',    email: 'hamza@gmail.com',    role: 'Manager', status: 'Pending'   },
];

const bmap = {
    Approved: 'bs-approved', Pending: 'bs-pending', Rejected: 'bs-rejected',
    Suspended: 'bs-suspended', Active: 'bs-active', Inactive: 'bs-inactive'
};

let filtered = [...users], cp = 1;

function badge(s) {
    return `<span class="badge-status ${bmap[s] || 'bs-pending'}">${s}</span>`;
}

function actions(u) {
    let b = `<button class="btn-action btn-edit me-1">Edit</button>`;
    if (['Approved', 'Active'].includes(u.status)) b += `<button class="btn-action btn-suspend me-1">Suspend</button>`;
    if (u.status === 'Suspended') b += `<button class="btn-action btn-unsuspend me-1">Unsuspend</button>`;
    if (['Rejected', 'Pending', 'Inactive', 'Suspended'].includes(u.status)) b += `<button class="btn-action btn-delete">Delete</button>`;
    return b;
}

function row(u) {
    return `<tr>
        <td class="fw-600">${u.name}</td>
        <td class="text-muted-sm">${u.email}</td>
        <td>${u.role}</td>
        <td>${badge(u.status)}</td>
        <td>${actions(u)}</td>
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
    const role   = document.getElementById('roleFilter').value.toLowerCase();
    const status = document.getElementById('statusFilter').value.toLowerCase();
    const q = ['filterSearch', 'cardSearch', 'topSearch']
        .map(id => document.getElementById(id)?.value || '')
        .find(v => v) || '';
    const s = q.toLowerCase();

    filtered = users.filter(u =>
        (!role   || u.role.toLowerCase()   === role)   &&
        (!status || u.status.toLowerCase() === status) &&
        (!s      || u.name.toLowerCase().includes(s)   || u.email.toLowerCase().includes(s))
    );
    cp = 1; draw();
}

function resetFilters() {
    ['roleFilter', 'statusFilter', 'filterSearch', 'cardSearch', 'topSearch'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    filtered = [...users]; cp = 1; draw();
}

document.addEventListener('DOMContentLoaded', function () {
    draw();
});
