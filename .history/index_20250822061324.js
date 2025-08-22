document.addEventListener("DOMContentLoaded", () => {
  // кореневий елемент слайдера в цій секції
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
    index = (i + count) % count; // циклічно
    render();
  };

  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));

  // свайп (тач/миша)
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
