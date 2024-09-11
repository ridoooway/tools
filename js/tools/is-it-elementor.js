document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('elementorForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const url = document.getElementById('url').value;
        
        // Show loading indicator
        document.getElementById('statusMessage').textContent = '';
        document.getElementById('statusMessage').className = '';

        // Use fetch to get the HTML content of the URL
        fetch(url)
            .then(response => response.text())
            .then(text => {
                // Check for Elementor-specific markers
                const hasElementor = /elementor-/i.test(text) || /elementor-page/i.test(text);
                
                if (hasElementor) {
                    document.getElementById('statusMessage').textContent = 'This site is using Elementor.';
                    document.getElementById('statusMessage').className = 'success';
                } else {
                    document.getElementById('statusMessage').textContent = 'This site is not using Elementor.';
                    document.getElementById('statusMessage').className = 'error';
                }
            })
            .catch(error => {
                document.getElementById('statusMessage').textContent = 'Error fetching the site.';
                document.getElementById('statusMessage').className = 'error';
                console.error('Error:', error);
            });
    });
});
