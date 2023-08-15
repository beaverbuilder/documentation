---
id: add-custom-image-sizes
title: Add custom image sizes
sidebar_label: Add custom image sizes
description: Add code to create custom names and sizes that appear in the Beaver Builder selection boxes for images.
---

Suppose you want a custom panorama background image that is sized exactly to your content width and height. Or, you want your Callout modules to have photos of an identical size.

With the following code, you can create custom image size options that appear in the size selection box for anywhere in Beaver Builder that you can insert an image from the media library: row and column backgrounds, Photo module, Callout module, and so on. 

In the following screenshot, there are two custom image size options, labeled "Video gallery" and "Full panorama."

![](/img/management-migration--add-custom-image-sizes--1.jpg)

## Code

Add the following code to the *functions.php* file in your [child theme](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme) and see the tips below for customizing it further.

  ```php
  add_image_size('video-gallery', 300, 169, true);
  add_image_size('full-panoramica', 1920, 650, true);
  function insert_custom_image_sizes($sizes) {
    global $_wp_additional_image_sizes;
    if (empty($_wp_additional_image_sizes)) {
      return $sizes;
    }
    foreach ($_wp_additional_image_sizes as $id => $data) {
      if (!isset($sizes[$id])) {
        $sizes[$id] = ucfirst(str_replace('-', ' ', $id));
      }
    }
    return $sizes;
  }
  add_filter('image_size_names_choose', 'insert_custom_image_sizes');
  ```
  
### Reserved Names

When adding your own image sizes with this code, you can't use any of the following image size names that WordPress has reserved. 

* `thumb`
* `thumbnail`
* `medium`
* `medium_large`
* `large`
* `post-thumbnail`

You can learn more from the [WordPress Developer docs](https://developer.wordpress.org/reference/functions/add_image_size/#reserved-image-size-names).

### Image Names

The custom image name must be a string, such as `my-img-size` or `my-img-600`. Do not use integers on their own: for example, `add_image_size( '400', 500, 750, true );` does NOT work.

## Tips

* Change the labels and the image widths and heights as you like. If you want the image to have a relatively unlimited height, use `9999` for the second value. For example:  
  ```php
  add_image_size( 'full-panoramica', 1920, 9999, true );
  ```
* A hyphen in the custom image name converts to a space in the front-end selection label, and the first word is automatically capitalized. For example, `video-gallery` converts to **Video gallery**, as you can see in the screenshot above.
* The custom size choice only applies to images that you upload to your media library after adding this custom code. If you want to apply the custom size to an image that's already in your media library, either upload it again, or use a plugin such as [Regenerate Thumbnails](https://wordpress.org/plugins/regenerate-thumbnails/) to change the sizes of all your previously uploaded images.