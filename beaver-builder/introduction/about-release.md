---
id: about-release
title: About this Release
sidebar_label: About this Release
description: Describes the features in this release of the Beaver Builder plugin.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Builder 2.7 includes the following new features and improvements.

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gailwFRz61A?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>

## New Responsive Editing Experience

Prior to Beaver Builder 2.7, the responsive editor provided an approximation of how your website would look on a mobile device and worked similarly to resizing a browser window. The new responsive editor uses an iframe. This should provide a better user experience, not only in terms of accuracy, but also ease of use.

### Features

* Preview all device sizes (Extra large, large, medium, and small).
* You can set a custom height and width in pixels.
* Zoom (100%, 75%, 50%, and Fit to Window).
* You can resize the editor window by dragging it from the top, bottom, left, or right.

See the [Responsive Editor](/beaver-builder/layouts/responsive-design/editor.md) article for more information.

## Visibility UI (Breakpoint)

To improve the user experience, the Breakpoint dropdown menu in the Advanced tab has been replaced with icons. Now you can toggle the device icons to determine when rows, columns, or modules appear.

See the [Visibility](/beaver-builder/layouts/advanced-tab/visibility.md) article for more information.

## Per-node CSS & JavaScript

Added an option called **Enable Code Settings** to **WordPress Admin Dashboard > Settings > Beaver Builder > Advanced**.

When enabled, a new CSS and JS section becomes available on the Advanced tab for the specific node (row, column, and module) you are working on. All CSS and JavaScript is automatically scoped to that particular node.

:::tip
In the Outline Panel, a new code (<i className="fa-solid fa-code"></i>) icon appears when custom CSS or JavaScript has been added to a node (row, column, or module).
:::

See the [CSS & JavaScript](/beaver-builder/layouts/advanced-tab/css-js.md) article for more information.

## Accordion & Tab - Post Type Multi-select

Add support for Multi-select of post types, allowing you to select one or more post types. For example, you can display both posts and pages.

## ACF Blocks Integration

Add integration with ACF Pro Blocks so that you can use them inside the BB UI.

See the [ACF Blocks](/beaver-builder/developer/acf-blocks.md) article for more information.
