---
id: reduce-disable-undo-redo-manager
title: Reduce or disable the undo/redo capability
sidebar_label: Reduce or disable the undo/redo capability
---

The History Manager works behind the scenes to enable [the Undo/Redo feature in the Beaver Builder editor](/beaver-builder/getting-started/bb-editor-basics/undo-redo.md), accessed by going to the Tools menu and clicking **History**. By default, the History Manager is set to store a maximum of 20 states for the page or post you're editing.

In some environments the History Manager can cause the editor to act sluggish and using the Undo/Redo functionality to be very slow. In particular, there are two interacting factors that can cause the default maximum of stored History Manager states to be less than ideal:
​
* Your site is on a shared hosting environment where the server is slow.
* The page has a large number of rows and modules.

In these cases, it can be helpful to reduce the number of states stored in the History Manager or disable it entirely.
​
## Reduce History Manager functionality

To reduce the number of states in the History Manager, add the following line to your [wp-config.php](https://wordpress.org/support/article/editing-wp-config-php/) file. Change `10` in the example to the number of states you want the History Manager to store.
​
:::tip **Tip**
Try reducing the number of stored History Manager states to 10 and check performance, then tweak up or down.
:::

```php
define( 'FL_BUILDER_HISTORY_STATES', 10 );
```
Test and tweak the number to suit your environment.

## Disable History Manager functionality

To disable the History Manager entirely, add the following line to your [wp-config.php](https://wordpress.org/support/article/editing-wp-config-php/) file.
​
```php
define( 'FL_BUILDER_HISTORY_STATES', 0 );
```

With a value of `0`, the history actually remains intact until the page or post is opened in the Beaver Builder editor, at which point the history is erased.
