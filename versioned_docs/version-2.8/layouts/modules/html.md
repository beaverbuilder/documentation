---
id: html
title: HTML
sidebar_label: HTML
description: The HTML module lets you insert custom code and markup into your layouts, rendered directly in the HTML output.
---

The HTML module lets you insert custom code and markup into your layouts that is rendered directly to the HTML output.

![](/img/html-module-2.png)

Like other code editors, the HTML module has line numbering and text wrap, which are not visible in the published version.

## Uses of the HTML module

Use the HTML module to add text, markup, and code such as HTML table markup,
shortcodes, or JavaScript. The HTML module is better for adding markup and
code than the Text Editor module, because the WordPress editor instance
embedded in the Text Editor module can try to insert its own markup, such as
`<p>` tags.

:::tip **Tip**
If you enter code in the HTML module that results in an inability to open the Beaver Builder editor, [open the editor in Safe mode](/beaver-builder/troubleshooting/debugging/safe-mode.md) so you can fix or remove the code.
:::

In the screenshot above, the `[fl_year]` shortcode (which is available when
you use the Beaver Builder Theme) has been inserted to render the current year
in the output.

##  HTML settings

As you can see in the screenshot, the HTML module has a **General** tab with a
code editor and an **Advanced** tab, which has all the usual **Advanced** tab
settings for margins, visibility, animations, and advanced HTML settings.

There is no **Style** tab. You can style the markup in this module in the
following ways:

  * Apply inline styles in the code editor on the **General** tab
  * Apply CSS rules by adding a custom ID or class, either directly in the code editor or in the **HTML** section of the **Advanced** tab.

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab/index.md) for margins, visibility, animations, and advanced HTML settings.
