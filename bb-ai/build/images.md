---
title: Images
sidebar_label: Images
description: Understand where the images in an AI-built page come from, how to generate on-brand images with AI, how to connect Unsplash for better stock photography, and how to swap in your own images.
---

Understand where the images in an AI-built page come from, how to generate on-brand images with AI, how to connect Unsplash for better stock photography, and how to swap in your own images.

## Your page comes with photos already

When the AI builds a page, it fills every image spot for you. A page about a bakery gets bakery photos, and a page about a law firm gets law firm photos.

These are real stock photographs, free to use, and nothing needs setting up. They are there so your page looks finished from the first minute instead of showing you a wall of empty boxes.

There are three ways to put something better in their place. Most people use the AI chat inside the editor to swap in their own photos. With a Google Gemini API key connected, you can also generate new images that match your brand. And if you work from an outside assistant such as Claude, you can add images through an MCP connection instead.

:::note
Stock photos and your own uploads work with any AI provider. [Generating images](#generating-images-with-ai) needs a Google Gemini API key, whichever provider you chat with.
:::

## Adding images with the AI chat

The chat panel inside Beaver Builder and the WordPress block editor is the usual way to work with images. Everything in this section happens in the editor, with the page in front of you.

### Swapping a photo for your own

This is the quickest fix when a page is already built and one picture is wrong.

1. **Click the image.** Click any image in your layout. A small toolbar appears above it.
2. **Choose Replace.** Your WordPress media library opens.
3. **Pick or upload a photo.** Choose an existing image or upload a new one. It appears on the page right away.

You can also change an image from its settings panel. Click the block, find the image field, and pick a new photo there.

### Handing the assistant your own photos

If you already know which pictures you want, give them to the assistant and let it place them as it builds.

Click the **+** button in the chat panel and choose one of two options:

- **Media Library** picks images you have already uploaded to WordPress.
- **Upload Image(s)** adds new ones from your computer and saves them to your media library.

Your images appear as small thumbnails above the message box. Now describe what to do with them, for example "build a gallery section using these four photos". You can say where each one should go, or let the assistant decide. The assistant looks at the photos themselves, not just their file names, so it can design around their colors and content.

### Placed on the page, or used as reference

An image you attach can serve two purposes: a picture to put on the page, or a design to look at. The chat works out which you meant from your message, and tells you before anything is sent.

When you press send, each thumbnail gets a badge showing whether that image **will be added to the page** or is **used as a design reference, not added to the page**. When every image is clearly meant for the page, the message sends without interruption. If any image came out as a reference, the send pauses with a notice so you can choose:

- **Send as is** to keep the split the chat proposed.
- **Add them to the page instead** to place every attached image.
- **Cancel** to change your message first.

### Showing the assistant a design to copy

There is a second, different reason to give the assistant an image, which is to show it a look you want rather than a picture to publish.

Drag or paste a screenshot, a sketch, or a photo of a design straight into the chat, then ask for something like it. The assistant studies it and designs to match.

:::tip
Images dropped this way are only used as inspiration. They never appear on your page and are never saved to your media library, so private screenshots stay private.
:::

### Getting better stock photos with Unsplash

The free photo library the assistant uses by default works well. Connecting Unsplash gives it a bigger and generally better looking catalog to pick from, at no cost.

1. **Get a free key.** Create an account at [unsplash.com/developers](https://unsplash.com/developers) and copy your access key.
2. **Open the settings page.** In the WordPress admin, go to **Settings > Beaver Builder AI** and open the **Settings** tab.
3. **Paste the key in.** Add it to the **Unsplash API Key** field under **Media Providers**. A green **Connected** badge means it worked.

When a page uses Unsplash photos, the assistant lists the photographers in the chat, with links to their profiles. Unsplash asks for that credit as a condition of using the photos for free.

## Generating images with AI

Beaver Builder AI can create new images from a description, using Google's Nano Banana image model. A generated image is made for your page, so a hero for a bakery gets a picture of that kind of bakery rather than the nearest stock photo.

### Setting it up

Image generation runs through Google Gemini, so it needs a Gemini API key even if you chat with Claude or another provider.

1. **Get a key.** Create one at [aistudio.google.com](https://aistudio.google.com/).
2. **Open the settings page.** In the WordPress admin, go to **Settings > Beaver Builder AI** and open the **Settings** tab.
3. **Paste the key in.** Add it to the **Google Gemini API Key** field under **AI Providers**. A green **Connected** badge means it worked.

You do not need to switch your active chat provider to Gemini. Once the key is saved, the **Generate with AI** option appears wherever images are chosen.

### Generating an image for a field

Any image field, including background image fields, gains a **Generate with AI** option once a Gemini key is connected. Click it, describe the picture you want, and the generated image is saved to your media library and set on the field.

The same option is in the toolbar that appears when you click an image on the canvas, next to **Replace**, so you can regenerate a single picture on a finished page without opening its settings.

Generated images come out in the shape the spot calls for, such as a wide image for a hero or a square one for a card, so they fit without cropping.

### Generating images while a page is built

By default, the assistant fills a new page with stock photos. To have it generate images instead, turn on **Image fill during page generation** on the **Settings** tab.

With it on, every image spot in a generated page gets a picture made for that page and your brand. Each image is billed to your Google account, so this is a choice rather than a default. The information button in the chat panel shows how many images a conversation has generated and what they cost.

:::tip
A good way to work is to leave image fill off, build and refine the page with stock photos, then regenerate only the images that matter, such as the hero, from the canvas toolbar.
:::

## Adding images with an MCP connection

An MCP connection lets an assistant outside WordPress, such as Claude, work on your site. It can add images too, though it goes about it differently from the chat. See [MCP connection](../configuration/mcp-connection.md) if you have not set one up yet.

### How it works

The outside assistant can browse your media library through the site's WordPress media tools, so it can find and place pictures you have already uploaded. It cannot generate images, and it has no access to the stock photo libraries the chat uses.

For a picture that is not on your site yet, it takes the web address of the image, saves that picture into your WordPress media library, and then places it on the page. Everything it adds this way becomes a normal media library item that you can reuse, rename, or delete later.

### Adding an image

Give the assistant the address of the image along with where you want it.

> Add the photo at https://example.com/team-photo.jpg to the top of my About page.

The assistant downloads it, saves it to your media library, and puts it on the page. To use a picture from your own computer, upload it to the WordPress media library first, then give the assistant its address.

### What to expect

A few rules apply to images added this way.

- Only ordinary web addresses beginning with `http` or `https` work.
- SVG files are refused, and so are addresses on private or internal networks.
- Giving the same address twice reuses the image already saved rather than making a duplicate.
- Your WordPress account needs permission to upload files.
- A broken or made-up image address in a page the assistant builds is replaced with a real stock photo, the same as in pages built by the chat, so you never get an empty image box.

:::note
The Unsplash connection and image generation are used by the chat only. An outside assistant can place pictures from your media library or from addresses it already knows, but it cannot search Unsplash or generate new images.
:::

## Describing your images for screen readers

However an image got onto the page, it should have alt text, which is a short description read aloud to visitors who cannot see it. Search engines read it too.

Click the image, choose **Edit Alt** from the toolbar, and describe what is in the picture in a few words, such as "baker sliding a tray of sourdough into an oven". The assistant writes alt text for the images it places, so this is usually a matter of checking rather than starting from scratch.

:::tip
Alt text is also how the chat searches for stock photos. Sharpen the description on an image you do not like, ask for a new photo, and you tend to get a closer match.
:::
