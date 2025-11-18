const navbar = document.querySelector('.navbar');
const scrollBtn = document.getElementById('myBtn');
let lastScroll = 0;

function handleNavbar() {
    const currentScroll = window.scrollY;
    if (!navbar) return;
    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
}

function toggleScrollButton() {
    if (!scrollBtn) return;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.naik');
    if (!elements.length) return;
    const viewportHeight = window.innerHeight;
    elements.forEach((el) => {
        const rectTop = el.getBoundingClientRect().top;
        if (rectTop < viewportHeight - 5) {
            el.classList.add('tampil');
        } else {
            el.classList.remove('tampil');
        }
    });
}

window.addEventListener('scroll', () => {
    handleNavbar();
    toggleScrollButton();
    revealOnScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    toggleScrollButton();
    revealOnScroll();
});

window.topFunction = function () {
    document.documentElement.scrollTop = 0;
};
