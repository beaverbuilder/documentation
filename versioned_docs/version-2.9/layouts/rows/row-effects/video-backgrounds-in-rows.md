---
id: video-backgrounds-in-rows
title: Video backgrounds in rows
sidebar_label: Video backgrounds in rows
---

## Row settings for background videos

To access the row settings for videos:

1. Open the row's settings.
2. On the **Style** tab, scroll to the **Background** section.
3. In the **Type** field, choose Video.

The following sections are available with settings for video backgrounds, as
shown in this screenshot, listed below, and described in the following
sections.

![](/img/row-columns-video-background-1.png)

- Background video
  Specify the source of the video plus other settings related to how and where
  the video plays. See the section below for more information.

- Background overlay
  Overlay a semitransparent color on the video.

- Background color
  Set a background color that displays until the fallback image or the video
  loaded. Depending on load time, the background color may never appear or may
  flash momentarily.

- Border
  Optional [standard border settings](basics/border.md) around the row, including [radius and shadow effects](basics/border.md).

- Top shape, bottom shape, shape container
  Add a [Beaver Builder row shape overlay](/beaver-builder/layouts/rows/row-effects/row-shape-overlays.md) to the
  top edge or bottom edge of the row.

### Background video section

In the **Source** field, specify one of the following sources:

- Media Library
- URL
- Youtube or Vimeo

The following screenshot shows the Background Video settings when the source
is the Media Library, In the table that follows, the settings for specifying
the video source depending on the selection in the **Source** field, but the
other fields in the **Background video** section are the same for all video
sources.

![](/img/row-columns-video-background-2.jpg)

### Background Video section settings for rows

**Note:** Any of the following **URL** fields in
the **Background video** section can contain a shortcode for the URL.

| Field                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Video (MP4)**            | (Displays when **Source** is **Media Library** ) Add an MP4 video that you have uploaded to your media library.                                                                                                                                                                                                                                                                                                                                                                                        |
| **Video (WebM)**           | (Optional, displays when **Source** is **Media Library** ) Select a WebM-format video from the media library to display in browsers that can't play MP4 (older versions of Firefox and Safari).                                                                                                                                                                                                                                                                                                        |
| **Video URL (MP4)**        | (Displays when **Source** is **URL** ) Add the URL to the MP4 video you want to use. Don't use the **URL** setting for Youtube or Vimeo videos.                                                                                                                                                                                                                                                                                                                                                        |
| **Video URL (WebM)**       | (Optional, displays when **Source** is **URL** ) Add the URL to a WebM video to use in browsers that can't play MP4 (older versions of Firefox and Safari).                                                                                                                                                                                                                                                                                                                                            |
| **Youtube or Vimeo URL**   | (Displays when **Source** is **Youtube or Vimeo**) Add the URL for the Youtube or Vimeo video you want to use.                                                                                                                                                                                                                                                                                                                                                                                         |
| **Enable audio**           | Play the audio track for the video. Note that adding audio requires extra file size and increases load time, and some users do not appreciate it. Use with caution.                                                                                                                                                                                                                                                                                                                                    |
| **Enable video in mobile** | If set to **Yes**, the video will play on mobile devices that support it, but the audio track will be disabled.<br/>If set to **No**, the fallback photo displays. If there's no fallback photo, the row background color displays.<br/> **Note:** Use of a mobile device is detected by the browser, it’s not based on a breakpoint, so in Responsive Editing mode in the Beaver Builder Editor, you’ll see the video in the Small Device view even when **Enable video in mobile** is set to **No**. |
| **Fallback photo**         | (Optional) Displays in any of the following conditions:<br/>\- While the video is loaded;<br/>\- When there are technical difficulties loading the video;<br/>\- On mobile devices when **Enable video in mobile** setting is **No**. If **Fallback photo** is not set, the background color displays under the same conditions.                                                                                                                                                                       |

## Tips for using row background videos effectively

From a design standpoint, a video background can add interest to a page – or
it can detract from your content. For example, here's an example of
ineffective use of a video background. Not only does the animation grab
attention away from the call to action, but the video colors are so bright
that the text is obscured.

![](/img/row-columns-video-background-3.gif)

Here are some tips for using video backgrounds more effectively:

- Edit the video clips to make the file size as small as possible. Try exporting to 720p at 24 frames per second and a low bit rate.
- If you're not playing the audio portion of the video (and in most cases that's a good idea), use a video editor to strip the audio track to reduce file size.
- Keep the video as short as possible and loop it, which also reduces file size.
- Use video clips that are related to the content, but don't use video backgrounds when you want attention on the content, such as the call to action in the previous example.
- Set a semitransparent color overlay in the row settings if it make the row's content more legible. The most common settings are black (#000000) or white (#ffffff) with 50% opacity.
- Not all mobile devices play video backgrounds, so provide a fallback image in the row settings.
- Set a background color, which will display when the video (and optional fallback image) are slow to load, so visitors can start reading the content before the video starts. Use a dark color for light text and a light color for dark text.
- Use a caching mechanism that lazy loads videos, which means the video isn't loaded until the visitor scrolls to that part of the page. This helps to improve your page load speed.
- If you want a higher-resolution video or a longer video or an audio track, use a Video module instead of a video background.
