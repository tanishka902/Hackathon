// Login modal functionality
function showLoginModal(role) {
    const modal = document.getElementById('roleModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="login-form">
            <h2><i class="fas fa-sign-in-alt"></i> ${role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
            <div class="login-inputs">
                <input type="email" id="loginEmail" placeholder="Email Address" required>
                <input type="password" id="loginPassword" placeholder="Password" required>
                <button onclick="doLogin('${role}')" class="btn-primary">Login</button>
            </div>
            <div class="demo-credentials">
                <p><strong>Demo Credentials:</strong></p>
                <p>Email: ${role}@heartbridge.org</p>
                <p>Password: ${role}123</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function doLogin(role) {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email === role + '@heartbridge.org' && password === role + '123') {
        window.location.href = role + '.html';
    } else {
        alert('Wrong credentials! Use: ' + role + '@heartbridge.org and password: ' + role + '123');
    }
}

// Role-specific modal content
const roleContent = {
    donor: {
        title: "Donor Dashboard",
        content: `
            <div class="role-dashboard donor-dashboard">
                <h2><i class="fas fa-gift"></i> Welcome, Generous Donor!</h2>
                <div class="dashboard-grid">
                    <div class="dashboard-card">
                        <h3><i class="fas fa-plus-circle"></i> List New Donation</h3>
                        <form class="donation-form">
                            <select required>
                                <option value="">Select Category</option>
                                <option value="food">Food & Beverages</option>
                                <option value="clothing">Clothing & Accessories</option>
                                <option value="medical">Medical Supplies</option>
                                <option value="shelter">Shelter Items</option>
                                <option value="other">Other Essentials</option>
                            </select>
                            <input type="text" placeholder="Item Description" required>
                            <input type="number" placeholder="Quantity" required>
                            <select required>
                                <option value="">Condition</option>
                                <option value="new">Brand New</option>
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                            </select>
                            <input type="text" placeholder="Pickup Location">
                            <button type="submit" class="btn-primary">List Donation</button>
                        </form>
                    </div>
                    <div class="dashboard-card">
                        <h3><i class="fas fa-chart-line"></i> Your Impact</h3>
                        <div class="impact-stats">
                            <div class="impact-item">
                                <div class="impact-number">47</div>
                                <div class="impact-label">Items Donated</div>
                            </div>
                            <div class="impact-item">
                                <div class="impact-number">23</div>
                                <div class="impact-label">Families Helped</div>
                            </div>
                            <div class="impact-item">
                                <div class="impact-number">156</div>
                                <div class="impact-label">Lives Touched</div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-card">
                        <h3><i class="fas fa-history"></i> Recent Donations</h3>
                        <div class="recent-donations">
                            <div class="donation-item">
                                <span class="item-name">Winter Coats (5)</span>
                                <span class="item-status delivered">Delivered</span>
                            </div>
                            <div class="donation-item">
                                <span class="item-name">Canned Food (20)</span>
                                <span class="item-status in-transit">In Transit</span>
                            </div>
                            <div class="donation-item">
                                <span class="item-name">Baby Formula (3)</span>
                                <span class="item-status pending">Pending Pickup</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    recipient: {
        title: "Recipient Portal",
        content: `
            <div class="role-dashboard recipient-dashboard">
                <h2><i class="fas fa-hand-holding-heart"></i> We're Here to Help</h2>
                <div class="dashboard-grid">
                    <div class="dashboard-card">
                        <h3><i class="fas fa-search"></i> Request Items</h3>
                        <form class="request-form">
                            <select required>
                                <option value="">What do you need?</option>
                                <option value="food">Food & Beverages</option>
                                <option value="clothing">Clothing</option>
                                <option value="medical">Medical Supplies</option>
                                <option value="shelter">Shelter Items</option>
                                <option value="baby">Baby Supplies</option>
                            </select>
                            <textarea placeholder="Describe your specific needs..." rows="3" required></textarea>
                            <select required>
                                <option value="">Urgency Level</option>
                                <option value="immediate">Immediate (24 hours)</option>
                                <option value="urgent">Urgent (3 days)</option>
                                <option value="normal">Normal (1 week)</option>
                            </select>
                            <input type="text" placeholder="Delivery Address" required>
                            <button type="submit" class="btn-primary">Submit Request</button>
                        </form>
                    </div>
                    <div class="dashboard-card">
                        <h3><i class="fas fa-truck"></i> Active Requests</h3>
                        <div class="active-requests">
                            <div class="request-item">
                                <div class="request-info">
                                    <span class="request-name">Winter Clothing</span>
                                    <span class="request-date">Requested 2 days ago</span>
                                </div>
                                <span class="request-status matched">Matched</span>
                            </div>
                            <div class="request-item">
                                <div class="request-info">
                                    <span class="request-name">Baby Formula</span>
                                    <span class="request-date">Requested 1 day ago</span>
                                </div>
                                <span class="request-status pending">Searching</span>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-card">
                        <h3><i class="fas fa-star"></i> Leave Feedback</h3>
                        <div class="feedback-section">
                            <p>Help us improve by sharing your experience</p>
                            <div class="rating-stars">
                                <i class="fas fa-star" data-rating="1"></i>
                                <i class="fas fa-star" data-rating="2"></i>
                                <i class="fas fa-star" data-rating="3"></i>
                                <i class="fas fa-star" data-rating="4"></i>
                                <i class="fas fa-star" data-rating="5"></i>
                            </div>
                            <textarea placeholder="Share your feedback..." rows="3"></textarea>
                            <button class="btn-secondary">Submit Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    admin: {
        title: "Admin Control Panel",
        content: `
            <div class="role-dashboard admin-dashboard">
                <h2><i class="fas fa-cog"></i> Platform Administration</h2>
                <div class="dashboard-grid">
                    <div class="dashboard-card">
                        <h3><i class="fas fa-plus"></i> Create New Drive</h3>
                        <form class="drive-form">
                            <input type="text" placeholder="Drive Name" required>
                            <select required>
                                <option value="">Drive Type</option>
                                <option value="emergency">Emergency Response</option>
                                <option value="community">Community Drive</option>
                                <option value="seasonal">Seasonal Campaign</option>
                            </select>
                            <input type="text" placeholder="Location/Region" required>
                            <textarea placeholder="Drive Description" rows="3" required></textarea>
                            <input type="date" placeholder="End Date" required>
                            <input type="number" placeholder="Target Goal" required>
                            <button type="submit" class="btn-primary">Launch Drive</button>
                        </form>
                    </div>
                    <div class="dashboard-card">
                        <h3><i class="fas fa-map-marker-alt"></i> Live Donation Locations</h3>
                        <div id="donationMap" class="donation-map">
                            <div class="map-container">
                                <div class="location-pin" style="top: 20%; left: 30%;">
                                    <i class="fas fa-map-pin"></i>
                                    <span class="location-tooltip">New York: 47 donations</span>
                                </div>
                                <div class="location-pin" style="top: 40%; left: 20%;">
                                    <i class="fas fa-map-pin"></i>
                                    <span class="location-tooltip">California: 89 donations</span>
                                </div>
                                <div class="location-pin" style="top: 60%; left: 70%;">
                                    <i class="fas fa-map-pin"></i>
                                    <span class="location-tooltip">Florida: 34 donations</span>
                                </div>
                                <div class="location-pin" style="top: 30%; left: 60%;">
                                    <i class="fas fa-map-pin"></i>
                                    <span class="location-tooltip">Texas: 67 donations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-card">
                        <h3><i class="fas fa-chart-line"></i> Donation Analytics</h3>
                        <div class="charts-container">
                            <canvas id="donationChart" width="300" height="200"></canvas>
                            <div class="chart-legend">
                                <div class="legend-item"><span class="color-box food"></span>Food: 45%</div>
                                <div class="legend-item"><span class="color-box clothing"></span>Clothing: 30%</div>
                                <div class="legend-item"><span class="color-box medical"></span>Medical: 15%</div>
                                <div class="legend-item"><span class="color-box other"></span>Other: 10%</div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-card">
                        <h3><i class="fas fa-exclamation-triangle"></i> Urgent Actions</h3>
                        <div class="urgent-actions">
                            <div class="action-item high">
                                <span>Hurricane Relief Drive needs verification</span>
                                <button class="btn-small">Review</button>
                            </div>
                            <div class="action-item medium">
                                <span>23 new donor applications pending</span>
                                <button class="btn-small">Process</button>
                            </div>
                            <div class="action-item low">
                                <span>Monthly transparency report due</span>
                                <button class="btn-small">Generate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// Modal functionality
function showRoleModal(role) {
    const modal = document.getElementById('roleModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = roleContent[role].content;
    modal.style.display = 'block';
    
    // Add event listeners for forms and interactive elements
    addModalEventListeners(role);
}

function closeModal() {
    document.getElementById('roleModal').style.display = 'none';
}

function addModalEventListeners(role) {
    // Rating stars functionality
    const stars = document.querySelectorAll('.rating-stars i');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = '#feca57';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });

    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(form, role);
        });
    });

    // Load existing data
    loadRoleData(role);

    // Action buttons
    const actionButtons = document.querySelectorAll('.btn-small');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.textContent = 'Processing...';
            this.disabled = true;
            setTimeout(() => {
                this.textContent = 'Completed';
                this.style.background = '#4ecdc4';
            }, 2000);
        });
    });
}

function handleFormSubmission(form, role) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    if (role === 'donor') {
        const donation = addDonation(data);
        updateDonationsList();
        alert('Thank you! Your donation has been listed and will be matched with recipients in need.');
    } else if (role === 'recipient') {
        const request = addRequest(data);
        updateRequestsList();
        alert('Your request has been submitted. We\'ll notify you when we find a match.');
    } else if (role === 'admin') {
        const drive = createDrive(data);
        updateDrivesList();
        alert('Drive created successfully!');
    }
    
    form.reset();
    closeModal();
}

function loadRoleData(role) {
    if (role === 'donor') {
        updateDonationsList();
        updateDonorStats();
    } else if (role === 'recipient') {
        updateRequestsList();
    } else if (role === 'admin') {
        updateAnalytics();
        updateDrivesList();
        drawDonationChart();
        updateLocationPins();
    }
}

function drawDonationChart() {
    const canvas = document.getElementById('donationChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    const data = [45, 30, 15, 10]; // Food, Clothing, Medical, Other
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    
    let currentAngle = 0;
    
    data.forEach((value, index) => {
        const sliceAngle = (value / 100) * 2 * Math.PI;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();
        
        currentAngle += sliceAngle;
    });
}

function updateLocationPins() {
    const pins = document.querySelectorAll('.location-pin');
    pins.forEach(pin => {
        pin.addEventListener('click', function() {
            const tooltip = this.querySelector('.location-tooltip');
            alert('Location Details: ' + tooltip.textContent);
        });
    });
}

function updateDonationsList() {
    const container = document.querySelector('.recent-donations');
    if (container && donations.length > 0) {
        container.innerHTML = donations.slice(-3).map(d => `
            <div class="donation-item">
                <span class="item-name">${d.category} - ${d.description}</span>
                <span class="item-status ${d.status}">${d.status}</span>
            </div>
        `).join('');
    }
}

function updateRequestsList() {
    const container = document.querySelector('.active-requests');
    if (container && requests.length > 0) {
        container.innerHTML = requests.slice(-2).map(r => `
            <div class="request-item">
                <div class="request-info">
                    <span class="request-name">${r.category}</span>
                    <span class="request-date">Requested ${new Date(r.dateRequested).toLocaleDateString()}</span>
                </div>
                <span class="request-status ${r.status}">${r.status}</span>
            </div>
        `).join('');
    }
}

function updateAnalytics() {
    const analytics = getAnalytics();
    const metrics = document.querySelectorAll('.metric-value');
    if (metrics.length >= 4) {
        metrics[0].textContent = analytics.totalDonations;
        metrics[1].textContent = analytics.totalRequests;
        metrics[2].textContent = analytics.successRate + '%';
        metrics[3].textContent = '$' + (analytics.totalDonations * 150);
    }
}

function updateDrivesList() {
    // Update drives display if needed
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Emergency banner interaction
document.querySelector('.emergency-btn').addEventListener('click', function() {
    showRoleModal('donor');
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('roleModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Animate statistics on scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent.replace(/,/g, ''));
                animateNumber(entry.target, target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    animateStats();
    
    // Add loading animation to drive cards
    const driveCards = document.querySelectorAll('.drive-card');
    driveCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add dynamic progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.transition = 'width 2s ease';
                    entry.target.style.width = width;
                }, 100);
            }
        });
    });

    progressBars.forEach(bar => observer.observe(bar));
}

// Initialize progress bar animations
document.addEventListener('DOMContentLoaded', animateProgressBars);
