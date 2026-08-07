const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>Tux Whisperer — compagnon léger pour la barre de menu macOS.</strong><br>
            Micro‑notifications utiles, discrètes et parfaites pour la productivité.<br><br>
            
            <strong>Intégration native macOS</strong><br>
            <strong>Notifications instantanées</strong><br>
            <strong>Interface minimaliste</strong><br>
            <strong>Léger et rapide</strong><br>
            <strong>Améliore la concentration et le flux de travail</strong><br>
            <strong>macOS 12+</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>Tux Whisperer — lightweight macOS menu bar companion.</strong><br>
            Useful micro‑notifications that boost focus and productivity without distractions.<br><br>
            
            <strong>Native macOS integration</strong><br>
            <strong>Instant notifications</strong><br>
            <strong>Minimal interface</strong><br>
            <strong>Fast and lightweight</strong><br>
            <strong>Enhances focus and workflow</strong><br>
            <strong>macOS 12+</strong><br>
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
