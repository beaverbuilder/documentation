---
id: troubleshooting-singular-layout-appears-in-post-preview-but-not-actual-post-themer
title: Singular layout appears in post preview but not actual post
sidebar_label: Singular layout appears in post preview but not actual post
---

If you have a Singular Themer layout type that appears when you preview a post but does not work when you view the actual post, there are a couple of possible reasons.

## 1 You can't use the Beaver Builder editor for both a Themer layout and the post content

In a [Singular-type Themer layout](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-type.md), the content area of the page is displayed in a Post Content module. The actual post content that this module will display must be edited in the WordPress editor (Standard or Classic), not in Beaver Builder. Conversely, if you want to use Beaver Builder for the content of single posts, you won't be able to apply a Singular Themer layout to that post.

To ensure that your Singular Themer layout works as planned, disable Beaver Builder for Posts by going to the WordPress admin panel and choosing **Settings > Beaver Builder > Post types**, then clear the **Posts** checkbox.

## 2 The post uses a theme template other than the default

Your theme usually gives you a few [page and post templates](/bb-theme/getting-started/built-in-theme-templates-for-single-pages-and-posts.md) to choose from. This template selection field appears on the WordPress editing page.

For Singular-type Themer layouts, some templates other than Default may cause the Themer layout not to display.

If your Singular layout applies to a standard post, open the post in the WordPress editor and check the **Template** field in the **Post attributes** section in the right sidebar to make sure it is set to **Default**. If your Singular layout applies to a page, check the **Page attributes** section in the **Template** field.
