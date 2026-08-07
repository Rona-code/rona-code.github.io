const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>EchoClip — gestionnaire de presse‑papiers léger pour Windows & Linux.</strong><br>
            Historique automatique du presse‑papiers avec support du texte, des liens et des images.<br><br>
            
            <strong>Surveillance en temps réel</strong><br>
            <strong>Support Texte / Liens / Images</strong><br>
            <strong>Détection intelligente des doublons</strong><br>
            <strong>Intégration dans la zone de notification</strong><br>
            <strong>Copie rapide via clic droit</strong><br>
            <strong>Windows & Linux</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>EchoClip — lightweight clipboard manager for Windows & Linux.</strong><br>
            Automatically saves your clipboard history with support for text, links, and images.<br><br>
            
            <strong>Real‑time clipboard monitoring</strong><br>
            <strong>Text / Link / Image support</strong><br>
            <strong>Smart duplicate detection</strong><br>
            <strong>System tray integration</strong><br>
            <strong>Right‑click to copy back</strong><br>
            <strong>Windows & Linux</strong><br>
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
