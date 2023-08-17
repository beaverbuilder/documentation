---
id: add-rows-and-modules-to-index-archive-and-post-pages
title: Add rows and modules to index, archive, and post pages
sidebar_label: Add rows and modules to index, archive, and post pages
---

Out of the box, you can't use Beaver Builder to modify generated index and
archive pages. However, if you're comfortable adding code to create custom
files, you can add a saved row or module to a generated index or archive page
fairly easily. Single post pages are also included in the code examples, but
you can easily modify the code to include the page types you want.

:::tip **Tip**
If you're not sure what index and archive pages are in WordPress, see
the article about [how WordPress handles blog posts and archives](/beaver-builder/layouts/post-layouts/basics-how-wordpress-handles-blog-posts-and-archives.md).
:::

The code provided here inserts the saved row or module and can be added under
the header or above the footer on index, archive, and single post pages, using
a shortcode. You can easily change the page types on which you want the saved
row or module to appear.

For example, here's an example of a saved row with a Call to Action module
placed under the header on an index page:

![](/img/how-to-tips-row-module-index-1.jpg)

And in the next screenshot, it's placed just above the footer:

![](/img/how-to-tips-row-module-index-2.jpg)

This procedure doesn't work within the generated or single post content area.

Complete each of the following tasks.

## 1. Create the saved row or module

Here's the saved row used in this example. It consists of a row background
image with borders and a Call to Action module.

![](/img/how-to-tips-row-module-index-3.jpg)

See the [this article](/beaver-builder/layouts/templates/save-a-row-column-or-module-for-reuse.md) for more information about how to save rows and
modules.

:::tip **Tip**
Global rows or modules are ok but not necessary. The shortcode will
display the row or module on every page the code tells it to, and if you edit
that module, the change will be reflected everywhere, so even a standard saved
row or module will function as a global one in this case.
:::

## 2. Construct the shortcode

Here's the template for constructing the shortcode:

```markup
[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]
```

See the [this article](/beaver-builder/advanced-builder-techniques/shortcodes/get-the-slug-or-id-for-a-shortcode.md) for how to find the page slug for the saved row or
module you want to use.

## 3. Insert the shortcode

You can use any of the following three methods to insert the shortcode.

### Method 1: Add code to header.php or footer.php

In this method, the code is placed into *header.php* or *footer.php* in your
child theme, depending on where on the page you want the content to appear.
The instructions assume you are using the Beaver Builder Theme, but the code
itself should work in any theme.

**To add the shortcode below the header or above the footer:**

1. Copy either *header.php* or *footer.php* from the main theme to your child theme.  
If you're using Beaver Builder Theme, go to *wp-content/themes/bb-theme* ,
copy *footer.php* , and paste it into *wp-content/themes/bb-theme-child*.

2. Open the file in the child theme for editing.
3. In *header.php* , find the line `<?php do_action('fl_content_open'); ?>`.  
In *footer.php* , find the line `<?php do_action('fl_content_close'); ?>`. The
code will be added just above this line in both cases.

4. Add this code, making sure that you substitute your own shortcode. See the tips below for how to customize this code.

  ```php
  <?php
    if (is_home() || is_single() || is_archive()) :
      echo do_shortcode('[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]');
    endif;
  ?>
  ```

5. Save your *header.php* or *footer.php* file back to your child theme.

:::tip **Customization tips:**
* The code `is_home() || is_single() || is_archive()` inserts the shortcode into the index page (whether it's the front page or another page where you've set the Posts Page in **Settings > Reading**), plus single post pages, plus all archive pages (including custom post type archives). (The double pipe corresponds to the boolean OR.) If you don't want one of those types, remove it from the list of conditionals and adjust the double pipes as necessary.

* To use other conditionals, see the [WordPress codex on conditional tags](https://developer.wordpress.org/themes/basics/conditional-tags/).
:::

### Method 2: Add code to functions.php

In this method, you add the code to the child theme's *functions.php* file.

  1. Go to your child theme and open *functions.php* for editing.  
For Beaver Builder Theme, the location is *wp-content/themes/bb-theme-child*.

  2. Add one of the following code blocks to the end of the file, making sure that you substitute your own shortcode.   
See the tips in the previous method for changing the conditionals to control
which types of pages the shortcode appears on.

  **To insert shortcode after the header:**

  ```php
  function my_page_header() {
    if (is_home() || is_single() || is_archive()) {
        echo do_shortcode('[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]');
    }
  }
  add_action('fl_before_content', 'my_page_header');
  ```

  **To insert shortcode before the footer:**

  ```php
  function my_page_footer() {
    if (is_home() || is_single() || is_archive()) {
        echo do_shortcode('[fl_builder_insert_layout slug="INSERT_YOUR_SLUG_HERE"]');
    }
  }
  add_action('fl_after_content', 'my_page_footer');
  ```

  3. Save _functions.php_ back to your child theme.
