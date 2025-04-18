---
id: using-css
title: Using Shortcodes in CSS
sidebar_label: Using Shortcodes in CSS
---

You can use shortcodes in Layout CSS & JavaScript settings, accessed from the Tools menu. Use this feature to replace a value in custom CSS or JS in a Beaver Builder layout.

## Enable

1. Access your site's **WordPress Admin Dashboard**.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Advanced** tab and toggle the **Render shortcodes in CSS/JS** option which prevents shortcode markup flagging as an error.

:::info
You can also enable this feature using the `fl_enable_shortcode_css_js` filter in your child theme's _functions.php_ file:

```php
add_filter("fl_enable_shortcode_css_js", "__return_true");
```

:::

## Examples

In the following examples, we demonstrate how to use field connection shortcodes in CSS, but any shortcode can be used.

### `[wpbb site:url]` in CSS

Suppose you have CSS for a background image for a page, such as:

```css
body {
  background: url("https://my-website.com/wp-content/uploads/2022/10/my-image.jpg");
}
```

By using the Beaver Themer shortcode [`[wpbb site:url]`](/beaver-themer/field-connections/wordpress-data#site-url) to replace your site URL, you make it easier to migrate the code or the entire site to a new domain.

```css
body {
  background: url("[wpbb site:url]/wp-content/uploads/2022/10/my-image.jpg");
}
```

### Conditional Logic

You can use field connection conditional logic in your CSS. In the example below, we can change the color of a post title based on whether the Advanced Custom Field field value is true or false.

```css
.fl-post-title {

	[wpbb-if post:acf type='text' name='FIELD NAME' exp='equals' value='SOME VALUE']

		color: red;

	[wpbb-else]

		color: yellow;

	[/wpbb-if]

}
```
