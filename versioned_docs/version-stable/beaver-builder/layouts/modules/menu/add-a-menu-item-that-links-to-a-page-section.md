---
id: add-a-menu-item-that-links-to-a-page-section
title: Add a menu item that links to a page section
sidebar_label: Add a menu item that links to a page section
---

You can add a menu item whose link goes to a specific section on the same page
or a section on a different page. This works with any WordPress menu, which
you can create and edit either on the [Beaver Builder
Theme](https://www.wpbeaverbuilder.com/wordpress-framework-theme/)'s **Menus**
tab in Customizer, or by clicking **Appearance > Menus** in the WordPress
admin panel. It also works in the [Beaver Builder
plugin](https://wpbeaverbuilder.com)'s Menu module, in which you select one of
the WordPress menus you've created.

:::note **Note**
If the section is on the same page, there's a smooth scroll to the
linked section. If the link goes to a section on a different page, there's an
immediate jump to that section on the other page.
:::

This technique involves two steps: adding a unique ID to the target section in
a Beaver Builder layout, then adding the link with that unique ID to your
WordPress menu.

## 1. Add a unique ID to the target row

:::tip **Tip**
You can add the ID to a module, a column, or a row, but the target
tends to position best if you add the ID to the row containing the item you
want to link to. Also, if the section is near the end of the page, the
scrolling section may not go directly to the section with the ID. This is a
property of how browsers handle links to targets.
:::

  1. In the Beaver Builder editor, open the row (or column or module) that you plan to link to.
  2. Click the **Advanced** tab and scroll down to the **HTML elements** section.
  3. For the **ID** setting, add a unique value such as `my-unique-id`.   
ID values may only contain alphanumeric characters, hyphens, or underscores.

**Tip:** It's a best practice to prefix the ID value with something that helps
identify it as coming from you. For example, if your business name is Best
Website Designs, your ID value might be `bwd-menutarget-1`. Just make sure the
ID value is something different from any other ID on your site.

## 2. Add the unique ID to a menu item

  1. On the WordPress admin menu, click **Appearance > Menus** and make sure the menu you want to use is displayed.
  2. In the left column expand the **Custom links** category.  
![](/img/how-to-tips-add-menu-that-links-1.png)

  3. Enter the full URL of the target page in which the section occurs, followed by the pound sign and your ID. For example, if the section occurs on the page *<https://www.example.com/goals/>* , then your URL would be:  
*<https://www.example.com/goals/#my-unique-id>*

  4. Enter whatever link text you want your menu item to display.
  5. Click **Add to menu**.
