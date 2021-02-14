---
id: cmdg-04-module-settings-css-and-javascript
title: 'CMDG 04: Module settings CSS and JavaScript'
sidebar_label: 'CMDG 04: Module settings CSS and JavaScript'
---

Now that you've defined your settings, you're ready to customize them using
CSS and JavaScript. Beaver Builder gives you two entry points for doing this.
Note that it isn't necessary to include any CSS or JavaScript for your
settings to work. Doing so is optional.

### Module settings CSS

```bash
my-plugin/my-module/css/settings.css
```

Any CSS you add to this file will be loaded when the settings panel for your
module is loaded.

### Module settings JavaScript

```bash
my-plugin/my-module/js/settings.js
```

The JavaScript in this file will be loaded when the settings panel for your
module is loaded. This is where you can register a helper object for your
settings for initialization, validation rules, and prechecking before the form
is submitted. Please see the example located in _example/js/settings.js_ for
detailed info and examples of working with form settings JavaScript.
