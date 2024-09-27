---
id: container-modules
title: Container Modules
sidebar_label: Container Modules
---

Container modules are modules that can accept other modules as children, similar to rows and columns. The Box and Loop modules in Beaver Builder are examples of container modules.

Creating a container module is very similar to creating a regular module, with a few additional things you need to do.

### Excluding Wrappers

While this isn't necessary for container modules, it's often desired. By default, the builder will include legacy wrapper divs on modules. To exclude those, you need to set `'include_wrapper' => false` in the module config and render the module attributes on the top-level element in the `frontend.php` file.

```php
<?php

$custom_attrs = [
  'class' => [
  	'my-class-name',
  ],
];

?>
<div <?php $module->render_attributes( $custom_attrs ); ?>>
...
</div>
```

:::info

The module will not work correctly in the builder if you fail to render attributes on the top-level element.

:::

### Define Accepted Children

In order for the module to act as a container, you need to define what children it can accept. By placing `'accepts' => 'all'` in the module config, your module will be able to accept any type of module, including itself.

If you'd like to limit it to only certain modules, you can define an array of modules slugs you want it to accept like so:

```php
class MyModule extends FLBuilderModule {
 	public function __construct() {
		parent::__construct( [
 			'name' => __( 'My Module' ),
 			'accepts' => [ 'heading', 'rich-text', 'button' ],
 			...
		] );
 	}
}
```

### Render Children

In order for your module to display its children, you need to render them in the `frontend.php` file for the module by calling `$module->render_children`. Once you've set `accepts` in the module config and rendered the children, the module will act as a container.

```php
<div <?php $module->render_attributes(); ?>>
 	<?php $module->render_children(); ?>
</div>
```

:::info

Calling `$module->render_children` should be done in the top-level element for the module. The builder expects the top-level element to be the sortable element for drag and drop operations. If you need to render children in a nested structure, use the following instead:

```php
$module->render_children_with_wrapper( 'div', [
 	'class' => [
		'my-class-name',
 	],
] );
```

:::

### Child Template (Optional)

By default, when you drop a container module on the page, it is empty without any children. However, it is possible to define a default layout for container modules by setting a `template` in the module config.

The template config is an array of arrays for each child module you'd like rendered when the container is added to the page.

The format for each child array is:

```php]
[ $slug, $settings, $children ]
```

#### `$slug` String

The child module's slug such as `heading`, `button`, or `rich-text`.

#### `$settings` Array

An array of default settings for this child module.

#### `$children` Array

An array of child module arrays if this is a nested container module. Has no effect on regular modules.

#### Example Template

This is an example child module template with a heading and rich text.

```php
class MyModule extends FLBuilderModule {
 	public function __construct() {
		parent::__construct( [
 			'name' => __( 'My Module' ),
 			'template' => [
				[
 					'heading',
 					[
						'heading' => 'Lorem Ipsum Dolor',
						'tag' => 'h3',
 					],
				],
				[
 					'rich-text',
 					[
						'text' => 'Suspendisse condimentum non nulla.'
 					],
				],
 			],
 			...
		] );
 	}
}
```
