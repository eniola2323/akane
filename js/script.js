// =====================================================
// MOBILE SIDEBAR
// =====================================================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const sidebarLinks = document.querySelectorAll(".sidebar a");

// Make sure the required elements exist

if (menuBtn && sidebar && closeBtn && overlay) {
  // Open sidebar

  menuBtn.addEventListener("click", function () {
    sidebar.classList.add("show");

    overlay.classList.add("show");
  });

  // Close sidebar

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show");

    overlay.classList.remove("show");
  });

  // Close when clicking overlay

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("show");

    overlay.classList.remove("show");
  });

  // Close when clicking a sidebar link

  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sidebar.classList.remove("show");

      overlay.classList.remove("show");
    });
  });

  // Close with Escape

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      sidebar.classList.remove("show");

      overlay.classList.remove("show");
    }
  });
}
