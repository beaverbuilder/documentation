---
id: how-beaver-builder-renders-the-title-of-an-image
title: How Beaver Builder renders the title of an image
sidebar_label: How Beaver Builder renders the title of an image
---

Search engines and accessibility readers pay attention to the `title` and
`alt` attributes of the `<img>` element to collect information about images,
so it's helpful to know how the Media Library metadata is autopopulated based
on metadata in the images you upload,  and how Beaver Builder modules make use
of Media Library information about images in the Media Library to render the
HTML.

:::note
Not sure of the difference between the HTML `<img title="">` and `<img alt="">`
attributes? [This article](https://www.wpromote.com/blog/image-alt-vs-title-using-alt-title-attributes-in-image-tags/) has a nice summary.
:::

:::info
Usually browsers display the image title in a yellow box when users
mouse over the image. When Beaver Builder renders the HTML `<img title="">`
attribute, it suppresses this popup display, but the `title` attribute is
still available to search engines and readers in the HTML source.
:::

The following table shows how WordPress imports an image's IPTC metadata in
the Media Library when you upload an image, and how Beaver Builder renders the
HTML output from the Media Library fields. See the notes below the table for a
description of each row.

\#  |  When the image's IPTC metadata contains: | These Media Library fields are autopopulared | And Beaver Builder renders this HTML output
---|---|---|---  
1  |  Title metadata only  |  **Title** field only  |  `<img title="">` and `<img alt="">` attributes = Media Library **Title** field  
2  |  Caption/Description metadata only  |  **Title** field = **Caption** field  |  `<img title="">` and `<img alt="">` attributes = Media Library **Title** and **Caption** fields  
3  |  Title and Caption/Description metadata  |  **Title** field = IPTC Title;<br/>**Caption** field = IPTC Caption/Description  |  `<img title="">` attribute = Media Library **Title** field<br/>`<img alt="">` attribute = Media Library **Caption** field  

The previous table shows:

  * **#1** The Title field renders both title and alt attributes in the HTML output Beaver Builder renders identical HTML `<img title="">` and `<img alt="">` attributes, even though the Media Library **Alt Text** field is empty.

  * **#2** If the image has IPTC Caption/Description metadata but no IPTC Title metadata, WordPress populates the Media Library **Title** and **Caption** fields with the same value and leaves the **Description** field empty. Beaver Builder renders identical HTML `<img title="">` and `<img alt="">` attributes, even though the Media Library **Alt Text** field is empty.

  * **#3** If the image has both IPTC Title and Caption/Description metadata, then the WordPress **Title** field is populated with the IPTC Title, and the WordPress **Caption** field is populated with the IPTC Caption/Description. Beaver Builder renders the HTML `<img title="">` attribute from the **Title** field and the `<img alt="">` attribute from the **Caption** field, even though the Media Library **Alt Text** field is empty.

  * **#1-3** When the Media Library **ALT Text** field has no value, Beaver Builder uses the Media Library **Caption** field or falls back to the Image Library **Title** field as the value for the HTML `<img alt="">` attribute. If you manually add an **ALT Text** field value to the image in the Media Library, the HTML `<img alt="">` attribute takes the Media Library **ALT Text** value.

:::tip **Tips**
Check and fix your Media Library **Title** and **Alt Text** fields
as soon as you upload an image. If the image has no IPTC Title value set,
WordPress populates the Media Library **Title** field with the image's file
name.

This means, for example, if your file name is *IMG_12345.jpg* and you
don't manually change the values in the **Title** or **Alt Text** fields, the
HTML `<img title="">` and `<img alt="">` attribute values will be a nondescriptive
file name. This is not good for search engine optimization.
:::
