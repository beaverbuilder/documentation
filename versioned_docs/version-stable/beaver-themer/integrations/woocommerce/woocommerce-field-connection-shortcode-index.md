---
id: woocommerce-field-connection-shortcode-index
title: WooCommerce field connection shortcode reference
sidebar_label: WooCommerce field connection shortcode reference
---

:::tips **Tips**

If you can't find any of these shortcodes, try [the HTML module tip in this article](/beaver-themer/field-connections/find-the-full-list-of-field-connection-and-parameters-themer.md).

:::

## Shortcodes with no options

#### Archive category

  * **Product Result Count** `[wpbb archive:woocommerce_result_count]`  
  Displays the number of posts displayed in the layout, such as "Showing 1–10 of 18 results."
  * **Product Ordering** `[wpbb archive:woocommerce_catalog_ordering]`  
  Shows the dropdown sort list that has choices for Default, Popularity, Price, etc.

####  Post category

  * **Product Title** `[wpbb post:woocommerce_product_title]`
  * **Product Rating** `[wpbb post:woocommerce_product_rating]`
  * **Product Price** `[wpbb post:woocommerce_product_price]`
  * **Product Short Description** `[wpbb post:woocommerce_product_short_description]`
  * **Product Meta** `[wpbb post:woocommerce_product_meta]`
  * **Product Weight** `[wpbb post:woocommerce_product_weight]`
  * **Product Images** `[wpbb post:woocommerce_product_images]`
  * **Product Sale** `[wpbb post:woocommerce_sale_flash]`
  * **Product Tabs** `[wpbb post:woocommerce_product_tabs]`
  * **Product Upsells** `[wpbb post:woocommerce_product_upsells]`
  * **Related Products** `[wpbb post:woocommerce_related_products]`
  * **Add to Cart Button** `[wpbb post:woocommerce_add_to_cart_button]`
  * **Store Breadcrumbs** `[wpbb post:woocommerce_breadcrumb]`

#### Shortcodes with options

#### Post category

  * **Product SKU** `[wpbb post:woocommerce_product_sku]`  
    * Options  
      * Prefix Text - Accepts either `1` ("True") to allow a custom prefix in the next field or `0` ("False") to display only the SKU number.
      * Prefix - The prefix text to display (Default text is "SKU: ")
    * Example
    `[wpbb post:woocommerce_product_sku sku_prefix='1' prefix_text='Item Number:']`
