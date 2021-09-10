---
id: tips-for-working-with-columns
title: Tips for working with columns
sidebar_label: Tips for working with columns
description: Tips for making columns easier to work with.
---

Using columns and child columns can get, well, complicated. Here are some tips to help you get started. Along the way, you may find shortcuts that work better for you.

## Tip #1: Understand the properties and limitations of column layouts

See the [column layouts overview article](/beaver-builder/layouts/columns/column-layouts-overview.md). In particular, make sure you understand the concept of column groups, child columns, and multiple modules in a single column, as well as the limits on columns.

See the [Responsive columns](/beaver-builder/layouts/responsive-design/responsive-columns.md) article to understand how columns stack as screen width decreases.

## Tip #2: Drag in the layout before inserting content

You can create new columns by dragging a module into the layout. But sometimes the exact column structure you want, such as a new column to the left or right of an existing column, doesn't work by dragging in a module. It's hard to know by dragging whether you've exceeded a [column limit](/beaver-builder/layouts/columns/column-layouts-overview.md/#basic-column-rules-and-limits) or just need to drag in column structure instead.

The best way to insert columns in a complex layout is to create the column structure before adding content. Here's how to do it.

1. Open the [Content panel](/beaver-builder/getting-started/bb-editor-basics/user-interface.md/#8-14-content-panel) and click the **Rows** tab.  
Make sure the **Group** name is **Columns**. You'll see a selection of column layouts.
2. Drag the column layout you want into your layout.  
A new row is created if you drop the column layout outside of an existing row. If you drop the column layout inside an existing column, a child column layout is created.

:::note **Note**
If you are unable to drop the column layout where you want it, most likely you have exceeded the [column limits](/beaver-builder/layouts/columns/column-layouts-overview.md#c#basic-column-rules-and-limits) in that location.
:::

After you have the structure set up, it's easy to drag in content modules. Of course, you can [change the column widths](/beaver-builder/layouts/columns/resize-or-reset-column-width.md) of any column in your layout, before or after you add modules.

## Tip #3: Figure out column structure for existing columns

It can be hard to tell the difference between independent columns and parent/child columns. It's important to know this when the columns aren't stacking the way you expect or when you want to group columns to apply a background or border effect.

For example, here's a screenshot of a row containing a Heading module with two Button modules underneath.

![Two column groups or one parent column with two child columns?](/img/column-groups-vs-nested-example.png)

Just mousing over this layout, you can't tell if the row has three independent columns (one for the heading and one for each of the two buttons) or if it's a parent column for the heading and two child columns for the buttons. The difference is shown in this schematic.

![Schematic of two column groups versus one column group with two child columns](/img/column-groups-vs-nested-columns-schematic.png)

Here are two methods to determine the difference.

### Method 1: Use the Outline panel

Using the [Outline panel](/beaver-builder/getting-started/bb-editor-basics/outline-panel.md), it's easy to see whether the row has a parent column with two child columns:

![Outline panel shows one column parent with two child columns](/img/layouts--columns--tips-for-working-with-columns--3.png)

Or three independent columns:

![Outline panel shows three main columns](/img/layouts--columns--tips-for-working-with-columns--4.png)

### Method 2: Look at column shading

You can view a column's scope to see if it's a parent with child columns beneath it.  

Click the **Edit  Column** icon for a module, then mouse over **Column settings**. The blue shading that appears shows  the scope of the column containing that module.

In this example, **Column Settings** for the Heading module shows the blue background shading extending over the area with the two buttons, which shows there is a parent column with two child columns:

![Column scope for the Heading module](/img/tips-for-columns-shading.png)

A good way to identify a child column is to click the **Edit column** icon for a module you suspect is in a child column. If the column is a child, you'll see in the menu a couple parent column options at the bottom of the list, as in this screenshot. The parent column settings apply to the heading column plus both button columns, as shown in the previous screenshot.

![Column menu for a child column](/img/tips-for-columns-nested-columns.png)

## Tip #4: Delete modules first, columns second

When you're deleting a column in a complex column layout, you could end up being surprised that what got deleted isn't what you expected. In the **Edit column** menu, it's a good idea to mouse over the **Delete column** menu item to verify the scope of what you're about to delete. 

Another idea is to delete the modules first, then delete the empty column structure. 

If you find you've deleted something you want to get back, you can [access the History panel to undo it](/beaver-builder/getting-started/bb-editor-basics/undo-redo.md).

See [the article about deleting columns](/beaver-builder/getting-started/bb-editor-basics/delete-a-module-or-column.md).
