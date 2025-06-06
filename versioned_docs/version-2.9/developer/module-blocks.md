---
id: module-blocks
title: Module Blocks
sidebar_label: Module Blocks
---

Module blocks are modules that work in the WordPress block editor. This is useful if you want to create a module that can be used in both Beaver Builder and the WordPress block editor.

These modules are built the same way regular modules are built and can be set up to work in the block editor by setting `'block_editor' => true` in your module config.

```php
class MyModule extends FLBuilderModule {
  public function __construct() {
  	parent::__construct( [
  		'name' => __( 'My Module' ),
  		'block_editor' => true,
  		...
  	] );
  }
}
```

While modules should work the same in both editors, they are two very different environments, so inconsistencies may occur. The most common issues are almost always with module JavaScript. So, be sure to double check that if you run into issues.

:::info

Modules in the block editor are disabled by default. To enable modules in the block editor, go to Settings > Beaver Builder > Blocks and select the modules you'd like to enable.

:::
