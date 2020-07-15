---
id: cmdg-13-sanitize-field-values
title: 'CMDG 13: Sanitize field values'
sidebar_label: 'CMDG 13: Sanitize field values'
---

You can provide a sanitization callback function for your field's value. For
example, you may want to ensure that the value entered by a user for your
field is returned as a number no matter what they enter.

To do that, first define your sanitization callback function that returns the
sanitized value:

```php
function sanitize_number( $value ) {
  return absint( $value );
}
```

Then specify that function in your field config using the `sanitize`
parameter:

```php
'font_size' => array(
  'type'          => 'unit',
  'label'         => 'Font Size',
  'description'   => 'px',
  'sanitize'	=> 'sanitize_number',
),
```
