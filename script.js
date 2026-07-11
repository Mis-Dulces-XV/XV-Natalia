document.addEventListener('DOMContentLoaded', () => {
    
    const btnLocation = document.getElementById('btnLocation');
    const btnConfirm = document.getElementById('btnConfirm');

    // Botón de Ubicación -> Abre Google Maps
    btnLocation.addEventListener('click', () => {
        const mapsUrl = 'https://maps.app.goo.gl/8gAY4Qm6D3UcbiZy7'; 
        window.open(mapsUrl, '_blank');
    });

    // Botón de Confirmación -> Abre WhatsApp
    btnConfirm.addEventListener('click', () => {
        const phoneNumber = '5214771600957'; 
        const message = '¡Hola! Confirmo mi asistencia a los XV años de Natalia.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    });

});