---
id: troubleshooting-singular-layout-appears-in-post-preview-but-not-actual-post-themer
title: Singular layout appears in post preview but not actual post
sidebar_label: Singular layout appears in post preview but not actual post
---

If you have a Singular Themer layout type that appears when you preview a post but does not work when you view the actual post, there are a couple of possible reasons.

## 1. Page or post already using Beaver Builder

A Beaver Themer layout will not appear if Beaver Builder is already active on a Page or Post.

To correct this, navigate to the [WordPress edit post screen](https://wordpress.org/support/article/posts-screen/) for your page or post and switch to the WordPress editor. When you return to the page or post, the Beaver Themer layout should now be applied.

:::tip
On Beaver Themer Singular layouts, you can use Beaver Builder to either override the Beaver Themer layout or edit only the Post Content module.
:::

## 2. The post uses a theme template other than the default

Your theme usually gives you a few [page and post templates](/bb-theme/getting-started/built-in-theme-templates-for-single-pages-and-posts.md) to choose from. This template selection field appears on the WordPress editing page. For Singular-type Themer layouts, some templates other than Default may cause the Themer layout not to display.

If your Singular layout applies to a standard post, open the post in the WordPress editor and check the **Template** field in the **Post attributes** section in the right sidebar to make sure it is set to **Default**. If your Singular layout applies to a page, check the **Page attributes** section in the **Template** field.
