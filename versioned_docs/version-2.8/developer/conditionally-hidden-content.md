---
id: conditionally-hidden-content
title: Conditionally Hidden Content
sidebar_label: Conditionally Hidden Content
---

# The Problem with Conditionally Hidden Content

We were alerted to an issue with content that is hidden by Beaver Builder's visibility options or Beaver Themer's conditional logic. When viewed via the REST API or on archive layouts with modules that show a post loop, content that should be hidden was being displayed to all.

## How did this happen?

When you add a text-based or image-based module to a page, the raw text and image data are saved to the native WordPress `post_content`. This ensure that if you deactivate Beaver Builder you will still have that data for WordPress to display.

Up until now, visibility settings were ignored when you published your layout. This meant that when WordPress displayed the post excerpt, it used everything it found in the `post_content`, which included anything that was supposed to be hidden.

## The Fixes We Implemented

We added some clever filters for the REST API so it respects any node visibility settings, so from 2.5.1 onwards, only visible text is added to the backup `post_content`.

## How To Get The Fixes

Update to Beaver Builder 2.5.1. All of the fixes with conditionally hidden content are contained within the Beaver Builder Plugin 2.5.1 release.

If you are using hidden content in your layouts and hidden text is showing up in post modules or archives, we have a small utility plugin that removes the hidden content from the `post_content`. This does not change your layouts in any way.

### Download the utility plugin

Download here: https://updates.wpbeaverbuilder.com/public/bb-excerpt-data-fix.zip

### How to use the plugin

1. Make a full backup of your site, following best practice before updating WordPress, plugins or themes or adding new themes or plugins.  

2. Install and activate the `Beaver Builder Excerpt Fix` plugin.  Upon activation, it will fix your data to make sure the hidden content is not in `post_content`.

3. Check your post modules and archives and make sure the hidden data is not showing in the excerpt.

4. After the plugin runs, it deactivates itself and you can then delete it.
