---
id: add-a-singular-themer-layout-to-the-wordpress-page-template-field
title: Add a Singular layout to the WordPress Page Template field
sidebar_label: Add a Singular layout to the Page Template field
---

Singular-type Themer layouts that you create in Beaver Themer do not by default appear in the WordPress **Template** dropdown list on page or post editing screens. However, you can treat them like other [WordPress page templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/) and add them to the **Template** dropdown list with a bit of PHP code. You can add the choice to pages only, single posts only, or both.

In this example, we'll add a Singular Themer layout to the **Template** field for both posts and pages, as shown in the following screenshot.

![](/img/add-a-singular-themer-layout-to-the-wordpress-page-template-field-8fd299ae.png)

Once you've completed this procedure, you can choose the new template to change any single page or post.

:::note **Note**
The name in the **Template** field dropdown list comes from the information you add to a file in the following procedure. The Themer layout is related by its ID, not by its title.
:::

This procedure has the following requirements:

  * The Beaver Themer plugin is installed and activated.
  * You have created a Singular-type layout in Beaver Themer.
  * You are using a child theme, so your changes won't get overwritten with theme updates.

**To add a Beaver Themer Singular Themer layout to the Template field of all pages and posts:**

  1. Get the ID of the Beaver Themer Singular Themer layout that you want to use.  
  On the WordPress admin panel, click **Beaver Builder**, then click **Edit** for the Singular-type layout that you want to use. Make a note of the ID number, which is displayed in the URL when the layout is open for editing.
  2. In a text editor, create a file that will hold the code for the custom page template.  
  Just to help us remember the purpose of that custom file, we'll follow the [WordPress global template naming suggestion](https://developer.wordpress.org/themes/template-files-section/page-template-files/#creating-custom-page-templates-for-global-use) and use `page_` followed by the template name we want to use:  
  `page_test_singular.php`  
  **Note:** Do not use `page-` with a hyphen, use `page_` with an underscore.
  3. Paste the following code into the file.  
  ```php
  <?php
  /*
  Template Name: Test Singular
  Template Post Type: page, post
  */
  //Substitute your own page ID in the following line
  FLThemeBuilderLayoutRenderer::render_all( 88 );
  ```
  4. In the third line, replace `Test Singular` with the term you want to appear in the **Template** dropdown list.
  5. In the fourth line, leave as is for the template name to appear for both pages and Posts, or leave one and delete the other if you want it to apply selectively to pages or posts.
  6. In the last line, replace `88` with the ID number of your Singular-type Themer layout.
  7. Save the file and place it in the following location on your WordPress site:
  *site-root/wp-content/themes/bb-theme-child/*

Open a page or post for editing and check for the name of your layout in the **Template** dropdown list.
