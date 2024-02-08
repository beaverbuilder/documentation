---
id: smooth-scrolling
title: Smooth scrolling
sidebar_label: Smooth Scrolling
description: This article explains the different methods for adding custom code to Beaver Builder layouts.
---

Smooth scrolling lets you jump to a specific row, column, or module with just one click, without manually scrolling up and down. This is especially useful for navigating one-page websites.

<div className="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Aatomn_Nxuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

:::caution
Smooth scrolling is intended to work for links that target nodes on the same page only. Smooth scrolling is not available if the target node is located on another page or post on your site.
:::

In the steps below, we'll use the term [*node*](getting-started/how-it-works.md#nodes) to refer to a row, column or module, and we'll call the destination that you want to link to the *target node*.

## Add a unique `ID` to the target node

1. Open the target node's settings.
2. Click the [Advanced tab](advanced-tab/index.md) and scroll down to the [HTML Element](advanced-tab/html-element.md#id) section.
3. In the `ID` option, add a unique value such as `my-unique-id`.   
`ID` values must only contain alphanumeric characters, hyphens, or underscores.

![](/img/beaver-builder/basics--smooth-scrolling--1.jpg)

## Add the unique `ID` to a link

You can add the unique `ID` to a a link option in a node, link in text within a [Text](module/text.md) or [HTML](modules/html.md) modules or WordPress menu item.

### Node

1. Open the node settings where you will create the link.
2. In the link option, enter your unique `ID` with a pound sign (`#`) as the prefix.  
  Following our example, your link will be `#my-unique-id` , as shown in the Button module screenshot below.  
  
  ![](/img/beaver-builder/basics--smooth-scrolling--2.jpg)

### Link within Text

If the link is created within the [Text](module/text.md) or [HTML](modules/html.md) modules rather than an module with a **Link** option, set up the link the same way, with `#my-unique-id`, as shown in this screenshot.

![](/img/beaver-builder/basics--smooth-scrolling--3.jpg)

If you are using the [HTML module](modules/html.md), create your link using HTML like the example below.

```markup
<a href="#my-unique-id">My link text</a>
```

### WordPress Menu Item

1. In the **WordPress Admin Dashboard**, navigate to **Appearance > Menus**.

2. Add a new menu item using the **Custom Links** item.

3. In the **URL** field, enter your unique `ID` with a pound symbol (`#`) as the prefix and enter your menu item name in the **Link Text** field.  
  Following our example, your link will be `#my-unique-id`, as shown in the screenshot below.  
  
  ![](/img/beaver-builder/basics--smooth-scrolling--4.jpg)

4. Click the **Add to Menu** button, then click **Save Menu**.

When your link is clicked, it will go to directly to the target node, with a smooth scrolling effect if both are on the same page.

## Smooth Scroll to Text

By default, Beaver Builder’s scrolling JavaScript only works with links to [nodes](getting-started/how-it-works.md#nodes) (rows, columns, or modules), in which you set the anchor `ID` on the [Advanced tab](advanced-tab/index.md). If you link to a target HTML element inside a Text Editor or HTML module, such as a `<div>` element, the link will jump up or down the page rather than smooth scroll. If you are also linking from a Text Editor or HTML link where you can modify the `<a href>` link, you can set up smooth scrolling.

1. Create an `<a>` anchor for the target node. For example, you could create a target anchor called `my-div` for a `<div>` element in an HTML module, as follows:

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

## Customize Smooth Scrolling

You can [use JavaScript to customize aspects of the smooth scroll](advanced/smooth-scrolling-tweaks.md): duration, scroll pattern, and offset for various devices

## Fixed Header

You may encounter an issue where the target node is hidden behind the header if you're using a theme with a fixed header. The browser navigates to the anchor by directly scrolling to it, but scrolling that far down places the anchor under the fixed header.

This can be resolved by adjusting the offset value. For more information, please see the [Smooth Scrolling Tweaks](advanced/smooth-scrolling-tweaks.md) article.

:::tip
Although not related to Beaver Builder smooth scrolling, the issue can also occur when navigating to an anchor on another page. Adjusting the offset value for smooth scrolling will not solve this problem in these cases. However, the CSS below may resolve your issue. Simply change `-100px` and `100px` values in the example to the height of your fixed header.

```css
:target:before {
	content: "";
	display: block;
	margin-top: -100px; /* Height of header */
	height: 100px; /* Height of header */
}
```
:::

## Disable Smooth Scrolling

You can disable smooth scrolling for a specific target from any link that occurs on the same page using the `fl-no-scroll` class name.

1. When you add a unique `ID` to the target element's **ID** field on the [Advanced tab](advanced-tab/index.md) in the [previous procedure](#add-a-unique-id-to-the-target-node), add `fl-no-scroll` to the **Class** field below it.

2. Create the link to the ID using the instructions above.
