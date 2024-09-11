document.getElementById("formatButton").addEventListener("click", function () {
    const input = document.getElementById("jsonInput").value;
    const output = document.getElementById("jsonOutput");
    const copyButton = document.getElementById("copyButton");

    try {
        const json = JSON.parse(input);
        const formattedJson = JSON.stringify(json, null, 4);
        output.textContent = formattedJson;
        output.style.color = "#e0e0e0"; // Reset text color on success
        copyButton.style.display = "block"; // Show copy button
    } catch (error) {
        output.textContent = "Invalid JSON: " + error.message;
        output.style.color = "red"; // Set text color to red on error
        copyButton.style.display = "none"; // Hide copy button on error
    }
});

document.getElementById("copyButton").addEventListener("click", function () {
    const output = document.getElementById("jsonOutput").textContent;

    navigator.clipboard.writeText(output).then(function () {
        alert("Formatted JSON copied to clipboard!");
    }).catch(function (error) {
        alert("Failed to copy: " + error);
    });
});
