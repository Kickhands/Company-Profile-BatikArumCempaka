// Navbar hide/show on scroll
let lastScroll = 0;
window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});
// Scroll to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};
function topFunction() {
    document.documentElement.scrollTop = 0;
}

//Ketik
var typed = new Typed(".auto-typed", {
  strings: ["Good", "Excellent", "Perfect"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

//Scroll muncul satu persatu
window.addEventListener("scroll", muncul);
function muncul() {
  let elements = document.querySelectorAll(".naik");
  for (let i = 0; i < elements.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 5;

    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    } else {
      elements[i].classList.remove("tampil");
    }
  }
}

const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberBand");
  })
);
