---
id: using-shortcode
title: Using the Shortcode
sidebar_label: Using the Shortcode
description: The Beaver Builder shortcode makes it really easy to add saved content to your layouts. This article explains where the shortcode can be used and how to find or manually construct it.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Beaver Builder shortcode makes it really easy to add saved content to your layouts. This article explains where the shortcode can be used and how to find or manually construct it.

## Prerequisite

If you plan to use a row, column, module, or template in your shortcode, it must be saved first so it has its own [`ID` and slug](find-id-slug.md). See the [Saved Content](layouts/saved-content.md) article about saving rows, columns, and modules or the article about saving [templates](layouts/templates/saved-templates.md).

## 1. Copy a shortcode with one click

In the Beaver Builder section in the WordPress admin dashboard, under Saved Rows, Saved Columns, and Saved Modules, there's a Shortcode column with an automatically generated shortcode for each saved item. Clicking the shortcode automatically copies it to your clipboard.

This screenshot shows the shortcode location for a saved modules.

![Copy shortcode with one click](/img/beaver-builder/shortcodes--using-shortcode--1.jpg)

## 2. Manually construct a shortcode

1. Get the [`ID`](find-id-slug.md#id) or [**Slug**](find-id-slug.md#slug) of the saved content.

2. Create the shortcode.
   Use one of the following formats, depending on whether it's the slug or the ID:

   ```markup title="Using the slug"
   [fl_builder_insert_layout slug="my-post-slug"]
   ```

   ```markup title="Using the ID"
   [fl_builder_insert_layout id="123"]
   ```

See the [Shortcodes syntax](syntax.md) article for more advanced options.

## Where to insert shortcodes

You can insert Beaver Builder shortcodes into a Beaver Builder module or the WordPress editor.

### Beaver Builder modules

In a Beaver Builder module, insert the shortcode into any text or text editor field. Here are some examples of text fields in Beaver Builder modules:

- [HTML module](layouts/modules/html.md)
- [Text editor module](layouts/modules/text.md)
- Text editor area in any module, such as the [Icon](layouts/modules/icon-and-icon-group.md), [Tabs](layouts/modules/tabs/index.md), or [Accordion](layouts/modules/accordion/index.md) modules.

### WordPress Editor & Widgets

The Beaver Builder shortcode can be used in the WordPress editor and widgets using the [Shortcode Block](https://wordpress.org/support/article/shortcode-block/).

As an example, you might save a Subscribe Form module and insert it in the middle of a post using the shortcode block, or between paragraphs when using the classic editor. For WordPress Widgets, simply use the Shortcode block and add your shortcode.

<Tabs>
<TabItem value="wordpress-editor" label="WordPress Editor" default>

![Insert shortcode using shortcode block](/img/beaver-builder/shortcodes--using-shortcode--2.jpg)

</TabItem>
<TabItem value="classic-editor" label="Classic Editor">

![Insert shortcode into middle of post](/img/beaver-builder/shortcodes--using-shortcode--3.jpg)

</TabItem>
<TabItem value="widgets" label="Widgets">

![Insert shortcode into widget](/img/beaver-builder/shortcodes--using-shortcode--4.jpg)

</TabItem>
</Tabs>
