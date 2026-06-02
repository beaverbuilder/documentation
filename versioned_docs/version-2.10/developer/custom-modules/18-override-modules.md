---
id: 18-override-modules
title: '18: Override modules'
sidebar_label: '18: Override modules'
slug: override-modules
---

Overriding Beaver Builder modules can be beneficial when you need to modify the module's functionality beyond what is available through its settings or options. This approach can be applied to all Beaver Builder modules.

:::caution
This article assumes you're using a child theme.
:::

## Getting Started

To begin overriding Beaver Builder modules, you must have access to your website's files. This can be achieved by using a file manager plugin or an FTP/SFTP client. Once you have access, follow these steps:

1. Create a folder named _`fl-builder`_ inside the directory of your child theme: _`/wp-content/themes/THEME_NAME/`_

2. Inside the _`fl-builder`_ folder, create another folder named _`modules`_.

3. Copy the entire folder of the module that you want to override from _`/wp-content/plugins/bb-plugin/modules`_ to your theme's _`fl-builder/modules`_ folder located at _`/wp-content/themes/THEME_NAME/fl-builder/modules`_.

:::caution
For the module override to work correctly, make sure to copy the entire module folder, including all of its files, instead of just the specific files you want to customize.
:::

After copying the folder, you can customize the module's code to your liking, but ensure that the module's folder name, main PHP file name, and main class name remain the same as the original module to be recognized by Beaver Builder.

:::tip
If you’re not seeing your changes, try clearing the Beaver Builder cache.
:::

## Example

Although overridden modules can work with any theme, it's recommended to use a child theme to safeguard them from theme updates. In the example below, you can see the folder and file structure that would result from duplicating the Audio, Button, Menu, and Post modules into a BB Theme Child.

```bash
/bb-theme-child
├── /fl-builder
│   └── /modules
│       ├── /audio
│       ├── /button
│       ├── /menu
│       └── /post-grid
├── functions.php
└── style.css
```

## Outdated Modules

Overridden modules remain unaffected by Beaver Builder updates, which may introduce new features and bug fixes to modules. If you want to ensure that your overridden modules stay current, you need to update the overridden module files on your own.

To compare the changes made in the Beaver Builder update, you can examine the default module files located in the Beaver Builder modules directory (_`/wp-content/plugins/bb-plugin/modules`_).

