---
id: find-the-full-list-of-field-connection-and-parameters-themer
title: Tip to get full list of field connections and parameters
sidebar_label: List of field connections and parameters
---

Sometimes, especially when you're creating custom post layouts, you need the shortcode and parameters that you can copy and paste in.

There are two ways to find field connection shortcodes and parameters. One is the [field connection shortcode reference](/beaver-themer/field-connections/field-connection-shortcode-index-themer.md) here in the knowledge base. We maintain that list manually.

Another "dynamic" way is to access the shortcodes and their parameters through an HTML module. This way you can see a full list of field connections regardless of data type.

**To find the field connection shortcodes:**

  1. Add an HTML module anywhere a Themer layout.  
  This is temporary.
  2. Click the plus icon to the right of the text box.  
  This opens the list of field connections.  
  ![](/img/find-the-full-list-of-field-connection-and-parameters-themer-ba3f2cec.png)
  3. Mouse over the field connection. If there is an **Insert** option, there's a shortcode available.  
  ![](/img/find-the-full-list-of-field-connection-and-parameters-themer-db0cd3bb.png)
  4. Click **Insert**.  
  If there are any shortcode options for that field connection, the settings box will display the options, as shown in this screenshot. If there are no options, the field connection shortcode will appear in the HTML module.  
  ![](/img/find-the-full-list-of-field-connection-and-parameters-themer-1481f0db.png)
  5. If there are shortcode options, choose values and click **Save**.  
  Using this example, the shortcode is:  
  `[wpbb post:terms_list taxonomy='category' html_list='no' separator=', ' linked='yes'] `
  6. Copy the shortcode and delete the HTML module.
