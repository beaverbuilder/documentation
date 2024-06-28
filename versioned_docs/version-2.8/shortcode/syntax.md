---
id: syntax
title: Shortcode syntax
sidebar_label: Syntax
description: The Beaver Builder shortcode is really easy to use to add content to your layouts. This reference shows the syntax of the shortcode, including examples with attributes.
---

The Beaver Builder shortcode is really easy to use to add content to your layouts. This reference shows the syntax of the shortcode, including examples with attributes.

## Using a slug

The following is an example of a shortcode with an Slug:

```markup
[fl_builder_insert_layout slug="my-saved-row-slug"]
```

## Using a slug & type

If you have more than one post type with the same slug, you can specify the `type` attribute to show only the saved content, as in this example:

```markup
[fl_builder_insert_layout slug="my-saved-row-slug" type="fl-builder-template"]
```

## Using an ID

The following is an example of a shortcode with an `ID`:

```markup
[fl_builder_insert_layout id="123"]
```

:::tip
See the [Find ID or Slug](find-id-slug.md) article for tips on how to identify the ID or slug.
:::

## Using multiple ID's

Enter a comma-separated list of `IDs` to insert multiple layouts.

:::caution
Shortcodes used too frequently on the same page or post may affect performance. For more information, see our [Performance](advanced/performance.md#beaver-builder-shortcode) article. 
:::

```markup
[fl_builder_insert_layout id="123,456,789"]
```

## WordPress Multisite support

In WordPress Multisite installations, you can specify the `site` attribute to enter the `ID` of a subsite to pull saved content from one subsite to another.

:::info
The `site` attribute is only available in Pro and Agency versions of Beaver Builder.
:::

```markup
[fl_builder_insert_layout id="123" site="5"]
```
