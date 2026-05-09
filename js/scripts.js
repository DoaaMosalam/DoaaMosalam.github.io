/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

window.addEventListener("DOMContentLoaded", () => {
    const yearNode = document.getElementById("currentYear");
    if (yearNode) {
        yearNode.textContent = String(new Date().getFullYear());
    }

    const revealNodes = document.querySelectorAll("[data-reveal]");
    if (!revealNodes.length) {
        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    revealNodes.forEach((node, index) => {
        node.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
        revealObserver.observe(node);
    });
});
