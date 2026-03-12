const form = document.querySelector("#contactForm");
const popup = document.querySelector("#popup");
const closePopupBtn = document.querySelector("#closePopup");

const openPopup = () => popup.classList.add("active");
const closePopup = () => popup.classList.remove("active");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const params = new URLSearchParams(new FormData(form));
    await fetch(`/?${params}`);

    alert("Форма успішно відправлена!");
    form.reset();
});

document.querySelectorAll(".ticket-btn, #order")
    .forEach(btn => btn.addEventListener("click", (e) => {
        e.preventDefault();
        openPopup();
    }));

closePopupBtn.addEventListener("click", closePopup);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
});