---
id: add-a-page-post-or-custom-post-type-template
title: Add a page, post, or custom post template
sidebar-label: Add a page, post, or custom post template
---

You can create a custom WordPress template for a page, post, or custom post type and make it appear in the **Template** dropdown list on page, post, or custom post type editing screens.

:::tip **Tip**
Singular templates that you create with Beaver Themer use a slightly different procedure. See the article on [adding a Singular Themer layout to the Template field](/beaver-themer/layout-types-modules/singular-layout-type/add-a-singular-themer-layout-to-the-wordpress-page-template-field).
:::

## Add a custom page template to the Template list

However, you can treat them like other  [WordPress page templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/) and add them to the **Template** dropdown list with a bit of PHP code. You can add the choice to pages only, posts only, or both.

In this example, we'll add a custom page template called **Landing page** to the **Template** field for pages, as shown in the following screenshot.

![](/img/add-a-page-post-or-custom-post-type-template-6c9f6bf5.png)

This procedure requires that you have a child theme installed, so your changes don't get overwritten with theme updates.

**To add a custom page template to the Template field:**

1. Create your custom page template.  
  You can start from scratch, or you can copy `page.php` from the main theme to the child theme. Name your custom template file `page- <my-custom-page-template>.php`, where `< my-custom-page-template>` is any name for the template that is meaningful to you.
2. Just under the `<?php` opening line, paste in the following lines:  
  ```html
  /*
    Template Name: Landing page
    Template post Type: page
  */
  ```  
  In Line 2, the template name **Landing page** will appear as the value in the **Template** dropdown list.  
  Line 3 specifies that this value will only appear for pages, not for posts.
3. Save the file and place it in the top-level directory of your child theme on your WordPress site.
4. Open a page for editing and check for the name of your template in the **Template** dropdown list.

## Add a custom post template to the Template list

The procedure to add a template for posts is nearly identical as that for pages.   The different is that you will use a different template file for posts. For example, suppose you want to create a custom template for all your blog posts called My blog, so it's available in the Templates lists for all single posts, as in this screenshot:

![](/img/add-a-page-post-or-custom-post-type-template-506600d8.png)

**To add a custom post template to the Template field:**

1. For single posts, copy `single.php` from your main theme to your child theme and name it `simple- <my-custom-post-template>`, where `< my-custom-post-template>` is a meaningful label for your post template.
2. Just under the `<?php` opening line, paste in the following lines:  
  ```html
  /*
    Template Name: My blog
    Template Post Type: post
  */
  ```  
  In Line 2, the template name **My blog** will appear as the value in the **Template** dropdown list of posts.
  Line 3 specifies that this value will only appear for posts.
3. Save the file and place it in the top-level directory of your child theme on your WordPress site.
4. Open a post for editing and check for the name of your template in the **Template** dropdown list.

## Add a custom post type template to the Template list

Assuming your custom post type is derived from a standard post, the procedure is pretty much the same as for standard posts, but you'll use the slug of the custom post type as the template post type.

For example, suppose you have a custom post type for Reviews, and you want to add a template called Review that users can select when they edit that custom post type, as shown in the following screenshot.

![](/img/add-a-page-post-or-custom-post-type-template-a97607b3.png)

**To add a custom post type template to the Template field:**

1. Find the slug of your custom post type. One way to do this is to view one of the custom post type pages and copy the slug from the URL.
2. Copy `single.php` from your main theme to your child theme and name it `simple- <my-custom-post-type-template>`, where `< my-custom-post-type-template>` is a meaningful label for your post template.  
  In this case, it could be called `simple-review`.
3. Just under the `<?php` opening line, paste in the following lines:  
  ```html
  /*
    Template Name: Review
    Template Post Type: review
  */
  ```  
  In Line 2, the template name **Review** will appear as the value in the **Template** dropdown list of posts.  
  Line 3 specifies that this value will only appear for custom posts of type *review* .
4. Save the file and place it in the top-level directory of your child theme on your WordPress site.
5. Open a post for editing and check for the name of your template in the **Template** dropdown list.  
  If the **Post Attributes** panel was not there previously, it should appear when you add this custom file, or you can check in Screen Options to see if the **Page attributes** field needs to be enabled.
