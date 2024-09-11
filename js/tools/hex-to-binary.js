// Function to convert hexadecimal to binary
function hexToBinary(hex) {
    return hex.split(' ').map(function(hexCode) {
        return parseInt(hexCode, 16).toString(2).padStart(8, '0');
    }).join(' ');
}

document.getElementById("convertToBinaryButton").addEventListener("click", function () {
    const input = document.getElementById("hexInput").value;
    const output = document.getElementById("binaryOutput");
    const copyBinaryButton = document.getElementById("copyBinaryButton");

    if (input.trim()) {
        try {
            const binary = hexToBinary(input);
            output.textContent = binary;
            copyBinaryButton.style.display = "block"; // Show copy button
        } catch (error) {
            output.textContent = "Invalid hexadecimal input.";
            copyBinaryButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter hexadecimal code to convert.";
        copyBinaryButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyBinaryButton").addEventListener("click", function () {
    const output = document.getElementById("binaryOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Binary text copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
