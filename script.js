document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Save user details to local storage (for simplicity)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    alert("Sign-up successful! Redirecting to Sign-In page...");
    window.location.href = "signin.html"; // Redirect to Sign-In page
});
/*
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert("Login successful! Redirecting to the main website...");
        window.location.href = "index.html"; // Redirect to main website
    } else {
        alert("Invalid username or password!");
    }
}); */

document.getElementById('signin-form').addEventListener('submitt', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    // Save user details to local storage (for simplicity)
    localStorage.setItem('user', JSON.stringify({ username, password }));

    alert("Sign-in successful! Redirecting to home page...");
    window.location.href = "newindex.html"; // Redirect to Sign-In page
});