---
id: tips-for-working-with-columns
title: Tips for working with columns
sidebar_label: Tips for working with columns
---

Using columns inside other columns can get, well, complicated. Here are some
tips to help you get started. Along the way, you may find shortcuts that work
better for you.

## Tip #1: Understand the properties and limitations of using columns and
child columns

See the [column layouts overview article](/beaver-builder/layouts/columns/column-layouts-overview.md). In
particular, make sure you understand the concept of columns, module layers,
and child columns.

## Tip #2: Drag in the layout before inserting content

You can create a new main column in by dragging a module to the right or left
of an existing column. But when you create new layers in a vertical column,
dragging in a module doesn't always create its own column. The safest way to
insert child columns is to use **Add content > Row layouts**. In addition,
with complex column layouts, it can be helpful to build the row layout first,
then add the content. For example, here's a layout for three main columns (two
on top, one below) in which the first column (on the left) includes a layer
with four child columns and the second column (on the right) includes a layer
with two child columns.

![](/img/row-columns-tips-with-columns-1.png)

Once you have the structure set up, it's easy to drag in content modules, as
in the following example.

![](/img/row-columns-tips-with-columns-2.png)

Note that the first child column in the second layer on the right has two
modules, the text and the small photo. If you move that column, the two
modules will always move together.

You can still create simple column structure by dragging modules directly into
a row, and you can move columns to create new structure. See the Related
Articles for more information about inserting columns.

### Tip #3 Figuring out column structure for existing columns

Click the **Edit  Column** icon for a module, then mouse over **Move Column**
\--you'll see the scope of the column that module is in, as shown in this
screenshot.

![](/img/row-columns-tips-with-columns-3.png)

In some cases with a layer of columns, you'll find a module that isn't in its
own column that you want to style individually. In this case, follow Tip #2 to
drag in a row layout of a single column, then move that module into it. You
may run up against the level of column nesting (see Tip #1) but may find
another way to organize the column layers so you can get get the module into
its own column.

### Tip #4 Deleting modules is safer than deleting columns

When you mouse over **Delete column**, you can see the scope of what you'll
be deleting. But since there's no Undo, it's even safer to delete modules
first, then delete column structure. See [the article about deleting columns](/beaver-builder/getting-started/bb-editor-basics/delete-a-module-or-column.md).
