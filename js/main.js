document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var emailInput = document.getElementById("emailInput");
    var validationMessage = document.getElementById("validationMessage");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value)) {
      validationMessage.style.display = "none";
      alert("Form submitted successfully!");
    } else {
      validationMessage.style.display = "block";
    }
  });
