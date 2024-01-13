---
id: 20-module-aliases
title: '20: Module Aliases'
sidebar_label: '20: Module Aliases'
slug: module-aliases
---
Module aliases are a way to create copies of modules with pre-configured settings without having to completely write a new module from scratch.   While the module aliases settings are pre-configuring to start, the settings can still be changed by the user. 

## Registering your Module Alias
Registering your Module Alias is done through the `FLBuilder::register_module_alias` method call. That method accepts two parameters: the name of your module class and an associative array of information for building your settings form with the pre-configured settings.

You can see examples uses of Module Aliases in Beaver Themer and with the Box Module preset options in Beaver Builder.  
## Examples

### Box Module Example
This creates an alias of the Box Module that to create a module for Horizontal Flex Columns.

```
FLBuilder::register_module_alias( 'horizontal-stack', [
	'module'      => 'box',
	'name'        => __( 'Flex Columns', 'fl-builder' ),
	'description' => __( 'A simple flex column', 'fl-builder' ),
	'category'    => __( 'Box', 'fl-builder' ),
	'icon'        => 'layout.svg',
	'settings'    => [
		'layout'         => 'flex',
		'flex_direction' => 'row',
		'child_flex'     => [ 'grow' => '1' ],
		'margin_top'     => '0',
		'margin_right'   => '0',
		'margin_bottom'  => '0',
		'margin_left'    => '0',
	],
	'template'    => [
		[ 'box', [] ],
		[ 'box', [] ],
		[ 'box', [] ],
	],
] );
```
### Themer Example
This creates a Module alias of the Heading module to create an Archive Title Module by pre-configuring the Heading field to be connected to the Archive title field connection. 

```
FLBuilder::register_module_alias( 'fl-archive-title', array(
	'module'      => 'heading',
	'name'        => __( 'Archive Title', 'bb-theme-builder' ),
	'description' => __( 'Displays the title for the current archive.', 'bb-theme-builder' ),
	'group'       => __( 'Themer Modules', 'bb-theme-builder' ),
	'category'    => __( 'Archives', 'bb-theme-builder' ),
	'enabled'     => FLThemeBuilderLayoutData::current_post_is( 'archive' ),
	'settings'    => array(
		'tag'         => 'h1',
		'connections' => array(
			'heading' => (object) array(
				'object'   => 'archive',
				'property' => 'title',
				'field'    => 'text',
			),
		),
	),
) );
```

