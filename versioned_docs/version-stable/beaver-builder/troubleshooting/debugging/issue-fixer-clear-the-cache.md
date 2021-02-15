---
id: issue-fixer-clear-the-cache
title: 'Issue fixer: Clear the cache'
sidebar_label: 'Issue fixer: Clear the cache'
---

CSS and JavaScript files are dynamically generated and cached in Beaver
Builder each time you create a new layout, and the cache is automatically
cleared during updates to a post or page and when the Beaver Builder plugin is
updated.

Occasionally the cache needs to be manually refreshed, such as when you
migrate your site to another location.

:::tip **Tip**
Clearing the cache is a good first response to any issues that pop up
where the result does not appear as you expect. If clearing the Beaver Builder
cache does not fix the issue, consider clearing other caches up the chain:
your browser cache, you web hosting server cache, other caches such as
CloudFlare.
:::

**To clear the Beaver Builder cache:**

  1. On the WordPress admin panel, click **Settings > Beaver Builder > Tools**.
  2. Click the **Clear Cache** button.

If you want to manually check the Beaver Bulder cache, the files are located
in *wp-content/uploads/bb-plugin/cache*.
