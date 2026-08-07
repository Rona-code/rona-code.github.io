const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>QRCode Generator — générateur de QR codes pour Windows.</strong><br>
            Crée des QR codes à partir de n’importe quel texte ou URL et les enregistre automatiquement sur le bureau.<br><br>
            
            <strong>Génération depuis texte ou URL</strong><br>
            <strong>Export PNG</strong><br>
            <strong>Interface console simple</strong><br>
            <strong>Sauvegarde automatique sur le bureau</strong><br>
            <strong>Basé sur ZXing.NET</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>QRCode Generator — QR code creator for Windows.</strong><br>
            Generates QR codes from any text or URL and saves them directly to the desktop.<br><br>
            
            <strong>Create from text or URL</strong><br>
            <strong>PNG export</strong><br>
            <strong>Simple console interface</strong><br>
            <strong>Automatic desktop saving</strong><br>
            <strong>Powered by ZXing.NET</strong><br>
            <strong>MIT License</strong><br><br>
        `
    }
};

function applyLang(lang) {
    document.getElementById("back").textContent = translations[lang].back;
    document.getElementById("downloads").textContent = translations[lang].downloads;
    document.getElementById("screenshots").textContent = translations[lang].screenshots;
    document.getElementById("sources").textContent = translations[lang].sources;
    document.getElementById("description").innerHTML = translations[lang].description;
}

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("lang");
    const saved = localStorage.getItem("lang");
    const browser = navigator.language.startsWith("fr") ? "fr" : "en";
    const lang = saved || browser;

    select.value = lang;
    applyLang(lang);

    select.addEventListener("change", () => {
        const newLang = select.value;
        localStorage.setItem("lang", newLang);
        applyLang(newLang);
    });
});
