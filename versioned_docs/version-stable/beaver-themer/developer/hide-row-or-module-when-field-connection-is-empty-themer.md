---
id: hide-row-or-module-when-field-connection-is-empty-themer
title: Hide a row or module when a field connection is empty
sidebar_label: Hide a row or module when a field connection is empty
---

There may be times when you don't want entire rows or modules to show up when a field connection is empty.

:::tip **Tip**
If you don't need to hide entire rows or modules, you can use conditional shortcodes instead of PHP code to [display field connections only when they return content](/beaver-themer/field-connections/conditional-shortcodes-for-field-connections-overview-themer.md).
:::

You can use the following code to hide rows or modules that have empty field connections. Add it to your child theme's _functions.php_ file.

:::note **Note**
This code is just a starting point and will not work in every situation. Use your knowledge of PHP to extend this code, using the `$node` variable to choose which rows or modules are hidden based on a number of circumstances such as `$node->type` or `$node->settings`.
:::

```php
function check_field_connections( $is_visible, $node ) {

	if ( isset( $node->settings->connections ) ) {
		foreach ( $node->settings->connections as $key => $connection ) {
			if ( ! empty( $connection ) && empty( $node->settings->$key ) ) {
				return false;
			}
		}
	}

	return $is_visible;
}

add_filter( 'fl_builder_is_node_visible', 'check_field_connections', 10, 2 );
```
