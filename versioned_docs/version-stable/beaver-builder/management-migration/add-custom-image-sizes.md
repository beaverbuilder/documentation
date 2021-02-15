---
id: add-custom-image-sizes
title: Add custom image sizes
sidebar_label: Add custom image sizes
---

You can create custom photo sizes that you can then select when you choose an
image from your media library.

For example, suppose you want to have a custom panorama background image that
is sized exactly to your content width and height. Or, you have a number of
Callout modules, each of which has a photo of an exact size.

With the following code, you can create custom names and sizes that appear in
the size selection box for anywhere in Beaver Builder that you can insert an
image from the media library: row and column backgrounds, Photo module,
Callout module, and so on. In the following screenshot, there are two custom
image sizes, labeled "Video gallery" and "Full panorama."

![](/img/how-to-tips-custom-image-size.png)

  * Add the following code to the *functions.php* file in your child theme, and see the tips below for customizing it further.

  ```php
  if (function_exists('add_image_size')) {
    add_image_size('video-gallery', 300, 169, true);
    add_image_size('full-panoramica', 1920, 650, true);
  }

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

:::tip **Tips**
* Change the labels and the image widths and heights as you like. If you
want the image to have a relatively unlimited height, use `9999` for the
second value. For example:  

  ```php
  add_image_size( 'full-panoramica', 1920, 9999, true );
  ```

* Using a hyphen in the custom image name adds spaces in the front-end
selection label, and the first word is automatically capitalized. For example,
`video-gallery` converts to **Video gallery**, as you can see in the
screenshot above.

* The custom size choice only applies to images that you upload to your
media library after adding this custom code. If you want to apply the custom
size to an image that's already in your media library, either upload it again,
or use a plugin such as [Regenerate Thumbnails](https://wordpress.org/plugins/regenerate-thumbnails/) to change the sizes of all your previously uploaded images.
:::
