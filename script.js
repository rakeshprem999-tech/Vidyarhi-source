const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value.trim();

  // Simulated authentication flag
  let auth = true;

  if (auth) {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Fake authentication
    if (username === "student" && password === "1234") {
      alert(`Welcome back, ${username}! Redirecting you to Vidhyarthi...`);
      
      // ✅ Correct redirect
      window.location.href = "pages/main.html";
    } else {
      alert("Invalid username or password. Try again!");
    }
  }
});
