---
id: add-theme-preset-content-tab-options
title: Content tab options for custom theme presets
sidebar_label: Content tab options
---

## Content Background

Title in Customizer  |  Key  |  Value options
---|---|---
Background color  |  `fl-content-bg-color` |  Any hex color
Background opacity  |  `fl-content-bg-opacity`  |  Any hex color
Background image  |  `fl-content-bg-image`  |  URL to image
Background repeat  |  `fl-content-bg-repeat`  |  none, repeat, repeat-y, repeat-x
Background position  |  `fl-content-bg-position`  |  left top, left center, left bottom, right top, right center, right bottom, center top, center center, center bottom
Background attachment  |  `fl-content-bg-attachment`  |  scroll, fixed
Background size  |  `fl-content-bg-size`  |  auto, contain, cover

## Blog Layout

Title in Customizer  |  Key  |  Value options
---|---|---
Sidebar position  |  `fl-blog-layout`  |  sidebar-right, sidebar-left, no-sidebar
Sidebar size  |  `fl-blog-sidebar-size`  |  4  (large), 3 (medium), 2 (small), 1 (custom)
Custom sidebar width  |  `fl-blog-custom-sidebar-size`  |  Number between 10-50 ( increments of 1 )
Sidebar display  |  `fl-blog-sidebar-display`  |  desktop, always
Sidebar location  |  `fl-blog-sidebar-location`  |  blog, single, search, archive
Apply sidebar to post types  |  `fl-blog-sidebar-location-post-types`  |  Use `'custom' => 'post_types'` to list all post types as an option
Post author |  `fl-blog-post-author` |  visible, hidden
Post date |  `fl-blog-post-date` |  visible, hidden
Comment Count |  `fl-blog-comment-count` |  visible, hidden


## Archive Layout

Title in Customizer  |  Key  |  Value options
---|---|---
Show full text  |  `fl-archive-show-full`  |  1, 0
"Read more" text  |  `fl-archive-readmore-text`  |  Any text (do not use apostrophes as that will break the theme). **Only visible if Show Full Text is set to 0**
Featured image  |  `fl-archive-show-thumbs`  |  (blank for hidden), above-title, above, beside
Image size  |  `fl-archive-thumb-size`  |  Use `'choices' => archive_post_image_sizes()` to pull in image size

## Post Layout

Title in Customizer  |  Key  |  Value options
---|---|---
Featured image  |  `fl-posts-show-thumbs`  |  (blank for hidden), above-title, above, beside
Post categories  |  `fl-posts-show-cats`  |  visible, hidden
Post tags  |  `fl-posts-show-tags`  |  visible, hidden
Prev/next post links  |  `fl-posts-show-nav`  |  visible, hidden

## Woocommerce Layout

Title in Customizer  |  Key  |  Value options
---|---|---
Lightbox  |  `fl-lightbox-layout`  |  enabled, disabled
