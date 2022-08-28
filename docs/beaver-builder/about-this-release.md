---
id: about-this-release
title: About this release
sidebar_label: About this release
description: Describes the features in this release of the Beaver Builder plugin.
toc_min_heading_level: 2
toc_max_heading_level: 2
---

The Beaver Builder 2.6 is a pre-release. It contains several features that we’d like to get feedback about from developers before we commit to putting them in an Alpha release.

## :rocket: New

### New Large Breakpoint

In [**Global settings** on the Tools menu](/beaver-builder/getting-started/bb-editor-basics/global-settings.md), in the **Responsive layout** section there's a new breakpoint setting for large devices, so you can set three custom breakpoints. The default settings are `1200px` for large devices, `992px` for medium devices, and `768px` for small devices.

### New Templates

Four new micro landing templates have been added to the **Content Panel > Templates > Micro Pages**.

### Advanced Settings

The **WordPress Admin Dashboard > Settings > Beaver Builder** now includes a new section for advanced functionality that previously required filters to enable or disable.

See the [Advanced Settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) article for more information.

### Import, Export & Reset Settings

You can import, export and reset Beaver Builder global settings and the setting from **WordPress Admin Dashboard > Settings > Beaver Builder**.

See the [Import/Export Settings](/beaver-builder/management-migration/import-export-settings.md) article for more information.

### Reusable Blocks

You can use [WordPress reusable blocks](https://wordpress.org/support/article/reusable-blocks/) in Beaver Builder layouts. If a reusable block is updated in WordPress, it's also updated in any Beaver Builder layout where it's used.  

See the [Reusable Blocks](/beaver-builder/layouts/modules/reusable-blocks.md) for more information.

### Google Fonts Preview

In any module that has a [Typography section](/beaver-builder/styles/typography/typography.md), in the **Font** section you can click the **Family** dropdown box, scroll to the **Google fonts** section, and hover over individual fonts to see a preview.

### Search Saved Items

Added a search bar to the Saved tab allowing you to search saved content items (rows, columns, and modules).

### Aspect Ratio for Columns

You can size column length using an aspect ratio. The column keeps its normal width and changes the height based on the ratio you assign.

For example, if the row is set to `1200px` with `0px` margins and padding and there is one column in the row and it has an aspect ration of `4/3`, then its width is `1200px` and its height is `900px`.

### Row Shapes Upload UI

You can upload custom row shapes from **Tools Menu > Global Settings**.

### UI Brightness System Level

The Beaver Builder user interface can inherit your operating system's appearance. You can override by choosing light or dark.

### Dynamic Data in Tabs & Accordion Modules

There are two dynamic data features in the Tabs and Accordion modules.

* Automatically populate the items in an Accordion or Tabs module with any post type.
* Use a saved element (row, column, module, or template) in an Accordion or Tabs module item

## :hammer: Improvements

### Database Reduction

`Null` options aren’t saved in the database. If a node setting is not set or is `null` the setting does not get saved to the database reducing the post meta data size by about 50%.

### Duplicate Page - WordPress Admin Bar

A Duplicate Page option has been added to the Beaver Builder drop-down menu in the WordPress Admin Bar.

### Refactor UI CSS

This aims to unify our css with custom properties such as:

* Font family
* Colors
* Sizing

### UI Overlay Refinements

Refined the feel of the builder overlay UI and highlight features in the canvas area.

### Outline Panel

* Collapse/expand all items and persistent storage were added so that the panel remembers what sections you have expanded and collapsed.

* Two new shortcodes are now available to show and hide the Outline Panel tree view and to open and close the Outline Panel.  

  * Toggle Outline Panel - <kbd>Shift</kbd> & <kbd>O</kbd>
  * Toggle Outline Panel Tree - <kbd>Shift</kbd> & <kbd>T</kbd>

### Copy/Paste Improvements

You can copy and paste row, column, and module settings. There’s also a new UI dropdown menu allowing quick access to copy and paste.

### Button & Button Group

Add option for control over the gradient styling.

### Callout & Call to Action Modules

Add option for control over the gradient styling.

### Login Module

Add icon options for the fields and buttons.

### Post module: Filter by Custom Field

The Post module supports filtering by a custom field.

### Posts, Post Carousel & Post Slider

Add support for Multi-select of post types. On the **Content** tab of the Posts, Posts Carousel, and Posts Slider modules, in custom queries you can select one or more post types. For example, you can display both posts and pages.

### Pricing Table

* Added typography settings for the Pricing table ribbon.
* Add icon color options for individual features.

## :bug: Bug Fixes

### Fix Visibility Settings Upgrade

Fix some issues with visibility settings upon upgrade related to the new breakpoint.  

:::info Example
Any content set to Large Only devices were changed to Extra Large Only devices upon upgrading to 2.6. After installing the dev 3 update, any devices set to Large Only will be automatically switched to Extra Large and Large devices.
:::
