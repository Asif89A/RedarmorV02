function showMessage() {
    alert("Welcome to RedarmorV02! Stay anonymous, stay secure.");
}

// Hacking Terminal Logic
const terminalInput = document.getElementById("terminal-input");

terminalInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const command = terminalInput.value.toLowerCase();
        terminalInput.value = "";

        let response = "> Unknown command. Type 'help' for options.";
        if (command === "help") {
            response = "> Available commands: 'whoami', 'contact', 'projects'";
        } else if (command === "whoami") {
            response = "> You are a visitor of RedarmorV02, an elite hacking group.";
        } else if (command === "contact") {
            response = "> Reach us at: contact@redarmorv02.com";
        } else if (command === "projects") {
            response = "> Check our GitHub for open-source security tools.";
        }

        document.querySelector(".terminal-text").innerText = response;
    }
});
