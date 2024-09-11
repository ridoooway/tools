document.addEventListener('DOMContentLoaded', () => {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const messageInput = document.getElementById('message');
    const emojiButton = document.getElementById('emojiButton');
    const previewButton = document.getElementById('previewButton');
    const generateButton = document.getElementById('generateButton');
    
    let detectedCountryCode = '';

    // Auto-detect user's region and determine country code (using a geolocation API)
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            detectedCountryCode = data.country_calling_code; // Detect country code automatically
            console.log('Detected Country Code: ', detectedCountryCode);
        })
        .catch(() => {
            alert('Failed to detect your country. Please enter a valid phone number.');
        });

    // Emoji picker functionality
    emojiButton.addEventListener('click', () => {
        const emoji = '😊'; // Add an emoji picker here if needed
        messageInput.value += emoji;
    });

    // WhatsApp link generator
    generateButton.addEventListener('click', () => {
        let phoneNumber = phoneNumberInput.value.replace(/\D/g, ''); // Strip all non-numeric characters

        if (!phoneNumber) {
            alert('Please enter your phone number.');
            return;
        }

        // Remove the country code if the user enters it
        if (phoneNumber.startsWith(detectedCountryCode.replace('+', ''))) {
            phoneNumber = phoneNumber.slice(detectedCountryCode.length - 1);
        }

        const message = encodeURIComponent(messageInput.value);
        const whatsappUrl = `https://wa.me/${detectedCountryCode}${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });

    // Preview button functionality
    previewButton.addEventListener('click', () => {
        alert('Phone number: ' + phoneNumberInput.value + '\nMessage: ' + messageInput.value);
    });
});
