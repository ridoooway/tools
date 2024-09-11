document.getElementById('pluginForm').addEventListener('submit', function(event) {
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
            // Detect plugins from the source code
            const pluginPattern = /wp-content\/plugins\/([a-zA-Z0-9_-]+)/g;
            const plugins = [...new Set(text.match(pluginPattern))]; // Get unique plugin names

            const pluginList = document.getElementById('pluginList');
            pluginList.innerHTML = ''; // Clear previous results

            if (plugins.length > 0) {
                plugins.forEach(pluginPath => {
                    const pluginName = pluginPath.split('/')[2]; // Extract plugin name from path
                    const listItem = document.createElement('li');
                    listItem.textContent = pluginName;
                    pluginList.appendChild(listItem);
                });
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = 'No plugins detected.';
                pluginList.appendChild(listItem);
            }
        })
        .catch(error => {
            const pluginList = document.getElementById('pluginList');
            pluginList.innerHTML = ''; // Clear previous results
            const listItem = document.createElement('li');
            listItem.textContent = 'Error fetching the site.';
            pluginList.appendChild(listItem);
            console.error('Error:', error);
        });
});
