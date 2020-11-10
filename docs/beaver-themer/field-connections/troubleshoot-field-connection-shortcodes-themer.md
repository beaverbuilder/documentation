---
id: troubleshoot-field-connection-shortcodes-themer
title: Troubleshoot field connection shortcodes
sidebar_label: Troubleshoot field connection shortcodes
---

If your [field connection shortcode](/beaver-themer/field-connections/field-connection-shortcodes-overview-themer.md) isn't displaying the content the way you think it should in a Themer layout, the first question to ask is whether the field connection shortcode is returning a value and what value it's returning for a particular post or page.

To test this, use an HTML module with a [Themer conditional shortcode](/beaver-themer/field-connections/conditional-shortcodes-for-field-connections-overview-themer.md) while previewing a particular page or post in your Themer layout. It's helpful to add a status message to clarify what you tested for.

The following section has a couple examples. See this article for the syntax of [conditional shortcode to test for the presence of a value](/beaver-themer/field-connections/use-conditional-shortcode-to-test-for-presence-of-content-themer.md).

:::tip **Tip**
Here's a tip for [finding the field connection parameters](/beaver-themer/field-connections/find-the-full-list-of-field-connection-and-parameters-themer.md) for any shortcode you want to test, or you can look them up in the [field connection shortcodes reference](/beaver-themer/field-connections/field-connection-shortcode-index-themer.md).
:::

## 1. Test featured image shortcode

You can use the following code to test for the following aspects of a featured image.

  * Whether a featured image exists.
  * What its URL is.
  * Whether the image has a title and what the title is.
  * Whether the image has a caption and what the caption is.
  * Whether the image has a description and what the description is.
  * Whether the image has alt tag content and what the content is.

The following code tests for all of these display parameter values. You can remove the ones you don't want to test.

**To test a featured image and its properties:**

  1. Add the following code to an HTML module in a Singular-type Themer layout.

  ```markup
    Does this post have a featured image?<br>
    [wpbb-if post:featured_image]<br>
    YES: [wpbb post:featured_image size='thumbnail' display='tag'
        align='default' linked='yes']<br>
    URL: [wpbb post:featured_image size='thumbnail' display='url'
        align='default' linked='yes']  <br>
    TITLE: [wpbb post:featured_image size='thumbnail' display='title'
        align='default' linked='yes'] <br>
    CAPTION: [wpbb post:featured_image size='thumbnail' display='caption'
        align='default' linked='yes'] <br>
    DESCRIPTION: [wpbb post:featured_image size='thumbnail' display='description'
        align='default' linked='yes']  <br>
    ALT: [wpbb post:featured_image size='thumbnail' display='alt'
        align='default' linked='yes']
    [/wpbb-if]
  ```

  2. At the top of the page in the Preview bar, choose the post or page that you want to test.

The following screenshot shows the result: the featured image, its URL, and the content (or lack of content) in the **Title**, **Caption**, **Description**, and **Alt** fields for that image in the Media Library. You can vary the `size` parameter in the code (large, medium, etc.) to test the featured image at various sizes. In the URL test, the file name shows the pixel dimensions for that size.

![](/img/troubleshoot-field-connection-shortcodes-themer-9eb51f72.jpg)

If there is no featured image, the results will display only the initial question: *Does this post have a featured image?*

## 2. Test ACF image field shortcode

Suppose you have an ACF image field (using the Advanced Custom Fields plugin) called `corp-photo`, but the image isn't being displayed properly when you use the [field connection shortcode](/beaver-themer/field-connections/connections-to-acf/connect-to-acf-fields-themer.md).

You can test for whether this field contains an image URL for a particular post or page and what URL  by adding this code to an HTML module in a Singular Themer layout.

**To get the URL for an ACF image field:**

```markup
Does this post have a corporate photo?
[wpbb-if post:acf type='image' name='corp-photo']Yes: [wpbb post:acf type='image' name='corp-photo']
[/wpbb-if]
```

The field connection shortcode for an ACF Image field returns the image URL, not the image itself. If this field contains an image, you can expect to see the image URL displayed, as shown in this screenshot.

![](/img/troubleshoot-field-connection-shortcodes-themer-c5abaf19.png)

If you wrap the ACF field connection shortcode in an `<img>` tag in your custom text output, you'll see the image instead of the URL, as shown in the following code and screenshot of the result.

```markup
Does this post have a corporate photo?
[wpbb-if post:acf type='image' name='corp-photo']Yes: <img src="[wpbb post:acf
  type='image' name='corp-photo']">
[/wpbb-if]
```

![](/img/troubleshoot-field-connection-shortcodes-themer-34d2af84.png)
