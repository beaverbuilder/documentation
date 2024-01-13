---
id: 20-module-aliases
title: '20: Module Aliases'
sidebar_label: '20: Module Aliases'
slug: module-aliases
---
Module aliases are a way to create copies of modules with pre-configured settings.  We use them in Beaver Themer and also with the Box Module presets.


## Themer Example
Here's an example from Themer that creates a Module alias of the Heading module to create an Archive Title Module without having to write a module from scratch. 

```
/**
 * Heading module alias for the archive title.
 *
 * @since 1.0
 */
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
This uses the Heading module, to prepopulate the Heading field to be connected to the Archive title.
