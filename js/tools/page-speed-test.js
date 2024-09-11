document.getElementById('pagespeedForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const apiKey = 'AIzaSyDGwAbQhCmChc8tGer3bE3Z4Zt5cgNYeDY'; // Replace with your Google API key
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;

    // Show loading animation
    document.getElementById('loading').style.display = 'block';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching PageSpeed data:', error);
            document.getElementById('resultsList').innerHTML = '<li>Error fetching the site\'s PageSpeed data.</li>';
        })
        .finally(() => {
            // Hide loading animation
            document.getElementById('loading').style.display = 'none';
        });
});

function displayResults(data) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Clear previous results

    // Extract key metrics
    const performanceScore = data.lighthouseResult.categories.performance.score * 100;
    const firstContentfulPaint = data.lighthouseResult.audits['first-contentful-paint'].displayValue;
    const speedIndex = data.lighthouseResult.audits['speed-index'].displayValue;

    // Append results to the list
    resultsList.innerHTML += `<li>Performance Score: ${performanceScore}</li>`;
    resultsList.innerHTML += `<li>First Contentful Paint: ${firstContentfulPaint}</li>`;
    resultsList.innerHTML += `<li>Speed Index: ${speedIndex}</li>`;
}


