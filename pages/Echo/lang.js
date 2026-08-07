const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>ScreenMate — compagnon animé pour Windows.</strong><br>
            Un petit assistant de bureau personnalisable avec animations, commandes vocales, rappels et outils pratiques.<br><br>
            
            <strong>Compagnon animé</strong><br>
            <strong>Commandes vocales</strong><br>
            <strong>Explorateur de fichiers</strong><br>
            <strong>Lanceur d’applications</strong><br>
            <strong>Rappels & calendrier</strong><br>
            <strong>Compagnons personnalisés</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>ScreenMate — animated desktop companion for Windows.</strong><br>
            A customizable desktop assistant with animations, voice commands, reminders, and lightweight productivity tools.<br><br>
            
            <strong>Animated companion</strong><br>
            <strong>Voice commands</strong><br>
            <strong>File explorer</strong><br>
            <strong>App launcher</strong><br>
            <strong>Reminders & calendar</strong><br>
            <strong>Custom companions</strong><br>
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
