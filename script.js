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

document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("theme-switcher");

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeSwitcher.value = savedTheme;
    }

    // Listen for theme changes
    themeSwitcher.addEventListener("change", (e) => {
        const selectedTheme = e.target.value;
        document.documentElement.setAttribute("data-theme", selectedTheme);
        localStorage.setItem("theme", selectedTheme); // Save theme to localStorage
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        thankYouMessage.style.display = "block"; // Show the thank you message
        contactForm.reset(); // Optionally reset the form fields
    });
});