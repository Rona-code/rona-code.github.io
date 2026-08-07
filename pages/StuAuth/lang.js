const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
<strong>StuAuth — authentificateur TOTP/HOTP 100% local.</strong><br>
Pas de cloud, pas de sync forcée, pas de tracking.<br><br>

<strong>OTP hors‑ligne</strong><br>
<strong>Import Google Authenticator</strong><br>
<strong>Stockage chiffré (AES‑256)</strong><br>
<strong>Sync LAN optionnelle</strong><br>
<strong>Windows / Linux / Android / Firefox</strong><br>
<strong>Licence MIT</strong><br><br>

<em>Local. Offline.</em>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
<strong>StuAuth — 100% local TOTP/HOTP authenticator.</strong><br>
No cloud, no forced sync, no tracking.<br><br>

<strong>Offline OTP generation</strong><br>
<strong>Google Authenticator import</strong><br>
<strong>AES‑256 encrypted storage</strong><br>
<strong>Optional LAN sync</strong><br>
<strong>Windows / Linux / Android / Firefox</strong><br>
<strong>MIT License</strong><br><br>

<em>Local. Offline.</em>
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
