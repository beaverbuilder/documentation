---
id: using-php-files
title: Using Shortcodes in PHP files
sidebar_label: Using Shortcodes in PHP files
description: Beaver Builder shortcodes can be used in PHP files such as header.php or footer.php to display saved templates, rows, columns, or modules.
---

Beaver Builder shortcodes can be used in PHP files such as _header.php_, _footer.php_, or _functions.php_ to display saved templates, rows, columns, or modules.

:::caution
This article assumes you're using a child theme. Keeping your customizations separate from the parent theme helps protect them from theme updates.
:::

## Usage

WordPress generated pages, such as index and archive pages, are not customizable with Beaver Builder. As an alternative, you can use the WordPress [`do_shortcode()`](https://developer.wordpress.org/reference/functions/do_shortcode/) function to render saved content, such as templates, rows, columns, or modules, on index and archive pages.

:::info
To use this method, you should be familiar with PHP, WordPress [conditional tags](https://developer.wordpress.org/themes/basics/conditional-tags/), and [template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/). Alternatively, you can use [Beaver Themer](https://www.wpbeaverbuilder.com/beaver-themer/).
:::

## Create your Saved Content

Before you can use the shortcode in your PHP files, you need to create your saved content. See the following articles for more information:

- [How to create a Saved Template](layouts/templates/saved-templates.md).
- [How to create a Saved Content (rows, columns, & modules)](layouts/saved-content.md).

## Construct the shortcode

Below is an example shortcode using the **slug** attribute.

```markup
[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]
```

See the [Shortcodes syntax](syntax.md) article for more information.

## Insert the shortcode

The shortcode can be included in PHP files in two ways. Using a child theme, edit your theme files to insert the shortcode or using the theme's hooks and adding the shortcode to the child theme's _functions.php_ file.

### 1. Edit theme files

In this example, the code is placed into the **header.php** in your [child theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/), depending on where on the page you want the content to appear. These instructions assume you are using the BB Theme, but the code itself should work in any theme.

1. Copy the **header.php** from the parent theme and add to your child theme directory. The example tree below shows what this structure would look like if you were using the Beaver Builder child theme.

```markup
/bb-theme-child
├── functions.php
├── header.php
└── style.css
```

2. Open the file from the child theme directory in a code editor.
   Alternatively, you can use the WordPress theme editor (**WordPress Admin Dashboard > Appearance > Theme Editor**).

3. In the _header.php_ file, find the code below:

```php
<?php do_action("fl_content_open"); ?>
```

4. Add the following code after `<?php do_action('fl_content_open'); ?>`, making sure that you substitute your own shortcode.

   ```php
   <?php
   echo do_shortcode('[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]');
   ?>
   ```

5. Save your _header.php_ file.

6. When you refresh the page, your saved content should be visible below the BB Theme header and above the page or post content.

### 2. Using hooks

In this example, you add the code to the child theme's _functions.php_ file. These instructions assume you are using the BB Theme and do **not** work with third-party themes.

:::tip
If you're using a third-party theme, substitute the BB theme hooks `fl_before_content` and `fl_after_content` from the code examples with your theme's hook.
:::

1. Go to your child theme and open the _functions.php_ in a code editor. For BB Theme, the location is:
   `/wp-content/themes/bb-theme-child`
   Alternatively, you can use the WordPress theme editor (**WordPress Admin Dashboard > Appearance > Theme Editor**).

2. Add one of the following code examples to the end of the file, making sure that you substitute your own shortcode.

   ```php title='To insert shortcode after the header'
   function my_page_header()
   {
     echo do_shortcode(
       '[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]'
     );
   }
   add_action("fl_before_content", "my_page_header");
   ```

   ```php title='To insert shortcode before the footer'
   function my_page_footer()
   {
     echo do_shortcode(
       '[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]'
     );
   }
   add_action("fl_after_content", "my_page_footer");
   ```

3. Save the _functions.php_ changes.

4. When you refresh the page, your saved content should be visible in the hook location where you added the code.

## Using WordPress conditional tags

You can use the Beaver Builder shortcode with [WordPress conditional tags](https://developer.wordpress.org/themes/basics/conditional-tags/) to control which types of pages the shortcode appears on. The examples assume you are using the BB Theme.

If you're using a third-party theme, substitute the BB theme hook `fl_before_content` from the code example with your theme's hook.

### `is_single()`

This example uses the WordPress conditional tag [`is_single()`](https://developer.wordpress.org/reference/functions/is_single/) to insert the shortcode into a specific post. Replace `1234` in the code example with your post `ID`.

```php
function my_page_header()
{
  if (is_single("1234")) {
    echo do_shortcode(
      '[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]'
    );
  }
}
add_action("fl_before_content", "my_page_header");
```

### `is_home()`

This example uses the WordPress conditional tag [`is_home()`](https://developer.wordpress.org/reference/functions/is_home/) to insert the shortcode into the [blog homepage](https://wordpress.org/support/article/settings-reading-screen/#reading-settings).

```php
function my_page_header()
{
  if (is_home()) {
    echo do_shortcode(
      '[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]'
    );
  }
}
add_action("fl_before_content", "my_page_header");
```

### `is_front_page()`

This example uses the WordPress conditional tag [`is_front_page()`](https://developer.wordpress.org/reference/functions/is_front_page/) to insert the shortcode into the [static homepage](https://wordpress.org/support/article/creating-a-static-front-page/).

```php
function my_page_header()
{
  if (is_front_page()) {
    echo do_shortcode(
      '[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]'
    );
  }
}
add_action("fl_before_content", "my_page_header");
```

### Front-page, posts, pages, custom post types and archive pages

The code `is_front_page() || is_singular() || is_archive()` inserts the shortcode into the static homepage, all posts, pages, custom post types, and archive pages.

:::info
The double pipe `||` corresponds to the boolean `OR`. If you don't want one of those types, remove it from the list of conditionals and adjust the double pipes as necessary.
:::

```php
function my_page_header()
{
  if (is_front_page() || is_singular() || is_archive()) {
    echo do_shortcode('[fl_builder_insert_layout id="36607"]');
  }
}
add_action("fl_before_content", "my_page_header");
```
