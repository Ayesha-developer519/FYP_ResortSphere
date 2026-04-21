/* ══════ BOOKINGS PAGE JS — ResortSphere Admin ══════ */

const bookings = [
    { id: 'BK001', guest: 'Ahmad Hasan',   resort: 'Sea View Hotel',      cin: 'Dec 15, 2024', cout: 'Dec 20, 2024', amount: 'PKR 25,000', status: 'Confirmed' },
    { id: 'BK002', guest: 'Omar Faisal',   resort: 'Mountain Retreat',    cin: 'Dec 16, 2024', cout: 'Dec 19, 2024', amount: 'PKR 30,000', status: 'Pending'   },
    { id: 'BK003', guest: 'Usman Khan',    resort: 'Luxury Beach Resort', cin: 'Dec 25, 2024', cout: 'Dec 28, 2024', amount: 'PKR 92,000', status: 'Confirmed' },
    { id: 'BK004', guest: 'Sara Ahmed',    resort: 'Royal Palm Resort',   cin: 'Dec 10, 2024', cout: 'Dec 12, 2024', amount: 'PKR 18,000', status: 'Cancelled' },
    { id: 'BK005', guest: 'Bilal Qureshi', resort: 'Aman Resort',         cin: 'Dec 18, 2024', cout: 'Dec 22, 2024', amount: 'PKR 22,000', status: 'Confirmed' },
    { id: 'BK006', guest: 'Nida Baig',     resort: 'Serena Hills',        cin: 'Jan 02, 2025', cout: 'Jan 05, 2025', amount: 'PKR 45,000', status: 'Confirmed' },
    { id: 'BK007', guest: 'Hamza Sheikh',  resort: 'Desert Palm',         cin: 'Jan 08, 2025', cout: 'Jan 10, 2025', amount: 'PKR 16,000', status: 'Pending'   },
    { id: 'BK008', guest: 'Sana Malik',    resort: 'Pearl Continental',   cin: 'Jan 12, 2025', cout: 'Jan 15, 2025', amount: 'PKR 78,000', status: 'Confirmed' },
    { id: 'BK009', guest: 'Raza Hussain',  resort: 'Valley View Resort',  cin: 'Jan 20, 2025', cout: 'Jan 23, 2025', amount: 'PKR 28,000', status: 'Cancelled' },
    { id: 'BK010', guest: 'Maryam Rao',    resort: 'Blue Lagoon Hotel',   cin: 'Feb 01, 2025', cout: 'Feb 04, 2025', amount: 'PKR 55,000', status: 'Pending'   },
    { id: 'BK011', guest: 'Ali Kazmi',     resort: 'Forest Haven',        cin: 'Feb 10, 2025', cout: 'Feb 12, 2025', amount: 'PKR 14,000', status: 'Confirmed' },
    { id: 'BK012', guest: 'Ayesha Bibi',   resort: 'Margalla Heights',    cin: 'Feb 15, 2025', cout: 'Feb 18, 2025', amount: 'PKR 39,000', status: 'Cancelled' },
];

const bmap = {
    Confirmed: 'bs-confirmed', Pending: 'bs-pending', Cancelled: 'bs-cancelled'
};

let filtered = [...bookings], cp = 1;

function badge(s) {
    return `<span class="badge-status ${bmap[s] || 'bs-pending'}">${s}</span>`;
}

function actions(b) {
    let btn = `<button class="btn-action btn-view me-1">View</button>`;
    if (b.status === 'Pending') btn += `<button class="btn-action btn-approve me-1">Confirm</button><button class="btn-action btn-reject">Cancel</button>`;
    return btn;
}

function row(b) {
    return `<tr>
        <td class="fw-bold">${b.id}</td>
        <td class="fw-600">${b.guest}</td>
        <td class="text-muted-sm">${b.resort}</td>
        <td class="text-muted-sm">${b.cin}</td>
        <td class="text-muted-sm">${b.cout}</td>
        <td class="fw-bold">${b.amount}</td>
        <td>${badge(b.status)}</td>
        <td>${actions(b)}</td>
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

    filtered = bookings.filter(b =>
        (!status || b.status.toLowerCase() === status) &&
        (!s      || b.guest.toLowerCase().includes(s) || b.resort.toLowerCase().includes(s))
    );
    cp = 1; draw();
}

function resetFilters() {
    ['statusFilter', 'filterSearch', 'cardSearch', 'topSearch'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    filtered = [...bookings]; cp = 1; draw();
}

document.addEventListener('DOMContentLoaded', function () {
    draw();
});
