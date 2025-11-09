/* ==========================================================
   Catálogo Botánico - Pie de página dinámico
   ----------------------------------------------------------
   Funciones:
   - Inserta automáticamente los botones de navegación
     en cada ficha de especie
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-nav");
  if (!footer) return;

  // Inserta los botones de navegación comunes
  footer.innerHTML = `
    <div class="footer-buttons">
      <button class="btn-nav" onclick="history.back()">⬅️ Volver al grupo</button>
      <button class="btn-nav main" onclick="window.location.href='../../index.html'">🏠 Inicio</button>
    </div>
  `;
});
