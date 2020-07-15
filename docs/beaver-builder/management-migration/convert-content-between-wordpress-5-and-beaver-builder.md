---
id: convert-content-between-wordpress-5-and-beaver-builder
title: Convert content between WordPress 5 and Beaver Builder
sidebar_label: Convert content between WordPress 5 and Beaver Builder
---

This article applies to how to convert content from the Gutenberg or Classic
editor in WordPress 5 to Beaver Builder and vice versa. It also describes the
result of each type of conversion. [Follow this link](/beaver-builder/getting-started/bb-editor-basics/launch-builder.md) for how to install the Classic Editor plugin and how to
open the Beaver Builder editor in WordPress 5.

:::warning **Warning:**
You can start editing a new page in either WordPress editor
(Standard or Classic) and convert to Beaver Builder and vice versa, but beware
of switching back and forth after that--you may lose data.

If you open a Beaver Builder layout in the Standard or Classic editor and
make further edits, and then you convert back to Beaver Builder, you will see
your previous Beaver Builder layout. You won't see the new WordPress edits
that you made. If you publish the Beaver Builder layout and open the page
again in Standard or Classic Editor, you will lose the previous edits that you
made in the Standard or Classic Editor.
:::

:::note **Note**
Unless you enable Posts in **Settings > Beaver Builder > Post
types**, you will only see the option to launch Beaver Builder for Pages, not
Posts.
:::

## Convert content from Standard Editor (Gutenberg) to Beaver Builder

This section applies when a page has content created with the WordPress 5
Standard (block) Editor and you want to convert that content to Beaver
Builder. You can use [any of the methods for opening a page in Beaver
Builder](/beaver-builder/getting-started/bb-editor-basics/launch-builder.md), or you can convert directly from within the Standard
Editor UI, as follows. No matter what method you use to open Beaver Builder,
the content is automatically converted. Pay attention to the warning below.

**Convert content to Beaver Builder from within the Standard Editor UI:**

  1. Click the **More** icon (three vertical dots) in the upper right corner of the standard edit screen.
  2. In the **Plugins** section, choose **Convert to Beaver Builder**, as shown in the following screenshot.

![](/img/the-basics-convert-content-1.jpg)

**Result:** The block content is converted to a single Beaver Builder Text
Editor module.

## Convert content from Classic Editor to Beaver Builder

This section applies when you have the Classic Editor plugin activated and
allow it to be used in **Settings > Writing**, and you have a page or post of
content in Classic Editor that you want to convert to Beaver Builder.

  1. From the WordPress admin panel, choose **Pages > All Pages**.
  2. Mouse over the page that you want to convert.  
The dot following the Beaver Builder link will be light gray, as in the
following screenshot, showing that the layout is not currently in Beaver
Builder.  
![](/img/the-basics-convert-content-2.png)

  3. Click the **Beaver Builder** link to open the page in the Beaver Builder editor.

**Result:** The Classic Editor text and images are converted to a single Text
Editor module in Beaver Builder.

## Convert content from Beaver Builder to Standard Editor (Gutenberg)

This section applies when you have a page or post with Beaver Builder content
that you want to convert to the Standard (Gutenberg Block) Editor.

  1. From the WordPress admin panel, choose **Pages > All Pages**.
  2. Mouse over the page that you want to convert to reveal the choices.  
The dot following the Beaver Builder link will be green, showing that the
layout is currently in Beaver Builder.

  3. Click either **Edit** or **Block Editor**, depending on your editor settings in **Settings > Writing**.

 **Result:** Opening a Beaver Builder layout in Standard Editor (Gutenberg)
converts the layout into a single Classic block. From there, you can select
the option to convert the item to blocks (available from the **More options**
menu in the block's toolbar), as shown in the following screenshot.

![](/img/the-basics-convert-content-3.jpg)

## Convert content from Beaver Builder to Classic Editor

This section applies when you have the **Classic Editor** plugin activated and
allow it to be used in **Settings > Writing**, and you have a page or post
with Beaver Builder content that you want to convert to the Classic Editor.

  1. From the WordPress admin panel, choose **Pages > All Pages**.
  2. Mouse over the page that you want to convert and check to ensure that the dot following the Beaver Builder link is green, as shown in the following screenshot.  
This ensures that there is an existing Beaver Builder layout for this page. If
there is no existing Beaver Builder layout, the dot is light gray or white.  
![](/img/the-basics-convert-content-4.png)

  3. Click either **Edit** or **Classic Editor**, depending on your WordPress settings.

 **Result:** The text and images are converted from Beaver Builder to Classic
Editor.
