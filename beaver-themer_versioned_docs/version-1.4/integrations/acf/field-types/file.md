---
id: file
title: File field
sidebar_label: File
---

The Advanced Custom Fields (ACF) File field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your File field in ACF and use the shortcode to display the File field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Header, HTML, Button or Text module.

## Shortcode

Here is an example of the Beaver Themer File field connection shortcode.

```markup
[wpbb post:acf type='file' name='']
```

The `name=''` attribute is where you enter your File field name.

### Options

The File field connection shortcode supports the following options.

* **Display** - The display option allows you to choose what to display from the File field. The default is `url`. The following options are available:  

  * **URL** - Displays the file URL.
  * **Name** - Displays the file name.
  * **Title** - Displays the file title.
  * **Description** - Displays the file description.
  * **Base Name** - Displays the file basename.
  * **Extension** - Displays the file extension. Example: `jpg`.
  * **Alt** - Displays the file alt text.
  * **Caption** - Displays the file caption.

### Shortcode Parameters

The File field options can also be added using the following parameters.

```markup title="URL"
[wpbb post:acf type='file' name='' display='url']
```

```markup title="Name"
[wpbb post:acf type='file' name='' display='name']
```
  
```markup title="Title"
[wpbb post:acf type='file' name='' display='title']
```

```markup title="Description"
[wpbb post:acf type='file' name='' display='description']
```

```markup title="Base Name"
[wpbb post:acf type='file' name='' display='basename']
```

```markup title="Extension"
[wpbb post:acf type='file' name='' display='ext']
```

```markup title="Alt"
[wpbb post:acf type='file' name='' display='alt']
```

```markup title="Caption"
[wpbb post:acf type='file' name='' display='caption']
```

## Options Page

The Beaver Themer File field connection shortcode also supports File fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='file' name='']
```
