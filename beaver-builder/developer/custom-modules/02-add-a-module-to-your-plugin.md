---
id: 02-add-a-module-to-your-plugin
title: '02: Add a module to your plugin'
sidebar_label: '02: Add a module to your plugin'
slug: add-a-module-to-your-plugin
---

To add a module, create a folder in your plugin folder and **give it a unique name using lowercase letters and dashes** such as _`my-module`_.

:::caution
Module folders and file names must be namespaced with a prefix to avoid conflicts with core modules.  

For example, if your name is **John** and you would like to create a button module, your module path
would be `john-button/john-button.php`, because a non-prefixed `button/button.php` would be overridden by the core button module.

If two modules have the same folder name or slug, even if they are in different plugins, there will be
a conflict.
:::

Next, create a PHP file within your module folder and give it the same name, such as _`my-module.php`_.

Finally, you will need to configure your module's class so it can be registered with Beaver Builder in the next step. To do so, copy and paste the code below into your module's PHP file. For more detailed information about the module class, see the [Module Property Reference](08-module-property-reference.md) and [Module Method Reference](09-module-method-reference.md) sections.

This code block contains a `group` item in the array, which defines the group in which your module will appear in the Content Panel in the Beaver Builder editor.

:::info
Rename the class to reflect the name of your module and change out the module info in the construct method.
:::

```php
class MyModuleClass extends FLBuilderModule {

  public function __construct()
  {
    parent::__construct(array(
      'name'            => __( 'My Module', 'fl-builder' ),
      'description'     => __( 'A totally awesome module!', 'fl-builder' ),
      'group'           => __( 'My Group', 'fl-builder' ),
      'category'        => __( 'My Category', 'fl-builder' ),
      'dir'             => MY_MODULES_DIR . 'my-module/',
      'url'             => MY_MODULES_URL . 'my-module/',
      'icon'            => 'button.svg',
      'editor_export'   => true, // Defaults to true and can be omitted.
      'enabled'         => true, // Defaults to true and can be omitted.
      'partial_refresh' => false, // Defaults to false and can be omitted.
    ));
  }
}
```

### Include Wrapper parameter
This determines whether the normal Beaver Builder wrapper divs are included when rendering.  This option defaults to false.  If changed to true, it will reduce the output of div wrappers in the DOM.

Once you've configured your module class, you'll need to include it within your plugin. To do so, open your main plugin file and include it as shown in the following example.

```php
function my_load_module_examples() {
  if ( class_exists( 'FLBuilder' ) ) {
      require_once 'my-module/my-module.php';
  }
}
```

### Accepts parameter
This defaults to empty.  This parameter determines whether or not modules can be nested inside the module.

Once you've configured your module class, you'll need to include it within your plugin. To do so, open your main plugin file and include it as shown in the following example.

```php
function my_load_module_examples() {
  if ( class_exists( 'FLBuilder' ) ) {
      require_once 'my-module/my-module.php';
  }
}
```
### Next Steps
Now that you've added a module to your plugin, it's time to move on to the next step to register it with Beaver Builder and create the settings form.
