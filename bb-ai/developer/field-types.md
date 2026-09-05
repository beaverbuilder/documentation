---
title: Field types
description: Reference for the built-in field types that power block settings forms in Beaver Builder AI.
---

Reference for the built-in field types that power block settings forms in Beaver Builder AI.

## How field types are used

Every design system block presents a settings form whose fields use the types on this page. The form comes from one of two places:

- **Derived from the template**, which is the default. Each Mustache placeholder becomes a field, and its type is inferred from the surrounding HTML: text inside a heading, an image from an `<img>` src, a link from an `<a href>`, a repeater from a repeat block. See [Writing the template](modules-and-blocks.md#writing-the-template) for how the markup steers the inference.
- **A stored definition.** AI-generated blocks can carry an explicit form definition as a JSON tree, which takes precedence over inference when present. Users with code access can view it in the block's Code tab under the Config pane.

Either way, each field maps to a Mustache variable in the block's template. Top-level fields are referenced as `{{settings.key}}`; fields inside a repeater are referenced by bare key within the repeater section. The JSON example below shows the stored definition shape:

```json
[
  {
    "key": "content",
    "type": "section",
    "title": "Content",
    "children": [
      { "key": "heading", "type": "text", "label": "Heading", "default": "Welcome" },
      { "key": "body", "type": "editor", "label": "Body" },
      { "key": "cta", "type": "link", "label": "Button" }
    ]
  }
]
```

## Field definition properties

Every field definition supports these common properties, in addition to the per-type configuration options documented below.

| Property | Type | Required | Description |
|---|---|---|---|
| `key` | string | Yes | The field identifier. Maps to the template variable name. |
| `type` | string | Yes | One of the field type identifiers documented on this page. |
| `label` | string | No | The display label shown with the field in the settings panel. |
| `default` | any | No | The default value used when the field has no value set. Each field type has its own fallback default. |
| `placeholder` | string | No | Placeholder text, for field types that support it. |
| `help` | string | No | Help text shown with the field. |
| `children` | array | No | Child field definitions. Only used by the container types `tab`, `section`, and `repeater`. |

## Token modes

Each field type declares how its value is written into the Mustache template.

| Token mode | How the value is written | Used by |
|---|---|---|
| `simple` | Written as `{{settings.key}}` and HTML-escaped on output. | `textarea`, `number`, `url`, `select`, `toggle`, `variation-select` |
| `html` | Written as `{{{settings.key}}}` and rendered as raw HTML. | `text`, `editor`, `svg` |
| `compound` | The value is an object written as `{{settings.key}}` plus sub-value tokens such as `{{settings.key.href}}` or `{{settings.key.alt}}`. | `image`, `link` |
| `custom` | The field manages its own value handling. | `rating`, `form-submission`, and the style fields |

## Input fields

These field types collect content values in the block settings panel.

### `text`

Type `string`, default `'Text Field'`.

Single-line text input. The value is rendered as HTML, so inline formatting from canvas editing is preserved.

Supports the common properties `default`, `placeholder`, and `help`.

### `textarea`

Type `string`, default `'Text area content.'`.

Multi-line plain text input. Supports the common properties `default`, `placeholder`, and `help`.

| Configuration option | Type | Default | Description |
|---|---|---|---|
| `rows` | number | `4` | Number of visible text rows. Minimum 1. |

### `number`

Type `number`, default `0`.

Numeric input with optional constraints. Supports the common properties `default`, `placeholder`, and `help`.

| Configuration option | Type | Default | Description |
|---|---|---|---|
| `min` | number | — | Minimum allowed value. |
| `max` | number | — | Maximum allowed value. |
| `step` | number | `1` | Increment step. |

### `url`

Type `string`, default `'https://example.com'`.

URL input with format validation. The value must match `^https?://`, otherwise the field shows "Must be a valid URL."

Supports the common properties `default`, `placeholder`, and `help`.

### `editor`

Type `string`, default `'<p>Content goes here.</p>'`.

Rich text editor. The value is an HTML string rendered unescaped in the template. Supports the common properties `default` and `help`.

| Configuration option | Type | Default | Description |
|---|---|---|---|
| `rows` | number | `10` | Initial editor height in rows. Minimum 3. |

### `select`

Type `string`, default `''`.

Dropdown menu for choosing from a predefined list of options. Supports the common properties `default`, `placeholder`, and `help`.

| Configuration option | Type | Required | Description |
|---|---|---|---|
| `options` | object | Yes | Key-value pairs for the dropdown choices. |

### `toggle`

Type `boolean`, default `false`.

Boolean on/off switch. Use with Mustache sections (`{{#settings.key}}...{{/settings.key}}`) to show or hide template content.

Supports the common property `help`.

### `link`

Type `object`, default `{ text: '', href: '', target: '', rel: '' }`.

Composite link field. The sub-values are available in templates with dot notation:

```html
<a href="{{settings.cta.href}}" target="{{settings.cta.target}}" rel="{{settings.cta.rel}}">{{settings.cta.text}}</a>
```

Supports the common property `help`.

| Value property | Type | Description |
|---|---|---|
| `text` | string | The link text. |
| `href` | string | The link URL. |
| `target` | string | The link target attribute, such as `_blank`. |
| `rel` | string | The link rel attribute, such as `noopener`. |

### `rating`

Type `object`, default `{ value: 0, max: 5 }`.

Numeric rating backed by a visual indicator such as stars or pips. Supports the common properties `default` and `help`.

| Value property | Type | Description |
|---|---|---|
| `value` | number | The current rating value. |
| `max` | number | The rating scale maximum. |

| Configuration option | Type | Default | Description |
|---|---|---|---|
| `min` | number | `0` | Minimum value. |
| `max` | number | `5` | Maximum value. |
| `step` | number | `1` | Increment step. |

### `variation-select`

Type `string`, default `''`.

Internal field for choosing a repeater item's variation class. The plugin generates this field automatically when repeater items carry different CSS classes; it is not written by hand. See [Modules and blocks](modules-and-blocks.md#variations) for how variations work.

## Media fields

These field types handle images and vector graphics.

### `image`

Type `object`, default `{ url: '', alt: '', id: null, size: null }`.

Image picker using the WordPress media library. Supports the common property `help`. In templates, use the flat token in `src` and the `.alt` sub-value in the alt attribute:

```html
<img src="{{settings.photo}}" alt="{{settings.photo.alt}}" />
```

The flat `src` token is what produces the image field when the form is derived from the template. The dotted `{{settings.photo.url}}` form still renders the picture but yields no editable image field.

| Value property | Type | Description |
|---|---|---|
| `url` | string | The image URL. |
| `alt` | string | The image alt text. |
| `id` | number | The media library attachment ID, when the image comes from the library. |
| `size` | string | The selected image size. |

### `svg`

Type `string`, default `''`.

Inline SVG markup. The value is the SVG source string, rendered as raw HTML in templates.

Supports the common property `help`.

## Style fields

Style fields back the element styling controls in the canvas editing experience. Their values are CSS strings or per-side CSS value objects rather than content. The AI and the styling panel manage these; they rarely appear in hand-written form definitions.

### `color`

Type `string`, default `''`. A CSS color value.

### `css-value`

Type `string`, default `''`. A single CSS length or keyword value.

### `spacing`

Type `object`, default `{ top: '', right: '', bottom: '', left: '' }`.

Per-side margin or padding values.

| Value property | Type | Description |
|---|---|---|
| `top` | string | The top side value. |
| `right` | string | The right side value. |
| `bottom` | string | The bottom side value. |
| `left` | string | The left side value. |

### `border-radius`

Type `object`, default `{ tl: '', tr: '', br: '', bl: '' }`.

Per-corner radius values.

| Value property | Type | Description |
|---|---|---|
| `tl` | string | The top-left corner value. |
| `tr` | string | The top-right corner value. |
| `br` | string | The bottom-right corner value. |
| `bl` | string | The bottom-left corner value. |

### `icon-toggle-group`

Type `string`, default `''`. Segmented control for alignment-style choices.

### `background-image`

Type `string`, default `''`. A background image URL.

## Layout fields

Container field types organize the settings panel and do not produce template variables of their own. Their child fields go in the `children` array.

### `tab`

A container. Groups sections of fields into a tabbed interface. Place `section` fields inside a `tab` through its `children` array.

### `section`

A container. Groups fields under a collapsible section heading. Sections use a `title` property and a `children` array.

### `repeater`

A container. Lets editors add, remove, and reorder multiple instances of a set of fields. Each instance maps to an array item in the template data, iterated with a Mustache section.

In Beaver Builder, a top-level repeater can also be bound to a dynamic data source — the page's main query or a custom post query — instead of manual items. See [Dynamic data in repeaters](../build/custom-module.md#dynamic-data-in-repeaters).

| Configuration option | Type | Default | Description |
|---|---|---|---|
| `buttonLabel` | string | `Add Item` | Label for the add button. |
| `min` | number | `0` | Minimum number of items. `0` means no minimum. |
| `max` | number | `0` | Maximum number of items. `0` means no maximum. |
| `defaultCount` | number | `1` | Number of items created initially. |

## Specialized fields

One specialized type handles form configuration.

### `form-submission`

Type `object`, default `{ actions: [] }`.

Submission settings for a form embedded in a block. When a block template contains a `<form id="...">` element, this field provides the submission action configuration in the settings panel. The `actions` array holds the configured email, webhook, redirect, and custom actions. See [Forms](../build/forms.md) for the available actions.

## Extensibility

The field type registry is internal to the plugin. Field types are registered at build time from the plugin's own definitions, and there is currently no public API for registering custom field types from another plugin or theme. To extend what happens with form data at submission time, use the [form action registry filter](hooks.md#form-hooks) instead.
