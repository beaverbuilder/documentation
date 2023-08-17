---
id: limit-access
title: Limit Access
sidebar_label: Limit Access
---

You can limit access for the Assistant plugin to a specific User ID or role using the filter `fl_assistant_should_enqueue`.


## User ID

You can limit Assistant access to a specific user ID. In the example below, we use the user ID value of `1`. As a result, any user ID other than `1` will not be able to access the Assistant plugin.

```php
add_filter( 'fl_assistant_should_enqueue', function ( $enqueue ) {
	if ( 1 === get_current_user_id() ) {
		return $enqueue;
	}
	return false;
} );
```

## User Role

You can limit Assistant access to a specific [user role](https://wordpress.org/support/article/roles-and-capabilities/#roles). This example uses the `update_plugins` [capability](https://wordpress.org/support/article/roles-and-capabilities/), which is only available to administrator users.

:::caution
In [WordPress Multisite installations](https://wordpress.org/support/article/create-a-network/), the `update_plugins` [capability](https://wordpress.org/support/article/roles-and-capabilities/#additional-admin-capabilities) is only accessible to the [Super Admin](https://wordpress.org/support/article/multisite-network-administration/)
:::

```php
add_filter( 'fl_assistant_should_enqueue', function ( $enqueue ) {
	return current_user_can( 'update_plugins' ) ? true : false;
} );
```
