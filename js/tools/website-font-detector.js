document.getElementById('fontForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;

    // Clear previous results
    document.getElementById('fontList').innerHTML = '';
    
    // Fetch the HTML of the target website
    fetch(url)
        .then(response => response.text())
        .then(htmlText => {
            // Extract fonts from the HTML and inline styles
            const fontList = new Set(extractFonts(htmlText));

            // Extract external stylesheet links and fetch them
            const externalStylesheets = extractExternalStylesheets(htmlText);
            return Promise.all(externalStylesheets.map(fetchStylesheet))
                .then(stylesheets => {
                    stylesheets.forEach(stylesheet => {
                        const fontsFromStylesheet = extractFonts(stylesheet);
                        fontsFromStylesheet.forEach(font => fontList.add(font));
                    });

                    displayFonts(Array.from(fontList));
                });
        })
        .catch(error => {
            console.error('Error fetching the site:', error);
            document.getElementById('fontList').innerHTML = '<li>Error fetching the site.</li>';
        });
});

// Extract fonts from HTML or CSS content
function extractFonts(text) {
    const fontRegex = /font-family\s*:\s*['"]?([a-zA-Z\s,]+)['"]?/gi;
    let match;
    const fonts = new Set();

    while ((match = fontRegex.exec(text)) !== null) {
        fonts.add(match[1].trim());
    }

    return Array.from(fonts);
}

// Extract links to external stylesheets
function extractExternalStylesheets(htmlText) {
    const linkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi;
    let match;
    const stylesheets = [];

    while ((match = linkRegex.exec(htmlText)) !== null) {
        let href = match[1].trim();
        // Convert relative paths to absolute URLs
        if (href.startsWith('/')) {
            const url = new URL(href, document.getElementById('url').value);
            href = url.href;
        }
        stylesheets.push(href);
    }

    return stylesheets;
}

// Fetch the contents of an external stylesheet
function fetchStylesheet(url) {
    return fetch(url).then(response => response.text()).catch(() => '');
}

// Display the detected fonts on the page
function displayFonts(fonts) {
    const fontListElement = document.getElementById('fontList');

    if (fonts.length === 0) {
        fontListElement.innerHTML = '<li>No fonts detected.</li>';
    } else {
        fonts.forEach(font => {
            const li = document.createElement('li');
            li.textContent = font;
            fontListElement.appendChild(li);
        });
    }
}
