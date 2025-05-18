---
id: map-module-filter-google
title: Filter Google Map arguments in the Map module
sidebar_label: Google Map arguments in the Map module
---

The `fl_builder_map_args` filter lets you add or change Google map arguments to filter the location on the map, add language parameters for WPML, or even change the key. Here's an example.

```php
add_filter( 'fl_builder_map_args', function( $args, $settings ) {
    if ( defined( 'ICL_LANGUAGE_CODE' ) ) {
        $args['language'] = ICL_LANGUAGE_CODE;
    }
    return $args;
}, 10, 2 );
```
