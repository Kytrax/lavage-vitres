// Animation simple au chargement
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(
    ".service-card, .ba-card, .advantage"
  );

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "opacity .6s ease, transform .6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 + index * 80);
  });

});



// ANIMATION DU BOUTON

const buttons = document.querySelectorAll(
  ".primary-button, .secondary-button, .nav-button"
);

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });

});
