---
id: 01-create-a-plugin
title: '01: Create a plugin'
sidebar_label: '01: Create a plugin'
slug: create-a-plugin
---

To create custom modules, you will first need to create a simple plugin. This will ensure that your modules are not overwritten when updating Beaver Builder via the remote updates interface.

## Create a Plugin

To create a plugin, navigate to the WordPress plugins directory located in _`/wp-content/plugins`_ and create a new folder. You should give this folder a unique name using lowercase letters and dashes such as _`my-builder-modules`_.

Next, create a PHP file within your new folder and give it the same name such as _`my-builder-modules.php`_.

Finally, copy and paste the code below into your plugin's PHP file and edit the information such as Plugin Name and Author. You should also rename the constants `MY_MODULES_DIR` and `MY_MODULES_URL` to match your plugin's
namespace, keeping the `_DIR` and `_URL` suffixes.

```php
/**
 * Plugin Name: My Custom Modules
 * Plugin URI: http://www.mywebsite.com
 * Description: Custom modules for the Beaver Builder Plugin.
 * Version: 1.0
 * Author: Your Name
 * Author URI: http://www.mywebsite.com
 */
define( 'MY_MODULES_DIR', plugin_dir_path( __FILE__ ) );
define( 'MY_MODULES_URL', plugins_url( '/', __FILE__ ) );

function my_load_module_examples() {
  if ( class_exists( 'FLBuilder' ) ) {
      // Include your custom modules here.
  }
}
add_action( 'init', 'my_load_module_examples' );
```

Now that you've created a plugin, you can activate it within the WordPress Admin Dashboard and move on to the next step.
