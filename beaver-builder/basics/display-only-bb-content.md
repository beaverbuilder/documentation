---
id: display-only-bb-content
title: Display only Beaver Builder pages or posts
sidebar_label: Display only Beaver Builder content
description: Global settings allow you to configure certain Beaver Builder settings globally.
---

When you view the lists of Pages or Posts in WordPress (either **Pages > All Pages** or **Posts > All Posts** from the **WordPress admin dashboard**), you can limit the list to those with Beaver Builder layouts, as shown in the following screenshot.

![Filter Beaver Builder content](/img/beaver-builder/basics--display-only-bb-content--1.jpg)

Click the **Beaver Builder** link to limit the display of posts or pages to just the ones that have been edited with Beaver Builder.

:::info
* If you don’t see Beaver Builder in the post status line, it means there are no posts in the list that use the Beaver Builder plugin for the content layout or that Beaver Builder is not [enabled for this post type](settings/post-types.md).

* The Beaver Builder label in the post status line will change if you have used the [Branding](settings/branding.md) options in the Agency version of Beaver Builder.
:::

:::tip
If you want to remove this Beaver Builder link to limit the display of posts or pages, you can use the `fl_builder_admin_edit_sort_bb_enabled` filter as described here.
:::
