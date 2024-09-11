document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton");
    const nameListElement = document.getElementById("nameList");
    const genderSelect = document.getElementById("gender");
    const quantityInput = document.getElementById("quantity");

    // Load names data
    fetch('names.json')
        .then(response => response.json())
        .then(data => {
            generateButton.addEventListener("click", () => {
                const gender = genderSelect.value;
                const quantity = parseInt(quantityInput.value);
                let firstNames, lastNames;

                if (gender === "male") {
                    firstNames = data.maleFirstNames;
                    lastNames = data.maleLastNames;
                } else {
                    firstNames = data.femaleFirstNames;
                    lastNames = data.femaleLastNames;
                }

                nameListElement.innerHTML = ''; // Clear previous names
                for (let i = 0; i < quantity; i++) {
                    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    const fullName = `${randomFirstName} ${randomLastName}`;

                    const nameItem = document.createElement('div');
                    nameItem.className = 'name-item';
                    nameItem.innerHTML = `
                        ${fullName}
                        <button class="copyButton" data-text="${fullName}">Copy</button>
                    `;
                    nameListElement.appendChild(nameItem);
                }

                // Add event listeners for copy buttons
                document.querySelectorAll('.copyButton').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const textToCopy = e.target.getAttribute('data-text');
                        navigator.clipboard.writeText(textToCopy).then(() => {
                            alert('Name copied to clipboard!');
                        }).catch(err => {
                            console.error('Failed to copy text: ', err);
                        });
                    });
                });
            });
        })
        .catch(error => console.error('Error loading names data:', error));
});
