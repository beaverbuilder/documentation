---
id: video
title: Video
sidebar_label: Video module
description: The Video module displays a video from the Media Library or with embed code and includes the ability to enter structrured data, important for SEO.
---

Use the Video module to insert a video into your layout or play it in a lightbox. The source can be either of the following:

  * A video from the WordPress Media Library
  * Embed code provided by a third party such as Vimeo or YouTube.

An important part of the Video module is what goes on behind the scenes. You
can add structured data to meet [Google's Rich Results
Test](https://search.google.com/test/rich-results). The Video module also does
a great job of being responsive on smaller devices.

## Module settings

### General tab

#### Video type

There are two choices:

* **Media Library**
* **Embed**

These choices are described in the following sections.

**Media Library**

If you choose **Media Library**, the following additional settings are available.

Field  |  Description  
---|-----  
**Video (MP4)** |  Add an MP4 video that you have uploaded to your media library.  
**Video (WebM)** |  (Optional) Select a WebM-format video from the media library to display in browsers that can't play MP4. WebM was required on some older versions of Firefox and Safari. 
**Show video on lightbox** |  (Default is **No**) The video plays in a lightbox rather than directly on the page. If set to **Yes**, you must select **Enable Poster** and select a poster image, described in the following table rows.
**Enable poster** |  Enable or disable a poster image that displays before the video is loaded, whether the video is displayed in a lightbox or not. If set to *Yes*, you must add an image to the next **Poster** setting.<br/>**Note:** If a poster image is specified, the attribute `preload="none"` is added to the rendered output to ask the browser not to load the video when the page loads. However, this attribute is ignored if  **Autoplay**  is set to **Yes**. See [this article](https://www.w3schools.com/tags/att_video_preload.asp) for more information about the `preload` attribute.  
**Poster** |  (Optional for videos that play on the page, required for videos that play in a lightbox) Select a poster image from the Media Library.  If the video plays in a lightbox, the poster image displays on the main page and the video plays in the lightbox.
**Autoplay** |  (Default is **No**) Choose whether the video should start automatically.<br/>**Note:** Selecting *Yes* doesn't guarantee your video will autoplay in all environments. Standards frequently change for whether browsers and mobile devices will autoplay videos. [Here's a good recent summary.](https://help.outofthesandbox.com/hc/en-us/articles/360000661568-Why-won-t-my-video-autoplay-)
**Loop** |  (Default is **No** ) Choose whether to automatically replay the video when it ends.  
**Sticky on scroll**  |  (Default is **No**) If set to **Yes** and the lightbox is set to **No**, the video stays displayed on the page while the rest of the page scrolls beneath it.  

There's also a **Video Controls** section, with the following settings. All are set to **Show** by default. Here's a screenshot to explain the controls, also described in the table below.

![](/img/video-3f16ea5f.png)

Field  |  Description  
---|-----  
**Play/pause** |  Show or hide the play and pause controls.  
**Timer**  | Show or hide the timer control.  
**Time Rail**  |  Show the bar that displays the time progression while the video plays. 
**Duration**  |  Show the time duration.  
**Volume**  | Show the volume control.  
**Full screen**  |  Show the control to enable full-screen viewing.  

**Embed**

If you set **Video type** to **Embed**, a code box appears where you can add
the `<iframe>` embed code provided by your video service. For Youtube videos,
go to the video you want to embed and click **Share**, then choose **Embed**
to get the code. The `StartTime` and `EndTime` YouTube embed parameters are passed to the YouTube Player API, so you can start and end an embedded video at selected points.

With the **Embed** setting, the following settings are also available. See the previous section for an explanation of these settings:

* **Show video on lightbox**
* **Enable poster**
* **Poster**
* **Sticky on scroll**

**oEmbed**

Instead of adding an iFrame you can add the URL for your video as long as the video service is supported by [WordPress oEmbed](https://wordpress.org/support/article/embeds/#okay-so-what-sites-can-i-embed-from).


### Structured data tab

This tab lets you set information about the video that is provided in the
rendered HTML output that search engines make use of, particularly [Google's
Rich Results](https://search.google.com/test/rich-results) feature.

If you choose **Yes** for **Enable structured data**, the following fields
become available.

* **Video name**
* **Video description**
* **Video thumbnail**
* **Upload date**

Here's an example of the rendered HTML output as a result of this structured
data in the outer  `<div>` wrapper for the video. The `itemtype` attribute
identifies the object as a schema.org video, and the `meta` attributes include
the structured data provided.

```html
<div class="fl-video fl-embed-video" itemscope="" itemtype="https://schema.org/VideoObject">
  <meta itemprop="name" content="BLT 2005-2017">
  <meta itemprop="uploadDate" content="April 10, 2017">
  <meta itemprop="thumbnailUrl" content="https://example.com/wp-content/uploads/2019/10/history-embed-thumbnail.png">
  <meta itemprop="description" content="A photo slideshow of memorable moments in our history">
  <div className="fluid-width-video-wrapper" style="padding-top: 56.25%;">
    <iframe src="https://www.youtube.com/embed/AbCdEfG" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" name="fitvid0"></iframe>
  </div>
</div>
```

### Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

### Related modules

* You can also play a video in a lightbox using a Button module.  
For a description of the differences, see the article about [opening a video in a lightbox](/beaver-builder/layouts/modules/video/open-a-video-in-a-lightbox.md).
* You can  embed the code for videos using an HTML module.  
However, if you want the structured metadata in the output, you'll have to provide your own code. Use the example above for how to structure this information around your video iframe.
