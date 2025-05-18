---
id: load-css-and-javascript-inline
title: Load CSS and JavaScript inline
sidebar_label: Load CSS and JavaScript inline
---

Instead of loading Beaver Builder CSS and JavaScript as an asset file, you can
render the CSS inline in the `<head>` tag and the JavaScript inline right
before the closing `<body>` tag.

This can be a solution to some rare caching issues, but in most cases you
don’t need to do it.

Add the following line of code to your _functions.php_ file in your child
theme:

```php
add_filter( 'fl_builder_render_assets_inline', '__return_true' );
```
