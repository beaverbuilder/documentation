---
id: media
title: Media App
sidebar_label: Media
description: Browse, sort media, upload new media and delete media.
---

The Media App allows you to browse, sort media, upload new media and delete media.

![Media app overview](/img/assistant/apps--apps-media--1.jpg)

## Browse & Sort Media

You can browse and sort media using the filters located at the top of the **Media App**. You can sort by the following:

* **Type** - Filter by **All**, **Photo**, **Document**, **Video** and **Audio**.
* **Display As** - Arrange media items in a **List** or **Grid** (Default) layout.
* **Label** - Filter media items by label.
* **Sort By** - Sort media items by **ID**, **Date Uploaded** (Default) or **Last Modified**.
* **Order** - Sort by **Ascending** or **Descending** (Default).

You can restore the filters to default using the **Reset Filters** button.

## Upload Media

The Media App allows you to add [graphics in common web formats](introduction/index.md#creative-assets) to Assistant. The WordPress media library doesn't support .svg graphics by default, but the Assistant Plugin adds .svg graphics without the need for a third-party plugin or custom code.

1. Open the **Media App**.
2. Click the **Plus** (+) icon.
3. Choose files or drop the file onto the box to upload.

## Edit Media

You can edit a media item by clicking it. This displays the following sections:

* **Metadata** – You can edit the Title, Alternative text, and Description fields.
* **Info** – non-editable information about file size, file type, when uploaded, and who uploaded.
* **Links** – File URL and attachment URL.
* **Labels** – Add custom labels here.
* **Actions** – Includes the following actions:  
	* **View Attachment** - This will take you to the attachments page, for example `https://my-website.com?attachment_id=100`.
	* **Save to Library** - Adds the media item to a library.
	* **Edit in Admin** - Opens the **Edit Media** page in the WordPress admin dashboard.
	* **Delete** – See the [section on deleting items](#delete-media) below.

![Media app media actions](/img/assistant/apps--apps-media--2.jpg)

## Delete Media

You can delete media using the **Delete** action on the **Edit Media** panel.

1. Open the **Media App**.
2. Click the media item you want to delete.
3. Scroll down to the **ACTIONS** section.
4. Click the **Delete** button.

:::warning
Using the **Delete** button removes the media from both the **Media App** and WordPress media library.
:::

## Add Labels

Labels allow you to easily organize your content.

To create a label:

1. Click the media item you want to edit.
2. Scroll down to the **LABELS** section.
3. Click the **+ Add Label** button.
4. Select the label from the drop-down menu.

:::tip **Tip**
You can create and edit the labels available for selection in the apps via the [Manage Labels](../app-settings.md#manage-labels) section in the [Apps & Settings](../app-settings.md) panel.
:::




