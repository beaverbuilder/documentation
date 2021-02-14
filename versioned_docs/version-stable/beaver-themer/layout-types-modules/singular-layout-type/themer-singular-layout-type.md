---
id: themer-singular-layout-type
title: Singular layout type
sidebar_label: Singular layout type
---

The Singular layout type in Beaver Themer (which [can be purchased here](https://www.wpbeaverbuilder.com/beaver-themer/)) is usually applied to single posts and custom post types.

The Singular layout includes the parts of the page shown in the following diagram, which includes standard information that is associated with single posts: the post title and post info, post content, post categories or tags, an author bio, post navigation, and post comments.

![](/img/themer-singular-layout-type-8934fe9e.png)

You can also include a sidebar in the Singular layout by using a standard Sidebar module.

:::tip **Tip**
If you'd like a short refresher on the WordPress content area versus other parts of the page, see [this primer](/beaver-themer/getting-started/primer-on-wordpress-content-and-theme-areas-themer.md).
:::

##  Special behavior of the Singular Themer layout

The Singular Themer layout behaves differently from the other Themer layout types because it is the only layout type that includes a module that is a placeholder for the post content, which you edit in the native WordPress editor.  

:::note **Note**
If you use Beaver Builder instead of the WordPress editor to create a layout for the post content, you cannot apply a Singular Themer layout to that post.
:::

Here are the special properties of the Singular Themer layout:

* It has special modules that display post title, author, date, category, comments, post navigation, and featured image, as shown in this screenshot.  
  ![](/img/themer-singular-layout-type-97aeeacd.png)  
  The template for the Singular Themer layout already includes most of these modules. See the next section.
* These modules use [field connections](/beaver-themer/field-connections/field-connection-basics-themer.md) to display the correct information for each post.
* The Post Content module pulls the post's content from the WordPress text editor (standard or classic).  
  That's why the Singular layout usually is usually used for posts rather than pages.
* There can only be one content area for a post or page. If you include more than one Post Content module in a Singular Themer layout, the content from the post will repeat.
* If you use WooCommerce, Easy Digital Downloads, or The Events Calendar, the **Themer layout** group in the Content panel has additional sections of modules specifically for those post types.

## Singular Themer layout template

When you create a Singular Themer layout and open it in Beaver Builder, the Singular layout template is automatically applied. It contains most of the post information and post content that you'd want for a single Post, and you can add or delete modules as you like.

![](/img/themer-singular-layout-type-6db209d1.jpg)

:::tip **Tip**
* It's easier to design a Singular Themer layout if you already have one or more Posts created so you can preview the posts as you work.
:::

The template has two rows, one for the post title area with the post featured image as the background, the other for the rest of the content on the page. For the post title row, there's a background photo set to the **Featured Image** field connection, as shown in the following screenshot. There's also a dark row overlay set to 50% opacity. Text color is set to white.

![](/img/themer-singular-layout-type-9df72af1.png)

:::tip **Tip**:
If you prefer to display your featured image as a photo rather than a background image, use the Featured Image module.
:::

This template has the following modules:

* The [Post Title](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-title-module.md) module is a "shortcut" module.  
  It's actually a Heading module with a field connection set to **Post title** in the **Heading** field.  
  ![](/img/themer-singular-layout-type-7b3fd62f.png)
* The [Post Info module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-info-module.md) has the following components, any of which you can show or hide.  
    * **Post date**
    * **Post modified date**  
    Displays the Last Updated date.
    * **Number of comments**
    * **Terms**  
    By default the Taxonomy is **Categories**, but you can also choose **Tags**.
* The [Post Content module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-content-module.md) contains the post's content.  
  **Note**: You can't use Beaver Builder to edit the content of individual posts when a Singular Themer layout will apply to that post, because it breaks the Themer layout. You'll use the native WordPress editor for post content (Standard or Classic editor), where you can add text, images, shortcodes, and some types of code.
* The [HTML module](/beaver-builder/layouts/modules/html.md) is a standard Beaver Builder module. In this template, it contains a field connection shortcode to display the Post terms list, which for standard posts are either categories or tags. The template contains the following string in the HTML module:  
  `Posted in [wpbb post:terms_list taxonomy="category" separator=", "]`  
  There is an additional **Layout** option for the Post Terms List shortcode, which can be used to display the post terms as an unordered or ordered list, rather than a list separated by commas. Note that hierarchical categories are displayed as a flat list. See the [Post Terms List entry in the Themer shortcode reference](/beaver-themer/field-connections/field-connection-shortcode-index-themer.md) for how to code this option.
* The [Author Bio module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-author-bio-module.md)  
  This module pulls the information from the **Biographical Info** and **Profile Picture** fields in the post author's profile.
* The [Post Navigation module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-navigation-module.md) displays links to the previous and next posts.
* The [Comments module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-comments-module.md) displays the standard information about Post comments.  
  You cannot configure which information is displayed. You can only configure what's typically on the **Advanced** tab of a module: margins, responsive display conditions, visibility, animation, and custom ID or class names.

:::tip **Tips**
  * If you want to revert to this default layout, click the **Templates** tab in the Content panel when you're editing the Singular Themer layout in Beaver Builder.
  * You can [add a Related Posts section with a Posts module](/beaver-themer/layout-types-modules/singular-layout-type/use-the-posts-module-to-create-related-posts.md).
:::
