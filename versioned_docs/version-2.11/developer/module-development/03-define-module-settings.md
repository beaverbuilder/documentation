---
id: 03-define-module-settings
title: '03: Define module settings'
sidebar_label: '03: Define module settings'
slug: define-module-settings
---

Registering your module is done through the `FLBuilder::register_module`
method call. That method accepts two parameters: the name of your module class
and an associative array of information for building your settings form.

```php
FLBuilder::register_module( 'MyModuleClass', array() );
```

## The Settings Array

The settings array is a nested set of information that allows you to define
tabs, sections within your tabs and fields within your sections. The top-level
array items should be associative arrays with the slug for the tabs as the
array keys. The title of the tabs should also be defined within these arrays
as shown in the example below.

```php
FLBuilder::register_module( 'MyModuleClass', array(
  'my-tab-1'      => array(
      'title'         => __( 'Tab 1', 'fl-builder' ),
  ),
  'my-tab-2'      => array(
      'title'         => __( 'Tab 2', 'fl-builder' ),
  ),
) );
```

Within your tab arrays should be another array that defines your sections,
with the slug for the sections as the array keys. The title of the sections
should also be defined within these arrays, as shown in the example below.

```php
FLBuilder::register_module( 'MyModuleClass', array(
  'my-tab-1'      => array(
    'title'         => __( 'Tab 1', 'fl-builder' ),
    'sections'      => array(
      'my-section-1'  => array(
        'title'            => __( 'Section 1', 'fl-builder' ),
      ),
      'my-section-2'  => array(
        'title'            => __( 'Section 2', 'fl-builder' ),
      )
    )
  )
) );
```

Within your section arrays should be another array that defines your fields, with the slug for the fields as the array keys. Please see the [Settings Field Reference](10-setting-fields-reference.md) for an in-depth look at all of the field types as well as additional configuration properties.

```php
FLBuilder::register_module( 'MyModuleClass', array(
  'my-tab-1'      => array(
    'title'         => __( 'Tab 1', 'fl-builder' ),
    'sections'      => array(
      'my-section-1'  => array(
        'title'         => __( 'Section 1', 'fl-builder' ),
        'fields'        => array(
          'my-field-1'     => array(
            'type'          => 'text',
            'label'         => __( 'Text Field 1', 'fl-builder' ),
          ),
          'my-field-2'     => array(
            'type'          => 'text',
            'label'         => __( 'Text Field 2', 'fl-builder' ),
          )
        )
      )
    )
  )
) );
```

:::info
The slug for tabs, sections and fields should be unique or you will run into conflicts. For example, you will run into issues if you have two tabs that use the slug `my-tab-1`.
:::
