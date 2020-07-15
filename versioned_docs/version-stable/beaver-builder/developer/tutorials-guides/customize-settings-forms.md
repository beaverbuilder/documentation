---
id: customize-settings-forms
title: Customize settings forms
sidebar_label: Customize settings forms
---


It is possible to customize any of the settings forms in Beaver Builder,
including the ones built in.

You'll need a solid grasp of how settings forms are created to understand how
to customize them, so If you haven't already, see our [custom module guide](/beaver-builder/developer/custom-modules/custom-module-guide.md) before continuing. That guide has everything you'll need.

To customize a settings form, use `fl_builder_register_settings_form`, as
shown in the following code.

```php
function my_builder_register_settings_form( $form, $id ) {
  if ( 'row' == $id ) {
    // Modify the $form array for rows as needed.
  }
  elseif ( 'button' == $id ) {
    // Modify the $form array for button modules as needed.
  }
  return $form;
}
add_filter( 'fl_builder_register_settings_form', 'my_builder_register_settings_form', 10, 2 );
```

In the callback function for that filter, you will receive the following two
variables.

## $form (array)
This is the configuration array for the form that was passed to the
register method when it was created. You can modify this as needed to
customize a settings form.

:::tip **Tip**
Removing settings can lead to errors, so it's usually best to add and
not remove core settings.
:::

## $id (string)
This is the ID for the form that was passed to the register method when it was
created. For modules, this is the module's folder slug.

See also the Beaver Themer information about [adding settings forms](/beaver-themer/developer/customize-field-connections-themer.md/#add-a-settings-form).
