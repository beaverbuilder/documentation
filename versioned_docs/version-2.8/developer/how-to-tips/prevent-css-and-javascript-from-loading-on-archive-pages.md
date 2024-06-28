---
id: prevent-css-and-javascript-from-loading-on-archive-pages
title: Prevent CSS and JavaScript from loading on archive pages
sidebar_label: Prevent CSS and JavaScript from loading on archive pages
---

When you have blog posts or custom posts displayed on an archive page that was
built with Beaver Builder, the CSS and JavaScript might be loaded onto the
archive page.

Sometimes you want this functionality, other times, not. This behavior occurs
because of the way Beaver Builder taps into the loop to know which CSS and
JavaScript files to load.

To prevent the CSS and JavaScript files from loading on archive pages, add the
following code to your child theme’s _functions.php_ file.

```php
if ( is_archive() ) {
    remove_action( 'wp_enqueue_scripts', 'FLBuilder::layout_styles_scripts' );
}
```
