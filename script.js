document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('header nav');

    // Toggle navigation on menu icon click
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // toggle icon shape
    });

    // Close nav when a link is clicked (mobile UX)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".portfolio-filters button");
    const portfolioItems = document.querySelectorAll(".portfolio-box");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Set active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const filter = button.getAttribute("data-filter");
  
        portfolioItems.forEach(item => {
          const category = item.getAttribute("data-category");
  
          if (filter === "all" || category === filter) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  });

  const availability = document.getElementById('availability');
const isAvailable = true; // set to false when unavailable

if (!isAvailable) {
    availability.textContent = 'Not Available';
    availability.classList.remove('available');
    availability.classList.add('busy');
}
