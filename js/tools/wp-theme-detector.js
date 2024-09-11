document.getElementById('themeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            // A simple way to detect the theme from the source code
            const themePattern = /wp-content\/themes\/([a-zA-Z0-9_-]+)/;
            const match = text.match(themePattern);

            if (match) {
                document.getElementById('themeName').textContent = `Theme Detected: ${match[1]}`;
            } else {
                document.getElementById('themeName').textContent = 'Theme could not be detected.';
            }
        })
        .catch(error => {
            document.getElementById('themeName').textContent = 'Error fetching the site.';
            console.error('Error:', error);
        });
});
