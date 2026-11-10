---
id: 05-module-html
title: '05: Module HTML'
sidebar_label: '05: Module HTML'
slug: module-html
---

It is essential that the *frontend.php* file is present for a module to function. This file should be placed in the `/includes/` directory of your module, as shown in the example below.

```bash
/wp-content/my-plugin/my-module/includes/frontend.php
```

The *frontend.php* file is used to render the HTML markup for each individual instance of your module and provides access to the full WordPress environment in addition to the following variables.

## `$module` Object

An instance of your module class that has all of the properties and methods of
the parent `FLBuilderModule` class in addition to the properties and methods
that you define.

## `$id` String

The module's node `ID`.

## `$settings` Object

An object that contains the module settings you defined when registering your module. Use these to output content or check for certain conditions before doing so.

```php
<div class="fl-example-text">
  <?php echo $settings->textarea_field; ?>
  <?php $module->example_method(); ?>
</div>
```
