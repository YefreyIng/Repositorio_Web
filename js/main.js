// --- Lógica para los modales de Equipo (ya la tenías) ---
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
const galleryModal = document.getElementById("gallery-modal");
const galleryImg = document.getElementById("gallery-img");
const galleryClose = document.getElementById("gallery-close");

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const imgInside = item.querySelector("img");
    galleryModal.style.display = "flex";
    galleryImg.src = imgInside.src;
  });
});

galleryClose.onclick = function() {
  galleryModal.style.display = "none";
}
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
  this.reset();
});