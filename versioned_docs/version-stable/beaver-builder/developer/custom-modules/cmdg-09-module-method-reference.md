---
id: cmdg-09-module-method-reference
title: 'CMDG 09: Module method reference'
sidebar_label: 'CMDG 09: Module method reference'
---

### add_css( $handle, $src, $deps, $ver, $media )  
Use this method to register and enqueue additional styles for your module.
Using this method ensures that your styles will only be loaded when the module
is present on the page, instead of loading it on every page. This method can
be used just like you would use the `wp_enqueue_style` function.

Example:

```php
// Already registered by Beaver Builder.
$this->add_css( 'font-awesome' );

// Register and enqueue your own.
$this->add_css( 'example-lib', $this->url . 'css/example-lib.css' );
```

### add_js( $handle, $src, $deps, $ver, $in_footer )  
Use this method to register and enqueue additional scripts for your module.
Using this method ensures that your scripts will only be loaded when the
module is present on the page, instead of loading it on every page. This
method can be used just like you would use the `wp_enqueue_script` function.

Example:

```php
// Already registered by Beaver Builder.
$this->add_js( 'jquery-bxslider' );

// Register and enqueue your own.
$this->add_js( 'example-lib', $this->url . 'js/example-lib.js', array(), '', true );
```

### remove()  
This method should not be called directly by developers. It is called by
Beaver Builder when a module is being removed from the page. Developers should
override this method in their module class if they need to work with a module
before it is removed from the page.

Example:

```php
public function remove() {     
  if( !empty( $this->settings->photo_path ) )
      unlink( $this->settings->photo_path );
}
```

### delete()  
This method should not be called directly by developers. It is called by
Beaver Builder when a module is being deleted. Developers should override this
method in their module class if they need to work with a module before it is
deleted.

:::note **Note**
This method is called when a module is updated and when it's removed
from the page and should be used for things like clearing photo cache from
Beaver Builder's cache directory. If you only need to run logic when a module
is actually removed from the page, use the remove method instead.
:::

Example:

```php
public function delete() {     
  if( !empty( $this->settings->photo_path ) )
      unlink( $this->settings->photo_path );
}
```

### enqueue_scripts()  
This method should not be called directly by developers. It is called by
Beaver Builder when module scripts and styles are being enqueued. Developers
should override this method in their module class if they need to
conditionally enqueue styles and scripts for their modules.

Example:

```php
public function enqueue_scripts()
{
  if ( $this->settings && $this->settings->link_type == 'lightbox' ) {
      $this->add_js( 'jquery-magnificpopup' );
      $this->add_css( 'jquery-magnificpopup' );
  }
}
```

### update( $settings )  
This method should not be called directly by developers. It is called by
Beaver Builder when a module is being updated and passed the module settings
that can be modified before they are saved to the database. Developers should
override this method in their module class if they need to work with settings
before they are saved.

Example:

```php
public function update( $settings )
{
  if( empty( $settings->my_field ) )
      $settings->my_field = 'Default Text';  

  return $settings;
}
```
