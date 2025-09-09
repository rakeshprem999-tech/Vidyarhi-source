const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Simulate login success with a friendly message
  alert(`Welcome back, ${username}! Redirecting you to Vidhyarthi...`);
  // Here you would typically handle authentication and redirect
});