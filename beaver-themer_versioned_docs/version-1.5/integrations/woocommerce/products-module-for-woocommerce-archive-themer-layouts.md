---
id: products-module-for-woocommerce-archive-themer-layouts
title: "Archive layout: Products module"
sidebar_label: "Archive layout: Products module"
---

In Archive-type Themer layouts, the Products module is in the **WooCommerce modules** category on the **Modules** tab in the Content menu, assuming you have the WooCommerce plugin installed.

![](/img/products-module-for-woocommerce-archive-themer-layouts-d4600d40.png)

The Products modules is a "shortcut" module. It's actually a Posts module with the default settings optimized to display products.

On the **Layout** tab, there's a special **WooCommerce** section that lets you choose whether to show or hide particular product features, as shown in the following screenshot and described below.

![](/img/products-module-for-woocommerce-archive-themer-layouts-f7d2a225.png)

By default, all of these items are set to **Show** by default.

  * **Product ordering**  
  Shows or hides the sort box at the top of the product display, as shown in the screenshot below. You may have to view the result on the actual published site page (such as the Shop page) to see the sort box if **Product ordering** set to **Show**.  
    **Tip:** To change the default sort order in this box, go to **Customize > WooCommerce > Product catalog > Default product sorting**.  
  ![](/img/products-module-for-woocommerce-archive-themer-layouts-1f812226.png)
  * **Product sale**  
  A small circle or rectangle containing 'Sale' appears in upper left corner of the image. Note the full price and sale price appear in the product price field whether or not this field is set to **Show**.
  * **Product rating**  
  Show or hide the star rating for the product. This only appears when at least one rating has been assigned to a product.
  * **Product price**  
  Show or hide the product price.
  * **Cart button**  
  Show or hide the Cart button.

The **Style** tab also has a special WooCommerce section with special style settings, as shown in this screenshot.

![](/img/products-module-for-woocommerce-archive-themer-layouts-b25db982.png)

On the **Content** tab, if you leave the query set to **Main query**, the products displayed will be the default products for the particular type of archive page you're viewing. For example, if you had product categories called pants and jackets, the archive page for the pants category would display all products in the category of pants, whereas the archive page for the jackets category would display all products in the category of jackets.

On the other hand, if you choose **Custom query** for the query type, you can change how products are ordered, or in the **Filters** section you can include or exclude particular products, product categories, or product tags. To specify which products, categories, or tags, start typing the name, and the autocomplete will let you select the one you want.

:::info
If you use a custom query in a Themer layout, you will get the same products displayed on every type of archive page. For example, suppose you exclude the product category of hoodies in your custom query filter. If your Themer layout applies to product category archive pages, you'll get a listing of every product except hoodies, even on the Hoodies category archive page. In other words, the products no longer depend on the type of archive page they appear in, they only depend on the custom query in the Themer layout. 

This means that in most cases, a custom query will only work well when the Themer layout applies to one particular page. For example, you might want to exclude a few specific hoodies from the Hoodies product archive page, so you could create a Themer archive layout that applies only to the Hoodies product category archive, then use a custom query with a filter that excludes the particular hoodies you don't want to display.
:::
