---
id: css-js
title: CSS & JavaScript
sidebar_label: CSS & JavaScript
description: The CSS & JavaScript sections lets you add custom CSS & JavaScript to the node (rows, columns, and modules) you're configuring.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **CSS & JavaScript** sections are available for all nodes (rows, columns, and modules) and allow you add custom CSS & JavaScript to that particular node.

![CSS & JavaScript sections in the Advanced tab](/img/beaver-builder/advanced-tab--css-js--1.jpg)

## Enable & Disable

CSS and JavaScript are the only sections found in the Advanced tab that are enabled by default, but can be disabled if needed. You can disable the CSS & JavaScripts section by disabling the [Enable Code Settings](/beaver-builder/management-migration/advanced-settings.md#enable-code-settings) option in Beaver Builder [Advanced settings](/beaver-builder/management-migration/advanced-settings.md).

## CSS Section

The CSS section can be found in the [Advanced tab](/beaver-builder/layouts/advanced-tab/index.md) and is available for all nodes (rows, columns, and modules). By using the CSS section, you can add custom CSS that will only be applied to that specific node.

For example, suppose you have a [Text module](/beaver-builder/layouts/modules/text.md) with a node id class name of `fl-node-1d43q3gf56s` and you add custom CSS to style the `<p>` tags with a specific color or font size. The following CSS rule will only affect paragraph (`<p>`) tags for that Text module.

```css
p {
  color: tomato;
  font-size: 36px;
}
```

The CSS rules are then rewritten using the Text module's node id class name (`fl-node-1d43q3gf56s`) as a prefix.

```css
.fl-node-1d43q3gf56s p {
  color: tomato;
  font-size: 36px;
}
```

:::info
The `!important` declaration may be necessary if your custom CSS styles settings already defined in the row, column, or module options, such as text color or font size options.

```css
p {
  color: tomato !important;
  font-size: 36px !important;
}
```
:::

## JavaScript Section

In contrast to the CSS section, the JavaScript section cannot automatically scope your JavaScript code to the node.

:::warning Important
In order for your JavaScript to be scoped to the specific node, you must either include the [node id class name](#identify-the-node-id) in your code, or [assign a custom ID or class name](assign-custom-id-or-class-name), and include that in your JavaScript.
:::

### Assign Custom ID or Class Name

* Add a [custom ID](html-element.md#id).
* Add a [custom class](html-element.md#class).

### Identify the Node ID

The unique node class name can be identified either by viewing the page source or by using the inspection tool provided by your browser. This node class is assigned to the parent div of the node and is prefixed with `fl-node-`. The unique node ID class name for the Heading module in the code example below is `fl-node-8zdpmqybf7sr`.

```markup
<div class="fl-module fl-module-heading fl-node-8zdpmqybf7sr">
  <div class="fl-module-content fl-node-content">
    <h2 class="fl-heading">
    <span class="fl-heading-text">Hello World</span>
  </h2>
  </div>
</div>
```

Learn more about your browser's developer tools by clicking on the links below.

* [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/overview)
* [FireFox](https://firefox-dev.tools/)
* [Google Chrome](https://developer.chrome.com/docs/devtools/overview/)
* [Safari](https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/mac)

## Usage

The CSS and JavaScript sections can be used for various purposes, such as:

* **Client Friendly:** If you're working on a client's website and the client wants to make some minor CSS adjustments. The client may have difficulty finding the correct CSS rule if you added all your custom CSS to the theme's style.css file.  

  If you want your clients to be able to easily update your CSS, you can place it in the code section of nodes (rows, columns, and modules). This allows the client to easily find the CSS rule for the correct node without affecting other CSS rules.

* **Styling Specific Elements:** Using the CSS section for nodes (rows, columns, or modules), you can style specific elements while using the module's text color option for the rest of the text. The CSS code example below uses the pseudo class `:first-of-type` to style the first `<p>` tag to the `tomato` <span className="swatch" style={{ backgroundColor: "tomato" }} /> color.  

  <Tabs>
  <TabItem value="css" label="CSS" default>

  ```css
  p:first-of-type {
    color: tomato !important;
  }
  ```

  </TabItem>
  <TabItem value="scoped-css" label="Scoped CSS">

  ```css
  .fl-node-8zdpmqybf7sr p:first-of-type {
    color: tomato !important;
  }
  ```

  </TabItem>
  <TabItem value="image" label="Screenshot">

  ![CSS example](/img/beaver-builder/advanced-tab--css-js--2.jpg)

  </TabItem>
  </Tabs>
