---
id: responsive-behavior-in-beaver-builder
title: Responsive behavior in Beaver Builder
sidebar_label: Responsive behavior in Beaver Builder
---

All Beaver Builder layouts are *responsive* , meaning they automatically
adjust for various screen sizes.

:::note **Notes:**
* You can make changes for specific device sizes by [entering Responsive Editing Mode](/beaver-builder/layouts/responsive-design/responsive-editing-with-beaver-builder.md).
* You can [set default heading and text sizes for large, medium, and small devices](/bb-theme/defaults-for-styles/typography/set-responsive-default-text-styles-for-beaver-builder-layouts.md) that apply to Beaver Builder plugin and Themer layouts.
:::

By default, layouts are responsive in the following ways:

  * Breakpoints
  * Beaver Builder has three device sizes built in: large (typically desktop and laptop displays), medium (tablets) and small (smartphones). Device sizes are determined by breakpoints set on browser width. For details, [see this article about breakpoints](/beaver-builder/layouts/responsive-design/breakpoints-for-device-sizes.md).
  * Stacking  
Stacking determines [how columns and modules are ordered](/beaver-builder/layouts/columns/column-layouts-overview.md) as the width of the display decreases. You can control
column stacking by setting custom column widths for each device size, or you
can disable column stacking.

  * Spacing  
Margins and padding for rows, columns, and modules are automatically adjusted
on small devices with the [Beaver Builder autospacing feature](/beaver-builder/layouts/margins-padding/troubleshooting-margins-and-padding.md/#auto-spacing). For fine-tuning, you can adjust margins and padding
for each device size to override autospacing, or you can disable autospacing
entirely.

  * Visibility  
By default, all modules are visible at every device size, but you can [hide any row, colulmn, or module ](/beaver-builder/styles/visibility/change-item-visibility-by-device-size.md) on particular device sizes.

Finally, although we don't recommend it, you can [disable responsive behavior
site-wide](/beaver-builder/advanced-builder-techniques/disable-responsive-behavior-site-wide.md).
