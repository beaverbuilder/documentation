---
id: items
title: Items tab
sidebar_label: Items tab
---

In the Items tab, you have the option to select the content source and manage tab items by adding, editing, or removing them.

## Content Source

The content source allows you to determine what content is displayed. You can choose between posts and custom content.

### Post

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
  The Filter section allows you to include or exclude a set of posts, pages or custom post types by title, and taxonomy.

  See the [Filter](/beaver-builder/layouts/modules/posts/posts.md#filter) section in the Post module article for more information regarding the filter options.

### Custom Content

The Custom Content source option allows you to add your own content using the WordPress classic editor or populate the tab item with content from a saved row, column, module, or template.

#### Edit items

When you first add an Tabs module to your layout, a blank item will be created for you to edit. To edit an item, click the **Edit Items** link.

![Edit tab items](/img/beaver-builder/modules--tabs--2.jpg)

* **Label**  
  Name your tab item.

* **Content Type**  
  The choices are: Saved Row, Saved Column, Saved Module, Saved Template, and Custom Content. The Saved content drop down menu automatically lists all previously saved rows, columns, modules, or templates when you select Saved content.

  The Custom Content option allows you to add your own content using the WordPress classic editor.

  :::caution
  Shortcodes used too frequently on the same page or post may [impact performance](/beaver-builder/advanced-builder-techniques/shortcodes/shortcode-performance.md).
  :::

* **Content**  
  Use the WordPress classic editor to add text to your tab item. You can also add images using the **Add Media** button.

#### Add items

To add more tab items, click the **Add Item** button.

## Display

The Display section is available when **Post** is selected as a **Content Source** and contains the following options:

* **Content Type**  
  *(Available when [Post](#post) is selected as a Content Source)*  

  * **Post Content** - Show the full content of each post.
  * **Post Excerpt** - Show the post excerpt.

* **More Link**  
  *(Available when **Post Excerpt** is selected as the **Content Type**)*   

  Show or hide the Read more link after the post content. If set to Show, you can also customize the default Read more text.

* **More Link Text**  
  *(Available when **Post Excerpt** is selected as the **Content Type**)*  
  
  Customize the default Read more... text.