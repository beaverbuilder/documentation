---
id: hide-node-when-field-connection-is-empty
title: Hide Node when a Field Connection is Empty
sidebar_label: Hide Node when Field Connection is Empty
---

There may be times when you don't want entire rows or modules to show up when a field connection is empty.

:::tip

If you don't need to hide entire rows or modules, you can use conditional shortcodes instead of PHP code to [display field connections only when they return content](/beaver-themer/field-connections/conditionals/).

:::

You can use the following code to hide rows or modules that have empty field connections. Add it to your child theme's _functions.php_ file.

:::info

This code is just a starting point and will not work in every situation. Use your knowledge of PHP to extend this code, using the `$node` variable to choose which rows, columns or modules are hidden based on a number of circumstances such as `$node->type` or `$node->settings`.

:::

```php
add_filter( 'fl_builder_is_node_visible', function ( $is_visible, $node ) {
	if ( isset( $node->settings->connections ) ) {
		foreach ( $node->settings->connections as $key => $connection ) {
			if ( ! empty( $connection ) && empty( $node->settings->$key ) ) {
				return false;
			}
		}
	}
	return $is_visible;
}, 10, 2 );
```

## Hide Row

The example below removes a row if row has a [class](/beaver-builder/layouts/advanced-tab/html-element#class) of `my-target-row`.

```php
add_filter( 'fl_builder_is_node_visible', function ( $is_visible, $node ) {
	if ( 'row' === $node->type ) {
		if ( ! empty( $node->settings->class ) && false !== strpos( $node->settings->class, 'my-target-row' ) ) {
			return false;
		}
	}
	return $is_visible;
}, 10, 2 );
```

## Hide Column

The example below removes a column if column has a [class](/beaver-builder/layouts/advanced-tab/html-element#class) of `my-target-column`.

```php
add_filter( 'fl_builder_is_node_visible', function ( $is_visible, $node ) {
	if ( 'column' === $node->type ) {
		if ( ! empty( $node->settings->class ) && false !== strpos( $node->settings->class, 'my-target-column' ) ) {
			return false;
		}
	}
	return $is_visible;
}, 10, 2 );
```

## Hide Module

The example below removes a module if module has a [class](/beaver-builder/layouts/advanced-tab/html-element#class) of `my-target-module`.

```php
add_filter( 'fl_builder_is_node_visible', function ( $is_visible, $node ) {
    if ("module" === $node->type) {
        if ( !empty($node->settings->class) && false !== strpos($node->settings->class, "my-target-module") ) {
            return false;
        }
    }
    return $is_visible;
}, 10, 2 );
```

## Hide on Specific Pages

To hide a specific row on a certain page—when the row has a class of `my-target-row` and the page `ID` is 123—use the following approach. This can be easily refactored to target other types of WordPress pages, such as archives or the front page, by leveraging [WordPress conditional tags](https://developer.wordpress.org/themes/basics/conditional-tags/).

```php
add_filter( 'fl_builder_is_node_visible', function ( $is_visible, $node ) {
    if ( 'row' === $node->type ) {
        if ( ! empty( $node->settings->class ) && false !== strpos( $node->settings->class, 'my-target-row' ) && is_page( 123 ) ) {
            return false;
        }
    }
    return $is_visible;
}, 10, 2 );
```

You can also target different elements like columns or modules by replacing the `$node->type`:

- `if ( 'column' === $node->type ) {` for Column
- `if ( 'module' === $node->type ) {` for Module.

**Customization Tips:**

- Replace `is_page(123)` with any other WordPress conditional to adapt the behavior to archives, the front page, category pages, etc.
- Adjust `my-target-row` to match the actual class you’re targeting in your Advanced tab settings.
