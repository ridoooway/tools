// Function to convert text to binary
function textToBinary(text) {
    return text.split('').map(function(char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

document.getElementById("convertButton").addEventListener("click", function () {
    const input = document.getElementById("textInput").value;
    const output = document.getElementById("binaryOutput");
    const copyButton = document.getElementById("copyButton");

    if (input.trim()) {
        const binary = textToBinary(input);
        output.textContent = binary;
        copyButton.style.display = "block"; // Show copy button
    } else {
        output.textContent = "Please enter some text to convert.";
        copyButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyButton").addEventListener("click", function () {
    const output = document.getElementById("binaryOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Binary text copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
