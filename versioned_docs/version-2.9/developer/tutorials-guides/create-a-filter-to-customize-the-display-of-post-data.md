---
id: create-a-filter-to-customize-the-display-of-post-data
title: Create a filter to customize the display of post data
sidebar_label: Create a filter to customize the display of post data
---

If you want to display a custom set of posts and custom post types (CPTs) in a Posts or Search module, you can create a filter to override query args in the `FLBuilderLoop` class.

:::info
This code applies to custom queries only and doesn't work with the main query. If you want to override the main query, see [this WordPress codex article.](https://developer.wordpress.org/reference/hooks/pre_get_posts/)
:::

## Code for a custom query that applies to the entire site

The following code applies to the whole site, so wherever you use a Posts or Search module, the display will show the post types that you enumerated in your array.

Add the following code to the _functions.php_ file in your child theme.

```php
function fl_builder_loop_query_args_filter( $query_args ) {
  $query_args['post_type'] = array( 'post', 'another-post-type', 'or-another-post-type' );
  return $query_args;
}
add_filter( 'fl_builder_loop_query_args', 'fl_builder_loop_query_args_filter' );
```

In Line 2, replace the post types in the array with the posts types that you want the custom query to display. In this example, the Posts or Search module will display three post types: standard posts, the posts belonging to a CPT called "another-post-type," and the posts from another CPT called "or-another-post-type".

:::info
In the Custom Query list on the **Content** tab in the Posts or Search module,
you'll still see the list of post types (Posts Pages, and any CPTs that you
have), but it won't matter which one you choose because this custom query is
overriding that selection.
:::

## Code that applies to specific pages, nodes, or custom IDs

In actual use, you probably want to add a conditional to make this query apply only to certain pages, nodes, or custom IDs. Here are a couple of code examples.

### Apply an override only to a Posts module on the home page

Suppose you want the Posts and Search modules to display both standard posts and WooCommerce products on the front page of your site. Use this code instead of the code in the previous section.

```php
function bb_custom_loop_query_args( $args ) {
  if ( is_front_page() ) {
    $args['post_type'] = array( 'post', 'product' );
  }
  return $args;
}
add_filter( 'fl_builder_loop_query_args', 'bb_custom_loop_query_args' );
```

### Apply an override to a specific Posts or Search module

The following code example displays both standard posts and WooCommerce products for a specific Posts module or Search module ID. Note that the conditional statement for the Search module is slightly different from that of the Posts module so we provide both code examples here.

1. Set a custom ID on the Posts or Search module.  
![](/img/dev-filter-post-data-1.png)
2. Add the following code, replacing `id` in Line 2 with the ID you assigned in the previous step.

**Posts module:**  
```php
function fl_builder_loop_query_args_filter( $query_args ) {
  if ( 'example-module' == $query_args['settings']->id ) {
    $query_args['post_type'] = array( 'post', 'product' );
  }
  return $query_args;
}
add_filter( 'fl_builder_loop_query_args', 'fl_builder_loop_query_args_filter' );
```

**Search module:**  
```php
function fl_builder_loop_query_args_filter( $query_args ) {
  if ( isset($query_args['settings']->settings->id) && 'example-module' == $query_args['settings']->settings->id ) {
    $query_args['post_type'] = array( 'post', 'product' );
  }
  return $query_args;
}
add_filter( 'fl_builder_loop_query_args', 'fl_builder_loop_query_args_filter' );
```
