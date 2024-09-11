// Function to convert binary to text
function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Function to convert text to binary
function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

document.getElementById("convertBinaryToTextButton").addEventListener("click", function () {
    const input = document.getElementById("binaryInput").value.trim();
    const output = document.getElementById("textOutput");
    const copyTextButton = document.getElementById("copyTextButton");

    if (input) {
        const text = binaryToText(input);
        output.textContent = text;
        copyTextButton.style.display = "block"; // Show copy button
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

document.getElementById("convertTextToBinaryButton").addEventListener("click", function () {
    const input = document.getElementById("textInput").value.trim();
    const output = document.getElementById("binaryOutput");
    const copyBinaryButton = document.getElementById("copyBinaryButton");

    if (input) {
        const binary = textToBinary(input);
        output.textContent = binary;
        copyBinaryButton.style.display = "block"; // Show copy button
    } else {
        output.textContent = "Please enter text to convert.";
        copyBinaryButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyBinaryButton").addEventListener("click", function () {
    const output = document.getElementById("binaryOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Binary code copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
