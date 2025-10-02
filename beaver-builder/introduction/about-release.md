---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Builder 2.10 includes the following new features and improvements.

## :rocket: New Features

The following features have been added:

### Beaver Builder Cloud

Powered by Assistant Pro, Beaver Builder Cloud offers cloud storage and template sharing, making it easy to manage creative assets directly within Beaver Builder, without the need to install the Assistant plugin.

See the [Beaver Builder Cloud](../user-interface/cloud.md) article for more information.

### Components

A new Reusable Content type has been added called Components, which allow you to strike a balance between consistency and flexibility. Unlike templates, which are fully independent, or globals, which update universally, Components let you define which options stay fixed and which can be customized per instance.

See the [Components](../layouts/reusable-content/components.md) article for more information.

### Star Rating Module

Star Rating is a new module that allows you to easily display ratings, making it ideal for building testimonial sections and other content that benefits from visual feedback.

See the [Star Rating Module](../layouts/modules/star-rating.md) article for more information.

### Pre-built Box Module Templates

We’ve added over 60 pre-built layout templates powered by the Box module, including callouts, team member profiles, testimonials, hero sections, and more. You’ll also find Bento Grid layouts that showcase different ways to design grid-based sections with the Box module. These layouts not only give you ready-to-use designs but also serve as hands-on examples to help you learn and create your own Bento Grid layouts.

### Version Control

Version Control is now available, giving you the ability to quickly install any of the last 10 releases of Beaver Builder, Beaver Themer, or the Beaver Builder Theme (BB Theme) without manually downloading files. Designed primarily for troubleshooting and development, it lets you roll back or switch between recent releases directly from your settings panel, making it simple to test, troubleshoot, and manage versions.

See the [Version Control](../settings/version-control.md) article for more information.

## :boom: Improvements

The following improvements have been made:

### Accessibility

We’ve introduced a wide range of accessibility enhancements to improve usability and ensure compliance with modern standards. These updates focus on better keyboard navigation, proper use of ARIA attributes and roles, improved focus management, and more semantic HTML markup across modules. Any markup changes noted here have been implemented using the Deprecation API, ensuring they only affect new modules added to your layouts. The following list highlights the key accessibility improvements included in this release.

<details><summary>Accessibility Enhancements & Improvements</summary>

- **Accordion Module**  
  Updated HTML tags for new modules, increased the focus ring size, and changed the key event listener from `keypress` to `keydown`. Ensured proper ARIA attributes are applied. Replaced the `.fl-menu-mobile-toggle` class with the generic `.fl-content-ui-button` class so these buttons are excluded from Global Styles button styling. Implemented support for closing tabs with the Escape key and ensured event handlers only target interactive buttons. All items now close when focus moves outside the accordion.  

- **Content Slider Module**  
  Improved accessibility by ensuring the focus ring is visible for links, adding support for reduced-motion preferences, preventing autoplay on focus in or out, and including ARIA labels and roles. Enhanced keyboard navigation with focus on slider dot navigation, updated HTML to use list and button tags, and made several other refinements.  

- **Gallery Module**  
  Deprecated `div` tags in favor of list tags and added ARIA roles for any remaining `div` elements.  

- **Menu Module**  
  Introduced multiple accessibility enhancements, including improved keyboard navigation, the use of appropriate ARIA attributes and roles, and adjustments to markup and sub-menu icon sizing.  

- **Photo Module**  
  Updated markup to use `figcaption` for captions, following accessibility best practices.  

- **Posts Module**  
  Improved accessibility by replacing the `div` container tag with an unordered list. Added a new option in the post container field.  

- **Post Slider & Post Carousel**  
  Enhanced accessibility by using list tags for slides, button tags for navigation and pagination, proper ARIA attributes, and ensuring visible focus on all controls.  

- **All Posts Modules**  
  Ensured redundant links are hidden from screen readers and excluded from keyboard navigation.  

- **Tabs Module**  
  Replaced links and `div` elements with button tags for interactive elements, using the module deprecation API so changes only affect new modules. Ensured proper ARIA attributes are applied.  

- **Testimonials Module**  
  Changed the HTML structure from `div` to `blockquote`, applied through the module deprecation API so it only affects new modules. Added support for the reduced-motion preference and introduced an option to display play/pause buttons.
  
- **Row Shapes**  
  Added generic titles and descriptions to row shapes to improve accessibility.

- **Modules Displaying Excerpts**  
  Updated the default “Read More” text to provide clearer context, following accessibility recommendations.

</details>

### Modules

The following improvements have been added for the modules listed below.

- **Box Module**   
  We’ve added a new global setting that applies row spacing to top-level boxes for Grid & Spacing. This setting is enabled by default on new sites, but remains disabled for sites updating from version 2.9 to 2.10 to maintain backward compatibility.

- **Button Module**  
  Added responsive support for more fields, including custom width, text color, background color, and border color.

- **Menu Module**  
  Introduced a new width option for the flyout menu.

### User Interface (UI)

The following improvements have been added for the Beaver Builder user interface.

- **Content Panel**  
  Reworked the pre-built rows and modules panels to show categories instead of a dropdown.

- **Saved Tab**  
  Added the ability to collapse the sections in the Saved panel.

- **Nodes** _(rows, columns, & modules)_  
  Added a "Save As" action to the settings dropdown on overlays. Added a "Type" select in the "Save As" form to include Template, Global, and Component.

- **Outline Panel**  
  Added [copy and paste options to the context menu](/beaver-builder/user-interface/outline-panel.md#context-menu-right-click) in the Outline Panel.

### WordPress Admin

- Updated the WP Admin list table to display **Global** or **Component** labels.  
- Refined user access settings to allow editing of per-page component settings without granting access to the component itself.  
- Added a new user access option to enable or [disable cloud access based on user role](/beaver-builder/settings/user-access.md#cloud-access).  

### Other Changes

- **Performance**  
  Improved the time it takes for settings to initially render when first opened.

- **Subscribe Module**  
  Added support for ConvertKit custom fields
