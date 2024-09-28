const container = document.getElementById("container");
        
document.getElementById("addLabel").addEventListener("click", function() {

    // Create and append labels for each input
    addLabel("Enter Username", "username");
    addLabel("Enter Password", "password");
    addLabel("Confirm Password", "Confirmpassword");
});

function addLabel(labelText, inputId) {
    const label = document.createElement("label");
    label.innerText = labelText;
    label.setAttribute("for", inputId); 
    label.style.display = "block"; 
    
    const input = document.getElementById(inputId);
    container.insertBefore(label, input);
}