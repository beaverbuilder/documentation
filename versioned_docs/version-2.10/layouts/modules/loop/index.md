---
id: index
title: Loop Module
sidebar_label: Loop
tags:
    - 2.9
    - loop
    - layout
    - posts
    - beaver themer
---

The Loop module is a powerful container module that enables you to build custom layouts for queried content using modules, without needing to write any custom HTML or CSS. You can freely position these modules and assign field connections to dynamically pull in the relevant data, ensuring accurate content for each item within the loop.

:::info

The Loop module is a Beaver Themer module available in version 1.5 and requires Beaver Builder version 2.9 or later.

:::

:::caution

You can not nest loops within each other, meaning you can not add a Loop module within another Loop module.

:::

## Usage

You can use the Loop module to create custom layouts for various types of content—not only posts or custom post types. Here are just a few examples of how you can leverage the Loop module to showcase your content:

- **WooCommerce Categories or Tags** – Use the Taxonomies query source to dynamically display WooCommerce product categories or tags on individual product pages.
- **Custom Content Grid** – Utilize the Advanced Custom Field's Repeater query source to dynamically present custom content, such as team members on a dedicated team page.
- **Related Posts** – Use the Advanced Custom Field's Relationship query source to dynamically feature related posts on single post pages.

## Building a Loop

When you first add a Loop module to your page, you will be presented with a variety of preset layouts to choose from: List, Columns, Categories, and Product Categories. These layouts are designed to help you quickly create visually appealing content displays without having to manually configure each module within the loop.

![Loop module ready-made layouts](/img/beaver-builder/modules--loop--index--1.jpg)

Using a preset layout, you can customize the loop settings according to your preferences and refine the layout by rearranging existing modules, removing those you don’t need, or adding new modules of your choice.

Alternatively, you can build a loop from scratch by selecting the Blank layout. Once chosen, you’ll be presented with a blank canvas to create your custom loop layout. To get started, follow these steps:

1. Add the Loop module to your page or post.
2. Choose the Blank layout.
3. Customize the loop settings according to your preferences.
4. Add modules to the loop container and use field connections to display the dynamic content.
5. Refine the loop layout by arranging your modules in a way that suits your design needs.

:::tip

You can enhance your layout further by integrating multiple Box modules. You can add your Loop module into a Box module and use the Box modules to control the width of your loop container as well as give it some styling, such as a background color.

You can also use a Box module within the Loop module to create a container for your content modules. This setup allows you to take advantage of the Box module's advanced layout options—such as CSS Grid or Flexbox—providing precise control over the structure and presentation of your loop content.

:::

## Loop Module vs Posts Module

Both the Loop and Posts modules enable you to display content from various sources, such as posts and custom post types, but they serve different purposes and offer varying levels of customization.

|                            | **Loop Module**                                                                                                                                                                                          | **Posts Module**                                                                                                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Content Sources**        | - Posts, custom post types, taxonomies (categories, tags, WooCommerce product categories) <br /> - Advanced Custom Fields repeater or relationship field types                                           | - Posts and custom post types <br /> - Advanced Custom Fields relationship field type                                                                                                          |
| **Customization & Layout** | - Build layouts using individual modules for each piece of content <br /> - Extensive customization without needing HTML or CSS <br /> - Capable of creating complex layouts (e.g., with the Box module) | - Provides ready-made layouts with options to select displayed content <br /> - Additional customization is possible, but advanced adjustments require custom HTML, CSS, and field connections |

Choose the Loop module when you need maximum flexibility and complete control over your design. Opt for the Posts module if you prefer a streamlined, out-of-the-box solution with some additional customization options.

## In this Section

import DocCardList from '@theme/DocCardList';

<DocCardList />
