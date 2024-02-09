---
id: post-types
title: Post Types Tab
sidebar_label: Post Types
description: The Post Types tab in the Beaver Builder settings lets you control which post types can use Beaver Builder.
---

The **Post Types** tab in the Beaver Builder settings lets you control which post types can use Beaver Builder.

## Access Post Types tab

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Post Types** tab.

![](/img/beaver-builder/settings--post-types--1.jpg)

## Disable or Enable Post Types

By default, the Beaver Builder editor is enabled for the **Pages** post type only, as shown in the screenshot above. If you check the **Posts** post type, you can use Beaver Builder to design the content area of single posts.

1. In the WordPress admin panel, navigate to **Settings > Beaver Builder**.
2. Click the **Post Types** tab.
3. Select or clear the checkbox to enable or disable a post type.
4. Click **Save Post Types**. 

:::caution
Not all custom post types are completely supported.

For example, you can enable the WooCommerce **Products** post type in the **Post Type** tab. However, due to the way WooCommerce is coded, you can only use Beaver Builder to edit the content within the **Description** tab.

To edit WooCommerce shop, product archive pages and individual products, [Beaver Themer](https://www.wpbeaverbuilder.com/beaver-themer/) is required.
:::

## WordPress Multisite

A post type in WordPress is registered per site, rather than network-wide. For this reason, the **Post Type** setting checkboxes are replaced with an input field when accessed as the **Network Admin** in a [WordPress Multisite](https://wordpress.org/support/article/create-a-network/)  installation.

This allows you to enable Beaver Builder for post types used on any site by entering each one as a comma-separated list in the input field.

:::info
You can override these settings on a [per-site](https://wordpress.org/support/article/network-admin-sites-screen/) basis.
:::
