const emailForm = document.getElementById('emailForm');
const emailInput = document.querySelector('.email');

emailForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const emailValue = emailInput.value.trim();
    const isValidEmail = validateEmail(emailValue);
    const errorMessage = document.querySelector(".error-message")

    if (!isValidEmail) {
        emailInput.classList.add("icon-error")
        errorMessage.style.display = "block";
    }
})

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}