// Custom Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation logic
  if (!name || !email || !message) {
    feedback.textContent = "All fields are required.";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
    this.reset(); // Clear the form
  }
});

// Interactive Feature 1: Click Counter
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function () {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// Interactive Feature 2: Background Color Changer
document.getElementById("applyColor").addEventListener("click", function () {
  const color = document.getElementById("colorPicker").value;
  document.body.style.backgroundColor = color;
});