---
id: copy-and-paste-modules-or-module-styles
title: Copy and paste modules or module styles
sidebar_label: Copy and paste
---

You can export any module's settings or styles to the clipboard and paste them
into another module in the same layout or any other Beaver Builder layout on
the internet.

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0Pz4P5CIyz8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

This functionality is in an **Export/Import** section of the **Advanced** tab
of every module, as shown in this screenshot.

![](/img/the-basics-copy-paste-module-style-1.png)

**To export a module's settings or styles:**

  1. Open a module for editing.
  2. On the **Advanced** tab in the **Export/Import** section, click **Copy Settings** or **Copy Styles** to copy the settings or styles to your clipboard.  
See the descriptions below for more information about the difference.

**To paste/import to another module:**

  1. Create or open the target module for editing.  
The module must be of the same type as the module you copied.

  2. On the **Advanced** tab in the **Export/Import** section, paste the clipboard contents into the **Import** field.
  3. Click **Import**.  
If the import is unsuccessful (for example, the target module is of the wrong
type or you pasted in the wrong clipboard content), you'll get an error
message.

## Copy Settings vs. Copy Styles

**Copy Settings** duplicates the module: images backgrounds, text, and
settings.

**Copy Styles** copies only a portion of the settings, specifically:

* Align
* Animation
* Border
* Button group
* Color
* Dimension
* Font
* Gradient
* Photo sizes
* Select
* Shadow
* Shape transforms
* Typography
* Unit (for example `px`, `em`, `%`)

## Copy/Paste module settings vs. alternatives

**Copy Settings** duplicates the module to your clipboard.

  * If you want to **duplicate a module on the same page** :  
Using the **Duplicate** tool in the toolbar is faster.

![](/img/the-basics-copy-paste-module-style-2.png)

  * If you want to reuse a column or row on another page of your site or export it to another site:  
[Save the row or column](/beaver-builder/layouts/templates/save-a-row-column-or-module-for-reuse.md) and [use WordPress import/export functionality](/beaver-builder/layouts/templates/export-import-content.md).

  * If you want to reuse a module over and over again on the same site:  
[Creating a saved module](/beaver-builder/layouts/templates/save-a-row-column-or-module-for-reuse.md) is probably faster. In particular, if you
want to reuse modules on the same site and keep them in synch, save as a
global module.

  * If you want to duplicate your entire layout to another page in the same site:  
Use the [Duplicate layout](/beaver-builder/getting-started/bb-editor-basics/duplicate-your-beaver-builder-layout-to-another-page.md) functionality or [save it as a layout template](/beaver-builder/layouts/templates/create-and-save-a-custom-layout-template.md).

:::tip **Tip**
Importing the settings or style appears in [the history](/beaver-builder/getting-started/bb-editor-basics/undo-redo.md) as `<module-name> edited`.
:::
