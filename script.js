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

  faqLink.addEventListener("click", function (event) {
    event.preventDefault();
    faqSection.style.display = "block";
    setTimeout(() => {
      faqSection.classList.add("show");
    }, 10);
    faqSection.scrollIntoView({ behavior: "smooth" });
  });

  toggleFaqButton.addEventListener("click", function () {
    if (!faqSection.classList.contains("show")) {
      faqSection.style.display = "block";
      setTimeout(() => {
        faqSection.classList.add("show");
      }, 10);
      toggleFaqButton.textContent = "Hide FAQ";
    } else {
      faqSection.classList.remove("show");
      faqSection.classList.add("hide"); // Add this line
      setTimeout(() => {
        faqSection.style.display = "none";
        faqSection.classList.remove("hide"); // Remove this line after animation
      }, 600); // Matches the duration of the fade-out transition
      toggleFaqButton.textContent = "Show FAQ";
    }
  });

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

  imageOverlay.addEventListener("click", function (event) {
    if (event.target === imageOverlay) {
      imageOverlay.classList.remove("active");
    }
  });

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isVisible = answer.classList.contains("show");
      answer.classList.toggle("show", !isVisible);
      answer.style.maxHeight = isVisible ? null : answer.scrollHeight + "px";
    });
  });

  const contactForm = document.getElementById("contact-form");
  const notification = document.getElementById("notification");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    notification.classList.add("show");

    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);

    contactForm.reset();
  });
});
