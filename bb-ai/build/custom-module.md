---
title: Custom module
description: Use the Custom module in Beaver Builder to build with your own HTML, CSS, and JavaScript, starting from a working template with live preview.
---

Use the Custom module in Beaver Builder to build with your own HTML, CSS, and JavaScript, starting from a working template with live preview.

## What is the Custom module

Use the Custom module to build a section of a page with your own HTML, CSS, and JavaScript inside Beaver Builder. It appears under **Basic** in the content panel, and a fresh module starts from a small working template, so you edit running code rather than a blank editor.

The Custom module is the same module type that powers AI-generated [design system blocks](../developer/modules-and-blocks.md). Everything that applies to a block applies here: the HTML template uses [Mustache placeholders](../developer/modules-and-blocks.md#writing-the-template) that become settings fields automatically, the CSS is scoped to the module, and optional JavaScript runs safely on the page.

:::note
The Custom module is added by the Beaver Builder AI plugin and requires Beaver Builder 2.11 or later.
:::

## Adding a Custom module

Open the content panel, find **Custom** in the **Basic** group, and drag it onto the page. The module renders a placeholder template with editable text, outlined with a dashed border so you can see its bounds while you build.

From there, work in whichever tab fits the task:

- **Content** holds the settings form generated from the template's placeholders.
- **Design** styles any element in the module visually.
- **Code** edits the module's HTML, CSS, and JavaScript directly.

## Content tab

The Content tab shows a settings form derived from the module's HTML template. Every `{{settings.name}}` placeholder in the template becomes a field, with its type inferred from the surrounding HTML; see [How placeholders become fields](../developer/modules-and-blocks.md#how-placeholders-become-fields).

A brand-new Custom module has a single text field. If you remove every placeholder from the template, the tab explains that the module has no editable content and shows how to add a settings placeholder.

## Design tab

The Design tab styles the module's elements visually. Select an element and edit its CSS properties with full controls, including interaction states such as hover and your site's responsive breakpoints. Styling edits are written into the module's own CSS as classes, so everything you do visually stays visible and editable in the Code tab.

## Code tab

The Code tab has three panes:

- **HTML**. The module's template, ordinary HTML with optional Mustache placeholders.
- **CSS**. Styles for the module. CSS edits preview live on the canvas as you type. Selectors are scoped to the module instance when the page renders, so they cannot affect the rest of the page.
- **JS**. Optional vanilla JavaScript for interactive behavior. JavaScript is not scoped, so query inside the module's root element; see [Writing JavaScript](../developer/modules-and-blocks.md#writing-javascript).

The module renders its template as its own root element without an extra wrapper, which keeps the published markup exactly what you wrote.

## Who sees the Design and Code tabs

All users who can edit the module see the Content tab. The Design and Code tabs appear only for users with code access: the ability to create design system content combined with Beaver Builder's unrestricted editing access. Other users can still edit the module's content fields.

:::note
The Custom module's Design and Code tabs are always available to users with code access. They are separate from the beta [Enable Design and Code Tabs](/beaver-builder/settings/advanced) setting, which adds similar tabs to native Beaver Builder rows, columns, and modules.
:::
