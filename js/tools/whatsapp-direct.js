document.addEventListener('DOMContentLoaded', () => {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', () => {
        const phoneNumber = phoneNumberInput.value.replace(/\D/g, '');
        const message = encodeURIComponent(messageInput.value);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
});