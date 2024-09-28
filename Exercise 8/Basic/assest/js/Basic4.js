const username = document.getElementById("username");
const password = document.getElementById("password");
const Confirmpassword = document.getElementById("Confirmpassword");
const register = document.getElementById("register");

// Event listeners for input changes
username.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
Confirmpassword.addEventListener("input", validateForm);

// Validate on input change
function validateForm() {
    clearErrors();

    let isValid = true;

    if (username.value.trim() === "") {
        appendErrorMessage("Username is required.", username);
        isValid = false;
    }

    if (password.value.trim() === "" || password.value.length < 6) {
        appendErrorMessage("Password must be at least 6 characters.", password);
        isValid = false;
    }

    if (Confirmpassword.value !== password.value) {
        appendErrorMessage("Passwords do not match.", Confirmpassword);
        isValid = false;
    }

    // Enable or disable the register button
    register.disabled = !isValid;
}

// Clear previous error messages
function clearErrors() {
    const errorLabels = document.querySelectorAll('.error');
    errorLabels.forEach(label => label.remove());
    document.getElementById("result").innerText = "";
}

// Append error message
function appendErrorMessage(errorTxt, input) {
    const errorLabel = document.createElement("label");
    errorLabel.innerText = errorTxt;
    errorLabel.className = "error";
    input.parentNode.insertBefore(errorLabel, input.nextSibling);
}

// Initial validation check
validateForm();