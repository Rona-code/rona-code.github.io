const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>SystemMonitor — gestionnaire de tâches multiplateforme en Rust.</strong><br>
            Un moniteur système inspiré du Task Manager, fonctionnant aussi bien sous Linux que Windows, même en session distante.<br><br>
            
            <strong>Processus détaillés</strong><br>
            <strong>Services Linux / Windows</strong><br>
            <strong>Disques & débit en temps réel</strong><br>
            <strong>Démarrage automatique</strong><br>
            <strong>Lanceur de tâches</strong><br>
            <strong>Graphiques CPU & température</strong><br>
            <strong>Thème sombre moderne</strong><br>
            <strong>Linux & Windows</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>SystemMonitor — cross‑platform task manager written in Rust.</strong><br>
            A Task Manager‑style system monitor for Linux and Windows, fully usable even in remote sessions.<br><br>
            
            <strong>Detailed process view</strong><br>
            <strong>Linux / Windows services</strong><br>
            <strong>Real‑time disk throughput</strong><br>
            <strong>Startup application control</strong><br>
            <strong>Task launcher</strong><br>
            <strong>CPU & temperature graphs</strong><br>
            <strong>Modern dark theme</strong><br>
            <strong>Linux & Windows</strong><br><br>
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
