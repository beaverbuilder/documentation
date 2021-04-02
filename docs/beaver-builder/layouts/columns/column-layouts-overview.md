---
id: column-layouts-overview
title: Column layouts overview
sidebar_label: Column layouts overview
---

In Beaver Builder, you cannot place rows within rows, but you can construct
complex column layouts within a single row, as shown in Figure 1.

*Figure 1: An example of a complex column layout in one row*  
![An example of a complex column layout in one row](/img/row-columns-column-layout-overview-5-nested.jpg)

## Column groups, columns, and modules

Figure 2 shows a schematic of a single row that displays some of the layout properties of column groups, columns, and modules. This example is displayed on a large screen. Its responsive changes on small devices will be described below.

*Figure 2: A schematic example of a complex column layout*  
![ schematic example of a complex column layout](/img/columns-overview-column-schematic-example.png)

* A column group, shown with red outlines in Figure 2, is like a row within a row.  Each column group contains one or more columns arranged horizontally.
This example has two main column groups and one nested column group.  
The first column group has one column and the second column group has two columns, labeled 2a and 2b. 
n Figure 2, Modules 7 and 8 are nested into a two-column group.
* Column groups are automatically created as you add columns or modules. Columns can be dragged in from the **Rows** tab of the Content panel or as you drag modules into your layout. See [the article about inserting columns](/beaver-builder/layouts/columns/insert-columns.md).

The HTML rendered for the layout shown in Column 2 mirrors the row, column, and module structure shown in Figure 2. Abstracting away from the actual code, the classes for the main elements are embedded as follows:

```
row
    column group
        column
            module 1
    column group
        column 2a
            module 2
        column 2b
            module 3
            module 4
            module 5
            module 6
        column group
            column
                Module 7
            column
                Module 8
```
Figure 3 shows a screenshot of this column layout with actual content.

*Figure 3: Same column example with content*   
![Same column example with content](/img/columns-overview-multiple-modules-and-nested.jpg)

## Heuristics for column layouts

You can often achieve layouts that have the same placement on a large screen but use different underlying column structure. There are two main reasons for preferring one layout over another:

* Responsive stacking  
Modules can stack differently depending on the column layout in which they're placed.
* Background scope  
You can apply color or photo backgrounds to individual columns, and this may determine how you want to group them. See the [tip about determining structure and scope for existing columns](/beaver-builder/layouts/columns/tips-for-working-with-columns.md#tip-3-figure-out-column-structure-for-existing-columns).

Here's an example of layouts that look identical but produce different responsive results. Figure 4 shows a layout with four column groups in one row. The third and fourth column groups each have two columns. In this annotated screenshot, each column group is numbered and each column is marked with a blue dashed line.

*Figure 4: One row with four column groups*   
![One row with four column groups](/img/columns-overview-4-column-groups.jpg)

However, when you look at this layout on a small device, shown in Figure 5, you can see that the stacked order shows the two image headings from the third column group, then the two images from the fourth column group. 

*Figure 5: Four column groups with undesirable responsive behavior*   
![Four column groups with undesirable responsive behavior](/img/columns-overview-4-column-groups-mobile.jpg)

By changing the column layout, you can get the headings to stack above their respective image.  Instead of a fourth column group, move each Photo module to the third column group underneath the Heading module, shown in Figure 6.

*Figure 6: Two modules in the third column group to improve responsive behavior*   
![Two modules in the third column group to improve responsive behavior](/img/columns-overview-3-column-groups-adjusted-for-stacking.jpg)

Now the columns are stacked correctly in mobile view:

*Figure 7: Two modules in the third column group, mobile view*   
![Two modules in the third column group, mobile view](/img/columns-overview-stacking-behavior-improved.jpg)

For details about how columns stack, see [the article about responsive columns](/beaver-builder/layouts/responsive-design/responsive-columns.md).

## Column limits

* A row can have from one to an unlimited number of column groups.
* A top-level column group can have a maximum of 12 columns.
* A nested column group can have a maximum of four columns. 
* Each column can contain from zero to an unlimited number of modules.  
An empty column is sometimes used on either side of a column with content to position the content horizontally.
