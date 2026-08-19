---
title: Design kit format
description: Specification for the Beaver Builder AI design kit directory format used to import and export design systems and pages.
---

Specification for the Beaver Builder AI design kit directory format used to import and export design systems and pages.

## Format overview

A design kit is a directory containing a design system, pages, and optional global header and footer. Kits import into any Beaver Builder AI installation and export from any design system.

Every downloaded kit ships with agent instructions (`AGENTS.md`) and the full machine-parsed format specification (`spec/format-contract.md`). Those files are the authoritative contract; point your AI coding agent at them and it has everything it needs. This page summarizes the structure and the rules that matter most.

## Directory structure

A kit follows this layout, zipped for distribution:

```text
my-kit/
├── kit.json
├── AGENTS.md                 (agent instructions, included in downloads)
├── spec/                     (format specification, included in downloads)
├── design-system/
│   ├── styles.css
│   ├── script.js             (optional)
│   └── art-direction.md      (optional)
├── globals/
│   ├── header.html           (optional)
│   └── footer.html           (optional)
├── assets/                   (optional)
│   └── images/
│       └── hero.jpg
└── pages/
    ├── index.html
    ├── about.html
    └── contact.html
```

A single wrapper directory inside the zip is fine; the importer detects it. Zips are validated on upload: only expected file types are allowed, with limits of 500 files and 100 MB.

## `kit.json`

The identity manifest at the kit root. Everything else about the kit is discovered from the filesystem and the HTML content, so this file stays minimal:

```json
{
  "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "My Design Kit",
  "description": "A five-page site for a landscaping company."
}
```

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Links the kit to a design system. Generate one for a new kit (any UUID v4 generator works). Kits downloaded from an existing design system have it pre-filled. If the UUID matches a design system on the importing site, the import links to that system instead of creating a new one. |
| `name` | string | The kit name, also used as the design system name on import. |
| `description` | string | A short description shown in the import UI. |

## `design-system/styles.css`

The shared design system stylesheet, loaded by every page. It must contain three comment markers in this order, which the importer parses mechanically:

```css
/* @tokens */
:root {
  --ds-color-primary: #2563eb;
  --ds-font-heading: 'Inter', system-ui, sans-serif;
  --ds-space-md: 1rem;
  /* ... */
}

/* @reset */
*, *::before, *::after { box-sizing: border-box; }
body, h1, h2, h3, h4, h5, h6, p, blockquote, figure { margin: 0; }
h1, h2, h3, h4, h5, h6 { color: inherit; font: inherit; }
a { text-decoration: none; color: inherit; }
img { max-width: 100%; height: auto; display: block; }

/* @base */
body { font-family: var(--ds-font-body); color: var(--ds-color-text); }
.bb-container { max-width: 72rem; margin: 0 auto; padding: 0 var(--ds-space-md); }
```

Rules the importer enforces or relies on:

- Tokens use the `--ds-{category}-{name}` convention and live in exactly one `:root` block under `/* @tokens */`. Only custom properties from the first `:root` block are kept. See [Design tokens](../design-foundations/design-tokens.md) for the category conventions.
- `/* @reset */` holds the standard reset that isolates kit pages from theme styles.
- `/* @base */` holds shared utility classes. Reusable base classes use the `bb-` prefix (`.bb-container`, `.bb-btn`) to avoid collisions with themes and CSS frameworks.

Each page links this stylesheet from its `<head>`:

```html
<link rel="stylesheet" href="../design-system/styles.css" />
```

## `design-system/script.js` (optional)

Shared JavaScript used across pages, such as a scroll-reveal observer or a shared `onReady` helper. Pages that need it link it with `<script src="../design-system/script.js"></script>`. Use vanilla JavaScript with no build step and no external libraries.

## `design-system/art-direction.md` (optional)

Creative direction for the design system, written in Markdown. The AI assistant reads it when generating content for the design system after import.

The importer splits the file on a `## Business Context` heading: everything before it becomes the design system's creative guidance, and everything after it becomes the business brief.

```markdown
Confident, editorial, and warm. Generous whitespace, serif display headings,
photography with natural light. Avoid decorative flourishes.

## Business Context

A family-run landscaping company serving Portland since 2009. Residential
focus, sustainability-minded, friendly but professional voice.
```

## `pages/`

Each page is a complete, self-contained HTML document. The filename becomes the page slug, and `index.html` becomes the site homepage.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us</title>
  <meta name="post-type" content="page">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../design-system/styles.css">
  <style>
    /* @section Hero */
    .hero { padding: var(--ds-space-section) 0; }
  </style>
</head>
<body>
  <section id="hero" class="hero" data-label="Hero">
    <div class="bb-container">
      <h1 data-field="heading">Our Story</h1>
      <p data-field="intro">We started in 2009 with a simple mission.</p>
    </div>
  </section>
</body>
</html>
```

### Page metadata

Page metadata is embedded in the HTML rather than in `kit.json`:

- **Title**. The `<title>` tag becomes the WordPress post title.
- **Post type**. An optional `<meta name="post-type" content="...">` sets the post type. Defaults to `page`.
- **Slug**. Derived from the filename, so `pages/about-us.html` imports with the slug `about-us`.

### Section structure

The `<body>` contains only top-level `<section>` elements (plus `<header>` or `<footer>` only in the globals files). Each section carries three attributes with matching values:

```html
<section id="feature-grid" class="feature-grid" data-label="Feature Grid">
  <div class="bb-container">
    <!-- Section content -->
  </div>
</section>
```

The `id` is for anchor links, the `class` is what the CSS targets, and `data-label` is the human-readable name shown in the editor. The inner `bb-container` div constrains content width; full-bleed sections may omit it.

### Page CSS and JavaScript markers

Page-specific CSS lives in a single `<style>` block in `<head>`, and optional JavaScript in a `<script>` block, both organized with comment markers the parser reads:

- `/* @section {Label} */` groups rules for one section. The label must exactly match the section's `data-label`.
- `/* @page */` holds page-level utilities shared across the page's sections.
- Design-system level CSS (`@tokens`, `@reset`, `@base`) belongs in `design-system/styles.css`, never in pages.

Marker format is strict: `/* @section Hero */` parses, decorated variants like `/* --- @section Hero --- */` do not.

## Content annotations

Kit pages are plain HTML, not templates. Editable content is marked with annotation attributes, and the importer converts annotated HTML into an editable block with a settings form. Without annotations, content imports as static.

| Attribute | Purpose |
|-----------|---------|
| `data-field="key"` | Marks editable content. The field type is inferred from the tag: text on headings and spans, image on `<img>`, svg on `<svg>`, link on `<a href>`. |
| `data-field-href="key"` | Marks only the URL of an `<a>` as editable, for anchors wrapping structured content. |
| `data-field-type="..."` | Overrides the inferred type: `editor` for rich text, `textarea` for multi-line plain text, `rating` for rating indicators. |
| `data-repeater="key"` | Marks a container whose children repeat, such as a card grid. |
| `data-repeater-item` | Marks each direct child of a repeater container. |
| `data-field-label="..."` | Optional. Sets the field's display label in the settings form instead of one derived from the key. |
| `data-field-section="..."` | Optional. Groups the field into a labeled section in the settings form. |
| `data-field-order="N"` | Optional. Numeric sort order for the field within its section or container. |

Key rules from the format contract:

- Field keys use snake_case (`hero_title`, `author_name`), and related fields share a prefix so the settings form groups them.
- All visible text, images, and meaningful icons should carry `data-field` so they are editable after import.
- Any group of two or more same-kind siblings is a repeater. Never use numbered keys like `item1_title`; use one key inside a repeater.
- Fields must not nest inside other fields; use sibling elements.
- Repeater items needing different visual treatments use a descriptive CSS class per item, which the importer turns into a variation selector. See [Modules and blocks](../build/modules-and-blocks.md#variations).

## `globals/header.html` and `globals/footer.html` (optional)

Global files use the same document format as pages, with two differences: the `<body>` contains a single `<header>` or `<footer>` element, and the style and script blocks use a single `/* @section Header */` or `/* @section Footer */` marker.

On import, the header and footer become Beaver Themer layouts (Beaver Builder) or site editor template parts (block editor), depending on the editor chosen in the import wizard.

## Fonts

Declare Google Fonts as `<link>` tags in each page's `<head>`, requesting exactly the weights and styles the CSS uses. The importer reads the font list from the kit's first page and preserves the requested variants end to end, with font families referenced in the token CSS as a fallback. Do not use CSS `@import` for fonts.

If the kit declares `--ds-weight-*` tokens, the requested variants must cover every weight those tokens reference.

## Images

Use real image URLs with descriptive `alt` text. The importer uses the alt text to find a replacement for any image that fails to load, so the alt text should describe the ideal image content. Decorative CSS `background-image` URLs are automatically promoted to editable image fields.

### Local images in `assets/`

A kit can ship its own images in an `assets/` folder at the kit root. Link them with relative paths, for example `../assets/images/hero.jpg` from a file in `pages/`. Organize the folder however you like; the importer scans all of it.

On import, every supported image (`jpg`, `png`, `gif`, and `webp`) is added to the WordPress media library, and every reference to it is repointed to the new attachment URL, in markup and in CSS `url()` values alike. Skipped or failed files are reported in the import summary.

Two rules to keep in mind:

- Vector art must be an inline `<svg>` element, never an `.svg` file in `assets/`. SVG files do not enter the media library, so they are reported as skipped and their links would break.
- Remote `https://` image URLs still work, so you can mix them with local assets freely. Keep local files web-optimized, since kits upload through the server's normal file size limits.
