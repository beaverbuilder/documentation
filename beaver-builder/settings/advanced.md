---
id: advanced
title: Advanced Settings
sidebar_label: Advanced Settings
description: The Advanced tab in the Beaver Builder settings is where you can enable and disable settings.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Advanced tab within Beaver Builder's settings provides options to enable or disable settings that typically require custom coding to achieve specific outcomes.

## Access Advanced

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Advanced** tab.

![Beaver Builder Advanced settings](/img/beaver-builder/settings--advanced--1.jpg)

## Builder UI

The Builder UI section allows you to enable or disable Beaver Builder user interface features.

### Responsive Iframe UI

Enable or disables the iframe UI for accurate responsive editing. May cause issues with legacy add-ons.

:white_check_mark: Enabled by default.

### Outline Panel

Enable or disable the Outline Panel in the Beaver Builder user interface.

:white_check_mark: Enabled by default.

### Inline Editing

Enable or disable the Inline Editing in the Beaver Builder overlay UI.

:white_check_mark: Enabled by default.

### Notification system

Enable or disable the Notification system in the Beaver Builder user interface. When disabled you will not receive alerts for new posts on the [Beaver Builder blog](https://www.wpbeaverbuilder.com/blog/).

![Enable or disable the Notification system](/img/beaver-builder/settings--advanced--2.jpg)

:white_check_mark: Enabled by default.

### Remember last used tab

By default, Beaver Builder remembers the last tab opened in the row, column, or module settings window. Using the Remember last used tab, you can enable or disable this feature.

:white_check_mark: Enabled by default.

### Custom Row Shapes

Enable or disable the custom row shapes tab from **Tools Menu > Global Settings**.

![Enable or disable Custom Row Shapes](/img/beaver-builder/settings--advanced--3.jpg)

:white_check_mark: Enabled by default.

### Enable Code Settings

When enabled CSS and JavaScript sections become available in the advanced tab for rows, columns, and modules.

See the Per-Node CSS & JS section in the [Custom Code](basics/custom-code.md) article for more information.

:white_check_mark: Enabled by default.

### Limit WP revisions for layouts

By default, does not limit the amount of revisions.

Enabling this setting will limit revisions to `10` for Beaver Builder layouts. Set to `0` to completely disable revisions for layouts/pages controlled by Beaver Builder.

:x: Disabled by default.

### Limit the amount of undo/redo history in Builder UI

The default number of changes History tracks is 20.

Enabling this setting will limit Beaver Builder history to `5` items you can undo/redo. Set to `0` to completely disable History for layouts/pages controlled by Beaver Builder.

:x: Disabled by default.

### Mod Security fix

Enable the `mod_security` fix which prevents 403 errors when using Beaver Builder in shared hosting environments.

:x: Disabled by default.

### Small Data Mode

When enabled, empty/blank options will not be saved to the database, reducing post meta data size by approximately 50%.

:x: Disabled by default.

### Node Labels

When enabled, displays the node label and tooltip when hovering over the node settings icon and in the top right hand corner of the node outline overlay.

:::info
Outline Panel labels are not removed when the Node Labels option is disabled.
:::

![Enable or disable node labels](/img/beaver-builder/settings--advanced--4.jpg)

:white_check_mark: Enabled by default.

### Render shortcodes in CSS/JS

When enabled, allows you to use shortcodes in **Layout CSS & JavaScript settings**, accessed from the [Tools menu](user-interface/tools-menu.md). Use this feature to replace a value in custom CSS or JS in a Beaver Builder layout.

See the [Use shortcodes in CSS or JS](shortcode/using-css.md) article for more information.

:x: Disabled by default.

### ACF Blocks

Enable or disable [ACF Block support](/beaver-builder/developer/acf-blocks.md) in Beaver Builder.

:white_check_mark: Enabled by default.

### Collapse All Settings

Enable or disable the Collapse All Settings feature, which collapses all tabs in the Settings Window for rows, columns, and modules.

:x: Disabled by default.

### Load Theme Colors

Enable or disable the loading of theme colors in the color picker.

:x: Disabled by default.

### Load WordPress Colors

Enable or disable the loading of WordPress Core colors in the color picker.

:x: Disabled by default.

## WP Admin

The WP Admin section allows you to enable or disable Beaver Builder features from the WordPress user interface.

### Allow pages to be sortable

Enable or disable the Beaver Builder filter link found in the WordPress admin dashboard for pages, posts, and custom post types.

![Enable or disable the Beaver Builder filter](/img/beaver-builder/settings--advanced--5.jpg)

:white_check_mark: Enabled by default.

### Show duplicate action links

Enable or disable the Duplicate Page option from the WordPress page, post, and custom post type list.

:white_check_mark: Enabled by default.

### Show duplicate link in adminbar

Enable or disable the Duplicate Page link from the **WordPress admin bar > Beaver Builder**.

:white_check_mark: Enabled by default.

### Show advanced module usage

Enable or disable advanced module usage. When enabled, this will show which Beaver Builder modules and how many of each type are used on the front end of your website. This information is displayed via **WordPress admin dashboard > Settings > Beaver Builder > Modules tab**.

:x: Disabled by default.

## Assets

The Assets section allows you to enable or disable asset features from Beaver Builder.

### Google Fonts

Enable or disable Google Fonts. When disabled, Google Fonts will **not** be enqueued or available for Beaver Builder style options.

:white_check_mark: Enabled by default.

### Google Fonts Auto Update

Enable or disable Google Fonts auto update.

:white_check_mark: Enabled by default.

### Font Awesome

Enable or disable Font Awesome. When disabled, Font Awesome will **not** be enqueued, even if modules require it.

:white_check_mark: Enabled by default.

### Prefer GD for image cropping

Enable or disable the PHP GD library. WordPress uses ImageMagick for image processing by default, which is slow and not threaded. Performance is much better with GD, which is native to PHP.

:x: Disabled by default.

## Frontend

The Frontend section allows you to enable or disable Beaver Builder frontend features.

### Render css/js assets inline

Enable or disable rendering of Beaver Builder assets inline. When enabled, instead of loading Beaver Builder CSS and JavaScript as an asset file, you can render the CSS inline in the `<head>` tag and the JavaScript inline right before the closing `<body>` tag.

This can be a solution to some rare caching issues, but in most cases you don’t need this enabled.

:x: Disabled by default.

### Force Module Wrapper Divs

Enable or disable the rendering of module wrapper `<div>` elements.

- When **Enabled**, this setting forces modules to include their legacy wrapper `<div>` elements, even if those wrappers have been removed from the module’s default markup.
- When **Disabled** _(default)_, modules use the updated markup without the wrapper `<div>`. This change only affects modules added to the layout after version 2.9.

We recommend keeping this option disabled, as it provides several benefits, including cleaner and more streamlined markup. The example below shows the updated markup for the Heading module, which now includes only the heading tag (e.g., `<h2>`).

:::info

Consider enabling this option if you’re using CSS to style modules, as certain class names—such as `fl-module-content` —may be missing when the **Force Module Wrapper Divs** option is **disabled**.

:::

<Tabs>
  <TabItem value="no-wrapper" label="No Wrapper (Default)">

```markup
<h2 class="fl-module fl-module-heading fl-heading">Hello World</h2>
```

  </TabItem>
  <TabItem value="wrapper" label="Wrappers Enabled">

```markup
<div class="fl-module fl-module-heading">
  <div class="fl-module-content fl-node-content">
    <h2 class="fl-heading">
      <span class="fl-heading-text">Hello World</span>
    </h2>
  </div>
</div>
```

  </TabItem>
</Tabs>
