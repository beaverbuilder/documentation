---
id: 14-create-custom-fields
title: '14: Create custom fields'
sidebar_label: '14: Create custom fields'
slug: create-custom-fields
---

In addition to creating custom modules, developers can also define custom
fields for use in settings forms using their own HTML.

:::info
The custom fields in settings forms are purely JavaScript-based.
:::

## Create custom field files

Create a new PHP or HTML file for your custom field. This file should contain
markup for an Underscores JavaScript template in the same flavor that
WordPress core uses for wp.template. If you're not familiar with those type of
templates, read up on [Underscores templates](http://underscorejs.org/#template) and
[wp.template](https://codex.wordpress.org/Javascript_Reference/wp.template).

:::info
You do not need to wrap your template in `<script></script>` tags
with an ID. Beaver Builder will handle that for you.
:::

Inside your field file you will have access to the following properties on the
`data` object.

### data.field object  
The config that you defined for this field in your module's PHP file.

### data.globalSettings object  
The global settings object for Beaver Builder.

### data.name string  
The name (or key) for this field as it will be stored on the settings object
when saved.

### data.settings object  
The saved settings for the form this field is a part of.

### data.value string  
The saved value for this field.

Using those properties, you can create any type of field markup that you wish.
Just make sure something is using the `data.name` and `data.value` properties
so it can be properly saved. Here is an example of a simple text field file.

```html
<input type="text" name="{{data.name}}" value="{{data.value}}" />
```

## Register custom field files

Once you have created your custom field files, you'll need to register them
using the `fl_builder_custom_fields` filter. That filter will pass a `$fields`
array to your callback function with the array keys being the field types and
the array values being the paths to the fields. The field type you enter will
be what you need to use in your module's form config to use that field.

:::info
Your field type should be prefixed so it doesn't clash with core
field types or other custom fields. For example, if you have a field type
`toggle`, it should be `my-toggle` in case the core plugin ever introduces a
`toggle` field type.
:::

Register your custom fields to be autoloaded by Beaver Builder, as shown
below.

```php
function my_custom_builder_fields( $fields ) {
  $fields['my-field'] 	  = '/path/to/my/fields/my-field.php';
  $fields['my-other-field'] = '/path/to/my/fields/my-other-field.php';
  return $fields;
}
add_filter( 'fl_builder_custom_fields', 'my_custom_builder_fields' );
```

After you have registered your custom field file, it can be used in your
module settings as follows.

```php
'example_custom_field' => array(
  'type'          => 'my-field',
  'label'         => 'My Field',
  'default'       => '',
  'foo'           => 'bar'       
),
```

## Enqueue custom field assets

Developers may also wish to enqueue CSS and JavaScript assets for their fields
while Beaver Builder is active. This is done in the same way you typically
enqueue assets, except that the enqueue calls are wrapped in an if statement
that checks to see if Beaver Builder is active:

```php
function fl_my_custom_field_assets() {
  if ( class_exists( 'FLBuilderModel' ) && FLBuilderModel::is_builder_active() ) {
      wp_enqueue_style( 'my-custom-fields', FL_MODULE_EXAMPLES_URL . 'assets/css/fields.css', array(), '' );
      wp_enqueue_script( 'my-custom-fields', FL_MODULE_EXAMPLES_URL . 'assets/js/fields.js', array(), '', true );
  }
}
add_action( 'wp_enqueue_scripts', 'fl_my_custom_field_assets' );
```
