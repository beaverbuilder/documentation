---
id: resize-or-reset-column-width
title: Resize or reset column width
sidebar_label: Resize or reset column width
description: Describes the methods to resize column width or reset it to the default.
---

You can resize column width using one of several methods. You can reset column width to the defaults. Finally, you can [vary column width according to device](/beaver-builder/layouts/columns/prevent-column-stacking-with-custom-widths.md), which also prevents column stacking.

## Resize column width

The method to resize column width largely depends on how many columns are in the column group.

## Resize column width in a single-column group

When a [column group](/beaver-builder/layouts/columns/column-layouts-overview.md) contains just one column, by default the width is 100%. There are two methods you can use to reduce the width of a single column. 

* Set the column width to less than 100%.  
Open the column settings and change the **Width** setting on the **Style** tab.  
**Note:** The column stays left-aligned and the width of the column is shortened, as shown in this screenshot. You can't change the horizontal alignment with this method.  
![A single column with 50% width](/img/layouts--columns--resize-reset--1.png)

* Place an empty column on each side of the single column, then set column widths to position the center column horizontally. [Use the column drag handles](#method-1-drag-the-column-handle) to set the column widths you want.

## Resize column width in multicolumn groups

There are two methods to resize column width. With both methods, resizing one column width resizes the other column widths in the same column group to maintain a total of 100%. The new setting applies to all device sizes unless you [change the width separately for medium and small devices](/beaver-builder/layouts/columns/prevent-column-stacking-with-custom-widths.md).

For example, by default two columns in a column group are sized at 50% width each. If you resize one column width to 60%, the other column automatically resizes to 40%.

### Method 1: Drag the column handle

This method is quick and easy.

* In your layout, mouse over a module and drag a column handle, shown here:

![](/img/how-to-tips-resize-reset-col-width-1.jpg)

:::tip **Tip**
If have two modules in a single column, you can drag the handles on either module.
:::

### Method 2: Use Column Settings

This method may not work well for changing the widths of more than two columns because every time you change one width, the others resize automatically to total 100%. 

1. [Open a column for editing](/beaver-builder/layouts/columns/edit-a-column.md).
2. On the **Style** tab, change the percentage in **Column width**.

## Reset column widths

With this procedure you can reset column widths to evenly divided widths for the entire column group.

**To reset the column widths for the entire column group:**

* Mouse over a module to display its toolbar, then click **Edit Column > Reset column widths**.  
If the options display a hamburger icon, click that, then mouse over **Edit column**  to reveal the  settings.

:::note **Note**
If you have custom widths set for medium and small devices on the **Advanced** tab, you must change those manually.
:::
