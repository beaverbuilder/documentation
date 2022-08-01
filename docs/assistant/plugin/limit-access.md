---
id: limit-access
title: Limit Access
sidebar_label: Limit Access
---

You can limit access for the Assistant plugin to a specific User ID using the filter `fl_assistant_should_enqueue`. The user ID value in the example below is `1`. As a result, any user ID other than `1` will not be able to access the Assistant plugin.

```php
add_filter( 'fl_assistant_should_enqueue', function ( $enqueue ) {
	if ( 1 === get_current_user_id() ) {
		return $enqueue;
	}
	return false;
} );
```
