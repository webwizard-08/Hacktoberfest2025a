document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".profile-card");

  const maxTilt = 15;

  card.addEventListener("mousemove", (e) => {
    const cardRect = card.getBoundingClientRect();

    const mouseX = e.clientX - cardRect.left - cardRect.width / 2;
    const mouseY = e.clientY - cardRect.top - cardRect.height / 2;

    const rotateY = (mouseX / (cardRect.width / 2)) * maxTilt;
    const rotateX = -1 * (mouseY / (cardRect.height / 2)) * maxTilt;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.transition = "transform 0.1s linear";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
  });
});
