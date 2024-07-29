---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

## :rocket: New Features

### Multi-Layer Background Field

A new background field that lets you layer different types of backgrounds on an element.

#### Limitations

For now, it is only supported in the Box module.

#### What's Still To Come
We will expand where you will see this field in future releases.

### Brand New Color/Gradient Pickers

Our color picker has been completely rewritten and now supports any CSS color expression you can throw at it. 

We've also built a new gradient picker that allows you to create gradients with an unlimited number of color stops and blend between them through different color spaces.

#### Limitations

It is available in all color fields except:
  - Global Colors
  - Border field
  - Box Shadow field

#### What's Still To Come

Eventually all color fields will be supported.  While colors can be saved now for re-use, we still have to hook up field connections and selecting your Global Colors from the color picker.

In the future, you'll be able to switch to a color space that suits you and access an even wider spectrum of colors!

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

As part of our continued effort to reduce the markup output by Beaver Builder, all of the _Basic_ modules have been reworked to exclude their wrapper divs. To ensure backwards compatibility, wrappers will still render for existing modules on layouts, but anything new dropped on the page will exclude them.

### Container Modules as Top Level Containers

In Beaver Builder 2.8, we introduced a new Container Module, the _Box_ Module. However, it required a container to exist around it. In 2.9, that changes so _Box_ and all future container modules can be top level containers.

### Outline Panel Inline Editing

We've added the ability to add and edit your labels inline.

## :question: What's Still to Come for 2.9

  
