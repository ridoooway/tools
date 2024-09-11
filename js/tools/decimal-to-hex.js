// Function to convert decimal to HEX
function decimalToHex(decimal) {
    return decimal.toString(16).toUpperCase();
}

document.getElementById("convertToHexButton").addEventListener("click", function () {
    const input = document.getElementById("decimalInput").value.trim();
    const output = document.getElementById("hexOutput");
    const copyHexButton = document.getElementById("copyHexButton");

    if (input) {
        const decimal = parseInt(input, 10);
        if (!isNaN(decimal) && decimal >= 0) {
            const hex = decimalToHex(decimal);
            output.textContent = hex;
            copyHexButton.style.display = "block"; // Show copy button
        } else {
            output.textContent = "Invalid decimal input.";
            copyHexButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter a decimal number to convert.";
        copyHexButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyHexButton").addEventListener("click", function () {
    const output = document.getElementById("hexOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("HEX code copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
