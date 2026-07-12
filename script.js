document.addEventListener("DOMContentLoaded", () => {
  console.log("Question Paper Hub Loaded!");

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert("Question papers will be added here soon!");
    });
  });
});
