document.addEventListener("DOMContentLoaded", function () {

  const search = document.querySelector("input");
  const cards = document.querySelectorAll(".card");

  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  const buttons = document.querySelectorAll(".card button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      alert("Question papers will be available here soon!");
    });
  });

});
