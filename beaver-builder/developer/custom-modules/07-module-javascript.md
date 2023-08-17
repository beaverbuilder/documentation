---
id: 07-module-javascript
title: '07: Module JavaScript'
sidebar_label: '07: Module JavaScript'
slug: module-js
---

Beaver Builder gives you two entry points for defining JavaScript for your
module, both of which are optional and don't need to be included for your
module to work.

## Global JavaScript
```bash
my-plugin/my-module/js/frontend.js
```

This file should contain JavaScript that will be applied to all module
instances within a builder layout.

## Instance JavaScript
```bash
my-plugin/my-module/includes/frontend.js.php
```

This file is used to render the JavaScript for each individual instance of
your module. Note that this is JavaScript that applies to each instance, not
global JavaScript that should be applied to all instances. Use
_js/frontend.js_ if you would like to include global JavaScript for your
module.

In addition to the full WordPress environment, within this file, you have
access to the following variables:

### $module object  
An instance of your module class that has all of the properties and methods of
the parent `FLBuilderModule` class in addition to the properties and methods
that you define.

### $id string  
The module's node ID.

### $settings object  
An object that contains the module settings you defined when registering your
module. Use these to output JavaScript or check for certain conditions before
doing so.

Example:

```js
console.log('Module ID: <?php echo $id; ?>');
console.log('Text: <?php echo $settings->text_field; ?>');
```
