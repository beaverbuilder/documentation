---
id: shortcode-reference
title: Shortcode reference
sidebar_label: Shortcode reference
---

The Beaver Builder shortcode is really easy to use to add content to your
layouts. This reference shows the syntax of the shortcode, including examples
with attributes. See [this article](/beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts.md) for information about what you can
embed in the shortcode and how to embed it.

:::tip
If you use the Beaver Builder Theme, there is a `[fl_year]` shortcode
that you can use to insert the current date into your Beaver Builder layouts
or in text areas of the Beaver Builder Theme, such as the footer. For more
information, see the [article on the Beaver Builder Theme date shortcode](/bb-theme/defaults-for-layouts-content/shortcode-for-current-date).
:::

## Beaver Builder shortcode syntax [fl_builder_insert_layout]

Inserts a Beaver Builder layout into any post, page, or custom post type. This shortcode requires either the slug or the ID of your page.

## Examples

### Using a slug

```html
[fl_builder_insert_layout slug="my-post-slug"]
```

### Using a slug & type
If you have more than one post type with the same slug, you can specify the
type to show only that post, as in this example:

```html
[fl_builder_insert_layout slug="my-post-slug" type="fl-builder-template"]
```

### Using an ID
Here's an example of a shortcode with an ID:

```html
[fl_builder_insert_layout id="123"]
```

### Using multiple ID's
Enter a **comma-separated list of IDs** to insert multiple layouts.

```html
[fl_builder_insert_layout id="123,456,789"]
```

### WordPress Multisite support
You can enter the ID of a site on a WordPress Multisite network to pull the layout from:

```html
[fl_builder_insert_layout id="123" site="5"]
```
