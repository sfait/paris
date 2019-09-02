function showHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    const handleClick = () => {
        hamburger.classList.toggle("hamburger-active");
        menu.classList.toggle("menu-active");
    }

    hamburger.addEventListener("click", handleClick);
}

const init = () => {
    showHamburgerMenu();
};

document.addEventListener("DOMContentLoaded", init);
