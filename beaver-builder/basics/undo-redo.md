---
id: undo-redo
title: Undo & Redo
sidebar_label: Undo & Redo
---

The **History** menu item in the [Tools menu](user-interface/tools-menu.md) allows you to undo or redo any changes you have made.

![Undo or redo using Beaver Builder History](/img/beaver-builder/editor-basics--undo-redo--1.jpg)

## Access History

1. Click **History** in the [Tools menu](user-interface/tools-menu.md). 

2. Click any of the items listed in the history and the layout reverts to the layout at that point.  
  You can keep clicking in the history at various points to undo or restore layout.  
  
  :::info
  You can't pick and choose which items to keep: whatever item you select, that item and the ones lower on the list remain in the layout, while the higher ones are removed.
  :::
  
3. When you're done, click **Done** and then **Publish**, **Save as draft**, or **Discard**.  

  :::warning
  When you publish the page, the history is reset, so you'll no
  longer have access to the items that you chose not to keep. If the **Save as
  Draft** or **Discard** your layout, the history remains and you can undo and
  redo the next time you open the editor. For other implications of saving vs.
  discarding vs. publishing a page, see [this article](user-interface/top-bar.md#done-button).
  
  Don't forget you can use the [Revisions feature](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md/#revisions) to revert to a previously published version.
  :::

## Keyboard shortcuts

You can use the undo and redo keyboard shortcuts to cycle backwards and
forwards through the items listed in **Tools > History**. The keystrokes
depend on your operating system, as follows:

### Undo

* <kbd>command ⌘</kbd> + <kbd>Z</kbd> (<i className="fab fa-apple"></i> Mac)
* <kbd>Ctrl</kbd> + <kbd>Z</kbd> (<i className="fab fa-windows"></i> Windows)

### Redo 

* <kbd>command ⌘</kbd> + <kbd>Shift ⇧</kbd> + <kbd>Z</kbd> (<i className="fab fa-apple"></i> Mac)
* <kbd>Ctrl</kbd> + <kbd>Shift ⇧</kbd> + <kbd>Z</kbd> (<i className="fab fa-windows"></i> Windows)

## Tracking

The Beaver Builder editor keeps track of editing changes, recorded at the following level of granularity:

### Objects tracked

* Rows
* Columns
* Modules
* Templates and prebuilt rows
* Saved rows, columns, or modules

### Events tracked

* Add
* Edit
* Delete
* Move
* Duplicate

### Initial state

The initial state of **History** when you [launch Beaver Builder](getting-started/launch-builder.md) is **Draft created**. When you publish or save the layout, the history is erased and the next time you open the Beaver Builder editor, the status is once again **Draft created** until you make further changes.

## Reduce or disable History

You can reduce or disable the Beaver Builder history to improve your website performance.

See the [Performance](advanced/performance.md) article for more information.
