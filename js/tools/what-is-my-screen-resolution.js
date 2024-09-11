document.addEventListener('DOMContentLoaded', function() {
    function updateResolution() {
        const width = screen.width;
        const height = screen.height;
        
        document.getElementById('width').textContent = `Width: ${width}px`;
        document.getElementById('height').textContent = `Height: ${height}px`;
    }

    // Initial resolution update
    updateResolution();

    // Add event listener to refresh button
    document.getElementById('refreshButton').addEventListener('click', function() {
        updateResolution();
    });
});
