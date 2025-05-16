---
id: saved-content
title: Saved Rows, Columns, & Modules
sidebar_label: Saved Rows, Cols, & Modules
---

Beaver Builder offers the capability to save preconfigured content (rows, columns, and modules), allowing you to access them on other pages or posts on your website and make minor adjustments as needed. Additionally, you have the choice to save your row, column, or module as either standard or global.

## Usage

The ability to create saved rows, columns, and modules provides a number of benefits, such as:

* Improve your workflow when building websites for clients.
* Guarantees a uniform design across your website.
* Can be included within other modules, like Accordions or Tabs, using the Beaver Builder shortcode.
* Easily incorporate them into [theme PHP files, such as header.php, footer.php](shortcode/using-php-files.md), or theme hooks, using the `do_shortcode()` function.

## Create Saved Rows, Columns & Modules

Saving rows, columns, and modules is possible through two methods: either via the builder (front-end) or through the WordPress admin dashboard (back-end).

### Front-end

1. Access the Settings Window for the desired row, column, or module.
2. Click on the **Save As...** button.
3. Provide a name, specify whether it will be standard or global, opt for a category, upload a photo, and include any notes (useful for collaboration with team members).

![Create saved content](/img/beaver-builder/layouts--saved-content--1.jpg)

:::info

The category, photo, and notes fields are optional. If no category is chosen, your saved row, column, or module will default to the uncategorized category.

:::

### Back-end

1. Access your site's WordPress Admin Dashboard.
2. Navigate to Beaver Builder's [Layouts Menu](settings/layouts-menu.md).
3. Click the **Add New** button to create a new layout item.
4. Add a title and select the type of layout you want to create.  
5. [Launch Beaver Builder](getting-started/launch-builder.md) and create your saved layout.
6. **Publish** your changes when you're happy.

## Add Saved Content

1. Launch Beaver Builder and navigate to the Content Panel.
2. Click on the Saved tab and find the saved content item you want to use.
3. Simply drag and drop the saved content item onto your layout.

:::info

You can also find saved rows and columns by going to the Rows tab in the Content Panel and choosing either the **Saved Rows** or **Saved Columns** subgroups. To locate saved modules, navigate to the **Modules tab > Saved Modules** subgroup.

:::

## Edit Saved Content

You can edit saved rows, columns, and modules from within the Beaver Builder user interface (UI) and the WordPress admin dashboard.

### Front-end

1. [Launch Beaver Builder](getting-started/launch-builder.md).
2. Open the [Content panel](user-interface/content-panel.md) and click the **Saved tab**.
3. Mouse over the saved content item you want to edit, then click the **Wrench** <i className="fas fa-wrench"></i> icon, as shown in the following screenshot.

<!-- ![Edit saved modules](/img/beaver-builder/modules--saved-modules--3.jpg) -->

4. The saved module opens in a new browser tab.
5. Make your edits, then click [Done > Publish](user-interface/top-bar.md#done-button).

### Back-end

1. Access your site's WordPress Admin Dashboard.
2. Navigate to Beaver Builder's [Layouts Menu](settings/layouts-menu.md).
3. Click on the saved content item you want to edit.
4. Launch Beaver Builder and make your changes.
5. **Publish** your changes when you're happy.

## Rename Saved Content

You can rename saved rows, columns, and modules simarly to how you would rename a page or post.

1. Access your site's WordPress Admin Dashboard.
2. Navigate to Beaver Builder's [Layouts Menu](settings/layouts-menu.md).
3. Click on the saved content item you want to rename.
4. Change the title and optionally the slug and click **Update**.  

## Delete Saved Content

You can delete saved rows, columns, and modules in two ways: via the builder (front-end) or through the WordPress admin dashboard (back-end).

:::caution
If you delete a saved row, column, or module, all instances of that item that you already inserted in the layout will remain as they are. If you delete a global saved row, column, or module, all instances of it in your layout will lose their links to each other but continue to function as stand-alone items.

The major exception to this rule is if the saved row, column, or module has been inserted as a [shortcode](shortcode/index.md). Any Beaver Builder shortcode that points to a saved content item that is deleted will no longer display it.
:::

## Categorize Saved Content

You can categorize your saved rows, columns, and modules to help you organize your content and make it easier to find. This is especially useful if you have a large number of saved items. You can categorize your saved content on the front-end and back-end.

### Front-end

To category saved content on the front-end, you can only do so when you are initially saving the content.

1. Access the Settings Window for the desired row, column, or module.
2. Click on the **Save As...** button.
3. After providing a name, select a category from the dropdown menu.

### Back-end

1. Access your site's WordPress Admin Dashboard.
2. Navigate to Beaver Builder's [Layouts Menu](settings/layouts-menu.md).
3. Click on the saved content item you want to categorize.
4. Click on the **Categories** tab and select the category you want to assign to the saved content item.

## Standard vs Global

The main difference between standard and global saved rows, columns, and modules is in their scope.

* **Standard**  
  Standard saved rows, columns, and modules operate with a local scope. This means that each instance in your layout functions independently from the centrally saved row, columns, or module, as well as other instances. Essentially, when you insert a standard row, columns, or module into your layout, it behaves like any other independent row, column, or module.

* **Global**  
  On the other hand, global saved rows, columns, and modules have a global scope, affecting all instances dragged into any page of your website. Changes made to one instance will be reflected across all instances and the globally saved version.

### Convert Standard to Global

1. Launch Beaver Builder and drag the saved content item into your layout.
2. Open the saved content item Settings Window and click **Save As**, enter a name, and make it global.
3. Delete the original non-global saved content item from the **Saved tab** in the [Content panel](user-interface/content-panel.md) or **Beaver Builder > [Layouts Menu](settings/layouts-menu.md)** menu in the WordPress admin dashboard.

## Shortcode

You can render **Saved Modules** into any text or text editor field, this also includes other modules using the Beaver Builder shortcode.

See the [shortcode article](shortcode/index.md) for more information.

## Export & Import

You can export your saved rows and import them into another site – or give them to clients, or sell them.
  
See the [export and import article](settings/export-import.md) for more information.