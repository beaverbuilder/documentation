---
id: limit-post-types-search-module
title: Limit post types in Search module results
sidebar_label: Limit post types in Search module results
---

By default, the Search module searches all post types on your site: pages, posts, and any custom post types that exist. You can limit the search to specific post types with some custom code. For example, you could search to the WooCommerce **product** post type only.

The code varies according to whether or not AJAX is enabled on your site.

## AJAX enabled

Set a filter that uses fl_builder_loop_query_args to specify which post types are allowed in search.
In the following code example, `post` and `product` are specified in the array as the post types to search. Add your code to *functions.php* in your child theme.

```php
add_filter( 'fl_builder_loop_query_args', function( $args ){
	if ( isset( $args['s'] ) ) {
		$args['post_type'] = array( 'post', 'product' );
	}
	return $args;
});
```

:::note **Note**
The code affects all Search modules on your site.
:::

## AJAX disabled

If AJAX is disabled, use `pre_get_posts` instead. See [this WordPress documentation](https://developer.wordpress.org/reference/hooks/pre_get_posts/).
