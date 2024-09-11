document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('thumbnailForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const url = document.getElementById('url').value;
        const videoId = extractVideoId(url);

        if (videoId) {
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            const thumbnailImage = document.getElementById('thumbnailImage');
            thumbnailImage.src = thumbnailUrl;
            thumbnailImage.style.display = 'block';

            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = thumbnailUrl;
            downloadLink.style.display = 'inline-block';

            const downloadButton = document.getElementById('downloadButton');
            downloadButton.style.display = 'inline-block';
        } else {
            alert('Invalid YouTube URL. Please enter a valid YouTube video URL.');
        }
    });

    function extractVideoId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
});
