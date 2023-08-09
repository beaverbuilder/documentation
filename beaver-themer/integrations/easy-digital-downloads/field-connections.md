---
id: field-connections
title: Easy Digital Downloads Field Connections
sidebar_label: Field Connections
description: The article covers all available field connections for Easy Digital Downloads plugin.
---

The article covers all available field connections for the [Easy Digital Downloads](https://wordpress.org/plugins/easy-digital-downloads/) plugin. The field connections listed in this article require the Easy Digital Downloads plugin to be installed and active on your WordPress site.

## Product Title

Outputs a product's title.

:::tip **Tip**
You can wrap the field connection with Heading tags e.g. `<h3>[wpbb post:edd_product_title]</h3>`
:::

```markup
[wpbb post:edd_product_title]
```

## Product Price

Outputs a product’s price. Examples: $12.00 or $9.99 - $14.99 (for [variable pricing](https://docs.easydigitaldownloads.com/article/1849-variable-pricing)).

```markup
[wpbb post:edd_product_price]
```

## Product Content

Outputs a product's content i.e. the content added to the [WordPress editor when creating or editing a product](https://docs.easydigitaldownloads.com/article/177-creating-products).

```markup
[wpbb post:edd_product_content]
```

## Product Short Description

Outputs a product's short description (content added to the Excerpt panel on the edit product page). See the [Product Description module](modules/product-description.md) for more information.

```markup
[wpbb post:edd_product_short_description]
```

## Add to Cart Button

Outputs a purchase button. If [**Variable Pricing**](https://docs.easydigitaldownloads.com/article/1849-variable-pricing) is enabled, the purchase options will appear above the button as radio buttons. If [**Multi-option purchase mode**](https://docs.easydigitaldownloads.com/article/1849-variable-pricing) is enabled, the radio buttons will be replaced with checkboxes allowing for multiple purchases.

```markup
[wpbb post:edd_add_to_cart_button]
```












