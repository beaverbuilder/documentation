---
id: limit-page-post-lists-to-bb-layouts
title: Display only Beaver Builder pages or posts
sidebar_label: Display only Beaver Builder pages or posts
---

When you view the lists of Pages or Posts in WordPress (either **Pages > All pages** or **Posts > All posts** from the WordPress admin panel), you can limit the list to those with Beaver Builder layouts, as shown in the following screenshot.

![](/img/limit-page-post-lists-to-bb-layouts-f63f0211.png)

Click that link to limit the display of posts or pages to just the ones that have been edited with Beaver Builder.

:::note **Notes**

If you don’t see Beaver Builder in the post status line, it means there are no posts in the list that use the Beaver Builder plugin for the content layout or that Beaver Builder is not enabled for this post type.
The Beaver Builder label in the post status line will change if you have whitelabeling in the Agency version of Beaver Builder.

If you want to disable this functionality, you can prevent Beaver Builder from appearing in the post status line by adding the following line of code to the _functions.php_ file in your child theme:

```php
add_filter( 'fl_builder_admin_edit_sort_bb_enabled', '__return_false' );
```
:::