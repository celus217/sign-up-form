const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const pass_label = document.querySelector('label[for="password"]');

function passValidity() {
  if (password.value != confirm_password.value) {
    pass_label.setAttribute("isvalid", "false")
    password.setCustomValidity("Invalid input. Please write the same password on both fields")
    confirm_password.setCustomValidity("Invalid input. Please write the same password on both fields")
  } else {
    pass_label.setAttribute("isvalid", "true")
    password.setCustomValidity("")
    confirm_password.setCustomValidity("")
  }
}

password.addEventListener("input", passValidity);
confirm_password.addEventListener("input", passValidity);
