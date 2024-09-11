// Function to convert decimal to binary
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

document.getElementById("convertToBinaryButton").addEventListener("click", function () {
    const input = document.getElementById("decimalInput").value.trim();
    const output = document.getElementById("binaryOutput");
    const copyBinaryButton = document.getElementById("copyBinaryButton");

    if (input) {
        const decimal = parseInt(input, 10);
        if (!isNaN(decimal) && decimal >= 0) {
            const binary = decimalToBinary(decimal);
            output.textContent = binary;
            copyBinaryButton.style.display = "block"; // Show copy button
        } else {
            output.textContent = "Invalid decimal input.";
            copyBinaryButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter a decimal number to convert.";
        copyBinaryButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyBinaryButton").addEventListener("click", function () {
    const output = document.getElementById("binaryOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Binary number copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
