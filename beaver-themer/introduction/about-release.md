---
id: about-release
title: About this Release
sidebar_label: About this Release
description: Describes the features in this release of the Beaver Builder Themer plugin.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Themer 1.5 includes the following new features and improvements.

:::info
Please note that Themer 1.5 requires Beaver Builder version 2.9+.
:::

## :rocket: New Features

The following new features have been added:

### The Loop Module

The Loop module is a powerful container module that allows you to easily display dynamic content on your website—no coding required. Select content from posts, pages, custom post types, taxonomies, or Advanced Custom Fields (ACF) repeater or relationship fields.

Then, use modules such as Heading, Text, and Photo to build your layout. Field Connections automatically pull in data from your selected content sources and dynamically display it, ensuring your layouts always reflect the latest information.

See the [Loop Module](/beaver-builder/layouts/modules/loop) article for more information.

## :boom: Improvements

The following improvements have been made:

### Singular Layouts as Custom Templates

You can now save your Singular layouts as custom templates in the Beaver Themer UI and select them from the page, post, or custom post type edit screen. Previously this required custom code.

See the [Singular Layouts](layout-types-modules/singular-layout-type/themer-singular-layout-type.md#singular-layouts-as-selectable-templates) article for more information.

### Conditional Logic

We've added some quality of life improvements to Conditional Logic, including the ability to drag and drop rules from one section to another, duplicate a rule, and bulk select and edit or duplicate rules.

See the [Conditional Logic](conditional-logic/beaver-themer-conditional-logic.md#bulk-options) article for more information.

### Search added to Preview As section

A search box now makes it easier to find the page/post or archive you'd like to preview when editing a Themer layout.

### Format Date

Added format parameter for [`post_custom_field`](field-connections/wordpress-data.md#post-custom-field) shortcode.

### ACF

Added [`repeater_index`](integrations/acf/field-types/repeater.md#repeater_index) support to ACF shortcodes.

### The Events Calendar

The organizers shortcode will now output all organizers if there are multiple selected.
