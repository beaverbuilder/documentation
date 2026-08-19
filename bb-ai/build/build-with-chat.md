---
title: Build with BB AI Chat
sidebar_label: Build with Chat
description: Use the Beaver Builder AI chat to generate pages, blocks, and forms, edit content, and manage your design system through conversation.
---

Use the Beaver Builder AI chat to generate pages, blocks, and forms, edit content, and manage your design system through conversation.

## Opening the assistant

The AI assistant is a chat panel inside both supported editors.

- **In Beaver Builder**, click the **AI Chat** button in the top toolbar. Its icon is the Beaver Builder AI mark, an "AI" tile with a spark in the corner.
- **In the WordPress block editor**, open the **Beaver Builder AI** panel from the editor's sidebar plugin icons. On a brand-new post, save once first; the panel asks you to save the post before chat is enabled.

Beaver Builder's Tools menu also carries a **Design System** item with a **Shift+D** shortcut. It opens the same chat panel on its **Design** tab, and it appears only for users who can edit others' posts, and only once at least one design system exists on the site.

## Who can use the chat

Two things decide whether the chat panel is there: an administrator toggle per editor, and the user's own permissions.

Chat is on in Beaver Builder by default. Chat in the block editor is on by default only when Beaver Builder was inactive at the moment you activated the plugin, so on a site that already ran Beaver Builder the block editor panel stays hidden until someone turns it on. Administrators control both toggles in [Settings](../configuration/settings.md#chat-access).

Where the toggle is on, the chat goes to users who can create design system content, which by default means users with the `unfiltered_html` capability, typically administrators and editors. Inside Beaver Builder those users also need Beaver Builder's own **Unrestricted Editing** permission on the [User Access tab](/beaver-builder/settings/user-access).

## What the assistant can do

The assistant works through a set of tools that read and change your site, always in the context of the current page and its design system.

- **Generate pages**. Compose a complete multi-section page from a description, streamed onto the canvas section by section.
- **Generate blocks**. Create individual sections such as heroes, feature grids, testimonials, or pricing tables. Every value you would want to edit becomes a settings field automatically.
- **Generate forms**. Forms are blocks too. Ask for a contact or signup form and configure its submission actions afterward; see [Forms](forms.md).
- **Generate a style guide**. Produce a page that showcases the design system's colors, typography, and components.
- **Edit the current page**. Read the layout, rewrite block content and code, change block settings, move and remove blocks, and edit page-level CSS and JavaScript. Native Beaver Builder modules and core WordPress blocks can be edited too, though only through an allow-listed set of their text fields.
- **Manage the design system**. Read and update tokens, base CSS, reset CSS, shared JavaScript, fonts, and the creative guidance the AI maintains about your design.
- **Set up a design system**. Choose which design system a page uses, or infer a new one by analyzing your existing site or theme styles so generated content matches what you already have.

Stock photography is handled for you rather than requested. The assistant sources images for a generated page on its own; see [Images in your layouts](images.md).

The chat works on the page you have open, so it cannot create a page, reach another page, or build Themer layouts and Builder templates. Those need an agent connected over MCP; see [Build with MCP](build-with-mcp.md).

## Writing effective prompts

The assistant performs best when your request describes the visual or functional outcome you want. You do not need to describe HTML structure or CSS properties; those are implementation details the AI handles.

Effective prompts focus on:

- **Purpose**: "A testimonials section with a photo, quote, and attribution"
- **Layout**: "Three columns on desktop, stacked on mobile"
- **Style**: "Soft shadows, rounded corners, the primary color from my design system"
- **Content**: "A contact form with name, email, message, and a submit button"

The AI already knows how to write HTML and CSS. Tell it what you want to achieve, not how to build it.

## Pointing the assistant at part of the page

Clicking the canvas while the chat is open sets what your next request is about.

In Beaver Builder you can select any node: a row, a column, or a module, whether it came from the AI or not. In the block editor you can select any block. A chip for what you picked appears above the input and the placeholder names it, so "Ask about this row..." or "Ask about this hero..." tells you the request will land there. From then on "make this darker" or "add a third column" applies to the right part of the page without describing it.

Selection locks while the assistant is working, so nothing changes underneath a request in flight. Clicking a global node tells you the change has to be made on its master template instead.

## Attaching images

Show the assistant what you want instead of describing it.

- Click the **+** button to pick images from the **Media Library** or **Upload Image(s)** from your computer. The media library row needs a media library on the current surface, and the upload row needs the `upload_files` capability.
- Paste or drag and drop images directly into the chat. JPEG, PNG, GIF, and WebP are supported.
- Attach a screenshot of a design to have the AI build it.

Images you pick from the media library are placed in the generated content as-is; screenshots and reference images guide the design.

## How changes are applied

Content changes appear on the canvas as the assistant works. Generated sections and edits to text, settings, and code apply to the page you are editing right away, so you can react in the moment: keep iterating in chat, edit the result directly on the canvas, or undo. Nothing reaches your visitors until you save or publish the page in the editor as usual.

Actions with wider impact pause for your confirmation with **Accept** and **Reject** buttons:

- Removing a block.
- Updating design tokens, which restyles every page using the design system. Token and asset changes preview live and roll back if you reject them.
- Updating shared assets (base CSS, reset CSS, shared JavaScript, fonts).
- Selecting or switching the page's design system.

While the assistant is working, the send button becomes a stop control, and generation shows a live progress checklist on the tool card.

## Conversation history

Each page has its own conversation per user, stored on the server, so you can close the editor and pick up where you left off. To start fresh, click the trash icon in the chat panel and confirm; clearing deletes the conversation and cannot be undone.

An information button in the panel opens a summary of the conversation's model: its name, provider, maximum output length, cost rates, and the tokens the chat has spent so far. The model and provider are chosen in [Settings](../configuration/settings.md#active-ai-provider), but a conversation locks to the model it started with on its first turn. Changing the setting later steers new conversations only, and the way to move an existing one is to clear it. If a locked model stops being available, the conversation reports that and asks you to start a new one.
