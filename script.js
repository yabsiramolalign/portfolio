// Simple client-side form validation message
document.getElementById("contact-form").addEventListener("submit", function (e) {
  alert("Thank you for your message! I'll get back to you soon.");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});