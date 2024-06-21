---
id: tools-menu
title: The Tools Menu
sidebar_label: Tools Menu
description: Shows where to find the Tools menu and describes the options there.
---

import styles from './tools-menu-styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Open the Tools menu by clicking the arrow in the [Top Bar](top-bar.md) in the upper left corner of your editing screen, as shown in this screenshot.

![Tools Menu](/img/beaver-builder/user-interface--tools-menu--1.jpg)

:::tip
To the right of each menu item is the keyboard shortcut to quickly access it. The symbols will are based on your desktop operating system.
:::

## Publish

Publishes the layout without closing the Beaver Builder editor.

## Save Template

Saves the layout on the current page as a template

## Duplicate Layout

Copies the entire page and all metadata from the back end, including Yoast SEO data. Creates and opens a new page or post with "copy" in the title.

:::warning

Do not use duplicator plugins to duplicate Beaver Builder layouts.

:::

To learn more about duplicating layouts, visit the [Duplicate Layout](basics/duplicate-layout.md) article.

## Preview Layout

Opens a preview screen, where you can preview as a small, medium, or large device. Click **Continue Editing** to return to the Beaver Builder editing screen.

![Preview Layout](/img/beaver-builder/user-interface--tools-menu--2.jpg)

## Responsive Editing

Edit your layout directly in a large, medium, or small device view, as shown in this screenshot. Click **Exit** to return to large screen editing.

See the [Responsive](layouts/responsive-design/index.md) section for more information.

![Responsive Editing](/img/beaver-builder/user-interface--tools-menu--3.jpg)

## Revisions

Display the previously published revisions available to revert to. The number of revisions available is displayed in brackets. This menu item uses the core WordPress revision feature but makes it more convenient to view and access revisions.

See the [Restore Previous Version](basics/restore-previous-version.md) for more information.

:::tip

Only published pages and posts count as revisions. Saved drafts of pages and posts are not available as revisions.

:::

## History

As you edit a post or page, Beaver Builder logs the changes you make. These changes can be viewed in the **History** menu item, which lets you undo or redo any changes you have made.

See the [Undo & Redo](basics/undo-redo.md) article for more information.

## Layout CSS & JavaScript

A quick way to add CSS and JavaScript that only applies to the page being edited. You can assign a custom ID or class on the Advanced tab of any row, column, or module, then use it in your CSS rule.

See the [Layout CSS & JavaScript](user-interface/layout-css-js.md) article for more information.

## Global Settings

Beaver Builder editor settings that apply as defaults. Most of these settings can be overridden on individual pages. There's also a CSS and JavaScript tab to enter CSS and JavaScript that will apply to content layout throughout your site.

See the [Global settings](user-interface/global-settings.md) article for more information.

## Global Styles

Access global elements and colors through the Global Styling menu. Utilize Global Elements to define styling for elements like text, headings, links, and buttons. Similarly, utilize global colors to create a color palette for your entire website.

See the [Global Styles](user-interface/global-styles.md) article for more information.

## Themer Layouts (requires Beaver Themer)

Provides quick access to the Beaver Themer Layouts menu in the WordPress Admin Dashboard, opening in a new tab and visible only when you have Beaver Themer installed.

## Themer Override (requires Beaver Themer)

The Themer Override menu item becomes visible in the Tools menu when you have Beaver Themer installed, and it indicates that the Beaver Themer layout has been overridden.

## Change UI Brightness

This option is a toggle that changes the UI skin from light (default) to dark.

![Change UI Brightness](/img/beaver-builder/user-interface--tools-menu--4.jpg)

## Media Library

Access the WordPress Media Library to easily add images, videos, and other media to your layouts without having to exit builder.

## WordPress Admin

Choosing this option opens a submenu with shortcuts to get to the following popular spots in the WordPress admin by opening a new browser tab:

![WordPress Admin Shortcut](/img/beaver-builder/user-interface--tools-menu--5.jpg)

- **Edit page**
  Opens the WordPress editing page for the page you're currently editing in Beaver Builder. For example, you could change the title, add a featured image, or enter values for custom properties.

- **Dashboard**
  An easy way to get to your WordPress admin dashboard to do other things so you can easily return to your Beaver Builder layout.

- **Manage templates**
  Opens the list of Beaver Builder layout templates you've saved at **Beaver Builder > Templates**. For example, you could make changes to a saved template, then go to your previous browser tab to apply it to your Beaver Builder layout.

- **Customize theme**
  Opens the WordPress Customizer at **Appearance > Customize**.

## Help

Play an introductory video or click links to the Beaver Builder knowledge base or to Support.

## Keyboard Shortcuts

Displays a list of keyboard shortcodes for the Beaver Builder editor.

:::tip
Keyboard shortcut are customizable and let you remove, modify, or register your own using the `fl_builder_keyboard_shortcuts` filter.
:::

<Tabs>
<TabItem value="macos" label="macOS" attributes={{className: styles.macos}} default>

| Action                                                                                                   |                    Keyboard Shortcut                     |
| -------------------------------------------------------------------------------------------------------- | :------------------------------------------------------: |
| Open [Modules Tab](content-panel.md#module-tab-groups)                                                   |                       <kbd>J</kbd>                       |
| Open [Rows Tab](content-panel.md#row-tab-groups)                                                         |                       <kbd>K</kbd>                       |
| Open [Templates Tab](content-panel.md#template-tab-groups)                                               |                       <kbd>L</kbd>                       |
| Open [Saved Tab](content-panel.md#saved-tab-groups)                                                      |                       <kbd>;</kbd>                       |
| Save New Template                                                                                        |           <kbd>⌘ command</kbd> + <kbd>J</kbd>            |
| Toggle [Preview Mode](#preview-layout)                                                                   |                       <kbd>P</kbd>                       |
| Enter [Responsive Editing Mode](layouts/responsive-design/editor.md) & Cycle Breakpoints                 |                       <kbd>R</kbd>                       |
| Enter [Responsive Editing Mode](layouts/responsive-design/editor.md) & Cycle Breakpoints (Reverse Order) |            <kbd>⇧ Shift</kbd> + <kbd>R</kbd>             |
| Open [Global Settings](global-settings.md)                                                               |           <kbd>⌘ command</kbd> + <kbd>U</kbd>            |
| Open [Layout Settings](layout-css-js.md)                                                                 |           <kbd>⌘ command</kbd> + <kbd>Y</kbd>            |
| Display Module Search                                                                                    |           <kbd>⌘ command</kbd> + <kbd>I</kbd>            |
| Save Layout                                                                                              |           <kbd>⌘ command</kbd> + <kbd>S</kbd>            |
| Publish changes without leaving builder                                                                  |           <kbd>⌘ command</kbd> + <kbd>P</kbd>            |
| Dismiss Active Panel                                                                                     |                      <kbd>Esc</kbd>                      |
| [Undo](basics/undo-redo.md)                                                                              |           <kbd>⌘ command</kbd> + <kbd>Z</kbd>            |
| [Redo](basics/undo-redo.md)                                                                              | <kbd>⇧ Shift</kbd> + <kbd>⌘ command</kbd> + <kbd>S</kbd> |
| Toggle [Outline Panel](outline-panel.md)                                                                 |            <kbd>⇧ Shift</kbd> + <kbd>O</kbd>             |
| Toggle Outline Panel Tree                                                                                |            <kbd>⇧ Shift</kbd> + <kbd>T</kbd>             |
| Open [Global Style](global-styles.md) Settings                                                           |           <kbd>⌘ command</kbd> + <kbd>G</kbd>            |

</TabItem>
<TabItem value="windows" label="Windows" attributes={{className: styles.windows}}>

| Action                                                                                                   |                  Keyboard Shortcut                  |
| -------------------------------------------------------------------------------------------------------- | :-------------------------------------------------: |
| Open [Modules Tab](content-panel.md#module-tab-groups)                                                   |                    <kbd>J</kbd>                     |
| Open [Rows Tab](content-panel.md#row-tab-groups)                                                         |                    <kbd>K</kbd>                     |
| Open [Templates Tab](content-panel.md#template-tab-groups)                                               |                    <kbd>L</kbd>                     |
| Open [Saved Tab](content-panel.md#saved-tab-groups)                                                      |                    <kbd>;</kbd>                     |
| Save New Template                                                                                        |           <kbd>Ctrl</kbd> + <kbd>J</kbd>            |
| Toggle [Preview Mode](#preview-layout)                                                                   |                    <kbd>P</kbd>                     |
| Enter [Responsive Editing Mode](layouts/responsive-design/editor.md) & Cycle Breakpoints                 |                    <kbd>R</kbd>                     |
| Enter [Responsive Editing Mode](layouts/responsive-design/editor.md) & Cycle Breakpoints (Reverse Order) |          <kbd>⇧ Shift</kbd> + <kbd>R</kbd>          |
| Open [Global Settings](global-settings.md)                                                               |           <kbd>Ctrl</kbd> + <kbd>U</kbd>            |
| Open [Layout Settings](layout-css-js.md)                                                                 |           <kbd>Ctrl</kbd> + <kbd>Y</kbd>            |
| Display Module Search                                                                                    |           <kbd>Ctrl</kbd> + <kbd>I</kbd>            |
| Save Layout                                                                                              |           <kbd>Ctrl</kbd> + <kbd>S</kbd>            |
| Publish changes without leaving builder                                                                  |           <kbd>Ctrl</kbd> + <kbd>P</kbd>            |
| Dismiss Active Panel                                                                                     |                   <kbd>Esc</kbd>                    |
| [Undo](basics/undo-redo.md)                                                                              |           <kbd>Ctrl</kbd> + <kbd>Z</kbd>            |
| [Redo](basics/undo-redo.md)                                                                              | <kbd>⇧ Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| Toggle [Outline Panel](outline-panel.md)                                                                 |          <kbd>⇧ Shift</kbd> + <kbd>O</kbd>          |
| Toggle Outline Panel Tree                                                                                |          <kbd>⇧ Shift</kbd> + <kbd>T</kbd>          |
| Open [Global Style](global-styles.md) Settings                                                           |          <kbd>⇧ Shift</kbd> + <kbd>G</kbd>          |

</TabItem>
</Tabs>
