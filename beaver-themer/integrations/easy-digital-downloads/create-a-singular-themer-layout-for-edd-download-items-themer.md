---
id: create-a-singular-themer-layout-for-edd-download-items-themer
title: Create a Singular layout for EDD download items
sidebar_label: Singular layout for EDD items
---

Use a Singular Themer layout to display single download items that you've created in the Easy Digital Downloads (EDD) plugin.

  * For an introduction to how Themer layouts work with the EDD plugin, see the [overview article](/beaver-themer/integrations/easy-digital-downloads/beaver-themer-and-the-edd-plugin.md).

Here's how to create and design a Themer layout for a page displaying a single download item.

:::tip **Tip**
It helps to have some download items created first so that you have something to preview as you design the layout in Beaver Themer.
:::

## 1 Create a Singular Themer layout for EDD

  1. In the WordPress admin panel, click **Beaver Builder > Themer layouts**.
  2. Click the **Add New** button at the top of the page.
  3. Enter a title for your Themer layout.
  4. Verify that **Type** is **Themer layout** and for  Layout select **Singular**, then click **Add Themer layout**.  
  The **Edit Themer layout** screen opens.

## 2 Edit the Singular Themer layout

  1. For **Location**, click **Choose**, then from the **Downloads** section choose **Download**.  
  By default, the location will apply to all download item pages, but you can include or exclude specific pages by setting up inclusion or exclusion rules.
  2. Click **Publish**.

## 3 Design the page

  1. Click **Launch Beaver Builder**.
  2. In the **Preview as** field at the top of the page, select **Download**, then select a particular download item, assuming you've created one already.
  3. The Themer layout opens with the Singular template for standard posts. To use the template for EDD to start building your page, click **Templates** in the upper right corner and make sure **General** is selected. Select the **Download** template, then click **Replace existing layout**.
  4. Build the page in Beaver Builder in the normal fashion, by adding and configuring modules.  
  See the next section.

## EDD modules for the Singular Themer layout

When you edit a Singular Themer layout and have the EDD plugin installed, there's a special content group in the Content panel called **EDD Modules**. This group contains the following modules:

  * Add to Cart Button
  * Download Description
  * Download Price
  * Download Title

These modules can be used to display the custom fields that you may have filled in when you created the download item. Ifyou added the Download template to your Themer layout when you created it, you will see these modules in use.

:::info
The **Download Image** section in the EDD **Edit download** screen is the featured image with a different label, so it is treated as a featured image in Beaver Builder. If you use the **Download** template with the Singular layout, you'll notice that the download image is a Photo module with a field connection to **Post featured image**, as shown in this screenshot.

![](/img/create-a-singular-themer-layout-for-edd-download-items-themer-967680ea.png)
:::
