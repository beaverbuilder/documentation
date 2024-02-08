---
id: 06-module-css
title: '06: Module CSS'
sidebar_label: '06: Module CSS'
slug: module-css
---

Now that you have a completed module, it's time to style it! Beaver builder
gives you three entry points for defining CSS for your module, all of which
are optional and don't need to be included for your module to work. These
entry points are as follows.

## Global CSS

```bash
my-plugin/my-module/css/frontend.css
```

This file should contain styles that will be applied to all module instances within a builder layout.

## Global Responsive CSS

```bash
my-plugin/my-module/css/frontend.responsive.css
```

This file should contain styles that will be applied to all module instances
within a builder layout once the responsive breakpoint has been reached. The
responsive breakpoint can be set or disabled in the global settings panel.

## Instance CSS

```bash
my-plugin/my-module/includes/frontend.css.php
```

This file is used to render the CSS for each individual instance of your module. Note that this is CSS that applies to each instance, such as a color, not global styles that should be applied to all instances. Use
*css/frontend.css* if you would like to include global module styles for your layouts.

In addition to the full WordPress environment, within this file, you have access to these variables.

### `$module` Object

An instance of your module class that has all of the properties and methods of the parent `FLBuilderModule` class in addition to the properties and methods that you define.

### `$id` String

The module's node `ID`.

### `$settings` Object

An object that contains the module settings you defined when registering your module. Use these to output styles or check for certain conditions before doing so.

```php
.fl-node-<?php echo $id; ?> {
  background-color: #<?php echo $settings->bg_color; ?>;
}
```

## Auto CSS
Auto-css is a system for using a module’s form preview settings to generate the server-side CSS rules for the module rather than needing to create a separate frontend.css.php file. Fields that use preview ’type' ⇒ 'css’ can opt into auto-css by setting the preview configuration's ’auto' ⇒ true. Auto-css works for most simple css scenarios and the following compound fields: `border, dimension`

```php
'preview' => [
  'type' => 'css',
  'auto' => true,
  'property' => 'display'
]
```
