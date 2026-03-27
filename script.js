// Typing effect for role rotation
const roles = ["Web Developer", "UI/UX Creator", "Motion Designer", "Frontend Artist"];
let roleIndex = 0;
const typedSpan = document.getElementById("typed-text");

function updateRole() {
    typedSpan.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}
updateRole();
setInterval(updateRole, 2200);

// Form submission handler
const form = document.getElementById('contactForm');
const feedbackDiv = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        feedbackDiv.innerHTML = '<span style="color:#ffb4a2;"><i class="fas fa-exclamation-circle"></i> Please fill in all fields.</span>';
        setTimeout(() => { feedbackDiv.innerHTML = ''; }, 2800);
        return;
    }
    // Simulate success
    feedbackDiv.innerHTML = '<span style="color:#9effb4;"><i class="fas fa-check-circle"></i> Thanks, ' + name + '! Sanjeeb will reach out soon. ✨</span>';
    form.reset();
    setTimeout(() => {
        feedbackDiv.innerHTML = '';
    }, 4000);
});

// Smooth scroll for anchor links
document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Optional: update footer year dynamically
const footerYear = document.querySelector('footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}
