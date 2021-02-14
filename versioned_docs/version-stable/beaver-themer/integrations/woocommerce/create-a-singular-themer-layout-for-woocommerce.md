---
id: create-a-singular-themer-layout-for-woocommerce
title: Singular layout for WooCommerce
sidebar_label: Singular layout for WooCommerce
---

You can use the Singular Themer layout to design WooCommerce single product pages.

:::note **Note** 
The WooCommerce modules that you use in Beaver Themer to lay out single product pages have standard WooCommerce functionality. The WooCommerce modules provide a convenient way to style the page and show or hide various WooCommerce components.
:::

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jz8MXyPrF50" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>
</div>

Here's how to create a Themer layout for a WooCommerce single product page.

## 1 Create a Singular themer layout

  1. In the WordPress admin panel, click **Beaver Builder > Themer layouts**.
  2. Click the **Add New** button at the top of the page.
  3. Enter a title for your Themer layout.
  4. Verify that **Type** is **Themer layout** and for **Layout** select **Singular**, then click **Add Themer layout**.  
  The **Edit Themer layout** screen opens.

## 2 Edit the Singular themer layout

  1. For **Location**, click **Choose**, then select **Product** from the **Products** category. In the field next to it, select **All products**.
  2. Click **Publish**, then click **Launch Beaver Builder**.
  3. Click the Plus icon in the upper right corner, then click the **Templates** tab.
  4. Select the **Product**  layout template, then click **Replace existing layout**.

Now you have an initial layout for a WooCommerce single product page, previewing one of the WooCommerce sample products.

![](/img/create-a-singular-themer-layout-for-woocommerce-49d7f0a9.png)

:::tip **Tip**
It's easier to design the layout if you already have at least one product created. You can preview the product as you work and see the information that will appear. If you're not ready to create your own products, you can [upload WooCommerce sample product data](https://docs.woocommerce.com/document/importing-woocommerce-sample-data/).
:::

You can preview any of your products by clicking the down arrow in the **Preview as** box at the top of the editor, then expanding the **Product** category as shown in the following screenshot, then choosing one of your products.

![](/img/create-a-singular-themer-layout-for-woocommerce-227d25be.png)

In the template that you added, if the product that you're previewing doesn't have any data to display, the connection code is displayed instead, which you can recognize as words connected with underscores. In the screenshot above of the template, you can see several modules with their connection codes, such as `woocommerce_template_single_rating`.

## Special WooCommerce modules for the Singular Themer layout

To access the special WooCommerce modules:

  1. In the upper right corner, click the Plus icon to expand the Content panel.
  2. On the **Modules** tab, click **Group**, then select **Themer modules**.

You'll see the section containing all the WooCommerce modules, as shown in the following screenshot. Most of these modules are used in the Themer Product layout template that you chose in the previous procedure.

![](/img/create-a-singular-themer-layout-for-woocommerce-3648ac58.png)

:::tip **Tip**
You can insert a WooCommerce product image gallery into a layout by inserting the **Product Gallery Images** field connection into the **Photos** field of a standard Gallery module, as shown in the following screenshot.

![](/img/create-a-singular-themer-layout-for-woocommerce-b101bc56.png)
:::
