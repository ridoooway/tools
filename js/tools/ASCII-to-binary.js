// Function to convert ASCII to binary
function asciiToBinary(ascii) {
    return ascii.split('').map(function(char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

document.getElementById("convertToBinaryButton").addEventListener("click", function () {
    const input = document.getElementById("asciiInput").value;
    const output = document.getElementById("binaryOutput");
    const copyBinaryButton = document.getElementById("copyBinaryButton");

    if (input.trim()) {
        try {
            const binary = asciiToBinary(input);
            output.textContent = binary;
            copyBinaryButton.style.display = "block"; // Show copy button
        } catch (error) {
            output.textContent = "Error in conversion.";
            copyBinaryButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter ASCII text to convert.";
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
