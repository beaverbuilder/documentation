---
id: add-buttons-to-your-navigation-menu
title: Add buttons to your navigation menu
sidebar_label: Add buttons to your navigation menu
---

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/I1irvUcHqGM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

You can add a button to your navigation menu, such as the one shown in this screenshot.

![](/img/add-buttons-to-your-navigation-menu-052f90d2.jpg)

To add a button, first, create a menu item that you want to turn into a button. Then add a class to that menu item. Finally, add some CSS code for that class. Here we show you how.

**Add the menu item you want to become a button:**

  1. From the WordPress admin panel, go to **Appearance > Menus** or **Customize > Menus**.
  2. If you have more than one menu, select the one you want to edit from the list.
  3. Add the menu item that will become a button.
  4. Click **Save Menu** or just continue to the next task.

**Add a custom class to the menu item:**

  1. Click the arrow on the menu item so it expands to show extra settings.  
  If you don't see an arrow, click **Screen options** in the upper right corner of the screen. In the section **Show advanced menu properties**, select **CSS classes**.
  2. In the **CSS Classes** field, enter a class for the menu item.  
  It's a best practice to prefix the class with a letter string unique to you to avoid conflict with other built-in classes. In this example, we'll use **ss-nav-button** for the class name.
  3. Click **Save Menu**.

**Add CSS rules for the class:**

See the [article on where to add CSS code](/beaver-builder/styles/custom-code).

* Add the following CSS rules. Be sure to change the class in these lines to the custom class you used.  
  Change the other settings for the button layout and style as you like.  

  ```css
  /* Give the link some padding and some color */
  .fl-page-nav .navbar-nav > li.ss-nav-button {
    padding: 10px;
  }

  .fl-page-nav .navbar-nav > li.ss-nav-button > a {
    padding: 5px 18px !important;
    color: #ffffff !important;
    border-radius: 5px;
    background-color: #0f637d;
  }

  /* Adjust the position for the fixed navigation menu */
  .fl-page-header-fixed .fl-page-nav .navbar-nav > li.ss-nav-button > a {
    position: relative;
    bottom: 6px;
  }

  /* Give the button a hover & active state */
  .fl-page-nav .navbar-nav > li.ss-nav-button > a:active,
  .fl-page-nav .navbar-nav > li.ss-nav-button > a:hover {
    color: #ffffff !important;
    background-color: #196f8c;
  }
  ```
