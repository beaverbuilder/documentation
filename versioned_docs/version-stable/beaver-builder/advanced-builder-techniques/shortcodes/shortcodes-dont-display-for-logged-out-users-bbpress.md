---
id: shortcodes-dont-display-for-logged-out-users-bbpress
title: "Shortcodes don't display for logged out users
  (bbPress)"
sidebar_label: "Shortcodes don't display for logged out users
  (bbPress)"
---

If you have bbPress active and have a forum set to private, then Beaver
Builder shortcodes do not output anything for logged out users.

For example, a typical Beaver Builder shortcode such as the following will
only display correctly for logged-in users when bbPress is active:

```html
[fl_builder_insert_layout id="10"]
```

The solution is to add the `type="fl-builder-template"` parameter to the
shortcode. Using the same example, the shortcode would look like this:

```markup
[fl_builder_insert_layout id="10" type="fl-builder-template"]
```

This prevents bbPress from interfering with the query to interpret the shortcode.
