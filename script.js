 // Attendre que le DOM soit chargé
 document.addEventListener('DOMContentLoaded', function () {
    // Initialiser la carte
    var map = L.map('map').setView([36.7538, 3.0588], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([36.7538, 3.0588]).addTo(map)
        .bindPopup('École Excellence - Didouche Mourad')
        .openPopup();
        
    // Formulaire - alerte simple
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Merci pour votre message ! Nous vous répondrons rapidement.");
        this.reset();
    });

    
});

// Fonction pour défiler jusqu'à la section contact
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}