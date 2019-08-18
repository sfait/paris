function showHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const mainHeader  = document.querySelector(".main-header-subpage");
    const menu = document.querySelector(".subpage-menu");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        menu.classList.toggle("show-menu");
        mainHeader.classList.toggle("hide-header");
    })
}

const init = () => {
    showHamburgerMenu();
};

document.addEventListener("DOMContentLoaded", init);
