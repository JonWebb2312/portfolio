document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("#main-nav ul");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", !isExpanded);
            nav.classList.toggle("visible");
        });
    } else {
        console.error("Hamburger button or navigation menu not found.");
    }
});