const i18n = {
    fr: {
        title: "Projets",
        tab_all: "Tous",
        tab_windows: "Windows",
        tab_linux: "Linux",
        tab_mac: "MacOS",
        tab_android: "Android",
        tab_web: "Web",
        title1: "StuAuth",
        desc1: "Authentificateur TOTP/HOTP local. Pas de cloud, pas de synchronisation, pas de suivi",
        title2: "RemoteHub",
        desc2: "Gestionnaire d'applications à distance pour Windows et Linux",
        title3: "NexusUtils",
        desc3: "Un utilitaire de bureau multiplateforme conçu pour ouvrir des pages web préconfigurées avec remplissage automatique des formulaires",
        title4: "EchoClip",
        desc4: "Un gestionnaire de presse-papiers léger",
        title5: "Shuttle",
        desc5: "Espace de travail SSH moderne avec terminal SSH, gestion de fichiers SFTP, tunneling SSH et surveillance en temps réel du serveur",
        title6: "System Monitor",
        desc6: "Gestionnaire de tâche pour windows et Linux",
        mac_title1: "Tux Whisperer",
        mac_desc1: "Un compagnon pour ton mac",
        android_title1: "Keyes IOT Home Enhanced",
        android_desc1: "Une version dérivée de Keyes IoT Home pour Android 7.0.0 et plus",
        android_title2: "Abenly",
        android_desc2: "Suivi de l'entretien des véhicule et des abonnements",
        web_title1: "Flowly.ai",
        web_desc1: "Objectivement le seul SaaS dont vous avez besoin !",
        windows_title1: "Echo",
        windows_desc1: "Compagnon d'écran personnalisable avec plusieurs fonctionnalités en WPF C#",
        windows_title2: "QtLingo",
        windows_desc2: "Traducteur automatique pour les fichiers .ts de Qt",
        windows_title3: "Générateur de QRCode",
        windows_desc3: "Générateur de QRCode Cli",
        windows_title4: "PatchRDP",
        windows_desc4: "Restauration de l'accès au lecteur de carte à puce pour les sessions Windows Remote Desktop."
    },

    en: {
        title: "Projects",
        tab_all: "All",
        tab_windows: "Windows",
        tab_linux: "Linux",
        tab_mac: "MacOS",
        tab_android: "Android",
        tab_web: "Web",
        title1: "StuAuth",
        desc1: "Local TOTP/HOTP authenticator. No cloud, no sync, no tracking",
        title2: "RemoteHub",
        desc2: "Remote App manager for Windows and Linux",
        title3: "NexusUtils",
        desc3: "A cross-platform desktop utility designed to open pre-configured web pages with automatic form filling",
        title4: "EchoClip",
        desc4: "A lightweight clipboard manager",
        title5: "Shuttle",
        desc5: "Modern SSH workspace featuring SSH terminal, SFTP file management, SSH tunneling and real‑time server monitoring",
        title6: "System Monitor",
        desc6: "Task manager for Windows and Linux",
        mac_title1: "Tux Whisperer",
        mac_desc1: "Un compagnon pour ton mac",
        android_title1: "Keyes IOT Home Enhanced",
        android_desc1: "A fork of Keyes IoT Home for Android 7.0.0 and later",
        android_title2: "Abenly",
        android_desc2: "Tracking vehicle maintenance and subscriptions",
        web_title1: "Flowly.ai",
        web_desc1: "Objectively the only SaaS you need!",
        windows_title1: "Echo",
        windows_desc1: "Customizable screenmate with several features in WPF C#",
        windows_title2: "QtLingo",
        windows_desc2: "Automatic translator for Qt .ts files",
        windows_title3: "QRCode Generator",
        windows_desc3: "CLI QR Code Generator",
        windows_title4: "PatchRDP",
        windows_desc4: "Smart card reader access restoration for Windows Remote Desktop sessions"
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
