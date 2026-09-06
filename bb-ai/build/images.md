---
title: Images
sidebar_label: Images
description: Understand where the images in an AI-built page come from, how to connect Unsplash for better stock photography, and how to swap in your own images.
---

Understand where the images in an AI-built page come from, how to connect Unsplash for better stock photography, and how to swap in your own images.

## Your page comes with photos already

When the AI builds a page, it fills every image spot for you. A page about a bakery gets bakery photos, and a page about a law firm gets law firm photos.

These are real stock photographs, free to use, and nothing needs setting up. They are there so your page looks finished from the first minute instead of showing you a wall of empty boxes.

There are two ways to put your own images in their place. Most people use the AI chat inside the editor. If you work from an outside assistant such as Claude, you can do it through an MCP connection instead.

:::note
Beaver Builder AI finds existing photographs. It does not create new pictures from a description, so the images on your page are either stock photos or files you provide.
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

## Adding images with an MCP connection

An MCP connection lets an assistant outside WordPress, such as Claude, work on your site. It can add images too, though it goes about it differently from the chat. See [MCP connection](../configuration/mcp-connection.md) if you have not set one up yet.

### How it works

The outside assistant cannot open or search your media library, so it cannot browse your photos the way you would.

What it can do is take the web address of a picture, save that picture into your WordPress media library, and then place it on the page. Everything it adds this way becomes a normal media library item that you can reuse, rename, or delete later.

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

:::note
The Unsplash connection is used by the chat only. An outside assistant has no access to it, so it can only add pictures whose addresses it already knows.
:::

## Describing your images for screen readers

However an image got onto the page, it should have alt text, which is a short description read aloud to visitors who cannot see it. Search engines read it too.

Click the image, choose **Edit Alt** from the toolbar, and describe what is in the picture in a few words, such as "baker sliding a tray of sourdough into an oven". The assistant writes alt text for the images it places, so this is usually a matter of checking rather than starting from scratch.

:::tip
Alt text is also how the chat searches for stock photos. Sharpen the description on an image you do not like, ask for a new photo, and you tend to get a closer match.
:::
