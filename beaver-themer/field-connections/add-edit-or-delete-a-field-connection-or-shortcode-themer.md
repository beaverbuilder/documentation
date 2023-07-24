---
id: add-edit-or-delete-a-field-connection-or-shortcode-themer
title: Work with a field connection or shortcode
sidebar_label: Work with a field connection or shortcode
---

Here's how to add, edit, or delete a field connection or field connection shortcode in a row or module setting.

:::info
To use field connections in Beaver Builder in locations other than Themer layouts, you must still have Beaver Themer installed.
:::

## Add a field connection or field connection shortcode

When you click the plus icon to the right of a row or module setting, a list of eligible field connections appears. You'll see a **Connect** button, or if a field connection shortcode is available, you'll see both **Connect** and **Insert** buttons.

![](/img/add-edit-or-delete-a-field-connection-or-shortcode-themer-7e11f656.png)

  * To add the field connection as the only value in the row or module setting, click **Connect**.  
  ![](/img/add-edit-or-delete-a-field-connection-or-shortcode-themer-31357d7b.png)
  * If you want to add additional text or more than one field connection to the row or module setting, click **Insert** to insert the shortcode.  
  ![](/img/add-edit-or-delete-a-field-connection-or-shortcode-themer-a4ead316.png)
  
After you click **Connect** or **Insert**, a window of settings for that field connection may pop up, if that field connection has parameters. For example, if you add a **Post excerpt** field connection to a row background or Photo module, you'll see the following window, with settings for length of the excerpt and what the **More** text should be.

![](/img/add-edit-or-delete-a-field-connection-or-shortcode-themer-f3014684.png)

If you add the field connection as a shortcode, once you accept the field connection settings, you'll see the settings reflected in the shortcode parameters. Here are the results of accepting the default Post Excerpt settings in the shortcode:

```markup
[wpbb post:excerpt length='55' more='']
```

The shortcode for the field connection will appear in your row or module setting. Add text or repeat this process to add another shortcode.

##  Edit or delete field connections

If the row or module setting contains only the field connection, hover over the connection you've chosen and click the wrench icon to edit the field connection or the **x** icon to delete it.

![](/img/add-edit-or-delete-a-field-connection-or-shortcode-themer-ec0b265d.png)

If the row or module setting contains a field connection shortcode, just delete the shortcode. There is no way to go back to the field connection settings window to edit shortcode parameters. You can edit the shortcode directly if you know what values are allowed, or you can delete the shortcode and repeat the process of inserting it to get to the field connection settings window again.
