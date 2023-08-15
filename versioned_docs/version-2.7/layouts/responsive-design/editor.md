---
id: editor
title: Responsive Editor
sidebar_label: Responsive Editor
description: The Spacing section in the Advanced tab lets you change the default margin and padding for rows and columns. For modules, you can change the default margin values only.
---

The Responsive Editing mode allows you to create and edit your layouts in a way that ensures they look great on all devices.

![Responsive Editing Mode](/img/beaver-builder/responsive-design--responsive-editor--1.jpg)

## Access Responsive Editing mode

Enter Responsive Editing mode in any of the following ways:

* Click the [Responsive Toggle](toggle.md) icon next to settings that have it for a row, column, or module.  
  Your page view will stay in responsive editing mode even if you close the Settings window. Use the **Exit** button to close responsive editing.

* On the [Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md), click **Responsive editing**.

* Keyboard shortcut <kbd>R</kbd>  
  This keyboard shortcut toggles responsive editing mode.

## Responsive Editor UI

When responsive editor mode is enabled, you can see how your page will look on different screen sizes and make any necessary adjustments to ensure that the layout is optimized for all devices.

:::info
[Landscape orientation](breakpoints.md#landscape--portrait-orientation) is not supported by the Responsive Editor out of the box, but you can simulate it.

See the [Breakpoints](breakpoints.md#landscape--portrait-orientation) article for more information.
:::

![Responsive Editing toggle device previews](/img/beaver-builder/responsive-design--responsive-editor--2.jpg)

### Breakpoint

The Breakpoint drop-down menu allows you to toggle between devices (Extra Large, Large, Medium, and Small) and the responsive editor will automatically adjust to the size of that device.

By using the device buttons, the current device will be active on the [Responsive Toggle](toggle.md) when accessing the row, column, or module settings. As a result of this, you can preview your layout and tweak your original design to make it suitable for all device sizes (large, medium, and small).

See the [Breakpoints](breakpoints.md) article for more information.

### Width & Height

The Width and Height options allow you to adjust the dimensions of the layout preview to custom values.

### Zoom

Use the Zoom options to zoom in or out. You can choose between 100%, 75%, 50%, and Fit to Window.

### Drag Handles

Using the Drag Handles is another way to adjust the width and height of the layout preview. To do so, click and hold on the handle, and drag either left or right to adjust the width, or up or down to adjust the height as needed.

![Responsive Editing drag handles](/img/beaver-builder/responsive-design--responsive-editor--3.jpg)

## Device Previews

The Responsive Editor provides an accurate preview of the layout you're editing for a variety of devices. You can preview the layout at any size you choose using the [Width and Height](#width--height) options or the [Drag Handles](#drag-handles).

:::caution Legacy Responsive Editor
It is strongly recommended that you **do not** disable the [Responsive Iframe UI from Beaver Builder Advanced settings](/beaver-builder/management-migration/advanced-settings#responsive-iframe-ui). This will enable Beaver Builder's legacy, non-iframe responsive editing experience which only simulates device previews and provides an approximation of how your website would look on a mobile device.
:::

## Per-device Styling

The Responsive Editor **does not** create separate layouts for each device size. You can, however, adjust your layouts per-device using the Visibility options and Responsive Toggle.

* The [Visibility](/beaver-builder/layouts/advanced-tab/visibility.md#breakpoint) options utilize Beaver Builder [breakpoints](breakpoints.md) and allow you to show or hide row, column, or modules for specific devices.

* The [Responsive Toggle](toggle.md) allows you to configure specific settings, such as font size, background image or column width on a per-device basis.

:::warning Warning
It is not possible to change the position of a row, column, or module for a specific device size, since the position change will be applied to all devices.

The same is true when removing content from your layout. For example, removing a row, column, or module for the medium device size will also remove the content for all other device sizes (Extra Large, Large, and Small).
:::
