---
id: disable-columns-in-columns
title: Disable columns in columns
sidebar_label: Disable columns in columns
---

You can disable the ability to create child columns by adding the following
line to your *wp-config.php* file

```php
define( 'FL_BUILDER_NESTED_COLUMNS', false );
```    

:::note **Note**
If you have any page that already has child columns, they will
continue to work, and you can select and move the parent column. However, you
will not be able to create any new child columns or to drag a column into
another column.
:::
