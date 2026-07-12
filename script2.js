document.addEventListener("DOMContentLoaded", function () {

  const searchBox = document.querySelector("input");

  if (searchBox) {
    searchBox.addEventListener("keyup", function () {
      let value = this.value.toLowerCase();
      let cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  const buttons = document.querySelectorAll(".card button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      alert("Question papers will be uploaded soon!");
    });
  });

});
