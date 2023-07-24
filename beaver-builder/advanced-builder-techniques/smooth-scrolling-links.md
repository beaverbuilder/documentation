---
id: smooth-scrolling-links
title: Add or disable smooth scrolling links
sidebar_label: Smooth scrolling links
description: How to add anchor and links that scroll smoothly and how to disable that feature.
---

<div className="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Aatomn_Nxuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

You can add an `ID` to a target row, column, or module so that links from other locations will go directly to that spot on a page. When target is on the same page, or on another page with a Beaver Builder layout, the page  scrolls smoothly up or down to the target when the link is clicked. This helps users get a sense of where they are gooing to view the linked content.

In these instructions, we'll use the term *element* to refer to a row, column or module, and we'll call the destination that you want to link to the *target element*.

## Add a unique `ID` to the target element

  1. Open the target element's settings in Beaver Builder.
  2. Click the **Advanced** tab and scroll down to the **CSS Selectors** section.
  3. For the `ID` setting, add a unique value such as `my-unique-id`.   
`ID` values must only contain alphanumeric characters, hyphens, or underscores.

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

That’s it! When your link is clicked, it will go to directly to the target element, with a smooth scrolling effect if both are on the same page.

## Smooth scroll to elements in text areas

By default, Beaver Builder’s scrolling JavaScript only works with links to rows, modules or columns, in which you set the anchor ID on the Advanced tab. If you link to a target HTML element inside a Text Editor or HTML module, such as a `<div>` element, the link will jump up or down the page rather than smooth scroll. If you are also linking from a Text Editor or HTML link where you can modify the `<a href>` link, you can set up smooth scrolling.

1. Create an `<a>` anchor for the target HTML element. For example, you could create a target anchor called `my-div` for a `<div>` element in an HTML module, as follows:

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

You can [add JavaScript to customize aspects of the smooth scroll](/beaver-builder/advanced-builder-techniques/smooth-scrolling-tweaks-with-code.md): duration, scroll pattern, and offset for various devices. 

## Disable smooth scrolling for a target

You can disable smooth scrolling for a specific target from any link that occurs on the same page.

1. When you add a unique ID to the target element's **ID** field on the **Advanced** tab in the [previous procedure](#add-the-unique-id-to-the-link-element), add `fl-no-scroll` to the **Class** field below it.  
2. Create the link to the ID using the instructions above.
