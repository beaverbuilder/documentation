---
id: import-export-settings
title: Import / Export Tab
sidebar_label: Import / Export Settings
description: The Advanced tab in the Beaver Builder settings is where you can enable and disable settings.
---

The Import / Export tab in the Beaver Builder settings allow you to export, import, and reset Beaver Builder [global settings](user-interface/global-settings.md). By using this feature, you are able to easily configure Beaver Builder global settings for other websites you may be working on.

:::warning Warning

Exports completed with versions prior to **2.8.1** are not compatible with Beaver Builder version 2.8.1 or later, due to a change in format of export data.

:::

## Access Import / Export Settings

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Import / Export Settings** tab.

![Beaver Builder Advanced settings](/img/beaver-builder/settings--import-export--1.jpg)

## Export Settings

When you click the **Export Settings** button, a file called _bb-global.txt_ will be downloaded containing all Beaver Builder global settings. The _bb-global.txt_ file can then be used to [import](#import-settings) those settings to another site using Beaver Builder.

## Import Settings

The Import Settings button allows you to import the _bb-global.txt_ file.

To import global settings:

1. Clicking the **Import Settings** button.
2. In the Import Settings window, upload the _bb-global.txt_.
3. Click **Import Settings File** button and confirm.

:::tip
Additionally, you can upload the _bb-global.txt_ file directly to the WordPress media library by clicking on **Media > Add New** in the **WordPress admin dashboard**. It can be used to store the file for safekeeping and import it later.
:::

## Reset Settings

You can revert any changes you have made to Beaver Builder's global settings using the Reset Settings button. For this action to be completed, **confirmation is required**.
