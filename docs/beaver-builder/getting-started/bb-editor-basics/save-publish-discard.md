---
id: save-publish-discard
title: Save, Publish, Discard
sidebar_label: Save, Publish, Discard
---

## Autosave while you work

Changes in the Beaver Builder editor are saved even before you save or publish
the entire page. If the editor hangs before your work is saved or published,
it's usually safe to reload the page in your browser. In addition, you can
edit the settings for rows, columns, and modules and then open any other row,
column, or module for editing without needing to click **Save**.

As you edit your layouts you'll see the sequence **Saving – Saved – Edited**
appear in the upper right corner of the screen.

## When you're done editing

When you're done editing a page in Beaver Builder, click **Done** in the upper
right corner and select one of the following:

### Publish  
Makes the changes live, accessible to the world at large if you're working on a public site.

:::tip **Tip**
To publish your layout without closing the editor, use [Publish layout in the tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md).
:::

### Save draft

Saves your page and exits the Beaver Builder editor. The changes made in that editing session are not visible except when editing in Beaver Builder.

:::important **Important:**  
If you save a draft, be careful about discarding future edits. In Beaver
Builder, changes in the layout are saved as you edit, and the **Save draft**
choice is a way of exiting Beaver Builder without publishing the changes. If
you choose **Discard** in a future session, you'll lose all changes since you
last published the page. Also, the WordPress Revisions feature (see the next
section) only works with published changes, not saved drafts.

Note that this can happen inadvertently if more than one person is editing the
page at the same time. If another person discards edits on a page while you
are editing the same page, your changes can be lost.
:::

### Discard  
Discards all changes made or saved since the last time the page was published.
This includes all saved but unpublished work from previous sessions.

### Cancel  
Returns you to the editing page.

:::tip **Tips**
Here are some things to keep in mind about the way save, publish, and discard
work:

  * Be very careful when you choose **Discard**, because it means you will lose all changes between now and the time you last published, even changes from a previous editing session that weren't published. You'll see a warning to remind you before you discard.
  * An alternative approach is to avoid using **Save draft**. That way you'll know if you discard your changes that you are only losing the changes from your current editing session. Using **Save draft** is even riskier when other users have editing capabilities for the page you're editing.
  * Consider publishing at regular intervals. This will create a WordPress revision that you can return to if you want to revert your most recent changes. This is also a good practice because there is no Undo when you're editing in Beaver Builder.
  * It's a best practice to work on a copy of your site in a staging location rather than editing a live site directly. That way you can publish at interim points without the changes going live, and it's easier to backtrack if something goes terribly wrong.
:::

## Revert to a previous version

You can revert to previously published versions of your page. See [this article](/beaver-builder/advanced-builder-techniques/restore-a-previous-version.md) for more details.
