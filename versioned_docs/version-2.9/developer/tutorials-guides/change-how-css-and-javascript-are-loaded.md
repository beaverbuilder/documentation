---
id: change-how-css-and-javascript-are-loaded
title: Change how CSS and JavaScript are loaded
sidebar_label: Change how CSS and JavaScript are loaded
---

Instead of loading Beaver Builder CSS and JavaScript as an asset file, you can
render the CSS inline in the `<head>` tag and the JavaScript inline right
before the closing `<body>` tag. This can be a solution to some rare caching
issues, but in most cases you don’t need to do it.

Add the following line of code to your functions.php file in your child theme:

```php
add_filter( 'fl_builder_render_assets_inline', '__return_true' );
```

You'll also see a change in the name of the installed Beaver Themer plugin on
the **Plugins** page. It's now displayed as **Beaver Builder - Themer Add-On**. This change makes it more apparent that Beaver Themer requires the Beaver Builder Plugin to work.
