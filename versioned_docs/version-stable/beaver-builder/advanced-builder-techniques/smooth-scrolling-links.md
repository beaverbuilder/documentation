---
id: smooth-scrolling-links
title: Smooth scrolling links
sidebar_label: Smooth scrolling links
---

You can add an `ID` to a target row, column, or module so that links from other
locations will go directly to that spot on a page. When the link and target
are on the same page, the page will smoothly scroll up or down to the target
when the link is clicked. Besides looking great, this is a helpful navigation
aid to users – it's a visual cue that they are not leaving the page when they
go to the link.

In these instructions, we'll use the term *element* to refer to a row, column
or module, and we'll call the destination that you want to link to the *target
element*.

## Add a unique `ID` to the target element

  1. Open the target element's settings in Beaver Builder.
  2. Click the **Advanced** tab and scroll down to the **CSS Selectors** section.
  3. For the `ID` setting, add a unique value such as `my-unique-id`. `ID` values must only contain alphanumeric characters, hyphens, or underscores.

## Add the unique `ID` to the link element

  1. Open the element where you will create the link.
  2. If the link and target are on the same page, enter your unique `ID` with a pound sign (#) as the prefix. Following our example, your link will be `#my-unique-id` , as shown in the screenshot below.

![](/img/how-to-tips-smooth-links-1.png)

If the link is created within the Text Editor or HTML module rather than an
element with a **Link** field, set up the link the same way, with `#my-unique-id`, as shown in this screenshot.

![](/img/how-to-tips-smooth-links-2.png)

If the link is to a target on another page, the link should be the full URL,
followed by the unique ID with a pound sign, for example:

```markup
http://example.com/#my-unique-id
```

That’s it! When your link is clicked, it will go to directly to the target
element, with a smooth scrolling effect if both are on the same page.

## Smooth scroll to elements in text areas

By default, Beaver Builder’s scrolling JavaScript only works with links to rows,
modules or columns, in which you set the anchor ID on the Advanced tab. If you
link to a target HTML element inside a Text Editor or HTML module, such as a
`<div>` element, the link will jump up or down the page rather than smooth
scroll. If you are also linking from a Text Editor or HTML link where you can
modify the `<a href>` link, you can set up smooth scrolling.

1. Create an `<a>` anchor for the target HTML element. For example, you could
create a target anchor called `my-div` for a `<div>` element in an HTML
module, as follows:

  ```markup
  <a id="my-div"></a>
  <div>
     <p>I want to link to this spot.</p>
  </div>
  ```

2. Open the element where the link will be and add the class `fl-scroll-link` to the `<a href>` link. For example:

  ```markup
  <a href="#my-div" class="fl-scroll-link">Click Here</a>
  ```

## Customize smooth scrolling settings

You can [add JavaScript to customize aspects of the smooth scroll](/beaver-builder/advanced-builder-techniques/smooth-scrolling-tweaks-with-code.md): duration, scroll pattern, and
offset for various devices. 
