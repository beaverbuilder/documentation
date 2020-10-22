---
id: add-custom-attributes-to-rows-columns-or-modules
title: Add custom attributes to rows, columns or modules
sidebar_label: Add custom attributes to rows, columns or modules
---

You can easily add custom attributes when you need them for a particular row,
column or module. The code examples below use filters to add the attributes to
a row, column or module that has a custom ID.

In all of these examples, assign your own custom ID to the **ID** field in the
**HTML attributes** section of the **Advanced** tab. Substitute your own
attribute name and value and your custom ID in the code and place the code in
the _functions.php_ file of your child theme.

![](/img/custom-attributes-1.png)

## Add an attribute to a row

This example adds an attribute of `data-foo="bar"` to a row that has a custom
ID of `my-row-id`.

```php
add_filter('fl_builder_row_attributes', function ($attrs, $row) {
  if ('my-row-id' == $row->settings->id) {
    $attrs['data-foo'] = 'bar';
  }
  return $attrs;
}, 10, 2);
```

## Add an attribute to a column

This example adds an attribute of `data-foo="bar"` to a column that has a
custom ID of `my-column-id`.

```php
add_filter('fl_builder_column_attributes', function ($attrs, $row) {
  if ('my-column-id' == $row->settings->id) {
    $attrs['data-foo'] = 'bar';
  }
  return $attrs;
}, 10, 2);
```

## Add an attribute to a module

This example adds an attribute of `data-foo="bar"` to a module that has a
custom ID of `my-module-id`.

```php
add_filter('fl_builder_module_attributes', function ($attrs, $row) {
  if ('my-module-id' == $row->settings->id) {
    $attrs['data-foo'] = 'bar';
  }
  return $attrs;
}, 10, 2);
```

## Add multiple attributes to a module

This example demonstrates how to use the filter to add multiple attributes to
a row that has an ID of `my-row-id`. Use this code for columns by changing the
`fl_builder_row_attributes` filter to the column
`fl_builder_column_attributes` filter. Use this code for modules by changing
it to the `fl_builder_module_attributes` filter.

```php
add_filter('fl_builder_row_attributes', function ( $attrs, $row ) {
  if ( 'my-row-id' == $row->settings->id ) {
    $attrs['data-foo'] = 'bar';
    $attrs['data-foo-2'] = 'bar-2';
  }
  return $attrs;
}, 10, 2);
```
