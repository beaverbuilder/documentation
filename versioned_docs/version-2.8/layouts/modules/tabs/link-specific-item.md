---
id: link-specific-item
title: Link to a Specific Tab Item
sidebar_label: Link to a Specific Item
---

In this article, you will learn how to create a link that navigates to a specific item in an Tab module.

## Adding an `ID`

To begin, first assign an `ID` to the Tab module, which can be accomplished by following the instructions below:

1. Open the Tab module settings and click the [Advanced tab](../../advanced-tab/index.md).

2. Scroll to the `ID` setting, and set a unique `ID` name for the module.  
  See the [Advanced tab](../../advanced-tab/html-element.md#id) article for more information about `ID` selectors.

3. Save changes.

## Index Values

Every item in the Tab module is given a unique index value that starts at `0`. The index value of the initial Tab item is `0`, the second item is assigned an index value of `1`, the third item has an index value of `2`, and so on. By using these index values in an HTML link, you can generate a link to a specific Tab item and set it as the active item.

The below HTML code example demonstrates how the index values are allocated to each Tab item. In this instance, the Tab module has been given a unique ID name of `my-tab` and consists of three Tab items.

```html
<div id="my-tab" class="fl-module fl-module-tab">
  <div class="fl-module-content fl-node-content">
    <div class="fl-tab">
      <div id="my-tab-0" class="fl-tab-item"></div>
      <div id="my-tab-1" class="fl-tab-item"></div>
      <div id="my-tab-2" class="fl-tab-item"></div>
    </div>
  </div>
</div>
```

## Linking to a Specific Item

The link structure will differ based on whether the Tab module is on the same page as your link. To create the link, you can use either the Button or HTML modules in your layout.

### Same Page

When the link is on the same page as the Tab module, you can use a hash character (`#`) followed by an `ID` name and the item's index value separated by a hyphen. For instance, using our example `ID` name of `my-tab`, the link would be structured as follows:

```html title='Button module link option'
#my-tab-1
```

```html title='HTML module link'
<a href="#my-tab-1">My Tab link</a>
```

### Different Page

To create a link to the Tab module from a different page on your website, use the complete URL of the target page along with the hash symbol (`#`) followed by the `ID` and index value. For instance, if you want to add the link to your homepage, and the Tab module is located on a page named Sample Page, the link should appear like this:

```html title='Button module link option'
https://my-website.com/sample-page#my-tab-1
```

```html title='HTML module link'
<a href="https://my-website.com/sample-page#my-tab-1">My Tab link</a>
```
