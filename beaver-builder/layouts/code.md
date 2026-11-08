---
title: Code Tab
sidebar_label: Code Tab
icon: "list-chevrons-up-down"
---

Edit a row, column, or module’s CSS and JavaScript in a full-height code editor with live CSS preview on the canvas. The Custom Module also includes an HTML editor.

## Usage

The Code tab gives a row, column, or module a full-height code editor with syntax highlighting, line numbers, and live CSS preview on the canvas. Which panes it shows depends on what you open:

- Rows, columns, and Beaver Builder's own modules, including third-party modules, get **CSS** and **JS**. These edit the same per-node CSS and JavaScript that Beaver Builder's Code Settings add to the Advanced tab; with the Code tab enabled, those Advanced tab sections move here.
- The [Custom module](/beaver-builder/layouts/modules/custom-module), which is also the module type behind AI-generated [design system blocks](/ai/developer/modules-and-blocks), gets **HTML** as well, ahead of the other two, because its markup belongs to the module rather than to Beaver Builder.

## Access the Code tab

1. **Open a node's settings**  
   Launch Beaver Builder and open the settings for any row, column, or module.

2. **Click the Code tab**  
   Click the code icon in the settings panel's tab bar. The Design and Code tabs sit just before the Advanced tab.

## HTML

The **HTML** pane holds the module's template and is the pane the Code tab opens on when it is present. The template is ordinary HTML, and every `{{settings.name}}` placeholder in it becomes a field on the Content tab, so editing the markup here also changes the fields other users fill in. Editing the template re-renders the module on the canvas and rebuilds those fields.

The module renders the template as its own root element, with no extra wrapper, so the published markup is what you write here. For the placeholder syntax and the rules that keep a template working, see [Writing the template](/bb-ai/developer/modules-and-blocks#writing-the-template).

:::info

The HTML pane appears only on the Custom module and on BB AI generated design system blocks, which share its module type. Beaver Builder's own rows, columns, and modules render markup that Beaver Builder owns, so their Code tab has only the CSS and JS panes.

:::

## CSS

The **CSS** pane holds the node's custom CSS. On a row, column, or Beaver Builder module, rules are scoped to that node automatically:

- `&` refers to the node's own element.
- A bare selector such as `.my-class` or `em` matches elements inside the node.

```css
& {
  border-radius: 12px;
}

.testimonial-quote {
  font-style: italic;
}

&:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

Beaver Builder wraps the whole block in the node's selector when the page renders, so do not write the node's `.fl-node-` class yourself, and give every rule a selector.

CSS is compiled with Sass support, so SCSS syntax such as variables, nesting, and mixins works here. Keep in mind that a node whose CSS uses Sass can only be edited on the Code tab; the [Design tab](/beaver-builder/layouts/design-tab) shows a read-only notice for it.

On the Custom module, the CSS pane styles the markup in the HTML pane instead, so you write class selectors that match your own template rather than `&`. Those selectors are scoped to the module instance when the page renders; see [How the scoped CSS works](/beaver-builder/layouts/modules/custom-module#how-the-scoped-css-works).

CSS edits preview live on the canvas as you type. Saving the settings keeps them; canceling discards them, like any other setting.

## JavaScript

The **JS** pane holds the node's custom JavaScript, output with the layout on the front end. JavaScript does not preview live in the builder; save the settings and view the page to test behavior.

On the Custom module, this pane holds the module's own JavaScript, stored with the module. It is not scoped the way the CSS is, so query inside the module's root element rather than the whole document; see [Writing JavaScript](/ai/developer/modules-and-blocks#writing-javascript).

## Relationship to Code Settings

On rows, columns, and Beaver Builder's own modules, the Code tab is a new editing surface for existing data, not a new kind of code:

- The CSS and JS panes read and write the same values as the **CSS** and **JavaScript** sections that Code Settings add to the Advanced tab. Anything already saved there appears in the Code tab, and nothing changes on the front end when you enable or disable the tabs.
- Turning **Enable Code Settings** off in Advanced settings removes the code fields everywhere, including the Code tab.

A Custom module is the exception. Its HTML, CSS, and JavaScript are stored with the module itself rather than in Beaver Builder's code settings, so neither **Enable Code Settings** nor **Enable Design and Code Tabs** affects its Code tab.

:::note

Global rows and modules cannot have their CSS and JavaScript edited where they are placed. Open the saved template to edit a global node's code.

:::
