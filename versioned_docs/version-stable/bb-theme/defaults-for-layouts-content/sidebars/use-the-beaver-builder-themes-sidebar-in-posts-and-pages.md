---
id: use-the-beaver-builder-themes-sidebar-in-posts-and-pages
title: Enable a sidebar for posts and pages
sidebar_label: Enable a sidebar for posts and pages
---

You can enable a sidebar in Beaver Builder Theme and configure what appears in it. Here are some facts about how the Beaver Builder Theme sidebar works.

  * You can enable the sidebar for the blog section of your website (archives and posts), or to individual pages on your site, or both.
  * By default, there is only a single sidebar, and it's called the **Primary sidebar**.  
  You can choose the widgets that appear in the sidebar, but whatever you choose, they will appear on any page for which the sidebar is enabled.
  * If you want to vary the content that appears on your sidebar pages, you need a plugin or custom code.
  * If you want more control over where the sidebar appears in the layout, use the Sidebar module or the WordPress Widgets module in a column in the Beaver Builder editor.

Here are some examples of when you'd want to use the theme sidebar without any customization:

  * You only want a sidebar to appear on your blog pages, with widgets that pertain to the blog portion of your site (such as recent posts, archive search, category filter, and a link to the static portion of your site).
  * Your site doesn't have a blog, and you want to use a custom menu on a subset of the pages on your site.  
  For example, you might have a Support subarea in your site with a menu that points only to support pages.
  * You want a short list of recent blog posts to appear on some or all of the static pages of your site.

## Enable the sidebar throughout your blog

If you enable the sidebar, it will appear on both archive pages (_archive_ is the WordPress term for  summary pages) and individual posts. If you want more fine-grained control, you'll need a plugin or custom code.

  1. Go to **Appearance > Customize > Content > Blog layout**.
  2. Set **Sidebar position** to **Sidebar left** or **Sidebar right**.
  3. Choose the **Sidebar size**. If you choose **Custom**, you can adjust the percent width of the sidebar column.
  4. Choose the size of device to display your sidebar in **Sidebar display**  –  **Desktop only** or **Always**.  
  If you choose **Always**, on smaller devices a left sidebar will appear before the page content, and a right sidebar will appear after the page content. See [how to use CSS to move the left sidebar below the page content on smaller devices](/bb-theme/defaults-for-layouts-content/sidebars/position-left-sidebar-below-content-in-mobile.md).
  5. Click **Save & Publish**.  
  This enables the **Primary sidebar** (the only sidebar available without customization).
  6. See how to [configure which widgets appear in the Primary sidebar](/bb-theme/defaults-for-layouts-content/widgets/configure-the-widgets-in-the-primary-sidebar.md).

## Use the sidebar on individual static pages

To use the theme's sidebar on static pages of your site, you must both enable the **Blog layout** in Customizer, whether or not your site has a blog, and select the Sidebar template on every Page for which you want the sidebar to appear. Here are the instructions to do that.

  1. Follow the instructions in the previous procedure to enable the sidebar in the **Blog layout** setting in Customizer.
  2. For each page on which you want the sidebar to appear, open the page in the WordPress editor (not Beaver Builder), and in the **Page Attributes** section, change the **Template** field to **Sidebar**.
  3. See how to [configure which widgets appear in the Primary sidebar](/bb-theme/defaults-for-layouts-content/widgets/configure-the-widgets-in-the-primary-sidebar.md).
