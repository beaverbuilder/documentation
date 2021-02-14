---
id: uninstall-or-deactivate-the-beaver-builder-plugin
title: Uninstall or deactivate the Beaver Builder plugin
sidebar_label: Uninstall or deactivate the Beaver Builder plugin
---

You can safely uninstall or deactivate the Beaver Builder plugin without
losing any of your layouts. There are two ways to uninstall. Both methods copy
your content to the WordPress Editor and return your content to the Beaver
Builder layouts if you reinstall. The second method deletes your settings at
**Settings > Beaver Builder**.

## Deactivate or delete plugin but leave settings intact

  * Uninstall the Beaver Builder plugin by deactivating it and, additionally, deleting it from the Plugins page.

When you deactivate or delete the plugin this way, here is what happens.

  * A stripped-down HTML version of your layout is copied to the native WordPress editor.
  * Your content layouts may not look exactly the same as when the plugin was active, but you won't lose your content.
  * Your settings and the Beaver Builder cache at **Settings > Beaver Builder** are preserved.
  * If you reactivate the plugin, your content layouts are restored and available for editing in Beaver Builder with no additional effort.

## Uninstall Beaver Builder plugin and settings

  * On the WordPress admin panel, click **Settings > Beaver Builder** and click the **Uninstall** tab.

When you uninstall the plugin this way, here is what happens.

  * A stripped-down HTML version of your layout is copied to the native WordPress editor.
  * Your content layouts may not look exactly the same as when the plugin was active, but you won't lose your content.
  * Your settings under **Settings > Beaver Builder** are deleted, and the cache is cleared.
  * In technical terms, uninstalling with this method deletes the cache files and options from the `wp_options` table, but it doesn’t delete any layout data in the post meta table.
  * If you reactivate the plugin, your content layouts are restored and available for editing in Beaver Builder, but you must manually add information back to **Settings > Beaver Builder.**

##  Delete the post meta values (advanced)

Even if you delete the Beaver Builder plugin, there are some post meta values
that get left behind, just in case you'd ever want to restore your layouts. If
you would like to remove these meta values to completely remove Beaver Builder
– in other words, _if you're sure you'll never want to revert your content to
Beaver Builder layouts_ – you can use the function `delete_post_meta_by_key.`

The easiest way to do this is to the the [Post Meta Manager](https://wordpress.org/plugins/post-meta-manager/) plugin. After
installing, go to **Tools > Post Meta Manager** and enter the following keys one by one in the **Delete Meta Keys** section to completely wipe all builder data:

  * `_fl_builder_data`
  * ` _fl_builder_data_settings`
  * `_fl_builder_draft`
  * `_fl_builder_draft_settings`

![](/img/delete-post-meta-keys.png)
