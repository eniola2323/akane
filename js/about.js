const menuBtn =
    document.querySelector(".menu-btn");

const sidebar =
    document.querySelector(".sidebar");

const closeBtn =
    document.querySelector(".close-btn");

const overlay =
    document.querySelector(".overlay");

const sidebarLinks =
    document.querySelectorAll(".sidebar a");


function openSidebar() {

    sidebar.classList.add("show");

    overlay.classList.add("show");

}


function closeSidebar() {

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

}


menuBtn.addEventListener(
    "click",
    openSidebar
);


closeBtn.addEventListener(
    "click",
    closeSidebar
);


overlay.addEventListener(
    "click",
    closeSidebar
);


sidebarLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeSidebar
    );

});


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeSidebar();

        }

    }
);