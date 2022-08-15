---
id: advanced-settings
title: Advanced Settings
sidebar_label: Advanced Settings
description: The Advanced tab in the Beaver Builder settings is where you can enable and disable settings.
---

The Advanced tab in the Beaver Builder settings is where you can enable and disable settings, which usually require custom coding, in order to achieve the desired results

## Access Advanced

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Advanced** tab.

![Beaver Builder Advanced settings](/img/beaver-builder/settings--advanced--1.jpg)

## Builder UI

The Builder UI section allows you to enable or disable Beaver Builder user interface features.

### Outline Panel

Enable or disable the Outline Panel in the Beaver Builder user interface.

:white_check_mark: Enabled by default.

### Inline Editing

Enable or disable the Inline Editing in the Beaver Builder overlay UI.

:white_check_mark: Enabled by default.
  
### Notification system

Enable or disable the Notification system in the Beaver Builder user interface. When disabled you will not receive alerts for new posts on the [Beaver Builder blog](https://www.wpbeaverbuilder.com/blog/).

:white_check_mark: Enabled by default.

### Remember last used tab

By default, Beaver Builder remembers the last tab opened in the row, column, or module settings window. Using the Remember last used tab, you can enable or disable this feature.

:white_check_mark: Enabled by default.

### Custom Row Shapes

Enable or disable the custom row shapes tab from **Tools Menu > Global Settings**.

:white_check_mark: Enabled by default.

### Limit WP revisions for layouts

By default, does not limit the amount of revisions. Enabling this setting will limit revisions to 10 for Beaver Builder layouts.

:x: Disabled by default.

### Mod Security fix

Enable the `mod_security` fix which prevents 403 errors when using Beaver Builder in shared hosting environments.

:x: Disabled by default.

## WP Admin

The WP Admin section allows you to enable or disable Beaver Builder features from the WordPress user interface.

### Allow pages to be sortable

Enable or disable the Beaver Builder filter link found in the WordPress admin dashboard for pages, posts, and custom post types.

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

### Font Awesome

Enable or disable Google Fonts. When disabled, Font Awesome will **not** be enqueued, even if modules require it.

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
 
