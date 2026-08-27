---
title: Modules and blocks
description: Understand the design system sections Beaver Builder AI generates, why they are modules in Beaver Builder and blocks in the block editor, and how to hand-author their Mustache templates, CSS, JavaScript, and settings forms.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Understand the design system sections Beaver Builder AI generates, why they are modules in Beaver Builder and blocks in the block editor, and how to hand-author their Mustache templates, CSS, JavaScript, and settings forms.

## What are modules and blocks

Beaver Builder AI generates page sections as self-contained units: heroes, feature grids, testimonials, forms, and any other page component. What that unit is called depends on which editor you are working in.

- **In the Beaver Builder editor**, generated content arrives as **modules** in your layout. Each one is a [Custom module](../build/custom-module.md), the same module type you can drag onto the page yourself from the **Basic** group.
- **In the WordPress block editor**, generated content arrives as **blocks**, stored as a single generic block type in the post content.

Underneath the two names sit the same thing. Unlike traditional Beaver Builder modules, these are not PHP classes. Each one is data: an HTML template plus CSS, optional JavaScript, and a settings form. That is what lets the same section work in Beaver Builder, in the block editor, and in static HTML export.

:::info
Only the container name and the editing interface differ between the two editors. Everything from [Writing the template](#writing-the-template) onward applies identically in both, so the same template you write in Beaver Builder behaves the same way in the block editor.
:::

A simplified copy of each section's content is also saved to the regular post content, so your content survives if the plugin or Beaver Builder is deactivated.

## Anatomy

Every module or block consists of four parts, three you edit as code and one that is generated for you.

- **HTML template**. Ordinary HTML with [Mustache](https://mustache.github.io/) placeholders such as `{{{settings.heading}}}` that are replaced at render time with values from the settings.
- **CSS**. Styles for this section only. The CSS is scoped automatically when the page renders, so its selectors cannot affect the rest of the page.
- **JavaScript**. Optional behavior for interactive sections such as tabs, sliders, or counters.
- **Settings form**. The fields editors fill in. The form is derived from the template: every placeholder becomes a field, and the field's type is inferred from the HTML around it. See [Field types](../developer/field-types.md) for the full reference.

You never build the form separately. You write placeholders in the template, and the fields appear.

:::note
When the AI builds a section, it writes plain HTML with internal annotation attributes that the plugin compiles into the Mustache template you see. You do not write those annotations yourself. What you edit is the finished template: HTML with `{{settings.*}}` placeholders in it.
:::

## Creating modules and blocks

There are two routes: describe what you want to the AI, or assemble it by hand. Hand-authoring is available in Beaver Builder only.

### With the AI assistant

Describe the section you want in the AI chat and it generates the template, CSS, and settings form together.

- "Create a testimonial card with a quote, author name, and author photo"
- "Build a feature row with an icon, heading, and short description"
- "Generate a call-to-action section with a heading, subheading, and button"

The section appears on the page as it streams in, and every value you would want to edit becomes a settings field automatically. This works the same way in both editors.

### By hand in Beaver Builder

To build without the AI, use the **Custom** module in the **Basic** group of Beaver Builder's content panel. It begins with a small working template whose HTML, CSS, and JavaScript you edit directly.

See [Custom module](custom-module.md).

In the block editor there is no equivalent. Design system sections do not appear in the block inserter, so they are created through the AI chat.

## Editing modules and blocks

Select a section on the canvas to edit it. The available panels differ by editor.

<Tabs>
<TabItem value="beaver-builder" label="Beaver Builder" default>

The module settings panel opens with a **Content** tab holding the generated settings form. Users with code access also see two more tabs:

- **Design** styles any element in the module visually, with full CSS property controls including interaction states and your site's responsive breakpoints. Edits are written into the module's own CSS as classes, so anything you do visually stays visible and editable as code.
- **Code** has panes for the module's HTML template, CSS, and JavaScript.

Code access means the ability to create design system content combined with Beaver Builder's unrestricted editing access. Editors without it can still fill in the Content tab. See [Custom module](custom-module.md#who-sees-the-design-and-code-tabs).

</TabItem>
<TabItem value="block-editor" label="Block editor">

The settings form appears in the right sidebar under the **Block** tab. Editing the underlying HTML, CSS, and JavaScript is done in Beaver Builder or through the AI chat.

</TabItem>
</Tabs>

Changes re-render immediately in both editors. You can also edit text, images, and links directly on the canvas, restructure the section with drag and drop, or ask the AI to change it.

## Writing the template

The template is ordinary HTML with Mustache placeholders mixed in. Adding an editable heading takes one line.

```html
<h2>{{{settings.section_heading}}}</h2>
```

Save, and a field labelled "Section Heading" appears in the settings form, ready to fill in. That is the whole mechanism: type a placeholder, get a field.

### Four rules

These four rules prevent almost every hand-authoring mistake.

- **Wrap everything in a single root element.** The section attaches its identity and scoped styles to the template's first element, so the template must start with one outer element containing the rest. Without it, styling quietly stops working.
- **Triple braces for content, double braces for attributes.** Use `{{{settings.body}}}` for visible content inside a tag, which renders raw HTML, and the escaped `{{settings.photo}}` form inside attribute values such as `src` and `href`.
- **Use `settings.` at the top level and bare names inside repeats.** A placeholder in the main template is written `{{{settings.title}}}`. Inside a repeating list the same field is written bare, as `{{{title}}}`.
- **Name fields in snake_case.** Letters, numbers, and underscores only, like `hero_title`. A dot addresses a sub-value such as `.alt` or `.href`, so it can never be part of a field name.

### How placeholders become fields

You do not pick a field type directly. The type comes from the HTML around each placeholder, so the way you write the markup is the way you steer it.

```html
<section class="team-intro">
  <h2>{{{settings.heading}}}</h2>
  <p>{{{settings.body}}}</p>
  <img src="{{settings.photo}}" alt="{{settings.photo.alt}}" />
  <a href="{{settings.cta.href}}">{{{settings.cta.text}}}</a>
</section>
```

| What you write | Field you get |
| --- | --- |
| Text inside a heading, paragraph, span, button, or list item | Text |
| The flat token in an `<img>` `src` | Image, with alt text |
| A plain token in an `<a href>` | URL |
| The `.href` and `.text` pair in an `<a>` | Link, with text, URL, new window, and nofollow |
| A repeat block | Repeater |

Text fields adapt to their content. Short values such as headings and labels edit as a simple input that grows as you type, and paragraph-length content edits as rich text with a formatting toolbar. You do not choose between the two, the field follows its content.

Icon (SVG) and rating fields also exist, but they are typically set up by the AI and are not practical to create by hand today.

:::warning
For images, always write the flat token in `src`, as `{{settings.photo}}`. The dotted `{{settings.photo.url}}` form still renders the picture but produces no editable image field, so your team cannot swap the image. The `.alt` sub-value belongs in the `alt` attribute.
:::

:::note
A text field you add by hand starts as a simple input. Making the rich-text editor appear for a brand-new field, and giving it a rich starting value, is still being improved, so keep it in mind when you build a section from scratch.
:::

### Conditional content

Sections render their contents when a value is truthy, and inverted sections render when it is falsy.

```html
{{#settings.show_button}}
<a class="card-button" href="{{settings.cta.href}}">{{{settings.cta.text}}}</a>
{{/settings.show_button}}

{{^settings.photo}}
<div class="card-placeholder"></div>
{{/settings.photo}}
```

Variable interpolation, sections, inverted sections, and dot notation are supported. Mustache partials and comments are not.

### Repeating content

When a section shows a list of similar items, write the item once inside a repeat block and the form gets an add button for creating as many as needed.

```html
<div class="features">
  {{#settings.features}}
  <div class="feature">
    <div class="feature-icon">{{{icon}}}</div>
    <h3>{{{title}}}</h3>
    <p>{{{description}}}</p>
  </div>
  {{/settings.features}}
</div>
```

Three things matter here.

- The open and close names must match exactly.
- Placeholders inside the repeat are written bare, without the `settings.` prefix.
- Everything between the open and close is the template for one item, and each editable value inside an item needs its own placeholder.

The repeat's name labels the form group and its add button, so a repeat called `features` produces a Features group with an Add Feature button. Name your repeats for the thing they hold.

### Renaming fields safely

Rename a placeholder in the template and the content your team already entered follows it to the new name instead of disappearing.

- Rename one field at a time. The recovery works by matching the old value to a single new home, so renaming several at once can leave values where they were.
- Nothing is lost while you edit. Undo brings the value back, and values without a home are only cleaned up when the section is saved.

:::note
Renaming a token here means renaming a Mustache placeholder, the `{{settings.name}}` part of the template. It is unrelated to [design tokens](../design-foundations/design-tokens.md).
:::

## Shaping the settings form

Out of the box the form is sensible, so you often need nothing more than the defaults.

- Fields appear in template order.
- Labels are built from field names, so `hero_title` becomes "Hero Title". Common acronyms are capitalized for you, so `cta_text` becomes "CTA Text" and `api_url` becomes "API URL".
- Two or more neighboring fields that share a name prefix group together on their own. Name a pair `hero_title` and `hero_subtitle`, place them next to each other, and they gather into a Hero group.

For explicit control, three optional attributes go on the same element that carries the placeholder.

```html
<h2
  data-field-label="Section Heading"
  data-field-section="Header"
  data-field-order="1">{{{settings.title}}}</h2>
```

| Attribute | Type | Description |
| --- | --- | --- |
| `data-field-label` | string | Sets the field's label, overriding the one built from the field name. |
| `data-field-section` | string | Groups the field under a named section in the form. Fields sharing a section value gather together even when they are not adjacent in the template. An empty value is ignored. |
| `data-field-order` | number | Sets the field's position within its section or container. Lower numbers come first, and a non-numeric value is ignored. |

These attributes only affect the settings form. They are stripped before the section renders, so they never appear in your published markup, and a typo in one of them cannot break the form.

## Writing CSS

The CSS is plain CSS, scoped automatically at render time so a rule like `.card` only reaches elements inside this section.

```css
.card {
  background: var(--ds-color-surface);
  border-radius: var(--ds-radius-md, 0.5rem);
  padding: var(--ds-space-lg);
}

.card-heading {
  font-family: var(--ds-font-heading);
  font-size: var(--ds-text-xl);
  color: var(--ds-color-text);
}
```

One detail is worth knowing: to style the section's own root element, use one of the root element's classes. Any other selector is treated as matching something inside. If your root is `<section class="promo">`, then `.promo` styles that outer element and `.promo-inner` styles a descendant.

Everything else behaves as normal CSS. Media queries, keyframes, hover states, and custom properties all work as expected.

Reference [design tokens](../design-foundations/design-tokens.md) so sections stay consistent with the design system, and provide a fallback in the `var()` call when a token might not exist in every system, such as `var(--ds-radius-md, 0.5rem)`.

:::note
Block CSS uses no comment markers. If you have seen CSS with markers such as `/* @base */` or `/* @section */`, those belong to page generation, not to individual modules and blocks.
:::

Styles that should apply to every page belong in the design system's base CSS rather than here. See [Design systems](../design-foundations/design-systems.md#editing-a-design-system).

## Writing JavaScript

The JavaScript is vanilla JavaScript that runs once the section is on the page. Timing is handled for you, so a plain `DOMContentLoaded` or `load` listener still fires correctly even if the page finished loading before the code ran, and errors are caught and logged so a mistake cannot take down the page.

Unlike CSS, JavaScript is not scoped, and your code is not handed a reference to this particular instance. That is fine for a section used once, but if the same section appears more than once on a page, `document.querySelector( '.card' )` grabs the first match anywhere, which may belong to a different copy. Give the root element a distinctive class and query inside it.

```js
const root = document.querySelector( '.promo' );
if ( root ) {
    root.querySelectorAll( '.reveal' ).forEach( ( el ) => {
        // Work only within this block.
    } );
}
```

## Variations

When a repeater's items carry different CSS classes, the section gets a **Variation** selector automatically.

This is how one section offers multiple visual treatments of the same structure, for example pricing cards where one card is highlighted, or color swatches with different backgrounds. Each variation is a descriptive class on the repeater item (`swatch-blue`, `plan-featured`), and the CSS styles each class. Editors switch an item's variation from the settings panel without touching CSS. The AI sets variations up when a design calls for them.

## Quick reference

Use this table as a reminder of the placeholder shapes and form attributes.

| Placeholder | Meaning |
| --- | --- |
| `{{{settings.name}}}` | Editable content, triple braces, renders HTML. |
| `{{settings.name}}` | Editable attribute value, double braces, escaped. |
| `{{#settings.name}} … {{/settings.name}}` | A repeat block. Use bare names inside. |
| `{{^settings.name}} … {{/settings.name}}` | An inverted section, rendered when the value is falsy. |
| `{{settings.name.href}}` | The URL part of a link field. |
| `{{settings.name.alt}}` | The alt text of an image field. |

| Attribute | Meaning |
| --- | --- |
| `data-field-label` | Set the field label. |
| `data-field-section` | Group the field into a named section. |
| `data-field-order` | Order the field within its container. |

Five things catch people out most often.

- The template must start with a single root element, or styling stops applying.
- Image tokens use `src="{{settings.photo}}"`, never `{{settings.photo.url}}`.
- Repeat open and close names must match exactly.
- Inside a repeat, placeholders are bare. Outside it, they use `settings.`.
- Query inside your root class in JavaScript for sections used more than once.

## Examples

Each example is a complete section. Paste the parts into the matching panes of a Custom module's Code tab, save, and the settings form appears.

### Hero with an image and a link

This hero covers the field types you can create by hand: two text fields, an image, and a link.

<Tabs groupId="module-source">
<TabItem value="template" label="Template" default>

```html title="Template"
<section class="ds-hero">
  <div class="ds-hero-copy">
    <h1 class="ds-hero-title">{{{settings.hero_title}}}</h1>
    <p class="ds-hero-text">{{{settings.hero_text}}}</p>
    <a class="ds-hero-link" href="{{settings.button.href}}">{{{settings.button.text}}}</a>
  </div>
  <img class="ds-hero-image" src="{{settings.image}}" alt="{{settings.image.alt}}" />
</section>
```

</TabItem>
<TabItem value="styles" label="Styles">

```css title="Styles"
.ds-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ds-space-xl, 4rem);
  align-items: center;
  padding: var(--ds-space-section, 6rem) var(--ds-space-lg, 2rem);
}

.ds-hero-title {
  font-family: var(--ds-font-heading);
  font-size: var(--ds-text-2xl, 1.5rem);
  color: var(--ds-color-text);
}

.ds-hero-text {
  font-family: var(--ds-font-body);
  font-size: var(--ds-text-base, 1rem);
}

.ds-hero-link {
  display: inline-block;
  margin-top: var(--ds-space-md, 1rem);
  color: var(--ds-color-primary);
}

.ds-hero-image {
  width: 100%;
  height: auto;
  border-radius: var(--ds-radius-md, 0.5rem);
}

@media (max-width: 768px) {
  .ds-hero {
    grid-template-columns: 1fr;
  }
}
```

</TabItem>
</Tabs>

The form opens with a Hero group holding the title and text, because neighboring fields that share a name prefix group together, then a Button link field and an Image field.

### Feature grid with a repeater

This grid adds a repeat for the cards and uses the form attributes to gather the header fields into their own section.

<Tabs groupId="module-source">
<TabItem value="template" label="Template" default>

```html title="Template"
<section class="feature-grid">
  <div class="fg-head">
    <p class="fg-eyebrow"
       data-field-section="Header" data-field-order="1">{{{settings.eyebrow}}}</p>
    <h2 class="fg-title"
        data-field-section="Header" data-field-order="2">{{{settings.title}}}</h2>
    <div class="fg-intro"
         data-field-section="Header" data-field-order="3">{{{settings.intro}}}</div>
  </div>
  <div class="fg-items">
    {{#settings.features}}
    <div class="fg-card">
      <h3 class="fg-card-title">{{{title}}}</h3>
      <p class="fg-card-text">{{{description}}}</p>
    </div>
    {{/settings.features}}
  </div>
</section>
```

</TabItem>
<TabItem value="styles" label="Styles">

```css title="Styles"
.feature-grid {
  padding: var(--ds-space-xl, 4rem) var(--ds-space-lg, 2rem);
}

.fg-head {
  max-width: 640px;
  margin: 0 auto var(--ds-space-lg, 2rem);
  text-align: center;
}

.fg-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ds-space-lg, 2rem);
}

.fg-card {
  padding: var(--ds-space-md, 1rem);
  border-radius: var(--ds-radius-md, 0.5rem);
  background: var(--ds-color-surface, #fff);
}
```

</TabItem>
</Tabs>

The three header fields land in a Header section in the order set by `data-field-order`, and the repeat becomes a Features group with an Add Feature button, each card exposing its own title and description.

### Question list with JavaScript

This section adds behavior. A repeat holds the questions, and the script toggles each answer open when its question is clicked.

<Tabs groupId="module-source">
<TabItem value="template" label="Template" default>

```html title="Template"
<div class="ds-faq">
  <h2 class="ds-faq-title">{{{settings.heading}}}</h2>
  {{#settings.questions}}
  <div class="ds-faq-item">
    <button class="ds-faq-question" type="button" aria-expanded="false">{{{question}}}</button>
    <div class="ds-faq-answer">{{{answer}}}</div>
  </div>
  {{/settings.questions}}
</div>
```

</TabItem>
<TabItem value="styles" label="Styles">

```css title="Styles"
.ds-faq {
  max-width: var(--ds-width-content, 720px);
  margin: 0 auto;
  padding: var(--ds-space-xl, 4rem) var(--ds-space-lg, 2rem);
}

.ds-faq-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.ds-faq-question {
  width: 100%;
  padding: var(--ds-space-md, 1rem) 0;
  border: 0;
  background: none;
  font-family: var(--ds-font-heading);
  font-size: var(--ds-text-lg, 1.125rem);
  text-align: left;
  cursor: pointer;
}

.ds-faq-answer {
  display: none;
  padding-bottom: var(--ds-space-md, 1rem);
  font-family: var(--ds-font-body);
}

.ds-faq-question[aria-expanded='true'] + .ds-faq-answer {
  display: block;
}
```

</TabItem>
<TabItem value="script" label="Script">

```js title="Script"
document.querySelectorAll( '.ds-faq' ).forEach( ( root ) => {
    root.querySelectorAll( '.ds-faq-question' ).forEach( ( question ) => {
        question.addEventListener( 'click', () => {
            const isOpen = question.getAttribute( 'aria-expanded' ) === 'true';
            question.setAttribute( 'aria-expanded', isOpen ? 'false' : 'true' );
        } );
    } );
} );
```

</TabItem>
</Tabs>

The Questions repeat becomes a group with an Add Question button, each item holding its own question and answer text. The script walks every copy of the section on the page, so a second question list on the same page works as well.
