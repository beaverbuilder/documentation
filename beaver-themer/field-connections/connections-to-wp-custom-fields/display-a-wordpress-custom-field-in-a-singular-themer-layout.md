---
id: display-a-wordpress-custom-field-in-a-singular-themer-layout
title: Display a WordPress custom field in a Singular layout
sidebar_label: WordPress custom field in a Singular layout
---

Here's a detailed example of how to set up a standard WordPress custom field and use it in a Themer layout.

Suppose you create a Singular layout template using the default template for that type, where the featured image is used as a row background, and the post title and other post meta information are displayed in that row:

![](/img/display-a-wordpress-custom-field-in-a-singular-themer-layout-80a13966.jpg)

Suppose that in addition, you want authors to add a custom note to every post, which will appear above the post title, as shown in the following screenshot, which now includes the note "Report from the field."

![](/img/display-a-wordpress-custom-field-in-a-singular-themer-layout-4c99ba14.jpg)

It's easy to do this by creating a custom field in WordPress and then using the **Custom field** connection from your module. Here's how.

  1. Open any Post for editing.
  2. To display custom fields on the editing page, click **Screen Options** in the upper right corner and select the **Custom fields** checkbox.  
  This opens the **Custom fields** panel below the content area.
  3. Click the **Enter new** link and enter the name of your custom field.  
  In this example, we're using the name **top-note**.  
  After you add this field, the name will appear on every Post editing screen, but the value is entered separately for each Post.  
  ![](/img/display-a-wordpress-custom-field-in-a-singular-themer-layout-c96eaccd.png)
  4. In the **Value** box, type in the note that you want above the Post Title for this post.  
  In this example, we're using the note **Report from the field**.
  5. Click **Add custom field**.
  6. Go to **Beaver Builder > Themer Layouts**, and open the Themer layout in Beaver Builder.
  7. Add the module to the layout that you want to display the custom field.  
  In this example, we're using a Heading module.
  8. Click the plus sign next to the field you want to use and choose **Post Custom field**.  
  In this example, we'll put the custom field in the **Heading** field, as shown in this screenshot.  
  ![](/img/display-a-wordpress-custom-field-in-a-singular-themer-layout-525bdff3.png)  
  If you've created more than one custom field, after you select **Post Custom Fields** you'll be asked to enter the **Key** for the field you want.
  9. Save the module and publish the Themer layout.  
  You should now see the custom field displayed.

:::tip **Tip**
If you want to add some static text on the same line as the custom field, you can use a field connection shortcode instead.
:::

:::info
To remove a custom field, you'll need to edit your database using a plugin tool or phpMyAdmin in cPanel.
:::
