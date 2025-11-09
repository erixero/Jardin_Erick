# 🌿 Catálogo Botánico

**Catálogo Botánico** es un proyecto personal que documenta, clasifica e ilustra las especies vegetales de un jardín privado.  
Organiza las plantas por grupos botánicos y muestra fichas detalladas con información sobre sus características, cuidados y usos.

---

## 🧱 Estructura general

- **`index.html`**  
  Página principal del sitio. Presenta los grupos botánicos principales.

- **`assets/`**  
  Carpeta que contiene todos los recursos reutilizables:
  - **`css/style.css`** → Hoja de estilos global.  
  - **`js/`** → Scripts modulares que manejan el comportamiento general:
    - `main.js`: controla la ampliación de imágenes.  
    - `navigation.js`: ajusta dinámicamente los tamaños de texto.  
    - `footer.js`: inserta el pie de página en las fichas de especies.  
  - **`icons/`** → Íconos SVG en castellano.  
  - **`images/`** → Imágenes de fondo.  
  - **`photos/`** → Fotografías de las plantas.

- **`groups/`**  
  Contiene las páginas que agrupan las especies por tipo:
  - `ornamentales-flor.html`  
  - `aromaticas-medicinales.html`  
  - `frutales.html`

- **`species/`**  
  Subcarpetas con fichas detalladas de cada planta, organizadas por grupo.

---

## 🪴 Cómo agregar una nueva especie

1. Crea un nuevo archivo HTML dentro de la carpeta correspondiente en `/species/`.  
   Ejemplo:
    `/species/aromaticas-medicinales/romero.html`

2. Copia la plantilla base de una ficha existente (por ejemplo, `rosa.html`).

3. Actualiza:
- **Nombre científico y común.**  
- **Imágenes**, colocándolas en `/assets/photos/`.  
- **Textos descriptivos** de identificación, cuidados y usos.

4. Usa rutas relativas consistentes:
``` html
<img src="../../assets/icons/riego.svg" alt="Riego">
<img src="../../assets/photos/romero_1.jpg" alt="Romero">
```

5. Agrega un enlace a la nueva ficha dentro del grupo correspondiente
    `groups/aromaticas-medicinales.html`

## 📂 Estructura de carpetas y archivos
botanical-catalog/
├── index.html
├── assets/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ ├── main.js
│ │ ├── navigation.js
│ │ └── footer.js
│ ├── icons/
│ │ ├── ornamentales.svg
│ │ ├── aromaticas.svg
│ │ ├── frutales.svg
│ │ ├── identificacion.svg
│ │ ├── caracteristicas.svg
│ │ ├── luz.svg
│ │ ├── riego.svg
│ │ ├── sustrato.svg
│ │ ├── temperatura.svg
│ │ ├── fertilizacion.svg
│ │ ├── floracion.svg
│ │ ├── poda.svg
│ │ ├── propagacion.svg
│ │ ├── usos.svg
│ │ └── default.svg
│ ├── backgrounds/
│ │ ├── index.jpg
│ │ └── general.jpg
│ └── photos/
│ ├── rosa_1.jpg
│ ├── rosa_2.jpg
│ ├── canna_indica_1.jpg
│ ├── canna_indica_2.jpg
│ ├── spider_plant.jpg
│ ├── lemon_tree_pot.jpg
│ ├── cypress_tree_1.jpg
│ ├── cypress_tree_2.jpg
│ ├── cypress_tree_3.jpg
│ ├── banana_tree.jpg
│ └── others...
├── groups/
│ ├── ornamentales-flor.html
│ ├── aromaticas-medicinales.html
│ └── frutales.html
└── species/
├── ornamentales-flor/
│ ├── rosa.html
│ └── canna_indica.html
├── aromaticas-medicinales/
│ └── menta.html
└── frutales/
├── lemon_tree_pot.html
├── banana_tree.html
└── cypress_tree.html
