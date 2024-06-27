---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Builder 2.8 includes the following new features and improvements.

## :rocket: New Features

The following new features have been added to Beaver Builder 2.8.

### Box Module

The Box module functions much like a row or column, serving as a container. It utilizes either flexbox or CSS grid, allowing you to create complex, fluid, and flexible layouts. Boxes can be nested, stacked, and organized in both horizontal and vertical orientations, as well as in a grid.

:::caution
While we've aimed to make the Box module as user-friendly as possible, having a solid grasp of CSS flexbox and CSS Grid is strongly recommended.
:::

See the [Box module](layouts/modules/box/index.md) section for more information.

### Global Styles

Global Styles allow you to define styling preferences for both elements and colors across Beaver Builder.  
  
- **Global Elements**  
The Elements tab allows you to define global styling for elements such as text, headings, links, and buttons. This styling is then inherited by all modules on your website that lack preconfigured styling options. You can override these styling options on a case-by-case basis using the module styling options.

- **Global Colors**  
The Colors tab allows you to generate a global color palette that is available throughout your entire website. These colors can be easily accessed within your Beaver Builder layouts through the color picker tool. Additionally, the colors you establish are converted into CSS Variables, allowing for their integration into custom CSS.

See the [Global Styles](../user-interface/global-styles.md) article for more information.

### WordPress Media Library Access

The WordPress Media Library is now accessible from within the Beaver Builder User Interface. This allows you to easily add images, videos, and other media to your layouts without having to exit the Beaver Builder editor.

### Color Picker: CSS Variable Support

The color picker now supports CSS Variables. This allows you to easily integrate CSS variables from your global colors, theme or custom CSS into your Beaver Builder layouts.

See the [Color Picker](../basics/color-picker.md#css-variables) article for more information.

### North Commerce Module

When you have the North Commerce plugin installed, you can use the North Commerce module to display your North Commerce products on your website.

See the [North Commerce module](../layouts/modules/north-commerce.md) article for more information.

### Popup Maker Integration

The Popup Maker plugin is a WordPress plugin that allows you to create and manage popups on your website. The integration enables you to use Beaver Builder to design the content of your popups.

See the [Popup Maker Integration](../integrations/popup-maker.md) article for more information.

## :boom: Improvements

The following improvements allow you to work more efficiently and effectively with Beaver Builder.

- **Menu Module**  
  The Link padding option now supports the responsive toggle and added new padding option for responsive toggle settings.

- **Post Carousel & Post Slider**  
  Added Excerpt Length option to both modules enabling you to set the length of the excerpt.

- **Photo Module**  
  Add Object Fit and Position options to the style tab.

- **Loop Settings**  
  Add option to filter by current author and current logged in user.

- **Category Saved Content** *(Front-end)*  
  You can now categorize newly created saved rows, columns, and modules from within the builder.

  See the [Saved Content](layouts/saved-content.md) article for more information.

## :hammer: Developer Changes

- **Auto CSS**  
  Many of the module CSS can now be auto-generated for you.  
  
  See the [Auto CSS](developer/custom-modules/06-module-css.md#auto-css) section for more information.

- **Button Group Field**  
  The button group field is now responsive compatible and new options were added.

  See the [Button Group Field](developer/custom-modules/10-setting-fields-reference.md#button-group-field) article for more information.

- **Include Wrapper**  
  A new `include_wrapper` parameter has been added for module settings.

  See the [Include Wrapper](developer/custom-modules/02-add-a-module-to-your-plugin.md) article for more information.

- **Field Modifier Changes**  
  The following field modifiers have been added or updated:

  - **Toggle**  
    Toggle/Hide (select or button-group) will look for inherited values up the responsive breakpoints in order to show appropriate fields at smaller sizes even when a field has no value for that specific breakpoint.

  - **Set**  
    Enables you to define the value of another field within the module.
