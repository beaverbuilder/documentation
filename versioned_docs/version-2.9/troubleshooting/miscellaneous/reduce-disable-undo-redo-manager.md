---
id: reduce-disable-undo-redo-manager
title: Reduce or disable the undo/redo capability
sidebar_label: Reduce or disable the undo/redo capability
description: When performance requires it, there are several ways to disable the History Manager or reduce the number of states it remembers.
---

The History Manager works behind the scenes to enable [the Undo/Redo feature in the Beaver Builder editor](basics/undo-redo.md). By default, the History Manager is set to store a maximum of 20 undo states for the page or post you're editing.

In some environments, the History Manager can cause the editor to act sluggish and the Undo/Redo functionality can be very slow. In particular, two interacting factors can cause the default maximum of stored History Manager states to be less than ideal:
​

- Your site is in a shared hosting environment.
- The page you're editing has a large number of rows and modules.

In these cases, it can be helpful to reduce the number of states stored in the History Manager or disable it entirely, using one of the following methods.

:::tip
You can change the number of states the History Manager remembers by enabling the **Limit the amount of undo/redo history in Builder UI** setting and entering a new number in the **History Limit** field.

See the [Advanced Settings](settings/advanced.md#limit-the-amount-of-undoredo-history-in-builder-ui) article for more information.
:::

## Disable the History Manager while editing a single page

You can add a parameter to the URL of the page you're editing to erase the current history and block the History Manager from saving undo states until the parameter is removed.

1. With the Beaver Builder editor open, add `&nohistory` to the end of your URL.
   For example:

```markup
  https://mysite.com/?fl_builder&nohistory
```

2. Press <kbd>Return</kbd> on your keyboard.

With this parameter enabled, if you click **History** in the [Tools menu](user-interface/tools-menu.md), you'll see no items.
​

## Reduce or disable the History Manager site-wide

You can reduce the number of states the History manager remembers or disable it site-wide more permanently by adding a few lines of code to [wp-config.php](https://wordpress.org/support/article/editing-wp-config-php/) in your WordPress installation.

1. Open the _wp-config.php_ file for editing.
2. Add the following code before the line that says `/* That's all, stop editing! Happy publishing. */`:

```php
define("FL_BUILDER_HISTORY_STATES", 20);
```

Change the number of states from `20` (the default number of states) to a smaller number, or change the number to `0` to disable the History Manager entirely.

:::tip
Try reducing the number of stored History Manager states to 10 and check performance, then tweak up or down.
:::

If you disable the History Manager entirely with this command, then the next time you open the Beaver Builder editor, if you click **History** in the [Tools menu](user-interface/tools-menu.md), you'll see the message `Undo/redo history is currently disabled`.

To restore normal History Manager functionality, remove this code from the _wp-config.php_ file.
