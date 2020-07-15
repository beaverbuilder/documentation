---
id: video
title: Video
sidebar_label: Video module
---

Use the Video module to insert a video into your layout. The source can be
either of the following:

  * A video from the WordPress Media Library
  * Embed code provided by a third party such as Vimeo or YouTube.

An important part of the Video module is what goes on behind the scenes. You
can add structured data to meet [Google's Rich Results
Test](https://search.google.com/test/rich-results). The Video module also does
a great job of being responsive on smaller devices.

## Module settings

### General tab

#### Video type

If you choose **Media Library**, the following settings become available.

Field  |  Description  
---|---  
**Video (MP4)** |  Add an MP4 video that you have uploaded to your media library.  
**Video (WebM)** |  (Optional) Select a WebM-format video from the media library to display in browsers that can't play MP4 (older versions of Firefox and Safari).  
**Poster** |  (Optional) Select an image from the Media Library that will display before the video is loaded.<br/>**Note:** If a poster image is specified, the attribute `preload="none"` is added to the rendered output to ask the browser not to load the video when the page loads. However, this attribute is ignored if  **Autoplay**  is set to **Yes**. See [this rticle](https://www.w3schools.com/tags/att_video_preload.asp) for more information about the `preload` attribute.  
**Autoplay** |  (Default is **No**) Choose whether the video should start automatically.  
**Loop** |  (Default is **No** ) Choose whether to automatically reply the video when it ends.  

If you set **Video type** to **Embed**, a code box appears where you can add
the `<iframe>` embed code provided by your video service. For Youtube videos,
go to the video you want to embed and click **Share**, then choose **Embed**
to get the code. The `StartTime` and `EndTime` YouTube embed parameters are passed to the YouTube Player API, so you can start and end an embedded video at selected points.

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
  <div class="fluid-width-video-wrapper" style="padding-top: 56.25%;">
    <iframe src="https://www.youtube.com/embed/AbCdEfG" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid0"></iframe>
  </div>
</div>
```

### Advanced tab

There are all the usual **Advanced** tab settings for margins, visibility,
animations, and advanced HTML settings.

## Related modules

You can always embed the code for videos using an HTML module, but if you
want the structured meta data iin the output you'll have to provide your own
code. Use the example above for how to structure this information around your
video iframe.
