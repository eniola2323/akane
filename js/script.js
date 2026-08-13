const menuBtn= document.querySelector( ".menu-btn");
 const sidebar= document.querySelector(".sidebar");
 const closeBtn= document.querySelector(".close-btn");
 const overlay= document.querySelector(".overlay");
 const sidebarLinks= document.querySelectorALL(".sidebar a");
 function opensidebar() {
     sidebar.classList.add("show");
     overlay.classList.add("show");
 }
 function closebar() {
     sidebar.classList.remove("show");
     overlay.classList.remove("show");
 }
 menuBtn.addEventListener("click",openSidebar);
 menuBtn.addEventListener("click",closeSidebar);
 menuBtn.addEventListener("click",closeSidebar);
 sidebarLinks.forEach(link=>  {
     link.addEventListner( "click", closeSidebar);
 });
 //close sidebar when pressing the escape key
 docunment.addEventListener("keydown", (event) => {
     if (event .key=== "Escape") {
         closeSidebar();
     }
 });