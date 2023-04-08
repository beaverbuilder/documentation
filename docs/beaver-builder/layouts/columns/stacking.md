---
id: stacking
title: Column Stacking
sidebar_label: Stacking
---

In this article, you will find information about the stacking of columns in Beaver Builder, including the reversal of stacking order, as well as any limitations that may apply.

## What is Column Stacking?

Beaver Builder's columns are designed to be responsive and adapt to varying screen sizes. While multi-column rows with two, three, four or more columns may look impressive on larger screens, they can pose readability challenges on smaller devices.

To solve this issue, Beaver Builder automatically stacks columns vertically at the small device breakpoint by setting the column widths to `100%`. This requires no input from the user, resulting in an improved mobile browsing experience and increased readability of the column content.

![Column Stacking comparison between desktop and mobile layouts ](/img/beaver-builder/columns--stacking--1.jpg)

## Prevent Column Stacking

You can prevent columns from automatically stacking at the Small Device Breakpoint by using the [Responsive Toggle](respionsive/toggle.md) and selecting the small device size (represented by the Smartphone icon).

When on the small device size, set a custom width value for each column within the row, ensuring that the total width of all columns doesn't exceed `100%` if you want them to be side-by-side.

![Use the Responsive Toggle to set a custom width for small devices](/img/beaver-builder/columns--stacking--2.jpg)

For instance, let's say you have a row with two columns and want to keep the two-column layout on small screens. To do this, switch to the Small Device Breakpoint using the [Responsive Toggle](respionsive/toggle.md), and customize the width of both columns to `50%`. By doing this, you can maintain the original two-column layout and keep the columns side-by-side on smaller screens.

![Maintain a two column layout on small devices](/img/beaver-builder/columns--stacking--3.jpg)

## Enforce Column Stacking

You can enforce column stacking for other device sizes too. For instance, if you want two columns in a row designed for Extra Large Device size to stack on Medium Device size, use the [Responsive Toggle](respionsive/toggle.md) to switch to the Medium Device Breakpoint (represented by the Tablet icon) and set the width of each column to `100%`.

![Enforce Column Stacking](/img/beaver-builder/columns--stacking--4.jpg)

## Reverse Column Order

You can use the **Reverse Column Order** option to reverse the column sequence for either small, medium, or both small and medium devices simultaneously. This reversal applies to the entire column group, so you only need to adjust the setting for one column within the group.

![Reverse Column Order](/img/beaver-builder/columns--stacking--5.jpg)

### How to Reverse the Order of Columns?

1. To access the Column Settings, hover your mouse over one of the modules and click on the <i className="fa-solid fa-table-columns"></i> Column Settings icon.
2. Go to the [Advanced tab](advanced-tab/index.md).
3. Under the [Visibility](advanced-tab/visibility.md) section, click on **Reverse Column Order**.
4. Select your preferred option from the available choices: **Disabled**, **Small**, **Medium**, or **Small & Medium**.

:::warning Warning
When prioritizing accessibility on your website, it's worth noting that utilizing the **Reverse Column Order** option involves using `flex-wrap: wrap-reverse;` to achieve the reversed order. However, this method does not modify the order of the Document Object Model (DOM), therefore, screen readers will continue to read the original stacking order, which may cause confusion.

When designing for accessibility, as a best practice, it's recommended to design web pages in a way that avoids the need for changing stacking order.
:::

### Custom Column Widths on Small Devices

You can use **Reverse Column Order** with custom column widths for medium and small device sizes.

For example, let's say you have a row with four columns, and on small devices, you set the column widths to `50%` to [prevent columns from stacking](#prevent-column-stacking) and create a two-by-two-column grid. By enabling Reverse Column Order, you can reverse the order of stacking, as shown in the diagram below.

![Custom Column Widths & Reverse Column Order Enabled](/img/beaver-builder/columns--stacking--6.jpg)
