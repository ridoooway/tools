// Function to convert binary to decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

document.getElementById("convertToDecimalButton").addEventListener("click", function () {
    const input = document.getElementById("binaryInput").value.trim();
    const output = document.getElementById("decimalOutput");
    const copyDecimalButton = document.getElementById("copyDecimalButton");

    if (input) {
        try {
            // Remove spaces and validate binary input
            const binary = input.replace(/\s+/g, '');
            if (/^[01]+$/.test(binary)) {
                const decimal = binaryToDecimal(binary);
                output.textContent = decimal;
                copyDecimalButton.style.display = "block"; // Show copy button
            } else {
                output.textContent = "Invalid binary input.";
                copyDecimalButton.style.display = "none"; // Hide copy button on error
            }
        } catch (error) {
            output.textContent = "Error in conversion.";
            copyDecimalButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter binary code to convert.";
        copyDecimalButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyDecimalButton").addEventListener("click", function () {
    const output = document.getElementById("decimalOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Decimal number copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
