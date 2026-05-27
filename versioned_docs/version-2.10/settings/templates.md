---
id: templates
title: Templates Settings Tab
sidebar_label: Templates
description: The Spacing section in the Advanced tab lets you change the default margin and padding for rows and columns. For modules, you can change the default margin values only.
---

The **Templates** tab in the Beaver Builder settings lets you manage which templates are available in the builder, choose from various enablement options, and, for Unlimited license holders, override core templates with your own.

## Access Templates tab

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Templates** tab.

![Access Templates tab](/img/beaver-builder/settings--templates--1.jpg)

## Enable Templates

Use this setting to enable or disable templates in the Beaver Builder user-interface.

### All Templates

Enable all Beaver Builder prebuilt and user-created templates.

### Enable Core Templates Only

Enable Beaver Builder prebuilt templates only. When enabled, the **Saved** tab is removed from the [Content Panel](user-interface/content-panel.md).

### Enable User Templates Only

Enable user-created templates only and disable Beaver Builder prebuilt templates. When selected, the **Templates** tab in the [Content Panel](user-interface/content-panel.md) lists the Blank template and any user-created templates.

### Disable All Templates

Disables all Beaver Builder prebuilt templates and user-created templates. When **Disable All Templates** is selected, the **Templates** and **Saved** tabs are removed from the [Content Panel](user-interface/content-panel.md).

![Disable all templates](/img/beaver-builder/settings--templates--2.jpg)

## Override Core Templates (Unlimited license)

Use this setting to override Beaver Builder prebuilt templates with your own templates. When selected, Beaver Builder prebuilt templates will be removed from the **Templates** tab in the [Content Panel](user-interface/content-panel.md) and replaced with user-created templates.

If you choose to **Override Core Templates**, you’ll also see options to show or remove saved row, column, and modules categories in the [Content Panel](user-interface/content-panel.md)

- Show Saved Row Categories
- Show Saved Column Categories
- Show Saved Module Categories

![Show Saved Module Category](/img/beaver-builder/settings--templates--3.jpg)

:::info
The **Override Core Templates** option requires an Unlimited license.
:::

## WordPress Multisite

In [WordPress Multisite](https://wordpress.org/support/article/create-a-network/) installations, the **Show Saved Row Categories**, **Show Saved Column Categories**, and **Show Saved Module Categories** settings are replaced with an ID option in the **Network Admin** settings.

In this section, you can enter the ID of a [site](https://wordpress.org/support/article/network-admin-sites-screen/) that will serve as a template site. Templates from this site will be available on all other sites on the network.
