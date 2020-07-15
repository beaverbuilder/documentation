---
id: cloudflare-and-403-errors-when-loading-background-images
title: CloudFlare and 403 errors when loading background images
sidebar_label: CloudFlare and 403 errors when loading background images
---

If you're using CloudFlare and a CDN (Content Delivery Network) for images,
you may find that you get a 403 error and background images and other images
linked from CSS rules won't load.

This happens when CloudFlare's [Hotlink
Protection](https://support.cloudflare.com/hc/en-us/articles/200170026-What-
does-enabling-Cloudflare-Hotlink-Protection-do-) is enabled and you're using a
CloudFlare CDN or other CDN to serve images.

There are two workarounds for this problem. You can implement either of the
following solutions.

## Disable Hotlink Protection

The **Hotlink Protection** setting is in CloudFlare's **Scrape Shield**
section, as shown in the following screenshot. Disabling the settings fixes
the 403 error.

![](/img/troubleshooting-cloudflare-403.png)

## Add a filter

If you want CloudFlare's Hotlink Protection setting to stay enabled. you can
add a filter to your child theme.

1. Add the following code to your child theme's *functions.php* file.

  ```php
  add_filter( 'fl_builder_render_css', function( $css ) {
    $css = str_replace( 'https://dev-blog.crowdbeamer.com/', 'https://s29172.pcdn.co/', $css );
    return $css;
  });
  ```

2. In Line 2, replace the first URL with the URL of your website. Replace the second URL with the URL of your CDN.
3. Save the *functions.php* file.
