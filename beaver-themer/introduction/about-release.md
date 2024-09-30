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

### The Loop Module

The _Loop_ module is a container module that accepts child modules. However, unlike the _Box_ module, the Loop module will repeat its child modules for each item in the query as defined in the settings, allowing you to build truly custom loop layouts without requiring they be built in the Post Module custom layout section.

It currently supports the same type of queries as our Posts module and additionally Taxonomies and ACF repeaters.
## :boom: Improvements

### Full Site Editing Theme Support

Your Themer layouts should now work with Full Site Editing Themes.

### UI for adding Singular Layouts to Post/Page Template Dropdown

Previously, this required code but a new field was added for Singular layouts to allow for it to be done in our UI without requiring code.

### Conditional Logic Improvements

We've added some new things to make working with conditional logic easier:

- Drag and drop rules from one section to another.
- Duplicate a rule.
- Bulk select and edit or duplicate rules.

### Search added to Preview As section

A search box now makes it easier to find the page/post or archive you'd like to preview when editing a Themer layout.

### Format Date

Added format parameter for post_custom_field_date shortcode.

### ACF

Adedd repeater_index support to ACF shortcodes.

### The Events Calendar

The organizers shortcode will now output all organizers if there are multiple selected.

