---
id: set-global-site-wide-default-row-widths
title: Set global (site-wide) default row widths
sidebar_label: Set global (site-wide) default row widths
---

The global settings in the Beaver Builder editor determine the default width
settings of all of the rows in your site. This means that when you add a new row
to a layout, by default the row will have that setting. If you modify the row width or row content width in any row's settings, it will override the row width defaults.

You can customize the following global settings for row width and row content width:

  * Row width: **Full width** or **Fixed**
  * Row content width: **Full width** or **Fixed**  
Content width can be set only when row width is set to **Full width**.

  * Max width

Here's what happens to new and existing rows when you change global width
settings:

  * If you change the global row or row content width setting from **Full width** to **Fixed** or vice versa, the new settings only apply to new rows that you create. You can override these settings in individual row settings.
  * If you change the global **Max width** setting to a different value or unit, the change applies to all existing rows across your entire site that meet the following conditions:
    * Either the individual row width or content width is set to **Fixed**.
    * The individual row doesn't have a custom max-width setting.

:::note **Notes**

* **Changing global settings may not be reflected in individual row settings unless you clear your browser cache and reload the page.**  

* Exact row and row content widths are affected by row, column, and module margin and padding settings. See [this article](/beaver-builder/layouts/rows/full-width-and-fixed-width.md) on full- and fixed-width row layouts for more details.
* If you set the row width to **Fixed** , either in **Global Settings** or in individual rows, this setting can get overridden if your theme is set to full-width rows.
:::

## To set a custom global default row width

  1. In the Beaver Builder editor, click the title bar in the upper left corner to expose the **Tools** menu, then choose **Global Settings**, or just use the keyboard shortcut <kbd>⌘</kbd> + <kbd>U</kbd> (macOS <i class="fab fa-apple"></i>) or <kbd>Ctrl</kbd> + <kbd>U</kbd> (Windows <i class="fab fa-windows"></i>).
  2. Scroll to the **Rows** section.
  3. For **Max width,** set the number of `px` or `vw` (each unit is 1% of the viewport, which in this case means browser width).  
  **Note this change will apply to new rows and all existing rows in your site
  if they have fixed row or fixed content width and a default max-width
  setting.**  
  Existing rows that have a custom width set are not affected

  4. For **Default row width**, set whether you want new rows to be **Full width** or **Fixed** by default.  
This change applies only to new rows, and you can override these default
settings in individual rows.

  5. If your default row width is set to **Full Width**, set the **Default row content width** to **Full width** or **Fixed**.  
This change applies only to new rows, and you can override these default
settings in individual rows.

  6. Click **Save**.
