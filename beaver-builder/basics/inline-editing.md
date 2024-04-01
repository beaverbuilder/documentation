---
id: inline-editing
title: Inline editing
sidebar_label: Inline Editing
tags: [Editing, Basics, fl_inline_editing_enabled]
description: Inline Editing enables users to make rapid adjustments or create content without having to open the module settings.
---

Inline Editing enables users to make rapid adjustments or create content without having to open the module settings.

:::tip

Inline editing works best if the [Content panel and settings window are pinned](user-interface/content-panel.md#pinunpin-the-user-interface-ui) to one side of the layout. Use the drag handle at the top of the panel to move it to the right or left of your page until a vertical blue bar appears.

:::

## How To Use Inline Editing

To edit inline, move your cursor into the module you want to edit and click.
The [overlay actions toolbar](user-interface/overlay.md) will change to editing toolbar that vary depending on the type of module you're editing. The cursor also changes to an editing cursor, so click your cursor where you want and start editing. For a new module, drag the
module into your layout as usual, then click inside the empty module in the layout.

![Using Inline editing](/img/beaver-builder/basics--inline-editing--1.gif)

:::tip
If you add a shortcode or embed an object such as a video, when you start
editing inline, the shortcode or embed renders and you can edit the text
around it, and when you click outside of the module layout area, the shortcode
or embed code returns. To edit the shortcode or embed code itself, edit it in
the editing window.
:::

## Editing toolbar

The formatting actions accessible to you are determined by the type of module you are editing. To use these formatting actions, highlight the text to be formatted and then click the formatting action icon.

### Text editors

For Text editor fields (fields that use the WordPress classic editor/TinyMCE editor) the following formatting actions are available.

![Text editor toolbar actions](/img/beaver-builder/basics--inline-editing--2.jpg)

- Bold
- Italic
- Strikethrough
- Link
- Underline
- Align Left
- Align Center
- Align Right

### Headings

For basic text fields, such as the **Heading** field in a [Heading module](layouts/modules/heading.md) the following formatting actions are available.

![Text editor toolbar actions](/img/beaver-builder/basics--inline-editing--3.jpg)

- Bold
- Italic
- Strikethrough
- Underline

## When should you use Inline Editing?

Inline editing allows you to see how your content will look while you type and instantly correct any spelling or grammar errors.

## Modules that can be edited inline

Any module that contains a text field or text editor area can be edited
inline. Here are some examples:

- [Button module](layouts/modules/button/button.md)
  You can edit the text in the button.

- [Callout module](layouts/modules/callout-and-call-to-action.md)
  You can edit the heading, the text area, and the call-to-action text if you've
  selected text rather than a button..

- [Number counter module](layouts/modules/number-counter.md)
  You can edit both the text and the number inline.

## Disable inline editing

You can globally disable inline editing functionality in the Beaver Builder editor by using the `fl_inline_editing_enabled` filter.
