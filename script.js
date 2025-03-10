document.addEventListener("DOMContentLoaded", function () {
    // Add 'loaded' class to the body after the initial load
    document.body.classList.add("loaded");

    // Intersection Observer for revealing category cards
    const cards = document.querySelectorAll(".custom-card");
    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach((card) => cardObserver.observe(card));

    // Mobile menu animation
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.addEventListener("show.bs.collapse", function () {
        this.style.transform = "translateY(-20px)";
        this.style.opacity = "0";
        setTimeout(() => {
            this.style.transform = "translateY(0)";
            this.style.opacity = "1";
        }, 50);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSections = document.querySelectorAll(".about-content");
    const contactSection = document.querySelector(".contact-us");
    const contactItems = document.querySelectorAll(".reveal-pop");
    const contactForm = document.querySelector(".contact-form");
    const footer = document.querySelector("footer");

    function revealSections() {
        // Reveal 'About' sections
        aboutSections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });

        // Intersection Observer for 'Contact Us' section
        const contactObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        contactSection.classList.add("reveal");
                        contactItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add("reveal-pop");
                            }, index * 150);
                        });
                        contactForm.classList.add("reveal-slide-right");
                    }
                });
            },
            { threshold: 0.2, rootMargin: "0px" }
        );

        contactObserver.observe(contactSection);

        // Reveal footer when scrolled into view
        if (footer.getBoundingClientRect().top < window.innerHeight * 0.8) {
            footer.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
