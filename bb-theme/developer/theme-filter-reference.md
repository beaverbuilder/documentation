---
id: theme-filter-reference
title: Theme filter reference
sidebar_label: Theme filter reference
---

Theme hooks are now [auto-generated from the code](https://hooks.wpbeaverbuilder.com/bb-theme/). Some of the basic filters listed on that page are documented here. A visual layout of the more common theme hooks is displayed at [the ProBeaver site](https://probeaver.com/beaver-theme-hooks/).

### fl_font_subset

Use this filter to add subsets to a Google font chosen in the Customizer.

```php
function my_font_subset( $subset, $font ) {
  if ( $font == 'Acme' ) {
      $subset = '&subset=latin,latin-ext';
  }
  return $subset;
}
add_filter( 'fl_font_subset', 'my_font_subset', 10, 2 );
```

### fl_topbar_enabled

Use this filter to override the display of the theme’s top bar. Return `false` to hide it, `true` to show it.

```php
function my_theme_fl_topbar_enabled( $enabled ) {
  return $enabled;
}
add_filter( 'fl_topbar_enabled', 'my_theme_fl_topbar_enabled' );
```

### fl_fixed_header_enabled

Use this filter to override the display of the theme’s fixed header. Return `false` to hide it, `true` to show it.

```php
function my_theme_fl_fixed_header_enabled( $enabled ) {
  return $enabled;
}
add_filter( 'fl_fixed_header_enabled', 'my_theme_fl_fixed_header_enabled' );
```

### fl_header_enabled

Use this filter to override the display of the theme’s header. Return `false` to hide it, `true` to show it.

```php
function my_theme_fl_header_enabled( $enabled ) {
  return $enabled;
}
add_filter( 'fl_header_enabled', 'my_theme_fl_header_enabled' );
```

### fl_nav_toggle_text

Use this filter to change the text or icon that is shown in the mobile nav
toggle button.

```php
function my_nav_toggle_text( $text ) {
  return 'Main Menu';
}
add_filter( 'fl_nav_toggle_text', 'my_nav_toggle_text' );
```

### fl_footer_enabled

Use this filter to override the display of the theme’s footer. Return `false` to hide it, `true` to show it.

```php
function my_theme_fl_footer_enabled( $enabled ) {
  return $enabled;
}
add_filter( 'fl_footer_enabled', 'my_theme_fl_footer_enabled' );
```

### fl_social_icons

Use this filter to change the order of the social icons. The `$icons` parameter is an array of keys for each icon such as `“facebook”` or `“twitter”`.

```php
function my_social_icons( $icons ) {
  $icons = array(
    'facebook',
    'twitter',
    'google',
    'google-maps',
    'snapchat',
    'linkedin',
    'yelp',
    'xing',
    'pinterest',
    'tumblr',
    'vimeo',
    'youtube',
    'flickr',
    'instagram',
    'skype',
    'dribbble',
    '500px',
    'blogger',
    'github',
    'rss',
    'email',
    'wordpress',
    'tiktok',
    'spotify',
  );
  return $icons;
}
add_filter( 'fl_social_icons', 'my_social_icons' );
```
