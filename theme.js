function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light");
        document.getElementById("theme-toggle").textContent = "🌙";
    } else {
        document.body.classList.remove("light");
        document.getElementById("theme-toggle").textContent = "☀️";
    }

    localStorage.setItem("theme", theme);
}

function initTheme() {
    const saved = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const theme = saved || system;

    applyTheme(theme);
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.body.classList.contains("light") ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
});

initTheme();
