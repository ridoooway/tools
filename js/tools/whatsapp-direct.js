document.addEventListener('DOMContentLoaded', () => {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const messageInput = document.getElementById('message');
    const countryCodeSelect = document.getElementById('countryCode');
    const emojiButton = document.getElementById('emojiButton');
    const previewButton = document.getElementById('previewButton');
    const generateButton = document.getElementById('generateButton');

    // List of country codes
    const countryCodes = {
        'US': '+1',
        'BD': '+880',
        'IN': '+91',
        // Add more country codes as needed
    };

    // Auto-detect user's region (using free geolocation API)
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country_code;
            if (countryCodes[countryCode]) {
                countryCodeSelect.innerHTML = `<option value="${countryCodes[countryCode]}">${data.country_name} (${countryCodes[countryCode]})</option>`;
            }
        });

    // Emoji picker functionality
    emojiButton.addEventListener('click', () => {
        const emoji = '😊'; // Add emoji picker here if needed
        messageInput.value += emoji;
    });

    // WhatsApp link generator
    generateButton.addEventListener('click', () => {
        let phoneNumber = phoneNumberInput.value.replace(/\D/g, '');
        const countryCode = countryCodeSelect.value;
        
        if (!phoneNumber) {
            alert('Please enter your phone number.');
            return;
        }

        const message = encodeURIComponent(messageInput.value);
        const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });

    // Preview button functionality
    previewButton.addEventListener('click', () => {
        alert('Phone number: ' + phoneNumberInput.value + '\nMessage: ' + messageInput.value);
    });
});
