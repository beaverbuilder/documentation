---
id: wordpress-custom-fields
title: WordPress Custom Fields
sidebar_label: WordPress Custom Fields
---

[WordPress Custom Fields](https://wordpress.org/support/article/custom-fields/) is a feature in WordPress which allows you to add additional information to your pages, posts, and custom post types. You do this by adding a `key` which is the custom field name and a value which is the information you want to display on your page or post. You can then use Beaver Themer field connections to either [connect or insert](work-with-field-connections.md#connect-vs-insert) this data into your layout.

## Access WordPress Custom Fields

By default, Custom fields are hidden. You can make the custom fields panel visible on your post edit screen in two ways depending on whether you're using the default WordPress editor (Gutenberg) or the [Classic Editor plugin](https://wordpress.org/plugins/classic-editor/). 

:::info
When the Advanced Custom Fields plugin is installed and active on your website, the functionality of WordPress custom fields is deactivated. To utilize WordPress custom fields, you need to disable the Advanced Custom Fields plugin.
:::
### Block Editor (Gutenberg)

To enable WordPress custom fields while utilizing the Block editor, follow these steps:

1. On the **WordPress Edit Screen** for pages or posts and access the **Options** panel by clicking the (<i className="fa-solid fa-ellipsis-vertical"></i>) vertical ellipsis icon.
2. Choose **Preferences** from the dropdown menu.
3. In the popup window, select the **Panel** option.
4. Toggle the **Custom Fields** option to enable and finalize the process by clicking the **Enable & Reload** button.

![Access custom fields using WordPress default editor](/img/beaver-themer/field-connections--wp-custom-fields--1.jpg)

### Classic Editor Plugin

To enable WordPress custom fields while using the Classic Editor plugin, follow these steps:

1. On the **WordPress Edit Screen** for pages or posts and access the **Screen Options** panel located in the upper right corner.
2. Mark the checkbox for **Custom Fields**.
3. The **Custom Fields** panel will now become visible beneath the Classic Editor.

![Access custom fields using WordPress classic editor](/img/beaver-themer/field-connections--wp-custom-fields--2.jpg)

## Create a WordPress Custom Field



## Create a custom field & example

Once you have enabled **Custom fields** you can access the field panel below the WordPress editor.

1. Click the **Enter new** link and enter the name of your custom field.  
  In this example, we're using **kicker** as the `key`/field name. which will appear above the post title, as shown in the following screenshot, which now includes the text "Chapter One".
  
  ![Kicker custom field example](/img/beaver-themer/field-connections--wp-custom-fields--3.jpg)
 
  After you add this field, the **kicker** `key`/field name will appear on every Post editing screen, but the value is entered separately for each Post.  

  ![Add a custom field](/img/beaver-themer/field-connections--wp-custom-fields--4.jpg)

2. In the **Value** box, type in the text that you want above the Post Title for this post.  
  In this example, we're using the text **Chapter One**.
  
  ![Creating a custom field](/img/beaver-themer/field-connections--wp-custom-fields--5.jpg)

3. Click **Add custom field**.

4. Go to **WordPress Admin Dashboard > Beaver Builder > Themer Layouts**, and open the Themer layout in Beaver Builder.

5. Add the module to the layout that you want to display the custom field.  
  In this example, we're using a Heading module.

6. Click the plus sign next to the field you want to use and choose **Post Custom field**.  
  In this example, we'll put the custom field in the **Heading** field, as shown in this screenshot. 

  ![Using a field connection](/img/beaver-themer/field-connections--wp-custom-fields--6.jpg)

  If you've created more than one custom field, after you select **Post Custom Fields** you'll be asked to enter the **Key** for the field you want. For this example, we'll use **kicker** as the `key`/field name which we set in #1.
  
  ![Entering a custom field value](/img/beaver-themer/field-connections--wp-custom-fields--7.jpg)

7. Save the module and publish the Themer layout.  
  You should now see the custom field displayed.

:::info
To remove a custom field, you'll need to edit your database using a plugin tool or phpMyAdmin in cPanel.
:::

