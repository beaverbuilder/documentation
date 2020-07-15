---
id: cmdg-02-add-a-module-to-your-plugin
title: 'CMDG 02: Add a module to your plugin'
sidebar_label: 'CMDG 02: Add a module to your plugin'
---

To add a module, create a folder in your plugin folder and **give it a unique
name using lowercase letters and dashes** such as _my-module_.

:::important **Important:**
**Module folders and file names must be namespaced with a
prefix to avoid conflicts with core modules.**  

For example, if your name is
Justin Busa and you would like to create a button module, your module path
would be _jb-button/jb-button.php_ , because a non-prefixed _button/button._
_php_ would be overridden by the core button module.  

**If two modules have the
same folder name or slug, even if they are in different plugins, there will be
a conflict.**
:::

Next, create a PHP file within your module folder and give it the same name,
such as _my-module.php_.

Finally, you will need to configure your module's class so it can be
registered with Beaver Builder in the next step. To do so, copy and paste the
code below into your module's PHP file.

For more detailed information about the module class, see the [Module Property
Reference](/beaver-builder/developer/custom-modules/cmdg-08-module-property-reference.md) and [Module Method
Reference](/beaver-builder/developer/custom-modules/cmdg-09-module-method-reference.md) sections.

This code block contains a `group` item in the array, which defines the group
in which your module will appear in the Content panel in the Beaver Builder
editor.

:::note **Note** 
Rename the class to reflect the name of your module and change out
the module info in the construct method.
:

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

Once you've configured your module class, you'll need to include it within
your plugin. To do so, open your main plugin file and include it as shown in
the following example.

```php
function my_load_module_examples() {
  if ( class_exists( 'FLBuilder' ) ) {
      require_once 'my-module/my-module.php';
  }
}
```

Now that you've added a module to your plugin, it's time to move on to the
next step to register it with Beaver Builder and create the settings form.
