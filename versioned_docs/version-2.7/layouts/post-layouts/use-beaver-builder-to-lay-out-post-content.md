---
id: use-beaver-builder-to-lay-out-post-content
title: Use Beaver Builder to lay out post content
sidebar_label: Use Beaver Builder to lay out post content
---

By default, Beaver Builder is enabled only for static pages. See the Related
Articles for how to enable Beaver Builder for posts and custom post types.

There are some things to keep in mind when you use Beaver Builder for posts.

## 1. Beaver Builder only applies to the content area of single posts

You can use Beaver Builder to create layouts in the content area of single
posts. Here's a diagram of the content area in a post.

![](/img/post-layouts-beaver-layout-posts-1.png)

Here's a post with a Beaver Builder two-column layout in the content area. In
this example, the first column includes a Photo and a Button module. The
second column has a Heading and a Text Editor module.

![](/img/post-layouts-beaver-layout-posts-2.png)

:::tip **Tips**
* You cannot use Beaver Builder to design layouts for generated index or archive pages. (That requires Beaver Themer.)

* If you enable Beaver Builder for posts, you don't have to use it for every post. The index and archive pages will include both formats and display the same (unformatted) information for each.

* The single post's header, footer, sidebar, post title, featured image, post info, and post navigation are outside of the content area and are configured within the Beaver Builder Theme in **Customize > Content**.

* If you use a Singular-type Beaver Themer layout to design the parts of the single post page that are outside the content area, you can no longer use Beaver Builder to edit the content area of the post.
:::

## 2. Archive pages don't preserve post content formatting

WordPress automatically strips formatting from post content on its post index
and archive pages. This means that when your post content is in a Beaver
Builder layout, the text from the modules is displayed unformatted and in the
same order as for mobile stacking: across columns and then down. The
screenshot below shows how the two-column content layout in the previous
screenshot appears in the content excerpt in an archive.

![](/img/post-layouts-beaver-layout-posts-3.png)

WordPress does not offer a way to get around this problem. The best
alternative is to use the **Excerpt** field on the post's editing page and add
HTML formatting, which will be preserved in the archive or index excerpt. This
lets you add tags such as headings and paragraphs, bold and italics, and
inline formatting with the style attribute. If you can't see the **Excerpt**
field on a post's WordPress editor page, [see this article](/beaver-builder/management-migration/change-wordpress-screen-options.md).

:::note **Notes**
* Some themes or plugins may affect the way the post excerpt is displayed in archives and indexes, but it does work with all Beaver Builder products.

* If you plan to display the full content of the post in a Posts module with List layout, there is no workaround for WordPress stripping the formatting out of the post content, whether the post's layout is in Beaver Builder or not.
:::

## 3. The featured image is not part of the content layout

The featured image is optional. If you set a featured image, it's usually
displayed in the excerpt in a generated WordPress archive, as shown in this
screenshot.

![](/img/post-layouts-beaver-layout-posts-4.png)

Whether and where the featured image is displayed depends on your theme's
settings. In the Beaver Builder Theme, you can configure it in **Customize >
Content > Post Layout**.

:::tip **Tip**
On a single post page, the featured image is not considered part of
the content area. This means that if the featured image is set to display
beside the post, it will push the content area to the right, as shown in the
following screenshot.
:::

![](/img/post-layouts-beaver-layout-posts-5.png)

:::tip **Tip**
If you use Beaver Builder Theme and lay out your posts with Beaver
Builder, you can place the featured image inside the content area with the
following setup.
:::

* In **Customize > Content > Post Layout**, set **Featured Image** to **Hidden**.
* Open the post for WordPress editing and upload the image to the **Set Featured Image** section in the lower right pane. This makes the featured image display on the archive page or in a Posts module.
* Open the post in Beaver Builder and put the same featured image into a Beaver Builder module wherever you want it. Although it's the same image as the featured image you set, it's not treated as a featured image and appears only in the content area of the post, not on the archive page or in a Posts module.

## 4. You can save and reuse post content areas in Beaver Builder

Similar to static pages, if you want to reuse a layout that you create in a
post, you can save the entire content area as a layout template, or you can
save individual rows or modules. You can reuse these layouts on both pages and
posts. See the articles on [how to save modules, columns, rows](/beaver-builder/layouts/templates/save-a-row-column-or-module-for-reuse.md), and [layout templates](/beaver-builder/layouts/templates/create-and-save-a-custom-layout-template.md).

:::tip **Tip**
If you want a row or module to have identical and synched content
wherever you use it – in other words, updating it in one spot updates it
everywhere else – save it as global by [selecting the global checkbox](/beaver-builder/layouts/templates/save-a-row-column-or-module-for-reuse.md) during the procedure to save the row, column, or module.
:::

## 5. You can change single posts to full width or no header/footer

If you use the Beaver Builder Theme, you can set single posts to full width or
no header/footer by changing the WordPress page template for that post. See
the article on using the [WordPress page template](/bb-theme/getting-started/built-in-theme-templates-for-single-pages-and-posts) for more information.
