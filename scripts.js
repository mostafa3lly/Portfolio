// Initialize AOS for animations on scroll
AOS.init({
  duration: 1200,
});

// Smooth scrolling for anchor links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Isotope Filtering
$(document).ready(function () {
  $(".portfolio-items").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $(".portfolio-filters button").click(function () {
    var filterValue = $(this).attr("data-filter");
    $(".portfolio-items").isotope({ filter: filterValue });
  });
});

// Modal Functionality
function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// EmailJS Setup for Contact Form
(function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function () {
        alert("Message Sent Successfully!");
      },
      function (error) {
        alert("Failed to Send Message, Please Try Again.");
      }
    );
  });
