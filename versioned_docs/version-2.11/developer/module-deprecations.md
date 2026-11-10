---
id: module-deprecations
title: Module Deprecations
sidebar_label: Module Deprecations
---

Module deprecations is a new API in Beaver Builder that allows you to deprecate certain parts of a module in favor of newer code without affecting existing layouts.

### Why is This Important

Module deprecations are important because making significant changes to a module could change the layout of published pages, leading to a poor user experience.

Additionally, we're working towards leaner data handling in Beaver Builder. Currently, when you save a module, _all_ of the settings are saved, even ones you didn't change. In the future, we'd like to only save the settings you changed, making it imperative we have a way to deprecate defaults. Otherwise, if you changed a default that wasn't saved, a module in a published layout could change.

:::info

For those building modules as blocks, this is already the case. Only the settings that have changed are saved, making it imperative you deprecate any changes to the defaults.

:::

### Filtering Settings Instead of Deprecation

In some cases, you won't need to deprecate anything. Instead, you can filter the module's settings to make backward-compatible changes before it is saved or rendered. Our [Settings Compatibility documentation](custom-modules/helpers/#settings-compatibility-helper) has more info if that is a better approach for what you are trying to do.

### Module Deprecation Examples

We've already used this new API in Beaver Builder 2.9 to remove the wrapper divs from all of the basic modules. You'll see this most notably in the heading module, though others serve as good examples as well. If you need more references than this doc covers, those modules are a good place to look.

### How Does it Work?

The module deprecations API works by sticking a version number on each module when added to the layout. If no deprecated versions are defined, the version will be 1. If deprecated versions are defined, the highest version number + 1 will be used as the latest instead.

That version number is used to load the code associated with it. For example, let's say you deprecated a module's `frontend.php` file and are now on version 2 of the module. For any modules on version 1, `my-module/deprecated/v1/includes/frontend.php` will be loaded instead of the latest at `my-module/includes/frontend.php`.

### Registering Deprecations

Three parts of a module can currently be deprecated: **config, files, and defaults.** That is done by adding a `deprecated.php` file in the top-level module directory and calling `FLBuilder::register_module_deprecations` as shown below.

All of the deprecations for a module must live under an array key in the deprecations array that corresponds to the version with the letter `v` as a prefix. Version numbers must be integers resulting in `v1`, `v2`, `v3`, etc. for versions.

```php
FLBuilder::register_module_deprecations( 'my-module', [
	'v1' => [
		'config' => [
			'include_wrapper' => true,
		],
		'files' => [
			'includes/frontend.php',
			'css/frontend.css',
		],
		'defaults' => [
			'key' => 'value'
		],
	],
] );
```

In the example above, we are deprecating all three parts of the module as version 1. Any existing module will use these deprecations, while any new module added to the page will be version 2 and use the default code.

#### Deprecating Config

In the example, we are deprecating the `include_wrapper` config for the module by setting it to `true` for version 1. In our main module file, we set it to `false` so version 2 modules won't have the wrapper.

```php
class MyModule extends FLBuilderModule {
	public function __construct() {
		parent::__construct( [
			'name' => __( 'my-module' ),
			'include_wrapper' => false,
			...
		] );
	}
}
```

While that's all that needs to be done to deprecate the wrapper for new modules, you may have HTML, CSS, or JS code that expects it to be present. If so, you'll need to deprecate some files as well.

#### Deprecating Files

Any module file except the main class can be deprecated using relative paths in the `files` array, as shown in the example above. Those files must live in a top-level directory named `deprecated` followed by a subdirectory with the version number (e.g., `v1`).

If you deprecate the files in the example, your directory structure should look like this...

```bash
my-module
├── css
│   └── frontend.css
├── includes
│   └── frontend.php
├── deprecated
│   └── v1
│       ├── css
│       │   └── frontend.css
│       └── includes
│           └── frontend.php
├── deprecated.php
└── my-module.php
```

By deprecating these files, any modules on version 1 will use the files under `deprecated/v1`, while new modules will use the latest code at the top level.

#### Deprecating Defaults

Deprecating defaults allows you to deprecate the defaults for any of the settings your module has defined. For example, if you have a text field...

```php
'my_text' => [
'type' => 'text',
'label' => __( 'My Text' ),
'default' => 'Hello World!',
],
```

The default can be deprecated like so...

```php
FLBuilder::register_module_deprecations( 'my-module', [
	'v1' => [
		'defaults' => [
			'my_text' => 'Foo Bar!'
		],
	],
] );
```
