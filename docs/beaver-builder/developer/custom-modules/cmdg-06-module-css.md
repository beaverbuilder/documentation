---
id: cmdg-06-module-css
title: 'CMDG 06: Module CSS'
sidebar_label: 'CMDG 06: Module CSS'
---

Now that you have a completed module, it's time to style it! Beaver builder
gives you three entry points for defining CSS for your module, all of which
are optional and don't need to be included for your module to work. These
entry points are as follows.

## Global CSS
```bash
my-plugin/my-module/css/frontend.css
```

This file should contain styles that will be applied to all module instances
within a builder layout.

## Global responsive CSS
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

This file is used to render the CSS for each individual instance of your
module. Note that this is CSS that applies to each instance, such as a color,
not global styles that should be applied to all instances. Use
_css/frontend.css_ if you would like to include global module styles for your
layouts.

In addition to the full WordPress environment, within this file, you have
access to these variables…

### $module object  
An instance of your module class that has all of the properties and methods of
the parent `FLBuilderModule` class in addition to the properties and methods
that you define.

### $id string  
The module's node ID.

### $settings object  
An object that contains the module settings you defined when registering your
module. Use these to output styles or check for certain conditions before
doing so.

Example:

```php
.fl-node-<?php echo $id; ?> {
  background-color: #<?php echo $settings->bg_color; ?>;
}
```
