---
id: woocommerce
title: WooCommerce
sidebar_label: WooCommerce
---

Beaver Builder is compatible with the WooCommerce plugin, but with some limitations.

## Limitations

When utilizing Beaver Builder with WooCommerce, the following limitations apply:

- **WooCommerce Archive Pages:**  
  You can not use Beaver Builder to edit the layout of WooCommerce archive pages, such as the Shop/Store, Product Category, and Tag pages. This is due to Beaver Builder not being able to edit the layout for WordPress archive pages.

- **Individual Products:**  
  Beaver Builder is limited in editing the content of the entire product page. It can only be used to edit the content within the products' Description tab.

- **Additional/Review Tabs:**  
  Editing content for tabs like Additional Information and Review tabs, as well as any tabs added by third-party WooCommerce add-on plugins, is not supported by Beaver Builder.

:::info

You can overcome these limitations by combining Beaver Builder with our Beaver Themer add-on plugin. This combination allows you to create archive layouts for your shop/store, product category, and tag pages. Additionally, you can design a layout for individual product pages by creating a singular layout type and assigning it to the Product location.

:::

## Using Beaver Builder with WooCommerce

While Beaver Builder can't be used to edit entire WooCommerce individual product pages due to the structure of WooCommerce templates, you can utilize it to modify the content within the **Description** tab of a product.

1. Access your website's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder > Post Types**.
3. Mark the **Products** checkbox and click **Save Post Types**.
4. Launch Beaver Builder on a product page.
5. Scroll down to the **Description** tab and the Beaver Builder overlay interface should be available.
6. Make your desired changes and click **Done** to save your changes.

![Using Beaver Builder WooCommerce Description Tab](/img/beaver-builder/integrations--woocommerce--1.jpg)

## WooCommerce Module

Upon installing WooCommerce and launching Beaver Builder, the WooCommerce module becomes accessible. This module offers various options for displaying WooCommerce content in your layout. It's worth noting that this module utilizes WooCommerce's built-in shortcodes, providing a quicker alternative compared to using WooCommerce shortcodes in an HTML module.

See the [WooCommerce module](/layouts/modules/woocommerce.md) article for more information.

## WooCommerce Shortcodes

In addition to the choices within the WooCommerce module, you have the flexibility to use any WooCommerce shortcodes in an HTML module.

Visit the [WooCommerce documentation](https://woocommerce.com/document/woocommerce-shortcodes/) for a comprehensive list of available shortcodes.

## WooCommerce Widgets

Upon installing WooCommerce, all WooCommerce widgets are accessible in the WordPress Widgets subgroup within the Content Panel.

Visit the [WooCommerce documentation](https://woocommerce.com/document/woocommerce-widgets/) for a comprehensive list of available widgets.
