// Function to convert binary to hexadecimal
function binaryToHex(binary) {
    return binary.split(' ').map(function(bin) {
        return parseInt(bin, 2).toString(16).toUpperCase().padStart(2, '0');
    }).join(' ');
}

document.getElementById("convertToHexButton").addEventListener("click", function () {
    const input = document.getElementById("binaryInput").value;
    const output = document.getElementById("hexOutput");
    const copyHexButton = document.getElementById("copyHexButton");

    if (input.trim()) {
        try {
            const hex = binaryToHex(input);
            output.textContent = hex;
            copyHexButton.style.display = "block"; // Show copy button
        } catch (error) {
            output.textContent = "Invalid binary input.";
            copyHexButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter binary code to convert.";
        copyHexButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyHexButton").addEventListener("click", function () {
    const output = document.getElementById("hexOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Hexadecimal text copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
