// Function to convert binary to text
function binaryToText(binary) {
    return binary.split(' ')
                 .map(bin => String.fromCharCode(parseInt(bin, 2)))
                 .join('');
}

document.getElementById("decodeButton").addEventListener("click", function () {
    const input = document.getElementById("binaryInput").value.trim();
    const output = document.getElementById("decodedOutput");
    const copyDecodedButton = document.getElementById("copyDecodedButton");

    if (input) {
        const text = binaryToText(input);
        output.textContent = text;
        copyDecodedButton.style.display = "block"; // Show copy button
    } else {
        output.textContent = "Please enter binary code to decode.";
        copyDecodedButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyDecodedButton").addEventListener("click", function () {
    const output = document.getElementById("decodedOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Decoded text copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
