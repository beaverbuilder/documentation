---
id: undo-redo
title: Undo and redo
sidebar_label: Undo and redo
---

The Beaver Builder editor keeps track of editing changes in Beaver Builder in
a history, recorded at the following level of granularity:

**Objects tracked:**

  * Rows
  * Columns
  * Modules
  * Layout templates and prebuilt rows
  * Saved rows, columns, or modules

**Events tracked:**

  * Add
  * Edit
  * Delete
  * Move
  * Duplicate

:::note **Note**
The initial state of the history when you open the editor is **Draft
created**. When you publish or save the layout, the history is erased and the
next time you open the Beaver Builder editor, the status is once again **Draft
created**.
:::

## Examples of editing history

The following screenshot shows an example of the history created with some
simple actions in the editor. The sequence of actions is described in the
numbered annotations in the layout, matched up with what is recorded in the
history.

![](/img/the-basics-undo-repo-1.png)

The dot next to the topmost item shows that the most recent and all previous
actions are displayed. As you can see, if you make a number of edits to a row,
column, or module at one time, the history shows **Edited**, so if you undo
that item, you'll lose all of the changes you made within that item at that
point.

Prebuilt and saved items are also recorded when you add them. The following
screenshot shows the actions that are recorded when you add various types of
layout templates and saved items:

![](/img/the-basics-undo-repo-2.png)

Notice that when you add saved items, the "added" action is recorded as well
as the addition of the actual row. To remove a saved row, column, or module
that you've added, you'll need to backstep *two* items in the history.

## To undo and redo

You can undo and redo either by working directly in the History in the Tools
menu or by using keyboard shortcuts.

### Access the history to undo and redo

1. Click **History** in the **Tools** menu, as shown in this screenshot.   
You can also see an example of items in the history.

![](/img/the-basics-undo-repo-3.png)

2. Click any of the items listed in the history and the layout reverts to the layout at that point.  
You can keep clicking in the history at various points to undo or restore
layout.

:::note **Note**
You can't pick and choose which items to keep: whatever item you
select, that item and the ones lower on the list remain in the layout, while
the higher ones are removed.
:::

3. When you're done, click **Done** and then **Publish**, **Save as draft**, or **Discard**.

:::danger **Warning:**
When you publish the page, the history is reset, so you'll no
longer have access to the items that you chose not to keep. If the **Save as
Draft** or **Discard** your layout, the history remains and you can undo and
redo the next time you open the editor. For other implications of saving vs.
discarding vs. publishing a page, see [this article](/beaver-builder/getting-started/bb-editor-basics/save-publish-discard.md).

Don't forget you can use the [Revisions feature](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md/#revisions) to revert to a previously published version.
:::

### Use undo and redo keyboard shortcuts

You can use the undo and redo keyboard shortcuts to step backwards and
forwards through the items listed in **Tools > History**. The keystrokes
depend on your operating system, as follows, or within the Beaver Builder
editor you can find them at **Tools > Keyboard shortcuts**.

## Reduce or disable undo/redo functionality in the editor
The [History manager](/beaver-builder/getting-started/bb-editor-basics/undo-redo.md) can cause sluggish behavior in the editor, particularly when your site is in a shared hosting environment or the page you're editing has a large number of rows and modules. The default number of changes the History Manager remembers is 20. 

You can reduce or disable this number temporarily or more permanently in two ways:

### Disable the History Manager temporarily

* Add `&nohistory` to the end of your URL in the Beaver Builder editor.  
For example:

```markup
https://mysite.com/?fl_builder&nohistory
```
In the editor, if you click **History** in the [Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md), you'll see the message `Undo/redo history is currently disabled`.

### Reduce or disable the history by changing wp-config

This method requires access to the *wp-config.php* file in your WordPress installation root. It reduces or disables the History Manager for all Beaver Builder layouts site-wide.

1. Open the *wp-config.php* file for editing.
2. Add the following code before the line that says `/* That's all, stop editing! Happy publishing. */`:  
```php
if ( ! defined( 'FL_BUILDER_HISTORY_STATES' ) ) {
  define( 'FL_BUILDER_HISTORY_STATES', 20 );
}
```
3. Change the number of states from `20` to a smaller number, or change the number to `0` to disable the History Manager entirely.

To restore normal History Manager functionality, remove this code from the *wp-config.php* file.
