---
id: change-element-visibility-by-user-login-and-capability
title: Change element visibility by user login and capability
sidebar_label: Change element visibility by user login and capability
---

You can choose if a row, column, or module is visible or hidden, based on
whether a user is logged in, logged out, or never (meaning the element is only
visible to the person editing the page). If you choose to show an element only
when a user is logged in, you can also enter a capability the user must have.

:::note **Note**
If you limit visibility, an Eye icon will appear in the row, column,
or module toolbar, as shown in the following screenshot:

![](/img/how-to-tips-change-element-visibility-1.png)
:::

Here are some ways the Beaver Builder community has used the visibility
feature:

  * You have a subscription or membership site and have a call to action that you only want to display to users who aren't logged in.
  * You want to hide the login form in a row after the user has logged in.
  * You are testing some new content and want to show it only to your site's editors and administrators before taking it live. (Choose **Logged in user** and edit the capability.)
  * You want to hide time-sensitive info on an event site so that when it's time to show it again, you can unhide it. (Choose **Logged in user** and set the capability to Administrator).

For a description of WordPress user roles and capabilities, see the [WordPress codex](https://wordpress.org/support/article/roles-and-capabilities/).

**To change element visibility by user login:**

  1. Open a row, column, or module for editing.
  2. Click the **Advanced** tab and navigate to **Visibility**.
  3. Select the user login status.  
If you select **Logged in user**, you can also select a capability to fine-
tune which users can see the row, column, or module.

:::tip **Tip**
If you have Beaver Themer installed, you can [fine-tune visibility using conditional logic](/beaver-themer/conditional-logic/beaver-themer-conditional-logic.md).
:::
