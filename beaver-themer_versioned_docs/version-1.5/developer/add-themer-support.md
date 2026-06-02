---
id: add-themer-support
title: Add Themer Support
sidebar_label: Add Themer Support
---

Most themes support Archive, Singular, and 404 layout types out of the box. However, to support the Header, Footer, and Part layout types, the theme must allow its header, footer, and parts to be removed using hooks.

See the [list of themes that are currently supported](/beaver-themer/developer/add-themer-support). If your theme isn't currently supported, you can add support for headers, footers, and parts by following the instructions below.

## Add Header & Footer Support

There are other ways than using hooks to remove the theme's headers and footers, but using hooks is the easiest and cleanest. For example, in Genesis you can remove the header with the following code.

```php
remove_action( 'genesis_header', 'genesis_do_header' );
```

If your theme's header and footer can be removed with hooks, the first step to providing support for Beaver Themer is by declaring it on the `after_setup_theme` action in your _functions.php_ file:

```php
add_action( 'after_setup_theme', 'my_theme_header_footer_support' );

function my_theme_header_footer_support() {
  add_theme_support( 'fl-theme-builder-headers' );
  add_theme_support( 'fl-theme-builder-footers' );
}
```

The next step varies from theme to theme, but the general idea is to check to see if a header or footer exists for the current page. If it does, remove the theme's default header or footer and add an action to render the header or footer built by Beaver Themer. Here's what the code looks like to do that for Genesis:

```php
add_action( 'wp', 'my_theme_header_footer_render' );

function my_theme_header_footer_render() {
  // Get the header ID.
  $header_ids = FLThemeBuilderLayoutData::get_current_page_header_ids();

  // If we have a header, remove the theme header and hook in Beaver Themer'
  if ( ! empty( $header_ids ) ) {
    remove_action( 'genesis_header', 'genesis_do_header' );
    add_action( 'genesis_header', 'FLThemeBuilderLayoutRenderer::render_header' );
  }

  // Get the footer ID.
  $footer_ids = FLThemeBuilderLayoutData::get_current_page_footer_ids();

  // If we have a footer, remove the theme footer and hook in Beaver Themer.
  if ( ! empty( $footer_ids ) ) {
    remove_action( 'genesis_footer', 'genesis_do_footer' );
    add_action( 'genesis_footer', 'FLThemeBuilderLayoutRenderer::render_footer' );
  }
}
```

:::tip

If you're interested in an object-oriented approach to theme support, check out how we implemented Genesis support in the _extensions/themes/class-fl-theme-builder-support-genesis.php_ file.

:::

## Add Parts Support

Theme parts are references to actions in your theme that a layout can be hooked into. For example, if your theme has a `before_header` action, you can register that so Part layout types can be rendered there.

Adding support for part layout types is basically the same as adding support for headers and footers layout types. In fact, you can declare support for headers, footers, and parts at the same time:

```php
add_action( 'after_setup_theme', 'my_theme_header_footer_support' );

function my_theme_header_footer_support() {
  add_theme_support( 'fl-theme-builder-headers' );
  add_theme_support( 'fl-theme-builder-footers' );
  add_theme_support( 'fl-theme-builder-parts' );
}
```

After you've declared support for parts, you can use the `fl_theme_builder_part_hooks` filter to register your parts. The function for your filter should return an array of arrays for each group of parts, as shown below. Within the hooks array, set your actions to the array key, and set the human-readable label to the array value.

Here's an example of what that would look like for Genesis:

```php
add_filter( 'fl_theme_builder_part_hooks', 'my_theme_register_part_hooks' );

function my_theme_register_part_hooks() {
  return array(
    array(
      'label' => 'Header',
      'hooks' => array(
        'genesis_before_header' => 'Before Header',
        'genesis_after_header'  => 'After Header',
      )
    ),
    array(
      'label' => 'Content',
      'hooks' => array(
        'genesis_before_content' => 'Before Content',
        'genesis_after_content'  => 'After Content',
      )
    ),
    array(
      'label' => 'Footer',
      'hooks' => array(
        'genesis_before_footer' => 'Before Footer',
        'genesis_after_footer'  => 'After Footer',
      )
    )
  );
}
```
