---
id: tabs
title: Tabs
sidebar_label: Tabs
description: The Tabs module displays horizontal or vertical tabbed content, ideal for inserting sets of content into a small space.
---
The Tabs module displays horizontal or vertical tabbed content, ideal for inserting sets of content into a small space.

![Tabs module](/img/beaver-builder/modules--tabs--1.jpg)

## Items tab

In the Items section, you can add, edit, and remove tab items.

### Content Source

The content source allows you to determine what content is displayed. You can choose between posts and custom content.

#### Post

The Post content source option allows you to automatically populate the Tabs module with pages, posts, or custom post types.

:::info
The post title becomes the item label of the Tabs item.
:::

:::caution
* Posts with long titles can cause the Tab module layout to be distorted.
* The Featured Image and Post info (author, date, categories, or tags) are not displayed.
:::

* **Post Type**  
  Select the post type you wish to populate the Tabs module with. You can choose pages, posts, or a custom post type, such as WooCommerce Products or a custom post type that you created yourself.

* **Posts Per Page**  
  Determines how many tabs items are created. Each item contains one page, post, or custom post type. The default is 5.

* **Order**  
  Choose between descending or ascending.

* **Order By**  
  The choices are: Author, Comment count, Date, Date last modified, ID, Menu order, Meta value (alphabetic or numeric), Random, Title, Selection order.

  See the [Order By](/beaver-builder/layouts/modules/posts/posts.md#order-by)  section in the Post module for more information.

* **Filter By**  
  The Filter section allows you to include or exclude a set of posts, pages or products by title, taxonomy, and author.

  See the [Filter](/beaver-builder/layouts/modules/posts/posts.md#filter) section in the Post module article for more information regarding the filter options.

#### Custom Content

The Custom Content source option allows you to add your own content using the WordPress classic editor or populate the tab item with content from a saved row, column, module, or template.

### Edit items

When you first add an Tabs module to your layout, a blank item will be created for you to edit. To edit an item, click the **Edit Items** link.

![Edit tab items](/img/beaver-builder/modules--tabs--2.jpg)

### Add items

To add more tab items, click the **Add Item** button.

#### Label

Name your tab item.

#### Content Type

The choices are: Saved Row, Saved Column, Saved Module, Saved Template, and Custom Content. The Saved content drop down menu automatically lists all previously saved rows, columns, modules, or templates when you select Saved content.

The Custom Content option allows you to add your own content using the WordPress classic editor.

:::caution
Shortcodes used too frequently on the same page or post may [impact performance](/beaver-builder/advanced-builder-techniques/shortcodes/shortcode-performance.md).
:::

#### Content

Use the WordPress classic editor to add text to your tab item. You can also add images using the **Add Media** button.

## Style tab

In the Style tab, you can change the color of the tab items, such as the text and tab background color.

### Layout

* **Layout**  
  You can choose a horizontal layout or you can choose a vertical layout.

  ![Horizontal or vertical tab layouts](/img/beaver-builder/modules--tabs--3.jpg)

  :::info
  As the screen width shrinks, the tabs turn into an accordion layout.
  :::

* **Background Color**  
  Set the background color for the tab.

* **Border Color**  
  Set the border color.

* **Border Width**  
  Set the border width in pixels.

* **Active Tab**  
  Set which tab should be active. The value should not exceed the total number of tab items.

* **Tab(s) Status on Mobile**  
  Control how the tabs display on mobile devices. You can choose between **Keep Active Tab Open**, and **Close All Tabs**.

### Label

* **Inactive Label Text Color**  
  Set the text color for the inactive tab(s).

* **Inactive Label Background Color**  
  Set the background color for the inactive tab(s).

* **Active Label Color**  
  Set the text color for the active tab.

* **Active Label Background Color**  
  Set the background color for the active tab.

* **Padding**  
  Set a specific padding value in pixels for the tab label. Click the **Link Value** icon to automatically make all four padding values the same.

* **Typography**  
  Set the font size, family, line-height and more for the tab label. See the [Typography](/beaver-builder/styles/typography/typography.md) article for more information.

### Content

* **Text Color**  
  Set the text color of the tab content.

* **Padding**  
  Set a specific padding value in pixels for the tab content. Click the **Link Value** icon to automatically make all four padding values the same.

* **Typography**  
  Set the font size, family, line-height and more for the tab content. See the [Typography](/beaver-builder/styles/typography/typography.md) article for more information.

## Advanced

There are all the usual [Advanced tab](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) settings for margins, visibility, animations, and advanced HTML settings.
