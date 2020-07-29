---
id: wordpress-widgets
title: WordPress widgets
sidebar_label: WordPress Widgets
---

Almost any WordPress widget that is available to you in the WordPress admin
panel's **Appearance > Widgets** can be added to your Beaver Builder layout as a
content module. If you have WooCommerce installed, the WooCommerce widgets
appear in the list also.

:::note **Note**
There are several WordPress widgets that don't appear in the **WordPress
Widgets** list in the Content panel:

* Audio widget
* Custom HTML widget
* Gallery widget
* Image widget
* Text widget
* Video widget

This is because Beaver Builder has its own modules that have more options and work better in your layouts. You can still
use these WordPress widgets in any theme sidebar or footer areas that use
native WordPress widgets.
:::

## Add WordPress widget modules to a layout

In the Content panel, click in the **Group** field and choose **WordPress
widgets**. Drag a widget into your layout.

See the [WordPress Codex](https://wordpress.org/support/article/appearance-widgets-screen/) for documentation
on widgets and the [WooCommerce widget documentation](https://docs.woocommerce.com/document/woocommerce-widgets/).

:::tip **Tip**
The Sell layout template in Beaver Builder uses several WooCommerce
widgets as modules in the lower half of the page.
:::

## Third-party widgets

Many third-party widgets will not work properly if you add them to your Beaver Builder layout. Here's why.

Most third-party widgets are loaded to run in the WordPress admin back end, because they are usually used at **Appearance > Widgets**, whereas Beaver Builder runs in the front end. In more technical terms, these third-party widgets use the [`admin_enqueue_script()`](https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/) function to load the widget's scripts (JavaScript) and styles (CSS) into the WordPress Admin dashboard.

You can get these widgets to work in Beaver Builder layouts by adding custom code to your [child theme's](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme.md) _functions.php_ file that enqueues the widgets to load on the front end as well. Below is an example snippet on how to enqueue scripts and styles whilst the builder is active on your page or posts.

```php
add_action( 'wp_enqueue_scripts', function() {
  if ( FLBuilderModel::is_builder_active() ) {
    wp_enqueue_script( // Add URL to widgets script here );
    wp_enqueue_style( // Add URL to widgets styles here  );
  }
});
```

:::note **Note**
If you're unsure of the URL for your plugins widget assets, contact the plugin
developer who will be able to assist.
:::
