// --- Lógica para los modales de Equipo (ya la tenías) ---
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// --- Lógica nueva para la Galería ---
const galleryModal = document.getElementById("gallery-modal");
const galleryImg = document.getElementById("gallery-img");
const galleryClose = document.getElementById("gallery-close");

// Seleccionamos todos los items de la galería
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const imgInside = item.querySelector("img");
    galleryModal.style.display = "block";
    galleryImg.src = imgInside.src; // Pasa la ruta de la imagen
  });
});

// Cerrar el modal de galería al hacer clic en la X
if(galleryClose) {
    galleryClose.onclick = function() {
        galleryModal.style.display = "none";
    }
}

// Cerrar cualquier modal al hacer clic fuera del contenido
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}