---
id: global-styles-css-variables
title: Global Styles CSS Variables
sidebar_label: Global Styles CSS Variables
description: A reference of the CSS custom properties Beaver Builder generates from the Global Styles settings, and how to use them in a theme or custom CSS.
tags:
  - Global Settings
  - Colors
  - 2.12.1
---

Beaver Builder generates a CSS custom property (CSS variable) for each [Global Styles](../user-interface/global-styles.md) setting that has a value. As of Beaver Builder 2.12.1, these variables are printed on every front-end page and in the block editor, not only on pages built with Beaver Builder, so you can use them in your theme's stylesheet or in custom CSS anywhere on your site.

## Where the variables are printed

The variables are printed in an inline `:root` block on:

- Every front-end page, whether or not the page uses a Beaver Builder layout.
- The block editor.

```css
:root {
  --fl-global-brand-primary: #0a66c2;
  --fl-global-text-color: #333333;
  --fl-global-h1-font-family: Poppins, sans-serif;
  --fl-global-h1-font-size: 48px;
}
```

:::warning Always include a fallback

A variable is only printed when its Global Styles setting has a value. If a setting is empty, or is cleared later, the variable doesn't exist. Always provide a fallback value when you use a variable:

```css
color: var(--fl-global-text-color, #333);
```

:::

## Prefix

Every variable name starts with a prefix. The default prefix is `fl-global`, which gives variable names like `--fl-global-text-color`.

If you enter a custom **Prefix** in [Global Styles](../user-interface/global-styles.md#add-a-global-color), it replaces `fl-global` in every variable name. For example, a prefix of `acme` gives `--acme-text-color` and `--acme-h1-font-family`.

:::caution Multi-word prefixes

A prefix with more than one word is spelled differently in color variable names than in typography and border variable names. In color names the words are joined with a hyphen. In typography and border names the space is removed.

For example, a prefix of `Acme Co` gives:

| Variable type         | Prefix used | Example                    |
| --------------------- | ----------- | -------------------------- |
| Palette and colors    | `acme-co`   | `--acme-co-text-color`     |
| Typography and border | `acmeco`    | `--acmeco-h1-font-family`  |

This behavior is kept as-is for backward compatibility. To avoid it, use a single-word prefix or separate the words with a hyphen yourself, such as `acme-co`.

:::

The rest of this article uses the default `fl-global` prefix. If you use a custom prefix, substitute it in each variable name.

## Palette

Each color in the Global Styles **Colors** tab generates a variable named after its label:

```css
--fl-global-<label>
```

The label is converted to lowercase and spaces are replaced with hyphens. For example, a global color named **Brand Primary** becomes:

```css
--fl-global-brand-primary
```

## Colors

The color settings in the Global Styles **Elements** tab generate the following variables.

| Element  | Variable                                |
| -------- | --------------------------------------- |
| Text     | `--fl-global-text-color`                |
| Headings | `--fl-global-h1-color` through `--fl-global-h6-color` |
| Links    | `--fl-global-link-color`                |
| Links    | `--fl-global-link-hover-color`          |
| Buttons  | `--fl-global-button-color`              |
| Buttons  | `--fl-global-button-hover-color`        |
| Buttons  | `--fl-global-button-background`         |
| Buttons  | `--fl-global-button-hover-background`   |

## Typography

The typography settings in the **Elements** tab generate variables in this format:

```css
--fl-global-<element>-<property>
```

**Element** is one of the following:

- `text`
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- `link`
- `button`

**Property** is one of the following:

| Property          | Notes                                         |
| ----------------- | --------------------------------------------- |
| `font-family`     | Includes the font's fallback stack.           |
| `font-weight`     |                                               |
| `font-size`       |                                               |
| `line-height`     |                                               |
| `letter-spacing`  |                                               |
| `text-align`      |                                               |
| `text-transform`  |                                               |
| `text-decoration` |                                               |
| `font-style`      |                                               |
| `font-variant`    |                                               |
| `text-shadow`     |                                               |

For example:

```css
--fl-global-text-font-family
--fl-global-h2-font-size
--fl-global-link-text-decoration
--fl-global-button-text-transform
```

## Button border

The button border settings generate variables in this format:

```css
--fl-global-button-<border property>
```

The border property is one of the following:

| Property                                                                                                             | Notes                                           |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `border-style`                                                                                                       |                                                 |
| `border-color`                                                                                                       |                                                 |
| `border-top-width`, `border-right-width`, `border-bottom-width`, `border-left-width`                                 | One variable for each side that has a value.    |
| `border-top-left-radius`, `border-top-right-radius`, `border-bottom-left-radius`, `border-bottom-right-radius`       | One variable for each corner that has a value.  |
| `box-shadow`                                                                                                         |                                                 |
| `background-clip`                                                                                                    | Printed alongside `border-style`.               |

For example:

```css
--fl-global-button-border-style
--fl-global-button-border-top-width
--fl-global-button-border-top-left-radius
```

## Breakpoints

Typography and button border variables also have a version for each responsive breakpoint. The breakpoint is added to the end of the variable name as a suffix, and the variable is only printed when the setting has a value at that breakpoint.

| Breakpoint   | Suffix        | Example                                |
| ------------ | ------------- | -------------------------------------- |
| Default      | (none)        | `--fl-global-h1-font-size`             |
| Large        | `-large`      | `--fl-global-h1-font-size-large`       |
| Medium       | `-medium`     | `--fl-global-h1-font-size-medium`      |
| Small        | `-responsive` | `--fl-global-h1-font-size-responsive`  |

Palette and color variables don't have breakpoint versions.

:::info

The breakpoint variables only hold the values. They don't switch automatically at each breakpoint, so use them inside your own media queries, as shown in the [example](#example) below.

:::

## Example

The following CSS can be added to your theme's stylesheet or to **Appearance > Customize > Additional CSS**. Each variable has a fallback, which is used when the Global Styles setting is empty.

```css
.site-footer {
  color: var(--fl-global-text-color, #333);
  font-family: var(--fl-global-text-font-family, sans-serif);
}

.site-footer a {
  color: var(--fl-global-link-color, #0073aa);
}

.site-footer a:hover {
  color: var(--fl-global-link-hover-color, #005177);
}

.entry-title {
  color: var(--fl-global-brand-primary, #0a66c2);
  font-size: var(--fl-global-h1-font-size, 40px);
}

@media (max-width: 768px) {
  .entry-title {
    font-size: var(--fl-global-h1-font-size-responsive, 28px);
  }
}
```

In this example, `--fl-global-brand-primary` is a global color named **Brand Primary**. Replace it with the name of one of your own global colors.
