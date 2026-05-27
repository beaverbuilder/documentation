---
id: customize-themer-modules
title: Customize Themer modules
sidebar_label: Customize Themer modules
---

Beaver Themer includes a set of modules designed specifically for Themer layouts, such as the Post Navigation module used in Singular layout types. You can modify or extend the functionality of these Themer-specific modules by overriding them.

The process is the same as [overriding regular Beaver Builder modules](/beaver-builder/developer/custom-modules/override-modules). Simply create a `/fl-builder` directory in your child theme, then add a `/modules` directory inside it. From there, copy the module folder you want to override from the Beaver Themer plugin `/bb-theme-builder/modules/` into the `/modules` directory, as shown in the example below:

```bash
/bb-theme-child
├── /fl-builder
│   └── /modules
│       └── /fl-post-navigation
├── functions.php
└── style.css
```

:::info

Beaver Themer includes a mix of regular modules and a special type of module called module aliases. Unfortunately, module aliases cannot be overridden. You can use the list below to identify which modules are aliases:

- Archive Title
- Attached Images
- Featured Image
- Post Gallery
- Post Columns
- Post List
- Post Masonry
- Post Title

:::
