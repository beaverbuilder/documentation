---
id: button-group
title: Button Group
sidebar_label: Button Group
description: The Button Group module displays display multiple buttons in a single column, either horizontally or vertically. 
---

The Button Group module is a way to display multiple buttons in a single column, either horizontally or vertically. 

![](/img/button-group-30a865c5.png)

It's based on the [Button module](/beaver-builder/layouts/modules/button/button.md), so the settings are very similar.

In the Button Group module, there's a **Style** tab that applies to all of the buttons, and then there's a **Style** tab for each button you create. Any setting on an individual button's **Style** tab overrides the global setting for the button group. 

:::tip **Tip**
If you're using the Beaver Builder Theme, the buttons' initial style comes from the settings at **Customize > General > Buttons**. The button's default text color
is white text for darker accent colors and black text for lighter colors. The
default font family for the button text depends on the font family set for the
`<body>` tag.
:::

We'll break down the settings by [global button tabs](#global-button-tabs) and [single button tabs](#single-button-tabs).

## Global button tabs

### Buttons Tab (global)

**Button group label**  
An optional label for accessibility that adds an `aria` attribute with the value you specify here. For example, if you add the label <kbd>button group</kbd> for this setting, the rendered HTML shows the attribute `aria="button group"`.

**Button 1**  
Click **Edit button** to configure the first button.

**Add button**  
Click to create each additional button. 

### Style Tab (global)

This tab has four sections: a top section, **Text**, **Background**, and **Border**.

#### 1 Top section (global)

Here's a diagram that illustrates the global padding and spacing settings in this section. Each setting is described below.

![](/img/button-group-padding-and-spacing.png)

* **Layout**  
Choose a horizontal or vertical placement of the buttons.

:::tip **Tip**
A horizontal layout still stacks the buttons vertically as screen size decreases. Enter <kbd>R</kbd> on the keyboard to enter [Responsive Mode](/beaver-builder/layouts/responsive-design/responsive-editing-with-beaver-builder/) to compare layouts at different screen sizes.
:::

* **Align** (responsive)  
This setting horizontally aligns the entire button container within its row or column. See [this article](/beaver-builder/getting-started/bb-editor-basics/alignment.md) for a description of how the alignment toggle settings work.
* **Container padding** (responsive)  
Adjusts the padding between the edge of the button group container and the group of buttons.
* **Button padding** (responsive)  
Adjusts the padding between the edge of each button and the button's content. You can override this setting with the **Padding** setting on each button's **Style** tab.
* **Button spacing** (responsive)  
Increase or decrease the amount of horizontal or vertical space around the outside of each button. You can set the spacing as `px`, `em`, `%`, or `vw`. See [the article about dimensional units](/beaver-builder/advanced-builder-techniques/css-length-height-units.md).

#### 2 Text section (global)

You can override all of the settings in this section on each button's **Style** tab.

* **Text color**  
Set the button text color in the resting state.
* **Text hover color**  
Set the button color on mouse hover. If this setting is left blank, the **Text
color** setting applies for hover also.
* **Typography section** (responsive)  
See [this article](/beaver-builder/styles/typography/typography.md) about the **Typography** section settings.

#### 3 Background section (global)

You can override all of the settings in this section on each button's **Style** tab.

  * **Background color**  
Set the fill color for the button in the resting state. 
  * **Background hover color**  
  Set the button's fill color on hover. If this setting is left blank, the **Background color** setting applies to hover also.
  * **Background style**  
    **Flat**: consistent fill color  
    **Gradient**: gradient of the background color, lighter on top and darker on
the bottom.
  * **Background animation**  
    **Disabled** by default. If set to **Enabled**, there's a 0.2-second linear
transition from resting state to hover state.

#### 4 Border section (global)

You can override all of the settings in this section on each button's **Style** tab.

**Border** (responsive)  
Creates a border around each button. See [this article](/beaver-builder/styles/effects/borders.md) for more information about the settings in the **Border** section. You can override this setting on each button's **Style** tab.
**Border hover color**  
Changes the background color of the buttons on hover.

### Advanced tab (global)

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

## Single-button tabs

### General tab (single)

This tab has the following settings.

  * **Text**  
The text that appears on the button.
  * **Icon**  
Optional icon to appear on the button. If you select an icon, there are two
additional fields:  
**Icon position**: Before or after the button text.  
**Icon visibility**: The icon can be always visible or appear on hover only.
  * **Click action**  
**Link** or **Lightbox**. With **Link**, there's a URL field. With
**Lightbox**, there's a **Lightbox Content** section with **Content type**
to either embed content into an HTML field or provide a video link.  
See the [click action examples in the Button module article](/beaver-builder/layouts/modules/button/button.md#set-the-click-action-to-a-lightbox).

### Style tab (single)

This tab has four sections: a top section, **Text**, **Background**, and **Border**.

#### 1 Top section (single)

* **Padding** (responsive)  
Adjusts the padding between the edge of the button and the button's content. 

* Text align  
See [this article](/beaver-builder/getting-started/bb-editor-basics/alignment.md) for a description of how the alignment toggle settings work.

#### 2 Text section (single)

* **Text color**  
Set the button text color in the resting state.
* **Text hover color**  
Set the button color on mouse hover. If this setting is left blank, the **Text
color** setting applies for hover also.
* **Typography section** (responsive)  
See [this article](/beaver-builder/styles/typography/typography.md) about the **Typography** section settings.

#### 3 Background section (single)

  * **Background color**  
Set the fill color for the button in the resting state.
  * **Background hover color**  
  Set the button's fill color on hover. If this setting is left blank, the **Background color** setting applies to hover also.
  * **Background style**  
    **Flat**: consistent fill color  
    **Gradient**: gradient of the background color, lighter on top and darker on
the bottom.
  * **Background animation**  
    **Disabled** by default. If set to **Enabled**, there's a 0.2-second linear
transition from resting state to hover state.

#### 4 Border section (single)

**Border** (responsive)  
Places a border on the edge of the button. See [this article](/beaver-builder/styles/effects/borders.md) for more information about the settings in the **Border** section.
**Border hover color**  
Changes the background color of the buttons on hover.
