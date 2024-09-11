// Function to convert binary to text
function binaryToText(binary) {
    return binary.split(' ').map(function(bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

document.getElementById("convertToTextButton").addEventListener("click", function () {
    const input = document.getElementById("binaryInput").value;
    const output = document.getElementById("textOutput");
    const copyTextButton = document.getElementById("copyTextButton");

    if (input.trim()) {
        try {
            const text = binaryToText(input);
            output.textContent = text;
            copyTextButton.style.display = "block"; // Show copy button
        } catch (error) {
            output.textContent = "Invalid binary input.";
            copyTextButton.style.display = "none"; // Hide copy button on error
        }
    } else {
        output.textContent = "Please enter binary code to convert.";
        copyTextButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyTextButton").addEventListener("click", function () {
    const output = document.getElementById("textOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Text copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
