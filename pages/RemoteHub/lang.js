const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
                <strong>RemoteHub — Remote Desktop / RemoteApp manager pour Windows & Linux. </strong><br>
                Centralise toutes tes connexions RDP dans une interface simple.<br><br>
            
                <strong>Sessions RDP</strong><br>
                <strong>RemoteApps</strong><br>
                <strong>Stockage sécurisé</strong><br>
                <strong>Icônes personnalisées</strong><br>
                <strong>MSTSC (Windows) / FreeRDP (Linux)</strong><br>
                <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
<strong>RemoteHub — Remote Desktop / RemoteApp manager for Windows & Linux.</strong><br>
Centralizes all your RDP connections into a simple interface.<br><br>

<strong>RDP sessions</strong><br>
<strong>RemoteApps</strong><br>
<strong>Secure credential storage</strong><br>
<strong>Custom icons</strong><br>
<strong>MSTSC (Windows) / FreeRDP (Linux)</strong><br>
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
