document.addEventListener("DOMContentLoaded", () => {
    console.log("Benvenuto nel sito dedicato al Rap e Hip-Hop!");
});

// Aggiungi l'overlay al caricamento della pagina
const overlay = document.createElement("div");
overlay.id = "transition-overlay";
document.body.appendChild(overlay);

// Rimuove l'overlay (sfuma dal nero) quando la pagina è completamente caricata
window.addEventListener("load", () => {
    overlay.classList.add("hidden");
});

// Funzione per attivare la transizione verso il nero e cambiare pagina
function startTransition(url) {
    overlay.classList.remove("hidden"); // Ritorna opacità piena (nero)
    setTimeout(() => {
        window.location.href = url; // Cambia pagina dopo l'animazione
    }, 1000); // Durata corrispondente alla transizione CSS
}

// Applica l'effetto a tutti i link
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Previene il comportamento di default
        const url = this.href;
        startTransition(url);
    });
});
