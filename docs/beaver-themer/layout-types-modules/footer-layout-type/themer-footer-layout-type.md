---
id: themer-footer-layout-type
title: Footer layout type
sidebar_label: Footer layout type
---

The Footer-type Themer layout in Beaver Themer overrides your theme's footer and footer widget (if there is one) area at the bottom of a page, as shown in the following diagram.

![](/img/themer-footer-layout-type-1abdc414.png)

## Footer layout template

Here's the initial layout that you see when you create a Footer-type Themer layout. It's there to give you some ideas about how to customize your own layout.

![](/img/themer-footer-layout-type-ab34b79a.png)

This initial layout consists of two rows: one for the footer widget and one for the footer. Both rows have an initial purple background color.

The footer widget row has three columns with Heading modules. The left column has Icon modules for contact information, and the middle and right columns have Text Editor modules.

:::tip **Tip**
There are no field connections in the modules used in the initial layout for the footer widget, though you can add them. For example, the footer widget row background for a post could be set to display the featured image for that post, or the author's name and bio.
:::

The footer row contains a Text Editor module with a field connection shortcode for the site title, embedded in a Text Editor module. The copyright year and other text are static , so you'll have to change the copyright year every year. There are a couple ways to make the copyright year automatically update:

* If you have Beaver Builder Theme, you can use the `[fl_year]` shortcode. 
* Install a date shortcode plugin.

For information about how to make footers sticky in a Footer-type Themer layout, see [Neil Gowran's blog post at WP Beaches](https://wpbeaches.com/adding-a-sticky-footer-to-beaver-builder-theme-with-flexbox/).

:::tip **Tip**
If you ever want to revert to this default layout, click the **Templates** tab in the Content Panel when you're editing the Themer layout in Beaver Builder. Then click the **Footer** template.
:::
