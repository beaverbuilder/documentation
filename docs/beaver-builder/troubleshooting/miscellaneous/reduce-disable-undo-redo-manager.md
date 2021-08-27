---
id: reduce-disable-undo-redo-manager
title: Reduce or disable the undo/redo capability
sidebar_label: Reduce or disable the undo/redo capability
---

The History Manager works behind the scenes to enable [the Undo/Redo feature in the Beaver Builder editor](/beaver-builder/getting-started/bb-editor-basics/undo-redo.md), accessed by going to [the Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md) and clicking **History**. By default, the History Manager is set to store a maximum of 20 states for the page or post you're editing.

In some environments, the History Manager can cause the editor to act sluggish and the Undo/Redo functionality can be very slow. In particular, two interacting factors can cause the default maximum of stored History Manager states to be less than ideal:
​
* Your site is on a shared hosting environment where the server is slow.
* The page has a large number of rows and modules.

In these cases, it can be helpful to reduce the number of states stored in the History Manager or disable it entirely, using either of the following methods.

## Add a parameter to the editor URL

This method erases the current history and blocks the History Manager while you are editing a particular Beaver Builder page. 

1. With the Beaver Builder editor open, add `&nohistory` to the end of your URL.  
For example:  
```markup
  https://mysite.com/?fl_builder&nohistory
  ```
2. Press <kbd>Return</kbd> on your keyboard.

With this parameter enabled, then if you click **History** in the [Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md), you'll see no items.
​
## Reduce the number of History Manager states in wp-config

This method erases the current history and reduces or eliminates the number of states remembered by the History Manager. by adding a few lines of code to [wp-config.php](https://wordpress.org/support/article/editing-wp-config-php/) in your WordPress installation. 

1. Open the *wp-config.php* file for editing.
2. Add the following code before the line that says `/* That's all, stop editing! Happy publishing. */`:  
```php
if ( ! defined( 'FL_BUILDER_HISTORY_STATES' ) ) {
			define( 'FL_BUILDER_HISTORY_STATES', 20 );
		}
```  
Change the number of states from `20` (the default number of states) to a smaller number, or change the number to `0` to disable the History Manager entirely.

:::tip **Tip**
Try reducing the number of stored History Manager states to 10 and check performance, then tweak up or down.
:::

If you disable the History Manager entirely with this command, then the next time you open the Beaver Builder editor, if you click **History** in the [Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md), you'll see the message `Undo/redo history is currently disabled`.

To restore normal History Manager functionality, remove this code from the *wp-config.php* file.
