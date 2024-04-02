---
id: overlay
title: Overlay & Actions Toolbar
sidebar_label: Overlay & Actions Toolbar
---

The Beaver Builder user interface provides a overlay that enables you to visualize your layout's structure, assists in identifying relationships between nodes (rows, columns, and modules) and provides convenient access to tools and actions for configuring your rows, columns, and modules.

![Beaver Builder Overlay Outline](/img/beaver-builder/user-interface--builder-overlay--1.jpg)

## Overlay Outline

The Overlay outline appears upon hovering your mouse cursor over any row, column, or module in your layout, exclusively displaying for the element your cursor is currently over. This serves as a visual guide, aiding in understanding the structure of the selected row.

The color of the Overlay Outline changes based on your actions or the type of content in the layout:

- A Blue outline signifies the row or module you are presently editing.
- A Gray outline surrounds the row for the column or module currently being edited.
- An Orange Outline appears around global rows, columns, or modules in your layout.

### Empty Columns

If your layout contains empty columns, the outline will appear dashed.

![Empty Columns dashed outline](/img/beaver-builder/user-interface--builder-overlay--2.jpg)

## Actions Toolbar

The Actions Toolbar is located in the upper left corner of the Overlay for both rows and modules, providing convenient and swift access to essential tools and actions.

![Overlay Actions Toolbar](/img/beaver-builder/user-interface--builder-overlay--3.jpg)

### Move

Enables you to rearrange the placement of a row or module within the layout through drag-and-drop. You can also use the Move Left or Move Right actions to quickly change the position of the column or Box module.

### Settings

Enables you to access the row or module settings. The Settings drop down menu also provides access to the following actions:

- **Reset Row Widths** (row only) reverts all row widths to the default.
- **Reset Column Widths** (row only) reverts all column widths within that row to the default.
- [**Copy Settings**](layouts/advanced-tab/copy-paste.md) copies the row or module settings to the clipboard.
- [**Paste Settings**](layouts/advanced-tab/copy-paste.md) pastes the row or module settings from the clipboard.

:::info
The Paste option becomes accessible only after you've copied the settings of a row or module to the clipboard.
:::

### Duplicate

Creates an identical copy of the row or module. Appears in the Overlay Actions Toolbar as a clone.

### Select Parent

Provides a tree view of your row structure and hierarchy, allowing you to quickly select parent and child nodes. Clicking on a node item in the tree view will open the Settings Window for that specific node.

By hovering your mouse cursor over any node item, the overlay outline will change to aid in identifying the node.

:::info

The Select Parent action toolbar menu item is only accessible for the overlay outline of a column or module.

:::

![Edit columns settings dropdown menu](/img/beaver-builder/user-interface--builder-overlay--4.jpg)

### Remove

Deletes the row or module, this action requires confirmation via a popup window.

## Overlay Drag Handle

Drag handles on the outer edge of the overlay let you adjust the row's max-width and column width by moving the drag handle.

![Resize rows and columns using the drag-handles](/img/beaver-builder/user-interface--builder-overlay--5.jpg)
