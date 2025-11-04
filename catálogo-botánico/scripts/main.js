document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imagenAmpliada");
  const cerrar = document.getElementById("cerrar");

  document.querySelectorAll(".expandible").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  cerrar.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
  document.addEventListener("keydown", e => { if (e.key === "Escape") modal.style.display = "none"; });
});
