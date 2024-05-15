---
id: themer-singular-layout-type
title: Singular layout type
sidebar_label: Singular layout type
---

The Singular layout type in Beaver Themer (which [can be purchased here](https://www.wpbeaverbuilder.com/beaver-themer/)) is most often applied to single posts and custom post types, though it can also be applied to pages.

The Singular layout includes the parts of the page shown in the following diagram, which includes standard information that is associated with single posts: the post title and post info, post content, post categories or tags, an author bio, post navigation, and post comments.

![](/img/themer-singular-layout-type-8934fe9e.png)

You can add a sidebar to a Singular layout by adding a second column to the layout.

:::tip
If you'd like a short refresher on the WordPress content area versus other parts of the page, see [this primer](/beaver-themer/getting-started/primer-on-wordpress-content-and-theme-areas-themer.md).
:::

## Properties of the Singular Themer layout

Here are the special properties of the Singular Themer layout:

- It has special Themer modules that display post title, author, date, category, comments, post navigation, and featured image, as shown in this screenshot.
  ![](/img/themer-singular-layout-type-97aeeacd.png)
  The [template](#singular-themer-layout-template) for the Singular Themer layout already includes most of these modules.
- These modules use [field connections](field-connections/index.md) to display the correct information for each post.
- The Post Content module pulls the post's content from the post itself.
  The post content is pulled from either the WordPress text editor or a Beaver Builder layout. In the following screenshot of a Singular layout, the post content area contains a Beaver Builder layout pulled from a post.
  ![Singular Themer layout with Beaver Builder post content layout](/img/singular-layout-3.jpg)
- There can only be one content area for a post or page. If you include more than one Post Content module in a Singular Themer layout, the content from the post will repeat.
- The **Themer layout** group in the Content panel has additional sections of modules specifically for these plugins, if they're installed:
  - BigCommerce
  - WooCommerce
  - Easy Digital Downloads
  - The Events Calendar

## Extra step for Singular layouts with Beaver Builder layouts in the content area

By default, when a post or page has a Beaver Builder layout, any Singular Themer layout that applies is overridden to make sure content area layouts and Themer layouts don't look bad together. More specifically, a standard Beaver Builder in an individual page or post overrides the setting in the Themer **Location** field.

To make a Themer layout apply to a post or page with a Beaver Builder layout, you have to set each post page to accept the Singular Themer layout. Here's how.

**To set a page or post with Beaver Builder content to accept or override a Themer layout:**

1. Add a new page or post or open an existing page or post in the Beaver Builder editor.
   A choice box appears when the editor opens. If you don't see the choice box, open the [Tools menu](/beaver-builder/user-interface/tools-menu) and click **Themer override** to open the choice box.
2. Choose one of the following options:
   - **Override layout**
     Block the Singular Themer layout and use Beaver Builder in the content area only.
   - **Edit content only**
     Accept the Singular Themer layout and use Beaver Builder in the content area also.
3. Publish the post or page.

## Singular Themer layout template

When you create a Singular Themer layout and open it in Beaver Builder, the Singular layout template is automatically applied. It contains most of the post information and post content that you'd want for a single Post, and you can add or delete modules as you like.

![](/img/themer-singular-layout-type-6db209d1.jpg)

:::tip **Tip**

- It's easier to design a Singular Themer layout if you already have one or more Posts created so you can preview the posts as you work.
  :::

The template has two rows, one for the post title area with the post featured image as the background, the other for the rest of the content on the page. For the post title row, there's a background photo set to the **Featured Image** field connection, shown in the following screenshot. There's also a dark row overlay set to 50% opacity. Text color is set to white.

![](/img/themer-singular-layout-type-9df72af1.png)

:::tip **Tip**:
If you prefer to display your featured image as a photo rather than a background image, use the Featured Image module.
:::

This template has the following modules:

- The [Post Title](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-title-module.md) module is a "shortcut" module.
  It's actually a Heading module with a field connection set to **Post title** in the **Heading** field.
  ![](/img/themer-singular-layout-type-7b3fd62f.png)
- The [Post Info module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-info-module.md) has the following components, any of which you can show or hide.
  - **Post date**
  - **Post modified date**
    Displays the Last Updated date.
  - **Number of comments**
  - **Terms**
    By default the Taxonomy is **Categories**, but you can also choose **Tags**.
- The [Post Content module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-content-module.md) contains the post's content.
- The [HTML module](/beaver-builder/layouts/modules/html) is a standard Beaver Builder module. In this template, it contains a field connection shortcode to display the Post terms list, which for standard posts are either categories or tags. The template contains the following string in the HTML module:
  `Posted in [wpbb post:terms_list taxonomy="category" separator=", "]`
  There is an additional **Layout** option for the Post Terms List shortcode, which can be used to display the post terms as an unordered or ordered list, rather than a list separated by commas. Note that hierarchical categories are displayed as a flat list. See the [Post Terms List entry in the Themer shortcode reference](../../field-connections/index.md) for how to code this option.
- The [Author Bio module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-author-bio-module.md)
  This module pulls the information from the **Biographical Info** and **Profile Picture** fields in the post author's profile.
- The [Post Navigation module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-navigation-module.md) displays links to the previous and next posts.
- The [Comments module](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-comments-module.md) displays the standard information about Post comments.
  You cannot configure which information is displayed. You can only configure what's typically on the **Advanced** tab of a module: margins, responsive display conditions, visibility, animation, and custom ID or class names.

:::tip **Tips**

- If you want to revert to this default layout, click the **Templates** tab in the Content panel when you're editing the Singular Themer layout in Beaver Builder.
- You can [add a Related Posts section with a Posts module](/beaver-themer/layout-types-modules/singular-layout-type/use-the-posts-module-to-create-related-posts.md).
  :::
