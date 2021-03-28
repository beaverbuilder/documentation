---
id: column-layouts-overview
title: Column layouts overview
sidebar_label: Column layouts overview
---

In Beaver Builder, you cannot place rows within rows, but you can construct
complex layouts with column groups and nested columns.

*Figure 1: An example of complex columns*  
![An example of complex columns](/img/row-columns-column-layout-overview-5-nested.jpg)

## Column groups, modules in columns, nested columns

In a single row, you can have multiple column groups, multiple modules in a column, and nested columns. There are two main reasons for preferring one layout over another:

* Responsive stacking  
Modules can stack differently depending on the column layout in which they're placed.
* Background scope  
You can apply backgrounds such as color or an image to individual columns, and this may determine how you want to group columns.

### Column groups

In any row, there is at least one *column group*, which can be thought of as a row within a row. You can have an unlimited number of column groups in a row. One column group can have a maximum of 12 columns.

Figure 2, shows four column groups in one row. The third and fourth column groups each have two columns. In this annotated screenshot, each column group is numbered and each column is marked with a blue dashed line.

*Figure 2: One row with four column groups*   
![One row with four column groups](/img/columns-overview-4-column-layers.jpg)

In Figure 3 you can see how each column group is rendered in the HTML output.

*Figure 3: HTML for the four column groups*   
![HTML for the four column groups](/img/columns-overview-html-for-column-layers.png)

### Modules in columns

You can place as many modules as you like in a single column group. 

In Figure 4, there are two column groups. The second group has two columns, and the column on the right contains four modules. The left and right columns are set to equal height with a centered vertical position, and the column on the right has a background color.

*Figure 4: Multiple modules in one column*   
![Multiple modules in one column](/img/columns-overview-multiple-modules-in-column-layer.jpg)

The stacking order in mobile view is shown in Figure 5.

*Figure 5: Multiples modules in one column, mobile view*   
![Multiples modules in one column, mobile view*](/img/columns-overview-multiple-modules-in-column-layer-mobile.jpg)

### Nested columns

Suppose in the previous example you want to put two buttons side by side in the right column, as shown in Figure 6. This is accomplished by nesting a layer of two columns within the right column:

*Figure 6: Two columns nested in the right column*   
![Two columns nested in the right column](/img/columns-overview-multiple-modules-and-nested.jpg)

Here's another example, in which  nesting is used to improve the column stacking order. In Figure 2, which shows four column layers, the title of the image in the third column layer sits over the image it matches in the fourth column layer. However, when you look at this layout on a small device, shown in Figure 7, you can see that the stacked order shows the two image headings from Layer 3, then the two images from Layer 4. 

*Figure 7: Four column layers, mobile view*   
![Four column layers, mobile view](/img/columns-overview-4-column-layers-mobile.jpg)

Instead of a fourth column layer, nest each Photo module in the third column layer under the Heading module, shown in Figure 8.

*Figure 8: Nested columns in third column layer, mobile view*   
![Nested columns in third column layer, mobile view](/img/columns-overview-3-column-layers-nested.jpg)

Now in mobile view, the columns are stacked correctly:

*Figure 9: Three column layers with nested columns, mobile view*   
![hree column layers with nested columns, mobile view](/img/columns-overview-3-column-layers-nested-mobile.jpg)

## Column limits

* There is a maximum of 12 columns in a layer. 
* There is a maximum of four nested columns in a layer.
* You can only have one level of nesting. In other words, you can't nest a column in a column that is itself nested.
* There is no limit to the number of column layers in a row or modules in a column layer.
