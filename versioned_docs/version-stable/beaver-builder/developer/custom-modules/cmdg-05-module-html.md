---
id: cmdg-05-module-html
title: 'CMDG 05: Module HTML'
sidebar_label: 'CMDG 05: Module HTML'
---

A module only needs the main module file and the frontend HTML file to work.
This file is required and should be located at _my-plugin/my-
module/includes/frontend.php_. It is used to render the HTML for each
individual instance of your module and provides access to the full WordPress
environment in addition to the following variables.

## $module object  
An instance of your module class that has all of the properties and methods of
the parent `FLBuilderModule` class in addition to the properties and methods
that you define.

## $id string  
The module's node ID.

## $settings object  
An object that contains the module settings you defined when registering your
module. Use these to output content or check for certain conditions before
doing so.

Example:

```php
<div class="fl-example-text">
  <?php echo $settings->textarea_field; ?>
  <?php $module->example_method(); ?>
</div>
```
