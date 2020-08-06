---
id: common-beaver-builder-filter-examples
title: Common Beaver Builder filter examples
sidebar_label: Common Beaver Builder filter examples
---

There is a comprehensive [Hook & Filter Reference](https://hooks.wpbeaverbuilder.com/bb-plugin/) but here's a list of some commonly used filters and their potential uses. This article is aimed at developers and assumes that you know where to put the code and how to tweak it

## BB filter in WP admin lists

In WP admin lists of pages, posts, you can click a Beaver Builder link that shows only the items that have Beaver Builder layouts. The link is shown in this screenshot.

![](/img/beaver-builder--bb-common-filter-examples-1.png)

If you'd like to disable that feature altogether, use the filter `fl_builder_admin_edit_sort_bb_enabled`.

### Example:

```php
add_filter( 'fl_builder_admin_edit_sort_bb_enabled', '__return_false' );
```

## Remember settings tab used

The Beaver Builder editor remembers the last tab used in the row/column/module settings window. If you want to disable that and have the row, column, or module settings window always open at the first tab, use the filter `fl_remember_settings_tabs_enabled`.

### Example:

```php
add_filter( 'fl_remember_settings_tabs_enabled', '__return_false' );
```

## Prevent modules from loading site-wide
By default, when you disable modules in **Settings > Beaver Builder > Modules**, they do not appear in the module list in the Beaver Builder editor, but any modules of that type already used in layouts are still displayed on web pages.

You can set a filter that prevents modules from loading and rendering both in the editor and in the front end when you disable them in **Settings > Beaver Builder > Modules**. Use the following filter:

```php
add_filter( 'is_module_disable_enabled', '__return_true' );
```

After you've added this filter, you'll see module counts displayed at **Settings > Beaver Builder > Modules** so you can see if there are existing modules that will be blocked from loading and rendering, as shown in the following screenshot.

![](/img/beaver-builder--bb-common-filter-examples-2.png)

It shows how many times each module is used in pages, posts, and "Templates." The "Templates" category applies both to saved layout templates and to saved rows, columns, and modules.

When you clear a checkbox to disable a module, it will not appear for selection in the Beaver Builder editor and any existing modules of that type will not load or render on the page.

## Disable inline editing
You can completely disable inline editing by using the fl_inline_editing_enabled filter.

### Example:

```php
add_filter(' fl_inline_editing_enabled', '__return_false' );
```

## Disable notifications from Beaver Builder in the UI

There's a bell icon in the Beaver Builder editor UI that, when clicked, shows notifications that are issued by Beaver Builder. You can disable the notifications with the filter fl_disable_notifications

### Example:

```php
add_filter( 'fl_disable_notifications', '__return_true' );
```

## `fl_ajax_*`

Use this filter to filter the results of the builder’s front-end AJAX actions. For example, for save_settings the filter would be `fl_ajax_save_settings`.

See the classes/class-fl-builder-ajax.php file for a complete list of core AJAX actions that can be appended to the fl_ajax_* filter.

```php
function my_ajax_save_settings( $result, $args ) {
  return $result;
}
add_filter( 'fl_ajax_save_settings', 'my_ajax_save_settings' );
```

## `fl_builder_admin_settings_post_types`

Use this filter to modify the post types that are shown in the admin settings for enabling and disabling post types.

```php
function my_builder_admin_settings_post_types( $post_types ) {
  unset( $post_types['post'] );
  return $post_types;
}
add_filter( 'fl_builder_admin_settings_post_types', 'my_builder_admin_settings_post_types' );
```

## `fl_builder_column_custom_class`

Use this filter to work with the custom class a user adds to a column under **Column Settings > Advanced > Class**.

```php
function my_builder_column_custom_class( $class ) {
  $class = str_replace( 'red', 'blue', $class );
  return $class;
}
add_filter( 'fl_builder_column_custom_class', 'my_builder_column_custom_class' );
```

## `fl_builder_get_cache_dir`

Use this filter to modify the cache directory path and URL that the builder uses to store cached images, JavaScript, and CSS files.

```php
function my_builder_get_cache_dir( $dir_info ) {
  $dir_info['path'] = '/your/custom/path/cache/';
  $dir_info['url'] = 'http://www.yourdomain.com/your/custom/url/cache/';
  return $dir_info;
}
add_filter( 'fl_builder_get_cache_dir', 'my_builder_get_cache_dir' );
```

## `fl_builder_get_upload_dir`

Use this filter to modify the upload directory path and URL that the builder uses to store things like the cache and custom icons.

```php
function my_builder_get_upload_dir( $dir_info ) {
  $dir_info['path'] = '/your/custom/path/';
  $dir_info['url'] = 'http://www.yourdomain.com/your/custom/url/';
  return $dir_info;
}
add_filter( 'fl_builder_get_upload_dir', 'my_builder_get_upload_dir' );
```

## `fl_builder_global_posts`

Use this filter to specify a post or posts whose CSS and JavaScript assets should be loaded globally. This is useful when you want to display a builder layout on every page of your site such as in a sidebar. This filter is passed in an array to which you can add post IDs that should be loaded globally.

```php
function my_global_builder_posts( $post_ids ) {
  $post_ids[] = '123';
  return $post_ids;
}
add_filter( 'fl_builder_global_posts', 'my_global_builder_posts' );
```

## `fl_builder_layout_style_dependencies`

Use this filter to add dependencies to the dependency array when the main builder layout CSS file is enqueued using `wp_enqueue_style()`.

```php
function my_builder_layout_style_dependencies( $deps ) {
  $deps[] = 'font-awesome';
  return $deps;
}
add_filter( 'fl_builder_layout_style_dependencies', 'my_builder_layout_style_dependencies' );
```

## `fl_builder_mailchimp_double_option`

Use this filter to enable double opt-ins for MailChimp integrations. Returning `true` enables double opt-ins; returning `false` enables single opt-ins. The default return value for this filter is false.

```php
// Enable double opt-ins.
add_filter( 'fl_builder_mailchimp_double_option', '__return_true' );
```

## `fl_builder_module_categories`

Use this filter to add custom module categories that will show up before the default module categories in the builder’s UI. Note these categories only show if they contain modules.

```php
function my_builder_module_categories( $categories ) {
  $categories[] = 'My Custom Category';
  return $categories;
}
add_filter( 'fl_builder_module_categories', 'my_builder_module_categories' );
```

## `fl_builder_module_custom_class`

Use this filter to work with the custom class a user adds to a module in the **Class** field on the **Advanced tab**.

```php
function my_builder_module_custom_class( $class ) {
  $class = str_replace( 'red', 'blue', $class );
  return $class;
}
add_filter( 'fl_builder_module_custom_class', 'my_builder_module_custom_class' );
```

## `fl_builder_post_types`

Use this filter to modify the post types that the builder works with.

```php
function my_builder_post_types( $post_types ) {
    $post_types[] = 'post';
    return $post_types;
}
add_filter( 'fl_builder_post_types', 'my_builder_post_types' );
```

## `fl_builder_register_module`

Use this filter to override the modules that are enabled in the builder.

```php
function my_builder_register_module( $enabled, $instance ) {

  $disable = array( 'accordion', 'button', 'separator' );

  if ( in_array( $instance->slug, $disable ) ) {
      return false;
  }

  return $enabled;
}
add_filter( 'fl_builder_register_module', 'my_builder_register_module', 10, 2 );
```

## `fl_builder_register_settings_form`
Use this filter to modify the config array for a settings form when it is registered.

```php
function my_builder_register_settings_form( $form, $id ) {

  if ( 'row' == $id ) {
      // Modify the row settings $form config array.
  }
  else if ( 'button' == $id ) {
      // Modify the button settings $form config array.
  }
  return $form;
}
add_filter( 'fl_builder_register_settings_form', 'my_builder_register_settings_form', 10, 2 );
```

## `fl_builder_render_css`
Use this filter to modify the CSS that is compiled and cached for each builder layout.

```php
function my_builder_render_css( $css, $nodes, $global_settings ) {
  $css .= '#my-selector { property:value; }';
  return $css;
}
add_filter( 'fl_builder_render_css', 'my_builder_render_css', 10, 3 );
```

## `fl_builder_render_js`
Use this filter to modify the JavaScript that is compiled and cached for each builder layout.

```php
function my_builder_render_js( $js, $nodes, $global_settings ) {
  $js .= 'console.log( "Hello World!" );';
  return $js;
}
add_filter( 'fl_builder_render_js', 'my_builder_render_js', 10, 3 );
```

## `fl_builder_render_settings_field`
Use this filter to modify the config array for a field before it is rendered.

```php
function my_builder_render_settings_field( $field, $name, $settings ) {
  $field['default'] = 'My Default Value';
  return $field;
}
add_filter( 'fl_builder_render_settings_field', 'my_builder_render_settings_field', 10, 3 );
```

## `fl_builder_render_shortcodes`

Use this filter to prevent the builder from rendering shortcodes. It is useful if you don’t want shortcodes rendering while the builder UI is active.

```php
function my_builder_render_shortcodes( $render ) {

  if ( FLBuilderModel::is_builder_active() ) {
    remove_filter( 'the_content', 'do_shortcode', 11 );
    return false;
  }
  return $render;
}
add_filter( 'fl_builder_render_shortcodes', 'my_builder_render_shortcodes' );
```

## `fl_builder_row_custom_class`
Use this filter to work with the custom class a user adds to a row under **Row Settings > Advanced > Class**.

```php
function my_builder_row_custom_class( $class ) {
  $class = str_replace( 'red', 'blue', $class );
  return $class;
}
add_filter( 'fl_builder_row_custom_class', 'my_builder_row_custom_class' );
```

## `fl_builder_settings_form_defaults`

Use this filter to change the defaults for any of the settings forms in the builder including global, row, column and module settings.

```php
function my_builder_settings_form_defaults( $defaults, $form_type ) {

  if ( 'global' == $form_type ) {
    $defaults->default_heading_selector = '.my-heading-selector';
  }

  return $defaults; // Must be returned!
}
add_filter( 'fl_builder_settings_form_defaults', 'my_builder_settings_form_defaults', 10, 2 );
```

## `fl_builder_upgrade_url`

Use this filter to modify the upgrade URL in Beaver Builder Lite. This can be used to add an affiliate ID.

```php
function my_bb_upgrade_link() {

  return 'YOUR_LINK_HERE';

}
add_filter( 'fl_builder_upgrade_url', 'my_bb_upgrade_link' );
```
