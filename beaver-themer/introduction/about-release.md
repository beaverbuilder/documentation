---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Themer 1.6 includes the following new features and improvements.

## :rocket: New Features

The following new features have been added:

### Popup Layout Type

The Popup layout type in Beaver Themer allows you to display content in a modal that appears above the page. Use it to create promotional dialogs, sign-up forms, announcements, cookie notices, slide-in panels, and flyouts, all without writing code.

Build your popup using the same rows, columns, modules, and Field Connections you already use in Beaver Builder. Then, use Themer location rules to control exactly where your popup appears, whether site-wide or only on specific posts, pages, archives, or post types.

See the [Popup Layout Type](../layout-types-modules/popup.md) article for more information.

## :boom: Improvements

The following improvements have been made:

### Editable Layout Types

You can now change a Themer layout's type after it's been created. Open any layout and pick a new type, from the Themer Layout Settings panel, without having to delete the layout and start over. The available location options update automatically to match the type you choose.

### ACF Icon Picker Field Support

Field connections now support the Advanced Custom Fields Icon Picker field. Connect an Icon Picker field to an Icon module to output the selected icon dynamically from your post, author, user, or options data. Note that only icons chosen from the Dashicons tab are supported — icons selected from the Media Library or a URL won't display.

See the [ACF Icon field](../integrations/acf/field-types/icon.md) article for more information.

### New `site:date` Shortcode

We've added a `site:date` shortcode that outputs the current date. Use it on its own or set a custom format to control how the date appears, for example, `[wpbb site:date format='Y-m-d']`. 

See the [Current Date](../field-connections/wordpress-data.md#current-date) section for more information.
