---
title: Design kits
description: A design kit is a local folder holding a design system, pages, and global elements. Start from a bundled starter kit or import one built with an AI coding agent.
---

A design kit is a local folder holding a design system, pages, and global elements. Start from a bundled starter kit or import one built with an AI coding agent.

## What is a design kit?

A design kit is the local folder that a design system, its pages, and its global elements live in.

You build a kit outside WordPress and then bring it in. The Beaver Builder format specification ships inside the kit, so an AI coding agent working locally knows the format without extra prompting. Kits are how designs move in and out of Beaver Builder AI: start a new site from a curated starter kit, or import pages built locally by an agent.

### How to think about it

A design kit works like a static site, with the format specification baked in.

The folder holds markup, styles, and assets the way a static site does, so you can build and preview it locally with ordinary tools. What makes it a kit is the specification that travels with it, telling an agent how to write files Beaver Builder can import.

### What a kit holds

A kit holds three things, and one of them is optional.

- **A design system.** The tokens, base CSS, and any shared JavaScript that style the kit's pages. See [Design systems](design-systems.md).
- **Pages.** The pages built against that design system, styled by the system rather than by styling of their own.
- **Global elements.** An optional header, footer, or both, styled by the same design system.

## Where to find design kits

Kits live on the same admin page as design systems.

Go to **Beaver Builder > Design Systems** in the WordPress admin and use the **Design Kits** and **Import a Kit** tabs.

## Browsing starter kits

The Design Kits tab shows a gallery of curated design systems. Click a kit card to open its detail page, which shows a live preview of every page in the kit.

From the detail page you can:

- Click **New Page** on any page preview to create a page from that template.
- Click **Preview** on any page preview to view it full size.
- Click **New Page** in the header to create a blank page that uses the kit's design system.
- Click **Download** in the header to download the kit as a zip, ready to hand to an AI coding agent.

When you create a page from a starter kit, the kit's design system is added to your site automatically and assigned to the new page. A notification confirms the design system name, and the first design system added to a site becomes the site default.

### Bundled starter kits

Nine starter kits ship with the plugin:

**The Timberline**. A boutique mountain lodge brand with pine green, burnt amber, and alpine white. An editorial outdoor feel that is light, airy, and warm.

**Ridgeline Estate**. A Napa Valley winery brand in navy and gold, pairing Cormorant Garamond headings with DM Sans body text. Refined and unhurried.

**Beaver Builder AI Forms**. A showcase of form experiences, including contact, application, RSVP, support, and survey pages, styled to match the Beaver Builder AI product site.

**Clearwater Fund**. A clean-water nonprofit with a documentary field-dispatch feel: a dark earth-ink ground with clay and brass-gold accents, set in Zilla Slab and Instrument Sans.

**Dog-Eared**. An independent bookshop that grew a community café and reading club. Editorial magazine layout on a cool paper ground with a single vermilion accent.

**Grain & Form**. A small-batch solid-wood furniture workshop. Material-led grain and joinery photography with honest specs and one slate accent.

**Hookline**. A webhook monitoring and replay developer tool in a light schematic field-manual style, with a cobalt accent and a JetBrains Mono data layer.

**Keystone Group**. A warm-modern residential estate agency: terracotta accent on a warm near-white ground, built for sellers booking valuations and buyers browsing listings.

**Rooted**. A neighborhood yoga and breathwork studio in a calm dusty-dawn palette: warm oat ground, a single dusty-rose accent, and Cormorant Garamond display type.

## Import a kit

The Import a Kit tab walks through a three-step wizard to upload a kit built outside WordPress, typically by an AI coding agent such as Claude Code or Cursor working from a downloaded kit.

### Step 1: Upload

Drag and drop a kit zip file onto the upload area, or click to browse. The plugin analyzes the zip and validates its structure, then advances to the Review step automatically. If the kit is invalid, an error message explains what is wrong.

### Step 2: Review

The Review step shows what will be imported before anything is created:

- **Kit identity**. The design system name, the number of design tokens, and the font families in the kit. If the kit's UUID matches a design system already on your site, the import links to that existing system instead of creating a new one.
- **Editor**. When Beaver Builder is available, choose whether imported pages open in **Beaver Builder** or the **Block Editor**.
- **Pages**. A table lists every page in the kit with its title, post type, and section count. Use the checkboxes to choose which pages to import, and change each page's post type with its selector.
- **Header and footer**. If the kit includes global header or footer files, check the ones you want to import. With Beaver Builder, globals import as Beaver Themer layouts; with the block editor, they import as site editor template parts. These options require Beaver Themer or a block theme respectively.

Click **Import** to begin.

### Step 3: Complete

A summary reports the imported pages and whether a design system was created or linked. Each imported page has an **Edit** link, and **Import Another** returns to the upload step.

### Kit images

A kit can include its own images in an `assets/` folder. On import, supported images (`jpg`, `png`, `gif`, and `webp`) are added to your media library, and every reference to them in the kit's pages and CSS is updated to the new media library URL. The import summary reports any files that were skipped or failed. Importing images requires permission to upload files.

See [Design kit format](../developer/design-kit-format.md#local-images-in-assets) for the authoring rules.

## Building a kit with an AI coding agent

Kits are designed to be authored by AI coding agents working locally. The downloaded kit includes agent instructions (`AGENTS.md`) and the full format specification (`spec/`), so the agent knows the rules without extra prompting.

1. Get a kit to start from. Click **Download Design Kit** on the Import a Kit tab for a blank kit, download a starter kit from its detail page, or export an existing design system with **Download Kit** on the [Design Systems tab](../configuration/design-systems.md#the-design-systems-list).
2. Give the kit folder to your AI coding agent along with your brief, for example "build a five-page site for a landscaping company."
3. The agent writes the design system in `design-system/styles.css`, pages in `pages/`, optional globals in `globals/`, and optional local images in `assets/`.
4. Zip the kit folder and upload it on the **Import a Kit** tab.
5. Review, select the pages you want, and import.

See [Design kit format](../developer/design-kit-format.md) for the complete file specification.
