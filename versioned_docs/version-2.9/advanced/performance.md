---
id: performance
title: Performance
sidebar_label: Performance
description: This article provides suggestions and recommendations for improving your website's performance.
---

Beaver Builder is optimized for speed and efficiency, but your website’s performance depends on more than just the builder. Factors like hosting, server configuration, image optimization, active plugins, and your theme all play a role in how fast your site loads. In this article, we’ll share best practices and recommendations to help you maximize performance and deliver a faster, smoother experience for your visitors.

## Hosting

When it comes to WordPress hosting, there are several options to choose from, each with its own advantages and trade-offs. The most common entry point is shared hosting, where multiple websites share the same server resources such as CPU, memory, and storage. While this makes it the cheapest option, the downside is that your site’s performance depends on how those shared resources are being used by others. Even a well-optimized site can feel slow or experience downtime because of limits outside your control.

For that reason, we don’t recommend shared hosting if you care about speed, stability, or long-term growth. Better options include managed WordPress hosting, VPS hosting, or dedicated hosting.

:::tip

To check if your site is on shared hosting, visit [ViewDNS.Info](https://viewdns.info/reverseip/) and run a reverse IP lookup using only your domain (e.g., enter `my-website.com`, not the full URL).

The results will show other domains on the same server. If you see many, it likely means your site is on shared hosting, where resources are divided among multiple users and performance can suffer. If only your domain or a few others appear, you’re likely on VPS, managed WordPress hosting, or dedicated hosting, which generally provide stronger performance, security, and control. 

:::

## PHP

You can further improve your website’s performance by making sure your server is running the latest version of PHP, or at least the [minimum version required by WordPress](https://wordpress.org/about/requirements/).

:::tip

To check your PHP version, enable Beaver Builder [Debug Mode](settings/tools.md#debug-mode) or visit the [WordPress Site Health screen](https://wordpress.org/support/article/site-health-screen/).

:::

## CDN

Using a content delivery network (CDN) can significantly improve the performance of your Beaver Builder website because it stores and distributes assets like HTML pages, JavaScript files, stylesheets, images, and videos across a global network of servers. By serving these files from a location closer to each visitor, a CDN reduces latency, speeds up load times, and ensures a smoother, more reliable browsing experience, even during traffic spikes or high demand.

:::info

By default, Beaver Builder’s CSS and JavaScript do not use your CDN URL. For instance, row background images load directly from your site URL instead of the CDN.

To ensure Beaver Builder’s CSS and JavaScript use your CDN URL, you can apply the hooks [`fl_builder_render_css`](/beaver-builder/developer/tutorials-guides/common-beaver-builder-plugin-filter-examples.md#modify-beaver-builder-css-for-cdns) and [`fl_builder_render_js`](/beaver-builder/developer/tutorials-guides/common-beaver-builder-plugin-filter-examples/#modify-beaver-builder-javascript-for-cdns).

:::

## Plugins & Themes

The suggestions below can improve the performance of your website, particularly in [shared hosting environments](#hosting).

- Ensure WordPress, all plugins and themes are up-to-date.
- Only use plugins and themes that are maintained by the developer.
- Deactivate and delete any unnecessary plugins.

## Caching

Installing and configuring a caching plugin can significantly improve your website’s performance by reducing server load and speeding up page delivery. Caching works by storing static versions of your website’s pages and assets, so they can be served quickly to visitors without repeatedly processing the same requests. This results in faster load times, improved user experience, and better overall efficiency. All [caching plugins](settings/tools.md#cache-clearing-tool) should be compatible with Beaver Builder.  

:::warning

Avoid using multiple caching solutions at the same time, also known as *compound caching*. Combining a cache plugin, server-side caching, and a service like Cloudflare adds unnecessary complexity and increases the risk of conflicts. If your host already provides server-side caching, choose either a caching plugin *or* a service like Cloudflare, but not both. Overlapping caching layers can cause issues such as outdated content being displayed, broken layouts, or difficulties when making updates to your site. Keep your setup simple and streamlined to get the best performance results.  

:::


## Optimize Assets

Optimizing assets like images, videos, and scripts is essential for improving website performance. Large or uncompressed files can slow down your site, increase bandwidth usage, and negatively impact the user experience. Many plugins and services are available to help with image optimization, such as tools that automatically compress and resize images without sacrificing quality.

For videos, we strongly recommend **not** uploading them directly to your WordPress media library. Hosting videos on your server can quickly consume storage space, slow down load times, and put unnecessary strain on your hosting resources. Instead, upload your videos to a platform such as YouTube or Vimeo, then embed them on your site using the [Video module](../layouts/modules/video/video.md). This reduces server load, improves streaming quality, and provides a smoother experience for your visitors.

Managing scripts and stylesheets with optimization plugins requires caution when configuring settings. Minifying files is safe and reduces file size, but options like “combine CSS” or “combine JavaScript” should generally be avoided. Combining CSS can cause styling issues, while combining JavaScript may load assets out of order and break layouts or functionality. Since HTTP/2 efficiently manages multiple requests, combining is unnecessary. For best results, stick to minification and only combine files if absolutely required and thoroughly tested.

## WordPress Revisions

Just like published posts and pages, [revisions](https://wordpress.org/support/article/revisions/) are stored in your database. Each time a revision is created, a new record is added, and these can accumulate over time. By default, WordPress does not limit the number of revisions, but setting a limit helps reduce database size and improve efficiency.

For instance, 50 posts with 5 revisions each would add 250 extra records. Limiting or disabling revisions keeps your database lean and enhances overall performance.

### Limit Revisions via Advanced Settings

You can increase or decrease the number of revisions for any page, post, or custom post type built with Beaver Builder. To update these settings, go to WordPress Admin Dashboard > Settings > Beaver Builder > [Advanced tab](../settings/advanced#limit-wp-revisions-for-layouts) and find the Limit WP revisions for layouts option. Once enabled, a Revisions Limit field will appear where you can set the maximum number of revisions allowed for Beaver Builder layouts.

:::tip

We recommend setting the revision limit to 5, as it provides a balanced approach between functionality and performance. With five revisions, you’ll have enough history to roll back recent changes if needed, while keeping your database from becoming overloaded with unnecessary records.

:::

### Disable Revisions via Advanced Settings

To disable revisions entirely for any page, post, or custom post type, enter a value of 0.


### Limit Revisions via `wp-config.php`

The Revision Limit option in Beaver Builder’s Advanced settings allows you to increase, decrease, or completely disable revisions for any page, post, or custom post type built with Beaver Builder. This setting does not affect content created with the WordPress editor. To apply a global revision limit across all post types, add the following line to your `wp-config.php` file, replacing `5` with the maximum number of revisions you’d like to keep for each post or page:

```php
define( 'WP_POST_REVISIONS', 5 );
```
:::tip

Setting the value to `0` disables revisions globally, preventing WordPress from storing them for any post type.

:::

## Beaver Builder History

[History](basics/undo-redo.md) enables you to undo and redo changes, but it can sometimes make the editor feel sluggish, especially on shared hosting environments or when working with pages that contain many rows, columns, and modules. By default, it tracks 20 changes, but you can reduce this number—or disable it entirely—either temporarily or permanently using several methods:

### Disable History Temporarily

Add &`nohistory` to the end of your Beaver Builder editor URL to disable history tracking. For example:

```markup
https://mysite.com/?fl_builder&nohistory
```

When this parameter is active, clicking **History** in the [Tools menu](user-interface/tools-menu.md) will show that changes are no longer being tracked.

### Reduce or Disable History via Advanced Settings

You can control the number of history records in the [Advanced tab settings](/beaver-builder/settings/advanced.md#limit-the-amount-of-undoredo-history-in-builder-ui). Entering a value sets the maximum number of history items stored, while setting the value to 0 completely disables Beaver Builder’s history tracking.

## Beaver Builder Shortcode

Beaver Builder includes a [layout shortcode](../shortcode/index.md) that makes it easy to display reusable content within pages, posts, custom post type layouts, and even inside other modules such as accordions and tabs. However, using too many shortcodes on a single page or post can negatively impact performance. Each shortcode loads the CSS and JavaScript assets required for the content it represents, so the more shortcodes you add, the more assets are loaded. In some cases, this can result in dozens of additional files, slowing down page performance.

The impact will vary depending on your site’s setup and how important load time optimization is for your needs. As a general rule, using a handful of shortcodes is fine, but adding several dozen or more may lead to noticeable performance issues.

:::tip

Consider using [Beaver Themer](/beaver-themer/) as a more efficient way to add content to posts and pages. It’s often easier to manage and delivers better performance than relying heavily on shortcodes.

:::
