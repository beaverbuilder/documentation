---
id: customize-row-resizing-behavior
title: Customize row resizing behavior
sidebar_label: Customize row resizing behavior
---

Row resizing behavior controls the max width of the content container within
rows. Row resizing capability is enabled by default for any user with
unrestricted editing permissions.

If you don't want to allow rows to be resized or you want to choose a
different max-width limitation, there's a filter to modify this behavior:
`fl_row_resize_settings`.

## Filter overview

The filter is passed an array that configures whether or not row resize is
enabled and what the `max` and `min` widths should be, as shown in the
following code.

```php
$settings = array(
  'userCanResizeRows' => true,
  'minAllowedWidth' => 300, /* Integer or false */
  'maxAllowedWidth' => false, /* Integer or false */
);
```

The `userCanResizeRows` key accepts a boolean value. If it is set to `false`,
the two other keys (`minAllowedWidth` and `maxAllowedWidth`) are not required.

The `minAllowedWidth` and `maxAllowedWidth` keys either take an integer
representing a pixel width or `false` to express that there is no limit.

:::important **Notes:**
* For UI integrity, even if `minAllowedWidth` is set to `false`, the system will not allow rows to shrink lower than 100px in width.
* If you remove unrestricted editing capabilities from certain user roles in  **Settings > Beaver Builder > User access > Unrestricted editing**, it will override the code shown here for users with those roles.
:::

## Filter examples

Here are some examples that you can just copy and paste into your child
theme's _functions.php_ file.

### Remove row resize capability

The following code removes the drag handles from the layout and the max
content width setting from the row settings screen for individual rows.

```php
//Remove row resize ability
add_filter( 'fl_row_resize_settings', function( $settings ) {
    $settings['userCanResizeRows'] = false;
    return $settings;
});
```

To re-enable row resizing capabilities, remove the code.

### Limit minimum or maximum row content width

The following code sets a minimum and maximum width of the content container.
You can modify the values for each setting to either a specific number of
pixels or `false` for no limit. In this example, there is no limit on the
minimum width, and the maximum width is 1100px.

```php
add_filter( ‘fl_row_resize_settings’, function( $settings ) {
  $settings = array(
    ‘userCanResizeRows’ => true,
    ‘minAllowedWidth’ => false, /* Integer or false */
    ‘maxAllowedWidth’ => 1100, /* Integer or false */
  );
  return $settings;
});
```

### Disable row resize for a specific post type

The following code disables row resizing ability for standard posts.

```php
add_filter( 'fl_row_resize_settings', function( $settings ) {
  if ( 'post' == get_post_type() ) {
    $settings['userCanResizeRows'] = false;
  }
  return $settings;
});
```

### Tie the max possible width to global settings

To cap the max possible width to the global row max width, use the global
`row_width` setting, as shown in the following code.

```php
add_filter( 'fl_row_resize_settings', function( $settings ) {
  $global_settings = FLBuilderModel::get_global_settings();
  $settings['maxAllowedWidth'] = $global_settings->row_width;
  return $settings;
});
```
