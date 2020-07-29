---
id: link-to-specific-item-in-tabs-or-accordion-module
title: Link to a specific item in a Tabs or Accordion module
sidebar_label: Link to a specific item in a Tabs or Accordion module
---

You can link to a specific item in the Tabs or Accordion module by setting a
custom CSS ID for the module, then using that item's index in the anchor link.

:::note **Note**
Indexes start at 0 for the first item in the list, so the first item
is 0, the second item is 1, and so on.
:::

**To link to a specific item in a Tabs or Accordion module:**

  1. Open the module for editing and click the **Advanced** tab.
  2. In the **ID** field, set a unique ID name for the module. See the [**Advanced** tab article](/beaver-builder/layouts/advanced-tab-for-rows-columns-modules.md#html-element-section) for more information about ID selectors.
  3. Link to any item in that module by specifying the module’s ID with the item’s index, separated by a hyphen.

For example, suppose you have created a Tabs module with four tabs, shown in
the following screenshot.

![](/img/how-to-tips-link-tab-accordion-1.png)

You want to create a link that will open the second tab, and you have added an
ID name of `my-tabs` in the Tabs module. When you set up the link to that tab,
if the link is on the same page as the tabs, just use the anchor as the link,
as follows.

```markup
#my-tabs-1
```

If you want to add the link to the tabs from another page on your site, create
the link with the full URL of the target page plus the anchor, as in the
following example:

```markup
https://example.com/buttons/#my-tabs-1
```

As mentioned above, you start counting from 0, so the second tab is 1.

In the following animation, you can see that clicking a heading link on one
page causes a jump to the target page with the second tab open.

![](/img/how-to-tips-link-tab-accordion-2.gif)
