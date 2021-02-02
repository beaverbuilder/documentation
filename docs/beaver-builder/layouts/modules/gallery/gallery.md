---
id: gallery
title: Gallery
sidebar_label: Gallery module
description: The Gallery module displays a gallery of images from the Media Library or SmugMug. Clicking a gallery image opens it in a lightbox.
---

The Gallery module is used to display a gallery of images from either the
WordPress Media Library or a SmugMug gallery that you specify.

## Uses of the Gallery module

The Gallery module is used to display a collection of individual photos in a
pleasing fashion. Depending on what happens when users click a module (see the
section on the module's settings), you can use the Gallery module to:

  * Display the series of photos one by one in a lightbox with navigation aids.  
This works particularly well when the gallery images are displayed in a small
size that users can open to view a larger version of the image.

  * Display the full-sized image on a page of its own.  
This option works well when the intention is for viewers to right-click and
download single images, such as for an image library.

  * Gallery images don't have a clickable link.  
You might want to display the gallery as images that are large enough to view
clearly and really don't need to be expanded to a larger size.  

Gallery modules are often used as [shortcodes](/beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts.md) in other modules or even in posts that use the
WordPress Standard editor. For example, you could insert the shortcode for a
Gallery module into a tab in the Tabs module or an item in the Accordion
module to show a collection of images on a particular tab or in an expanded
accordion section respectively.

## Properties of the Gallery module

You can display the gallery in either a Thumbs or a Collage layout. Here's an
example of Thumbs layout, in which image thumbnails are presented in a grid.

![](/img/gallery-1.jpg)

Here's an example of the Collage layout at medium size.

![](/img/gallery-2.jpg)

The ordering of the photos in both the Collage and Thumbs layouts matches the
WordPress media gallery order that you set up. When you create or edit the
WordPress gallery, you can reorder the images by dragging and dropping.

![](/img/gallery-3.jpg)

## Gallery module settings

### General tab

* **Layout**  
**Collage** or **Thumbs**.

* **Source**  
Choose the WordPress **Media Library** or **SmugMug**. For the Media Library,
in the Photos field choose the images you want to include. For SmugMug, see
the instructions below.

* **Photo size**  
This field appears for Collage layouts only. The Thumbs layout always displays
WordPress thumbnails, either the default 150x150 or custom size you've set.

* **Show captions**  
If you select this option, image captions are pulled from the Media Library or
the SmugMug library. By default, longer captions are cut off with elliptical
periods. See [this article](/beaver-builder/layouts/modules/photo/display-full-captions-under-photos.md) for the CSS to insert a full wrapped caption.

* **Click action**  
Specify what happens when an image is clicked:

  * **None**  
No action.

  * **Lightbox**  
Open the image in a lightbox with Previous and Next arrows. You can choose the
max size on devices large enough to display it.

  * **Photo link**  
Use the image URL to open a large-sized image displayed on a page with no
theme or other formatting and no navigation links to the other images in the
gallery. The large size in WordPress by default is a max height and max width
of 1024px (or the full size of the image if you uploaded one less than
1024px).

### Style tab

* **Photo spacing**  
The horizontal and vertical spacing between the images, in pixels.  

* **Photo border**  
The standard Beaver Builder [borders](/beaver-builder/styles/effects/borders.md) and [border effects](/beaver-builder/styles/effects/radius-shadow.md).

## Use a SmugMug gallery

  1. Navigate to the SmugMug gallery you want to use.
  2. Scroll down to the footer and click the Feed icon, then select **RSS**.  
![](/img/gallery-4.png)

  3. Copy the RSS link and insert it into the **Feed URL** field in the Gallery Module.

### Advanced tab

  There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

