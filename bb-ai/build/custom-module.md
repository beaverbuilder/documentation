---
title: Custom module
description: Use the Custom module in Beaver Builder to build with your own HTML, CSS, and JavaScript, connect its fields and repeaters to your site's content, and save it or any part of it as a reusable Component.
---

Use the Custom module in Beaver Builder to build with your own HTML, CSS, and JavaScript, connect its fields and repeaters to your site's content, and save it or any part of it as a reusable Component.

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

### Connecting fields to your content

Text, link, and image fields can be connected to your site's data instead of holding a value you type in, so one module shows the right content wherever it is placed.

Each connectable field has a connection picker. Open it and choose a property from the current post, the site, or the archive being viewed. A field connected to the post title shows this page's title here and another page's title there, which is what makes a Custom module usable inside a Beaver Themer layout.

- **Post properties** such as Title, Excerpt, Content, Featured Image, Link, Date, and Author come from the post the module is rendered on.
- **Site properties** such as the Site Title, Tagline, and Site Logo come from the site itself.
- **Archive properties** such as the Archive Title and Description only have a value on archive pages. The picker marks them, so you know a connection will be empty on a single page.
- **Custom Field** reads a meta key on the current post. The picker suggests your site's registered meta keys as you type.

With Beaver Themer active, the picker lists Beaver Themer's post and site properties alongside the built-in ones, in the same layout as Themer's own connection picker, and it adds ACF connections for text fields, links, and images, with suggestions for your ACF field names. See [Field connections](/beaver-themer/field-connections) for what each property returns.

Connections that have options show them in the picker:

- **Featured Image**, **Site Logo**, and **Avatar** let you choose the image size.
- **Date** lets you choose the date format.
- **Custom Field** takes the meta key.

:::note
Field connections are part of the module's own settings, so a connection you make on a component is shared by every instance of it. Connections inside a repeater's rows are described in the next section.
:::

### Dynamic data in repeaters

A repeater field can pull its items from your site's content instead of holding manually entered items.

Each top-level repeater in the Content tab has a header with two views, **Fields** and **Data Source**. The Fields view is the normal manual list of items. Switch to the Data Source view to bind the repeater to a source, then connect the repeater's fields to that source's properties:

- **Custom Query** queries posts you configure. Choose one or more post types, the number of items, and the ordering, then narrow the results as far as you need. You can include or exclude specific posts, terms, and authors, add an **Offset** to skip the first few results, turn on **Exclude Current Post** so a related posts section never lists the page it is on, and sort by a meta key or by the order you picked the posts in.
- **Main Query** takes the page's own query and needs no configuration at all. On a blog, archive, or search results page, the repeater renders one item per post in that page's loop. On a single page or post it renders one item for that page itself, which is also what you see while editing. Main Query additionally offers the post Author as a connectable property.
- **Terms** lists taxonomy terms, such as your categories or tags, one item per term.
- **Users** lists your site's users, one item per user.
- **Comments** lists comments, one item per comment.
- **Rows** lists rows you enter yourself in the data source panel, which is a way to keep structured data on the module while still connecting fields to its columns.

Choose **None** to clear the binding and return the repeater to its manual items.

A repeater connected to your content shows nothing when the source has no results, rather than falling back to the sample rows from the Fields view, so an empty category does not render placeholder cards on the live site.

Main Query is what makes a Custom module work as an archive layout: drop the module into a Beaver Themer archive layout or a blog page and it lists whatever that page is already querying, with no query settings to keep in sync. Data sources are configured on the module itself, not on [component instances](#saving-a-custom-module-as-a-component), and nested repeaters cannot be bound.

:::note
When you edit the rows of a data source, the panel warns you if the change would remove a property that one of the repeater's fields is connected to, so you can reconnect the field before the content disappears.
:::

#### Pagination

A Custom Query repeater can paginate its results. Turn on pagination in the data source settings and the module renders page links below its items, so a long list of posts no longer has to fit on one page.

Repeaters bound to the Main Query inside an archive layout get page links too, following the archive's own pagination, so a Custom module can stand in for the whole archive listing.

#### Filtering with the Filter module

The [Filter module](/beaver-builder/layouts/modules/filter) in Beaver Builder 2.12 lets visitors filter, search, and sort a list of posts on the page. A Custom module can opt in to being filtered, so its repeater items respond to a Filter bar the same way a Posts module does.

## Design tab

The Design tab styles the module's elements visually. Select an element and edit its CSS properties with full controls, including interaction states such as hover and your site's responsive breakpoints. Styling edits are written into the module's own CSS as classes, so everything you do visually stays visible and editable in the Code tab.

A few controls are worth knowing about:

- **Background layers**. A background is a stack of color, gradient, and image layers over a base color. Each layer has its own position, size, repeat, and attachment settings.
- **Your site's colors**. The color picker includes your Beaver Builder saved, global, and theme colors, so a module can use the same colors as the rest of the site and follow them when they change.
- **Styling several elements at once**. Cmd+Click on a Mac, or Ctrl+Click on Windows, adds an element to the selection. Every property you change then applies to all selected elements.

The same Design tab is available on native rows, columns, and modules in Beaver Builder 2.12. See [Design tab](/beaver-builder/layouts/design) for the full reference of its controls.

## Code tab

The Code tab has three panes:

- **HTML**. The module's template, ordinary HTML with optional Mustache placeholders.
- **CSS**. Styles for the module. CSS edits preview live on the canvas as you type. Selectors are scoped to the module instance when the page renders, so they cannot affect the rest of the page.
- **JS**. Optional vanilla JavaScript for interactive behavior. JavaScript is not scoped, so query inside the module's root element; see [Writing JavaScript](../developer/modules-and-blocks.md#writing-javascript).

The module renders its template as its own root element without an extra wrapper, which keeps the published markup exactly what you wrote.

## Saving a Custom module as a Component

A Custom module, or any element inside one, can be saved as a Beaver Builder Component: a reusable master whose copies stay linked to it, with fields you choose editable per copy.

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

### Saving part of a module as a component

Any element inside a Custom module can be saved on its own, including a single item in a list, such as one card out of a row of three. This is how you turn a piece of a generated section into something your team can reuse.

1. Select the element on the canvas, either from the Design tab or by clicking it while the module's settings are open.
2. Choose **Save As...** for the selected element.
3. In Beaver Builder's Save As window, give it a name, set **Type** to **Component**, **Template**, or **Global**, and optionally pick a category.
4. Choose whether to **replace the element with the new component**. When you do, the element on the page becomes an instance of the component, so later changes to the component show up here too. Leave it unchecked to keep the original element as it is and simply add the component to your saved items.

### Components placed inside a Custom module

A component that sits inside a Custom module has its own toolbar on the canvas, showing the component's name, a shortcut to the component's editable fields, and **Edit Component**, which opens the component itself.

The component's editable fields can also be edited from the Custom module's own settings panel, so a content editor filling in a card grid never has to leave the module to change the text on one card.

:::note
Dragging a component from the content panel into a Custom module to place it turns on with an upcoming Beaver Builder release. Until then, place a component inside a module by saving an element from that module with **replace the element with the new component** checked.
:::

## Who sees the Design and Code tabs

All users who can edit the module see the Content tab. The Design and Code tabs appear only for users with code access: the ability to create design system content combined with Beaver Builder's unrestricted editing access. Other users can still edit the module's content fields.

:::note
The Custom module's Design and Code tabs are always available to users with code access. They are separate from the [Enable Design and Code Tabs](/beaver-builder/settings/advanced) setting, which adds the same tabs to native Beaver Builder rows, columns, and modules. That setting is on by default for new Beaver Builder installs; existing sites keep whatever they had set.
:::
