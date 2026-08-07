const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>QtLingo — outil léger pour traduire automatiquement les fichiers Qt .ts.</strong><br>
            Génère des traductions en utilisant une API LibreTranslate compatible, tout en préservant la structure XML.<br><br>
            
            <strong>Traduction automatique des .ts</strong><br>
            <strong>Structure XML conservée</strong><br>
            <strong>Mise à jour des balises &lt;translation&gt;</strong><br>
            <strong>Support multi‑langues</strong><br>
            <strong>Serveur LibreTranslate requis</strong><br>
            <strong>Interface en ligne de commande</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>QtLingo — lightweight tool for auto‑translating Qt .ts files.</strong><br>
            Uses a LibreTranslate‑compatible API to generate translations while preserving the original XML structure.<br><br>
            
            <strong>Automatic .ts translation</strong><br>
            <strong>XML structure preserved</strong><br>
            <strong>Updates &lt;translation&gt; tags</strong><br>
            <strong>Multi‑language support</strong><br>
            <strong>Requires LibreTranslate server</strong><br>
            <strong>Simple command‑line interface</strong><br>
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
