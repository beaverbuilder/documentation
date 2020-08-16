---
id: disable-schema-markup-beaver-builder
title: Disable schema markup in Beaver Builder
sidebar_label: Disable schema markup in Beaver Builder
---

If you'd like to disable [Schema](https://schema.org/) markup within Beaver Builder, use the filter:

```php
add_filter( 'fl_builder_disable_schema', '__return_true' );
```
