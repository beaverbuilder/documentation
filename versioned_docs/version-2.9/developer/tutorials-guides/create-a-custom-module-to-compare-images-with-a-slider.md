---
id: create-a-custom-module-to-compare-images-with-a-slider
title: Create a custom module to compare images with a slider
sidebar_label: Create a custom module to compare images with a slider
---

In this tutorial, you'll create a module plugin for Beaver Builder that lets you
add a third-party jQuery plugin called TwentyTwenty to your layouts.

The [TwentyTwenty jQuery plugin by ZURB](https://github.com/Pross/custom-module-example-twentytwenty) compares two images with a sliding bar, as shown in the following animation. This is useful for comparing two images with the
same dimensions.

![](/img/dev-create-slider-module-1.gif)

You can see a working example and all the code contained in this tutorial at
<https://github.com/Pross/custom-module-example-twentytwenty>.

## 1. Create the plugin

Create the folders, files, and code for WordPress to recognize the plugin
correctly, display the information on the WordPress plugins admin screen, and
load the module correctly.

1. Navigate to your WordPress plugins folder, typically *wp-content/plugins/*, and create a new subfolder named *custom-module-example-twentytwenty*.
2. Create a file in that subfolder called *fl-module-twentytwenty.php*.
3. Add the following code to create the name, description, and version information that WordPress uses on the plugins admin screen.

  ```php
  <?php
  /**
   * Plugin Name: Beaver Builder TwentyTwenty Module
   * Plugin URI: https://github.com/Pross/custom-module-example-twentytwenty
   * Description: An example plugin that's demonstrates how to create a simple module for BeaverBuilder using a jQuery plugin.
   * Version: 1.0
   * Author: The Beaver Builder Team
   * Author URI: https://www.wpbeaverbuilder.com
  */
  ```

4. Add the code for the main plugin class, which will load the module file:

  ```php
  <?php
  /**
   * Plugin Name: Beaver Builder TwentyTwenty Module
   * Plugin URI: https://github.com/Pross/custom-module-example-twentytwenty
   * Description: An example plugin that's demonstrates how to create a simple module for BeaverBuilder using a jQuery plugin.
   * Version: 1.0
   * Author: The Beaver Builder Team
   * Author URI: https://www.wpbeaverbuilder.com
   */
  class TwentyTwentyExamplePlugin {

    public static function init() {

      if( class_exists( 'FLBuilder' ) ) {
      	require_once 'modules/twentytwenty/twentytwenty.php';
      }
    }
  }
  add_action( 'init', array( 'TwentyTwentyExamplePlugin', 'init' ) );
  ```

## 2. Create the module folders and files

1. In the *custom-module-example-twentytwenty* folder, create a subfolder called *modules*.
2. Inside that folder, create another folder called *twentytwenty*.  
  This will be the folder for the Beaver Builder module's code and assets.

3. Now create a new file in your *twentytwenty* module folder called *twentytwenty.php*.  
  This will be the module file.

## 3. Register the module

Add the following code to *twentytwenty.php*.  
This code extends the `FLBuilderModule` class to register the module as a
BeaverBuilder module.

```php
<?php
/**
 * This is an example module that uses the TwentyTwenty jQuery plugin.
 *
 * @class TwentyTwentyExampleModule
 */
class TwentyTwentyExampleModule extends FLBuilderModule {

  /**
   * The module construct, we need to pass some basic info here.
   */
  public function __construct() {

    parent::__construct(array(
      'name'            => __( 'Twenty Twenty', 'fl-builder' ),
      'description'     => __( 'An basic example module using jQuery TwentyTwenty.', 'fl-builder' ),
      'category'        => __( 'Example Modules', 'fl-builder' ),
      'dir'             => __DIR__,
      'partial_refresh' => true,
      'url'             => plugins_url( '', __FILE__ ),
    ));
  }
}
```

## 4. Add module assets

Put three jQuery plugin files into the right folders and add code for the
module assets.

1. Download the TwentyTwenty zip file from <https://zurb.com/playground/twentytwenty>.
2. Unzip the file.
3. In the *modules/twentytwenty* folder create two new folders named *css* and *js*.
4. Upload *twentytwenty.css* into the *css* folder.
5. Upload *jquery.twentytwenty.js* and *jquery.event.move.js* into the *js* folder.
6. Open the module file again and add the following code into the `__construct` function.  
  This code enqueues the assets properly when the module is on the page.

  ```php
  <?php
  /**
   * This is an example module that uses the TwentyTwenty jQuery plugin.
   *
   * @class TwentyTwentyExampleModule
   */
  class TwentyTwentyExampleModule extends FLBuilderModule {

    /**
     * The module construct, we need to pass some basic info here.
     */
    public function __construct() {

      parent::__construct(array(
        'name'            => __( 'Twenty Twenty', 'fl-builder' ),
        'description'     => __( 'An basic example module using jQuery TwentyTwenty.', 'fl-builder' ),
        'category'        => __( 'Example Modules', 'fl-builder' ),
        'dir'             => __DIR__,
        'partial_refresh' => true,
        'url'             => plugins_url( '', __FILE__ ),
      ));

      /**
       * Now we include our js and css files using the module classes built in methods.
       */
      $this->add_js( 'jquery-event-move',   $this->url . 'js/jquery.event.move.js',   array( 'jquery' ) );
      $this->add_js( 'jquery-twentytwenty', $this->url . 'js/jquery.twentytwenty.js', array( 'jquery' ) );
      $this->add_css( 'twentytwenty',       $this->url . 'css/twentytwenty.css' );
    }
  }
  ```

## 5. Add module options

The module will have two options, one for each photo. The following code uses
the `FLBuilder::register_module` method to register the two options.

Add the following code to the bottom of *twentytwenty.php*.

```php
/**
 * Register the module and its form settings.
 * We are using a very simple form here with only two options, photo_one and photo_two.
 */
FLBuilder::register_module( 'TwentyTwentyExampleModule', array(
  'general' => array(
    'title' => __( 'General', 'fl-builder' ),
    'sections' => array(
      'general' => array(
        'title' => __( 'Section Title', 'fl-builder' ),
        'fields' => array(
        	'photo_one' => array(
            'type' => 'photo',
            'label' => __( 'Photo One', 'fl-builder' ),
            'preview' => array(
              'type' => 'none',
            ),
          ),
          'photo_two' => array(
          	'type' => 'photo',
          	'label' => __( 'Photo Two', 'fl-builder' ),
          	'preview' => array(
          		'type' => 'none',
          	),
          ),
      	),
      ),
    ),
  ),
));
```

## 6. Create frontend.php to render the module

For any Beaver Builder module to render, it needs a *frontend.php* file.

1. Create a new folder called *includes* inside the *modules/twentwenty* folder.
2. Create a new file *frontend.php* in the *includes* folder.
3. Add the following code.  
  This will be the HTML output by the module when it is inserted into a layout.

  ```php
  <?php

  /**
   * This file should be used to render each module instance.
   * You have access to two variables in this file:
   *
   * $module An instance of your module class.
   * $settings The module's settings.
   *
   */

  ?>
  <div class="fl-twenty-twenty twentytwenty-container">

   <!-- The before image is first -->
   <img src="<?php echo $settings->photo_one_src; ?>" />
   <!-- The after image is last -->
   <img src="<?php echo $settings->photo_two_src; ?>" />
  </div>
  ```

As you can see this code simply creates a `<div>` with the two classes `fl-
twenty-twenty` and `twentytwenty-container` and includes the two images using
the settings we previously registered.

The TwentyTwenty jQuery plugin will do the rest.

## 7. Create frontend.js.php to tie it together

Now add the jQuery snippet needed to make all this work.

1. Create a file named *frontend.js.php* in the *includes* folder.
2. Add the following code.

  ```js
  jQuery(function($) {
    $('.fl-node-<?php echo $id; ?> .fl-twenty-twenty').twentytwenty();
  });
  ```


## 8. Test your new module

1. In the WordPress admin panel, click **Plugins** and find your new plugin listed. As determined by the code you added in Task 1, the plugin name is **Beaver Builder TwentyTwenty Module**.
2. Activate the plugin.
3. Open a page for editing in Beaver Builder and click the Plus button to open the Content panel.
4. Search for **TwentyTwenty** or scroll to the last section labeled **Example modules** and try using your new module in a layout  
If you can't see the images, clear your caches.
