---
id: dev-preview
title: Beaver Builder Pre-release
sidebar_label: 2.7 Pre-release
description: Describes the features for the upcoming release of the Beaver Builder plugin.
---

This article describes the features for the upcoming release of the Beaver Builder plugin 2.7.

<!-- :::info
**Developer Preview Currently Unavailable!**

Documentation will be added as soon as a developer preview for Beaver Builder is released.
::: -->

:::info Provide Feedback
To provide feedback, click the **Dev feedback** button in the upper right corner of the Beaver Builder Top Bar:

![Dev feedbback button in the Beaver Builder editor](/img/beaver-builder/dev-preview--1.jpg)

Using dev, alpha, and beta releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback.
:::

## New Responsive Editing Experience

Prior to Beaver Builder 2.7, the responsive editor provided an approximation of how your website would look on a mobile device and worked similarly to resizing a browser window. The new responsive editor uses an iframe. This should provide a better user experience, not only in terms of accuracy, but also ease of use.

### Features

* Preview all device sizes (Extra large, large, medium, and small).
* You can set a custom height and width in pixels.
* Zoom (100%, 75%, 50%, and Fit to Window).
* You can resize the editor window by dragging it from the top, bottom, left, or right.

## Visibility UI (Breakpoint)

To improve the user experience, the Breakpoint dropdown menu in the Advanced tab has been replaced with icons. Now you can toggle the device icons to determine when rows, columns, or modules appear.

## Per-node CSS & JavaScript

Added an option called **Enable Code Settings** to **WordPress Admin Dashboard > Settings > Beaver Builder > Advanced**.

When enabled, a new CSS and JS section becomes available on the Advanced tab for the specific node (row, column, and module) you are working on. All CSS and JavaScript is automatically scoped to that particular node.

:::tip
In the Outline Panel, a new code (<i className="fa-solid fa-code"></i>) icon appears when custom CSS or JavaScript has been added to a node (row, column, or module).
:::

## Accordion & Tab - Post Type Multi-select

Add support for Multi-select of post types, allowing you to select one or more post types. For example, you can display both posts and pages.

## ACF Blocks Integration

Add integration with ACF Pro Blocks so that you can use them inside the BB UI.

:::info
Check out our [sample plugin](https://github.com/beaverbuilder/bb-example-acf-blocks) for how to use this integration (Documentation Coming Soon).
:::
