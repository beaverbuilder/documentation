---
id: conditionally-hidden-content
title: Conditionally hidden content
sidebar_label: Conditionally hidden content
---

# The Problem with Conditionally Hidden Content
We were alerted to an issue with content that is hidden by Beaver Builder's visibility options or Beaver Themer's conditional logic. When viewed via the REST API or on archive layouts with modules that show a post loop, content that should be hidden was being displayed to all.

## The Fixes We Implemented

We found that the issue was with the WordPress `get_excerpt` function so as a result, we had to write our own function to address the problems.

### New Utility Function

We added a new Utility Function `FLBuilderLoop::the_excerpt` which uses `FLBuilderLoop::get_the_excerpt()`

Instances of `get_excerpt()` were replaced with `FLBuilderLoop::the_excerpt()`

### Compatibility File
We also added this to our compatibility file

`add_filter( 'get_the_excerpt', array( __CLASS__, 'fix_rest_excerpt_filter' ), 10, 2 );`

## How To Get The Fixes
Update to Beaver Builder 2.5.1. All of the fixes with conditionally hidden content are contained within the Beaver Builder Plugin 2.5.1 release.
