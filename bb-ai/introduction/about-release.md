---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Builder AI 1.1 includes the following new features and improvements.

## :rocket: New Features

The following features have been added:

### Image Generation

Beaver Builder AI can now generate on-brand images using Google's Nano Banana. Once a Gemini API key is saved on the Settings tab, a new Generate with AI option appears on image and background image fields, in the canvas image toolbar, and during page generation. Generated images are saved to your Media Library and come out in the requested shape, such as wide for heroes.

Image generation runs through Gemini no matter which chat model you are using, so it also works while chatting with Claude or another provider. Image fill during page generation is turned on from the Settings tab, and the model information popover shows how many images a conversation generated and what they cost.

### Google Gemini Chat Provider

Google Gemini is now available as a chat provider, with its own API key on the Settings tab and its models in the model picker.

### Custom Endpoint Provider

A new experimental Custom Endpoint provider allows you to connect OpenAI compatible servers such as Ollama and LM Studio.

### WordPress Site Tools for AI Clients

Connected AI clients can now handle everyday WordPress site work, including managing posts, pages, custom fields, categories and tags, menus, and the media library. AI clients can also read and change the query settings of Posts and Loop modules.

Optional PHP and WP-CLI tools let AI clients run code on your site. These are off by default and, once turned on in `wp-config.php`, are available to administrators only.

The MCP Connection tab now lists every tool your AI client can use, grouped by Beaver Builder and WordPress site.

### Custom Module Field Connections

Text, link, and image fields in a custom module can now connect to the current post, the site, or an archive, not only inside a repeater. With Beaver Themer active, its post and site properties are available in the connection picker, which now matches Beaver Themer's layout and marks properties that only work on archive pages.

New ACF connections are available for fields, links, and images, with suggestions for your ACF field names. Featured Image, Site Logo, Avatar, Date, and Custom Field connections have settings for image size, date format, and meta key, and Custom Field connections suggest your site's registered meta keys.

Repeaters can now list taxonomy terms, users, comments, or rows you enter yourself, and a repeater connected to your content shows nothing instead of sample rows when there are no results.

### Custom Query Filtering and Pagination

Custom Query repeaters can now include or exclude specific posts, terms, and authors, sort by the order you picked them, and add multiple post types, Offset, Exclude Current Post, and sorting by a meta key. Custom Query repeaters can also paginate, and archive layouts get page links.

### Components in Custom Modules

Any element inside a custom module can now be saved as a component, including a single list item such as one card. Saving uses Beaver Builder's Save As window, with Component, Template, and Global types and categories, and can replace the element with the new component so later changes to the component show on the page too.

Components placed in a custom module have their own toolbar with the component's name, a shortcut to its fields, and Edit Component, and their fields can be edited from the module's settings. Dragging a component into a custom module to place it turns on with an upcoming Beaver Builder release.

### Connection Diagnostics

A new Test connection panel under Having trouble connecting checks each Beaver Builder host your site needs to reach, reports how long each took, and gives you a copyable report listing the hosts to allow. Site Requirements also checks that your site, the Beaver Builder AI service, and the license server can be reached.

A credential blocked or stripped by your host now comes back with advice for that host, WP Engine and nginx included.

### Layout Structure Setting

A new Layout Structure setting on the Settings tab decides whether pages built by a connected AI client use rows and columns or boxes, instead of the model choosing per section.

## :boom: Improvements

The following improvements have been made:

### Chat

- Asking for a section of your latest posts now builds it from your real posts instead of made-up examples.
- Asking for your categories, authors, or latest comments now builds the section from your real site data.
- Asking for posts from a specific category, author, or set of posts now shows only those.
- Chat and AI clients can now add a single element, like one card, inside an existing column instead of building a whole section around it.
- When you ask for live filtering on a page, the chat now points you to the Posts and Filter modules instead of building a form that does not work.

### AI Clients

- AI clients can now connect a repeater to your real posts.
- AI clients are now told which blocks an import removed from a page.
- Spacing corrections on AI built pages now follow your design system's spacing scale instead of fixed values.
- A page built without a design system now gets your site's default design system, unless a Beaver Themer layout provides one.
- Text and button colors written by a connected AI client are corrected when they would be unreadable against their background.
- Broken or made-up image URLs in a page built by a connected AI client are replaced with a real photo, the same as pages built in chat.

### Design Panel

- Set the position, size, repeat, and attachment of each background layer.
- The color picker now includes your Beaver Builder saved, global, and theme colors.
- Cmd+Click or Ctrl+Click to style several elements at once.
- The Design and Code tabs are on by default for new Beaver Builder installs. Existing sites keep their current setting.

### Block Editor

- Chat and AI clients can now edit, move, and add sections inside Group and other container blocks.
- On WordPress 7.0 and later, CSS the chat adds to core blocks is saved in WordPress's own Custom CSS field.
- Pages with Design System blocks from the Block Editor now open in Beaver Builder as editable modules.

### Other Changes

- The data source panel now warns you when editing its rows removes a property a field was connected to.
- Tools → Export can now export only the design systems you select.
- The Keystone Group home page now edits its repeating sections as lists.
- Removed the "MCP Adapter plugin required" notice from every admin screen. The MCP Connection tab still shows whether the adapter is installed.
