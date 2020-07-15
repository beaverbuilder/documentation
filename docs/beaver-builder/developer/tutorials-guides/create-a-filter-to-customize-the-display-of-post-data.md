---
id: create-a-filter-to-customize-the-display-of-post-data
title: Create a filter to customize the display of post data
sidebar_label: Create a filter to customize the display of post data
---

If you want to display a custom set of posts and custom post types in a Posts
module, you can create a filter to override query args in the `FLBuilderLoop`
class. This code applies to custom queries only and doesn't work with the main
query.

Add the following code to the _functions.php_ file in your child theme.

```php
function fl_builder_loop_query_args_filter( $query_args ) {
  $query_args['post_type'] = array( 'post', 'another-post-type', 'or-another-post-type' );
  return $query_args;
}
add_filter( 'fl_builder_loop_query_args', 'fl_builder_loop_query_args_filter' );
```

In Line #2, add the post types that you want the custom query to display. In
this example, the Posts module will display standard posts, the posts
belonging to a CPT called "another-post-type," and the posts from another CPT
called "or-another-post-type".

:::note **Note**
In the Custom Query list on the Content tab in the Posts module,
you'll still see the list of post types (Posts Pages, and any CPTs that you
have), but it won't matter which one you choose because this custom query is
overriding that selection.
:::

The above code as written applies to the whole site, so wherever you use a
Posts module, the display will show the post types that you enumerated in your
array. In actual use, you'd probably want to add a conditional to make this
query apply only to certain pages, certain nodes, or custom IDs.

For example, suppose you want the override to apply only to a Posts module on
the front page of your site, and you want the Posts module to display both
standard posts and WooCommerce products. You'd use this code instead:

```php
function bb_custom_loop_query_args( $args ) {
  if ( is_front_page() ) {
    $args['post_type'] = array( 'post', 'product' );
  }
  return $args;
}
add_filter( 'fl_builder_loop_query_args', 'bb_custom_loop_query_args' );
```

Here's another example where you set a custom ID on the Posts module, in this
case, `example-module`.

![](/img/dev-filter-post-data-1.png)

Then you'd use the following code:

```php
function fl_builder_loop_query_args_filter( $query_args ) {
  if ( 'example-module' == $query_args['settings']->id ) {
    $query_args['post_type'] = array( 'post', 'product' );
  }
  return $query_args;
}
add_filter( 'fl_builder_loop_query_args', 'fl_builder_loop_query_args_filter' );
```

:::tip **Tip**
If you want to override the main query, see [this WordPress codex article.](https://developer.wordpress.org/reference/hooks/pre_get_posts/)
:::
