---
id: delete-a-saved-row-column-module
title: Delete a saved row, column, or module
sidebar_label: Delete a saved row, column, or module
---

You can delete saved rows, columns, or modules that you've inserted in your
layout, or you can delete the saved rows and modules that you've saved
centrally.

## Delete a saved row, column, or module in a Beaver Builder layout

Delete a saved row, column, or module from a page layout just as you would
delete any other row or module. Even if you delete a global row or module in
your layout, it will not affect the saved version in any way.

## Delete a saved row, column, or module centrally

If you delete the saved row, columnm, or module centrally, all instances of
that item that you already inserted in the layout will remain as they are. If
you delete a global saved row, column, or module, all instances of it in your
layout will lose their links to each other but continue to function as stand-
alone rows, columns, or modules. The major exception to this rule is if the
saved row, column, or module has been inserted as a shortcode.

:::warning Warning

Any Beaver Builder shortcode that points to a saved row, column,
or module that is deleted will no longer display it. In addition, the
PowerPack and UABB plugins reportedly let users choose a saved row, column, or
module in the module's settings (such as for the Tabs and Accordion modules),
which is most likely inserted into the module as a shortcode, These will fail
also if the saved item is deleted. If your site uses shortcodes or you have
the UABB or PowerPack plugin installed, check your site carefully after
deleting a saved row, column, or module.

:::

You can delete a saved row, column, or module either through the **Beaver
Builder** admin panel or in the Content panel in a page being edited in Beaver
Builder.

### Delete a saved row, column, or module through the Beaver Builder admin panel

1. In the WordPress admin panel, click **Beaver Builder**, then choose **Saved rows**, **Saved columns**, or **Saved modules.**  
If you don't see **Beaver Builder** in the WordPress admin panel, see [this article](/beaver-builder/troubleshooting/miscellaneous/cant-find-the-beaver-builder-menu-in-the-admin-panel.md) on enabling it.

2. Mouse over the saved row, column, or module you want to delete and click **Trash**.

### Delete a saved row, column, or module in the Beaver Builder editor's Content panel

1. Open a page for editing in Beaver Builder.
2. In the **Content** panel, click the **Saved** tab.
3. Mouse over the saved row or module you want to delete and click the **X** icon.
