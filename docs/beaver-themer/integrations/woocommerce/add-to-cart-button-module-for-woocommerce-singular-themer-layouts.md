---
id: add-to-cart-button-module-for-woocommerce-singular-themer-layouts
title: "Singular layout: Add to Cart Button module"
sidebar_label: "Singular layout: Add to Cart Button module"
description: The Add to Cart Button module lets you add the Add to Cart button plus product variations to your Themer Singular Layout for WooCommerce.
---

The Add to Cart Button module is in the **WooCommerce modules** category, which appears only when you're editing a Singular-type layout in Beaver Themer and you've assigned a single product page as the location.

Besides the **Add to Cart** button, this module also displays the following controls when they apply (the same as default WooCommerce behavior).

* A **Quantity** selection list
* The **Add to Cart** button
* Variation labels and options if the product has variations set, as shown in this screenshot:  
![Product variations are included in the Add to Cart module](/img/themer--third-party--woocommerce--singular-add-to-cart-module--1.png)
* If you have the [WooCommerce Wishlists plugin](https://woocommerce.com/products/woocommerce-wishlists/) installed, you can add the **Add to Wishlists** button below the **Add to Cart** button, [described in more detail below](#woocommerce-wishlists-plugin).  

## Module settings

### Style tab

**Text** section:

* **Text color**
* **Text hover color**

**Background** section:

* **Background color**
* **Background hover color**

The colors are applied as follows to the three button states:

  * **Disabled** (the state that applies if there are variations and an option hasn't been selected yet)  
  A lighter version of the background and text color.
  * **Enabled** (ready to be clicked)  
  The default or custom background and text color.
  * **Hover** (cursor moves over the button)  
  A darker version of the background and text color.

### Advanced tab

There's are the standard features on the [**Advanced** tab](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md).

:::note **Note**
The **Advanced** settings apply to the entire module block. Using the screenshot above as an example if you set a **Slide left** animation, the variation (mug color), quantity, and **Add to Cart** button will all slide left as a block.
:::

## WooCommerce Wishlists plugin

The [WooCommerce Wishlists plugin](https://woocommerce.com/products/woocommerce-wishlists/) adds an **Add to wishlist** button to the WooCommerce **Add to Cart** hook. The Add to Cart Button module, which is available in Singular Themer layouts when WooCommerce is active, serves as a pass-through for this behavior, so the **Add to wishlist** button appears immediately below the **Add to Cart** button, as shown in the following screenshot:

![WooCommerce Wishlists plugin, Add to Wishlist button](/img/themer--third-party--woocommerce--singular-add-to-cart-module--2.png)  

:::note **Notes**

* Color settings in the Add to Cart Button module have no effect on the wishlist button. Wishlist button colors must be changed in the WooCommerce Wishlists plugin settings. 
* If you do add a custom background color in the WooCommerce Wishlists settings, you won't see that color in the Themer layout preview or even in the front-end Singular Themer layout, but you'll see it on the product page.
* The **Add to Wishlist** button does not appear with the **Add to Cart** button on Shop and other product archive pages, whether or not there is a Themer Archive layout applied.
:::
