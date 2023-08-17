---
id: dev-preview
title: Beaver Builder Developer Preview
sidebar_label: Developer Preview
description: Describes the features for the upcoming release of the Beaver Builder plugin.
---

This article describes the features for the upcoming release of the Beaver Builder plugin.

<!-- :::info
**Developer Preview Currently Unavailable!**

Information will be added as soon as a developer preview for Beaver Builder is released.
::: -->

:::info Provide Feedback
To provide feedback, click the **Dev feedback** button in the upper right corner of the Beaver Builder Top Bar:

![Dev feedbback button in the Beaver Builder editor](/img/beaver-builder/dev-preview--1.jpg)

Using dev, alpha, and beta releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback.
:::

## Box Module

The Box module functions much like a row or column, serving as a container. It utilizes either flexbox or CSS grid, allowing you to create complex, fluid, and flexible layouts. Boxes can be nested, stacked, and organized in both horizontal and vertical orientations, as well as in a grid.

:::caution
While we've aimed to make the Box module as user-friendly as possible, having a solid grasp of CSS flexbox and CSS Grid is strongly recommended.
:::

See the [Box module](layouts/modules/box/index.md) section for more information.

## Global Styles

Global Styles allow you to define styling preferences for both elements and colors across Beaver Builder.

* **Global Elements**  
  The Elements tab allows you to define global styling for elements such as text, headings, links, and buttons. This styling is then inherited by all modules on your website that lack preconfigured styling options. You can override these styling options on a case-by-case basis using the module styling options.

* **Global Colors**  
  The Colors tab allows you to generate a global color palette that is available throughout your entire website. These colors can be easily accessed within your Beaver Builder layouts through the color picker tool. Additionally, the colors you establish are converted into CSS Variables, allowing for their integration into custom CSS.

See the [Global Styles](../user-interface/global-styles.md) article for more information.

## Color Picker: CSS Variable Support