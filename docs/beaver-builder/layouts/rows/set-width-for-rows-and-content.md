---
id: set-width-for-rows-and-content
title: Set row and content width
sidebar_label: Set row and content width
---

There are several ways to adjust row and content width settings and behavior:

## Row settings

Set row and content width for individual rows on the **Style** tab when you
open the row's settings.

If row **Width** is set to **Fixed width**, you can set the maximum width for
that row, either in absolute
units (pixels) or in relative units (either percent of viewport width or
percent of the CSS parent setting). See [this article](/beaver-builder/styles/css-length-height-units.md) for the basics
of CSS length and height units. 

![](/img/row-columns-set-row-content-width-1.png)

If row **Width** is set to **Full width**, you get an option to set **Content
width** to **Full width** or **Fixed**, as shown in the following screenshot.
If **Content width** is set to **Fixed**, you get the option to set the
content max width.

![](/img/row-columns-set-row-content-width-2.png)

## Row drag handles

If either the row or content width is set to **Fixed** in row settings, you
can change the row max width by moving the drag handle. Row drag handles
appear on the outer edge of content boxes. When a row has one column, there's
a row width drag handle on both sides, as shown in the following screenshot.

![](/img/row-columns-set-row-content-width-3.png)

If the row has two columns, the outer side of the content box is a row drag
handle, and the inner side is a column drag handle, as shown in the following
screenshot.

![](/img/row-columns-set-row-content-width-4.jpg)

You'll see a tooltip showing the max width in pixels as you drag. If you hold
the Shift key down while you drag, the unit field changes to 10px instead of
1px. If you don't see a drag handle, it means both the row and column are set
to full width in row settings. Your drag handle setting will appear in the
**Fixed width** field in the row settings.

When you click and hold the drag handle, the selection changes to include the
entire row's content. In the following animation, clicking and holding the
drag handle of one item in a multi-column row will expand to select the entire
row's content area.

![](/img/row-columns-set-row-content-width-5.gif)

## Global settings

You can change the site-wide default settings for row width, content width,
and max width in the **Rows** section of **Tools > Global Settings**. You can
also change the default row margins and padding values.

See [this article](/beaver-builder/layouts/rows/set-global-site-wide-default-row-widths.md) for more details on how to set custom global default
row widths in Beaver Builder.
