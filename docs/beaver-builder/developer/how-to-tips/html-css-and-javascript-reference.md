---
id: html-css-and-javascript-reference
title: 'HTML, CSS, and JavaScript reference'
sidebar_label: 'HTML, CSS, and JavaScript reference'
---

Each Beaver Builder layout has a dynamically generated and compressed CSS and
JavaScript file, which is cached each time you update or save a layout.

Each file name starts with the current post ID, followed by either _-layout_ ,
_-layout-draft_ , or _-layout-preview_.

Additionally, instead of loading the CSS and JavaScript for every possible
module, Beaver Builder only loads the CSS and JavaScript for the modules
currently on the page. That includes only enqueuing when needed third-party
libraries such as sliders, tabs, or accordions.

Beaver Builder’s markup is based on a grid system that consists of five types
of responsive elements. Each element gets a unique class name (for example,
`.fl-node-530d81d3093f5`), which developers can style accordingly. Here are
the five responsive elements and their corresponding CSS classes:

## Layout (.fl-builder-content)  
There is only one layout element per page. It contains all of the other Beaver
Builder elements.

## Rows (.fl-row)
Rows are child elements of the main layout and contain column groups.

## Column Groups (.fl-col-group)
Column groups can be thought of as rows within rows. A column group can
contain any number of columns, but column groups cannot be nested.

## Columns (.fl-col)
Columns come in many shapes and sizes and can contain as many modules as you
want to put in them. As the screen size becomes smaller, a row of columns will
be stacked vertically. Larger columns become 100% width when viewed on smaller
screens, while smaller columns have a max width of 400 px.

## Modules (.fl-module) 
Modules are the last level of elements that can be added to a builder layout.
They contain the dynamically generated markup for each unique module.
