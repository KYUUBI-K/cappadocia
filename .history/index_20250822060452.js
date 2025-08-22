// ./js/about-slider.js
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("aboutSlider");
  if (!root) return; // секції може не бути на деяких сторінках

  const track = root.querySelector(".about-slides");
  const slides = Array.from(root.querySelectorAll(".about-slide"));
  const prev = root.querySelector(".about-prev");
  const next = root.querySelector(".about-next");

  let index = 0;

  const render = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  const go = (i) => {
    index = (i + slides.length) % slides.length; // циклічно
    render();
  };

  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));

  render(); // стартове позиціонування
});
