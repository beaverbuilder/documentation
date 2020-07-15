---
id: woocommerce
title: WooCommerce
sidebar_label: WooCommerce
---

Use the WooCommerce module to insert WooCommerce content into any page.

:::note **Note**
You must have the WooCommerce plugin installed and activated for
this module to appear.
:::

Here are some ways you can use the WooCommerce module to display products on
regular pages. Note that the WooCommerce module comes with the [Beaver Builder](https://www.wpbeaverbuilder.com) plugin – you don't need to have Beaver Themer installed to implement these ideas.

## Display a single product

Suppose you want to display a featured product each month that you select, as
shown in this screenshot:

![](/img/woocommerce-module-1.jpg)

The product is identified by its ID number in the
WooCommerce module, and in the screenshot there's a Heading module above it to
identify the product.

The display is what you'd see on an archive page, not on a true product page.
There's the title of the product, the price, and an **Add to Cart** button
displayed under the featured image. Clicking this item takes you to the
product page.

**To display a single product:**

  1. Add a WooCommerce module to the layout.
  2. In the **Layout** field choose **Single product**, then enter the product ID. Mouse over the question mark in the **Product ID** field for how to find the product ID.

## Display a single product page

You can display the same details that you'd see in a true product page, as
shown in the following screenshot.

![](/img/woocommerce-module-2.jpg)

The single product page display is identical to what you'd see on an actual
single product page, but you can embed it anywhere in a layout on another
page.

**To display a single product page:**

  * In the **Layout** field choose **Single product page**, then enter the product ID. Mouse over the question mark in the **Product ID** field for how to find the product ID.

## Display multiple products, all or a subset

You can display all of your products, or display a subset of products based on
various sources, described below. The module displays the products themselves,
and in most cases you'll want to add a Heading to describe the set of products
you're displaying. For example, in the screenshot below the WooCommerce module
displays the products with basic product information, and there's a Heading
module above the WooCommerce module that says "Our products."

![](/img/woocommerce-module-3.jpg)

To display multiple products (all or a subset), drag a WooCommerce module into
your page layout and in the **Layout** field choose **Multiple products**.

**To display the entire set of products:**

  * In the **Products source** field, choose **Products IDs**, then leave the **Product IDs** field blank.

**To display a custom list of products:**

  * In the **Products source** field, choose **Products IDs**, then in the **Product IDs** add a list of product IDs, separated by commas.

**To display the products in a particular category (or combined categories):**

In this case, you'd most likely add a Heading module to display the category
name.

  * In the **Products source** field, choose **Product category**, then add the category's slug. You can display products from more than one category by entering multiple category slugs separated by commas, but note that the products will still be grouped into a single display, not broken out by category.

**Tip:** If you want to display multiple categories of products, use a
WooCommerce module for each category, and use a Heading module to name each
category.

**Other displays of multiple products:**

You can display multiple products in any of the following ways:

  * Recent
  * Featured
  * Sale
  * Best selling
  * Top rated

:::note **Note**
These categories are determined by WooCommerce and cannot be
individualized. If you want to display a different set of items, follow the
procedure above for inserting a custom list of IDs for multiple products.
:::

  1. Drag a WooCommerce module into your page layout.
  2. In the **Layout** field, choose **Multiple Products**.
  3. In the **Products source** field, choose how the products will be selected.
    * Products IDs  
    To display all products, choose **Products IDs** for **Products Source**, then leave the **Product IDs** field blank.

    * To display a custom list of products, choose **Products IDs** for **Products Source**, then in the **Product IDs** field, add the list of Product IDs you want to display, separated by commas.

## Display price and the Add to Cart button for a single product

In the WooCommerce API, the product price and **Add to Cart** button are
displayed as a unit, and you can display this part of an individual product
without showing the rest of the product, as shown in the following screenshot,
in which there's a Heading module that says "Our price," then a WooCommerce
module with **Layout** designated **"Add to Cart" button**.

![](/img/woocommerce-module-4.png)

## Display subcategories in a parent category

You can display your entire set of top-level categories, or if you have a
hierarchy of categories, you can display all the subcategories of a particular
category that you identify by its ID number.

**To display the entire set of top-level categories:**

This is equivalent to what you see on the standard WooCommerce Shop page when
you have selected **Categories** as the Shop page display preference in your
WooCommerce settings.

  * In the **Layout** field, choose **Categories**, then leave the **Parent category ID** field as the default value `0`.

**To display all the subcategories of a category:**

This is equivalent to what you see on a standard WooCommerce category archive
page when you have selected Subcategories as the default category display as
the preference in your WooCommerce settings. When you click one of the
subcategories, it takes you to a list of products within that subcategory.

  * In the **Layout** field, choose **Categories**, then in the **Parent category ID** field add the ID for the parent category. Mouse over the question mark in the **Parent category ID** field for how to find the category ID.

:::note **Note**
The behavior when you click a category in the display is the same as
for standard WooCommerce pages. If you click a top-level category, you'll get
a display of the subcategories, if there are any. If you click a top-level
category with no subcategories, you'll see a display of products within the
category.

It's a good idea to not have more than one level of subcategory,
because WooCommerce doesn't handle the display of subsubcategories well
without a plugin or custom coding. However, by using the WooCommerce module
it's possible to display a subcategory's subategories by entering the ID of
the subcategory in the Parent category ID field.
:::

## Display the cart

You can use the WooCommerce module to display what you'd normally see on the
Cart page. In the **Layout** field, choose **Cart** and you'll see something
like the screenshot example below.

![](/img/woocommerce-module-5.png)

## Display the Checkout content area

You can use the WooCommerce module to display what you'd normally see on the
Checkout page. In the **Layout** field, choose **Checkout**.

## Display order tracking

You can display the normal WooCommerce order tracking, such as in this
screenshot, with fields for the customer to enter Order ID and billing email.

![](/img/woocommerce-module-6.png)

## Display the My Account area

You can display what the customer normally sees on the **My Account** page.

## More WooCommerce options

### WooCommerce shortcodes

Besides the options available in the WooCommerce module, you can use any
WooCommerce shortcodes in an HTML module. See the WooCommerce documentation
for a list of [shortcodes](https://docs.woothemes.com/document/woocommerce-shortcodes/).

### WooCommerce widgets

When you have WooCommerce installed, all of the WooCommerce widgets appear in
the **WordPress Widgets** group in the Content panel.
