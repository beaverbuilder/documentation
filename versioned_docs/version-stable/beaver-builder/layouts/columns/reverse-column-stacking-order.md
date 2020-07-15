---
id: reverse-column-stacking-order
title: Reverse column stacking order
sidebar_label: Reverse column stacking order
---

By default, columns that stand side by side on a large device will change to
stacked columns on a small device, where left to right becomes top to bottom.
For more complex examples of how layers of columns in a row stack by default,
see the [column layouts overview](/beaver-builder/layouts/columns/column-layouts-overview.md).

You can easily reverse the stacking order with a setting on the **Advanced**
tab so the columns stack bottom to top. The reversed stacking order applies to
all columns in the same layer, so you only have to change the setting for one
of the columns.

In this example, there are two rows with two columns each. This screenshot
shows the large screen view in the Beaver Builder editor, with text in the
left column in the first row, and text in the right column in the second row.

![](/img/row-columns-reverse-column-stacking-order-1.jpg)

With the default stacking order on a small device, the left-right columns
change to above-below, as shown in the following screenshot, so the first row
shows text-photo and the second row shows photo-text.

![](/img/row-columns-reverse-column-stacking-order-2.jpg)

This order is somewhat confusing on small devices because it's harder to see
from the vertical order which text applies to which photo.

To make the stacking order consistent, reverse the stacking order of one of
the horizontal column pairs. For example, if you reverse the stacking order in
either of the two horizontal columns in the first row, the vertical stacking
order in the first row changes to photo-text, the same as the natural stacking
order of the second row, as in the following screenshot.

![](/img/row-columns-reverse-column-stacking-order-3.jpg)

:::note **Note**
If accessibility is important for your site, bear in mind that
changing the stacking order (using any technical method) doesn't change the
DOM order, so screen readers will continue to see the original stacking order,
which can be confusing.

If you're designing for accessibility it's a best
practice to design the page such that changing stacking order is unnecessary.
See [this Mozilla article](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#The_order_property_and_accessibility)
and [this best practice](https://www.webaccessibility.com/best_practices.php?best_practice_id=894).
:::

**To reverse the stacking order of columns on small devices:**

  1. Mouse over one of the modules in your columns and click **Column Settings**.
  2. Navigate to the **Advanced** tab.
  3. In the **Visibility** section, change **Stacking Order** to **Reversed**.

Test the stacking by typing the keyboard shortcut _p_ or choosing **Preview
layout** on the **Tools** menu, then clicking the phone icon in Preview mode.
