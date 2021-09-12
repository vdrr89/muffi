// ------------------- CONTACTO: REDES SOCIALES -------------------
var socialNet = document.getElementById("social-networks");
var socialNetworks = [
    { name: "facebook", icon: "fab fa-facebook", link: "https://www.facebook.com/muffi.marvelous.xp" },
    { name: "instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/mistress.muffi.marvelous.xp/" },
    { name: "mail", icon: "bi bi-envelope-fill", link: "mailto:themuffiexperience@gmail.com" },
    { name: "whatsapp", icon: "bi bi-whatsapp", link: "https://api.whatsapp.com/send?phone=59898852224" }, 
    { name: "divasplay", icon: "bi bi-film", link: "https://divasplay.com/@muffimarvelous"}
];
var socialNetworksLength = socialNetworks.length;

for( let i = 0; i < socialNetworksLength; i++ ){
    socialNet.innerHTML +=
    '<li><a target="_blank" href="' + socialNetworks[i].link + '"><i class="footer-icon ' + socialNetworks[i].icon + '"></i></a></li>' 
}