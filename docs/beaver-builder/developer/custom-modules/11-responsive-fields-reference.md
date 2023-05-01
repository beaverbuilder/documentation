---
id: 11-responsive-fields-reference
title: '11: Responsive fields reference'
sidebar_label: '11: Responsive fields reference'
slug: responsive-fields-reference
---

Users can enter different responsive breakpoint values for a single field by
clicking on the device toggle icon associated with that field. You can see an
example of this in the Beaver Builder editor if you visit the margins setting
for rows, columns or modules.

The following field types support responsive breakpoints:

  * `dimension`
  * `unit`
  * `align`
  * `border`
  * `photo`
  * `select`
  * `typography`

The easiest way to enable this for your fields is to define `responsive` as
`true` in your field config, as shown below.

```php
'font_size' => array(
  'type'        => 'unit',
  'label'       => 'Font Size',
  'description' => 'px',
  'placeholder' => 24,
  'responsive'  => true,
),
```

You can have more granular control by defining `responsive` as an array of
standard field config keys, with each providing a value for the `default`,
`medium`, and `responsive` breakpoints, as follows.

```php
'font_size' => array(
  'type'        => 'unit',
  'label'       => 'Font Size',
  'description' => 'px',
  'responsive'  => array(
    'placeholder' => array(
      'default'    =>  36,
      'medium'     =>  24,
      'responsive' =>  16,
    ),
  ),
),
```
