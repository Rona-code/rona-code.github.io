const i18n = {
    fr: {
        // --- Header & Général ---
        title: "Stusoft",
        subtitle: "Reprenez le contrôle : logiciels locaux, souverains et sans compromis.",
        contact: "Contact",
        manifesto_title: "Pourquoi ce site ?",
        manifesto_text: "Spécialiste du développement desktop indépendant, je conçois des applications local-first. Je combats la dépendance au cloud, au tout-IA et aux géants technologiques américains pour redonner aux utilisateurs la pleine souveraineté sur leurs données privées. Pas de pistage, pas de synchronisation opaque : vos données vous appartiennent.",
        
        // --- Navigation / Onglets ---
        tab_all: "Tous",
        tab_windows: "Windows",
        tab_linux: "Linux",
        tab_mac: "MacOS",
        tab_android: "Android",
        tab_web: "Web",

        // --- Projets : Multiplateforme & Desktop (Linux/Windows) ---
        title1: "StuAuth",
        desc1: "Authentificateur TOTP/HOTP local. Pas de cloud, pas de synchronisation, pas de suivi.",
        
        title2: "RemoteHub",
        desc2: "Gestionnaire d'applications à distance pour Windows et Linux.",
        
        title3: "NexusUtils",
        desc3: "Un utilitaire de bureau multiplateforme conçu pour ouvrir des pages web préconfigurées avec remplissage automatique des formulaires.",
        
        title4: "EchoClip",
        desc4: "Un gestionnaire de presse-papiers léger.",
        
        title5: "Shuttle",
        desc5: "Espace de travail SSH moderne avec terminal SSH, gestion de fichiers SFTP, tunneling SSH et surveillance en temps réel du serveur.",
        
        title6: "System Monitor",
        desc6: "Gestionnaire de tâches pour Windows et Linux.",

        // --- Projets : MacOS ---
        mac_title1: "Tux Whisperer",
        mac_desc1: "Un compagnon pour ton Mac.",

        // --- Projets : Android ---
        android_title1: "Keyes IOT Home Enhanced",
        android_desc1: "Une version dérivée de Keyes IoT Home pour Android 7.0.0 et plus.",
        
        android_title2: "Abenly",
        android_desc2: "Suivi de l'entretien des véhicules et des abonnements.",

        // --- Projets : Web ---
        web_title1: "Flowly.ai",
        web_desc1: "Objectivement le seul SaaS dont vous avez besoin !",
        
        web_title2: "AI Remover",
        web_desc2: "Cache les aperçus de l'IA de Google dans les résultats de recherche tout en gardant tous les onglets comme Images et Vidéos pleinement fonctionnels.",

        // --- Projets : Utilitaires Windows ---
        windows_title1: "Echo",
        windows_desc1: "Compagnon d'écran personnalisable avec plusieurs fonctionnalités.",
        
        windows_title2: "QtLingo",
        windows_desc2: "Traducteur automatique pour les fichiers .ts de Qt.",
        
        windows_title3: "Générateur de QRCode",
        windows_desc3: "Générateur de QRCode CLI.",
        
        windows_title4: "PatchRDP",
        windows_desc4: "Restauration de l'accès au lecteur de carte à puce pour les sessions Windows Remote Desktop.",

        // --- Footer ---
        footer_text: "© 2026 Stusoft - Fait avec des outils locaux, sans cloud superflu.",
        footer_github: "Retrouvez-moi sur GitHub (Rona-code)"
    },

    en: {
        // --- Header & General ---
        title: "Stusoft",
        subtitle: "Take back control: local, sovereign, uncompromising software.",
        contact: "Contact",
        manifesto_title: "Why this site?",
        manifesto_text: "Specialized in independent desktop development, I build local-first applications. I fight against cloud dependency, AI hype, and tech monopolies to give users back full digital sovereignty over their private data. No tracking, no opaque sync: your data belongs to you.",
        
        // --- Navigation / Tabs ---
        tab_all: "All",
        tab_windows: "Windows",
        tab_linux: "Linux",
        tab_mac: "MacOS",
        tab_android: "Android",
        tab_web: "Web",

        // --- Projects: Cross-platform & Desktop ---
        title1: "StuAuth",
        desc1: "Local TOTP/HOTP authenticator. No cloud, no sync, no tracking.",
        
        title2: "RemoteHub",
        desc2: "Remote App manager for Windows and Linux.",
        
        title3: "NexusUtils",
        desc3: "A cross-platform desktop utility designed to open pre-configured web pages with automatic form filling.",
        
        title4: "EchoClip",
        desc4: "A lightweight clipboard manager.",
        
        title5: "Shuttle",
        desc5: "Modern SSH workspace featuring SSH terminal, SFTP file management, SSH tunneling and real-time server monitoring.",
        
        title6: "System Monitor",
        desc6: "Task manager for Windows and Linux.",

        // --- Projects: MacOS ---
        mac_title1: "Tux Whisperer",
        mac_desc1: "A companion for your Mac.",

        // --- Projects: Android ---
        android_title1: "Keyes IOT Home Enhanced",
        android_desc1: "A fork of Keyes IoT Home for Android 7.0.0 and later.",
        
        android_title2: "Abenly",
        android_desc2: "Tracking vehicle maintenance and subscriptions.",

        // --- Projects: Web ---
        web_title1: "Flowly.ai",
        web_desc1: "Objectively the only SaaS you need!",
        
        web_title2: "AI Remover",
        web_desc2: "Hides Google's AI Overviews from search results while keeping all tabs like Images and Videos fully functional.",

        // --- Projects: Windows Utilities ---
        windows_title1: "Echo",
        windows_desc1: "Customizable screenmate with several features.",
        
        windows_title2: "QtLingo",
        windows_desc2: "Automatic translator for Qt .ts files.",
        
        windows_title3: "QRCode Generator",
        windows_desc3: "CLI QR Code Generator.",
        
        windows_title4: "PatchRDP",
        windows_desc4: "Smart card reader access restoration for Windows Remote Desktop sessions.",

        // --- Footer ---
        footer_text: "© 2026 Stusoft - Made with local tools, no superfluous cloud.",
        footer_github: "Find me on GitHub (Rona-code)",
    }
};

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang] && i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
    localStorage.setItem("lang", lang);
}

function initLanguage() {
    const saved = localStorage.getItem("lang");
    const browser = navigator.language.startsWith("fr") ? "fr" : "en";
    const lang = saved || browser;

    const langSelect = document.getElementById("lang");
    if (langSelect) {
        langSelect.value = lang;
    }
    applyLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang");
    if (langSelect) {
        langSelect.addEventListener("change", e => {
            applyLanguage(e.target.value);
        });
    }
    initLanguage();
});
