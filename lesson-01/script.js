
const button = document.getElementById("contactButton");
const message = document.getElementById("message");

let clickCount = 0;

button.addEventListener("click", function () {
    clickCount = clickCount + 1;

    message.textContent =
        "You clicked Contact Me " + clickCount + " times!";
});
