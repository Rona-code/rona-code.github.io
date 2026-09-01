const translations = {
    fr: {
        back: "← Retour",
        downloads: "Liens direct",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
          <strong>Flowly.ai — l’OS du travail moderne.</strong><br>
          Un “outil de productivité” qui promet clarté, focus et simplification totale des workflows… mais fonctionne d’une façon radicalement différente.<br><br>
          <strong>Centralisation de l’information</strong><br>
          <strong>Vue unifiée sur projets, tâches et décisions</strong><br>
          <strong>Réduction du bruit et des notifications inutiles</strong><br>
          <strong>Alignement équipe / objectifs / priorités</strong><br>
          <strong>Pensé pour remote, async et équipes distribuées</strong><br>
          <strong>Starter / Growth / Enterprise</strong><br><br>
          <strong>Si tu cherches “moins de chaos” dans ton travail, Flowly mérite au moins un clic.</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct link",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
          <strong>Flowly.ai — the OS for modern work.</strong><br>
          A “productivity platform” that promises clarity, focus, and radically simplified workflows… but works in a very different way.<br><br>
          <strong>Unified view of projects, tasks and decisions</strong><br>
          <strong>Less noise, fewer pointless notifications</strong><br>
          <strong>Team / goals / priorities alignment</strong><br>
          <strong>Built for remote, async and distributed teams</strong><br>
          <strong>Starter / Growth / Enterprise</strong><br><br>      
          <strong>If you’ve ever searched for “less chaos at work”, Flowly is worth a click.</strong><br><br>
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
