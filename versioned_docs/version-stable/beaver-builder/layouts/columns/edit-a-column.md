---
id: edit-a-column
title: Edit a column
sidebar_label: Edit a column
---

You can modify column style and layouts in the following ways.

## Style tab

  * Change the column widths when you have two or more columns across.  
Widths must add up to 100% on large devices, but medium and small device
column width settings can total less than 100%.  
:::tip **Tip**
When you have more than two columns across, it's easier to use the drag handle on the column instead of column settings.
:::

![](/img/row-columns-edit-column-1.png)

  * Set a minimum column height. If you set a minimum column height for one column in a layer, it will propagate to all columns in the layer.
  * Equalize the column heights of all columns in the layer, then choose whether the content in the column content should be vertically aligned to the top, center, or bottom of the column.   
Parent columns must have at least two columns in the layer for the **Equalize
heights** field to be displayed, but you only need to set it in one column for
it to apply to all columns in the layer. Achild columns display the **Equalize
heights** field.  
The following screenshot shows two columns set to equal height and vertically
centered.  
![](/img/row-columns-edit-column-2.png)

  * Set default text colors for the column. These colors override row colors for that column and apply to modules unless the modules have their own colors set. The options are text color, link color, text hover color, and heading color.

![](/img/row-columns-edit-column-3-new.png)

![](/img/row-columns-edit-column-3.png)

  * Add a background color or image.  
:::note **Note**
You can't add dynamic backgrounds to columns, such as videos,
slideshows, or parallax.
:::

  * Add a column border.  
:::tip **Tip**
You can set individual top, bottom, left, and right borders, which you can use to create horizontal or vertical column separators.
:::

## Advanced tab

  * Change column margins and padding. You can also add custom settings for margins and padding for medium and small devices for that column. You can use [Responsive Editing Mode]() to alter column settings.

:::tip **Tips**
Individual modules don't have padding settings.
You can set padding for the modules in the columns that contain them. Before
you put out effort changing individual settings for medium and small devices,
see how default and global margins and padding work in [the margins and padding
article](/beaver-builder/layouts/margins-padding/margin-padding.md).
:::

![](/img/row-columns-edit-column-4.png)

* In the **Visibility** section:
  * In the **Breakpoint** field, select the device sizes on which the column is displayed. See [the article on changing visibility by device size](/beaver-builder/styles/visibility/change-item-visibility-by-device-size.md).
  * In the **Stacking order** field, choose **Reversed** if you want the columns to stack in the reverse order. See the [Column Layouts Overview article](/beaver-builder/layouts/columns/column-layouts-overview.md) for an example of default column stacking.
  * In the **Display** field, you can [limit visibility based on user login status](/beaver-builder/styles/visibility/change-element-visibility-by-user-login-and-capability.md). If you have Beaver Themer installed, you can [fine-tune visibility using conditional logic](/beaver-themer/conditional-logic/beaver-themer-conditional-logic.md).
* In the **Animation** section, you can [set an entrance animation](/beaver-builder/styles/effects/animations.md) for the column.
* In the **HTML animation** section, you can change the HTML container element (advanced users only), or add a custom ID or class for CSS rules.

##  Open column settings for editing

If a column has child columns, you can edit either the child or the entire
parent column.

**To open column settings in an empty column:**

When a column is empty, access **Column Settings** by hovering over the empty
column and clicking the  **Edit column** icon, as shown in the following
screenshot.

![](/img/row-columns-edit-column-5.png)

See [this article](/beaver-builder/layouts/columns/insert-columns.md) for how to insert a column.

**To open column settings for editing in a column with a module:**

1. Mouse over a module in the column to reveal the toolbar and click **Edit column**, as shown in the following screenshot.

  ![](/img/row-columns-edit-column-6.png)

  If you see a hamburger icon in the module toolbar, click that and mouse over **Edit column**.

2. Do either of the following:
  1. Mouse over **Column settings**.  
The area that will be affected by the column settings will have a blue
overlay.  
![](/img/row-columns-edit-column-7.png)

  2. If you mouse over a child column and you want to edit its parent column, click **Parent settings.**  
  ![](/img/row-columns-edit-column-8.png)

  3. After you verify the scope of where the settings will apply by looking at the blue column overlay, click **Column settings**.
