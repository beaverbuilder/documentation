---
id: cache-clearing-tool
title: Cache Clearing Tool
sidebar_label: Cache Clearing Tool
---

Caches can really speed up page loads, but their annoying side comes when
you're trying to modify a website and can't get the view to reflect the
changes you've just made, or worse, that your site visitors don't see the
updates.

Beaver Builder has a built-in cache clearing tool that automatically clears
caches created by the most popular services and caching plugins under the
following conditions:

  * When WordPress finishes updating plugins and themes.
  * When Beaver Builder editor is active  
This works by defining the `DONOTCACHEPAGE` constant while the page is being
edited, This constant is respected by most caching plugins.

  * When layouts and templates are saved in the Beaver Builder editor

The tool is enabled by default. 

To disable it, and to see a list of the caches that are cleared by this tool, on the WordPress admin panel go to the **Cache Clearing Tool** section of **Settings > Beaver Builder > Tools**.

There is also a setting that enables automatic clearing of proxy caches, such
as Varnish and Litespeed. If you're not sure whether your site is subject to a
proxy cache, leave that setting disabled.

:::info
This tool was formerly available as a plugin in GitHub. If you have
that plugin installed, called Beaver Builder Cache Helper, you can deactivate and
delete it.
:::
