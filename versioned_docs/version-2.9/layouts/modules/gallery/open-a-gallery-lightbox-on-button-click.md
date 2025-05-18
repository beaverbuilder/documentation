---
id: open-a-gallery-lightbox-on-button-click
title: Open a gallery lightbox on button click
sidebar_label: Open a gallery lightbox on button click
description: Here's how to open a lightbox from the Button module to display images from a Gallery module.
---

The Button module has a built-in lightbox feature, but if you put in the
shortcode for a gallery, the entire gallery will display in the lightbox,
rather than the individual gallery images.

You can configure the button click to display the individual gallery images in
the lightbox, with previous and next navigation, as shown in this screenshot:

![](/img/how-to-tips-open-gallery-button-1.jpg)

The instructions here will show you how to create a Button module an a Gallery module, add custom IDs, and copy in some jQuery to make it all work.

## 1. Create a Button module

Create your button and give it a custom ID also, using these instructions.

  1. Drag a Button module into your layout.  
  Leave the Click Action set to **Link** but don't add a link.  
  The link will be set by the jQuery.
  2. On the **Advanced** tab in the **HTML element** section, enter an ID for your button in the **ID** field.  
  In this example, we'll use `gallery-1-button` as the ID value.
  4. Enter any other style settings you want for the button and save the module.

## 2. Create a Gallery module

Create your gallery and give it a custom ID using these instructions.

  1. Add a Gallery module to your layout.  
Placing the gallery in a row under the button is a good place. The jQuery will keep the gallery from being displayed on your main page.
  2. Add photos to the Gallery module in the normal fashion.
  3. On the **General** tab, set **Click action** to **Lightbox** and select the size of image you want to display in the lightbox.
  4. On the **Advanced** tab, in the **HTML element** section, enter an ID for your gallery in the **ID** field.   
In this example, we'll use `gallery-1` as the ID value,
  5. Save the module.

## 3. Add the jQuery code

Add the jQuery code using the following instructions.

  1. In the Beaver Builder editor, click the down arrow in the Title bar in the upper left corner to open the **Tools** menu, then choose **Layout CSS & JavaScript**.
  2. Click the **JavaScript** tab, then paste in the following code.  
  ```js
  jQuery(document).ready(function ($) {
    var galleryid = "#gallery-1"; //Gallery ID
    var buttonid = "#gallery-1-button"; //Button ID

    if ("undefined" !== typeof FLBuilderConfig) {
      return;
    }

    jQuery(galleryid + " .fl-photo-img").hide();

    jQuery(buttonid).on("click", function (e) {
      e.preventDefault();
      $(galleryid + " img")
        .first()
        .trigger("click");
    });
  });
  ```
  3. Change lines 2 and 3 to the ID values that you assigned to the Gallery module and the Button module respectively.
  4. Click **Save** to save the code.
  5. Publish the page. Hold down the Shift key and click the Refresh icon to clear your browser cache, then test your button.

:::tip **Tip**
If you're using more than one button and gallery lightbox on the same
page, duplicate this jQuery code and change the ID values to match each button
and gallery.
:::
