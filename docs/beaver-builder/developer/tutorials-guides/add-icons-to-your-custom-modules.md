---
id: add-icons-to-your-custom-modules
title: Add icons to your custom modules
sidebar_label: Add icons to your custom modules
---

If you're a developer and have created a custom module, there are several ways
to add an icon to its display in the **Content** panel.

  * You can reuse any icon used by a Beaver Builder module.
  * You can add a custom icon by copying it into the module's root directory.
  * You can add an icon programmatically.

## Reuse an existing icon

Icons used for Beaver Builder modules are stored in _wpcontent/bb-
plugin/img/svg_ , and you are welcome to use any of those icons for your own
module.

To use an existing icon, modify the `construct` method shown in the chapter on
[adding a module](/beaver-builder/developer/custom-modules/cmdg-02-add-a-module-to-your-plugin.md) in the custom module developer guilde. Add an `icon` key and reference any icon file in that directory. (You don't need a
path.) For example:

```php
'icon' => 'button.svg'
```

## Add your own icon

You can easily use your own SVG icon. Name it _icon.svg_ and place it in the
module’s root directory. The icon will be used automatically. No coding
required.

Custom icons should be prepared and tested for 20px x 20px, which is the size
the content panel displays them. Avoid any fills or strokes applied to the
icon markup because the system will style them differently according to UI
circumstances such as dark vs. light mode.

All of the current icons come from the Dashicons set (the WordPress admin icon
font), though they may come from other sources in future. Dashicons are a good
reference for anyone not familiar with SVG. See the _svg-min_ directory at
<https://github.com/WordPress/dashicons>.

## Add an icon programmatically

If you need more programmatic control over which icon displays or want to use
a custom icon with a different file name, you can override your module’s
`get_icon()` method and return an svg string.
