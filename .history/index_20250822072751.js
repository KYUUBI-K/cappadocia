document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".about .about-slider");
  if (!root) return;

  const track = root.querySelector(".slides");
  const slides = Array.from(root.querySelectorAll(".slide"));
  const prev = root.querySelector(".prev");
  const next = root.querySelector(".next");

  let index = 0;
  const count = slides.length;

  const render = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  const go = (i) => {
    index = (i + count) % count;
    render();
  };

  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));

  let startX = null,
    isDown = false;
  root.addEventListener("pointerdown", (e) => {
    isDown = true;
    startX = e.clientX;
  });
  root.addEventListener("pointerup", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 50) go(dx > 0 ? index - 1 : index + 1);
    isDown = false;
  });
  root.addEventListener("pointerleave", () => {
    isDown = false;
  });

  render();
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".route-slider");
  const slides = slider.querySelector(".slides");
  const slide = slider.querySelectorAll(".route-slide");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    if (i < 0) {
      index = slide.length - 1;
    } else if (i >= slide.length) {
      index = 0;
    } else {
      index = i;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
  });

  showSlide(index);
});
