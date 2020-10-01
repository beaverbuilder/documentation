---
id: column-layouts-overview
title: Column layouts overview
sidebar_label: Column layouts overview
---

In Beaver Builder you cannot have rows within rows, but you can construct
complex layouts with column layers and child columns.

## Column layers, module layers, and child columns

In any row, you can have multiple vertical layers of parent columns, child
columns, and modules. Here are some diagram examples of a single row with
various configurations of layers and columns.

In Figure 1, there is one column inside the row, and the column contains three
module layers. You can have any number of module layers within a single
column, but only one module in each layer.

![](/img/row-columns-column-layout-overview-1.png)

Figure 1: One column with three module layers

If you want to more than one module in a layer, add a new column for each
module. In Figure 2, there are two column layers in the row. The first layer
has one column and the second layer has two columns.

![](/img/row-columns-column-layout-overview-2.png)

Figure 2: Two column layers with one column in the first layer and two columns
in the second layer

:::note **Note**
You can have a maximum of 12 columns in a layer. You can have as
many module and column layers in a row as you like.
:::

A column within another column is considered a child column. In Figure 3,
there are two module layers and then a layer with two child columns.

![](/img/row-columns-column-layout-overview-3.png)

Figure 3: Two module layers and a third layer with two child columns

:::note **Note**
You can have a maximum of four child columns in a layer. You can
have as many layers of child columns as you like.
:::

You can also have a single child column in a row with module layers. In Figure
4, there are two module layers and then a layer with one child column. Why
would you want to do this? Usually, it's because you want to add a background
color or image to the child column but you still want the modules and the
child column in a single parent column (perhaps to add another background
color or to line up content in another column to the left or right). The real
example in the next section will make this more clear.

![](/img/row-columns-column-layout-overview-4.png)

Figure 4: Two module layers and a third layer with one child column

:::note **Note**
By default, when you drag a module into a column, you create a
module layer. If you want to create a child column, you usually need to [add
one or more empty columns](/beaver-builder/layouts/columns/insert-columns.md) inside the main column before you add modules.
:::

## Real-world example

Here's an example of a page with a complex layout of columns, module layers,
and child columns. This is a single row with two column layers. The first
column layer has two columns with two layers each, and the second column layer
has two module layers and a child column layer. The main columns have a light
gray background. The child columns have a dark gray background.

![](/img/row-columns-column-layout-overview-5.jpg)

Figure 5: A real example of column layers, modules layers, and child columns

In the upper left column, there's one layer with a Photo module, and a second
layer with three child columns, each of which contains an Icon module.

In the upper right column, the first layer has a Heading module and the second
layer has two child columns. The left child column has two module layers, with
a Heading module in the upper layer and a Button module in the lower layer.
The right child column has one module layer with a Photo module.

The bottom column layer with two module layers and a child column layer all
contain Heading modules, with text that explains their position.

### How to find child columns in an existing layout

Without background shading, it can be hard to tell the difference between
child columns. For example, in the following screenshot you can't tell if this
column layer has three main columns or one main column on the left and two
child columns on the right.

![](/img/row-columns-column-layout-overview-6.jpg)

The best way to find out is to edit the column and look to see if there are
options for the parent column. If there are, it means you have selected a
child column. When you mouse over the **Parent settings**, the entire parent
columns becomes shaded in blue, as shown in the following screenshot.

![](/img/row-columns-column-layout-overview-7.jpg)

On the other hand, the column on the left has no options for a parent column
at all, which means it is not a child column. If you mouse over **Column
settings**, the entire left column is shaded in blue, showing that the second
layer of that column has three child columns.

![](/img/row-columns-column-layout-overview-8.jpg)

:::tip **Tip**
Knowing how columns stack as screen size decreases will help you decide how to construct the columns on your page. For more information, see the [article on responsive columns](/beaver-builder/layouts/responsive-design/responsive-columns.md).