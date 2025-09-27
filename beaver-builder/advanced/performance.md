---
id: performance
title: Performance
sidebar_label: Performance
description: This article provides suggestions and recommendations for improving your website's performance.
draft: true
---

Beaver Builder is optimized for speed and efficiency, but your website’s performance depends on more than just the builder. Factors like hosting, server configuration, image optimization, active plugins, and your theme all play a role in how fast your site loads. In this article, we’ll share best practices and recommendations to help you maximize performance and deliver a faster, smoother experience for your visitors.

## Hosting

Shared hosting is the most common and budget-friendly WordPress hosting option. It places multiple websites on the same server, requiring them to share resources such as CPU, memory, and disk space. While this makes shared hosting affordable, it often results in slower performance for individual sites, regardless of how well they are optimized.  

Because of these limitations, we don’t recommend shared hosting. If performance is a priority, consider upgrading to other hosting solutions such as Managed WordPress Hosting or a VPS. These options provide more resources, improved security, and optimized environments that are better suited for websites with higher traffic or advanced requirements. Dedicated hosting is also available for projects that demand maximum control and scalability. Ultimately, the right hosting choice depends on your website’s size, complexity, and growth goals.  

:::tip

To check whether your site is hosted on a shared server, go to [ViewDNS.Info](https://viewdns.info/reverseip/) and perform a reverse IP lookup using your domain name. Be sure to enter only the domain, not the full URL. For example, if your site is `https://my-website.com/`, enter `my-website.com` without `https://` or a trailing slash.  

When you run the lookup, you’ll see a list of other domains hosted on the same server. If many different websites appear, it’s a strong indicator that your site is on shared hosting, where resources like CPU, memory, and disk space are divided among multiple users. This can lead to slower performance, especially during peak traffic times.  

On the other hand, if only your domain (or very few others) are listed, it’s likely that your site is hosted on a VPS, managed WordPress hosting, or a dedicated server. These environments typically provide more consistent performance, better security, and greater control over resources.  

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

Optimizing assets like images and videos is essential for improving website performance. Large or uncompressed files can slow down your site, increase bandwidth usage, and negatively impact the user experience. Many plugins and services are available to help with image optimization, such as tools that automatically compress and resize images without sacrificing quality.  

For videos, we strongly recommend **not** uploading them directly to your WordPress media library. Hosting videos on your server can quickly consume storage space, slow down load times, and put unnecessary strain on your hosting resources. Instead, upload your videos to a platform such as YouTube or Vimeo, then embed them on your site using the [Video module](modules/video.md). This approach reduces server load, improves streaming quality, and ensures a smoother experience for your visitors.

## WordPress Revisions  

Just like published posts and pages, [revisions](https://wordpress.org/support/article/revisions/) are stored in your database. Each time a revision is created, a new record is added, and over time this can add up.  

For example, 50 posts with 5 revisions each will generate 250 additional records. Limiting or disabling revisions can help keep your database lean and improve performance.  

### Limit Revisions

By default, WordPress does not limit the number of revisions. Setting a limit helps reduce database records and improves efficiency. You can control revisions for Beaver Builder layouts from the Beaver Builder Settings page > [Advanced tab](/beaver-builder/settings/advanced#limit-wp-revisions-for-layouts).

To apply a limit across all post types, add the following line to your `wp-config.php` file, replacing 3 with the maximum number of revisions you want to keep per post or page:

```php
define( 'WP_POST_REVISIONS', 3 );
```

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

### Reduce or Disable History via wp-config

This method requires access to the wp-config.php file in your WordPress installation root and applies to all layouts site-wide.
1.	Open the wp-config.php file for editing.
2.	Add the following code before the line that says `/* That's all, stop editing! Happy publishing. */`:  
  
  ```php
  if ( ! defined( 'FL_BUILDER_HISTORY_STATES' ) ) {
    define( 'FL_BUILDER_HISTORY_STATES', 20 );
  }
  ```

3.	Change the number from 20 to a smaller value to limit history, or set it to 0 to disable history entirely.

When history is disabled, the Tools menu will display the message:
Undo/redo history is currently disabled.

:::tip
To restore normal history tracking, remove this code from the wp-config.php file.
:::

## Beaver Builder Shortcode

Beaver Builder [Shortcodes](shortcode/index.md) provide a convenient way to display reusable content within layouts. However, using too many shortcodes on a single post or page can negatively affect performance. Each shortcode loads the CSS and JavaScript assets required by the content it represents, and the more shortcodes you add, the more assets are loaded. In some cases, this can result in dozens of additional files, slowing down page performance.

The impact varies depending on your site’s setup and how critical it is to optimize load times. As a general guideline, using a few shortcodes is fine, but adding a couple dozen or more may lead to performance issues.

:::tip

Consider [Beaver Themer](/beaver-themer/) as a more efficient way to inject content into posts and pages. It’s often simpler and performs better than relying heavily on shortcodes.

:::
