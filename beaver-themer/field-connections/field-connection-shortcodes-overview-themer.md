---
id: field-connection-shortcodes-overview-themer
title: Field connection shortcodes
sidebar_label: Field connection shortcodes
---

Field connections can be inserted directly into fields, but they also can be added with shortcodes. Field connection shortcodes are essential in the following cases:

  * You want the module setting to display more than just a single field connection.

  For example, you want to add some text or use more than one field connection.

  * You want to add custom field connections to your layout.

  For example, you want to use a custom layout in a Posts module to include custom field values.

Here's a concrete example. Suppose that besides the using the **Post Title** field connection in your heading, you also want to add the word "by" and then the author's name, as shown in this screenshot:

![](/img/field-connection-shortcodes-overview-themer-e6998ce8.jpg)

After you add the **Post Title** shortcode to the Heading module, type the word "by," and add the **Author Name** shortcode.

:::info
Field connection shortcodes always substitute a text string, so they can only be used for module settings where you'd normally enter text. For example, a **Heading**  text field can use a **Post title** shortcode, but you can only add a field connection, not a shortcode, in a Photo module's **Select photo** field.
:::
