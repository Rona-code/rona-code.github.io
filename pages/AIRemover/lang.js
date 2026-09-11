const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
          <strong>AI Remover — nettoyeur d’Aperçu IA pour Google.</strong><br>
          Supprime automatiquement les blocs d’IA dans Google Search sans altérer la navigation ni les autres onglets.<br><br>
          
          <strong>Masquage dynamique des Aperçu IA</strong><br>
          <strong>Détection Shadow DOM</strong><br>
          <strong>Nettoyage en temps réel</strong><br>
          <strong>Léger & 100% privé</strong><br><br>
        `,
        before:"Avant",
        after:"Après"
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
          <strong>AI Remover — clean AI Overviews from Google Search.</strong><br>
          Automatically hides AI Overviews while keeping normal navigation fully intact.<br><br>
          
          <strong>Dynamic AI Overview removal</strong><br>
          <strong>Shadow DOM detection</strong><br>
          <strong>Real‑time clean‑up</strong><br>
          <strong>Lightweight & private</strong><br><br>
        `,
        before:"Before",
        after:"After"
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
