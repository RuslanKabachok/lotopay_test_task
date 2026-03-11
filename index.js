const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (e) {

    const name = document.querySelector("#name").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name.length < 2) {
        alert("Імʼя повинно містити мінімум 2 символи");
        e.preventDefault();
        return;
    }

    if (message.length < 10) {
        alert("Повідомлення повинно бути довше");
        e.preventDefault();
        return;
    }

});