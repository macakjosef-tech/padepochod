// COUNTDOWN
const targetDate = new Date("2026-04-26T07:00:00");

setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "teď!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").textContent =
        `${days} dní • ${hours} h • ${minutes} min`;
}, 1000);


// FORMULÁŘ – ODESLÁNÍ DO GOOGLE SCRIPTU
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbxqdClfSybz-2IKisid7AntBQa8pUH_fIS7idXZxo1HbJ6MTldQXzqYrQLf8sxETfl_vg/exec";

    const formData = new FormData(form);

    await fetch(url, {
        method: "POST",
        body: formData
    });

    message.style.display = "block";
    form.reset();
});
