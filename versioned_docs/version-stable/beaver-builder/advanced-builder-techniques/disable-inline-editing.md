---
id: disable-inline-editing
title: Disable inline editing
sidebar_label: Disable inline editing
---

You can globally disable inline editing functionality in the Beaver Builder
editor.

Add the following code to your child theme’s *`functions.php`* file.

```php
add_filter( 'fl_inline_editing_enabled', '__return_false' );
```
