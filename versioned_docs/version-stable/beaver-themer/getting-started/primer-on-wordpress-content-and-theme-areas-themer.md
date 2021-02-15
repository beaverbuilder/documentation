---
id: primer-on-wordpress-content-and-theme-areas-themer
title: Primer on WordPress content and theme areas
sidebar_label: Primer on WordPress content and theme areas
---

To understand how Beaver Themer works, it helps to understand some aspects of the WordPress architecture.

In WordPress, a post or page has a single content area, and you fill in that content using the WordPress text editor. In the following diagrams, boxes shaded in gray are controlled by the active theme, whereas the content area is the place where contributors enter content on individual posts or pages.

![](/img/primer-on-wordpress-content-and-theme-areas-themer-1b03e8f2.png)

Traditionally, if you wanted to add a more complex layout to the content area, you'd add a widget area as a sidebar or a footer. The active theme also controls the option to add a particular sidebar or footer widget area in a particular location on the page.

![](/img/primer-on-wordpress-content-and-theme-areas-themer-c390a462.png)

In addition, the theme controls display and placement of information about Posts: Post title, Post info such as author and date, comments, categories, and post navigation.

![](/img/primer-on-wordpress-content-and-theme-areas-themer-0b6e8cb1.png)


The Beaver Builder plugin gives you the ability to lay out and add content to many small pieces of content inside the WordPress content area. Suddenly layouts became much more interesting than adding widgets in a sidebar.

**Beaver Themer** is  an add-on to the Beaver Builder plugin. It lets you use the Beaver Builder editor to create "Themer layouts" in areas that are traditionally handled by themes. While an active theme is still required, Beaver Themer layouts override the active theme's control when necessary.

:::important **Important**

  * The header, footer, location of the sidebar, and Post information and metadata are controlled by the active WordPress theme. Beaver Themer overrides this control as appropriate.
  * WordPress allows only one content area on a Post or Page.
  * If you use the [Singular Themer layout](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-type.md) to set up a Post page, you'll have to use the WordPress editor for the content area. If you want to use Beaver Builder to design layout inside the content area, use regular Beaver Builder, not a Singular Themer layout. 
:::
