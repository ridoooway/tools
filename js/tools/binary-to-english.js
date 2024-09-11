// Function to convert binary to English
function binaryToEnglish(binary) {
    return binary.split(' ')
                 .map(bin => String.fromCharCode(parseInt(bin, 2)))
                 .join('');
}

document.getElementById("translateButton").addEventListener("click", function () {
    const input = document.getElementById("binaryInput").value.trim();
    const output = document.getElementById("englishOutput");
    const copyEnglishButton = document.getElementById("copyEnglishButton");

    if (input) {
        const text = binaryToEnglish(input);
        output.textContent = text;
        copyEnglishButton.style.display = "block"; // Show copy button
    } else {
        output.textContent = "Please enter binary code to translate.";
        copyEnglishButton.style.display = "none"; // Hide copy button on empty input
    }
});

document.getElementById("copyEnglishButton").addEventListener("click", function () {
    const output = document.getElementById("englishOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("English text copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
