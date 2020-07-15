---
id: slideshow
title: Slideshow
sidebar_label: Slideshow
---

## Uses of this module

Use a slideshow module when you want to display a set of images in the
foreground, one at a time. Besides the traditional horizontal slide
transition, there are a number of other types of transitions from one image to
the next, as described in the Playback tab section below. The images come from
a gallery you create either in the WordPress Media Library or in SmugMug. You
can display the image title, but if there is other content you want to display
and the image is of secondary importance, see the related modules described
below.

## Display options

Besides various types of transitions of the slides themselves, there are
various options to display navigation and play controls, an image caption,
social media links, thumbnails of the gallery, and a fullscreen toggle, all
described in the following sections.

Here's a screenshot of an image slideshow, showing the three main areas:

* The slides are taken from a gallery of images that you specify.
* Large navigation arrows can be displayed on either side of the slides, or with wider slides the icons are overlaid on the slides.
* The control bar appears above or below the images, depending on your settings.  
All of the icons that appear in the control bar can be displayed or hidden, as
explained in more detail below.

![](/img/slideshow-module-1.jpg)

## Slideshow module settings

### General tab

This tab has the following settings.

* **Source**  
WordPress Media Library or SmugMug.

* **Photos** (Media Library only)  
Contains links to create a gallery of images in your Media Library or to edit
an existing gallery.

* **Feed URL** (SmugMug galleries only)  
Enter the URL for the RSS feed here. For help with linking to a SmugMug
gallery, see the [Gallery module overview](/beaver-builder/layouts/modules/gallery/gallery.md/#use-a-smugmug-gallery).

#### Display section

* **Height**  
Sets the height of the box in which images and controls are displayed. The
default height is 500px.

* **Skin color**  
There's not much difference, but choose **Light** if you have light-colored
images and background and **Dark** if you have dark-colored images and
backgroiund. Individual image size is adjusted to maintain this height.

* **Crop**  
Since the Height setting keeps the height of each image constant, the Crop
setting determines whether the width of the image will adjust to display the
full image (so width will vary depending on each image) or the iimage width
expands to the full width of the column (minus margin and padding) and crops
the left and right edges if necessary.

* **Disable right-click**  
Does not allow image to be downloaded.

#### Click Action section

* **Type**  
None, or choose **Link**  to add a URL that will serve as a single destination
for the entire set of images. You can't set a separate link for each image.

* **Link URL**  
If you selected **Link** for the **Click action**, enter the destination URL
here.

### Playback tab

* **Auto Play**  
**Yes** (the default) means the images transition automatically and can be
overridden by any navigation controls that are displayed. **No** means the
user must advance the images using the navigation controls.

* **Speed**  
Number of seconds the full image is displayed. The default is 3 seconds.

* **Transition**  
Choose among the following types of transitions from one image to the next.
The default transition is **Fade**.

  * **None**  
  The next image is immediately displayed instead of a transition effect.

  * **Fade**  
  Slide loses opacity while the next slide comes into view.

  * **Ken Burns**  
  The Ken Burns movement is applied during both the display and transition times with a quick fade transition to the next slide.

  * **Slide horizontal**  
  Typical horizontal movement from right to left

  * **Slide vertical**  
  Current slide moves upwards followed by next slide. There is no white space between the current and next slide.

  * **Blinds**  
  Vertical bands of white space appear over the image and become narrower until the full image is displayed.

  * **Bars**  
  The next image appears with an overlay of nearly transparent gray squares during a fade transition..The effect works best at short transition times. For longer transitions the effect more resembles the Fade transition.

  * **Random bars**  
  Vertical light gray bars of random width and spacing overlay the next image and fade out.

  * **Boxes**  
  The next image appears with an overlay of nearly transparent gray squares during a fade transition.

  * **Random boxes**  
  Random gray rectangles overlay the next image and fade out.

  * **Boxes grow**  
  The next image appears with a gray grid overlay that shrinks and disappears.

* **Transition speed**  
Number of seconds spent transitioning to the next image. The default
transition speed is one second.

* **Randomize photos**  
**No** (default) means photos are displayed in the same order as they appear
in the gallery. **Yes** means the images are randomized. The randomization
order stays the same with autoplay loops and navigation.

### Controls tab

This tab has settings for the display of the navigation arrows and all of the
controls in the control bar. There are settings that apply to showing or
hiding individual icons in the control bar, and there are other settings that
apply to the display of the control bar itself.

#### General Control Bar display settings

There are two sections on the Controls tab that affect the entire control bar.

##### Control Bar section

  * By default the control bar is enabled. To hide it, in the **Control Bar** section, set **Nav type** to **None**.
  * If you display the control bar, for the **Nav type** setting you can choose **Buttons** or **Thumbs**.  
The **Buttons** choice displays the forward, back, and play buttons as icons.  
The **Thumbs** choice displays thumbnails of the gallery images, which can be
clicked to navigate to a different slide. By default, the size of the
thumbnail images is **50px**, but you can change that in the **Thumbs size**
field in the  **Thumbs** section.

  * By default, the control bar is displayed at the bottom. To move it to the top, in the Control Bar section, set **Nav position** to **Top**.

##### Control Bar Overlay section

This section has an **Overlay enabled** field, which by default is set to
**No**, meaning the control bar is displayed below or above the slides. If
set to **Yes**, the control bar is placed in a a narrow semitransparent band
along the inside bottom of top of the slides themselves. In this case, there
are two additional settings: Overlay Hide and Overlay Hide Delay. If set to
**No**, the control bar overlay is always visible. If set to **Yes**, the
control bar overlay disappears after the number of second that you specify.

#### Show or hide individual icons in the control bar

In the **Nav Bar Arrows** setting and  **Control Bar Buttons** section, you
can show or hide any of the icons in the control bar. In the following
screenshot the icons are numbered and are explained below.

![](/img/slideshow-module-2.jpg)

##### 1 Navigation Arrows setting

The **Navigation Arrows** setting is the first field on the **Controls** tab.
**Yes** means the navigation arrows display, **No** means they don't. The
actual color of the arrows depends on whether you set **Light** or **Dark** as
the **Skin color** on the **General** tab. These arrows may appear inside or
outside of the image, depending on image width and the **Crop** setting on the
**General** tab.

##### 2 Thumbs button

**Yes** displays this icon, and clicking the icon opens thumbnails of all the
images in the gallery, as shown in this screenshot. By default, the size of
the thumbnail images is **50px**, but you can change that in the  **Thumbs
size**  field in the  **Thumbs**  section.

![](/img/slideshow-module-3.png)

:::note **Note**
This setting is only available If the  **Nav type** setting in the
**Control Bar** section is set to **Buttons.**
:::

##### 3 Caption button

**Yes** displays the Information icon, shown in this screenshot, and clicking
the icon displays the image's caption from the Media Library.

![](/img/slideshow-module-4.png)

##### 4 Social button

**Yes** displays a Heart icon, shown in this screenshot, and clicking the icon
displays whatever social buttons you have enabled in the **Social** section on
this tab.

![](/img/slideshow-module-5.png)

##### 5 Navigation arrows (control bar)

This **Navigation Bars** setting is in the **Control Bar Buttons** section of
the **Controls** tab. **Yes** displays the buttons.

:::note **Note**
This  **Navigation Arrows**  setting in the  **Control Bar
Buttons** section only appears when the  **Nav Style**  setting in the
**Control Bar**  section is  **Buttons**.
:::

##### 6 Play button

Yes displays the Play/Pause button in the control bar. Enable this setting if
you want to give your user the option to automate the slide show even when
**Auto Play** is set to **No** on the **Playback** tab.

**Note:** The Play/Pause icon is only visible in the control bar when it is
set to **Yes** and the  **Nav Style**  setting in the  **Control Bar**
section is  **Buttons.**

##### 7 Photo count

If set to **Yes**, the photo count is displayed as current photo position /
total photos.

##### 8 Fullscreen button

If set to **Yes**, this button is displayed and the entire slideshow expands
to fullscreen when clicked.

### Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-for-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

##  Related modules

Other modules that display a set of images one at a time with automatic
transitions or navigation controls or both:

  * Content slider module  
Displays individual images in a set in the background, with the option of a
foreground content overlay on the image. Images displayed in the background to
fill the space often get cropped and the focus of the image usually changes as
screen sizes decreases, so this module is best used when the focus is on the
content overlay and the background image is used for effect.

  * Posts Carousel and Posts Slider modules  
These module display a set of posts or pages one at a time with the option to
display a featured or fallback image. Use these modules when you want to
display information about a set of pages or posts.
