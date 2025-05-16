---
id: create-a-video-lightbox-for-an-amazon-s3-video
title: Create a video lightbox for an Amazon S3 video
sidebar_label: Create a video lightbox for an Amazon S3 video
---

These instructions assume that you haven't uploaded your video to Amazon S3 yet but also describe the folder structure and file permissions you need to get the video lightbox to work. Thanks to one of our members for providing this information!

1. Create a folder on Amazon S3 that ends as a domain name.  
  For example, create a folder with your domain name at the end, such as
*name.myurl.com*.

2. Under that folder, create another folder with any name.
3. Upload the video.
4. Change the permissions of the video file to the following:
   * Group: **All user**
   * Privilege: **Read Only**
   * ACP: **None**  
    
   The method to change the permissions varies depending on the tool you’re using to access the file on Amazon S3. [This article](http://docs.aws.amazon.com/AmazonS3/latest/UG/EditingPermissionsonanObject.html) may be helpful.

5. In the Beaver Builder editor, create an HTML module where you want your video to appear in your layout.

6. Add the following code to the HTML module. Substitute an `ID`, your video URL, and your cover image or text URL in the `<a>` tag. See the previous procedure for an example of how to add the cover image tag or text.  
  
  ```markup
  <a id="ADD-YOUR-ID" href="https://name.myurl.com.s3.amazonaws.com/SUBFOLDER-NAME/VIDEO-FILENAME.mp4">ADD TEXT or IMAGE URL</a>

  <script type="text/javascript">

  jQuery(function () {
    jQuery("#ADD-YOUR-ID").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      fixedContentPos: false,
    });
  });

  </script>
  ```

:::info
If you use this code more than once on the same page, make sure the
ID is unique in each occurrence. In CSS, classes can repeat, but ID values
must always be unique on a page.
:::
