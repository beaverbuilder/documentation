---
id: disable-minification-and-caching-with-wpdebug
title: Disable minification and caching with WP_DEBUG
sidebar_label: Disable minification and caching with WP_DEBUG
---

It is a best practice to set [WP_DEBUG](https://codex.wordpress.org/WP_DEBUG)
to `true` during development to catch errors that might not otherwise show.
Setting `WP_DEBUG` to **true** in your *wp-config.php* file will have the
following effects:

* The compiled css/js files that are normally stored in the */uploads/bb-plugin/cache* directory will be unminified and regenerated on every page load.
* It will disable minification and concatenation of the core UI files in the */plugins/bb-plugin/js/_ and */plugins/bb-plugin/css/* directories.

By default, `WP_DEBUG` is set to false in *wp-config.php*.

**To change the WP_DEBUG setting:**

  1. In the main WordPress directory for your site, open *wp-config.php* for editing.
  2. Search for `WP_DEBUG` and change the setting to **true**, as follows:

  ```php
  define( 'WP_DEBUG', true );
  ```

This is especially useful during the development of custom modules. The CSS
and JavaScript for the current layout will be refreshed on each page load
instead of cached, as it is by default.

When WP_DEBUG is set to **false**, all of the core UI files in the */plugins
/bb-plugin/js/* and **/plugins/bb-plugin/css/** directories will be minified
and concatenated into *fl-builder.min.css* and *fl-builder.min.js*.

:::tip **Tip**
Alternatively, you can use the `fl_is_debug` filter which performs the same as setting `WP_DEBUG` to `true`. Simply add the snippet below to your child theme's *functions.php* file.

```php
add_filter( 'fl_is_debug', '__return_true' );
```
:::