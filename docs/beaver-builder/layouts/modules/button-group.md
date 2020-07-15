---
id: button-group
title: Button Group
sidebar_label: Button Group
---

A button group module is a way to display multiple buttons in a single column, either horizontally or vertically. 

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

This tab is where you create each button. Click **Edit button** to configure the first button, and **Add button** to create each additional button. 

### Style Tab (global)

This tab has four sections: a top section, **Text**, **Background**, and **Border**.

#### 1 Top section (global)

* **Layout**  
Choose a horizontal or vertical placement of the buttons.

:::tip **Tip**
Enter _R_ on the keyboard to enter [Responsive Mode](/beaver-builder/layouts/responsive-design/responsive-editing-with-beaver-builder/) to compare layouts at different screen sizes.
:::

* **Align**  
See [this article](/beaver-builder/getting-started/bb-editor-basics/alignment.md) for a description of how the alignment toggle settings work.
* **Space between buttons**  
Increase or decrease the amount of horizontal or vertical space between buttons.
* **Padding**  
Increase the space between the edge of the buttons and the button text.

#### 2 Text section (global)

* **Text color**  
Set the button text color in the resting state.
* **Text hover color**  
Set the button color on mouse hover. If this setting is left blank, the **Text
color** setting applies for hover also.
* **Typography section**  
See [this article](/beaver-builder/styles/typography/typography.md) about the **Typography** section settings.

#### 3 Background section (global)

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

See [this article](/beaver-builder/styles/effects/borders.md) for more information about the settings in the
**Border** section.

### Advanced tab (global)

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-for-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

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

* Text align  
See [this article](/beaver-builder/getting-started/bb-editor-basics/alignment.md) for a description of how the alignment toggle settings work.

#### 2 Text section (single)

* **Text color**  
Set the button text color in the resting state.
* **Text hover color**  
Set the button color on mouse hover. If this setting is left blank, the **Text
color** setting applies for hover also.
* **Typography section**  
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

See [this article](/beaver-builder/styles/effects/borders.md) for more information about the settings in the
**Border** section.
