document.getElementById("validate").addEventListener("click", function() {
   
    // Clear previous error messages
    

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("Confirmpassword");

    // Validate each input
    let isValid = true;

    isValid &= validate("Username is required.", username);
    isValid &= validate("Password must be at least 6 characters.", password);
    isValid &= validateConfirmPassword(password, confirmPassword);

    if (isValid) {
        document.getElementById("result").innerText = "All inputs are valid!";
    }
});

function validate(errorTxt, input) {
    if (input.value.trim() === "") {
        appendErrorMessage(errorTxt, input);
        return false; // Invalid input
    }
    return true; // Valid input
}

function validateConfirmPassword(passwordInput, confirmPasswordInput) {
    if (confirmPasswordInput.value !== passwordInput.value) {
        appendErrorMessage("Passwords do not match.", confirmPasswordInput);
        return false; // Invalid input
    }
    return true; // Valid input
}

function appendErrorMessage(errorTxt, input) {
    const errorLabel = document.createElement("label");
    errorLabel.innerText = errorTxt;
    errorLabel.className = "error"; // Add a class for styling
    input.parentNode.insertBefore(errorLabel, input.nextSibling); // Insert after the input
}