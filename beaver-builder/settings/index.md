---
id: index
title: Settings Overview
sidebar_label: Settings
description: The Spacing section in the Advanced tab lets you change the default margin for rows, columns, modules and padding for rows and columns.
slug: '/settings/'
---

<div className="embed-responsive">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/rMzCSp-UDHI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

## Access Settings

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.

:::info
The Agency license of Beaver Builder allows white labeling to display any other name you choose and a custom logo image. Therefore, the label (Beaver Builder) on the **WordPress Admin Dashboard > Settings > Beaver Builder** may be different.
:::

## Network-wide settings (Agency only)

The Network-wide settings are available on the [WordPress Multisite installation](https://wordpress.org/support/article/create-a-network/) main site when accessed as the **Network Admin** and allow you to configure Beaver Builder for all [sub-sites](https://wordpress.org/support/article/network-admin-sites-screen/) on the network.

![Network-wide settings](/img/beaver-builder/settings--index--1.jpg)

:::tip
You can, for instance, enter your license key on the Network-wide settings and the license key will be used on all sub-sites, allowing the sub-site administrator to update Beaver Builder.
:::

## Override Network-wide settings (Agency only)

Users with administrator privileges can override Network-wide settings for their sub-sites

1. Login to your sub-site WordPress Admin Dashboard.

2. Navigate to **Settings > Beaver Builder**

3. Check the **Override Network Settings?** option and save changes.  
  If you want to override the network settings, you must check the **Override Network Settings** box for every Beaver Builder tab.

  ![Override network settings on a site-by-site basis](/img/beaver-builder/settings--index--2.jpg)

:::info
The [Welcome](welcome.md), [License](license.md), [Branding](branding.md), and [Help Button](help-button.md) tabs are not available for sub-site administrators.
:::

## In this section

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
