---
id: disable-schema-markup-bb-theme
title: Disable schema markup in the BB Theme
sidebar_label: Disable schema markup in the BB Theme
---

If you'd like to disable [Schema](https://schema.org/) markup within Beaver Builder, use the filter:

```php
add_filter( 'fl_theme_disable_schema', '__return_true' );
```
