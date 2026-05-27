---
id: 11-responsive-fields-reference
title: '11: Responsive fields reference'
sidebar_label: '11: Responsive fields reference'
slug: responsive-fields-reference
---

Users can enter different responsive breakpoint values for a single field by clicking on the device toggle icon associated with that field. You can see an example of this in the Beaver Builder editor if you visit the margins setting for rows, columns or modules.

The following field types support responsive breakpoints:

* [`align`](10-setting-fields-reference.md#align-field)
* [`border`](10-setting-fields-reference.md#border-field)
* [`button-group`](10-setting-fields-reference.md#button-group-field)
* [`dimension`](10-setting-fields-reference.md#dimension-field)
* [`photo`](10-setting-fields-reference.md#photo-field)
* [`select`](10-setting-fields-reference.md#select-field)
* [`typography`](10-setting-fields-reference.md#typography-field)
* [`unit`](10-setting-fields-reference.md#unit-field)

The easiest way to enable this for your fields is to define `responsive` as `true` in your field config, as shown below.

```php
'font_size' => array(
  'type'        => 'unit',
  'label'       => 'Font Size',
  'description' => 'px',
  'placeholder' => 24,
  'responsive'  => true,
),
```

You can have more granular control by defining `responsive` as an array of standard field config keys, with each providing a value for the `default`, `large`, `medium`, and `responsive` breakpoints, as follows.

```php
'font_size' => array(
  'type'        => 'unit',
  'label'       => 'Font Size',
  'description' => 'px',
  'responsive'  => array(
    'placeholder' => array(
      'default'     =>  36, // Extra Large
      'large'       =>  26, // Large Breakpoint
      'medium'      =>  20, // Medium Breakpoint
      'responsive'  =>  16, // Small Breakpoint
    ),
  ),
),
```
