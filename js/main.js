const tools = [
    { name: 'WhatsApp Direct', url: 'pages/whatsapp-direct.html', icon: 'fab fa-whatsapp', description: 'Send messages without saving contacts' },
    { name: 'JSON Formatter', url: 'pages/json-formatter.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Text To Binary', url: 'pages/text-to-binary.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Binary To Text', url: 'pages/binary-to-text.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Binary to Hex', url: 'pages/binary-to-hex.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Hex to Binary', url: 'pages/hex-to-binary.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Binary To ASCII', url: 'pages/binary-to-ASCII.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'ASCII To Binary', url: 'pages/ASCII-to-binary.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Binary To Decimal', url: 'pages/binary-to-decimal.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Decimal To Binary', url: 'pages/decimal-to-binary.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Text To ASCII', url: 'pages/text-to-ASCII.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Decimal to HEX', url: 'pages/decimal-to-hex.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Binary Translator', url: 'pages/binary-translator.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Binary Decoder', url: 'pages/binary-decoder.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Binary To English', url: 'pages/binary-to-english.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Fake Name Generator', url: 'pages/Fake-Name-Generator.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Wp Theme Detector', url: 'pages/wp-theme-detector.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Wp Plugin Detector', url: 'pages/wp-plugin-detector.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Page Speed Test', url: 'pages/page-speed-test.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Website Font Detector', url: 'pages/website-font-detector.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Password Strength Utility', url: 'pages/Password-Strength-Utility.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Domain Age Checker', url: 'pages/domain-age-checker.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Website Down Detector', url: 'pages/website-down-checker.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Is It Elementor?', url: 'pages/is-it-elementor.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'What is My Screen Resolution?', url: 'pages/what-is-my-screen-resolution.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Youtube Thumbnail Downloader', url: 'pages/youtube-thumbnail-downloader.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Screen Refresh Rate Detector', url: 'pages/Screen-Refresh-Rate-Detector.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Facebook embed code', url: 'pages/facebook-embed-code.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Minify HTML', url: 'pages/minify-html.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Minify Css', url: 'pages/minify-css.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Minify JS', url: 'pages/minify-js.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Adsence Calculator', url: 'pages/adsence-calculator.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Trend Youtube Picker', url: 'pages/trend-youtube-picker.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Youtube Keyword Generator', url: 'pages/youtube-keyword-generator.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Youtube Dislike Viewer', url: 'pages/youtube-dislike-viewer.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Youtube Embed Code Generator', url: 'pages/youtube-embed-code-generator.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Youtube Banner Downloader', url: 'pages/youtube-banner-downloader.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Youtube Shorts Thumbnail Downloader', url: 'pages/youtube-shorts-thumbnail.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    { name: 'Youtube Monetize Checker', url: 'pages/youtube-monetize-checker.html', icon: 'fas fa-code', description: 'Format and validate JSON data' },
    
    
    

   
    // Add more tools here
];

function renderTools(toolsToRender) {
    const toolGrid = document.getElementById('toolGrid');
    toolGrid.innerHTML = '';
    toolsToRender.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'tool-item';
        toolElement.innerHTML = `
            <i class="${tool.icon}"></i>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
        `;
        toolElement.addEventListener('click', () => {
            window.location.href = tool.url;
        });
        toolGrid.appendChild(toolElement);
    });
}

function setupSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm)
        );
        renderTools(filteredTools);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTools(tools);
    setupSearch();
});