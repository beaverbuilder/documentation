---
id: tools
title: Tools Tab
sidebar_label: Tools
description: The Spacing section in the Advanced tab lets you change the default margin and padding for rows and columns. For modules, you can change the default margin values only.
---

The **Tools** tab in the Beaver Builder settings lets you control which post types can use Beaver Builder.

## Access Tools tab

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Tools** tab.

![Access Tools tab settings](/img/beaver-builder/settings--tools--1.jpg)

## Cache

A CSS and JavaScript file are dynamically generated and minified whenever you create a new layout. The files are stored in the _`wp-content/uploads/bb-plugin/cache`_ directory, where they are used to improve performance. The following actions result in the deletion and creation of these files automatically:

- Updates are made to a page, post, or custom post type.
- The Beaver Builder plugin is updated.
- Site URLs change, such as when [migrating a site to another location](advanced/migration.md).
- Enabling Beaver Builder [Debug mode](#debug-mode) or setting `WP_DEBUG` to **true** in your _wp-config.php_ file.

### Manually clear cache

Even though these cache-clearing triggers occur for most cases, you can manually clear the cache as part of troubleshooting why pages are not refreshing as they should. Clearing the cache is a good first response to any issues that pop up where the result does not appear as you expect. To manually clear the Beaver Builder cache:

1. On the **Tools** settings page.
2. Click the **Clear Cache button**.

:::tip

As an alternative, you can delete the contents of the Beaver Builder caching directory by deleting all of the files in the folder _`wp-content/uploads/bb-plugin/cache`_.

:::

:::caution

On [WordPress Multisite](https://wordpress.org/support/article/create-a-network/) installations, the **Clear Cache button** button applies to all sites on the network when accessed as the Network Admin.

:::

## Cache Clearing Tool

Beaver Builder has a built-in cache clearing tool that automatically clears caches created by popular cache plugins and services.

- [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
- [AutoOptimize](https://wordpress.org/plugins/autoptimize/)
- [Breeze](https://wordpress.org/plugins/breeze/)
- [Cache Enabler](https://wordpress.org/plugins/cache-enabler/)
- [Cloudflare](https://wordpress.org/plugins/cloudflare/)
- [Godaddy Hosting](https://www.godaddy.com/)
- [Hummingbird](https://wordpress.org/plugins/hummingbird-performance/)
- [Kinsta Hosting](https://kinsta.com/)
- [Nginx Helper](https://wordpress.org/plugins/nginx-helper/)
- Object Caching
- [Pagely Hosting](https://pagely.com/plans-pricing/)
- [Pantheon Hosting](https://pantheon.io/)
- [SiteGround Hosting](https://wordpress.org/plugins/sg-cachepress/)
- [SpinupWP](https://spinupwp.com/)
- [Swift Performance](https://wordpress.org/plugins/swift-performance-lite/)
- [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)
- [WP Fastest Cache](https://wordpress.org/plugins/wp-fastest-cache/)
- [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/)
- [WPEngine Hosting](https://wpengine.com/)

:::info

The cache is cleared under the following conditions:

- When WordPress finishes updating plugins and themes.

- When Beaver Builder editor is active.
  This works by defining the `DONOTCACHEPAGE` constant while the page is being edited. This constant is respected by most caching plugins.

- When layouts and templates are saved in the Beaver Builder editor.

:::

### Enable proxy cache clearing

Some hosting companies use a proxy cache like Varnish or Litespeed. **Enable proxy cache clearing** attempts to invalidate the cache using a remote request. You should leave it disabled if you're not sure whether your site is subject to a proxy cache.

## Debug Mode

Enabling Beaver Builder Debug Mode generates a report that lets the Beaver Builder Support team quickly get information about your website's environment to help them troubleshoot.

:::caution

**Debug Mode** forces Beaver Builder CSS and JavaScript files to be regenerated on each page load while enabled.

:::

:::tip

When debug mode is enabled, you can also edit any code you have added to the Global CSS and JavaScript settings from the Tools menu. This is useful for troubleshooting whether your custom code is causing a conflict with Beaver Builder.

If you have the Beaver Builder Theme active, you can also edit any code you have added to the BB Theme Code settings

![Enable debug mode](/img/beaver-builder/settings--tools--2.jpg)

:::

Entering Debug Mode produces a URL that contains a debug report. You can do any of the following things with the URL:

- Copy it into your browser to view the debug report.
- Add the URL when you submit a support ticket.

### Enable Debug Mode

To enable Beaver Builder Debug Mode and obtain the URL for the debug report:

1. On the **Tools** settings page.
2. Click the **Enable Debug Mode** button.
3. The URL appears just above the button. Copy the URL and paste into your browser's address bar or in your support ticket.

:::info
There are no security risks from having Debug Mode **enabled**. Debug Mode is automatically disabled after 48 hours.

You can also disable it manually on that tab after you know that Support has accessed the report. Once Debug Mode is disabled, the report is deleted.
:::

### Show Errors

Beaver Builder debug mode doesn't output errors by default. After enabling Debug Mode, add the parameter `/?showerrors` to your URL to view errors.

```markup
https://my-website.com/?showerrors
```

Prefix `showerrors` with the `&` symbol (delimiter) if the URL already contains `GET` parameters. As an example, if Beaver Builder is enabled on a page, the URL for `showerrors` would look as follows:

```markup
https://my-website.com/?fl_builder&showerrors
```

### PHP Info

You can also use Beaver Builder debug mode to display your website's PHP configuration, also known as phpinfo. After enabling Debug Mode, add the parameter `&info` to your debug URL to view your PHP configuration.

```markup
https://my-website.com/?fldebug=a12340b6390778c2geg3f832aaf1ae31&info
```

## Prerelease Updates

Enabling prerelease updates applies to all Beaver Builder products that you have installed. If you want updates to apply to only one product, follow the instructions on the [Alpha & Beta releases](introduction/releases-versioning.md) article.

:::warning
There is no support provided for alpha or beta releases and it is strongly discouraged to use them in production environments. There is a high risk of bugs and features can be changed or removed based on testing and feedback.
:::

### Enable Beta updates

1. Access your site's WordPress Admin Dashboard, go to **Settings > Tools**.
2. On the **Tools** tab, scroll to the **Prerelease Updates** section.
3. Select the checkbox **Enable Beta updates**.
4. Click **Save Prerelease Settings**.

### Enable Alpha updates

We don't encourage this setting, so you will not see it until you have enabled beta prereleases in the previous section.

1. Access your site's WordPress Admin Dashboard, go to **Settings > Tools**.

2. On the **Tools** tab, scroll to the **Prerelease Updates** section.

3. Select the checkbox **Enable Alpha updates**.
   If you don't see this checkbox, enable Beta updates first and save.

4. Click Save prerelease settings.

## Send Usage Data

Disabled by default. If **Enabled**, anonymous usage stats are collected. This data is used by the Beaver Builder team to get an understanding of the range of environments in which Beaver Builder is being used.

This data should not impact the performance of your site. It will be collected periodically with a cron job. No matter whether you choose to share or not, you can enable or disable at any time.

:::info
We do not collect any personal information such as your name, email, or IP address, so we can not identify you from that data.
:::

## Uninstall

When you click **Uninstall**, Beaver Builder will be removed from your site and data from your database.

:::caution
On [WordPress Multisite](https://wordpress.org/support/article/create-a-network/) installations, the **Uninstall** button applies to all sites on the network when accessed as the **Network Admin**.
:::

### What data is removed

The following data will be deleted from your `wp_options` table:

- `_fl_builder_settings`
- `_fl_builder_enabled_modules`
- `_fl_builder_enabled_templates`
- `_fl_builder_templates_override`
- `_fl_builder_templates_override_rows`
- `_fl_builder_templates_override_columns`
- `_fl_builder_templates_override_modules`
- `_fl_builder_post_types`
- `_fl_builder_enabled_icons`
- `_fl_builder_branding`
- `_fl_builder_branding_icon`
- `_fl_builder_theme_branding`
- `_fl_builder_user_access`
- `_fl_builder_help_button`
- `_fl_builder_color_presets`

The **Uninstall** process will also remove `_fl_builder_launched` from the `wp_usermeta` table.

:::tip
You can remove Beaver Builder from the **WordPress Admin Dashboard > Plugins** page instead if you do not wish to delete the data.
:::

### What data remains

Even if you **Uninstall** the Beaver Builder plugin, there are some `wp_postmeta` values that get left behind, just in case you'd ever want to restore your layouts. If you would like to remove these meta values to completely remove Beaver Builder – in other words, if you're sure you'll never want to revert your content to Beaver Builder layouts – you can use the function `delete_post_meta_by_key`.

The easiest way to do this is to the the [Post Meta Manager](https://wordpress.org/plugins/post-meta-manager/) plugin. After installing, go to **WordPress Admin Dashboard > Tools > Post Meta Manager** and enter the following keys one by one in the **Delete Meta Keys** section to completely wipe all builder data:

- `_fl_builder_data`
- `_fl_builder_data_settings`
- `_fl_builder_draft`
- `_fl_builder_draft_settings`

![Delete meta keys](/img/beaver-builder/settings--tools--3.jpg)

### What happens after

When you remove Beaver Builder using **Uninstall**, here is what happens.

- A stripped-down HTML version of your layout is copied to the native WordPress editor.
- Your content layouts may not look exactly the same as when the plugin was active, but you won't lose your content.
- Your settings under **WordPress Admin Dashboard > Settings > Beaver Builder** are deleted, and the cache is cleared.
- In technical terms, uninstalling with this method deletes the cache files and options from the `wp_options` table, but it doesn’t delete any layout data in the `wp_postmeta` table.
- If you reactivate the plugin, your content layouts are restored and available for editing in Beaver Builder, but you must manually add information back to **WordPress Admin Dashboard > Settings > Beaver Builder**.
