---
title: Design foundations overview
sidebar_label: Overview
description: Overview of the design systems, design tokens, and design kits that style AI-generated pages in Beaver Builder AI.
---

Overview of the design systems, design tokens, and design kits that style AI-generated pages in Beaver Builder AI.

## What are design foundations?

Design foundations are the styling layer that AI-generated pages are built against. Beaver Builder AI keeps styling separate from content. Tokens hold your design values, a design system collects those tokens along with shared CSS and creative guidance, and a design kit moves the whole set between your site and a local folder.

The AI assistant reads this layer before it generates or modifies anything, so its output matches your design rather than generic styling.

## How the layers fit together

The three pages in this section describe one stack, from the largest unit to the smallest.

- **A design system** is the named collection: tokens, base CSS, optional base JavaScript, font selections, and creative guidance. Each page is assigned exactly one system, so a single site can run more than one look.
- **Design tokens** are the individual values inside a system, stored as CSS custom properties for colors, fonts, spacing, and text sizes. Changing a token restyles everything that references it.
- **A design kit** is a local folder holding a design system and the pages built against it. Kits are how designs move in and out of WordPress, either from a bundled starter kit or from a folder an AI coding agent built for you.

Design systems and kits share one admin screen at **Beaver Builder > Design Systems**. See [Design Systems page](../configuration/design-systems.md) for what you can do there.

## In this section

Start with the page that matches what you are trying to do.

- **[Design systems](design-systems.md)** — How systems are created, edited, and assigned to pages, how they differ from Global Styles, and how to set the site default.
- **[Design tokens](design-tokens.md)** — The standard token categories, the `--ds-` naming pattern, and how to edit tokens in the editor or through the AI assistant.
- **[Design kits](design-kits.md)** — Browse the bundled starter kits, import a kit built outside WordPress, or hand a kit to an AI coding agent.

## Where to start

You do not need to set any of this up before your first page.

- **Generating your first page.** Ask the AI assistant for a design and it creates a design system for you, then assigns it to the page. The first system created on a site becomes the site default.
- **Starting from a finished design.** Open the **Design Kits** tab and create a page from a starter kit. The kit's design system is added to your site automatically.
- **Changing an existing look.** Edit the tokens for the design system the page uses. Colors, fonts, and spacing update on every page assigned to that system.
