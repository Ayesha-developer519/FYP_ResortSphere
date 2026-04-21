/* ══════ REPORTS PAGE JS — ResortSphere Admin ══════ */

const reports = {
    bookings: {
        title: 'Booking Report',
        summary: [
            { val: '1,289', lbl: 'Total Bookings' },
            { val: '847',   lbl: 'Confirmed'       },
            { val: '234',   lbl: 'Pending'          },
            { val: '208',   lbl: 'Cancelled'        },
        ],
        head: '<tr><th>Booking ID</th><th>Guest</th><th>Resort</th><th>Check-In</th><th>Check-Out</th><th>Amount</th><th>Status</th></tr>',
        rows: [
            { id: 'BK001', guest: 'Ahmad Hasan',   resort: 'Sea View Hotel',      cin: 'Dec 15, 2024', cout: 'Dec 20, 2024', amount: 'PKR 25,000', status: 'Confirmed', sc: 'bs-confirmed' },
            { id: 'BK002', guest: 'Omar Faisal',   resort: 'Mountain Retreat',    cin: 'Dec 16, 2024', cout: 'Dec 19, 2024', amount: 'PKR 30,000', status: 'Pending',   sc: 'bs-pending'   },
            { id: 'BK003', guest: 'Usman Khan',    resort: 'Luxury Beach Resort', cin: 'Dec 25, 2024', cout: 'Dec 28, 2024', amount: 'PKR 92,000', status: 'Confirmed', sc: 'bs-confirmed' },
            { id: 'BK004', guest: 'Sara Ahmed',    resort: 'Royal Palm Resort',   cin: 'Dec 10, 2024', cout: 'Dec 12, 2024', amount: 'PKR 18,000', status: 'Cancelled', sc: 'bs-cancelled' },
            { id: 'BK005', guest: 'Bilal Qureshi', resort: 'Aman Resort',         cin: 'Dec 18, 2024', cout: 'Dec 22, 2024', amount: 'PKR 22,000', status: 'Confirmed', sc: 'bs-confirmed' },
            { id: 'BK006', guest: 'Nida Baig',     resort: 'Serena Hills',        cin: 'Jan 02, 2025', cout: 'Jan 05, 2025', amount: 'PKR 45,000', status: 'Confirmed', sc: 'bs-confirmed' },
            { id: 'BK007', guest: 'Hamza Sheikh',  resort: 'Desert Palm',         cin: 'Jan 08, 2025', cout: 'Jan 10, 2025', amount: 'PKR 16,000', status: 'Pending',   sc: 'bs-pending'   },
            { id: 'BK008', guest: 'Sana Malik',    resort: 'Pearl Continental',   cin: 'Jan 12, 2025', cout: 'Jan 15, 2025', amount: 'PKR 78,000', status: 'Confirmed', sc: 'bs-confirmed' },
            { id: 'BK009', guest: 'Raza Hussain',  resort: 'Valley View Resort',  cin: 'Jan 20, 2025', cout: 'Jan 23, 2025', amount: 'PKR 28,000', status: 'Cancelled', sc: 'bs-cancelled' },
            { id: 'BK010', guest: 'Maryam Rao',    resort: 'Blue Lagoon Hotel',   cin: 'Feb 01, 2025', cout: 'Feb 04, 2025', amount: 'PKR 55,000', status: 'Pending',   sc: 'bs-pending'   },
        ],
        rowRender: r => `<tr>
            <td class="fw-bold">${r.id}</td>
            <td class="fw-600">${r.guest}</td>
            <td class="text-muted-sm">${r.resort}</td>
            <td class="text-muted-sm">${r.cin}</td>
            <td class="text-muted-sm">${r.cout}</td>
            <td class="fw-bold">${r.amount}</td>
            <td><span class="badge-status ${r.sc}">${r.status}</span></td>
        </tr>`
    },

    revenue: {
        title: 'Revenue Report',
        summary: [
            { val: 'PKR 2.4M', lbl: 'Total Revenue' },
            { val: 'PKR 1.8M', lbl: 'Received'       },
            { val: 'PKR 320K', lbl: 'Pending'         },
            { val: 'PKR 85K',  lbl: 'Refunded'        },
        ],
        head: '<tr><th>Month</th><th>Total Bookings</th><th>Revenue</th><th>Refunds</th><th>Net Revenue</th></tr>',
        rows: [
            { month: 'October 2024',  bookings: '180', rev: 'PKR 450,000', ref: 'PKR 20,000', net: 'PKR 430,000' },
            { month: 'November 2024', bookings: '210', rev: 'PKR 580,000', ref: 'PKR 15,000', net: 'PKR 565,000' },
            { month: 'December 2024', bookings: '340', rev: 'PKR 920,000', ref: 'PKR 25,000', net: 'PKR 895,000' },
            { month: 'January 2025',  bookings: '280', rev: 'PKR 740,000', ref: 'PKR 18,000', net: 'PKR 722,000' },
            { month: 'February 2025', bookings: '279', rev: 'PKR 710,000', ref: 'PKR 7,000',  net: 'PKR 703,000' },
        ],
        rowRender: r => `<tr>
            <td class="fw-600">${r.month}</td>
            <td>${r.bookings}</td>
            <td class="fw-bold">${r.rev}</td>
            <td style="color:#dc2626;font-weight:600;">${r.ref}</td>
            <td class="fw-bold" style="color:#059669;">${r.net}</td>
        </tr>`
    },

    users: {
        title: 'User Report',
        summary: [
            { val: '2,543', lbl: 'Total Users'          },
            { val: '1,890', lbl: 'Approved'              },
            { val: '312',   lbl: 'Pending'               },
            { val: '341',   lbl: 'Rejected/Suspended'    },
        ],
        head: '<tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Status</th></tr>',
        rows: [
            { name: 'Ahmad Hassan',    email: 'ahmad@gmail.com',  role: 'User',    joined: 'Oct 10, 2024', status: 'Approved',  sc: 'bs-approved'  },
            { name: 'Omar Faisal',     email: 'omar@gmail.com',   role: 'Manager', joined: 'Nov 05, 2024', status: 'Pending',   sc: 'bs-pending'   },
            { name: 'Sara Ahmed',      email: 'sara@gmail.com',   role: 'Manager', joined: 'Nov 12, 2024', status: 'Pending',   sc: 'bs-pending'   },
            { name: 'Bilal Qureshi',   email: 'ober@gmail.com',   role: 'User',    joined: 'Dec 01, 2024', status: 'Active',    sc: 'bs-active'    },
            { name: 'Zahad Mehmood',   email: 'zahad@gmail.com',  role: 'User',    joined: 'Dec 08, 2024', status: 'Approved',  sc: 'bs-approved'  },
            { name: 'Faizan Khan',     email: 'basss@gmail.com',  role: 'Manager', joined: 'Dec 15, 2024', status: 'Suspended', sc: 'bs-suspended' },
            { name: 'Ayesha Siddiqui', email: 'hassan@gmail.com', role: 'Manager', joined: 'Jan 03, 2025', status: 'Rejected',  sc: 'bs-rejected'  },
            { name: 'Hassan Raza',     email: 'anmad@gmail.com',  role: 'User',    joined: 'Jan 10, 2025', status: 'Suspended', sc: 'bs-suspended' },
        ],
        rowRender: r => `<tr>
            <td class="fw-600">${r.name}</td>
            <td class="text-muted-sm">${r.email}</td>
            <td>${r.role}</td>
            <td class="text-muted-sm">${r.joined}</td>
            <td><span class="badge-status ${r.sc}">${r.status}</span></td>
        </tr>`
    },

    resorts: {
        title: 'Resort Report',
        summary: [
            { val: '156', lbl: 'Total Resorts'         },
            { val: '98',  lbl: 'Approved'               },
            { val: '32',  lbl: 'Pending'                },
            { val: '26',  lbl: 'Rejected/Suspended'     },
        ],
        head: '<tr><th>Resort</th><th>Location</th><th>Manager</th><th>Bookings</th><th>Revenue</th><th>Status</th></tr>',
        rows: [
            { name: 'Sea View Hotel',      loc: 'Karachi',    mgr: 'Tariq Mahmood',  bk: 45, rev: 'PKR 380,000', status: 'Approved',  sc: 'bs-approved'  },
            { name: 'Mountain Retreat',    loc: 'Murree',     mgr: 'Nadia Siddiqui', bk: 38, rev: 'PKR 290,000', status: 'Approved',  sc: 'bs-approved'  },
            { name: 'Luxury Beach Resort', loc: 'Gwadar',     mgr: 'Irfan Shah',     bk: 12, rev: 'PKR 520,000', status: 'Pending',   sc: 'bs-pending'   },
            { name: 'Royal Palm Resort',   loc: 'Lahore',     mgr: 'Mehwish Akhtar', bk: 67, rev: 'PKR 640,000', status: 'Approved',  sc: 'bs-approved'  },
            { name: 'Aman Resort',         loc: 'Islamabad',  mgr: 'Asad Butt',      bk: 22, rev: 'PKR 180,000', status: 'Suspended', sc: 'bs-suspended' },
            { name: 'Serena Hills',        loc: 'Swat',       mgr: 'Irfan Shah',     bk: 55, rev: 'PKR 410,000', status: 'Approved',  sc: 'bs-approved'  },
            { name: 'Desert Palm',         loc: 'Bahawalpur', mgr: 'Tariq Mahmood',  bk: 18, rev: 'PKR 150,000', status: 'Approved',  sc: 'bs-approved'  },
            { name: 'Pearl Continental',   loc: 'Peshawar',   mgr: 'Farrukh Awan',   bk: 8,  rev: 'PKR 95,000',  status: 'Pending',   sc: 'bs-pending'   },
        ],
        rowRender: r => `<tr>
            <td class="fw-600">${r.name}</td>
            <td class="text-muted-sm">${r.loc}</td>
            <td class="text-muted-sm">${r.mgr}</td>
            <td>${r.bk}</td>
            <td class="fw-bold">${r.rev}</td>
            <td><span class="badge-status ${r.sc}">${r.status}</span></td>
        </tr>`
    }
};

let cp = 1, currentData = [];

function updateReport() {
    const type = document.getElementById('reportType').value;
    const d = reports[type];

    document.getElementById('tableTitle').textContent = d.title;
    document.getElementById('tableHead').innerHTML = d.head;
    document.getElementById('summaryRow').innerHTML = d.summary
        .map(s => `<div class="summary-box"><div class="val">${s.val}</div><div class="lbl">${s.lbl}</div></div>`)
        .join('');

    currentData = d.rows;
    cp = 1;
    renderTable(currentData, cp, 'tableBody', d.rowRender);
    renderPagination(currentData, cp, 'pagination', 'go');
}

function go(p) {
    const t = Math.ceil(currentData.length / ROWS_PER_PAGE);
    if (p < 1 || p > t) return;
    cp = p;
    const type = document.getElementById('reportType').value;
    renderTable(currentData, cp, 'tableBody', reports[type].rowRender);
    renderPagination(currentData, cp, 'pagination', 'go');
}

document.addEventListener('DOMContentLoaded', function () {
    updateReport();
});
