---
id: themer-archive-layout-post-columns-gallery-list-masonry-modules
title: "Post Columns, Gallery, List, Masonry modules"
sidebar_label: "Post Columns, Gallery, List, Masonry modules"
---

There are four Post modules in the **Archive modules** category. This category appears in the **Add Content** menu when you're editing an Archive-type Themer layout in Beaver Themer:

* Post columns
* Post Gallery
* Post List
* Post Masonry

These four modules display posts in various visual layouts. For a more detailed description ofÂ each of these layouts in the Posts module for the Beaver Builder plugin, see the [Posts module overview](/beaver-builder/layouts/modules/posts/posts-posts-carousel-and-posts-slider-modules-examples).

## Under the hood

The four Post modules are "shortcut" modules. They're actually a Posts module with the **Layout** field set to **Columns**, **Gallery**, **List**, or **Masonry**. When you open this module for editing, you'll have all of the [regular Posts module settings](/beaver-builder/layouts/modules/posts/posts-posts-carousel-and-posts-slider-modules-examples), including the ability to customize the HTML markup for the post layout.

The difference in the Posts module when used in a Themer layout is the **Content** tab. In a Themer layout, the **Source** field should usually be set to **Main query**, which means the items that are displayed depend on the archive page on which they occur. For example, if you create a Themer layout for all your Post category archives, each different category archive page will display the posts for that category. You can preview any of the category archive pages and see the correct posts displayed.

For any of these Themer Post modules, you can accept [the **Layout** tab has a **Post layout** setting](/beaver-builder/layouts/modules/posts#layout-tab). You can accept the setting of `default` or you can choose `Custom` and edit the layout HTML to control what is displayed on the page. Custom post layouts are helpful when you want to display custom fields for the posts displayed in your archives. You can also use [field connection shortcodes](field-connections/syntax.md) and [conditional shortcodes](field-connections/conditionals.md) in these custom layouts.
