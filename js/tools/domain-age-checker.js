document.getElementById('domainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const domain = document.getElementById('domain').value;
    const apiUrl = `https://www.whois.com/whois/${domain}`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Look for the creation date in the WHOIS text data
            const whoisText = doc.body.textContent;
            const creationDatePattern = /Creation Date:\s*(\d{4}-\d{2}-\d{2})/i;
            const match = whoisText.match(creationDatePattern);

            if (match && match[1]) {
                const creationDate = new Date(match[1]);
                const domainAge = calculateDomainAge(creationDate);
                document.getElementById('domainAge').textContent = `Domain Age: ${domainAge} years (Creation Date: ${match[1]})`;
            } else {
                document.getElementById('domainAge').textContent = 'Domain creation date not found.';
            }
        })
        .catch(error => {
            document.getElementById('domainAge').textContent = 'Error fetching domain data.';
            console.error('Error:', error);
        });
});

function calculateDomainAge(creationDate) {
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - creationDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    return ageInYears;
}
