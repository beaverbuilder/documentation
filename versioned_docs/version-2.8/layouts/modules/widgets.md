---
id: widgets
title: WordPress Widgets
sidebar_label: WordPress Widgets
description: Beaver Builder has transformed all the standard WordPress widgets into modules, allowing you to effortlessly utilize them anywhere within your layout.
---

You can easily include almost any WordPress widget from the **WordPress Admin Dashboard > Appearance > Widgets** section in your Beaver Builder layout as a content module. Additionally, if you have WooCommerce installed, the WooCommerce widgets will also be visible in the list of available widgets.

:::info
When accessing the **Content Panel > Modules > WordPress Widgets**, you may notice that certain widgets like Audio, Custom HTML, Gallery, Image, Text, and Video are not included. This deliberate exclusion is because Beaver Builder provides module equivalents that offer advanced functionality. As a result, these specific widgets are not necessary within your Beaver Builder layouts.

Nevertheless, you can still make use of these WordPress widgets in theme sidebars or widgetized areas that utilize native WordPress widgets.
:::

## Adding Widgets

In the Content panel, click in the **Group** field and choose **WordPress
widgets**. Drag a widget into your layout.

## Third-party Widgets

When adding third-party widgets into your Beaver Builder layout, you may encounter limited or non-functional behavior. This is because most third-party widgets are designed to function within the WordPress admin dashboard (back-end) and are primarily intended for use at **Appearance > Widgets**. In contrast, Beaver Builder functions on the front end of your website.

Technically speaking, these third-party widgets utilize the [`admin_enqueue_script()`](https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/) function to load their scripts (JavaScript) and styles (CSS) into the WordPress Admin dashboard.

To make these widgets function properly within your Beaver Builder layouts, you can include custom code in your child theme's *functions.php* file. This code will ensure that the widgets are enqueued and loaded on the front end as well. Below is an example snippet that demonstrates how to enqueue scripts and styles when the builder is active on your pages or posts:

```php
add_action( 'wp_enqueue_scripts', function() {
  if ( FLBuilderModel::is_builder_active() ) {
    wp_enqueue_script( // Add URL to widgets script here );
    wp_enqueue_style( // Add URL to widgets styles here  );
  }
});
```

:::info
If you are unsure about the URL for your widget assets, we recommend reaching out to the respective plugin developer for assistance.
:::