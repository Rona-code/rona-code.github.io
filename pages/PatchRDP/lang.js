const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>PatchRDP — restauration des lecteurs de cartes à puce dans les sessions RDP.</strong><br>
            Permet aux applications d’accéder aux lecteurs physiques du poste hôte en contournant le comportement d’isolation de winscard.dll.<br><br>
            
            <strong>Lecteurs de cartes visibles en RDP</strong><br>
            <strong>Patch mémoire WinSCard (B0 01 C3)</strong><br>
            <strong>Aucune modification de DLL sur disque</strong><br>
            <strong>Résolution dynamique des symboles Microsoft</strong><br>
            <strong>Compatible x86 / x64</strong><br>
            <strong>Configuration via config.ini</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>PatchRDP — restores smart card reader visibility inside RDP sessions.</strong><br>
            Allows applications to access locally connected smart card readers by bypassing winscard.dll’s redirection behavior.<br><br>
            
            <strong>Smart card readers visible in RDP</strong><br>
            <strong>In‑memory WinSCard patch (B0 01 C3)</strong><br>
            <strong>No system DLLs modified on disk</strong><br>
            <strong>Dynamic Microsoft symbol resolution</strong><br>
            <strong>x86 / x64 compatible</strong><br>
            <strong>Configurable via config.ini</strong><br>
            <strong>License MIT</strong><br><br>
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
