---
id: libraries
title: Libraries App
sidebar_label: Libraries
description: Connect to Assistant Pro Cloud to add content to libraries.
---

The Libraries App allows you to connect your WordPress site to Assistant Pro Cloud. Once it's connected, you can create, manage and add content to libraries, launch the Assistant Pro Cloud and disconnect from Assistant Pro Cloud.

![Libraries app overview](/img/assistant/apps--apps-libraries--1.jpg)

## ​Create a Library

To create a new library from the Assistant Plugin:

1. Open the **Libraries App**.
2. Click the **Plus** (+) icon.
3. Enter a name for your library.
4. Click the **Enter** button or hit <kbd>Enter</kbd> / <kbd>Return</kbd> on your keyboard.

![Create library via Assistant plugin](/img/assistant/apps--apps-libraries--2.jpg)


## Add Content to libraries
 
The **Libraries App** lets you can add content, media, colors and customizer (theme) settings to your libraries.

### Add Posts, Pages or Templates

1. Open the **Libraries App**.
2. Click the library you want to add content to.
3. Click the **Plus** (+) icon.
4. Enter the name of the piece of content you would like to add in the search field.
5. Click the search result for the piece of content you would like to add.

<video controls>
<source src="/video/assistant/libraries--add-assets--add-posts.mp4" type="video/mp4" />
<source src="/video/assistant/libraries--add-assets--add-posts.webm" type="video/webm" />
</video>

### Add Colors

1. Open the **Libraries App**.
2. Navigate to the library you want to add color(s) to.
3. Click the **Plus** (+) icon and select **Colors**.
4. Select your color from the color picker or enter numeric values to select a color.
5. Name your color (by default the name will be the color’s hex code).

![Add a Color to a library](/img/assistant/apps--apps-libraries--3.jpg)

### Add Theme Settings

This procedure saves your site’s customizer settings.

1. Open the **Libraries App**.
2. Navigate to the library you want to add the theme settings to.
3. Click the **Plus** (+) icon.
4. Select **Settings**.
5. Click **Add Settings**.

![Add a Theme Settings to a library](/img/assistant/apps--apps-libraries--4.jpg)

## Edit a Library

To edit a new library from the Assistant Plugin:

1. Open the **Libraries App**.
2. Navigate to the library you want to edit.
3. Click the **Settings** button (cog icon).

From here, you can perform the following actions:

* **Name** - Edit the library name.
* **Description** - Give the library a description.
* **Visibility** - Set the visibility of the library, chose between **Public** and **Private**.
* **Featured Image** - You can assign an image to the library which will be used for the Assistant's user interface (UI).
* [**Library Collections**](../../cloud/collections/)
* [**Import Library**](#import-content)
* [**Delete Library**](#delete-a-library)

## Delete a Library

To delete a library from the **Libraries App**:

1. Open the **Libraries App**.
2. Select the library you want to delete.
3. Click the **Settings** icon.
4. Scroll down to the **Danger Zone** section.
5. Click the **Delete Library** button in the **Delete this library** section.
6. Confirm the deletion.

![Delete library from Assistant plugin](/img/assistant/apps--apps-libraries--5.jpg)


## Import Content

You can import content and [creative asset](../../overview.md#creative-assets) from a library to a website with the Assistant plugin.

### Import Content

1. In the Libraries app, navigate to the **Content** section and select the piece of content you’d like to import to your site.
2. Scroll down and click the Create New action and select one of the following choices:
    * **Create and Edit** imports the content and opens it for editing.
    * **Import** adds the content to the backend of your site and the [Content App](content.md).

![Add single WordPress content](/img/assistant/apps--apps-libraries--6.jpg)

### Import Images

1. In the Libraries app, navigate to the **Images** section and select the image you’d like to import to your site.
2. In the **Actions** section, click **Import**.  
  The image will now be available in your WordPress Media Browser and Assistant Media app.

![Add single images](/img/assistant/apps--apps-libraries--7.jpg)

### Import Theme Settings

1. Open the **Libraries** app.
2. Navigate to the **Theme Settings** section and select the theme settings item you’d like to import to your site.
3. In the **Actions** section, click either **Preview** to preview the settings, or **Apply to Theme** to replace your current settings.

:::warning
The **Apply to Theme** setting overwrites any current theme settings, so be sure to back them up before using.
:::

![Add Theme settings](/img/assistant/apps--apps-libraries--8.jpg)

### Import an entire library to a site

You can import an entire Assistant Pro library to a website. Importing a library in one step imports all of the creative assets in your library except colors.

To import an entire library:

* In the **Libraries** app, select the library you’d like to import to your site.
* Click the gear icon to open the library settings.
* In the **Import Library** section, click the **Import Library** button.
 
## Launch Assistant Pro Cloud

You can quickly launch Assistant Pro Cloud in a browser from within Assistant plugin's **Libraries App**. 

To launch Assistant Pro Cloud from the **Libraries App**:

1. Open the **Libraries App**.
2. Click your avatar in the upper right corner.
3. Select **Launch Cloud**.

:::info
Using the **Launch Cloud** option is only possible after you have [connected the Assistant plugin](../../getting-started/connect.md).
:::

![Launch Cloud](/img/assistant/apps--apps-libraries--9.jpg)

## Disconnect from Assistant Pro Cloud

The Assistant Pro Cloud can be disconnected from within the **Libraries App**. To disconnect your WordPress site from an Assistant Pro Cloud account:

1. Open the **Libraries App**
2. Click your avatar to deploy a dropdown menu
3. Select **Disconnect**

:::caution
If you are disconnected from the Assistant Pro cloud, the Library App will be unable to access libraries, and you will need to [reconnect](../../getting-started/connect.md) for libraries to display.
:::

![Disconnect from Cloud](/img/assistant/apps--apps-libraries--10.jpg)
