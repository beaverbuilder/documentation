---
id: increase-the-wordpress-allowed-memory-size
title: Increase the WordPress allowed memory size
sidebar_label: Increase the WordPress allowed memory size
---

The default memory limit for WordPress is 32 MB. It is very common to exceed
this limit and get the error `Fatal error: Allowed memory size`. The fatal
error message looks similar to this one:

> Fatal error: Allowed memory size of 23556632 bytes exhausted (tried to allocate 3349917 bytes) in /home/my_site/public_html/wp-includes/plugin.php on line x

**To increase the WordPress allowed memory size for your website:**

  1. Open *wp-config.php* , which by default is located in the root WordPress directory.
  2. Find the following line near the end of the file:  

```php
/* That's all, stop editing! Happy blogging. */
```

  3. Just above that line, add the following line:  

```php
define('WP_MEMORY_LIMIT', '64M');
```

Save your changes.

You can also increase memory to a higher number, and you can also increase the
memory limit for admin tasks, as described in the [WordPress codex](https://wordpress.org/support/article/editing-wp-config-php/#increasing-memory-allocated-to-php).

If you’re still receiving the error after this fix, contact your web host
provider or server administrator for their help.
