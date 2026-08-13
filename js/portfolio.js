// =========================================
// MOBILE SIDEBAR
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

function openSidebar() {
  sidebar.classList.add("show");
  overlay.classList.add("show");
}

function closeSidebar() {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
}

menuBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// Close sidebar when a link is clicked

const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

// Close sidebar with Escape

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSidebar();
  }
});

// =========================================
// PORTFOLIO FILTERS
// =========================================

const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button

    this.classList.add("active");

    // Get selected category

    const filter = this.getAttribute("data-filter");

    // Show/hide projects

    projects.forEach((project) => {
      if (filter === "all") {
        project.style.display = "";
      } else if (project.classList.contains(filter)) {
        project.style.display = "";
      } else {
        project.style.display = "none";
      }
    });
  });
});
