---
id: configure-how-wordpress-handles-your-blog
title: Configure how WordPress handles your blog
sidebar_label: Configure how WordPress handles your blog
---

How you configure your blog in WordPress in **Customize > Settings > Static front page** depends on the following factors:

  * Whether you plan to display a Post index (a summary list of your blog posts) on the home page of your site or not.
  * Whether you plan to use WordPress-generated index and archive summary pages or regular Pages with Beaver Builder Post modules.

If you're not sure what WordPress-generated index and archive pages are, see the article about  [how WordPress handles blogs](/beaver-builder/layouts/post-layouts/basics-how-wordpress-handles-blog-posts-and-archives.md).

:::note **Note**
These options are only concerned with whether you use WordPress-generated index page or one of the Beaver Builder Posts modules to display a summary of your Posts. The choice is not affected by whether you plan to use Beaver Builder layouts in your blog posts.
:::

## Option 1: Set up a WordPress-generated index page as your site's home page

Use this procedure when you plan to put your blog on your home page and have WordPress generate the Posts index on that page. In other words, your home page will have no physical Page; WordPress will generate it when the home page loads.

:::tip **Tip**
Don't use this procedure if you plan to use any of the Beaver Builder Posts modules on your home page.
:::

  1. Go to  **Customize > Settings > Static front page**.
  2. Select **Your latest post**.  
  This setting instructs WordPress to generate your Posts index as your home page.
  3. Save and publish.

## Option 2: Set up a WordPress-generated index page somewhere besides your home page

Use this procedure when you plan to locate your blog on some other page of your site besides the home page and let WordPress generate the index for the blog posts. In the example in the following screenshot, you'd use this procedure to create the Blog page linked from this menu item, assuming that WordPress would generate the Posts index on that page.

![](/img/configure-how-wordpress-handles-your-blog-0219dd8c.png)

:::tip **Tip**
Don't use this procedure if you plan to use any of the Beaver Builder Posts modules on that page.
:::

This procedure has two tasks: creating the page and then configuring WordPress to know you want your blog to start on that page.

### Task 1: Create an empty Page

This empty page will serve as the place where WordPress generates the Posts index.

  1. From the WordPress admin panel, go to  **Pages > Add New**.
  2. Create a title for your Posts archive page and click  **Publish**.
  3. If you want your new page to appear in your menu and it isn't added automatically, add it manually at  **Customize > Menus**.

### Task 2: Configure WordPress to generate the Posts index on that page

  1. Go to  **Appearance > Customize > Settings > Static front page**.
  2. In the  **Post page**  box, select the page you just created.  
  This setting instructs WordPress to generate a Posts index on that page.

  3. Save and publish.

## Option 3: Configure WordPress when you don't use WordPress to generate a Posts index

Use this procedure when you don't plan to use WordPress to generate a Posts index. This includes the following cases:

  * You don't plan to create Posts or a Posts summary.
  * You plan to use one of the Beaver Builder Posts modules to display a summary of your Posts on any page on your site, rather than a WordPress-generated index page.

This procedure applies whether or not the Posts module appears on your home
page or elsewhere.

  1. Go to  **Appearance > Customize > Settings > Static front page**.
  2. Select **A static page**.
  3. For **Front page**, elect the name of your home page.
  4. For **Posts page**, don't select anything.
  5. Save and publish.

![](/img/configure-how-wordpress-handles-your-blog-481c8f69.png)
