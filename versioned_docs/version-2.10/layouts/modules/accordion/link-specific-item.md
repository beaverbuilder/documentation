---
id: link-specific-item
title: Link to a Specific Item
sidebar_label: Link to a Specific Item
---

In this article, you will learn how to create a link that navigates to a specific item in an Accordion module.

## Adding an `ID`

To begin, first assign an `ID` to the Accordion module, which can be accomplished by following the instructions below:

1. Open the Accordion module settings and click the [Advanced tab](../../advanced-tab/index.md).

2. Scroll to the `ID` setting, and set a unique `ID` name for the module.  
  See the [Advanced tab](../../advanced-tab/html-element.md#id) article for more information about `ID` selectors.

3. Save changes.

## Index Values

Every item in the Accordion module is given a unique index value that starts at `0`. The index value of the initial Accordion item is `0`, the second item is assigned an index value of `1`, the third item has an index value of `2`, and so on. By using these index values in an HTML link, you can generate a link to a specific Accordion item and set it as the active item.

The below HTML code example demonstrates how the index values are allocated to each Accordion item. In this instance, the Accordion module has been given a unique ID name of `my-accordion` and consists of three Accordion items.

```html
<div id="my-accordion" class="fl-module fl-module-accordion">
  <div class="fl-module-content fl-node-content">
    <div class="fl-accordion">
      <div id="my-accordion-0" class="fl-accordion-item"></div>
      <div id="my-accordion-1" class="fl-accordion-item"></div>
      <div id="my-accordion-2" class="fl-accordion-item"></div>
    </div>
  </div>
</div>
```

## Linking to a Specific Item

The link structure will differ based on whether the Accordion module is on the same page as your link. To create the link, you can use either the Button or HTML modules in your layout.

### Same Page

When the link is on the same page as the Accordion module, you can use a hash character (`#`) followed by an `ID` name and the item's index value separated by a hyphen. For instance, using our example `ID` name of `my-accordion`, the link would be structured as follows:

```html title='Button module link option'
#my-accordion-1
```

```html title='HTML module link'
<a href="#my-accordion-1">My Accordion link</a>
```

### Different Page

To create a link to the Accordion module from a different page on your website, use the complete URL of the target page along with the hash symbol (`#`) followed by the `ID` and index value. For instance, if you want to add the link to your homepage, and the Accordion module is located on a page named Sample Page, the link should appear like this:

```html title='Button module link option'
https://my-website.com/sample-page#my-accordion-1
```

```html title='HTML module link'
<a href="https://my-website.com/sample-page#my-accordion-1">My Accordion link</a>
```
