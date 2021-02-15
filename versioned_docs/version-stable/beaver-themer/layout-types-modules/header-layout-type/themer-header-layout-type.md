---
id: themer-header-layout-type
title: Header layout type
sidebar_label: Header layout type
---

The Header-type Themer layout in Beaver Themer overrides the theme's top bar, header, and nav area, as shown in the following diagram of a typical page on the left and a typical post on the right.

![](/img/themer-header-layout-type-7fc6ca05.png)

:::tip **Tip**
For an introduction to customizing headers and creating a Header-type Themer layout, see [this blog post](https://www.wpbeaverbuilder.com/wordpress-website-header/).
:::

## Header layout template

When you create a new Header-type Themer layout, you'll see the header layout template shown in the following screenshot. It includes a top bar, the site title on the left, and a menu on the right.

![](/img/themer-header-layout-default-design.svg)

This initial layout consists of the following rows and modules:

  * Two rows, one for the top bar and one for the header area. The header area row has an initial blue background color.
  * The top bar has an HTML module containing placeholder text for the phone number and email address.
  * The icon group module contains the major social icons.
  * In the header row, there's a Heading module on the left, with a **Site Title** field connection in the **Heading** field, and a Menu module on the right.

:::tip **Tip**
If you ever want to revert to this default layout, in the Beaver Builder editor click the **Templates** tab in the Content Panel. Then click the **Header** template.
:::

## Header Settings

When you edit the Header Themer layout before opening Beaver Builder, there are three settings that control how the header behaves.

  * **Sticky**
  This is equivalent to the fixed header in the Beaver Builder Theme. The header stays in place at the original size while the page is scrolled.

  * **Shrink**
  If you choose a sticky header, you also get the option to shrink it as the page scrolls up. The amount of shrink is determined by the height required for the full-size header logo, text, and menu.  
  **Note**: Fixed and sticky headers only apply to large devices. No matter what the setting, the header scrolls up out of sight on medium and small devices.
  * **Overlay**  
  The row background for the header becomes transparent, and the content row moves up to the top of the window. The overlay appears at all screen sizes. Here's an example.  
  ![](/img/themer-header-layout-type-98c672a3.jpg)

In this screenshot, the background image is set on the first row in the content area (along with a dark gray background overlay color set to 50% opacity), and that row's bottom padding is set to 160px to push down the page title so it doesn't interfere with the header.

## How Sticky, Shrink, and Overlay settings work together

You can enable all three sticky, shrink, and overlay settings, and here's how that all works together.

  * As described above, the **Overlay** setting works on all device sizes, but the **Sticky** and **Shrink** settings only work on large devices.
  * If you enable **Overlay** plus **Sticky**, on large devices the transparent header converts to a sticky header as soon as you start to scroll. The sticky header background is whatever you set for the header row background.  
  ![](/img/themer-header-layout-type-b17904f2.jpg)
  * If you enable **Overlay** plus **Sticky** plus **Shrink**, the header shrinks as you continue to scroll down, just the same way it does when there's no overlay.  
  ![](/img/themer-header-layout-type-74192844.jpg)
  
:::note **Note**
  If you set the WordPress edit page's [Page Template](/bb-theme/getting-started/built-in-theme-templates-for-single-pages-and-posts.md) to a template that has no header for a particular post or page, it will not remove the header produced by a Themer layout. You must control where the Themer header occurs through the **Location** settings here.
:::
