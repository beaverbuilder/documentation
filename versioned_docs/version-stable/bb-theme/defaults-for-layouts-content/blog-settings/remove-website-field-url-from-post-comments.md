---
id: remove-website-field-url-from-post-comments
title: Remove Website field from Post comments
sidebar_label: Remove Website field from Post comments
---

With the Beaver Builder Theme, using a plugin to remove the Website (URL) field from your Post comments may not work.

The best way to remove it is to add this filter to your Beaver Builder child theme's _functions.php_ file.

```php
add_filter( 'comment_form_default_fields', function($fields ) {
    unset( $fields['url'] );
    return $fields;
}, 11 );
```

:::warning **Warning**
Be sure to add this code to the _function.php_ file in your [child theme](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme.md) or else the code can be overwritten in future theme updates.
:::
