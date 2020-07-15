---
id: add-a-custom-theme-preset
title: Add a custom theme preset
sidebar_label: Add a custom theme preset
---

You can add your own custom presets to the Beaver Builder Theme. Put your code in your child theme's _functions.php_.

Add a preset with the following method:

```
FLCustomizer::add_preset( $slug, $args );
```

Your preset’s slug must be unique, or it can override other presets. Additionally, this method must be called from within the `after_setup_theme` action.

## An example of a working preset

This example creates a preset that changes the default accent color. After you add this code, the custom preset name appears in **Customize > Presets** and your custom default accent color appears in **Customize > General > Accent color**.

See the parameter descriptions below for a breakdown of each parameter in the `add_preset` args array.

```php
function my_custom_presets() 
{
  FLCustomizer::add_preset( 'my-preset', array(
    'name'      => 'My Preset',
    'skin'      => '/FULL_SYSTEM_PATH_TO_CHILD_THEME/my-preset.css',
    'settings'  => array(
    'fl-accent' => '#95bf48'
    )
  ));
}

add_action( 'after_setup_theme', 'my_custom_presets', 11 );
```

#### name (string) (required)

The name of your preset that will be shown in the **Customizer > Presets** select.

#### skin (string) (optional)

The skin parameter should be set to the full system path of a CSS file you have uploaded for your preset. (One way to get the full system path is through File Manager in cPanel.) The contents of this custom file are appended to the child theme's default skin CSS file, so the rules from the custom file override the rules that appear higher in the file. Be sure to clear the Beaver Builder cache at **Settings > Beaver Builder** to make sure this custom file gets picked up.

:::tip **Tips**

You don't need a CSS skin file if everything you want in your preset can be controlled by the key/value pairs in the `settings` parameter. These key/value pairs set the default style in the theme's Customizer settings (and in Beaver Builder layouts), while the skin file controls styling of other aspects of the preset's layout. For example, you don't need to create a CSS rule for the accent color in the example above, because that is controlled by the `fl-accent` key in the `settings` parameter.

A good way to create this CSS file for your custom preset is to either start with the current skin file or select a preset that is closest to what you want and use the skin file that's generated from that. After you choose a preset, be sure to clear the cache in **Settings > Beaver Builder > Tools** so the new skin file is generated. You can access the default skin file in */wp-content/uploads/bb-theme*.
:::

#### settings (array) (required)

The `settings` parameter is an array of key/value pairs that correlate to the key for a Customizer setting and the value you would like to define for this preset. For example, if you want to set the body background color for your preset to white, add the following to your settings array:

    fl-body-bg => '#ffffff'

You can access the lists of key/value pairs in the next section.

## Key/value pairs for Customizer options

Each Customizer section's options are broken down below to help you create your own presets. They are presented as key/value pairs that you use as args in the `settings (array)` parameter.

  * [General](/bb-theme/developer/custom-theme-preset/add-theme-preset-general-tab-options.md)
  * [Header](/bb-theme/developer/custom-theme-preset/add-theme-preset-header-tab-options.md)
  * [Content](/bb-theme/developer/custom-theme-preset/add-theme-preset-content-tab-options.md)
  * [Footer](/bb-theme/developer/custom-theme-preset/add-theme-preset-footer-tab-options.md)

:::note **Notes**
  * For numbers, do not specify a unit. For hex colors, include the pound sign/hashtag in front (#).
  * Not all sections in the Customizer are included in these lists, either because the there are no options (such as the Code areas) or because they are duplications of WordPress areas such as widgets and menus.
:::
