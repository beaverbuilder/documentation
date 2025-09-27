---
id: globals
title: Global Templates
sidebar_label: Global
---

Globals are reusable content items with a synchronized scope, meaning every instance stays linked to the original. Any edits you make to the global item are automatically applied everywhere it’s used, ensuring consistent and identical content across your site. This makes globals ideal for elements like banners, or call-to-action sections that need to stay uniform throughout your layouts.  

## Create Global Items

Creating a Global item is possible through two methods: either via the builder (front-end) or through the WordPress admin dashboard (back-end).

### Front-end

1. Open the **Settings** window for the desired row, column, or module.
2. Click the **Save As...** button.
3. From the **Type** dropdown, select **Global**.
4. Optionally, assign a category, upload a photo to serve as a visual reference (similar to a featured image), and add notes that may be helpful for collaboration with team members.

![Create Global](/img/beaver-builder/layouts--reusable-content--globals--1.webp)

:::info

If no category is selected, your saved row, column, or module will be assigned to the Uncategorized category by default.

:::

### Back-end

1. Log in to your site’s WordPress Admin Dashboard.
2. Go to the Beaver Builder [Layouts Menu](settings/layouts-menu.md) and click **Templates**.
3. Click **Add New** to create a new reusable content item.
4. Enter a title and select **Templates** from the dropdown menu.
5. Click **Add Saved Template** to open the WordPress Edit Screen for the item.
6. Click **Launch Beaver Builder** to begin designing.

## Adding Template Items

1. Launch Beaver Builder on your page or post.
2. Open the **Content Panel**.
3. Click the **Saved** tab and locate the template you want to use.
4. Drag and drop the item onto your layout.

Template items appear with the standard blue overlay outline in the Beaver Builder UI.

:::info

You can also access your template items from the subgroups in the Content Panel for **Rows** and **Modules**.  

- If a template item was saved as a module, you can find it under **Modules > Saved Modules**.  
- If a template item was saved as a row, you can find it under **Rows > Saved Rows**.  

:::

## Edit Template Items

You can edit template items through the Beaver Builder user interface (UI) or the WordPress Admin Dashboard.

### Front-end

1. [Launch Beaver Builder](getting-started/launch-builder.md).
2. Open the [Content Panel](user-interface/content-panel.md) and click the **Saved** tab.
3. Hover over the template you want to edit, then click the **Wrench** <i className="fas fa-wrench"></i> icon.
4. The template will open in a new browser tab.
5. Make your changes, then click [**Done > Publish**](user-interface/top-bar.md#done-button).

### Back-end

1. Log in to your site’s WordPress Admin Dashboard.
2. Go to the Beaver Builder [Layouts Menu](settings/layouts-menu.md).
3. Click the template you want to edit.
4. Launch Beaver Builder, make your changes, and click **Publish** when finished.

## Rename Template Items

You can rename template items in the same way you would rename a page or post.  

1. Log in to your site’s WordPress Admin Dashboard.  
2. Go to the Beaver Builder [Layouts Menu](settings/layouts-menu.md).  
3. Click the template you want to rename.  
4. Update the title, and optionally the slug, then click **Update**.  

## Delete Saved Content

You can delete global items in two ways: from the builder (front end) or through the WordPress Admin Dashboard (back end).  

:::caution

If you delete a Global item, any instances already placed in layouts will revert to standard rows or modules. For example, if you saved a Button module as a Global, deleting that Global will convert it back into a standard Button module within the layout.

If you used the [Beaver Builder shortcode](shortcode/index.md) to render a Global item and then delete that Global, the shortcode will no longer display any content.

:::

### Front End  

1. [Launch Beaver Builder](getting-started/launch-builder.md).  
2. Open the [Content Panel](user-interface/content-panel.md) and click the **Saved** tab.  
3. Hover over the global item you want to delete, then click the **x** (<i className="fas fa-times"></i>) icon.  
4. A confirmation popup will appear with a warning message.  
5. Click **OK** to delete the global. All instances on your site will be converted to standard rows or modules.  

### Back End  

1. Log in to your site’s WordPress Admin Dashboard.  
2. Navigate to the Beaver Builder [Layouts Menu](settings/layouts-menu.md).  
3. Click **Templates** and locate the global item you want to delete.  
4. Hover over the item and click **Trash**.  
5. To permanently remove the item, go to the WordPress Trash by clicking the **Trash** link at the top of the page.  
6. Hover over the item again and click **Delete Permanently**.

## Categorize Saved Content

You can categorize your saved rows, columns, and modules to help you organize your content and make it easier to find. This is especially useful if you have a large number of saved items. You can categorize your saved content on the front-end and back-end.

### Front-end

To category Template items on the front-end, you can only do so when you are initially saving the content.

1. Access the Settings Window for the desired row, column, or module.
2. Click on the **Save As...** button.
3. After providing a name, select a category from the dropdown menu.

### Back-end

1. Access your site's WordPress Admin Dashboard.
2. Navigate to Beaver Builder's [Layouts Menu](settings/layouts-menu.md).
3. Click on the saved content item you want to categorize.
4. Click on the **Categories** tab and select the category you want to assign to the saved content item.

## Shortcode  

You can render Template items in any text or text editor field, including within other modules, by using the Beaver Builder shortcode.  

See the [Shortcode article](shortcode/index.md) for more details.  

## Export & Import  

You can export saved rows and import them into another site, share them with clients, or even sell them.  

See the [Export and Import article](settings/export-import.md) for more details.
