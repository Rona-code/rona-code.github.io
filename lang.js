const i18n = {
    fr: {
        title: "Mes Projets",
        tab_all: "Tous",
        tab_windows: "Windows",
        tab_linux: "Linux",
        tab_mac: "MacOS",
        tab_android: "Android",
        tab_web: "Web",
        win_title: "Projet Windows",
        win_desc: ".exe",
        linux_title: "Projet Linux",
        linux_desc: "Binaire",
        mac_title: "Projet MacOS",
        mac_desc: "Build Mac",
        android_title: "Projet Android",
        android_desc: "APK",
        web_title: "Projet Web",
        web_desc: "Site / WebApp"
    },

    en: {
        title: "My Projects",
        tab_all: "All",
        tab_windows: "Windows",
        tab_linux: "Linux",
        tab_mac: "MacOS",
        tab_android: "Android",
        tab_web: "Web",
        win_title: "Windows Project",
        win_desc: ".exe",
        linux_title: "Linux Project",
        linux_desc: "Binary",
        mac_title: "MacOS Project",
        mac_desc: "Mac Build",
        android_title: "Android Project",
        android_desc: "APK",
        web_title: "Web Project",
        web_desc: "Website / WebApp"
    }
};

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = i18n[lang][key];
    });

    localStorage.setItem("lang", lang);
}

function initLanguage() {
    const saved = localStorage.getItem("lang");
    const browser = navigator.language.startsWith("fr") ? "fr" : "en";
    const lang = saved || browser;

    document.getElementById("lang").value = lang;
    applyLanguage(lang);
}

document.getElementById("lang").addEventListener("change", e => {
    applyLanguage(e.target.value);
});

initLanguage();
