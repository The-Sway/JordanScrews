// TYPEWRITER EFFECT
const text = "Crafting interactive, performant, and beautiful web experiences.";
const taglineElement = document.querySelector(".tagline");
taglineElement.classList.add("typewriter");

let i = 0;
function typeWriter() {
    if (i < text.length) {
        taglineElement.textContent = text.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

// SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
