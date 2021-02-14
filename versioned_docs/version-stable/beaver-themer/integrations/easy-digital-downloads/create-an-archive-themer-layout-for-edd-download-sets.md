---
id: create-an-archive-themer-layout-for-edd-download-sets
title: Create an Archive layout for EDD downloads
sidebar_label: Archive layout for EDD downloads
---

Use an Archive-type Themer layout to design the following types of archive pages for the Easy Digital Downloads (EDD) plugin:

  * A page that displays entire list of downloadable items or a subset
  * A page that lists downloads for a specific category or tag

For an introduction to how Themer layouts work with the EDD plugin, see the [overview article](/beaver-themer/integrations/easy-digital-downloads/beaver-themer-and-the-edd-plugin.md).

Here's how to create and design a Themer layout for an EDD archive page.

:::tip **Tip**
It helps to have some download items created first so that you have something to preview as you design the layout in Beaver Themer.
:::

## 1 Create an Archive Themer layout

  1. In the WordPress admin panel, click **Beaver Builder > Themer layouts**.
  2. Click the **Add New** button at the top of the page.
  3. Enter a title for your Themer layout.
  4. Verify that **Type** is **Themer layout** and for **Layout** select **Archive**, then click **Add  Themer **  layout**.  
  The **Edit Themer layout** screen opens.

## 2 Edit the Archive Themer layout

  1. For **Location**, click **Choose**, then from the **Download Archive** section choose one of the following:
    * **Download archive**  
    Displays a list of download items in all categories.
    * **Download category archive**  
    Lists all the download items assigned to the categories you choose.
    * **Download tag archive**  
    Lists all the download items assigned to the tags you choose.
  2. Click **Publish**.

## 3 Design the page

  1. Click **Launch Beaver Builder**.
  2. If you have already created posts for downloads, download categories, or download tags, the **Preview as** field at the top of the layout should automatically match the location you selected in the previous procedure: **Download archive**, **Download category archive**, or **Download tag archive**, or you can manually change it.  
  See the screenshot below.
  3. A new Archive Themer layout for EDD Downloads opens with the **Posts** template layout, which is for standard posts, but there's a special template for EDD Downloads. To switch to the **Downloads** template for EDD, do the following and see the screenshot below:
    * Click **Templates** in the upper right corner and make sure **General** is selected.
    * Select the **Downloads** template.
    * Click **Replace existing layout**.

  ![](/img/create-an-archive-themer-layout-for-edd-download-sets-37f284cc.png)
  4. Customize your  layout in Beaver Builder in the normal fashion by adding and configuring modules.  
  See the next section for a description of EDD modules.

## EDD modules for the Archive Themer layout

When you edit an Archive Themer layout and have the EDD plugin installed, there's a special content group in the Content panel called **EDD Modules**. There's only one EDD-specific module, called **Downloads**.

The Downloads module is a "shortcut" module. It's actually a Posts module with settings to display download items, which you can then tweak to customize further.

That's why you can add a Downloads module from the EDD modules group in the Content panel, but when you mouse over the wrench icon in the layout, you'll see the label **Posts settings**.

:::note **Note**
The **Download Image** section in the EDD **Edit download** screen is the featured image with a different label, so it is treated as a featured image in Beaver Builder. If you show or hide the featured image in the Posts module, it will show or hide this download image.
:::
