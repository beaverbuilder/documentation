---
id: tips-for-working-with-columns
title: Tips for working with columns
sidebar_label: Tips for working with columns
---

Using column groups and nesting columns can get, well, complicated. Here are some tips to help you get started. Along the way, you may find shortcuts that work better for you.

## Tip #1: Understand the properties and limitations of various column layouts

See the [column layouts overview article](/beaver-builder/layouts/columns/column-layouts-overview.md). In particular, make sure you understand the concept of column groups, nested columns, and multiple modules in a single column. See the [Responsive columns](/beaver-builder/layouts/responsive-design/responsive-columns.md) article to understand how columns stack as screen width decreases.

## Tip #2: Drag in the layout before inserting content

You can create new columns by dragging a module into the layout. But sometimes the exact column structure you want, such as a new column to the left or right of an existing column, doesn't work by dragging in a module. It's hard to know by dragging whether you've exceeded a [column limit](/beaver-builder/layouts/columns/column-layouts-overview.md/#column-limits) or just need to drag in column structure instead.

The best way to insert columns in a complex layout is to create the column structure before adding content. Here's how to do it.

1. Open the [Content panel](/beaver-builder/getting-started/bb-editor-basics/user-interface.md/#8-14-content-panel) and click the **Rows** tab.  
Make sure the **Group** name is **Columns**. You'll see a selection of column group layouts.
2. Drag the column group you want into your layout.  
A new row is created if you drop the column group outside of an existing row. If you drop the column group inside an existing column, a nested column group is created.

If you are unable to drop the column group where you want it, most likely you have exceeded the [column limits](/beaver-builder/layouts/columns/column-layouts-overview.md#column-limits) in that location.

Once you have the structure set up, it's easy to drag in content modules. Of course, you can [change the column widths](/beaver-builder/layouts/columns/resize-or-reset-column-width.md) of any column in your layout, before or after you add modules.

## Tip #3 Figure out column structure for existing columns

It can be hard to tell the difference between column groups, modules in a single column group, and nested columns.  It's important to know this when the columns aren't stacking the way you expected, or when you want to group columns differently to apply a background effect.

For example, here's a screenshot of a Heading module with two columns of Button modules underneath.

![Two column groups or one parent column with two nested columns?](/img/column-groups-vs-nested-example.png)

Just mousing over this layout, you can't tell if it's a row with two column groups (upper row and lower row) or a single column group with nested columns for the buttons. Here's a diagram of the difference.

![Schematic of two column groups versus one column group with two nested columns](/img/column-groups-vs-nested-columns-schematic.png)

The best way to determine a column's scope is to click the **Edit  Column** icon for a module, then mouse over **Column settings**. The blue shading that appears shows  the scope of the column containing that module.

In this example, when you look at column settings for the Heading module, you can see that the blue background shading extends over the area with the two buttons, which shows there is a single parent column with two nested columns:

![Column scope for the Heading module](/img/tips-for-columns-shading.png)

A good way to verify a nested column is to click **Edit column** for a module in a column. If the column is nested, the blue shading is limited to that column and in the menu, you'll see a couple parent column options at the bottom of the list, as in this screenshot. 

![Column menu for a nested column](/img/tips-for-columns-nested-columns.png)

When there are two main column groups, the column scope still shows only that Button module but there are no parent options in the menu:

![Column menu for the lower column group](/img/tips-for-columns-independent-column-groups.png)


## Tip #4 Delete modules first, columns second

When you're deleting a column in a complex column layout, you could end up being surprised that what got deleted isn't what you expected. In the **Edit column** menu, it's a good idea to mouse over the **Delete column** menu item to verify the scope of what you're about to delete. 

Another idea is to delete the modules first, then delete the empty column structure. 

If you find you've deleted something you want to get back, you can [access the History panel to undo it](/beaver-builder/getting-started/bb-editor-basics/undo-redo.md).

See [the article about deleting columns](/beaver-builder/getting-started/bb-editor-basics/delete-a-module-or-column.md).
