---
id: performance
title: Performance
sidebar_label: Performance
description: This article provides suggestions and recommendations for improving your website's performance.
draft: true
---

Beaver Builder is designed to be fast and efficient, with various measures in place to prevent it from compromising your website's speed. Nonetheless, the overall performance of a website is affected by multiple elements such as the hosting environment, server configuration, image sizes, plugin quantity, and the chosen theme. In this guide, you'll find tips and strategies for enhancing the speed and efficiency of your website.

:::tip

For more tips on optimizing your WordPress site, check out the [WordPress Optimization](https://wordpress.org/support/article/optimization/) article.

:::

## TL;DR

1. **Hosting**: Avoid shared hosting and consider Managed WordPress Hosting or a VPS.
2. **PHP**: Ensure your server is running the most current version of PHP.
3. **CDN**: Use a content delivery network (CDN) to deliver assets quickly.
4. **WordPress, Plugins & Themes**: Keep everything up-to-date and use only maintained plugins and themes.
5. **Cache Plugins**: Install and configure a cache plugin, such as [WP Rocket](https://www.wpbeaverbuilder.com/go/wprocket).

## Hosting

The most economical and widely used WordPress hosting option is shared hosting. Shared hosting providers pack numerous websites onto the same server, resulting in shared resources such as CPU, memory, and disk space among all hosted sites.

This shared resource allocation adversely impacts the performance of individual websites, leading to inevitable poor performance for users, regardless of optimization efforts.

:::tip

To check if your website is on a shared server, visit [ViewDNS.Info](https://viewdns.info/reverseip/). Use your website's domain for a reverse IP lookup, revealing all other sites sharing the server.

Enter only your website's domain, excluding any additional elements. For instance, if your website URL is `https://my-website.com/`, input only `my-website.com`, excluding the trailing slash (`/`) and `https://`.

:::

We discourage the use of shared hosting and suggest that those concerned about their website's performance consider migrating to Managed WordPress Hosting or a VPS.

The hosting companies listed below specialize in WordPress hosting, offering services beyond what standard web hosts provide.

- [Cloudways](https://www.wpbeaverbuilder.com/go/cloudways)
- [Digital Ocean](https://www.wpbeaverbuilder.com/go/digitalocean)
- [Kinsta](https://www.wpbeaverbuilder.com/go/kinsta)
- [Linode](https://www.wpbeaverbuilder.com/go/linode)
- [Page.ly](https://www.wpbeaverbuilder.com/go/pagely)
- [SiteGround](https://www.wpbeaverbuilder.com/go/siteground)

:::caution

While virtual private servers (VPS), such as those offered by Digital Ocean and Linode, provide unmatched performance, you are tasked with the responsibility for managing the server, such as updating the operating system and PHP.

:::

## PHP

You can improve your website's performance even further by ensuring the server hosting your website is running the most current version of PHP or, at the very least, the [minimum PHP requirement set by WordPress](https://wordpress.org/about/requirements/).

:::tip
You can see what version of PHP your server is running, By enabling Beaver Builder [Debug Mode](settings/tools.md#debug-mode) or visiting the [WordPress Site Health screen](https://wordpress.org/support/article/site-health-screen/).
:::

## Use a CDN

Content delivery networks (CDNs) are networks of servers that provide rapid delivery of assets such as HTML pages, javascript files, stylesheets, images, and videos.

Due to the importance of page speed in rankings, CDNs not only improve the performance of your website, but also improve your search engine optimization (SEO).

:::info

By default, Beaver Builder CSS and JavaScript will not use your CDN URL. For example, row background images will use your site URL rather than the CDN URL. You can force Beaver Builder CSS and JavaScript to use your CDN URL using the hooks `fl_builder_render_css` and `fl_builder_render_js`.

:::

## WordPress, Plugins & Themes

The suggestions below can improve the performance of your website, particularly in [shared hosting environments](#hosting).

- Ensure WordPress, all plugins and themes are up-to-date.
- Only use plugins and themes that are maintained by the developer.
- Deactivate and delete any unnecessary plugins.
- Use only [themes](getting-started/how-it-works.md#wordpress-themes) from the [WordPress.org theme directory](https://wordpress.org/themes/) since these themes have been [reviewed by WordPress](https://make.wordpress.org/themes/handbook/review/).

### Cache Plugins

The performance of your website can be greatly improved by installing and configuring a cache plugin. All [cache plugins](settings/tools.md#cache-clearing-tool) should be compatible with Beaver Builder, and we recommend [WP Rocket](https://www.wpbeaverbuilder.com/go/wprocket).

:::warning
We strongly discourage against compound caching, which involves the use of multiple cache plugins and services at once. For instance, using a cache plugin, server-side caching, and a service like Cloudflare simultaneously. Compounding caches simply adds additional layers of complexity and raises the possibility of conflicts.

If your website currently utilizes server-side caching, we recommend using either a service like Cloudflare or a cache plugin, but not all three.
:::

## Optimize Assets

Optimizing your website's assets, such as images and videos, is crucial for improving performance. There are numerous plugins and services available to help with this.

As for videos, uploading video files to your website's WordPress media library is strongly discouraged. Instead, we recommend uploading your videos to services like YouTube or Vimeo and embedding the video on your website via a [Video module](modules/video.md). Nevertheless, if you prefer to upload to the WordPress media library, optimizing your videos is necessary and the [HandBrake](https://handbrake.fr/) application can help with this.

## WordPress Revisions

Just like published posts and pages, [revisions](https://wordpress.org/support/article/revisions/) are stored in the database. As each revision is created, an additional record is added to your database, and this number grows over time.

For example, if you have 50 posts with 5 revisions per post, you have 250 records. You can improve the performance of your website by limiting or disabling WordPress revisions.

### Limit revisions

WordPress by default doesn't limit revisions. Thus, any limit you impose on WordPress revisions will improve the efficiency of your database.

You can limit revisions, by adding `WP_POST_REVISIONS` to the _wp-config.php_ file with a numeric value.

```php
define("WP_POST_REVISIONS", 3);
```

### Disable Revisions

You can completely disable revisions, by adding `WP_POST_REVISIONS` to the _wp-config.php_ file with a value of `false`.

```php
define("WP_POST_REVISIONS", false);
```

## Beaver Builder History

The Beaver Builder [History](basics/undo-redo.md) can cause sluggish behavior in the editor, particularly when your site is in a [shared hosting environment](#hosting) or the page you're editing has a large number of rows, columns, and modules. The default number of changes History tracks is `20`. You can reduce or disable this number temporarily or more permanently in two ways:

### Disable History Temporarily

Add `&nohistory` to the end of your URL in the Beaver Builder editor. For example:

```markup
https://mysite.com/?fl_builder&nohistory
```

If you click **History** in the [Tools menu](user-interface/tools-menu.md), any changes made will no longer be tracked.

### Reduce or Disable History via wp-config

This method requires access to the **wp-config.php** file in your WordPress installation root. It reduces or disables History for all Beaver Builder layouts site-wide.

1. Open the **wp-config.php** file for editing.
2. Add the following code before the line that says `/* That's all, stop editing! Happy publishing. */`:

```php
if (!defined("FL_BUILDER_HISTORY_STATES")) {
  define("FL_BUILDER_HISTORY_STATES", 20);
}
```

3. Change the number of states from `20` to a smaller number, or change the number to `0` to disable History entirely.

If you click **History** in the [Tools menu](user-interface/tools-menu.md), you'll see the message `Undo/redo history is currently disabled`.

:::tip
To restore normal **History** functionality, remove this code from the _wp-config.php_ file.
:::

## Beaver Builder Shortcode

Beaver Builder [shortcodes](shortcode/index.md) are a convenient way to render reusable content on layouts. However, using too many shortcodes on a single post or page can negatively affect performance.

### Why do Shortcodes Impact Performance?

If you use Beaver Builder shortcodes, the assets (CSS & JavaScript files) associated with your saved content are added to the page or post. These assets are required to render your saved content properly. Multiply that by the number of shortcodes on your page, and you could have tens of assets to load.

### How many Shortcodes are too many?

That depends on factors such as what else has to be loaded and how important it is to you to shave off every millisecond of page loading time that you can. As a ballpark, a few shortcodes are ok; a couple dozen are probably going to cause problems. Shortcode alternatives

- Use [global rows](rows/saved-rows.md) or [modules](modules/saved-modules.md) instead of shortcodes when you can. Global rows and modules become part of the main layout, so you don’t need separate queries for the data and separate assets to render them.

- [Beaver Themer](/beaver-themer/) is often an easier and better solution to inject content into posts and pages than Beaver Builder shortcodes.
