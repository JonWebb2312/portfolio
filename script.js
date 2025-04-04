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

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const closeButton = document.createElement("button");
    closeButton.classList.add("lightbox-close");
    closeButton.innerHTML = "&times;";
    lightbox.appendChild(closeButton);

    const img = document.createElement("img");
    lightbox.appendChild(img);

    const links = document.querySelectorAll('a[data-lightbox="skills"]');
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            img.src = link.href;
            lightbox.classList.add("visible");
        });
    });

    closeButton.addEventListener("click", () => {
        lightbox.classList.remove("visible");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });
});