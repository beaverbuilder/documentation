---
id: theme-action-reference
title: Theme action reference
sidebar_label: Theme action reference
---

Theme hooks are now [auto-generated from the code](https://hooks.wpbeaverbuilder.com/bb-theme/). Some of the basic actions listed on that page are documented here. A visual layout of the more common theme hooks is displayed at [the ProBeaver site](https://probeaver.com/beaver-theme-hooks/).

### fl_head_open

Fires after the opening `<head>` tag.
```php
function my_head_open() {
  echo '<script> console.log("I am at the beginning of the head tag!"); </script>';
}
add_action( 'fl_head_open', 'my_head_open' );
```

### fl_head

Beaver Builder’s styles and custom code are loaded after `wp_head` to ensure they aren’t overridden by plugins you may have installed. Use the `fl_head` action if you need to load something after Beaver Builder’s styles.

```php
function my_head() {
  echo '<link> body { background: #fff; } </link>';
}
add_action( 'fl_head', 'my_head' );
```

### fl_body_open

Fires after the opening `<body>` tag.

```php
function my_body_open() {
  echo '<div> I am right after the body tag. </div>';
}
add_action( 'fl_body_open', 'my_body_open' );
```

### fl_page_open

Fires after the opening fl-page `<div>` tag.

```php
function my_page_open() {
  echo '<div> I am right after the fl-page div. </div>';
}
add_action( 'fl_page_open', 'my_page_open' );
```

### fl_before_top_bar

Fires before the opening top bar `<div>` tag.

```php
function my_before_top_bar() {
  echo '<div> I am right before the top bar div. </div>';
}
add_action( 'fl_before_top_bar', 'my_before_top_bar' );
```

### fl_top_bar_col1_open

Fires at the beginning of the first top bar column.

```php
function my_top_bar_col1_open() {
  echo '<div> I am at the beginning of the first top bar column. </div>';
}
add_action( 'fl_top_bar_col1_open', 'my_top_bar_col1_open' );
```

### fl_top_bar_col1_close

Fires at the end of the first top bar column.

```php
function my_top_bar_col1_close() {
  echo '<div> I am at the end of the first top bar column. </div>';
}
add_action( 'fl_top_bar_col1_close', 'my_top_bar_col1_close' );
```

### fl_top_bar_col2_open

Fires at the beginning of the second top bar column.

```php
function my_top_bar_col2_open() {
  echo '<div> I am at the beginning of the second top bar column. </div>';
}
add_action( 'fl_top_bar_col2_open', 'my_top_bar_col2_open' );
```

### fl_top_bar_col2_close

Fires at the end of the second top bar column.

```php
function my_top_bar_col2_close() {
  echo '<div> I am at the end of the second top bar column. </div>';
}
add_action( 'fl_top_bar_col2_close', 'my_top_bar_col2_close' );
```

### fl_after_top_bar

Fires after the closing top bar `<div>` tag.

```php
function my_after_top_bar() {
  echo '<div> I am right after the top bar div. </div>';
}
add_action( 'fl_after_top_bar', 'my_after_top_bar' );
```

### fl_before_header

Fires before the opening header `<div>` tag.

```php
function my_before_header() {
  echo '<div> I am right before the header div. </div>';
}
add_action( 'fl_before_header', 'my_before_header' );
```

### fl_header_content_open

Fires at the beginning of the header content section that is available in the Nav Bottom header layout.

```php
function my_header_content_open() {
  echo '<div> I am at the beginning of the header content section. </div>';
}
add_action( 'fl_header_content_open', 'my_header_content_open' );
```

### fl_header_content_close

Fires at the end of the header content section that is available in the Nav Bottom header layout.

```php
function my_header_content_close() {
  echo '<div> I am at the end of the header content section. </div>';
}
add_action( 'fl_header_content_close', 'my_header_content_close' );
```

### fl_after_header

Fires after the closing header `<div>` tag.

```php
function my_after_header() {
  echo '<div> I am right after the header div. </div>';
}
add_action( 'fl_after_header', 'my_after_header' );
```

### fl_before_content

Fires before the opening content `<div>` tag.

```php
function my_before_content() {
  echo '<div> I am right before the content div. </div>';
}
add_action( 'fl_before_content', 'my_before_content' );
```

### fl_content_open

Fires after the opening content `<div>` tag.

```php
function my_content_open() {
  echo '<div> I am right after the opening content div. </div>';
}
add_action( 'fl_content_open', 'my_content_open' );
```

### fl_post_top_meta_open

Fires at the beginning of the top post meta section.

```php
function my_post_top_meta_open() {
  echo '<div> I am at the beginning of the top post meta section. </div>';
}
add_action( 'fl_post_top_meta_open', 'my_post_top_meta_open' );
```

### fl_post_top_meta_close

Fires at the end of the top post meta section.

```php
function my_post_top_meta_close() {
  echo '<div> I am at the end of the top post meta section. </div>';
}
add_action( 'fl_post_top_meta_close', 'my_post_top_meta_close' );
```

### fl_post_bottom_meta_open

Fires at the beginning of the bottom post meta section.

```php
function my_post_bottom_meta_open() {
  echo '<div> I am at the beginning of the bottom post meta section. </div>';
}
add_action( 'fl_post_bottom_meta_open', 'my_post_bottom_meta_open' );
```

### fl_post_bottom_meta_close

Fires at the end of the bottom post meta section.

```php
function my_post_bottom_meta_close() {
  echo '<div> I am at the end of the bottom post meta section. </div>';
}
 add_action( 'fl_post_bottom_meta_close', 'my_post_bottom_meta_close' );
```

### fl_comments_open

Fires after the opening fl-comments  `<div>` tag.

```php
function my_comments_open() {
  echo '<div> I am right after the fl-comments div. </div>';
}
add_action( 'fl_comments_open', 'my_comments_open' );
```

### fl_comments_close

Fires before the closing fl-comments  `<div>` tag.

```php
function my_comments_close() {
  echo '<div> I am at the end of the fl-comments div. </div>';
}
add_action( 'fl_comments_close', 'my_comments_close' );
```

### fl_sidebar_open

Fires after the opening fl-sidebar `<div>` tag.

```php
function my_sidebar_open() {
  echo '<div> I am right after the fl-sidebar div. </div>';
}
add_action( 'fl_sidebar_open', 'my_sidebar_open' );
```

### fl_sidebar_close

Fires before the closing fl-sidebar  `<div>` tag.

```php
function my_sidebar_close() {
  echo '<div> I am at the end of the fl-sidebar div. </div>';
}
add_action( 'fl_sidebar_close', 'my_sidebar_close' );
```

### fl_content_close

Fires before the closing content  `</div>` tag.

```php
function my_content_close() {
  echo '<div> I am right before the closing content div. </div>';
}
add_action( 'fl_content_close', 'my_content_close' );
```

### fl_after_content

Fires after the closing content  `</div>` tag.

```php
function my_after_content() {
  echo '<div> I am right after the closing content div. </div>';
}
add_action( 'fl_after_content', 'my_after_content' );
```

### fl_footer_wrap_open

Fires after the opening footer wrap `<div>` tag.

```php
function my_footer_wrap_open() {
  echo '<div> I am right after the opening footer wrap div. </div>';
}
add_action( 'fl_footer_wrap_open', 'my_footer_wrap_open' );
```

### fl_before_footer_widgets

Fires before the opening footer widgets `<div>` tag.

```php
function my_before_footer_widgets() {
  echo '<div> I am right before the footer widgets div. </div>';
}
add_action( 'fl_before_footer_widgets', 'my_before_footer_widgets' );
```

### fl_after_footer_widgets

Fires after the closing footer widgets `</div>` tag.

```php
function my_after_footer_widgets() {
  echo '<div> I am right after the footer widgets div. </div>';
}
add_action( 'fl_after_footer_widgets', 'my_after_footer_widgets' );
```

### fl_before_footer

Fires before the opening footer `<div>` tag.

```php
function my_before_footer() {
  echo '<div> I am right before the footer div. </div>';
}
add_action( 'fl_before_footer', 'my_before_footer' );
```

### fl_after_footer

Fires after the closing footer `</div>` tag.

```php
function my_after_footer() {
  echo '<div> I am right after the footer div. </div>';
}
add_action( 'fl_after_footer', 'my_after_footer' );
```

### fl_footer_col1_open

Fires at the beginning of the first footer column.

```php
function my_footer_col1_open() {
  echo '<div> I am at the beginning of the first footer column. </div>';
}
add_action( 'fl_footer_col1_open', 'my_footer_col1_open' );
```

### fl_footer_col1_close

Fires at the end of the first footer column.

```php
function my_footer_col1_close() {
  echo '<div> I am at the end of the first footer column. </div>';
}
add_action( 'fl_footer_col1_close', 'my_footer_col1_close' );
```

### fl_footer_col2_open

Fires at the beginning of the second footer column.

```php
function my_footer_col2_open() {
  echo '<div> I am at the beginning of the second footer column. </div>';
}
add_action( 'fl_footer_col2_open', 'my_footer_col2_open' );
```

### fl_footer_col2_close

Fires at the end of the second footer column.

```php
function my_footer_col2_close() {
  echo '<div> I am at the end of the second footer column. </div>';
}
add_action( 'fl_footer_col2_close', 'my_footer_col2_close' );
```

### fl_footer_wrap_close

Fires before the closing footer wrap `</div>` tag.

```php
function my_footer_wrap_close() {
  echo '<div> I am right before the closing footer wrap div. </div>';
}
add_action( 'fl_footer_wrap_close', 'my_footer_wrap_close' );
```

### fl_page_close

Fires before the closing fl-page  `<div>` tag.

```php
function my_page_close() {
  echo '<div> I am right before the closing fl-page div. </div>';
}
add_action( 'fl_page_close', 'my_page_close' );
```

### fl_body_close

Fires before the closing `</body>` tag.

```php
function my_body_close() {
  echo '<div> I am right before the closing body tag. </div>';
}
add_action( 'fl_body_close', 'my_body_close' );
```
