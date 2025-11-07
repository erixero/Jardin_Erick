/* ----------------------------------------------------------
   Catálogo Botánico — Funciones Interactivas
   Versión unificada 2025
---------------------------------------------------------- */

// Esperar a que el documento cargue
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const imagenAmpliada = document.getElementById("imagenAmpliada");
  const cerrar = document.getElementById("cerrar");

  // Función para abrir la imagen en modal
  document.querySelectorAll(".expandible").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      imagenAmpliada.src = img.src;
      imagenAmpliada.alt = img.alt;
    });
  });

  // Cerrar al hacer clic en la X
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar si se hace clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
});
