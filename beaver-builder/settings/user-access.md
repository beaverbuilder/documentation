---
id: user-access
title: User Access Tab
sidebar_label: User Access
description: The User Access tab in the Beaver Builder settings lets you limit which Beaver Builder features users can access.
---

The **User Access** tab in the Beaver Builder settings lets you limit which Beaver Builder features users can access.

## Access User Access tab

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **User Access** tab.

![Access User Access tab settings](/img/beaver-builder/settings--user-access--1.jpg)

## Frontend

The **Frontend** section lets you limit access to the builder, unrestricted editing and global rows, columns and modules.

### Builder Access

The selected roles will have access to the builder for editing posts, pages, and custom post types.

For example, if you remove the Editor role from the Builder access field, then a user logged in with the Editor role will not see Beaver Builder as an editing option in Pages, Posts, custom posts, and Beaver Themer layouts. Here's a screenshot of a page that an Editor might see:

![Restricted access to Beaver Builder](/img/beaver-builder/settings--user-access--2.jpg)

If a user with the role of Editor clicks Edit, which would normally bring up the options to launch Beaver Builder or use the standard editor, they'll see the following screenshot instead, indicating that Beaver Builder is active, with an option to view the page, but not to edit it.

![Restricted to viewing Beaver Builder pages](/img/beaver-builder/settings--user-access--3.jpg)

If Beaver Themer is installed, a user with Editor role who's denied Builder access won't see an option to edit Themer layouts in Beaver Builder, but if they click Edit, they'll see the typical WordPress editing screen and will be able to edit Themer layout information on that page, such as location and user access. To prevent them from doing that, change access in the Themer layout editing field on the User access tab at Settings > Beaver Builder.

:::info
Removing a user role in the **Builder Access** field removes access to the Beaver Builder editor entirely. In contrast, restricting access in the Unrestricted editing field allows the user to open the Beaver Builder editor but only change content and settings for an existing module. See the next section for more information.
:::

:::tip
Default access for **Builder Access** is applied to the Administrator, Editor, Author, and Contributor user roles.
::: 

### Unrestricted Editing

When Beaver Builder editing is restricted for any role, the user will see only the Wrench icon, as shown in the following screenshot. Notice also that the Content panel and Tools menu are hidden. There are no drag handles on the rows and columns.

The selected roles will have unrestricted access to all editing features within the builder. The user roles **without** unrestricted access will be limited to editing existing content (rows, columns, and modules) on the template and will be unable to do the following:

* Access the [Tools Menu](user-interface/tools-menu.md).
* Access the [Content Panel](user-interface/content-panel.md).
* Access row or column settings.
* Resize rows and columns with drag handles.
* Move or delete content (rows, columns, and modules).
* Use saved rows and modules.
* Save templates.

When Beaver Builder editing is restricted for any role, the user will see only the **Wrench** icon in the [Overlay Actions](user-interface/builder-overlay.md#overlay-actions), as shown in the following screenshot. 

![Restricted editing](/img/beaver-builder/settings--user-access--4.jpg)

:::info
WordPress roles are still limited by the capabilities assigned to each role. For example, even if Contributors have unrestricted editing in Beaver Builder, their default WordPress capabilities do not give them access to the Media Library. So whether in the WordPress text editor or in a Beaver Builder Photo module, they cannot upload photos or get an image from the Media Library.

However, they can use the Photo module and use a URL to an image. For a list of the default WordPress capabilities assigned to each role, see the [WordPress Roles and Capabilities](https://wordpress.org/support/article/roles-and-capabilities/) article.
:::

:::tip
Default access for **Unrestricted Editing** is applied to the Administrator, Editor, Author, and Contributor user roles.
::: 

### Global Rows, Columns and Modules Editing

By default, all user roles can save, edit and delete rows and modules globally -- in Beaver Builder layouts, and for saved templates, rows, columns, and modules, both in the Content panel and from the Beaver Builder menu in the WordPress admin panel.

To any role whose access to editing global rows and modules is restricted, the following restrictions apply:

* If a global row or module appears in a layout, it displays a lock icon in the toolbar, as shown in the following screenshot. 

  ![Limited access to global rows, columns, and modules](/img/beaver-builder/settings--user-access--5.jpg)

* The user can save standard rows, columns, and modules, but they cannot save them globally since the Global field is missing, as you can see in the following screenshot.  

  ![Global rows, columns, and modules restriction](/img/beaver-builder/settings--user-access--6.jpg)

* Users with unrestricted editing access can drag a global row or module from the Content panel into the layout, but the global row or module will display the lock and can't be deleted. The only option would be to delete the column or row in which it appears.  

  :::info
  Enabling a user role in this field depends on unrestricted frontend access for that user role. See the [User Access Hierarchy](#user-access-hierarchy) section below.
  :::

:::tip
Default access for **Global Rows, Columns and Modules Editing** is applied to the Administrator, Editor, Author, and Contributor user roles.
::: 

## Admin

The **Admin** section lets you limit access to the Beaver Builder admin settings, Beaver Themer editing and access to the Template Exporter.

### Builder Admin

The selected roles will be able to access the Beaver Builder menu (**WordPress Admin Dashboard > Beaver Builder**) where you can find:

* Themer Layouts (see the [Themer Layout Editing](#themer-layout-editing) section)
* Templates
* Saved Rows
* Saved Columns
* Saved Modules
* Categories
* Add New

:::info
Enabling a user role in this field depends on unrestricted frontend access for that user role. See the [User Access Hierarchy](#user-access-hierarchy) section below.
:::

:::tip
Default access for **Builder Admin** is applied to the Administrator user role.
::: 

### Themer Layout Editing

If you have Beaver Themer installed, you'll see an additional category on the User access tab for Themer layout editing. By default, only Administrators have access. Having access means you can create, edit, and save Themer layouts.

If access is restricted through the **Themer Layout Editing** setting, users won't see the **Themer Layouts** submenu item and so can't access the layouts from the WordPress admin panel, and trying to access a Themer layout by direct URL redirects to editing the home page of the site.

Here's a screenshot example in which the Builder Admin is set to both Administrator and Editor, while **Themer Layout Editing** is set to only Administrator. In the WordPress admin panel, a user logged in as Editor will see the Builder menu but not the Themer submenu.

![Themer Layout Editing restriction](/img/beaver-builder/settings--user-access--7.jpg)

:::tip
Default access for **Themer Layout Editing** is applied to the Administrator user role.
:::

### Template Data Exporter

The selected roles will be able to access the template data exporter under **WordPress Admin Dashboard > Tools > Template Exporter**.

:::info
The **Template Exporter** is for [plugin or theme authors to export their templates](template-exporter.md). (Note this is different from [exporting Beaver Builder layout templates](export-import.md).)
:::

:::tip
By default, no user roles are given access to **Template Data Exporter**.
:::

## User access hierarchy

There is a user access hierarchy to these frontend and admin areas, as follows:

* Users who get global row and module editing access require unrestricted editing access.
* Users who get Builder admin access must have unrestricted editing access.
* Users who get Themer layout editing access must have unrestricted editing access and Builder admin access.

Restricted access to either unrestricted frontend editing or the Builder admin removes the Builder menu from the WordPress admin panel, and enabling access at a lower level (Builder admin or Themer layout editing) will not add it back.

## Custom User Roles

If other plugins add custom roles or you create your own roles, the custom roles that match the built-in WordPress role of Contributor or higher will also appear in the Beaver Builder user access lists.

For example, after installing WooCommerce, the **Shop Manager** user role will appear in the user access lists.
