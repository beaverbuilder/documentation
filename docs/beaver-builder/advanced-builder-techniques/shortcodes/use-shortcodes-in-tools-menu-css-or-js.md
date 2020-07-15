---
id: use-shortcodes-in-tools-menu-css-or-js
title: Use shortcodes in Tools menu CSS or JS
sidebar_label: Use shortcodes in Tools menu CSS or JS
---

You can use shortcodes in **Layout CSS & JavaScript settings**, accessed from
the [Tools menu](/beaver-builder/getting-started/tools-menu). Use this
feature to replace a value in custom CSS or JS in a Beaver Builder layout.

## To enable this feature

* Add the following line to your child theme's functions.php file:

  ```php
  add_filter( 'fl_enable_shortcode_css_js', '__return_true' );
  ```

  :::note **Note**
  This filter also disables code checking for CSS and JavaScript,
  because it would see raw shortcodes as a markup issue.
  :::

You can use any shortcode, Beaver Builder or not, but we'll give you a couple
examples that use Beaver Themer shortcodes very effectively.

## Example 1

You have CSS for a background image for a page, such as:

```css
body {
  background: url("https://example.com/wp-content/uploads/2019/09/IMG_0346.jpg");
}
```

By using the Themer shortcode `[wpbb site:url]` to replace your site URL, you
make it easier to migrate the code or the entire site to new URLs:

```css
body {
  background: url("[wpbb site:url]/wp-content/uploads/2019/09/IMG_0346.jpg");
}
```

## Example 2

Here's a screenshot example of adding conditional shortcodes based on ACF
custom field values.

![](/img/the-basics-shortcodes-tools-menu.jpg)
