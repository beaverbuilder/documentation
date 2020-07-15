---
id: cmdg-15-helpers
title: 'CMDG 15: Helpers'
sidebar_label: 'CMDG 15: Helpers'
---

There are helpers for CSS rendering and settings compatibility, as follows.

## CSS Rendering Helper

The CSS helper makes it simple to render complex CSS rules with your settings,
especially settings for multiple device sizes. Just use the methods described
below in your `frontend.css.php` and we'll handle the rest for you.

```php
<?php
/**
 * Render a single rule for a single device size.
 */
FLBuilderCSS::rule( array(
  'selector' => ".fl-node-$id .some-element",
  'media' => 'max-width: 980px', // Optional. Can be `default`, `medium`, `responsive` or a custom statement.
  'enabled' => 'bar' === $settings->foo, // Optional.
  'props' => array(
    'background-image' => $settings->bg_image_src,
    'background-repeat' => $settings->bg_repeat_responsive,
  ),
) );

/**
 * Render a single rule/property for all device sizes (default, medium, responsive).
 * For this to work, your field must be defined as `responsive` => `true`.
 */
FLBuilderCSS::responsive_rule( array(
  'settings'	=> $settings,
  'setting_name'	=> 'align', // As in $settings->align.
  'selector'	=> ".fl-node-$id .some-element",
  'prop'		=> 'text-align',
) );

/**
 * Renders the rule/properties for a dimension field.
 */
FLBuilderCSS::dimension_field_rule( array(
  'settings'	=> $settings,
  'setting_name' 	=> 'padding',
  'selector' 	=> ".fl-node-$id .some-element",
  'unit'		=> 'px', // Omit if custom unit select is used.
  'props'		=> array(
    'padding-top' 	 => 'padding_top', // As in $settings->padding_top
    'padding-right'  => 'padding_right',
    'padding-bottom' => 'padding_bottom',
    'padding-left' 	 => 'padding_left',
  ),
) );

/**
 * Renders the rule/properties for a typography field.
 */
FLBuilderCSS::typography_field_rule( array(
  'settings'	=> $settings,
  'setting_name' 	=> 'typography', // As in $settings->typography
  'selector' 	=> ".fl-node-$id .some-element",
) );

/**
 * Renders the rule/properties for a border field.
 */
FLBuilderCSS::border_field_rule( array(
  'settings' 	=> $settings,
  'setting_name' 	=> 'item_border', // As in $settings->item_border
  'selector' 	=> ".fl-node-$id .some-element",
) );
```

## Settings Compatibility Helper

You can change or remove settings for a module in a backwards compatible way
using the settings compatibility helper. All module instances receive a
`filter_settings` method that can be overridden to transform your settings
before they are consumed by Beaver Builder, as in the following example.

```php
<?php
class FLExampleModule extends FLBuilderModule {

  public function __construct() {
    parent::__construct( array(
      'name'        => 'Example',
    ) );
  }

  public function filter_settings( $settings ) {

    /**
     * Convert an old setting to a new setting.
     * Don't forget to unset the old setting!
     */
    if ( isset( $settings->old_setting ) ) {
      $settings->new_setting = do_something_with_old_setting( $settings->old_setting );
      unset( $settings->old_setting );
  }

  /**
   * Change an existing setting.
   */
  if ( isset( $settings->existing_setting ) ) {
  	$settings->existing_setting = do_something( $settings->existing_setting );
  }

  /**
   * Always return the settings when you are done.
   */
  return $settings;
  }
}
```
