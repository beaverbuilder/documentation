---
id: show-or-hide-the-wordpress-page-title
title: Show or hide the WordPress page title
sidebar_label: Show or hide the WordPress page title
---

<div className="embed-responsive">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/39fRCRyVSJ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

If you are using Beaver Builder Theme, the title that you assign to the page
in WordPress is hidden on pages with Beaver Builder layouts by default, though you can set it
to show if you prefer.

For third-party themes, you might or might not have the option to hide the
page title. If you can't hide the title in your theme's settings, you can
still hide it in Beaver Builder with a little extra work, following the
instructions below.

Adding your own page titles in Beaver Builder with the Heading module has some
big advantages. For example, you might want a short title like "Join" in the
menu, which you could use as the WordPress page title, but the title on the
web page displays a longer title like "Join an Event."

## Show or hide the WordPress page title

This works for Beaver Builder Theme and third-party themes that let you hide
the page title in the theme settings.

  1. Click the title bar in the upper left corner to expose
the **Tools** menu, then choose **Global Settings**, or just use the keyboard
shortcut ⌘+U (Mac) or Ctrl+U (Windows).
  2. On the **General** tab, navigate to the **Default Page Heading** section.
  3. To display the WordPress page title, set **Show**  to **Yes**. To hide the default page title, set **Show** to **No**.
  4. Click **Save**.  
If you don't see the change, try publishing, saving, or reloading the page in
your browser.

If you're using Beaver Builder Theme, you're done. If you're using a third-
party theme and you still see the title in the theme settings, see if the
theme lets you hide it. If not, follow the next procedure.

## Hide the page title with its CSS class

First, find the CSS class selector that your theme uses to display the page
title. A good way to find this information is to use your browser's **Inspect
Element** feature to look at the class of the page heading. This screenshot
shows an example, where the page title is "test," and the relevant class is
`.entry-title`.

![](/img/how-to-tips-show-hide-title.png)

Then make this change:

  * On the **Global Settings** page, in the **Default page heading** section, edit the **CSS selector** field to match your theme. In the example above, you'd replace what's currently there with **.entry-title**.
