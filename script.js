const frame = document.getElementById("bg-frame");

const totalFrames = 240;
const framePath = (index) =>
  `images/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / docHeight;

  const frameIndex = Math.min(
    totalFrames,
    Math.max(1, Math.floor(scrollFraction * totalFrames))
  );

  frame.src = framePath(frameIndex);
});
