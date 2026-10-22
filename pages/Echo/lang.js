const translations = {
    fr: {
        back: "← Retour",
        downloads: "Téléchargements directs",
        screenshots: "Captures d’écran",
        sources: "Sources GitHub",
        description: `
            <strong>Echo — compagnon de bureau animé.</strong><br>
            Redonnez vie à votre bureau (Windows et Linux) avec <strong>Echo</strong>, un adorable assistant animé qui se promène sur vos fenêtres, gère vos rappels et s'intègre parfaitement à votre espace de travail sans ralentir votre PC.<br><br>
            
            <strong>Compagnon animé interactif : Des animations fluides (marche, repos, sommeil) avec support de sprites personnalisés.</strong><br>
            <strong>Explorateur de fichiers intégré : Accédez rapidement à vos dossiers directement depuis l'univers de votre compagnon.</strong><br>
            <strong>Rappels & calendrier : Ne ratez plus aucun événement important grâce aux alertes personnalisées de votre petit assistant.</strong><br>
            <strong>Compagnons personnalisables : Changez de mascotte, ajustez l'échelle et adaptez la vitesse selon vos envies.</strong><br>
            <strong>Licence MIT</strong><br><br>
        `
    },

    en: {
        back: "← Back",
        downloads: "Direct downloads",
        screenshots: "Screenshots",
        sources: "GitHub sources",
        description: `
            <strong>Echo — animated desktop companion.</strong><br>
            Bring your desktop (Windows and Linux) to life with <strong>Echo</strong>, an adorable animated assistant that walks across your windows, manages your reminders, and integrates seamlessly into your workspace without slowing down your PC.<br><br>
            
            <strong>Interactive animated companion: Fluid animations (walking, resting, sleeping) with custom sprite support.</strong><br>
            <strong>Built-in file explorer: Quickly access your folders right from your companion's world.</strong><br>
            <strong>Reminders & calendar: Never miss an important event thanks to personalized alerts from your little assistant.</strong><br>
            <strong>Customizable companions: Change your mascot, adjust the scale, and adapt the speed to your preferences.</strong><br>
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
