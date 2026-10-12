const button = document.getElementById("contactButton");
const message = document.getElementById("message");

const visitorMessage = "Hello! Thanks for exploring my projects.";
button.addEventListener("click", function () {
    message.textContent = visitorMessage;
});
