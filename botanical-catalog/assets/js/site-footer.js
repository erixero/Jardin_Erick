const template = document.createElement("template");
template.innerHTML = `
  <footer class="site-footer">
    <p class="site-footer__text">
      <strong>© 2025 Catálogo Botánico — Proyecto personal de jardinería</strong>
    </p>
  </footer>
`;

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("site-footer", SiteFooter);
