const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>NexusUtils — navigateur sécurisé + gestionnaire de sites pour Windows & Linux.</strong><br>
            Auto‑login, stockage chiffré et gestion avancée du clavier dans une interface légère.<br><br>
            
            <strong>Stockage sécurisé (AES‑256‑CBC)</strong><br>
            <strong>PBKDF2‑SHA256 (100k itérations)</strong><br>
            <strong>Navigateur Chromium (Qt WebEngine)</strong><br>
            <strong>Injection automatique des identifiants</strong><br>
            <strong>Hook clavier avancé (Windows + Linux)</strong><br>
            <strong>Interface simple et multiplateforme</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>NexusUtils — secure browser + site manager for Windows & Linux.</strong><br>
            Auto‑login, encrypted credential storage, and advanced keyboard handling in a lightweight interface.<br><br>
            
            <strong>Secure storage (AES‑256‑CBC)</strong><br>
            <strong>PBKDF2‑SHA256 (100k iterations)</strong><br>
            <strong>Chromium browser (Qt WebEngine)</strong><br>
            <strong>Automatic credential injection</strong><br>
            <strong>Advanced keyboard hooking (Windows + Linux)</strong><br>
            <strong>Clean cross‑platform UI</strong><br>
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
