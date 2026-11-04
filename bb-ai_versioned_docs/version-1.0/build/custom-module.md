---
title: Custom module
description: Use the Custom module in Beaver Builder to build with your own HTML, CSS, and JavaScript, starting from a working template with live preview, then save it as a reusable Component.
---

Use the Custom module in Beaver Builder to build with your own HTML, CSS, and JavaScript, starting from a working template with live preview, then save it as a reusable Component.

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

### Dynamic data in repeaters

A repeater field can pull its items from your site's content instead of holding manually entered items.

Each top-level repeater in the Content tab has a header with two views, **Fields** and **Data Source**. The Fields view is the normal manual list of items. Switch to the Data Source view to bind the repeater to one of two sources, then connect the repeater's fields to post properties such as Title, Excerpt, Content, Featured Image, Link, and Date:

- **Custom Query** queries posts you configure: the post type, the number of items, and the ordering.
- **Main Query** takes the page's own query and needs no configuration at all. On a blog, archive, or search results page, the repeater renders one item per post in that page's loop. On a single page or post it renders one item for that page itself, which is also what you see while editing. Main Query additionally offers the post Author as a connectable property.

Choose **None** to clear the binding and return the repeater to its manual items.

Main Query is what makes a Custom module work as an archive layout: drop the module into a Beaver Themer archive layout or a blog page and it lists whatever that page is already querying, with no query settings to keep in sync. Data sources are configured on the module itself, not on [component instances](#saving-a-custom-module-as-a-component), and nested repeaters cannot be bound.

## Design tab

The Design tab styles the module's elements visually. Select an element and edit its CSS properties with full controls, including interaction states such as hover and your site's responsive breakpoints. Styling edits are written into the module's own CSS as classes, so everything you do visually stays visible and editable in the Code tab.

## Code tab

The Code tab has three panes:

- **HTML**. The module's template, ordinary HTML with optional Mustache placeholders.
- **CSS**. Styles for the module. CSS edits preview live on the canvas as you type. Selectors are scoped to the module instance when the page renders, so they cannot affect the rest of the page.
- **JS**. Optional vanilla JavaScript for interactive behavior. JavaScript is not scoped, so query inside the module's root element; see [Writing JavaScript](../developer/modules-and-blocks.md#writing-javascript).

The module renders its template as its own root element without an extra wrapper, which keeps the published markup exactly what you wrote.

## Saving a Custom module as a Component

A Custom module can be saved as a Beaver Builder Component: a reusable master whose copies stay linked to it, with fields you choose editable per copy.

Editing the component updates every place it is used, like a Global template. The difference is that you mark individual fields as editable per instance, so each placement can carry its own content while sharing the component's structure, styling, and code. That makes components the way to hand a distinctive Custom module design to a team: they fill in the fields you opened up, and everything else stays under your control in one place.

### Saving the component

1. Hover the module on the canvas and open its settings submenu (the wrench icon).
2. Choose **Save As...**.
3. Give it a name, set **Type** to **Component**, optionally pick a category, and save.

The component appears in the content panel under **Saved Modules**. Drag it onto any page to place another instance.

### Choosing what instances can edit

Fields are locked per instance until you open them up. While editing the component, each field's label on the Content tab carries a small plug button:

- **Enable Component Editing** marks the field as editable per instance.
- **Disable Component Editing** locks it to the component's own value again.

For a repeater, the plug sits in the repeater's header and opens up the whole list: an instance can edit every field in each row, and add, remove, and reorder rows. A repeater bound to a [data source](#dynamic-data-in-repeaters) has no toggle, since its items come from the query rather than from an editor.

### Working with instances

Clicking an instance opens a settings panel with a **Component** badge and a single **Content** tab holding only the fields marked editable, with edits previewing live on the canvas as you type. A component with nothing marked editable says so, and points you to edit the component itself. The Design and Code tabs are not offered on an instance; they belong to the component.

An instance's edits are stored as overrides on top of the component, so a field you have not touched follows the component when it changes, and clearing an override returns the field to the component's value.

The instance's submenu offers three actions:

- **Edit Settings** opens the instance's Content tab.
- **Edit Component** opens the component itself, with the full Content, Design, and Code tabs and the per-field editing toggles.
- **Unlink Component** detaches this copy into an ordinary, independent Custom module after a confirmation.

Who can edit the component itself is controlled by Beaver Builder's **Global and Component Editing** permission on the [User Access tab](/beaver-builder/settings/user-access).

:::note
Components remember the design system they were built with. A component tied to one design system is not offered on pages using a different one, which keeps a component's styling from landing where its tokens do not exist.
:::

## Who sees the Design and Code tabs

All users who can edit the module see the Content tab. The Design and Code tabs appear only for users with code access: the ability to create design system content combined with Beaver Builder's unrestricted editing access. Other users can still edit the module's content fields.

:::note
The Custom module's Design and Code tabs are always available to users with code access. They are separate from the beta [Enable Design and Code Tabs](/beaver-builder/settings/advanced) setting, which adds similar tabs to native Beaver Builder rows, columns, and modules.
:::
