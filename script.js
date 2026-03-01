document.addEventListener("DOMContentLoaded", function () {

    // 🌗 Dark Mode Toggle
    function toggleMode() {
        document.body.classList.toggle("light-mode");
    }
    window.toggleMode = toggleMode; // make it usable in HTML


    // ✨ Typing Animation
    const text = ["Frontend Developer", "Backend Developer", "Freelancer"];
    let i = 0;
    let j = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        currentText = text[i];

        let typingElement = document.getElementById("typing");
        if (!typingElement) return; // safety check

        if (!isDeleting) {
            typingElement.innerHTML = currentText.substring(0, j++);
            if (j > currentText.length) {
                isDeleting = true;
                setTimeout(type, 1000);
                return;
            }
        } else {
            typingElement.innerHTML = currentText.substring(0, j--);
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % text.length;
            }
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();


    // 🎬 Scroll Animation
const elements = document.querySelectorAll(".fade-in");

function revealOnScroll() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        } else {
            el.classList.remove("show"); // optional: remove when scrolling back up
        }
    });
}

// Run once on load so sections already in view appear
revealOnScroll();

// Run again on scroll
window.addEventListener("scroll", revealOnScroll);

});