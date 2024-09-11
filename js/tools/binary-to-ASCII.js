// Function to convert binary to ASCII
function binaryToASCII(binary) {
    return binary.split(' ').map(function(bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

document.getElementById("convertToASCIIButton").addEventListener("click", function () {
    const input = document.getElementById("binaryInput").value;
    const output = document.getElementById("asciiOutput");
    const copyASCIIButton = document.getElementById("copyASCIIButton");

    if (input.trim()) {
        try {
            const ascii = binaryToASCII(input);
            output.textContent = ascii;
            copyASCIIButton.style.display = "block"; // Show copy button
        } catch (error) {
            output.textContent = "Invalid binary input.";
            copyASCIIButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter binary code to convert.";
        copyASCIIButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyASCIIButton").addEventListener("click", function () {
    const output = document.getElementById("asciiOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("ASCII text copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
