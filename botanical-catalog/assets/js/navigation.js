/* ==========================================================
   Catálogo Botánico - Navegación y adaptabilidad visual
   ----------------------------------------------------------
   Funciones:
   - Ajuste automático del tamaño de texto en la página
     de grupos según el número de tarjetas visibles
   - Resalta los enlaces activos en navegación
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const groupContainer = document.querySelector(".group-container");
  if (!groupContainer) return;

  // Ajuste de tamaño de texto dinámico según cantidad de elementos
  const groupCount = groupContainer.children.length;
  const baseFont = 1.1;
  const adjusted = Math.max(0.9, 1.3 - groupCount * 0.05);
  groupContainer.style.fontSize = `${baseFont * adjusted}rem`;

  // Marca el grupo activo en la navegación (si existe un menú superior)
  const currentPath = window.location.pathname;
  document.querySelectorAll("a.group-item").forEach(link => {
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
// Navegación por teclado: volver atrás con Backspace cuando no se está escribiendo
document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {

        const tag = event.target.tagName.toLowerCase();
        const editable = event.target.isContentEditable;

        // Solo retrocede si NO se está editando texto
        if (tag !== "input" && tag !== "textarea" && !editable) {
            event.preventDefault(); 
            history.back();
        }
    }
});
