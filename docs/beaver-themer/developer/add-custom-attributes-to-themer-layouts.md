---
id: add-custom-attributes-to-themer-layouts
title: Add custom attributes to Beaver Themer layouts
sidebar_label: Add custom attributes to Beaver Themer layouts
---

You can easily add custom attributes when you need them for your Beaver Themer layouts. 
The code example below uses the `fl_render_content_by_id_attrs` filter to add the attribute(s) to your Beaver Themer layout whose ID you have specified in the code. This example will add an attribute of `role` with a value of `banner`. This is useful for [Header Layout Types](/beaver-themer/layout-types-modules/header-layout-type/themer-header-layout-type.md).

The code example below uses an ID of `2168` this is the ID of your Beaver Themer layout. To get the ID, copy the post number from the URL in your browser’s address bar, as shown in this screenshot.

![](/img/how-to-tips-get-slug-id-shortcode-2.jpg)

Substitute your own attribute name and value and your Themer layout ID in the code and place the code in
the _functions.php_ file of your child theme.

```php
add_filter( 'fl_render_content_by_id_attrs', function( $attrs, $post_id ) {
	
	if ( '2168' === $post_id ) {
		$attrs['role'] = 'banner';
	}
	
	return $attrs;
	
}, 10, 2 );
```

This example demonstrates how to use the filter to add multiple attributes to a Themer layout.

```php
add_filter( 'fl_render_content_by_id_attrs', function( $attrs, $post_id ) {
	
	if ( '2168' === $post_id ) {
		$attrs['role'] = 'banner';
		$attrs['data-foo'] = 'bar';
	}
	
	return $attrs;
	
}, 10, 2 );
```