---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

## :rocket: New Features

### Multi-Layer Background Field

A new background field that lets you layer different types of backgrounds on an element.  You will see this in the Box Module, Rows and Columns.

#### What's Still To Come in Future Versions
The ability to save layers for re-use and selecting Global Colors in the background field.

### Brand New Color/Gradient Pickers

Our color picker has been completely rewritten and now supports any CSS color expression you can throw at it.  You can select Global Colors in the color picker.

We've also built a new gradient picker that allows you to create gradients with an unlimited number of color stops and blend between them through different color spaces.

### Modules as Blocks

A selection of our modules will be available as Blocks for the Block Editor. This feature is opt-in so it requires enabling in the Beaver Builder settings in the WordPress Admin.

#### Enable Modules as Blocks

Navigate to Settings > Beaver Builder and click on the new Blocks tab. There you can enable select modules to use in the Block Editor.

#### Supported Modules

The current list of supported modules is below but expect this list to grow in the future:


- Accordion
- Box
- Countdown
- Icon
- Icon Group
- Map
- Number Counter
- Posts
- Posts Carousel
- Posts Slider
- Pricing Table
- Tabs
  

## :boom: Improvements

### Modules without Wrappers

As part of our continued effort to reduce the markup output by Beaver Builder, all of the _Basic_ modules have been reworked to exclude their wrapper divs. To ensure backwards compatibility, wrappers will still render for existing modules on layouts, but anything new dropped on the page will exclude them.  There is a toggle in the Advanced options in the WP Admin to disable this and force module wrappers.

### Container Modules as Top Level Containers

In Beaver Builder 2.8, we introduced a new Container Module, the _Box_ Module. However, it required a container to exist around it. In 2.9, that changes so _Box_ and all future container modules can be top level containers.

### Outline Panel Improvements

There is now a search/filter option and Node labels can be added and edited inline. Additionally, when the content panel is pinned right, the Outline Panel panel and the content panel are merged so you can still access the content panel tabs to add content instead of switching back and forth.

### Subscribe Module

Support was added for Active Campaign tags.

### Google Fonts

The Google Font list should be current.  Previously, the list would only be updated at the time of release.  The list will now be updated each time WordPress checks to update the plugin.

### Rows
The fixed width option is now responsive.

### Accessibility Improvements

We are committed to accessibility.  Added are several enhancements:
 
- Accordion: Select HTML tag for Label
- Tabs Module: Add focus missing on selected tab
- Various improvements for the magnific pop-up script used

### Performance

Always looking at ways to improve performance, we've optimized some queries relating to Themer and debug mode.

### Developer
A new filter was added to disable minification `fl_builder_minify`
  
