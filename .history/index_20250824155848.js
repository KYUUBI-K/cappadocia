document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".route-slider, .about-slider");

  sliders.forEach((slider) => {
    const slidesContainer = slider.querySelector(".slides");
    const slides = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let currentIndex = 0;

    function updateSlide() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateSlide();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      updateSlide();
    });
  });
});
