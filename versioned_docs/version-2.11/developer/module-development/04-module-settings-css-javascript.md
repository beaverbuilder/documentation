---
id: 04-module-settings-css-javascript
title: '04: Module Settings CSS & JavaScript'
sidebar_label: '04: Module Settings CSS & JavaScript'
slug: module-settings-css-javascript
---

Now that you've defined your settings, you're ready to customize them using CSS and JavaScript. Beaver Builder gives you two entry points for doing this.

:::info
It isn't necessary to include any CSS or JavaScript for your settings to work. Doing so is optional.
:::

## Module Settings CSS

Any CSS you add to this file will be loaded when the settings panel for your
module is loaded.

```bash
/wp-content/my-plugin/my-module/css/settings.css
```

## Module Settings JavaScript

The JavaScript in this file will be loaded when the settings panel for your
module is loaded. This is where you can register a helper object for your
settings for initialization, validation rules, and prechecking before the form
is submitted.

See the example provided in the [Example plugin](index.md) located in *example/js/settings.js* for detailed info and examples of working with form settings JavaScript.

```bash
/wp-content/my-plugin/my-module/js/settings.js
```
