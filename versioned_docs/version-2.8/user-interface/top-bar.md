---
id: top-bar
title: The Top Bar
sidebar_label: The Top Bar
description: This article covers the Beaver Builder Top bar which allows you to access the Content panel, Tools menu, view the title of the page or post you're editing, and more.
toc_min_heading_level: 2
toc_max_heading_level: 4
---

This article covers the Beaver Builder Top bar which allows you to access the Content panel, Tools menu, view the title of the page or post you're editing, and more.

![](/img/beaver-builder/user-interface--top-bar--1.jpg)

## Title Bar

Shows what you're editing (page post, etc.) and its title.

![Page or post title](/img/beaver-builder/user-interface--top-bar--2.jpg)

:::caution
Sometimes users experience issues where the **Title Bar** does not show the correct title information for the post/page they are editing. In this case, please refer to the [Incorrect Title in Top Bar](troubleshooting/common-issues/title-bar-incorrect.md) article.
:::

## Access the Tools Menu

See the [Tools menu](tools-menu.md) article for more information.

![Access the Tools Menu](/img/beaver-builder/user-interface--top-bar--3.jpg)

## Notifications Icon

Click the bell icon to open notifications from the Beaver Builder blog.

:::info

If you have the Ultimate or Agency license installed with white labeling enabled, the icon will not be visible in the Beaver Builder UI. Alternatively, you can deactivate it by utilizing the [`fl_disable_notifications`](developer/tutorials-guides/common-beaver-builder-plugin-filter-examples.md#disable-notifications-from-beaver-builder-in-the-ui) filter.

:::

## Saving Indicator

As you edit your layouts you'll see the sequence **Saving - Saved - Edited** appear in the upper right corner of the **Top Bar**. This indicates your changes are saved even before you save or publish those changes.

![Editing status of page or post](/img/beaver-builder/user-interface--top-bar--4.jpg)

:::info

The autosave functionality of Beaver Builder is provided by WordPress. You can change the `AUTOSAVE_ INTERVAL`
Constant value to determine how often the autosave runs. In the example above, we've set it to `86400` seconds, which is one whole day. This effectively disables the autosave feature.

```php
define ('AUTOSAVE_INTERVAL', 86400);
```

:::

## Outline Panel

Click the Outline icon in the **Top Bar** to open the Outline panel, which lets you view and modify the structure of your page layout in an outline format:

See the [Outline Panel](outline-panel.md) article for more information.

## Assistant

The Assistant plugin's icon will appear in the **Top Bar** when Assistant is installed and activated on your site. Giving you quick access to [open and close Assistant plugin](/assistant/plugin/launch-assistant).

## The Content Panel

Click **+** to open and **x** to close. See the [Content panel](content-panel.md) article for more information.

:::tip

This icon does not appear when the panel is [pinned](content-panel.md#pinunpin-the-user-interface-ui) to the left or right side of the screen. Instead, there's a show or hide icon at the bottom of the panel.

:::

## Done Button

The behavior of the **Done** button depends on whether you've made any editing changes
in this session.

![Done button](/img/beaver-builder/user-interface--top-bar--5.jpg)

- The **Done** button will appear **gray** when there has been no editing changes: Click **Done** when it's gray and you exit the Beaver Builder editor with one click.

- The **Done** button will appear **blue** where there has been editing changes, and the status _Edited_ appears to the left.

When you're done editing a page in Beaver Builder, click **Done** in the upper right corner and select one of the following:

### Discard

Discards all changes made or saved since the last time the page was published. This includes all saved but unpublished work from previous sessions.

:::warning Warning

Changes in Beaver Builder are preserved as you make them. When you click **Discard**, you lose all saved changes since the last time you published, and only publishing creates a revision you can go back to.

:::

### Save Draft

Saves your page and exits the Beaver Builder editor. The changes made in that editing session are not visible except when editing in Beaver Builder.

:::info
If you save a draft, be careful about discarding future edits. In Beaver Builder, changes in the layout are saved as you edit, and the **Save draft** choice is a way of exiting Beaver Builder without publishing the changes. If you choose **Discard** in a future session, you'll lose all changes since you last published the page. Also, the WordPress Revisions feature (see the next section) only works with published changes, not saved drafts.

Note that this can happen inadvertently if more than one person is editing the page at the same time. If another person discards edits on a page while you are editing the same page, your changes can be lost.
:::

### Publish

Makes the changes live, accessible to the world at large if you're working on a public site.

:::tip

- Consider publishing at regular intervals. This will create a WordPress revision that you can return to if you want to revert your most recent changes. This is also a good practice because there is no Undo when you're editing in Beaver Builder.

- To publish your layout without closing the editor, use [**Publish Layout** in the tools menu](tools-menu.md#publish-layout), or using the keyboard shortcut:

  - <kbd>command ⌘</kbd> + <kbd>P</kbd> (<i className="fab fa-apple"></i> Mac)
  - <kbd>Ctrl</kbd> + <kbd>P</kbd> (<i className="fab fa-windows"></i> Windows).

:::

### Cancel

Returns you to the Beaver Builder editor.
