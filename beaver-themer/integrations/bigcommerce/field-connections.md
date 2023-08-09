---
id: field-connections
title: BigCommerce Field Connections
sidebar_label: Field Connections
description: The article covers all available field connections for the BigCommerce plugin.
---

The article covers all available field connections for the [BigCommerce](https://wordpress.org/plugins/bigcommerce/) plugin. The field connections listed in this article require the BigCommerce plugin to be installed and active on your WordPress site and connected store.

## Product Title

Outputs a product's title.

:::tip **Tip**
You can wrap the field connection with Heading tags e.g. `<h3>[wpbb post:bigcommerce_product_title]</h3>`
:::

```markup
[wpbb post:bigcommerce_product_title]
```

## Product Brand

Outputs a product's brand. The brand is wrapped in `<span>` tags. 

For example: `<span class="bc-product__brand">Brand Name</span>`.

```markup
[wpbb post:bigcommerce_product_brand]
```

## Product Pricing

Outputs a product’s price. Example: $12.00 or $9.99.

```markup
[wpbb post:bigcommerce_product_price]
```

## Product Original Price

Outputs a product’s original price. Example: $12.00 or $9.99.

```markup
[wpbb post:bigcommerce_product_original_price]
```

## Product Sales Price

Outputs a product’s sales price. Example: $12.00 or $9.99.

```markup
[wpbb post:bigcommerce_product_sale_price]
```

## Product Description

Outputs a product's description. See the [Product Description module](modules/product-description.md) for more information.

```markup
[wpbb post:bigcommerce_product_description]
```

## Product Images

Outputs a product's images.

```markup
[wpbb post:bigcommerce_product_images]
```

## Product Rating

Outputs a product's rating with link to reviews. Example: :star: :star: :star: :star: :star: 1 review

## Product Rating - Star Count

Outputs a product's rating star count. Example: 5

## Product Rating - Percentage

Outputs a product's rating percentage. Example: 100

```markup
[wpbb post:bigcommerce_product_rating_percentage]
```

## Add to Cart Button

Outputs a purchase button with input field for choosing quantity.

```markup
[wpbb post:bigcommerce_cart_button]
```







