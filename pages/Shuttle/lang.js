const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>Shuttle — client SSH moderne pour Windows & Linux.</strong><br>
            Terminal, SFTP, tunnels et monitoring dans une seule application.<br><br>
            
            <strong>Terminal SSH</strong><br>
            <strong>SFTP intégré</strong><br>
            <strong>Tunnels SSH</strong><br>
            <strong>Monitoring en temps réel</strong><br>
            <strong>Profils chiffrés</strong><br>
            <strong>Reconnexion automatique</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>Shuttle — modern SSH client for Windows & Linux.</strong><br>
            Terminal, SFTP, tunnels and monitoring in one application.<br><br>
            
            <strong>SSH Terminal</strong><br>
            <strong>Built‑in SFTP</strong><br>
            <strong>SSH Tunnels</strong><br>
            <strong>Real‑time monitoring</strong><br>
            <strong>Encrypted profiles</strong><br>
            <strong>Auto‑reconnect</strong><br>
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
