---
id: field-connections
title: WooCommerce Field Connections
sidebar_label: Field Connections
---

The article covers all available field connections for the [WooCommerce](https://wordpress.org/plugins/woocommerce/) plugin. The field connections listed in this article require the WooCommerce plugin to be installed and active on your WordPress site.


## Add to Cart Button

Outputs an add to cart button. A [**Variable Product**](https://docs.woocommerce.com/document/variable-product/) will display dropdown boxes to select variation options above the add to cart button.

```markup
[wpbb post:woocommerce_add_to_cart_button]
```

## Product Attributes

You can use the Term List field connection to output [product attributes](https://woocommerce.com/document/managing-product-taxonomies/#product-attributes) created via **WordPress Admin Dashboard > Products > Attributes**. This is done by prefixing the slug of the product attribute with `pa_` as shown in the example below.

```markup
[wpbb post:terms_list taxonomy='pa_attributeName' html_list='no' display='name' separator=', ' limit= linked='yes']
```

:::tip
The attribute slug can be found in the **WordPress Admin Dashboard > Products > Attributes** menu.
:::

## Product Images

Outputs a [product image and gallery](https://docs.woocommerce.com/document/adding-product-images-and-galleries/).

```markup
[wpbb post:woocommerce_product_images]
```

## Product Meta

Outputs a product's meta. Example: `SKU: beaver-builder-vneck-tee Category: Tshirts Tag: orange`

```markup
[wpbb post:woocommerce_product_meta]
```

## Product Ordering

Outputs the dropdown sort list that has choices for Default, Popularity, Price, etc.

:::info
Available on archive layouts only.
:::

```markup
[wpbb archive:woocommerce_catalog_ordering]
``` 

## Product Price

Outputs a product’s price. Examples: $12.00 or $9.99 - $14.99 (for variable products).

```markup
[wpbb post:woocommerce_product_price]
```

## Product Rating

Outputs a product's rating with a link to the reviews tab e.g. :star::star::star::star::star: (1 customer review)

```markup
[wpbb post:woocommerce_product_rating]
```

## Product Result Count

Outputs the number of products displayed in the layout, such as "Showing 1–10 of 18 results."

:::info
Available on archive layouts only.
:::

```markup
[wpbb archive:woocommerce_result_count]`  
```

## Product Sale

Outputs a sale label if a product has a sale price.

```markup
[wpbb post:woocommerce_sale_flash]
```

## Product Short Description

Outputs a product's short description.

```markup
[wpbb post:woocommerce_product_short_description]
```

## Product SKU

Outputs a product's stock-keeping unit (SKU).

```markup
[wpbb post:woocommerce_product_sku]
```

* Options  

  * **Prefix Text** - Accepts either `1` ("True") to allow a custom prefix in the next field or `0` ("False") to display only the SKU.
  * **Prefix** - The prefix text to display (Default text is "SKU: ")

* Example

  ```markup
  [wpbb post:woocommerce_product_sku sku_prefix='1' prefix_text='Item Number:']
  ```

## Product Tabs

Outputs the product tabs Description, Additional Information and Reviews.

```markup
[wpbb post:woocommerce_product_tabs]
```

## Product Title

Outputs a product's title.

```markup
[wpbb post:woocommerce_product_title]
```

## Product Upsells

Outputs [upsell products](https://docs.woocommerce.com/document/related-products-up-sells-and-cross-sells/#section-1).

```markup
[wpbb post:woocommerce_product_upsells]
```

## Product Weight

```markup
[wpbb post:woocommerce_product_weight]
```

* Options 

  * **Prefix Text** Accepts either `1` ("True") to allow a custom prefix in the next field or `0` ("False") to display only the Weight.
  * **Prefix** The prefix text to display (Default text is "Weight: ")

* Example

  ```markup
  [wpbb post:woocommerce_product_weight show_prefix='yes' prefix='Weight:']
  ```

## Related Products

Outputs [related products](https://docs.woocommerce.com/document/related-products-up-sells-and-cross-sells/#section-3).

```markup
[wpbb post:woocommerce_related_products]
```

## Store Breadcrumbs

Outputs WooCommerce breadcrumbs. Example: `Home / Mugs / Beaver Builder Mug`

:::info
Available on both archive & singular layouts.
:::

```markup
[wpbb post:woocommerce_breadcrumb]
```


