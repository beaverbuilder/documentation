---
id: edit-a-saved-row-column-or-module
title: Edit a saved row, column, or module
sidebar_label: Edit a saved row, column, or module
---

You can edit either standard or global saved rows, columns, and modules, but
there are different consequences:

  * If you edit a *global* row, column, or module using any of the three methods below, the changes are applied everywhere on your website where that global row, column, or module is used.
  * If you edit a *standard* (nonglobal) saved row, column, or module, the changes are applied to any row, column, or module you insert into your layout from that point forward, but it doesn't affect any previously inserted ones.

## 1. Open the saved row, column, or module for editing

Use Method 1 or 2 to open a standard saved row, column, or module for editing
such that the changes are applied going forward. Use Method 1, 2, or 3 to edit
a global saved row, column, or module such that its changes apply to all
existing global instances and all future uses.

### Method 1: From the Content panel (standard or global saved rows, columns,
and modules)

You can edit any saved row, column, or module, standard or global, directly
from the Beaver Builder editor.

**To edit a standard or global saved row, column, or module from the Content
panel in the Beaver Builder editor:**

  1. In the **Content** panel click the **Saved** tab.  
You'll see a list of saved rows, columns, and modules.

  2. Mouse over the saved item you want to edit, then click the **Wrench** icon, as shown in the following screenshot.  
![](/img/row-columns-edit-saved-row-1.png)  
The saved item opens in a new browser tab.

  3. Make your edits, then click **Done** and choose whether to publish, save, or discard the edits. See Section 2 below about what happens with each choice.

:::note **Note**
If you edit a globally saved column, you need to publish, save, or
discard the changes before you can get back to your page and see the entire
set of saved rows, columns, and modules on the **Saved** tab.
:::

### Method 2: From the Beaver Builder admin panel (standard or global saved
rows, columns, and modules)

The **Beaver Builder** admin panel provides a very convenient way to manage
your saved rows, columns, and modules.

**To edit a standard or global saved row, column, or module from the Beaver
Builder admin panel:**

  1. In the WordPress admin panel, click **Beaver Builder**, then choose **Saved rows**, **Saved columns** ), or **Saved modules.**  
If you don't see **Beaver Builder** in the WordPress admin
panel, see [this article](/beaver-builder/troubleshooting/miscellaneous/cant-find-the-beaver-builder-menu-in-the-admin-panel.md) on enabling it.

  2. Mouse over the saved item you want to edit and click **Beaver Builder**.  
The saved item opens for editing in Beaver Builder in the same browser tab.

  3. Make your edits, then click **Done** and choose whether to publish, save, or discard the edits. See Section 2 below about what happens with each choice.

### Method 3: From your Beaver Builder layout (global only)

If you have an instance of a global row, column, or module in your layout, it
appears with an orange overlay. If you open it for editing in your layout,
make changes, and save the item, the changes are reflected in the saved item
and also wherever else that global module is used.

![](/img/row-columns-edit-saved-row-2.png)

## 2. Save the edits (editing methods 1 and 2)

After you've made your changes to the saved row, column, or module in the
editing tab, click **Done** in the upper right corner. The choice of whether
to publish or save changes can be a little confusing in the case of saved
objects, so here's a table to help.

Action  |  Effect for a standard row,<br/> column, or module  |  Effect for a global row,<br/> column, or module
---|---|---|
Publish changes  |  Updates the saved row, column, or module and closes the editing tab. No effect on existing layouts, but future instances of that saved row, column, or module show the updated version.  |  Updates the saved row, column, or module and updates all instances in your layouts.
Save changes and exit  |  Changes are saved and the editing tab closes. Saved changes appear when you open the saved item for editing again. The previous version appears if you add the saved item to your layout. When you want to finalize your update to the saved item, open it for editing and publish the changes.  |  Changes are saved and the editing tab closes. Saved changes appear when you open the saved item for editing, but the synched layouts continue to display the previous version. When you want to finalize your update to the saved item, open it for editing, and publish the changes.
Discard changes and exit  |  Editing updates are discarded and the editing tab closes.  |  Editing updates are discarded and the editing tab closes.
Cancel  |  Reverts to the tab with your current editing changes.  |  Reverts to the tab with your current editing changes.
