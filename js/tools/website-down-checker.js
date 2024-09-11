document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downDetectorForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const url = document.getElementById('url').value;

        // Show the loading indicator
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('statusMessage').textContent = '';

        // Perform the HTTP request
        fetch(url, { method: 'HEAD' })
            .then(response => {
                // Hide the loading indicator
                document.getElementById('loading').classList.add('hidden');

                if (response.ok) {
                    document.getElementById('statusMessage').textContent = `Website is reachable.`;
                    document.getElementById('statusMessage').className = 'success';
                } else {
                    document.getElementById('statusMessage').textContent = `Website is down or not reachable.`;
                    document.getElementById('statusMessage').className = 'error';
                }
            })
            .catch(error => {
                // Hide the loading indicator
                document.getElementById('loading').classList.add('hidden');
                
                document.getElementById('statusMessage').textContent = `Error checking website status.`;
                document.getElementById('statusMessage').className = 'error';
                console.error('Error:', error);
            });
    });
});
