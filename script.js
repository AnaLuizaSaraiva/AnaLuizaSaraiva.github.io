document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].style.display = "none";

        currentSlide++;
        if (currentSlide === slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].style.display = "block";
    }, 5000);
});
