// Contact form validation
const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const message = document.getElementById("message");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  emailError.textContent = "";
  messageError.textContent = "";
  email.classList.remove("input-error");
  message.classList.remove("input-error");

  if (!email.value.includes("@") || !email.value.includes(".")) {
    emailError.textContent = "Please enter a valid email.";
    email.classList.add("input-error");
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    message.classList.add("input-error");
    valid = false;
  }

  if (valid) {
    alert("Thank you! Your message has been sent.");
    form.reset();
  }
});

// Quiz logic
function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === "Brazil") {
    result.textContent = "Correct! Brazil is famous for its coffee.";
    result.style.color = "green";
  } else {
    result.textContent = "Oops! Try again.";
    result.style.color = "red";
  }
}

// Connect buttons to quiz after page loads
document.addEventListener("DOMContentLoaded", function () {
  const brazilBtn = document.getElementById("btnBrazil");
  const japanBtn = document.getElementById("btnJapan");

  if (brazilBtn && japanBtn) {
    brazilBtn.addEventListener("click", () => checkAnswer("Brazil"));
    japanBtn.addEventListener("click", () => checkAnswer("Japan"));
  }
});