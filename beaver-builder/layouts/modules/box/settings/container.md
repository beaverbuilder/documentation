---
id: container
title: Container Settings
sidebar_label: Container Settings
---

The Container settings allow you to control the display, alignment, and spacing of the items within the Box module.

## Display

The Box module offers three display types: Flex, Grid, and Layers. Certain options, such as direction and wrapping, vary depending on the chosen display type. However, settings like Spacing, Sizing & Placement, Appearance, and Linking remain consistent across all display selections.

### Flex

The Flex option allows you to organize items within a box either horizontally or vertically, utilizing CSS Flexbox. Flexbox excels in one-dimensional layouts, perfect for arranging items in rows or columns with flexibility in sizing and alignment. 

The Flex display option offers the following settings:

- **Direction**  
  The Direction option sets the main axis, determining the direction in which items (modules) are positioned within the box container.

  Direction supports the following options:
  
  - **Row** - Default value. The flexible items are displayed horizontally, as a row.
  - **Column** - The flexible items are displayed vertically, as a column.
  - **Row Reverse** - Same as row, but in reverse order.
  - **Column Reverse** - Same as column, but in reverse order.

  <!-- ![](/img/beaver-builder/modules--box--container--2.png) -->

- **Align**  
  The Align setting supports the following options:

  :::info

  When changing the direction option of the Box module from Row to Column, be mindful that the alignment options will shift axis accordingly. Pay attention to this adjustment to ensure the desired layout alignment is preserved.

  :::
  
  - **Stretch** - The items are stretched to fit the container (Default value).
  - **Start** - The items are positioned at the beginning of the container.
  - **Center** - The items are positioned at the center of the container.
  - **End** - The items are positioned at the end of the container.
  - **Space** - The items are evenly distributed in the container.
  - **Evenly** - The items are distributed so that the spacing between any two items (and the space to the edges) is equal.
  - **Space Between** - The items are evenly distributed in the container, with half-size spaces on either end.

- **Wrap**  
  The Wrap setting supports the following options:  
  
  - **Normal** - Specifies that the flexible items will not wrap (Default value).
  - **No Wrap** - Similar to Normal but includes the CSS `nowrap` property (e.g., `flex-wrap: nowrap;`).
  - **Wrap** - Specifies that the flexible items will wrap if necessary.
  - **Wrap Reverse** - Specifies that the flexible items will wrap, if necessary, in reverse order.

### Grid

The Grid option allows you to organize items within a box in a grid layout, utilizing CSS Grid. CSS Grid is tailored for two-dimensional layouts, providing precise control over rows and columns, facilitating more elaborate designs.

The Grid display option offers the following settings:

- **Grid**  
  The Grid settings allow you to specify the number of rows and columns in the grid. In CSS Grid, a track is a space between gridlines, i.e. a space where you can add content. The number of tracks is determined by the number of rows and columns.

  By Clicking the **+** icon, you can add additional rows and columns to the grid. The options for each row and column include:

  :::tip
  
  Duplicating or removing rows and columns can be done by clicking the vertical ellipsis <i class="fa-solid fa-ellipsis-vertical"></i> icon when hovering over a specific row or column. Additionally, you can utilize drag and drop functionality to rearrange rows and columns – simply click and hold the drag handle icon, then move the row or column to your preferred location.
  
  :::

  - **Multiple Tracks** - Allows you to specify the number of tracks (e.g., 4).
  - **Freeform Tracks** - Allows you can enter your own CSS properties (e.g., `repeat (4, 1fr);`).
  - **Auto** - The size of the grid track will depend on the content of the item.
  - **1fr** - Adds a `1fr` to the grid track. The `fr` unit is a fractional unit and `1fr` is for 1 part of the available space.

- **Flow**  
  In CSS Grid, the flow direction determines how grid items are placed within the grid container, with options like "row" for a horizontal flow and "column" for a vertical flow, influencing the arrangement of items in rows or columns accordingly.
  
  The Flow setting supports the following options:
  
  - **Row** - The grid items are laid out along the grid's rows (Default value).
  - **Column** - The grid items are laid out along the grid's columns.

- **Align**  
  The Align setting supports the following options:
  
  - **Stretch** - The items are stretched to fit the container (Default value).
  - **Start** - The items are positioned at the beginning of the container.
  - **Center** - The items are positioned at the center of the container.
  - **End** - The items are positioned at the end of the container.
  - **Space** - The items are evenly distributed in the container.
  - **Evenly** - The items are distributed so that the spacing between any two items (and the space to the edges) is equal.
  - **Space Between** - The items are evenly distributed in the container, with half-size spaces on either end.

### Layers

The Layers option allows you to organize items within a box in a layered layout, utilizing CSS Grid. For example, you can use the Layers option to add text to a Photo module.

The Layers display option offers the following settings:

- **Align**  
  The Align setting supports the following options:
  
  - **Stretch** - The items are stretched to fit the container (Default value).
  - **Start** - The items are positioned at the beginning of the container.
  - **Center** - The items are positioned at the center of the container.
  - **End** - The items are positioned at the end of the container.
  - **Space** - The items are evenly distributed in the container.
  - **Evenly** - The items are distributed so that the spacing between any two items (and the space to the edges) is equal.
  - **Space Between** - The items are evenly distributed in the container, with half-size spaces on either end.

## Spacing

The Spacing settings allow you to control the spacing between items within the Box module using using gap (Flex & Grid only) and padding.

- **Gap** (Flex & Grid only)  
  The Gap setting allows you to specify the amount of space between items within the Box module. For Grid, you can specify the gap for both rows and columns. For Flex, you can specify the gap for all directions. The gap can be specified in pixels (px), vh, and vw.
  
  :::tip

  The gap setting is only available for the Flex and Grid display options.

  :::

- **Padding**  
  Allows you to increase the space around the outside of the container. The padding can be specified in pixels (px), ems, percentage (%), vh, and vw.

  See the Advanced Tab article's [Padding](layouts/advanced-tab/spacing.md#padding) section for more information.

## Sizing & Placement

These settings allow you to control how this box fits within its parent container.

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

- **Flex**  
  The Flex settings allow you to specify the flex-grow, flex-shrink, and flex-basis of the box.  
  
  - The flex-grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container.
  
  - The flex-shrink property specifies how much the item will shrink relative to the rest of the flexible items inside the same container.
  
  - The flex-basis property specifies the initial length of a flexible item.

  The flex-grow and flex-shrink properties can be specified as a number, where a larger number indicates a larger share of the available space. The flex-basis property can be specified in pixels (px), percentage (%), em, rem, and vw.

- **Grid Columns**  
  The Grid Column settings allow you to specify the span, start, and end of the box. The span, start, and end can be specified as a number, where a larger number indicates a larger share of the available space.

- **Grid Rows**  
  The Grid Rows settings allow you to specify the span, start, and end of the box. The span, start, and end can be specified as a number, where a larger number indicates a larger share of the available space.

- **Width & Height**  
  The Width & Height settings allow you to specify the min-width, width, max-width and min-height, height, and max-height of the box. The width and height can be specified in pixels (px), percentage (%), em, rem, and vw.


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

## Linking

The Linking settings allow you to add a link to the box. The link is applied to the entire box, including any child modules. This is a great way to create a card layout.

You also have the option to open the link in a new tab, include the `rel="nofollow"` attribute to indicate that the Google search spider should not follow the link, and initiate a download using the `download` attribute.

:::caution

If a link is added to a box, any other links within the same box will be disabled. For instance, if you include a Button module in a box, the link on the Button module will be disabled. This limitation arises from the inability to nest links within other links.

:::