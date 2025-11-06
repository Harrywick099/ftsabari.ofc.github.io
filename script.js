// Enable smooth horizontal scroll using mouse wheel or touch
document.querySelector("#playlist-pad").addEventListener("wheel", e => {
  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY;
}, { passive: false });

console.log("🎶 Sabari’s multi-playlist pad loaded successfully!");
