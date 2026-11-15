# Criterio de diseño del portfolio

Fuente de verdad para cualquier cambio, caso nuevo o rediseño. Si el sitio cambia, se actualiza este archivo.

> **Estado (15 de noviembre de 2026):** todo el sitio usa el lenguaje "diario digital" de la sección 0: la home (`index.html` + `diario.css`) y los casos (`*.html` + `diario.css` + `caso.css`). Los casos actuales y sus reglas están en la sección 0b. Las secciones 1 a 6 describen el diseño **anterior** (`styles.css`, `cs.css`) y quedan como referencia histórica.
>
> Este archivo no se publica: `.vercelignore` lo excluye del deploy.
>
> **Formato de caso:** está definido en la skill del agente portfolio (`references/caso-de-estudio.md` + `references/plantilla-caso.html`). Resumen: hero (kicker, titular igual al de la home, bajada, ficha Rol · Proyecto · Equipo · Alcance (sin años), **En corto**: Problema · Mi rol · Resultado, imagen 1920×788) → desafío + contexto/enfoque → secciones 01 Discovery · 02 Framing · 03 **Decisiones clave** · 04 Diseño · 05 Reflexión (con índice lateral automático de `cs-nav.js`) → resultado en números (bloque negro, números en el color del caso) → próximo caso → contacto. Cada caso define su color con `<body style="--case:#HEX">`. Orden de los casos = orden de la home; "Case NN / TOTAL" y "Next project" siguen ese orden.

## 0. Home · Diario digital (nov 2026)

**Concepto:** la home se lee como la portada de un diario digital sobre tu trabajo. El tono es cálido y con humor ("Product designer says business and users *can agree*") y cada recurso de diario se usa una sola vez.

**Tokens** (`diario.css :root`):
- Papel `#F7F5F0`, tinta `#121212`, texto secundario `#3D3D3D` / `#5E5E5E`, filetes `rgba(18,18,18,.2)`, acento `#FFD146` (solo como resaltador).
- Newsreader (titulares y texto, itálica 600 para énfasis), Inter Tight (UI y navegación), IBM Plex Mono (etiquetas en mayúsculas, ticker, fechas).
- Ancho máximo 1200px; márgenes laterales de 48px en desktop y 20px en mobile (≤760px).

**Estructura:**
1. Ticker negro "● Live" con un solo mensaje (Open to work · Senior Product Designer · Buenos Aires).
2. Cabezal "Angelo." (punto resaltado) + fecha del día y EN/ES; debajo, la navegación Work · About · Writing y la píldora Contact.
3. Hero: etiqueta "Front page", titular con resaltado, bajada, botón negro; retrato B/N con trama.
4. Franja "Worked with" con los logos.
5. The Work: nota principal (16:10) + columna lateral (4:3) + fila inferior (16:10) + "Next edition".
6. Opinion: cita centrada con resaltado + 10+ / 30+ / BA.
7. Writing: bloque amarillo de columnista + lista de textos.
8. Footer: "Wanna talk? contact me :)".

**Reglas:**
- Cada sección abre con su título y un filete de 3px; no se suman más líneas que esa.
- **Portadas de proyectos:** cuadro de proporción fija con el color del caso y uno de tres tratamientos: `.bleed` (pantallas cortadas abajo, apoyadas en la base), `.float` (pieza completa, centrada con margen) o `.fill` (collage, de borde a borde). Un caso nuevo elige el tratamiento según cómo es su imagen.
- Bilingüe con `<span data-lang>` + `i18n.js`. Los textos en español deben tener un largo parecido al inglés para no romper el hero ni la navegación.
- Mobile: tocables de 44px o más, una columna, fotos en 4:3.

## 0b. Casos actuales (nov 2026)

| Orden | Caso | Archivo | `--case` | Rol | Visible |
|---|---|---|---|---|---|
| 1 | Tecito | `tecito.html` | `#D3DDCB` salvia | Fundador | siempre |
| 2 | Heavy Rampers | `heavy-rampers-k7q4m2.html` | `#141414` negro + lima | Product Designer | solo /fintech |
| 3 | Lemon Earn | `earn-k7q4m2.html` | `#E3D7FF` lavanda | Product Designer | solo /fintech |
| 4 | We Join | `wejoin.html` | `#FFD146` amarillo | Product Designer | siempre |
| 5 | Zerenly | `zerenly.html` | `#EBD2FD` lila | UX Designer | siempre |
| 6 | Grido | `grido.html` | `#86CDE9` celeste | UX Designer | siempre |
| 7 | Henry | `henry.html` | `#CBADFF` violeta | UX Designer | siempre |
| — | Grape | `grape.html` | `#F5D1F5` rosa | Product Designer | sin link (se guarda por si vuelve) |

**Casos de Lemon (ocultos):**
- Se ven solo entrando por `/fintech` (un rewrite de `vercel.json` a `index.html`) o con `?hr=k7q4m2`. El script de `index.html` lo recuerda en `sessionStorage 'lemon'`.
- En ese modo la home usa el layout B: Heavy y Earn en la columna lateral, y We Join, Zerenly, Grido y Henry en la fila de abajo. El contador pasa a "7 casos".
- Sus páginas llevan `noindex` y no se enlazan desde la versión pública.
- No llevan cifras absolutas del negocio.

**Cadena de "Próximo proyecto":**
- Tecito → We Join → Zerenly → Grido → Henry → Tecito.
- Heavy → Earn → We Join.

**Reglas de contenido:**
- **Sin años.** No se pone el año de los proyectos viejos, para que no se lean como desactualizados.
- **Rol según el proyecto.** La ficha dice el rol en ese proyecto, sin el nivel (Senior va solo en la home). La celda "Proyecto" dice el contexto ("Proyecto de cliente en Paisanos", "Lemon", "Proyecto propio").
- **No inventar métricas.** Si no hay un número real, el resultado se cuenta con lo que se entregó o se aprendió. Ejemplo: We Join fue una prueba de concepto y lo dice.
- **Voz natural.** Evitar los tics que suenan a texto generado:
  - el contraste "no es X, es Y" repetido (como mucho uno por caso, en la cita destacada);
  - los aforismos de cierre;
  - frases como "hizo más que cualquier pantalla" o "una mirada que hoy llevo a todo brief".
- **Decisiones.** Cada caso tiene tres, con las opciones consideradas, la elegida, el "Por qué" y el "Resigné".

## 1. Concepto

**Editorial con un toque de cuaderno de diseñador.** Usa una serif de revista para los titulares, una mono para los metadatos y un único acento amarillo, como un resaltador sobre papel gris. El tono es seguro y cálido, con un guiño ("contact me :)").

Tensiones que el diseño mantiene a propósito:
- **Contorno + relleno** en los titulares: una palabra en outline y otra sólida resaltada ("~~Some of my~~ **projects**").
- **Blanco y negro + color**: retrato B/N detrás y recorte a color encima. La foto de About también va en B/N.
- **Sobrio + juguetón**: grilla limpia y mucho aire, con microinteracciones (el logo rota en hover, las cards se elevan, las filas del blog se invierten a oscuro).

## 2. Tokens (`styles.css :root`)

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#F0F0F0` | fondo general (gris papel, nunca blanco puro) |
| `--paper` | `#FFFFFF` | cards |
| `--ink` / `--ink-soft` / `--muted` | `#0E0E0E` / `#555` / `#8C8C8C` | texto principal, cuerpo, metadatos |
| `--line` / `--line-2` | negro al 12% / 22% | divisores de 1px |
| `--dark` / `--on-dark` | `#1A1A1A` / `#E6E5E3` | footer y hovers invertidos |
| `--yellow` | `#FFD146` | el acento de marca: resaltado `.hl`, franja del hero, hover de redes |
| `--accent` / `--accent-ink` | uno por caso | color propio de cada proyecto (ver §5) |
| `--maxw` | `1240px` | ancho máximo; `.wrap` con 48px de padding lateral |

**Tipografía** (las tres de Google Fonts):
- `--display` **Crimson Text 700**: titulares y números grandes. Tracking negativo (−0.02 a −0.03em) y line-height apretado (0.92 a 1.08).
- `--body` **Inter 300/400**: cuerpo. El 300 se usa en párrafos largos, con line-height de 1.5 a 1.72.
- `--mono` **IBM Plex Mono**: eyebrows, labels y metadatos, siempre en MAYÚSCULAS a 9.5–11px con tracking de 0.16–0.18em.

**Formas**: cards con radius de 16px y logo con radius de 9px. Sombra solo en hover (`0 20px 40px -16px rgba(0,0,0,.15)`). Bordes de 1px con `--line`.

**Movimiento**: curvas suaves `cubic-bezier(.2,.7,.2,1)` de 0.2 a 0.35s. Entrada escalonada `.anim .anim-d1…d5`. El nav se oculta al bajar y aparece al subir (solo en desktop).

**Breakpoints**: 1100, 980, 768, 700 y 560px.

## 3. Patrones recurrentes

- **Titular de sección** (`.sec-head .t`): palabra en outline (`-webkit-text-stroke:1.5px`) + palabra con `.hl`. Alterna la alineación: centro en Work, izquierda en About y derecha en Blog.
- **Eyebrow numerado**: `01 · UX / UI · Producto` en mono y muted.
- **Card de proyecto** (`.card`): eyebrow (disciplina · industria) + h3 serif ("Nombre, descriptor corto") + bajada de una línea en Inter 300 + mockup que se sale del borde + flecha `.corner`. Variantes: `.wide` (ancho completo), `.card--col` (vertical, cuadrada) y filas `.card-row` 2fr/1fr.
- **Stats**: número grande serif + label mono debajo, separados por divisores verticales.
- **Bilingüe**: todo texto va duplicado como `<span data-lang="en">` y `<span data-lang="es">`. Lo maneja `i18n.js` y se guarda en `localStorage`. Las imágenes con texto también existen en dos versiones (`assets/<slug>/en|es/`). **Nunca se agrega texto en un solo idioma.**

## 4. Estructura de un caso de estudio

Todos los casos siguen la misma secuencia (ver `zerenly.html`, que es el más limpio y no tiene el panel de tweaks):

1. **`cs-hero`**: imagen de fondo (`assets/hero/hero-<slug>-opt.jpg`), número grande, eyebrow, h1 "**Nombre,** <span opacity .5>descriptor</span>" y tagline de una oración.
2. **`cs-meta`**: 4 celdas (Rol · Industria · Equipo · Alcance).
3. **`cs-over`**: a la izquierda, "The challenge" con un h2 que es *el desafío en una oración imperativa* ("Make X Y and Z.") más los chips del proceso. A la derecha, el contexto en 2 o 3 párrafos.
4. **`cs-layout`**: sidenav sticky que arma `cs-nav.js` + 4 o 5 `cs-section`. Cada sección tiene un eyebrow numerado con una palabra (Discovery, Framing, …), un h2, un `.sub` (bajada corta y con personalidad, como "Trust and warmth, in yellow and black.") y un `.cs-body` con párrafos donde se resaltan los hallazgos en `<strong>`, más figuras `.fig` con su figcaption.
   - Arco típico: **Discovery → Framing → (Architecture / Opportunity / Journeys) → UI → Reflection**.
5. **`cs-outcome`**: un h2 con la conclusión en una oración + 3 columnas con un número o palabra grande y una explicación ("0 → 1", "4", "Trust").
6. **`cs-next`**: link al siguiente proyecto. Cadena actual: wejoin → zerenly → henry → grido → grape → wejoin.
7. Footer compartido.

**Voz de los casos**: frases cortas, con el desafío en modo imperativo y las conclusiones como titular. Las decisiones se justifican con evidencia ("A/B testing was decisive: …") y la reflexión es honesta.

## 5. Acentos por caso

| Caso | `--accent` | Industria |
|---|---|---|
| WeJoin | `#FFD146` amarillo | Servicios del hogar |
| Zerenly | `#EBD2FD` lila | Salud mental |
| Grape | `#F5D1F5` rosa | Fintech senior |
| Grido | `#86CDE9` celeste | Retail / delivery |
| Henry | `#CBADFF` violeta | Edtech |

Regla: los acentos son **pasteles claros con `--accent-ink` casi negro**. El caso nuevo tiene que tomar un tono distinto de los existentes y derivarlo de la marca del proyecto.

## 6. Cómo agregar un caso nuevo (checklist)

> **Reemplazado (nov 2026):** para casos nuevos usar la plantilla y el checklist de la skill (`plantilla-caso.html` + `caso-de-estudio.md`). Lo de abajo describe el método anterior.

1. Copiar `zerenly.html` → `<slug>.html` y cambiar `--accent`, `data-screen-label`, el hero, el meta, el overview, las secciones, el outcome y `cs-next`.
2. Crear los assets: `assets/hero/hero-<slug>-opt.jpg`, `assets/card-<slug>.webp` y `assets/<slug>/{en,es}/` para las imágenes con texto. Usar webp siempre que se pueda.
3. Agregar la card en `index.html` respetando el ritmo de la grilla (wide → fila 2fr/1fr → wide → fila).
4. Insertar el caso en la cadena de `cs-next` (el anterior apunta al nuevo y el nuevo al siguiente).
5. Si reemplaza a "Pinamed (Soon)", quitar el badge y activar el link.
6. Subir el `?v=` de `styles.css` y `cs.css` si se tocaron.
7. Revisar EN y ES, mobile (≤768px) y que no haya texto en un solo idioma.

## 7. Deuda conocida

- Abundan los estilos inline en `index.html` (cards y stats). Al tocar algo, preferir mover a clases en lugar de sumar inline.
- `styles.css` y `cs.css` no los carga ninguna página (revisado el 15/11/2026, Grape incluida). Se pueden borrar.
- `tecito.html` tiene métricas de ejemplo (beta, turnos, ausencias, entrevistas) que hay que reemplazar por datos reales.
