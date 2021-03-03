
let questions = document.querySelectorAll(".questions");

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function(event) {
      //Toggle active class when clicked
      this.classList.toggle("active");
    });
  }