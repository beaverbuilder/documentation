---
id: render-layouts-with-php
title: Render layouts with PHP
sidebar_label: Render layouts with PHP
---

You can render Beaver Builder layouts using PHP. This is typically done in
theme files to create editable headers and footers, but there are other uses
as well, such as an editable callout below your posts.

Use the `FLBuilder::render_query` method for this purpose. It accepts an array
of query parameters and works exactly the same way `WP_Query` works, except
that it renders Beaver Builder layout for any posts that are found instead of
returning them.

See the [WordPress Codex on WP_Query](https://codex.wordpress.org/Class_Reference/WP_Query#Parameters) for
more information about the query parameters that can be passed to this method.

### Examples

* Render a page with the ID of 123.

  ```php
  FLBuilder::render_query( array(
      'page_id' => 123
  ) );
  ```

* Render a Beaver Builder template with the ID of 123. Note that templates, saved rows, and saved modules are all stored using the `fl-builder-template` post type.

  ```php
  FLBuilder::render_query( array(
      'post_type' => 'fl-builder-template',
      'p'         => 123
  ) );
  ```
