const button = document.getElementById("contactButton");
const message = document.getElementById("message");

function showMessage() {
    message.textContent = "Welcome to Pujitha's portfolio!";
}

button.addEventListener("click", showMessage);
