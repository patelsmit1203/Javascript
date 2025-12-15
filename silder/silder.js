let index = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;

let autoSlide = setInterval(nextSlide, 3000);

function showSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}

document.getElementById("next").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        index = dot.getAttribute("data-index");
        showSlide();
        resetAutoSlide();
    });
});

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}
