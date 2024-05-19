document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const faqLink = document.getElementById("faq-link");
  const faqSection = document.querySelector(".faq");
  const toggleFaqButton = document.getElementById("toggle-faq");

  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
  // Function to handle fade-in and fade-out for sections
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        entry.target.classList.remove("fade-out");
      } else {
        entry.target.classList.add("fade-out");
        entry.target.classList.remove("fade-in-visible");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Show FAQ section when FAQ link is clicked
  faqLink.addEventListener("click", function (event) {
    event.preventDefault();
    faqSection.style.display = "block";
    setTimeout(() => {
      faqSection.classList.add("show");
    }, 10);
    faqSection.scrollIntoView({ behavior: "smooth" });
  });

  // Toggle FAQ section visibility
  toggleFaqButton.addEventListener("click", function () {
    if (!faqSection.classList.contains("show")) {
      faqSection.style.display = "block";
      setTimeout(() => {
        faqSection.classList.add("show");
      }, 10);
      toggleFaqButton.textContent = "Hide FAQ";
    } else {
      faqSection.classList.remove("show");
      setTimeout(() => {
        faqSection.style.display = "none";
      }, 600); // Matches the duration of the fade-out transition
      toggleFaqButton.textContent = "Hide FAQ";
    }
  });

  // Other existing JavaScript code...

  const portfolioImages = document.querySelectorAll(".portfolio-img");
  const imageOverlay = document.getElementById("image-overlay");
  const overlayImage = document.querySelector(".overlay-img");
  const closeButton = document.querySelector(".close-btn");

  portfolioImages.forEach((image) => {
    image.addEventListener("click", function () {
      overlayImage.src = this.src;
      imageOverlay.classList.add("active");
    });
  });

  closeButton.addEventListener("click", function () {
    imageOverlay.classList.remove("active");
  });

  // Close the overlay when clicking outside the image
  imageOverlay.addEventListener("click", function (event) {
    if (event.target === imageOverlay) {
      imageOverlay.classList.remove("active");
    }
  });

  // FAQ collapsible functionality
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      this.classList.toggle("active");
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });

  // Handle form submission and show notification
  const contactForm = document.getElementById("contact-form");
  const notification = document.getElementById("notification");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the notification
    notification.classList.add("show");

    // Hide the notification after 3 seconds
    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);

    // Optionally, you can reset the form fields here if needed
    contactForm.reset();
  });
});
