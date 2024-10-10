---
id: template-site
title: Template Site
sidebar_label: Template Site
---

This article explains how you can create your own template site that users in the WordPress Multisite network can use on their sub-sites.

## Prerequisite

A Template Site is only possible with WordPress Multisite installations and Beaver Builder Unlimited license.

- [WordPress Multisite Installation](https://wordpress.org/support/article/create-a-network/)
- [Beaver Builder Unlimited License](https://www.wpbeaverbuilder.com/pricing/)

## Usage

A Template Site is a sub-site in your WordPress Multisite network that acts as a hub or library for your prebuilt templates. All [templates](index.md), [saved rows](../saved-content.md), [columns](../saved-content.md), and [modules](../saved-content.md) added to the Template Site become available to all sub-sites in the network.

Additionally, you can categorize [templates](saved-templates.md#categorize-saved-templates), [saved rows, columns, and modules](../saved-content.md) if you have more than one template grouping and access the categories from the Content Panel.

:::tip

The use of a Template Site is also an excellent option if you are planning to build your own [DIY Website Builder Platform](advanced/diy-website-builder-platform.md).

:::

:::caution

All sub-sites on the network use the same Template Site. You cannot create more than one Template Site or assign different Template Sites to different sub-sites.

:::

## Setup

1. Log into your WordPress Multisite network as the Network Admin _(super admin)_.

2. [Create a new sub-site](https://wordpress.org/support/article/network-admin-sites-screen) to act as your Template Site.

3. Navigate to **Network Admin > Settings > Beaver Builder > Templates**.

4. In the [Override Core Templates](settings/templates.md#wordpress-multisite) option field, enter the **ID** of your Template Site sub-site.
   The sub-site will now serve as the Template Site.

![Enter sub-site ID to create a Template Site](/img/beaver-builder/templates--template-site--1.jpg)

:::caution
All Beaver Builder [Prebuilt Templates](prebuilt-templates.md) will be removed from your network when a sub-site `ID` is entered into the Override Core Templates option.
:::

Your own prebuilt templates can now be added to the Template Site, either by building them on the Template Site itself or by [importing](settings/export-import.md) them from another website.

Once your prebuilt templates have been added/imported, all sub-sites within your network should now be able to access them.
