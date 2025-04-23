document.addEventListener("DOMContentLoaded", () => {
    console.log("Tonight's the night. And it's going to happen again and again. Has to happen. Miami's a great town. Love the cuban food, pork sandwiches -- my favorite...but I'm hungry for something different now. My name is Dexter -- Dexter Morgan and I'm going to kill this man tonight.");
});

// Aggiunge l'overlay al caricamento della pagina
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
