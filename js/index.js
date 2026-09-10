const users = [
    { username: "admin", password: "admin123" },
    { username: "user1", password: "password1" }
]

function authenticate(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
}