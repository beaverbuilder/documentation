---
id: cmdg-12-repeater-fields-reference
title: 'CMDG 12: Repeater fields reference'
sidebar_label: 'CMDG 12: Repeater fields reference'
---

A repeater field is a field that can be duplicated multiple times, reordered
and deleted. For a live example of this, check out the Items tab of the
Accordion module. There you will see that when you click the Add Item button,
another item field is added. This works for any field type, including form
fields (as in the Accordion module). The only field types it currently doesn't
work with is Editor Fields, Loop Settings Fields, Photo Fields, and Service
Fields.

## Return value  
An array of values for each of the repeated fields.

## Usage
Creating a repeater field is simple. Just set the `multiple` value in the
field config array to true and your field will automatically become a
repeater.

```php
'my_text_field' => array(
  'type'          => 'text',
  'label'         => __( 'My Text Field', 'fl-builder' ),
  'multiple'      => true,
),
```
