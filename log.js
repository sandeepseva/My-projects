function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (username === "" || password === "") {
    errorMessage.textContent = "Username and password cannot be empty.";
    return false;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters.";
    return false;
  }

  errorMessage.textContent = ""; // Clear error message
  alert("Login successful!"); // For demo purposes, shows an alert on success
  return true;
}
