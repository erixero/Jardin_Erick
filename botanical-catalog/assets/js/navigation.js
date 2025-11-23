document.addEventListener("DOMContentLoaded", () => {
  const groupContainer = document.querySelector(".group-container");
  if (!groupContainer) return;

  const groupCount = groupContainer.children.length;
  const baseFont = 1.1;
  const adjusted = Math.max(0.9, 1.3 - groupCount * 0.05);
  groupContainer.style.fontSize = `${baseFont * adjusted}rem`;

  const currentPath = window.location.pathname;
  document.querySelectorAll("a.group-item").forEach(link => {
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    const tag = event.target.tagName.toLowerCase();
    const editable = event.target.isContentEditable;
    if (tag !== "input" && tag !== "textarea" && !editable) {
      event.preventDefault();
      history.back();
    }
  }
});
