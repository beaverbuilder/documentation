---
id: add-a-menu-item-that-links-to-a-page-section
title: Add a menu item that links to a page section
sidebar_label: Add a menu item that links to a page section
description: Here's how to create an anchor for a specific part of the page and link to it from a menu.
---

<div className="embed-responsive embed-responsive-16by9">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PofxCzgqbN8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

You can add a menu item whose link goes to a specific section on the same page
or a section on a different page. This works both with menus you set up in your theme and menus in the Beaver Builder Menu module. It's particularly useful for single-page websites where you have a menu for the various sections on that  page.

:::info
If the section is on the same page as the link, there's a smooth scroll to the
linked section. If the link goes to a section on a different page, there's an
immediate jump to that section on the other page.
:::

This technique involves two steps: adding a unique ID (called an *anchor*) to the target section in a Beaver Builder layout, then adding the link with that anchor to your menu.

## 1. Create the anchor for the link target

:::tip **Tip**
You can add the ID to a module, a column, or a row, but the target
tends to position best if you add the ID to the row containing the item you
want to link to. Also, if the section is near the end of the page, the
scrolling may not go all the way down to the section with the ID. This is a
property of how browsers handle links to anchors.
:::

  1. In the Beaver Builder editor, open the row (or column or module) that you plan to link to.
  2. Click the **Advanced** tab and scroll down to the **HTML elements** section.
  3. For the **ID** setting, add a unique value such as `my-unique-id`.   
ID values may only contain alphanumeric characters, hyphens, or underscores.

:::tip **Tip:** 
It's a best practice to prefix ID and class values with a namespace. The namespace prefix plays a double role. 

First, it helps identify where the ID or class comes from. For example, Beaver Builder uses the namespace `fl-`, so when you're inspecting the HTML source for a page, it's easy to identify the Beaver Builder code as opposed to, say, that of other plugins. 

Second, a namespace helps to avoid accidentally using words that are reserved for use in coding languages like [PHP](https://www.php.net/manual/en/reserved.php) and [JavaScript](https://www.w3schools.com/js/js_reserved.asp) or duplicating IDs and classes from other products. 

For example, if your business name is Best Website Designs, you might choose `bwd-` as your namespace prefix and your ID value might be `bwd-menutarget-1`. Just make sure each ID value is unique on your site.
:::

## 2. Add the unique ID to a menu item

  1. On the WordPress admin menu, click **Appearance > Menus** and make sure the menu you want to use is displayed.
  2. In the left column expand the **Custom links** category.  
![](/img/how-to-tips-add-menu-that-links-1.png)

  3. Enter the full URL of the target page in which the section occurs, followed by the pound sign and your ID. For example, if the section occurs on the page *<https://www.example.com/goals/>* , then your URL would be:  
*<https://www.example.com/goals/#my-unique-id>*

  4. Enter whatever link text you want your menu item to display.
  5. Click **Add to menu**.
