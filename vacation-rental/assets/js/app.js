/* ========================================
   VACATION RENTAL PLATFORM - APP.JS
   Mock data and application logic
   ======================================== */

// ==================== MOCK DATA ====================

const properties = [
    {
        id: 1,
        name: "Seaside Villa Paradise",
        location: "Malibu, California",
        description: "Stunning oceanfront villa with panoramic views. Perfect for family getaways with private beach access.",
        nightlyRate: 450,
        guests: 8,
        bedrooms: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Pool", "Hot Tub", "Beach Access", "Kitchen", "Parking"],
        images: ["🏖️"],
        status: "available",
        ownerId: 1,
        houseRules: "No smoking, No pets, Quiet hours after 10PM"
    },
    {
        id: 2,
        name: "Mountain Retreat Cabin",
        location: "Aspen, Colorado",
        description: "Cozy cabin in the mountains with fireplace and hot tub. Ideal for winter getaways.",
        nightlyRate: 320,
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Fireplace", "Hot Tub", "Kitchen", "Ski Storage"],
        images: ["🏔️"],
        status: "available",
        ownerId: 1,
        houseRules: "No smoking, Pets allowed with fee"
    },
    {
        id: 3,
        name: "Urban Loft Downtown",
        location: "New York City, NY",
        description: "Modern loft in the heart of Manhattan. Walking distance to major attractions.",
        nightlyRate: 280,
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Kitchen", "Gym", "Doorman"],
        images: ["🏙️"],
        status: "booked",
        ownerId: 2,
        houseRules: "No smoking, No pets"
    },
    {
        id: 4,
        name: "Lake House Escape",
        location: "Lake Tahoe, Nevada",
        description: "Peaceful lake house with private dock. Perfect for water activities and relaxation.",
        nightlyRate: 385,
        guests: 10,
        bedrooms: 5,
        bathrooms: 4,
        amenities: ["WiFi", "Kayaks", "Dock", "Fire Pit", "Kitchen", "BBQ"],
        images: ["🏞️"],
        status: "available",
        ownerId: 2,
        houseRules: "No smoking, No fireworks"
    },
    {
        id: 5,
        name: "Desert Oasis Villa",
        location: "Scottsdale, Arizona",
        description: "Luxurious desert retreat with stunning sunset views and infinity pool.",
        nightlyRate: 520,
        guests: 12,
        bedrooms: 6,
        bathrooms: 5,
        amenities: ["WiFi", "Pool", "Spa", "Golf Course", "Kitchen"],
        images: ["🏜️"],
        status: "pending",
        ownerId: 3,
        houseRules: "No smoking, No pets"
    },
    {
        id: 6,
        name: "Beachfront Bungalow",
        location: "Maui, Hawaii",
        description: "Charming bungalow right on the beach. Wake up to ocean sounds every morning.",
        nightlyRate: 380,
        guests: 4,
        bedrooms: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Beach Access", "Kayaks", "Kitchen"],
        images: ["🏝️"],
        status: "available",
        ownerId: 3,
        houseRules: "No smoking, No pets"
    },
    {
        id: 7,
        name: "Historic Brownstone",
        location: "Boston, Massachusetts",
        description: "Elegant brownstone in historic Beacon Hill. Walking distance to Freedom Trail.",
        nightlyRate: 220,
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Kitchen", "Washer/Dryer", "Parking"],
        images: ["🏛️"],
        status: "available",
        ownerId: 4,
        houseRules: "No smoking, No pets"
    },
    {
        id: 8,
        name: "Wine Country Estate",
        location: "Napa Valley, California",
        description: "Luxurious estate surrounded by vineyards. Perfect for wine enthusiasts.",
        nightlyRate: 600,
        guests: 10,
        bedrooms: 5,
        bathrooms: 4,
        amenities: ["WiFi", "Pool", "Wine Cellar", "Chef Kitchen", "Tasting Room"],
        images: ["🍇"],
        status: "available",
        ownerId: 4,
        houseRules: "No smoking, Adults only 21+"
    }
];

const owners = [
    { id: 1, name: "Sarah Mitchell", email: "sarah@vacations.com", properties: 2, rating: 4.9 },
    { id: 2, name: "James Wilson", email: "james@vacations.com", properties: 2, rating: 4.7 },
    { id: 3, name: "Maria Garcia", email: "maria@vacations.com", properties: 2, rating: 4.8 },
    { id: 4, name: "David Chen", email: "david@vacations.com", properties: 2, rating: 4.6 }
];

const stayRequests = [
    {
        id: 1,
        propertyId: 1,
        guestName: "John Smith",
        guestEmail: "john@email.com",
        checkIn: "2026-06-15",
        checkOut: "2026-06-20",
        guests: 4,
        status: "pending",
        totalPrice: 2250,
        message: "Looking forward to celebrating our anniversary!",
        type: "standard",
        requestDate: "2026-05-10"
    },
    {
        id: 2,
        propertyId: 4,
        guestName: "Emily Johnson",
        guestEmail: "emily@email.com",
        checkIn: "2026-07-01",
        checkOut: "2026-07-07",
        guests: 6,
        status: "approved",
        totalPrice: 2310,
        message: "Family reunion trip",
        type: "standard",
        requestDate: "2026-05-08"
    },
    {
        id: 3,
        propertyId: 2,
        guestName: "Michael Brown",
        guestEmail: "michael@email.com",
        checkIn: "2026-06-20",
        checkOut: "2026-06-25",
        guests: 2,
        status: "pending",
        totalPrice: 1600,
        message: "Ski trip with friends",
        type: "standard",
        requestDate: "2026-05-12"
    },
    {
        id: 4,
        propertyId: 6,
        guestName: "Charity Foundation",
        guestEmail: "contact@charity.org",
        checkIn: "2026-08-01",
        checkOut: "2026-08-07",
        guests: 4,
        status: "pending",
        totalPrice: 0,
        message: "Charitable stay for underprivileged families",
        type: "charitable",
        requestDate: "2026-05-11"
    }
];

const tasks = [
    {
        id: 1,
        title: "Deep Clean - Seaside Villa",
        propertyId: 1,
        type: "cleaning",
        priority: "high",
        status: "pending",
        dueDate: "2026-05-20",
        assignedTo: "Maria",
        description: "Full property deep clean before next guest arrival"
    },
    {
        id: 2,
        title: "Pool Maintenance",
        propertyId: 1,
        type: "maintenance",
        priority: "medium",
        status: "in_progress",
        dueDate: "2026-05-18",
        assignedTo: "Tech Team",
        description: "Monthly pool filter replacement"
    },
    {
        id: 3,
        title: "Smoke Detector Check",
        propertyId: 2,
        type: "safety",
        priority: "high",
        status: "completed",
        dueDate: "2026-05-15",
        assignedTo: "Tech Team",
        description: "Annual smoke detector inspection"
    },
    {
        id: 4,
        title: "Landscaping",
        propertyId: 5,
        type: "maintenance",
        priority: "low",
        status: "pending",
        dueDate: "2026-05-25",
        assignedTo: "Exterior Team",
        description: "Trim hedges and lawn maintenance"
    },
    {
        id: 5,
        title: "Hot Tub Service",
        propertyId: 2,
        type: "maintenance",
        priority: "medium",
        status: "pending",
        dueDate: "2026-05-22",
        assignedTo: "Tech Team",
        description: "Quarterly hot tub maintenance"
    }
];

const bookings = [
    { id: 1, propertyId: 1, guestName: "Johnson Family", checkIn: "2026-05-01", checkOut: "2026-05-07", total: 3150, status: "completed" },
    { id: 2, propertyId: 4, guestName: "Williams Party", checkIn: "2026-05-10", checkOut: "2026-05-14", total: 1540, status: "completed" },
    { id: 3, propertyId: 2, guestName: "Thompson Group", checkIn: "2026-05-20", checkOut: "2026-05-25", total: 1600, status: "upcoming" }
];

// ==================== CURRENT STATE ====================

let currentUser = {
    name: "Sarah Mitchell",
    role: "owner",
    initials: "SM"
};

// Current page tracking
let currentPage = window.location.pathname.split('/').pop() || 'index.html';

// ==================== UTILITY FUNCTIONS ====================

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function getStatusBadge(status) {
    const badges = {
        available: '<span class="property-card-badge available">Available</span>',
        booked: '<span class="property-card-badge booked">Booked</span>',
        pending: '<span class="property-card-badge pending">Pending</span>'
    };
    return badges[status] || '';
}

function getTaskStatusBadge(status) {
    const badges = {
        pending: '<span class="badge badge-warning">Pending</span>',
        in_progress: '<span class="badge badge-primary">In Progress</span>',
        completed: '<span class="badge badge-success">Completed</span>'
    };
    return badges[status] || '';
}

function getRequestStatusBadge(status) {
    const badges = {
        pending: '<span class="badge badge-warning">Pending</span>',
        approved: '<span class="badge badge-success">Approved</span>',
        declined: '<span class="badge badge-error">Declined</span>'
    };
    return badges[status] || '';
}

// ==================== RENDER FUNCTIONS ====================

function renderHeader() {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `
            <nav class="navbar">
                <a href="index.html" class="navbar-brand">
                    🏠 Stay<span>Hub</span>
                </a>
                <div class="navbar-nav">
                    <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
                    <a href="properties.html" class="nav-link ${currentPage === 'properties.html' ? 'active' : ''}">Properties</a>
                    <a href="owner-dashboard.html" class="nav-link ${currentPage === 'owner-dashboard.html' ? 'active' : ''}">Owner Dashboard</a>
                    <a href="admin-dashboard.html" class="nav-link ${currentPage === 'admin-dashboard.html' ? 'active' : ''}">Admin</a>
                </div>
                <div class="navbar-actions">
                    <button class="btn btn-primary" onclick="openModal('requestModal')">+ New Request</button>
                </div>
            </nav>
        `;
    }
}

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        const navItems = [
            { href: 'owner-dashboard.html', icon: '📊', label: 'Dashboard' },
            { href: 'properties.html', icon: '🏠', label: 'Properties' },
            { href: 'calendar.html', icon: '📅', label: 'Calendar' },
            { href: 'stay-requests.html', icon: '📋', label: 'Stay Requests', badge: stayRequests.filter(r => r.status === 'pending').length },
            { href: 'tasks.html', icon: '✅', label: 'Tasks', badge: tasks.filter(t => t.status !== 'completed').length }
        ];
        
        let navHTML = navItems.map(item => `
            <a href="${item.href}" class="sidebar-link ${currentPage === item.href ? 'active' : ''}">
                <span class="icon">${item.icon}</span>
                <span>${item.label}</span>
                ${item.badge ? `<span class="badge badge-warning" style="margin-left: auto;">${item.badge}</span>` : ''}
            </a>
        `).join('');

        sidebar.innerHTML = `
            <a href="index.html" class="sidebar-brand">
                🏠 Stay<span>Hub</span>
            </a>
            <nav class="sidebar-nav">
                ${navHTML}
            </nav>
            <div class="sidebar-footer">
                <div class="sidebar-user">
                    <div class="avatar avatar-primary">${currentUser.initials}</div>
                    <div class="sidebar-user-info">
                        <div class="sidebar-user-name">${currentUser.name}</div>
                        <div class="sidebar-user-role">Property Owner</div>
                    </div>
                </div>
            </div>
        `;
    }
}

function renderFooter() {
    const footer = document.getElementById('footer');
    if (footer && currentPage !== 'owner-dashboard.html' && currentPage !== 'admin-dashboard.html') {
        footer.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <div class="footer-brand">🏠 Stay<span>Hub</span></div>
                            <p class="footer-desc">The modern platform for managing vacation rentals and creating unforgettable guest experiences.</p>
                        </div>
                        <div>
                            <h4 class="footer-title">Platform</h4>
                            <div class="footer-links">
                                <a href="properties.html" class="footer-link">Browse Homes</a>
                                <a href="owner-dashboard.html" class="footer-link">List Your Property</a>
                                <a href="admin-dashboard.html" class="footer-link">Admin Panel</a>
                            </div>
                        </div>
                        <div>
                            <h4 class="footer-title">Company</h4>
                            <div class="footer-links">
                                <a href="#" class="footer-link">About Us</a>
                                <a href="#" class="footer-link">Careers</a>
                                <a href="#" class="footer-link">Contact</a>
                            </div>
                        </div>
                        <div>
                            <h4 class="footer-title">Legal</h4>
                            <div class="footer-links">
                                <a href="#" class="footer-link">Privacy Policy</a>
                                <a href="#" class="footer-link">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>© 2026 StayHub. All rights reserved.</p>
                        <p>Built with ❤️ for vacation rental management</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

function renderPropertyCards(props = properties) {
    const grid = document.getElementById('propertyGrid');
    if (!grid) return;

    if (props.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🏠</div>
                <h3 class="empty-state-title">No properties found</h3>
                <p class="empty-state-desc">Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = props.map(property => `
        <div class="property-card animate-slideUp" onclick="viewProperty(${property.id})">
            <div class="property-card-image">
                <div style="background: linear-gradient(135deg, #e0f2fe, #bae6fd); display: flex; align-items: center; justify-content: center; font-size: 4rem; height: 100%;">
                    ${property.images[0]}
                </div>
                ${getStatusBadge(property.status)}
            </div>
            <div class="property-card-content">
                <h3 class="property-card-title">${property.name}</h3>
                <p class="property-card-location">📍 ${property.location}</p>
                <div class="property-card-details">
                    <span>👥 ${property.guests} guests</span>
                    <span>🛏️ ${property.bedrooms} beds</span>
                    <span>🚿 ${property.bathrooms} baths</span>
                </div>
                <div class="property-card-footer">
                    <div class="property-card-price">
                        ${formatCurrency(property.nightlyRate)}<span>/night</span>
                    </div>
                    <button class="btn btn-sm btn-primary">View</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderStats() {
    const totalProperties = document.getElementById('totalProperties');
    const pendingRequests = document.getElementById('pendingRequests');
    const occupancyRate = document.getElementById('occupancyRate');
    const totalBookings = document.getElementById('totalBookings');

    if (totalProperties) totalProperties.textContent = properties.length;
    if (pendingRequests) pendingRequests.textContent = stayRequests.filter(r => r.status === 'pending').length;
    if (occupancyRate) occupancyRate.textContent = Math.round((bookings.filter(b => b.status === 'upcoming').length / properties.length * 100) + '%';
    if (totalBookings) totalBookings.textContent = bookings.length;
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (!taskList) return;

    taskList.innerHTML = tasks.map(task => {
        const property = properties.find(p => p.id === task.propertyId);
        return `
            <tr>
                <td>
                    <div class="font-medium">${task.title}</div>
                    <div class="text-sm text-muted">${property?.name}</div>
                </td>
                <td><span class="tag">${task.type}</span></td>
                <td>${task.assignedTo}</td>
                <td>${formatDate(task.dueDate)}</td>
                <td>${getTaskStatusBadge(task.status)}</td>
                <td>
                    <div class="flex gap-xs">
                        ${task.status === 'pending' ? `<button class="btn btn-sm btn-success" onclick="updateTaskStatus(${task.id}, 'in_progress')">Start</button>` : ''}
                        ${task.status === 'in_progress' ? `<button class="btn btn-sm btn-primary" onclick="updateTaskStatus(${task.id}, 'completed')">Complete</button>` : ''}
                        <button class="btn btn-sm btn-ghost">Edit</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function renderStayRequests() {
    const requestList = document.getElementById('requestList');
    if (!requestList) return;

    requestList.innerHTML = stayRequests.map(request => {
        const property = properties.find(p => p.id === request.propertyId);
        return `
            <tr>
                <td>
                    <div class="font-medium">${request.guestName}</div>
                    <div class="text-sm text-muted">${request.guestEmail}</div>
                </td>
                <td>
                    <div class="font-medium">${property?.name}</div>
                </td>
                <td>${formatDate(request.checkIn)} - ${formatDate(request.checkOut)}</td>
                <td>${request.guests} guests</td>
                <td>${formatCurrency(request.totalPrice)}</td>
                <td>${getRequestStatusBadge(request.status)}</td>
                <td>
                    ${request.status === 'pending' ? `
                        <div class="flex gap-xs">
                            <button class="btn btn-sm btn-success" onclick="updateRequestStatus(${request.id}, 'approved')">Approve</button>
                            <button class="btn btn-sm btn-error" onclick="updateRequestStatus(${request.id}, 'declined')">Decline</button>
                        </div>
                    ` : ''}
                </td>
            </tr>
        `;
    }).join('');
}

function renderCalendar(month, year) {
    const calendarGrid = document.getElementById('calendarGrid');
    if (!calendarGrid) return;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
    
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let html = dayNames.map(d => `<div class="calendar-day-header">${d}</div>`).join('');

    // Previous month days
    for (let i = 0; i < startDay; i++) {
        html += `<div class="calendar-day other-month"></div>`;
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isToday = date.toDateString() === new Date().toDateString();
        const statusClass = isToday ? 'today' : '';
        
        html += `
            <div class="calendar-day ${statusClass}" onclick="selectDate(${year}, ${month}, ${day})">
                ${day}
            </div>
        `;
    }

    calendarGrid.innerHTML = html;

    const calendarTitle = document.getElementById('calendarTitle');
    if (calendarTitle) {
        calendarTitle.textContent = firstDay.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
}

// ==================== ACTIONS ====================

function viewProperty(id) {
    sessionStorage.setItem('selectedProperty', id);
    window.location.href = 'property-details.html';
}

function updateTaskStatus(id, status) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.status = status;
        renderTasks();
    }
}

function updateRequestStatus(id, status) {
    const request = stayRequests.find(r => r.id === id);
    if (request) {
        request.status = status;
        renderStayRequests();
    }
}

function selectDate(year, month, day) {
    alert(`Selected: ${month + 1}/${day}/${year}`);
}

// ==================== FILTERS ====================

function filterProperties() {
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const status = document.getElementById('statusFilter')?.value || '';
    const location = document.getElementById('locationFilter')?.value || '';

    let filtered = properties.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search) || p.location.toLowerCase().includes(search);
        const matchesStatus = !status || p.status === status;
        const matchesLocation = !location || p.location.includes(location);
        return matchesSearch && matchesStatus && matchesLocation;
    });

    renderPropertyCards(filtered);
}

// ==================== MODALS ====================

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
    }
}

// ==================== INITIALIZATION ====================

function init() {
    renderHeader();
    renderSidebar();
    renderFooter();
    
    // Page-specific initialization
    if (document.getElementById('propertyGrid')) {
        renderPropertyCards();
    }
    
    if (document.getElementById('taskList')) {
        renderTasks();
    }
    
    if (document.getElementById('requestList')) {
        renderStayRequests();
    }
    
    if (document.getElementById('calendarGrid')) {
        const today = new Date();
        renderCalendar(today.getMonth(), today.getFullYear());
    }
    
    if (document.getElementById('totalProperties')) {
        renderStats();
    }

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);