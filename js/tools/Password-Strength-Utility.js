function checkStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    const suggestions = document.getElementById('suggestions');

    let strength = 0;
    let suggestionList = [];

    if (password.length >= 8) strength++; // Length Check
    else suggestionList.push('Password should be at least 8 characters long.');

    if (/[A-Z]/.test(password)) strength++; // Uppercase Letter Check
    else suggestionList.push('Add at least one uppercase letter.');

    if (/[a-z]/.test(password)) strength++; // Lowercase Letter Check
    else suggestionList.push('Add at least one lowercase letter.');

    if (/[0-9]/.test(password)) strength++; // Number Check
    else suggestionList.push('Add at least one number.');

    if (/[\W_]/.test(password)) strength++; // Special Character Check
    else suggestionList.push('Add at least one special character.');

    updateStrengthBar(strength, strengthBar, strengthText);
    updateSuggestions(suggestionList, suggestions);
}

function updateStrengthBar(strength, strengthBar, strengthText) {
    const strengthLevels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
    const colors = ["#ff6b6b", "#ffb86b", "#f1fa8c", "#50fa7b", "#6bff95"];
    
    strengthBar.style.width = (strength / 5) * 100 + '%';
    strengthBar.style.backgroundColor = colors[strength - 1] || "#ff6b6b";
    strengthText.textContent = strengthLevels[strength - 1] || "Very Weak";
}

function updateSuggestions(suggestionList, suggestions) {
    suggestions.innerHTML = ''; // Clear previous suggestions
    suggestionList.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestions.appendChild(li);
    });
}
