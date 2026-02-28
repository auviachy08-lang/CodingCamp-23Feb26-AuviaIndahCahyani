// Welcoming Prompt
function greetUser() {
    const name = prompt("Siapa nama Anda?", "");
    document.getElementById("display-name").innerText = name ? name : "Guest";
}
window.onload = greetUser;

// Form Logic
const form = document.getElementById("message-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Mapping Input ke Output
    const fields = ['name', 'email', 'phone', 'dob', 'msg'];
    fields.forEach(field => {
        const val = document.getElementById(`${field}-input`).value;
        document.getElementById(`res-${field}`).innerText = val;
    });

    // Gender manual
    const gender = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("res-gender").innerText = gender;

    // Time
    document.getElementById("current-time").innerText = "Current time : " + new Date().toString();

    alert("Data berhasil dikirim!");
    form.reset();
});