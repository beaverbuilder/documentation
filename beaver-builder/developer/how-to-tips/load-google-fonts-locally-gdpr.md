---
id: load-google-fonts-locally-gdpr
title: Load Google Fonts Locally (GDPR)
sidebar_label: Load Google Fonts Locally (GDPR)
---

Beaver Builder accesses Google Fonts through its Content Delivery Network (CDN). Google claims to be compliant with GDPR in their use of personal information. If you still want to load Google fonts locally from your own server, this article has the procedure to disable the remote calls to Google Fonts server.

:::caution

The complete Google Fonts library will continue to appear in the typography dropdown menu within Beaver Builder modules and the BB Theme Customizer options, but cannot be used unless you load them locally.

:::

## Beaver Builder (plugin)

You can stop all remote calls to Google Fonts made by Beaver Builder by adding the following code to your child theme’s _functions.php_ file.  
  
```php
// Beaver Builder module enqueued Google Fonts
add_filter( 'fl_builder_google_fonts_pre_enqueue', function( $fonts ) {
  return array();
} );
```

## BB Theme

You can stop all remote calls to Google Fonts made by the BB Theme by adding the following code to your child theme’s _functions.php_ file.
  
```php
// BB Theme enqueued Google Fonts
add_action( 'wp_enqueue_scripts', function() {
  global $wp_styles;
    if ( isset( $wp_styles->queue ) ) {
      foreach ( $wp_styles->queue as $key => $handle ) {
        if ( false !== strpos( $handle, 'fl-builder-google-fonts-' ) ) {
          unset( $wp_styles->queue[ $key ] );
        }
      }
    }
}, 101 );
```

## Loading Google Fonts Locally

If you want to load Google Fonts locally, you need to download the font files and add them to your site. You can do this by following the steps in the [Google Fonts self-hosting guide](https://fonts.google.com/knowledge/using_type/self_hosting_web_fonts) or by using a third-party font plugin.
