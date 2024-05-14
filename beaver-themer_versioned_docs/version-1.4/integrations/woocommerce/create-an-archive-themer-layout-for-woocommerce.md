---
id: create-an-archive-themer-layout-for-woocommerce
title: Archive layout for WooCommerce
sidebar_label: Archive layout for WooCommerce
description: Create a Themer Archive layout specifically for WooCommerce Shop pages and product category pages.
---

You can use the Archive-type Themer layout to design the following WooCommerce archive pages:

  * A Shop page that displays products
  * A page that lists products for a specific category or tag

:::info
Themer layouts created in Beaver Themer can only display lists of products, not lists of categories or subcategories. In other words, if your WooCommerce product display settings are set to **Categories** or **Subcategories** (as shown in the following screenshot), a Themer layout that applies to those pages will override those settings and show products instead.

![](/img/create-an-archive-themer-layout-for-woocommerce-9d809e4b.png)
:::

Here's a video of how to make a WooCommerce Archive Page (start at 2 min 54 sec):

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jz8MXyPrF50" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>
</div>

Here are the instructions to create a Themer layout for a WooCommerce archive page.

## 1 Create an Archive Themer layout

  1. In the WordPress admin panel, click **Beaver Builder > Themer layouts**.
  2. Click the **Add New** button at the top of the page.
  3. Enter a title for your Themer layout.
  4. Verify that **Type** is **Themer layout** and for **Layout** select **Archive**, then click **Add Themer layout**.  
  The **Edit Themer layout** screen opens.

## 2 Edit the Archive Themer layout

  1. For **Location**, click **Choose**, then from the **Product archive** section choose one of the following:
    * **Product archive**  
    Applies to the Shop page (or an archive page you have designated instead of Shop).
    * **Product category archive**  
    Applies to any single Category archive page, which will list all the products assigned to that category.
    * **Product tag archive**  
    Applies to any single tag archive page, which will list all the products that are associated with that tag.
  2. Add more location or exclusion rules so the layout applies only to the archive pages you want this layout to apply to.
  3. Click **Publish**, then click **Launch Beaver Builder**.
  4. Click the Plus icon in the upper right corner, then click the **Templates** tab.
  5. Select the **Products** template, then click **Replace existing layout**.
  6. Now you have the initial layout for a WooCommerce product archive page.
  7. In the **Preview** box at the top of the screen, select the type of product archive you want to preview as you modify the page layout.  
  Publish or save your Themer layout when you're done.

:::tip **Tip**
It's easier to design the layout if you already have a couple products created or have imported the set of [WooCommerce sample data](https://docs.woocommerce.com/document/importing-woocommerce-sample-data/). You can preview the list of products in the archive as you work and see the information that will appear.
:::

## Special WooCommerce modules for the Archive Themer layout

When you edit an Archive-type Themer layout and have the WooCommerce plugin installed, there's a special content category in the **Themer modules** group of the Content panel called **WooCommerce modules**. The Archive-type Themer layout has two WooCommerce modules: Breadcrumb and Products.

![](/img/create-an-archive-themer-layout-for-woocommerce-5de76f05.png)

:::info
The WooCommerce modules that you use in Beaver Themer to lay out archive pages have standard WooCommerce functionality because Beaver Builder uses the WooCommerce API. The advantage of the WooCommerce modules is that they provide a convenient way to style the page and show or hide various WooCommerce components.
:::
