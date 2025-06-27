document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  let valid = true;

  document.querySelectorAll('.error').forEach(el => el.innerText = "");

  if (name.length < 5) {
    document.getElementById("nameError").innerText = "Name must be at least 5 characters.";
    valid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  }

  if (phone.length !== 10 || phone === "1234567890") {
    document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
    valid = false;
  }

  if (password.length < 8 || password.toLowerCase() === "password" || password === name) {
    document.getElementById("passwordError").innerText = "Password is weak or not allowed.";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmError").innerText = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});
