---
id: customize-field-connections-themer
title: Customize field connections
sidebar_label: Customize field connections
---

There are several ways to customize field connections:

* Add custom connections to the field connections menu
* Create a custom settings form for field connections
* Add a new group to organize field connections displayed in the connections menu
* Add support for field connections to your module fields

## Add New Connections

You can use the APIs to add custom connections to the field connections menu in order to connect any kind of data you want.

There are three main methods for adding new connections:

* `FLPageData::add_post_property( $key, $config )`  
Adds a connection related to posts.

* `FLPageData::add_archive_property( $key, $config )`  
Adds a connection related to archives.

* `FLPageData::add_site_property( $key, $config )`  
Adds a connection related to the site.

Use these methods to add your connections within the `fl_page_data_add_properties` action. Each method accepts a key for your connection and a config array.

:::caution
Be sure to namespace the key for your connection in order to avoid possible collisions with other custom connections. For example, if your connection is called Post Title, the key should be `my_namespace_post_title`, where *my_namespace* is your custom namespace.
:::

The following code example shows the method `FLPageData::add_post_property()` used within the `fl_page_data_add_properties` action.

```php
add_action( 'fl_page_data_add_properties', function() {

	FLPageData::add_post_property( 'my_connection', array(
		'label'   => 'My Connection',
		'group'   => 'general',
		'type'    => 'string',
		'getter'  => 'my_connection_getter',
	) );
} );

function my_connection_getter() {
	return 'My text';
}
```

The config array accepts the following properties:

**label (required)**  
 The label for your connection that will show in the menu.

**group (required)**  
  The group you want your connection to appear in. Currently, the following groups are built in (array key values in parentheses):
  
* General (`general`)
* Archives (`archives`)
* Posts (`posts`)
* Comments (`comments`)
* Author (`author`)
* User (`user`)
* Site (`site`)
* Advanced (`advanced`)
* Advanced Custom Fields (`acf`)
* BigCommerce (`bigcommerce`)
* Easy Digital Downloads (`edd`)
* The Events Calendar (`the-events-calendar`)
* WooCommerce (`woocommerce`)

See the section below to [add custom groups](customize-field-connections-themer.md/#adding-custom-groups).

**type (required)**
The type of connection. Use this when you connect a field to indicate what type of connections are available. For example, when you add a text field to a settings form, you can indicate that all of the string and HTML-based connections are available.

You can set the type to anything you want. However, we recommend that you stick with the built-in connection types if you want your connections to appear in built-in modules. Currently, the following connection types are built in:

* color
* string
* html
* photo
* multiple-photos
* url
* custom_field

**getter (required)**
A reference to a function or class method that is used to retrieve the data for your connection.

## Add a Settings Form

Creating custom forms for field connections is very similar to [creating custom modules](/beaver-builder/developer/custom-modules). There are three main methods for adding settings, the choice of which depends on the type of connection:

* `FLPageData::add_post_property_settings_fields( $key, $config )`  
Adds settings to a post connection.

* `FLPageData::add_archive_property_settings_fields( $key, $config )`  
Adds settings to a archive connection.

* `FLPageData::add_site_property_settings_fields( $key, $config )`  
Adds settings to a site connection.

Each method accepts a key for your form and a config array.

:::caution
Be sure to namespace the key for your form in order to avoid possible collisions with other forms. For example, if your form is for the post title, the key should be `my_namespace_post_title_form`, where *my_namespace* is your custom namespace.
:::

The following code example shows the use of the method that adds settings to a post connection.

```php
FLPageData::add_post_property_settings_fields( 'my_connection', array(
	'css'    => 'https://www.mysite.com/path-to-settings.css',
	'js'     => 'https://www.mysite.com/path-to-settings.js',
	'my_setting' => array(
		'type'          => 'text',
		'label'         => 'My Setting'
	)
) );
```

The config array for adding settings should have field config as discussed in the [custom module documentation](/beaver-builder/developer/custom-modules/index.md). It can also have a `css` and `js` property for defining CSS and JavaScript files that should be loaded along with your settings.

See also the Beaver Builder Plugin article about [customizing settings forms](/beaver-builder/developer/tutorials-guides/customize-settings-forms.md).

## Adding Custom Groups

You can add a group to the list of field connections. In the following screenshot, **Posts**, **Author**, and **User** are groups that organize the field connections.

![](/img/beaver-themer/developer--field-connection-api--1.jpg)

To add a new group, use the `FLPageData::add_group( $key, $config )` method, as shown in the following example:

```php
FLPageData::add_group( 'my_group', array(
	'label' => 'My Group'
) );
```

## Connect Module Fields

You can add support for field connections to your module fields by defining what kind of connections they should support. Use the `connections` property in the field config. The following code example shows how you would add support for all connections registered as strings:

```php
'text' => array(
	'type'          => 'text',
	'label'         => 'My Text Field',
	'connections'   => array( 'string' )
)
```

You can support multiple connection types:

```php
'text' => array(
	'type'          => 'text',
	'label'         => 'My Text Field',
	'connections'   => array( 'string', 'html', 'url' )
)
```

See the type section above for the list of built-in field types.

You can simply declare support for connections in your field config, and the rest is taken care of. In your module's _frontend.php_ file, you can access all of your settings on the `$settings` object, just as you normally would, whether they are connected or not. For example, if your setting key is `text`, you would still access it like this:

```php
<?php

echo $settings->text;
```
