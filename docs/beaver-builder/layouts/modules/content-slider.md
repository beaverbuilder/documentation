---
id: content-slider
title: Content slider
sidebar_label: Content slider
---

You might think of a content slider module as a slideshow of rows, in which
each slide has any or all of the following components::

  * A background (color, photo, video, or none)
  * An overlay (text, text + photo, text + video, or none)
  * A text or button link

Here's an example of a slide with a photo background and an overlay with text
and a button:

![](/img/content-slider-1.jpg)

The text overlay can have its own color background or none. On smaller
devices, the navigation and overlay appear below the background photo:

![](/img/content-slider-2.jpg)

Here's an example of a slide with a photo background and an overlay with text
and a photo:

![](/img/content-slider-3.jpg)

Depending on settings and screen width, the text can be to the left or right
of the photo or vertically aligned.

**Note:** At small screen widths, the overlay photo appears above the content
and the background image is hidden, as shown in the following screenshot.

![](/img/content-slider-4.jpg)

For navigation, you can have arrows, dots, both, or none. The arrows (overlaid
on the background image) and dots (below the content) are shown in the
screenshot above.

## Uses of the Content Slider module

The Content Slider module can work well when you want to construct a
relatively small set of slides with overlaid content by hand, as opposed to
generating the slides automatically with posts, pages, or a custom post type,
in which case you'd use the Posts Slider module.

One use would be if you have more than one call to action that you want to
display in a series. In the screenshot with the button above, you could
display a company's lines of business or a series of special offers with the
content slider.

It's important to remember that the main image in the Content Slider module is
in the background, so it is subject to the same problems of background images
in rows and columns, namely the image can get cropped so it's not showing what
you intended, and the image may not look good at every device size. The
Content Slider settings don't allow background image positioning or different
images for small devices, so you need to check each slide carefully and tinker
with images in an image editor rather than through Beaver Builder settings.

See the section about related modules below.

## Content Slider module settings

The content slider module offers a larger number of options for styling and
content. Here are some examples.

  * In each slide, you can choose a photo, video, or color background.
  * You can add a heading, text, and a button and display them overlaid on the photo video, or color background, or side by side with the photo or video.
  * You can automate and adjust the playback or add navigation buttons so users can cycle through themselves.
  * If you choose to show the nav arrows, you can style the arrow color, and arrow background color and shape on the **Style** tab.
  * There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.



**Note:** On the **Slider** tab, be sure to set the **Transition speed**
setting for a shorter time than the **Delay** setting. This avoids an issue
where an image can get skipped because it hasn't finished transitioning before
it's time to display the next slide.
