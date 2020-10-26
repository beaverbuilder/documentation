---
id: cmdg-18-override-built-in-modules
title: 'CMDG 18: Override built-in modules'
sidebar_label: 'CMDG 18: Override built-in modules'
---

Any of the built-in modules can be overridden within your theme by following
the steps below.

  1. Create a new folder in your theme's folder named _`fl-builder`_.
  2. Create a new folder within your theme's _`fl-builder`_ folder named _`modules`_.
  3. Copy the module you wish to override from _`wp-content/plugins/bb-plugin/modules`_ to your theme's _`fl-builder/modules`_ folder.

The example tree below shows what this structure would look like if you were using the Beaver Builder child theme.

```bash
/bb-theme-child
├── fl-builder
│   └── modules
│       ├── audio
│       ├── button
│       ├── menu
│       └── post-grid
├── functions.php
└── style.css
```

That's it! You can now start editing the module to suit your needs. Note that
even though you can customize the module's code, the module's folder name,
main PHP file name, and main class name must remain unchanged to be recognized
by Beaver Builder.

:::tip **Tip:**
If you’re not seeing your changes, try clearing the Beaver Builder
cache.
:::
