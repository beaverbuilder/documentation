---
id: common-beaver-builder-plugin-filter-examples
title: Common Beaver Builder filter examples
sidebar_label: Common Beaver Builder filter examples
description: Beaver Builder has many filters. This article describes how to use some of the common ones.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There is a comprehensive [Hook & Filter Reference](https://hooks.wpbeaverbuilder.com/bb-plugin/) but here's a list of some commonly used filters with their potential uses. This article is aimed at developers and assumes that you know where to put the code and how to tweak it.

## Remove Beaver Builder filter option in WP post lists

**Filter:** `fl_builder_admin_edit_sort_bb_enabled`

In WP admin lists of pages, posts, and custom post types in the back end, there's a Beaver Builder link in the list of post display filters, which limits the display to items that have Beaver Builder layouts. The Beaver Builder link to filter the display is shown in this screenshot.

![Screenshot of Beaver Builder filter link in WP lists of pages and posts](/img/beaver-builder--bb-common-filter-examples-1.png)

:::info
The link for the Beaver Builder display filter will only be visible on post types where Beaver Builder has been enabled under **WordPress Admin Dashboard > Settings > Beaver Builder > Post types**.
:::

If you'd like to remove this Beaver Builder display filter link, add the following line of code to the _functions.php_ file in your child theme.

```php
add_filter("fl_builder_admin_edit_sort_bb_enabled", "__return_false");
```

## Adding SVG & Other File Type Support

**Filter:** `fl_module_upload_regex`

The `fl_module_upload_regex` filter allows developers to modify the regular expression used to validate the file types that can be uploaded to Beaver Builder image fields. These fields are used for incorporating background images in rows and adding images to modules, such as the Photo module. You can also add support for multiple file types by listing each file extension separated by the pipe symbol (`|`).

:::tip
The [Regex101](https://regex101.com/) website is a valuable resource for obtaining assistance with regular expressions.
:::

:::caution
The `fl_module_upload_regex` filter only provides support for Beaver Builder and not for WordPress as a whole. In order for it to function, support must also be added to WordPress, which can be achieved through custom code or a third-party plugin. Failing to add support to WordPress will prevent the `fl_module_upload_regex` filter from functioning properly.
:::

The example code demonstrates how to enable support for SVG files in Beaver Builder image fields. To add support for more file types, you can adjust the code by substituting `svg` with the extension of the desired file type.

```php
add_filter(
  "fl_module_upload_regex",
  function ($regex, $type, $ext, $file) {
    $regex["photo"] = "#(jpe?g|png|gif|bmp|tiff?|webp|svg)#i";

    return $regex;
  },
  10,
  4
);
```

## Filter to add a mail service to the Subscribe module

**Filter:** `fl_builder_subscribe_form_services`

The fl_builder_subscribe_form_services filter lets you add a service to the list displayed in the Subscribe Form module. Here's an example.

```php
function bb_subscribe_form_custom_service($services)
{
  $services["convertkit_custom"] = [
    "type" => "autoresponder",
    "name" => "ConvertKitCustom",
    "class" => "FLBuilderServiceConvertKitCustom",
    "file" =>
      FL_CHILD_THEME_DIR . "/classes/class-fl-builder-service-convertkit.php",
  ];
  return $services;
}
add_filter(
  "fl_builder_subscribe_form_services",
  "bb_subscribe_form_custom_service"
);
```

## Add Latin-Extended capabilities for a Google font

If you have a Google font that includes Latin Extended characters, you can add
that capability to your Beaver Builder layouts.

Add the following filter to the _functions.php_ file of your child theme and
replace the font name in Line 2 with the name of your Google font family.

```php {2}
function my_font_subset($subset, $name)
{
  if ($name == "Acme") {
    $subset = "&subset=latin,latin-ext";
  }
  return $subset;
}
add_filter("fl_font_subset", "my_font_subset", 10, 2);
```

:::info

Not all Google fonts have Latin-extended characters, so make sure the Google font you choose has them.

:::

## White label the Ajax crash message

When Beaver Builder detects a fatal PHP error in AJAX, a popup appears with
instructions for what to do to troubleshoot, as shown in the following
screenshot.

![](/img/tutorial-guides-white-label-crash.png)

Add the following filter to your child theme's functions.php file and replace
the placeholder text in this example with your white-labeled product name.

```php
add_filter("fl_builder_crash_white_label_text", function () {
  return "My white-labeled product name";
});
```

## Lightbox & Special Characters

**Filter:** `fl_photocaptionregex`

The Beaver Builder lightbox supports a limited number of special characters as a security measure.
Default allowed characters: `'":() !.,-_|`

In the example below, the `$` Dollar and `£` Pound Sterling are added to the list of allowed characters.

```php
add_filter("fl_photocaptionregex", function ($regex) {
  return 'a-zA-Z0-9\$£';
});
```

:::tip
The `$` Dollar symbol is a regex control character, so it must be escaped (`\$`).
:::

## Always open first tab in row/column/module settings

**Filter:** `fl_remember_settings_tabs_enabled`

The Beaver Builder editor remembers the last tab used in the row/column/module settings window. If you want to disable that behavior and have the row, column, or module settings window always open at the first tab, add the following line of code to the _functions.php_ file in your child theme.

```php
add_filter("fl_remember_settings_tabs_enabled", "__return_false");
```

## Show which modules are in use in a website

**Filter:** `is_module_disable_enabled`

You can use this filter to show which Beaver Builder modules and how many of each type are used on the front end of your website. This information is displayed on the **Modules** tab at **Settings > Beaver Builder**, as shown in the following screenshot.

![Screenshot of the Modules tab in Beaver Builder settings showing which modules are in use](/img/beaver-builder--bb-common-filter-examples-2.png)

You can see how many times each module is used in pages, posts, and "Templates." The "Templates" category applies both to [saved layout templates](layouts/templates/saved-templates.md) and to [saved rows, columns, and modules](layouts/reusable-content/index.md).

To display these module counts, add the following line of code to the _functions.php_ file in your child theme.

```php
add_filter("is_module_disable_enabled", "__return_true");
```

:::info
If you uncheck modules on this tab with this filter applied, it will prevent them from being displayed on the front end of your site. See the following section about [preventing modules from loading site-wide](#prevent-modules-from-loading-site-wide).
:::

## Prevent modules from loading site-wide

**Filter:** `is_module_disable_enabled`

By default, when you disable modules in **Settings > Beaver Builder > Modules**, they do not appear in the module list in the Beaver Builder editor, but any modules of that type already used in layouts are still displayed on web pages.

If you apply the `is_module_disable_enabled` filter, then when you clear a checkbox to disable a module, it will not be visible in the editor and existing modules of that type will not load or render on the front end either.

This filter is the same one [described in the previous section about displaying module counts](#show-which-modules-are-in-use-in-a-website). After you apply the filter as shown there, go to **Settings > Beaver Builder** and click the **Modules** tab to view which modules are used where, then uncheck the box for any modules that you don't want to display either on the front end or in the editor.

:::caution
The Slideshow module is required for row background slideshows to function.
:::

## Disable inline editing

**Filter:** `fl_inline_editing_enabled`

You can use this filter to completely disable inline editing in the Beaver Builder editor. Add the following line of code to the _functions.php_ file in your child theme.

```php
add_filter("fl_inline_editing_enabled", "__return_false");
```

## Disable notifications from Beaver Builder in the UI

**Filter:** `fl_disable_notifications`

There's a bell icon in the Beaver Builder editor UI that, when clicked, shows notifications that are issued by Beaver Builder. You can use this filter to disable these notifications. Add the following line of code to the _functions.php_ file in your child theme.

```php
add_filter("fl_disable_notifications", "__return_true");
```

## Enable double opt-in for MailChimp integrations

**Filter:** `fl_builder_mailchimp_double_option`

Use this filter to enable double opt-in for MailChimp integrations. Returning `true` enables double opt-in; returning `false` enables single opt-in. The default return value for this filter is `false`.

**Example:**

```php
// Enable double opt-in.
add_filter("fl_builder_mailchimp_double_option", "__return_true");
```

## Filter front-end AJAX actions in Beaver Builder

**Filters:** `fl_ajax_*` , appended with an AJAX action listed in _classes/class-fl-builder-ajax.php_

Use this set of filters to filter the results of Beaver Builder’s front-end AJAX actions. For example, for the `save_settings` action, the filter would be `fl_ajax_save_settings`, as shown in this example.

**Example:**

```php
function my_ajax_save_settings($result, $args)
{
  return $result;
}
add_filter("fl_ajax_save_settings", "my_ajax_save_settings");
```

See the _classes/class-fl-builder-ajax.php_ file for a complete list of core AJAX actions that can be appended to the `fl_ajax_*` filter.

## Modify the post types that are shown in Beaver Builder Settings

**Filter:** `fl_builder_admin_settings_post_types`

Use this filter to modify the post types that are shown at **Settings > Beaver Builder > Post types**, where you can choose which post types have the Beaver Builder editor enabled.

Add the following code to the _functions.php_ file in your child theme and modify it for the post types you want to filter. In this example, the `unset( $post_types['post'] );` line means that standard posts do not appear in the **Settings > Beaver Builder > Post types** list and cannot have the Beaver Builder editor enabled.

**Example:**

```php
function my_builder_admin_settings_post_types($post_types)
{
  unset($post_types["post"]);
  return $post_types;
}
add_filter(
  "fl_builder_admin_settings_post_types",
  "my_builder_admin_settings_post_types"
);
```

## Modify custom class names for rows

**Filter:** `fl_builder_row_custom_class`

Use this filter to work with the custom class a user adds to a row under **Row Settings > Advanced > Class**. In the following example, if the user enters a custom class called **my-red-class** for a particular column, it appears on the front end as `my-blue-class`.

**Example:**

```php
function my_builder_row_custom_class($class)
{
  $class = str_replace("red", "blue", $class);
  return $class;
}
add_filter("fl_builder_row_custom_class", "my_builder_row_custom_class");
```

## Modify custom class names for columns

**Filter:** `fl_builder_column_custom_class`

Use this filter to work with the custom class a user adds to a column under **Column Settings > Advanced > Class**. In the following example, if the user enters a custom class called **my-red-class** for a particular column, it appears on the front end as `my-blue-class`.

**Example:**

```php
function my_builder_column_custom_class($class)
{
  $class = str_replace("red", "blue", $class);
  return $class;
}
add_filter("fl_builder_column_custom_class", "my_builder_column_custom_class");
```

## Modify custom class names for modules

**Filter:** `fl_builder_module_custom_class`

Use this filter to work with the custom class a user adds to a module in the **Class** field on the **Advanced tab**. In the following example, if the user enters a custom class called **my-red-class** for a particular module, it appears on the front end as `my-blue-class`.

**Example:**

```php
function my_builder_module_custom_class($class)
{
  $class = str_replace("red", "blue", $class);
  return $class;
}
add_filter("fl_builder_module_custom_class", "my_builder_module_custom_class");
```

## Modify the cache directory path

**Filter:** `fl_builder_get_cache_dir`

Use this filter to modify the cache directory path and URL that the Beaver Builder editor uses to store cached images, JavaScript, and CSS files.

**Example:**

```php
function my_builder_get_cache_dir($dir_info)
{
  $dir_info["path"] = "/your/custom/path/cache/";
  $dir_info["url"] = "http://www.yourdomain.com/your/custom/url/cache/";
  return $dir_info;
}
add_filter("fl_builder_get_cache_dir", "my_builder_get_cache_dir");
```

## Modify the upload directory path

**Filter:** `fl_builder_get_upload_dir`

Use this filter to modify the upload directory path and URL that the builder uses to store things like the cache and custom icons.

**Example:**

```php
function my_builder_get_upload_dir($dir_info)
{
  $dir_info["path"] = "/your/custom/path/";
  $dir_info["url"] = "http://www.yourdomain.com/your/custom/url/";
  return $dir_info;
}
add_filter("fl_builder_get_upload_dir", "my_builder_get_upload_dir");
```

## Specify posts to load CSS and JavaScript assets globally

**Filter** `fl_builder_global_posts`

Use this filter to specify a post or posts whose CSS and JavaScript assets should be loaded globally. This is useful when you want to display a Beaver Builder layout on every page of your site, such as in a sidebar. This filter is passed in an array to which you can add post IDs that should be loaded globally.

**Example:**

```php
function my_global_builder_posts($post_ids)
{
  $post_ids[] = "123";
  return $post_ids;
}
add_filter("fl_builder_global_posts", "my_global_builder_posts");
```

## Add dependencies to the dependency array

**Filter:** `fl_builder_layout_style_dependencies`

Use this filter to add dependencies to the dependency array when the main builder layout CSS file is enqueued using `wp_enqueue_style()`.

**Example:**

```php
function my_builder_layout_style_dependencies($deps)
{
  $deps[] = "font-awesome";
  return $deps;
}
add_filter(
  "fl_builder_layout_style_dependencies",
  "my_builder_layout_style_dependencies"
);
```

## Add custom module categories before default module categories

**Filter:** `fl_builder_module_categories`

Use this filter to add custom module categories that will show up before the default module categories in the Beaver Builder UI. These categories only display if they contain modules.

**Example:**

```php
function my_builder_module_categories($categories)
{
  $categories[] = "My Custom Category";
  return $categories;
}
add_filter("fl_builder_module_categories", "my_builder_module_categories");
```

## Modify the post types that can use Beaver Builder

**Filter:** `fl_builder_post_types`

Use this filter to modify the post types that the Beaver Builder editor works with.

**Example**

```php
function my_builder_post_types($post_types)
{
  $post_types[] = "post";
  return $post_types;
}
add_filter("fl_builder_post_types", "my_builder_post_types");
```

## Override modules enabled in Beaver Builder

**Filter:** `fl_builder_register_module`

Use this filter to override the modules that are enabled in the Beaver Builder editor.

**Example:**

```php
function my_builder_register_module($enabled, $instance)
{
  $disable = ["accordion", "button", "separator"];

  if (in_array($instance->slug, $disable)) {
    return false;
  }

  return $enabled;
}
add_filter("fl_builder_register_module", "my_builder_register_module", 10, 2);
```

## Customize a Beaver Builder settings form

**Filter:** `fl_builder_register_settings_form`

Use this filter to modify the config array for a settings form when it is registered. See [this article on customizing settings](/beaver-builder/developer/tutorials-guides/customize-settings-forms.md) for a more complete description of the code.

**Example:**

```php
function my_builder_register_settings_form($form, $id)
{
  if ("row" == $id) {
    // Modify the row settings $form config array.
  } elseif ("button" == $id) {
    // Modify the button settings $form config array.
  }
  return $form;
}
add_filter(
  "fl_builder_register_settings_form",
  "my_builder_register_settings_form",
  10,
  2
);
```

## Modify the CSS compiled and cached

**Filter:** `fl_builder_render_css`

Use this filter to modify the CSS that is compiled and cached for each Beaver Builder layout.

```php
function my_builder_render_css($css, $nodes, $global_settings)
{
  $css .= "#my-selector { property:value; }";
  return $css;
}
add_filter("fl_builder_render_css", "my_builder_render_css", 10, 3);
```

## Modify Beaver Builder CSS for CDNs

**Filter:** `fl_builder_render_css`

You can utilize the filter to modify URLs, adapting Beaver Builder CSS for CDNs and cloud storage buckets.

```php
add_filter(
  "fl_builder_render_css",
  function ($css, $nodes, $global_settings, $include_global) {
    $site_url = "https://example.com";
    $cdn_url = "https://123456abcdef.mycdn.net";

    $css = str_replace($site_url, $cdn_url, $css);
    return $css;
  },
  10,
  4
);
```

:::tip
This filter can also be used to solve a [403 error when CloudFlare or another CDN is used to serve images](/beaver-builder/troubleshooting/common-issues/cloudflare-and-403-errors-when-loading-background-images.md/#add-a-filter).
:::

## Modify the JavaScript compiled and cached

**Filter:** `fl_builder_render_js`

Use this filter to modify the JavaScript that is compiled and cached for each Beaver Builder layout.

```php
function my_builder_render_js($js, $nodes, $global_settings)
{
  $js .= 'console.log( "Hello World!" );';
  return $js;
}
add_filter("fl_builder_render_js", "my_builder_render_js", 10, 3);
```

## Modify Beaver Builder JavaScript for CDNs

**Filter:** `fl_builder_render_js`

You can utilize the filter to modify URLs, adapting Beaver Builder JS for CDNs and cloud storage buckets.

```php
add_filter(
  "fl_builder_render_js",
  function ($js, $nodes, $global_settings, $include_global) {
    $site_url = "https://example.com";
    $cdn_url = "https://123456abcdef.mycdn.net";

    $js = str_replace($site_url, $cdn_url, $js);
    return $js;
  },
  10,
  4
);
```

## Modify the config array for a field

**Filter:** `fl_builder_render_settings_field`

Use this filter to modify the config array for a field before it is rendered.

**Example:**

```php
function my_builder_render_settings_field($field, $name, $settings)
{
  $field["default"] = "My Default Value";
  return $field;
}
add_filter(
  "fl_builder_render_settings_field",
  "my_builder_render_settings_field",
  10,
  3
);
```

## Don't render shortcodes in the Beaver Builder editor

**Filter:** `fl_builder_render_shortcodes`

Use this filter to prevent Beaver Builder from rendering shortcodes in the editor. It is useful if you don’t want shortcodes rendering while the builder UI is active.

**Example:**

```php
function my_builder_render_shortcodes($render)
{
  if (FLBuilderModel::is_builder_active()) {
    remove_filter("the_content", "do_shortcode", 11);
    return false;
  }
  return $render;
}
add_filter("fl_builder_render_shortcodes", "my_builder_render_shortcodes");
```

## Change defaults for editor settings

**Filter:** `fl_builder_settings_form_defaults`

Use this filter to change the defaults for any of the settings forms in Beaver Builder, including global, row, column, and module settings.

**Example:**

```php
function my_builder_settings_form_defaults($defaults, $form_type)
{
  if ("global" == $form_type) {
    $defaults->default_heading_selector = ".my-heading-selector";
  }

  return $defaults; // Must be returned!
}
add_filter(
  "fl_builder_settings_form_defaults",
  "my_builder_settings_form_defaults",
  10,
  2
);
```

## Modify the upgrade URL in Beaver Builder Lite

**Filter:** `fl_builder_upgrade_url`

Use this filter to modify the upgrade URL in Beaver Builder Lite. This is useful to add an affiliate ID.

**Example:**

```php
function my_bb_upgrade_link()
{
  return "YOUR_LINK_HERE";
}
add_filter("fl_builder_upgrade_url", "my_bb_upgrade_link");
```
