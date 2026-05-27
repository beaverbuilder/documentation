---
id: edit-a-column
title: Edit a column
sidebar_label: Edit a column
description: Information about how to open and edit column settings in Beaver Builder.
---

You can edit a column's style (width, color, background, border) and its advanced settings.

## Open column settings for editing

**To open column settings in an empty column:**

When a column is empty, access **Column Settings** by hovering over the empty
column and clicking the **Edit column** icon, as shown in the following
screenshot.

![](/img/row-columns-edit-column-5.png)

See [this article](/beaver-builder/layouts/columns/insert-columns.md) for how to insert a column.

**To open column settings for editing in a column with a module:**

1. Mouse over a module in the column to reveal the toolbar and click **Edit column**, as shown in the following screenshot.

![](/img/row-columns-edit-column-6.png)

If you see a hamburger icon in the module toolbar, click that and mouse over **Edit column**.

2. Mouse over and then click **Column settings**.
   The area that will be affected by the column settings will have a blue overlay when you mouse over it.
   ![Parent column menu](/img/edit-column-parent-menu.png)
   If you mouse over a child column and you want to edit its parent column, click **Parent settings.**
   ![Child column menu](/img/tips-for-columns-nested-columns.png)

See [this tip](/beaver-builder/layouts/columns/tips-for-working-with-columns.md/#tip-3-figure-out-column-structure-for-existing-columns) for identifying parent and child columns.

## Style tab

### Column dimensions

#### Width

By default, the columns in a [column group](/beaver-builder/layouts/columns/column-layouts-overview.md) total 100% width, divided equally.

When you have more than two columns across, it's easier to use the drag handle on the column instead of column settings to change the widths.

![](/img/row-columns-edit-column-1.png)

See [this information](/beaver-builder/layouts/columns/resize-or-reset-column-width.md/#resize-column-width-in-multicolumn-groups) for two methods to change column width when the column group has two or more columns.

See [this information](/beaver-builder/layouts/columns/resize-or-reset-column-width.md/#resize-column-width-in-a-single-column-group) about adjusting the width of a single column.

Two or more columns must maintain a combined width of 100% on large devices but can have less than 100% total width on medium and small devices. See the [article about setting custom widths for medium and small devices](/beaver-builder/layouts/columns/stacking.md). Setting custom widths for smaller devices also prevents column stacking.

#### Minimum height

You can set a minimum height for any column in the layer.

#### Equalize heights

Selecting **Yes** makes all column heights in the column layer the same height as the column with the longest content. Equalizing heights also lets you vertically align the content to the top, center, or bottom. if you change the equalization settings for one column, it applies to all of the columns in the same horizontal layer.

The following screenshot shows two columns set to equal height and centered.

![](/img/row-columns-edit-column-2.png)

### Text colors

You can set default text colors for the column. These colors override row colors for that column and apply to modules unless the modules have their own colors set. The options are text color, link color, text hover color, and heading color.

![](/img/row-columns-edit-column-3.png)

### Background effects

You can add a background color, color gradient, or image to the column.

If you add an image, you can also add a color overlay.

If you choose a **Photo** background and set **Position** to **Custom position**, you can set X and Y coordinates to place the image more accurately in the background.

See this[ tip for determining column scope](/beaver-builder/layouts/columns/tips-for-working-with-columns.md#tip-3-figure-out-column-structure-for-existing-columns) to see where the background effect will apply.

:::info
You can't add dynamic backgrounds to columns, such as videos,
slideshows, or parallax.
:::

### Border

Columns have the [standard Border section](basics/border.md) that lets you add border lines, rounded corners, and shadows.

:::tip **Tip**
Set individual top, bottom, left, or right border to create horizontal or vertical column separators. Adjust column margins and padding on the **Advanced tab** to fine-tune the border placement.
:::

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab/index.md) for margins and padding, visibility, animations, and advanced HTML settings.
