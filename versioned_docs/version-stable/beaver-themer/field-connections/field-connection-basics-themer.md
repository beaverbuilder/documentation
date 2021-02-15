---
id: field-connection-basics-themer
title: Field connections
sidebar_label: Field connections
---

Beaver Themer field connections work like variables. They let you connect certain row and module settings to external data on your site, such as the following:

  * Site information (site title, site tagline)
  * Post information (post title, post content, featured image, categories, tags, etc.)
  * Author information (author name, author bio, etc.)
  * User information (user name, user picture, etc.)
  * WordPress custom fields
  * Advanced Custom Fields (ACF plugin)
  * Pods custom fields (using the Beaver Themer Add-on).

Field connections allow a Themer layout to change the content it delivers depending on the post or page on which it occurs, as you can see in this animation, where the post title changes in the Themer layout as you change the page preview.

![](/img/field-connection-basics-themer-ec806c19.gif)

Besides Themer layouts, field connections work in rows and modules in the Beaver Builder editor and in saved rows and modules.

### Field connections vs. field connection shortcode

When you open a row or module for editing, you'll notice a plus sign next to some of the setting fields, as you can see in the following screenshot.

![](/img/field-connection-basics-themer-34d69222.png)

These plus signs indicate that you can set field connections to eligible data from another area of your site. If you click the plus icon, a list of eligible connections is displayed. For example, the  **Heading**  field in the Heading module has a number of eligible field connections. The following screenshot shows just a portion of the list.

![](/img/field-connection-basics-themer-f136dee9.png)

When you mouse over a field connection, you'll see a choice of **Connect** or **Insert**.

When you choose **Connect**, the field connection you choose becomes the field value for the item you're selecting it for – in this case, the **Heading** field.

If you choose  **Insert**, the text value of the field connection is [inserted as a shortcode](/beaver-themer/field-connections/field-connection-shortcodes-overview-themer.md), which means you can mix it with other text or shortcode you enter in the field.

## Field connection examples

### 1. Heading displays post title

Suppose you're building a layout where you want a Heading module to display the title of your post or page, such as this screenshot:

![](/img/field-connection-basics-themer-7e010233.png)

To do this, in your layout's first Heading module, you'd connect the **Heading** field to the **Post Title**.

As long as Beaver Themer is installed, whenever you're using the Beaver Builder editor, row and module settings that can take field connections appear with a plus sign next to them. When you click the plus sign, the eligible connections for that field are displayed, as shown in the following screenshot. You can scroll down through the list or use the search field at the top of the list and choose the connection you want.

![](/img/field-connection-basics-themer-f9419117.png)

### 2. Photo module displays featured image

Suppose you have a Themer layout that applies to posts, and you want to display the featured image. You could add a Photo module to your layout, then click the plus sign next to the **Photo** field to display the field connection choices, as shown in this screenshot. You can see that in this case the field connections are limited to images, such as featured images, author pictures, and custom fields that are defined as image data types.

![](/img/field-connection-basics-themer-bb2a2da5.png)

## Field connections must match the setting's data type

As you can see from the previous examples, the field connections that are listed depend on the module setting you're adding it to. In the first example, in the Heading module, the Heading field requires text values. In the second example, the Photo field requires an image.

You can see this action if you add a field connection for an image to a row or module setting that requires text. For example, if you click the plus sign next to the **Heading** field of the Heading module, you'll see **Post featured image** in the list.

![](/img/field-connection-basics-themer-d89f63e8.png)

If you chose **Post featured image** in a Photo module, you'd see the image, but when you select it for the Heading module, a settings window opens and you can choose which type of information about the image to display: **URL**, **Title**, **Caption**, **Description**, or **Alt Text**. You can also ignore the **Image size** field because the image won't display.

![](/img/field-connection-basics-themer-2becafae.png)

:::note **Note**
You might be wondering why there's no field connection to the header logo that's set in the Beaver Builder Theme Customizer. Currently, there are no field connections to Customizer settings. This is because each theme does customizer settings differently, so the field connections would have to be set up on a per-theme basis. Instead, if you want to add a logo to a header layout, for example, use a Photo module with a link to a logo image in your media library.
:::
