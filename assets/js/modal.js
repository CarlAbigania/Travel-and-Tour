function showLogin() {
    document.getElementById('login-modal').classList.add('active');
    document.getElementById('register-modal').classList.remove('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function showRegister() {
    document.getElementById('register-modal').classList.add('active');
    document.getElementById('login-modal').classList.remove('active');
    document.body.style.overflow = 'hidden';
}

function closeModals() {
    document.getElementById('login-modal').classList.remove('active');
    document.getElementById('register-modal').classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModals();
    }
}

// Handle login validation in modal
function validateLogin() {
    var username = document.getElementById("modal-username").value;
    var password = document.getElementById("modal-password").value;

    if (username === "Cravenggo05" && password === "Secret") {
        alert("Login Successful!");
        closeModals();
        // Redirect or update UI
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Handle register validation in modal
function validateRegister(event) {
    // event.preventDefault(); // Uncomment if using actual submit
    var name = document.getElementById("reg-name").value;
    // ... add more validation if needed
    alert("Registration Successful!");
    showLogin();
    return false;
}
