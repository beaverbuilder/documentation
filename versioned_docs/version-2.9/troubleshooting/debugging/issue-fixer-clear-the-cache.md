---
id: issue-fixer-clear-the-cache
title: 'Clear the Beaver Builder cache'
sidebar_label: 'Clear the Beaver Builder cache'
description: How the Beaver Builder cache works and how to clear it.
---

When a new Beaver Builder layout is created, CSS and JavaScript files are dynamically generated and stored in a file on your WordPress site at *wp-content/uploads/bb-plugin/cache*, where they are used to improve performance. These files are automatically deleted and recreated when any of the following events occur:

* Updates are made to a post or page.
* The Beaver Builder plugin is updated.
* Site URLs change, such as when migrating a site to another location.

Even though these cache-clearing triggers occur for most cases, you can manually clear the cache as part of troubleshooting why pages are not refreshing as they should. Clearing the cache is a good first response to any issues that pop up where the result does not appear as you expect. If clearing the Beaver Builder cache does not fix the issue, consider clearing other caches up the chain: any caches from caching plugins, your browser cache, your web hosting server cache, and other caches such as CloudFlare.

**To manually clear the Beaver Builder cache:**

  1. On the WordPress admin panel, click **Settings > Beaver Builder > Tools**.
  2. Click the **Clear Cache** button.

As an alternative, you can  delete the contents of the Beaver Builder caching directory by deleting all of the files in the folder *wp-content/uploads/bb-plugin/cache*.
