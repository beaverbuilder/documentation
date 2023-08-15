---
id: items
title: Items tab
sidebar_label: Items tab
---

In the Items tab, you have the option to select the content source and manage accordion content items by adding, editing, or removing them.

## Content Source

The content source allows you to determine what content is displayed. You can choose between posts and custom content.

### Post

The Post content source option allows you to automatically populate the Accordion module with pages, posts, or custom post types.

:::caution

* The post title becomes the item label of the Accordion item.
* The featured image does not appear in the Accordion item.
* Post info (author, date, categories, or tags) is not displayed.

:::

* **Post Type**  
  Select the post type(s) you wish to populate the Post module with. You can choose pages, posts, or a custom post type, such as WooCommerce Products or a custom post type that you created yourself.  
  
  You can also select more than one post type with the Post Type option. For example, you can display both posts and pages, or both posts and WooCommerce products.

* **Posts Per Page**  
  Determines how many accordion items are created. Each item contains one page, post, or custom post type. The default is 5.

* **Order**  
  Choose between descending or ascending.

* **Order By**  
  The choices are: Author, Comment count, Date, Date last modified, ID, Menu order, Meta value (alphabetic or numeric), Random, Title, Selection order.

  See the [Order By](/beaver-builder/layouts/modules/posts/posts.md#order-by)  section in the Post module for more information.

* **Filter By**  
  The Filter section allows you to include or exclude a set of posts, pages or custom post types by title, and taxonomy.

  See the [Filter](/beaver-builder/layouts/modules/posts/posts.md#filter) section in the Post module article for more information regarding the filter options.

### Custom Content

The Custom Content source option allows you to add your own content using the WordPress classic editor or populate the accordion item with content from a saved row, column, module, or template.

#### Edit Items

When you first add an Accordion module to your layout, a blank item will be created for you to edit. To edit an item, click the **Edit Items** link.

![Edit accordion items](/img/beaver-builder/modules--accordion--2.jpg)

* **Label**  
  Enter a name for your accordion item. This appears in the Accordion module settings panel to identify the item and on the frontend.

* **Content Type**  
  The choices are: Saved Row, Saved Column, Saved Module, Saved Template, and Custom Content. The Saved content drop down menu automatically lists all previously saved rows, columns, modules, or templates when you select Saved content.
  
  The Custom Content option allows you to add your own content using the WordPress classic editor.  
  
  :::caution

  Shortcodes used too frequently on the same page or post may [impact performance](/beaver-builder/advanced-builder-techniques/shortcodes/shortcode-performance.md).

  :::

* **Content**  
  Use the WordPress classic editor to add text to your accordion item. You can also add images using the **Add Media** button.

#### Add Items

To add more accordion items, click the **Add Item** button.

#### Item Actions

Each accordion item has a set of icons which perform the following actions:

<ul className="fa-ul">
  <li><span className="fa-li"><i className="fa-solid fa-up-down-left-right"></i></span>Move (Drag & drop into position).</li>
  <li><span className="fa-li"><i className="fa-light fa-copy"></i></span>Duplicate the item.</li>
  <li><span className="fa-li"><i className="fa-solid fa-xmark"></i></span>Delete the item.</li>
</ul>

![Accordion item actions](/img/beaver-builder/modules--accordion--3.jpg)

## Display

The Display section contains the following options:

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

* **Collapse inactive**  
  By default set to Yes, which allows only one item to be expanded at a time. Change to No to allow more than one item to be expanded,

* **Expand first item**  
  By default set to No. If set to Yes, the first item will be expanded on the first view, before the user clicks to expand anything.  
  
  :::info

  After you save a label and text in the first item of the Accordion module, it remains open in the editing screen even when the Expand first item field is set to No. This is so that you can see the style settings while editing. The published page correctly follows the Expand first item setting.
  
  :::