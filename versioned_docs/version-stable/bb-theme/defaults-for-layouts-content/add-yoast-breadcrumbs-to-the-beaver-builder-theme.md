---
id: add-yoast-breadcrumbs-to-the-beaver-builder-theme
title: Add Yoast breadcrumbs to your site
sidebar_label: Add Yoast breadcrumbs
---

You can easily add a breadcrumb provided by the Yoast SEO plugin to your Beaver Builder child theme. There are two versions of the code. The first displays the breadcrumb on all pages and posts on your site. The second displays the breadcrumb everywhere except a [static home page](/general/glossary.md/#static-page-wp).

:::note **Note**
See [this article about why you need the child theme](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme.md).
:::

1. Enable Yoast breadcrumbs by clicking **SEO > Search Appearance > Breadcrumbs** on the WordPress admin panel, then on the **Breadcrumbs** tab click **Enabled** in the **Breadcrumbs settings** section.
2. Add one of the following sets of code to your child theme’s _functions.php_ file.
    * To have the breadcrumb appear throughout your site, add the following code to your child theme’s _functions.php_ file.  
    ```php
    function bbtheme_yoast_breadcrumbs() {
      if ( function_exists('yoast_breadcrumb') ) {
        yoast_breadcrumb('<div class="container"><p id="breadcrumbs">','</p></div>');
      }
    }
    add_action( 'fl_content_open', 'bbtheme_yoast_breadcrumbs' );
    ```
    * To have the breadcrumbs appear on all pages and posts except your static home page, add the following code.  
    ```php
  function bbtheme_yoast_breadcrumbs() {
      if ( function_exists('yoast_breadcrumb') && ! is_front_page() ) {
        yoast_breadcrumb('<div class="container"><p id="breadcrumbs">','</p></div>');
      }
    }
    add_action( 'fl_content_open', 'bbtheme_yoast_breadcrumbs' );
    ```

:::tip **Tip**
You can get [more control over where the breadcrumb appears on a page and in your site](/beaver-themer/layout-types-modules/part-layout-type/add-yoast-breadcrumbs-with-beaver-themer.md) by using Beaver Themer.
:::
