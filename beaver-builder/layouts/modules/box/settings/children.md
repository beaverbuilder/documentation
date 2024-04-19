---
id: children
title: Children
sidebar_label: Children
---

The Children settings apply to all direct children of the box, providing control over aspects like flex or grid display, sizing, and appearance, including text and background colors.

- **Grow & Shrink** _(Flex only)_
  The Flex settings allow you to specify the flex-grow, flex-shrink, and flex-basis of the box.

  - The flex-grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container.

  - The flex-shrink property specifies how much the item will shrink relative to the rest of the flexible items inside the same container.

  - The flex-basis property specifies the initial length of a flexible item.

  The flex-grow and flex-shrink properties can be specified as a number, where a larger number indicates a larger share of the available space. The flex-basis property can be specified in pixels (px), percentage (%), em, rem, and vw.

- **Grid Columns** _(Grid & Layers only)_
  The Grid Column settings allow you to specify the span, start, and end of the box. The span, start, and end can be specified as a number, where a larger number indicates a larger share of the available space.

- **Grid Rows** _(Grid & Layers only)_
  The Grid Rows settings allow you to specify the span, start, and end of the box. The span, start, and end can be specified as a number, where a larger number indicates a larger share of the available space.

- **Padding**
  Allows you to increase the space around the outside of the container. The padding can be specified in pixels (px), ems, percentage (%), vh, and vw.

  See the Advanced Tab article's [Padding](layouts/advanced-tab/spacing.md#padding) section for more information.

## Sizing

- **Width & Height**
  The Width & Height settings allow you to specify the min-width, width, max-width and min-height, height, and max-height of the box. The width and height can be specified in pixels (px), percentage (%), em, rem, vw, and vh.

- **Aspect Ratio**
  The Aspect Ratio setting allows you to specify the aspect ratio of the box. The aspect ratio is the ratio of the width to the height of the box. For example, a 16:9 aspect ratio means that for every 16 pixels of width, there are 9 pixels of height.

  You can choose from a variety of preset aspect ratios:

  - **None** - Default value. No aspect ratio is applied.
  - **Square** (1:1)
  - **Wide** (5:4)
  - **Wide** (3:2)
  - **Video** (16:9)
  - **Ultra-wide Video** (21:9)
  - **Tall** (4:5)
  - **Tall** (2:3)
  - **Poster** (3:4)
  - **Portrait Video** (9:16)

## Appearance

The Appearance settings allow you to control the text color, background color, border, and box shadow of the box.

- **Text Color**
  The Text Color setting allows you to specify the color of the text within the box. The text color can be specified using the color picker, by entering a hex color code, or using a global color.

- **Background Color**
  The Background Color setting allows you to specify the background color of the box. The background color can be specified using the color picker, by entering a hex color code or using a global color.

  :::info

  The Box module currently supports background color only with more complex background options becoming available in a future release.

  :::

- **Border**
  The Border settings allow you to specify the border width, border style, and border color of the box.

  See the [Borders](basics/border.md) article for more information.
