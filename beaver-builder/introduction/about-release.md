---
title: "About this Release"
description: "Beaver Builder 2.12 includes the following new features and improvements."
---

Beaver Builder 2.12 includes the following new features and improvements.

## 🚀 New Features

The following features have been added:

### Filter Module

Filter is a new module in the Actions category that filters, searches, and sorts an existing Posts or Loop module on the same page. It supports taxonomy filters displayed as buttons or a dropdown, a search field with Search As You Type, and sort controls. Results update with AJAX, URLs are shareable, and the browser back button is supported. If AJAX is unavailable, the module falls back to a normal page reload.

Custom modules can also opt in to let the Filter module filter their repeater items.

See the [Filter Module](/beaver-builder/layouts/modules/filter) article for more information.

### Design and Code Tabs

Any row, column, or module can now be styled from new Design and Code tabs in its settings panel, giving you a consistent place to adjust styling and add custom code regardless of the node type.

See the [Design Tab](../layouts/design) and [Code Tab](../layouts/code) articles for more information.

### Icon Picker

The icon picker has been rebuilt from the ground up with a category sidebar, icon name labels, a grid/list toggle, and search. Font Awesome has been updated to 7.3.1, with the Sharp and Sharp Duotone families added.

See the [Icon Picker](../basics/icon-picker) article for more information.

### Design System Core

Beaver Builder now ships the Design System Core extension, so custom modules and design system styling render without the Beaver Builder AI plugin installed. The Design System Core extension is not bundled in the Lite build.

### Themer Connections for Multiple Backgrounds

Color and image layers in the Multiple Backgrounds field can now be connected to Themer properties, such as the featured image or an ACF image or color, on rows, columns, Box, and Popup backgrounds.

See the [Connect layer items to field connections](../basics/multi-layer-backgrounds.md#connect-a-layer-to-a-field-connection) section for more information.

## 💥 Improvements

The following improvements have been made:

### Builder

- A new Global Settings option lets you choose whether a module dropped on an empty area of the layout is wrapped in a Row or a Box.
- When a node has a custom label, the settings header, canvas overlays, and Outline Panel now show only that label instead of the module name alongside it.
- The Builder Tour now adapts when Beaver Builder AI is active and adds steps for the Cloud, Assistant, and Query Monitor icons when those integrations are enabled.

### Components

- Copy and Paste Settings is available again for component instances in the Outline Panel and the wrench menu. Pasting only works between instances of the same component.

### Settings

- The core settings page chrome now matches the Design Systems settings page.

### Performance

- Publishing a global row, column, or module no longer runs a full-site scan on sites with large layout data, making publishing much faster on large sites.
