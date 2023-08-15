---
id: white-label-the-ajax-crash-message
title: White label the Ajax crash message
sidebar_label: White label the Ajax crash message
---

When Beaver Builder detects a fatal PHP error in AJAX, a popup appears with
instructions for what to do to troubleshoot, as shown in the following
screenshot.

![](/img/tutorial-guides-white-label-crash.png)

Add the following filter to your child theme's functions.php file and replace
the placeholder text in this example with your white-labeled product name.

```php
add_filter( 'fl_builder_crash_white_label_text', function() {
	return 'My white-labeled product name';
});
```