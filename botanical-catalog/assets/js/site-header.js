const template = document.createElement("template");
template.innerHTML = `
  <header class="site-header">
    <h1 class="site-header__title">Catálogo Botánico</h1>
  </header>
`;

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("site-header", SiteHeader);
