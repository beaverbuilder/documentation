---
id: import-export-settings
title: Import / Export Tab
sidebar_label: Import / Export Settings
description: The Advanced tab in the Beaver Builder settings is where you can enable and disable settings.
---

The Import / Export tab in the Beaver Builder settings allow you to export, import, and reset Beaver Builder [global settings](user-interface/global-settings.md). By using this feature, you are able to easily configure Beaver Builder global settings for other websites you may be working on.

![Import & Export Settings](/img/beaver-builder/settings--import--1.jpg)


:::warning Warning

Exports completed with versions prior to **2.8.1** are not compatible with Beaver Builder version 2.8.1 or later, due to a change in format of export data.

:::

## Access Import / Export Settings

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Import / Export Settings** tab.

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

## Snapshots

Snapshots save your current settings on the server so you can restore a working configuration at any time. You can store up to five snapshots. Saved snapshots appear in a list showing each snapshot's name and creation date, newest first, with Restore and Delete buttons.

### Snapshot Name

An optional name for the snapshot, up to 100 characters. When left empty, the snapshot is named with the current date and time.

### Save Snapshot

Saves a snapshot of all current settings. A snapshot always includes the same data as an All Settings export: admin settings, global settings, global styles, and global colors. If five snapshots already exist, the oldest snapshot is removed to make room after you confirm.

### Restore

Applies the snapshot's settings to the site, overwriting the current values. Before the restore runs, you can choose to save a backup snapshot of the current settings.

### Delete

Permanently removes the snapshot after a confirmation.

:::info
  Beaver Builder offers to create a backup snapshot automatically before importing settings, restoring a snapshot, or resetting settings. Automatic backups are named Pre-Import Backup, Pre-Restore Backup, or Pre-Reset Backup with the date and time. If five snapshots already exist, the oldest is removed to make room.
:::






















## Reset Settings

You can revert any changes you have made to Beaver Builder's global settings using the Reset Settings button. For this action to be completed, **confirmation is required**.
