---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Builder 2.10 includes the following new features and improvements.

## :rocket: New Features

### Assistant Integration
Added new cloud icon to the toolbar for connecting to the cloud and saving templates.

### Components
Add the ability to select fields that can be edited per-page for global templates, allowing you to override the global defaults on a per-page basis.  

### Pre-built Box Module Templates
Added 60+ pre-built Box module templates.

### Star Rating Module
Added a new Star Rating module to easily display ratings to create testimonial sections and more!

## :boom: Improvements

## UI Changes

### Content Panel

#### Pre-built rows and modules
Reworked the pre-built rows and modules panels to show categories instead of a dropdown.

#### Saved Tab
Added the ability to collapse the sections in the Saved panel.

### All Nodes
Added a "Save As" action to the settings dropdown on overlays. Added a "Type" select in the "Save As" form to include Template, Global, and Component.

### Global Templates
Change the global template overlay and badge color to green for better contrast with white text and icons.

## Accessibility
Any changes to markup mentioned here make use of the Deprecation API.

#### Accordion Module
Changes to HTML tags used for elements for new modules dropped on the page, increase focus ring size and change key event listener from keypress to keydown.

#### Content Slider Module
Added various improvements including making sure focus ring shows for links, add support for reduced-motion preference, prevent auto play on focus in or out, add aria-label and role attributes, improvements to keyboard navigation, adding focus to slider dot navigation, adjusting HTML markup in favor of list tags and button tags and more!

#### Gallery Module
Added various improvements including deprecating div tags in favor of list tags and adding ARIA roles for the deprecated div tags. 

#### Menu Module
Added various accessibility improvements including enhancements for keyboard navigation, using appropriate aria attributes and roles, adjusted some markup and sizing of sub-menu icon as well.

#### Photo Module
Change markup to use figcaption for caption per accessibility recommendations.

#### Posts Module
Added various accessibility improvements including deprecating the div container tag in favor of a unordered list and added a new option in the post container field.

#### Post Slider & Post Carousel
Added many accessibility improvements including using list tags for slides, button tags for navigation and pagination, proper aria attributes and making sure focus is visible on all controls.

#### Tabs Module
Added arious accessibility fixes including using button tags for any buttons instead of links or divs. 

#### Row Shapes
Add generic title/desc to row shapes for accessibility.

#### Modules that display excerpts
In modules that display excerpts, change default read more text to provide more context per accessibilityrecommendations.

### WP Admin
Reworked wp-admin list table to show "Global" or "Component" label.  Reworked user access settings to allow editing per-page component settings but not the component itself. Added new user access setting for enabling or disabling cloud access based on user role.

### Other Changes

#### Performance
Improved the time it takes for settings to initially render when first opened.

#### Subscribe Module
Added support for ConvertKit custom fields
