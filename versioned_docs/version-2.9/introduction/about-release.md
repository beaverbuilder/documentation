---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Builder 2.9 includes the following new features and improvements.

## :rocket: New Features

The following features have been added:

### Color & Gradient Picker

The Color & Gradient Pickers have been completely redesigned, making it easier than ever to select your preferred colors. You can now switch between different color spaces and take advantage of the powerful `color-mix()` function for even more control.

See the [Color Picker](basics/color-picker.md) article for more information.

### Multi-Layer Background Field

We've introduced a new background field that lets you layer different types of backgrounds on an element. You will see this in the Box Module, Rows and Columns.

See the [Multi-Layer Background Field](basics/multi-layer-backgrounds.md) article for more information.

### Module Blocks

A selection of our modules will be available as Blocks for the Block Editor. This feature is opt-in, so it requires enabling in the Beaver Builder settings in the WordPress Admin.

See the articles below for more information:

- [Blocks Tab Settings](settings/blocks.md)
- [Using Module Blocks](layouts/modules/module-blocks.md)

## :boom: Improvements

The following improvements have been made:

### Modules without Wrappers

All basic modules now have reduced markup output.

See the [Advanced Tab Settings](settings/advanced.md#force-module-wrapper-divs) article for more information.

### Top Level Container Modules

Container modules, such as the Box and Loop modules, can now serve as top-level containers without requiring a row. You can also nest container modules within each other—for example, placing a Loop module inside a Box module or vice versa.

### Outline Panel

The Outline Panel has been improved with a search/filter option and Node labels can be added and edited inline.

See the [Outline Panel](user-interface/outline-panel.md) article for more information.

### Google Fonts Library

The Google Fonts library is now updated automatically whenever WordPress checks to update the plugin.

### Subscribe Module

Support was added for Active Campaign tags.

### Accessibility Improvements

The following accessibility improvements have been made:

- **Menu Module:** Separated menu item and sub-menu icon
- **Accordion:** Select HTML tag for Label
- **Tabs Module:** Add focus missing on selected tab
- Various improvements for the magnific pop-up script used
