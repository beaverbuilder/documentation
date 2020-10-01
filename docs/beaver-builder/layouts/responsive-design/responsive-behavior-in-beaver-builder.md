---
id: responsive-behavior-in-beaver-builder
title: Responsive behavior in Beaver Builder
sidebar_label: Responsive behavior in Beaver Builder
---

All Beaver Builder layouts are *responsive*, meaning they automatically adjust for various screen sizes. Beaver Builder has three device sizes built in: large (typically desktop and laptop displays), medium (tablets) and small (smartphones). 

## How Beaver Builder layouts are responsive

By default, layouts are responsive in the following ways:

* Breakpoints  
The three device-size categories (large, medium, small) are determined by [breakpoints](/beaver-builder/layouts/responsive-design/breakpoints-for-device-sizes.md), which are screen-width values in pixels. By changing default breakpoints, you can tweak the behavior for specific device sizes.
* Stacking  
Stacking determines [how columns and modules are ordered](/beaver-builder/layouts/responsive-design/responsive-columns.md) as the width of the display decreases. You can [prevent and control column stacking](/beaver-builder/layouts/columns/prevent-column-stacking-with-custom-widths.md) by setting custom column widths for each device size, or you can [reverse the order of column stacking](/beaver-builder/layouts/columns/reverse-column-stacking-order.md).
* Spacing  
Margins and padding for rows, columns, and modules are automatically adjusted
on small devices with the [Beaver Builder auto spacing feature](/beaver-builder/layouts/margins-padding/troubleshooting-margins-and-padding.md/#auto-spacing). For fine-tuning, you can [adjust margins and padding for each device size](/beaver-builder/layouts/margins-padding/change-individual-margin-and-padding-settings.md) to override auto spacing, or you can disable auto spacing entirely.
* Visibility  
By default, all modules are visible at every device size, but you can [hide any row, colulmn, or module ](/beaver-builder/styles/visibility/change-item-visibility-by-device-size.md) on particular device sizes. One use of this feature is to design different layout segments (such as rows) and make them visible to a different subset of device sizes.
* Per-device settings  
Certain row, column, and module settings can be set differently for large, medium and small devices. Just look for the [responsive settings icon](/beaver-builder/layouts/responsive-design/responsive-settings-icon.md) in the settings panel. Beaver Builder's [Responsive Editing Mode](/beaver-builder/layouts/responsive-design/responsive-editing-with-beaver-builder.md) lets you preview your layouts and make per-device settings changes right in the preview.

## Set different default heading and text sizes per device with Beaver Theme

If you're using the Beaver Builder Theme, you can [set default heading and text sizes for large, medium, and small devices](/bb-theme/defaults-for-styles/typography/set-responsive-default-text-styles-for-beaver-builder-layouts.md) for Beaver Builder plugin and Beaver Themer layouts.

## We don't recommend this
You can [disable responsive behaviorsite-wide](/beaver-builder/advanced-builder-techniques/disable-responsive-behavior-site-wide.md). An example of when you might want to do this is when you're creating an internal website that is intended for viewing only on large devices in a maximum-security facility that doesn't allow viewing on smaller devices and doesn't want to be found by Google search. 
