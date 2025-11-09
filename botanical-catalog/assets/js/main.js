/* ==========================================================
   Catálogo Botánico - Script principal
   ----------------------------------------------------------
   Funciones:
   - Ampliar imágenes al hacer clic (modo galería)
   - Cerrar el modal con clic o tecla Escape
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imagenAmpliada");
  const closeBtn = document.getElementById("cerrar");

  if (!modal || !modalImg || !closeBtn) return;

  // Abre la imagen en pantalla completa
  document.querySelectorAll(".expandible").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Cierra el modal al presionar el botón “X”
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cierra el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Cierra el modal al presionar la tecla Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.style.display = "none";
  });
});
