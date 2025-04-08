document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-bottom, .hidden-top");
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target); // Animate once
        }
      });
    }, {
      threshold: 0.2
    });
  
    hiddenElements.forEach(el => observer.observe(el));
  });
  