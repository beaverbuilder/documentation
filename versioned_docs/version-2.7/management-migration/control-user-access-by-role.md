---
id: control-user-access-by-role
title: Control user access by role
sidebar_label: Control user access by role
description: Explains how to change the default user roles for access to various areas of the Beaver Builder UI.
---

You can control user access to admin and editing ability in Beaver Builder on the **User access** tab in **Settings > Beaver Builder > User access**.

Here's a screenshot of the **User access** tab, with a description below.

![](/img/the-basics-control-user-access.png)

## Access areas and default access

Each of four WordPress user roles -- Administrator, Editor, Author, Contributor -- can independently be granted or denied access to two Beaver Builder areas in the front end and two areas in the admin area, as described below.

:::info
If other plugins add custom roles or you create your own roles, the custom roles that match the built-in WordPress role of Contributor or higher will also appear in the Beaver Builder user access lists.
:::

###  Frontend

Area  |  Description  |  Default access  
---|---|---  
Builder access  |  Ability to edit pages, posts, and custom post types in Beaver Builder  |  Administrator,<br/>Editor,<br/>Author,<br/>Contributor
Unrestricted editing  |  Full access to all Beaver Builder editing features.|  Administrator,<br/>Editor,<br/>Author,<br/>Contributor  
Global rows and modules editing  |  Full access to opening global rows and modules from a Beaver Builder editing page  | Administrator,<br/>Editor,<br/>Author,<br/>Contributor  

### Admin

Area  |  Description  |  Default access  
---|---|---  
Builder admin  |  The Builder tab is displayed on the Builder admin menu, with full access there.  |  Administrator  
Template data exporter  |  The tool for theme authors to export their templates. (Note this is different from exporting Beaver Builder layout templates.) See the article on [theme author templates](/beaver-builder/developer/how-to-tips/theme-author-templates.md). |  None  
Themer layout editing **(if Beaver Themer is installed)** |  Selected user roles can edit Themer layouts.  |  Administrator  

## Restricted access examples

Here are more details about each of these four Beaver Builder areas and how user roles are limited when denied access.

### Builder access

There's a user access field called **Builder access**. This setting controls which user roles can edit pages, posts, and custom post types in Beaver Builder.

For example, if you remove the Editor role from the **Builder access** field, then a user logged in with the Editor role will not see **Beaver Builder** as an editing option in Pages, Posts, custom posts, and Themer layouts. Here's a screenshot of a page that an Editor might see:

![](/img/the-basics-control-user-access-2.png)

If a user with the role of Editor clicks **Edit**, which would normally bring up the options to launch Beaver Builder or use the standard editor, they'll see the following screenshot instead, indicating that Beaver Builder is active, with an option to view the page, but not to edit it.

![](/img/the-basics-control-user-access-3.png)

If Beaver Themer is installed, a user with Editor role who's denied Builder access won't see an option to edit Themer layouts in Beaver Builder, but if they click **Edit**, they'll see the typical WordPress editing screen and will be able to edit Themer layout information on that page, such as location and user access. To prevent them from doing that, change access in the **Themer layout editing** field on the **User access** tab at **Settings > Beaver Builder**.

:::info
Removing a user role in the **Builder access** field removes access to the Beaver Builder editor entirely. In contrast, restricting access in the **Unrestricted editing** field allows the user to open the Beaver Builder
editor but only change content and settings for an existing module. See the next section for more information.
:::

### Unrestricted and restricted editing (frontend)

With unrestricted editing access in Beaver Builder, WordPress roles are still limited by the capabilities assigned to each role. For example, even if
Contributors have unrestricted editing in Beaver Builder, their default WordPress capabilities do not give them access to the Media Library. so whether in the WordPress text editor or in a Beaver Builder Photo module, they cannot upload photos or get an image from the Media Library. However, they can use the Photo module and use a URL to an image. For a list of the default WordPress capabilities assigned to each role, see the [WordPress codex](https://wordpress.org/support/article/roles-and-capabilities/).

When Beaver Builder editing is restricted for any role, the user will see only the **Wrench** icon, as shown in the following screenshot. Notice also that the Content panel and Tools menu are hidden. There are no drag handles on the
rows and columns.

![](/img/the-basics-control-user-access-4.png)

To reinforce the uniformity across roles of restrictions on editing here are some common tasks in Beaver Builder showing whether roles with restricted Beaver Builder editing can accomplish them. "Restricted editing" means that you have removed that user role from the **Unrestricted editing** field.

Beaver Builder editing task  |  Administrator  |  Editor  |  Author  |  Contributor  
---|---|---|---|---  
Access the Tools menu  |  no  |  no  |  no  |  no
Access the content panel  |  no  |  no  |  no  |  no  
Edit and save existing rows and modules in the layout  |  yes  |  yes  |  yes(Posts only)  |  yes (Posts only)  
Edit and save existing columns in the layout  |  no  |  no  |  no  |  no  
Resize rows and columns with drag handles or settings  |  no  |  no  |  no  |  no  
Move rows, columns, noand modules around in the layout  |  no  |  no  |  no  |  no  
Delete rows, columns, and modules  |  no  |  no  |  no  |  no  
Edit and save existing global rows and modules in the layout (if still given access in **Global rows and modules editing** field)  |  yes  |  yes  |  yes |  yes  
Use saved rows and modules  |  no  |  no  |  no  |  no  
Save layout templates  |  |  no  |  no  |  no  
Publish, save, and discard edited pages.  |  |  yes  |  yes  |  Submit for review, save, discard  

In addition, users whose frontend access is restricted will not see the **Beaver Builder** menu in the WordPress admin panel.

What does this mean? Essentially every role is limited to editing row and module content in existing layouts. They cannot alter the layout, delete rows or modules, or create new pages in Beaver Builder. In nearly all cases, you'll need at least one role who has unrestricted editing capability.

### Ability to edit global rows and modules (frontend)

By default, all user roles can save, edit and delete rows and modules globally -- in Beaver Builder layouts, and for saved templates, rows, columns, and modules, both in the Content panel and from the **Beaver Builder** menu in the WordPress admin panel.

To any role whose access to editing global rows and modules is restricted, the following restrictions apply:

* If a global row or module appears in a layout, it displays a lock icon in the toolbar, as shown in the following screenshot.  
* 
![](/img/the-basics-control-user-access-5.png)

* The user can still save standard rows and modules can't save them globally because the  Global field is missing, as you can see in this screenshot.   
* 
![](/img/the-basics-control-user-access-6.png)

* Users with unrestricted editing access can drag a global row or module from the Content panel into the layout, but the global row or module will display the lock and can't be deleted. The only option would be to delete the column or row in which it appears.

  :::note  **Note**
  Enabling a user role in this field depends on unrestricted frontend  access for that user role. See the *User access hierarchy* section below.
  :::

### Builder admin (admin)

By default, only Administrators can access the Builder menu in the WordPress admin panel.

Having access means the following:

* You can see the Builder menu in the WordPress admin panel
* You can edit and save templates, rows, and modules

  :::info
  Enabling a user role in this field depends on unrestricted frontend  access for that user role. See the User access hierarchy section below.
  :::

### Themer layout editing (admin)

If you have Beaver Themer installed, you'll see an additional category on the
User access tab for Themer layout editing. By default, only Administrators
have access. Having access means you can create, edit, and save Themer
layouts.

If access is restricted through the **Themer layout editing** setting, users
won't see the **Themer Layouts** submenu item and so can't access the layouts from the WordPress admin panel, and trying to access a Themer layout by direct URL redirects to editing the home page of the site. Here's a screenshot example in which the Builder admin settings is set to both Administrator and Editor, while Themer layout editing is set to only Administrator. In the WordPress admin panel, a user logged in as Editor will see the Builder menu but not the Themer submenu.

![](/img/the-basics-control-user-access-7.png)

![](/img/the-basics-control-user-access-8.png)

## User access hierarchy

There is a user access hierarchy to these frontend and admin areas, as follows:

* Users who get global row and module editing access require unrestricted editing access.
* Users who get Builder admin access must have unrestricted editing access.
* Users who get Themer layout editing access must have unrestricted editing access and Builder admin access.

Restricted access to either unrestricted frontend editing or the Builder admin removes the Builder menu from the WordPress admin panel, and enabling access at a lower level (Builder admin or Themer layout editing) will not add it back.
