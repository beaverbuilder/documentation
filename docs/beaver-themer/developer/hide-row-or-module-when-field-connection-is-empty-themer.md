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
This code is just a starting point and will not work in every situation. Use your knowledge of PHP to extend this code, using the `$node` variable to choose which rows, columns or modules are hidden based on a number of circumstances such as `$node->type` or `$node->settings`.
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

## Examples

The examples below are common use cases on how to hide rows, columns and modules.

### Hide Row

The example below removes a row if row has a [class](/beaver-builder/advanced-builder-techniques/add-a-css-id-or-class-name-to-a-module.md/#about-the-class-selector) of `my-target-row`.

```php
add_filter( 'fl_builder_is_node_visible', function( $is_visible, $node ) {
	if ( 'row' === $node->type ) {
		if ( ! empty( $node->settings->class ) && false !== strpos( $node->settings->class, 'my-target-row' ) ) {
			return false;
		}
	}
	return $is_visible;
}, 10, 2);
```

### Hide Column

The example below removes a column if column has a [class](/beaver-builder/advanced-builder-techniques/add-a-css-id-or-class-name-to-a-module.md/#about-the-class-selector) of `my-target-column`.

```php
add_filter( 'fl_builder_is_node_visible', function( $is_visible, $node ) {
	if ( 'column' === $node->type ) {
		if ( ! empty( $node->settings->class ) && false !== strpos( $node->settings->class, 'my-target-column' ) ) {
			return false;
		}
	}
	return $is_visible;
}, 10, 2);
```

### Hide Module

The example below removes a module if module has a [class](/beaver-builder/advanced-builder-techniques/add-a-css-id-or-class-name-to-a-module.md/#about-the-class-selector) of `my-target-module`.

```php
add_filter( 'fl_builder_is_node_visible', function( $is_visible, $node ) {
	if ( 'module' === $node->type ) {
		if ( ! empty( $node->settings->class ) && false !== strpos( $node->settings->class, 'my-target-module' ) ) {
			return false;
		}
	}
	return $is_visible;
}, 10, 2);
```

### Hide on specific pages

Hide row on a specific page if row has class of `my-target-row` and [page id](/beaver-builder/advanced-builder-techniques/shortcodes/get-the-slug-or-id-for-a-shortcode.md) is `123`. You can refactor this code to work on other WordPress pages such as archives or the front page. To do this you will need to use [WordPress conditionals](https://developer.wordpress.org/themes/basics/conditional-tags/).

You can also replace the row with a column or module by changing the `$node->type`:
* `if ( 'column' === $node->type )` for column
* `if ( 'module' === $node->type )` for module.

```php
add_filter( 'fl_builder_is_node_visible', function( $is_visible, $node ) {
	if ( 'row' === $node->type ) {
		if ( ! empty( $node->settings->class ) && false !== strpos( $node->settings->class, 'my-target-row' ) && is_page( 123 ) ) {
			return false;
		}
	}
	return $is_visible;
}, 10, 2);
```

