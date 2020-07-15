---
id: remove-an-existing-or-custom-preset
title: Remove an existing or custom preset
sidebar_label: Remove a preset
---

You can remove presets one at a time, or as a batch, or you can remove the entire **Customize > Presets** tab. Add the code to your child theme's _functions.php_ file.

## Remove a single preset

Remove a preset with the following method:

```php
FLCustomizer::remove_preset( $slug );
```
As with adding a preset, removing a preset must also be done within the `after_setup_theme action`:

```php
function my_custom_presets() {
FLCustomizer::remove_preset( 'default-dark' );
}
add_action( 'after_setup_theme', 'my_custom_presets', 11 );
```

## Remove multiple presets

The `remove_preset` function accepts arrays. Here's an example of code that will remove all of the built-in presets. You can modify the list of presets in the array to remove only a subset of them.

```php
function remove_all_presets() {
    FLCustomizer::remove_preset(
      array('default-dark' , 'classic' , 'modern' , 'bold' ,
          'stripe' , 'deluxe' , 'premier' , 'dusk' , 'midnight')
     );
}
add_action( 'after_setup_theme', 'remove_all_presets', 11 );
```
## Remove the entire Preset tab

```php
function my_customize_register() {
    global $wp_customize;
    $wp_customize->remove_section( 'fl-presets' );
}
add_action( 'customize_register', 'my_customize_register', 11 );
```
