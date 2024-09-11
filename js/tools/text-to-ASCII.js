// Function to convert text to ASCII
function textToAscii(text) {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
}

document.getElementById("convertToAsciiButton").addEventListener("click", function () {
    const input = document.getElementById("textInput").value.trim();
    const output = document.getElementById("asciiOutput");
    const copyAsciiButton = document.getElementById("copyAsciiButton");

    if (input) {
        const ascii = textToAscii(input);
        output.textContent = ascii;
        copyAsciiButton.style.display = "block"; // Show copy button
    } else {
        output.textContent = "Please enter text to convert.";
        copyAsciiButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyAsciiButton").addEventListener("click", function () {
    const output = document.getElementById("asciiOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("ASCII code copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
