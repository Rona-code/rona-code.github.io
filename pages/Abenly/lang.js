const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>Abenly — suivi des entretiens véhicule et abonnements sur Android.</strong><br>
            Application moderne et privée pour gérer l’historique de maintenance et les dépenses récurrentes, 100% hors‑ligne.<br><br>
            
            <strong>Suivi des entretiens</strong><br>
            <strong>Gestion des abonnements</strong><br>
            <strong>Dates d’échéance automatiques</strong><br>
            <strong>100% offline & privé</strong><br>
            <strong>Interface Jetpack Compose / Material 3</strong><br>
            <strong>Stockage DataStore</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>Abenly — track vehicle maintenance and subscriptions on Android.</strong><br>
            A modern, private, offline app to manage service history and recurring expenses in one place.<br><br>
            
            <strong>Maintenance tracking</strong><br>
            <strong>Subscription management</strong><br>
            <strong>Automatic due dates</strong><br>
            <strong>100% offline & private</strong><br>
            <strong>Jetpack Compose / Material 3 UI</strong><br>
            <strong>DataStore storage</strong><br><br>
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
