---
id: remove-a-customizer-tab
title: Remove a Customizer tab
sidebar_label: Remove a Customizer tab
---

You can easily remove a Customizer tab (either a panel or section) with some custom code.

First, some WordPress terminology. There are Customizer panels and Customizer sections.  The difference is that a panel is a tab that contains subtabs, whereas a section is a tab with no subtabs. For example, the **General** tab is a panel because it contains subtabs, as shown in the following screenshot.

![](/img/remove-a-customizer-tab-fbe6e7d6.png)

See the table in the next section to find out which tabs are panels and which are sections.

Here's the code you can use as a template. It creates a function and ties it into the appropriate WordPress action hook. In this case it removes the Presets section from the Customizer.

```php
function my_customize_register() {     
  global $wp_customize;
  $wp_customize->remove_section( 'fl-presets' );  //Modify this line as needed  
}

add_action( 'customize_register', 'my_customize_register', 11 );
```

The code requires one or two modifications to remove the panel or section you want:

* To remove a panel instead of a section, use `remove_panel` instead of `remove_section`.
* Change the ID of the panel or section, following the table in the next section.

Add the code to your child theme's _functions.php_ file.

## Customizer type and ID reference

In order to use the code example above, you need to know if the Customizer tab is a panel or a section and its ID. Here's a table to make this easier.

Title  |  Panel or Section  |  ID
---|---|---
Presets  |  section   |  fl-presets
General  |  panel  |  fl-general
General > Layout  |  section  |  fl-layout
General > Background  |  section  |  fl-body-bg
General > Accent Color  |  section  |  fl-accent-color
General > Headings  |  section  |  fl-heading-font
General > Text  |  section  |  fl-body-font
General > Buttons  |  section  |  fl-buttons
General > Social Links  |  section  |  fl-social-links
Header  |  panel  |  fl-header
Header > Top Bar Layout  |  section  |  fl-topbar-layout
Header > Top Bar Style  |  section  |  fl-topbar-style
Header > Header Layout  |  section  |  fl-header-layout
Header > Header Style  |  section  |  fl-header-style
Header > Header Logo  |  section  |  fl-header-logo
Header > Nav Layout  |  section  |  fl-nav-layout
Header > Nav Style  |  section  |  fl-nav-style
Content  |  panel  |  fl-content
Content > Content Background  |  section  |  fl-content-bg
Content > Blog Layout  |  section  |  fl-content-blog
Content > Archive Layout  |  section  |  fl-content-archives
Content > Post Layout  |  section  |  fl-content-posts
Content > WooCommerce Layout  |  section  |  fl-content-woo
Content > Lightbox  |  section  |  fl-lightbox-layout
Footer  |  panel  |  fl-footer
Footer > Footer Widgets Layout  |  section  |  fl-footer-widgets-layout
Footer > Footer Widgets Style  |  section  |  fl-footer-widgets-style
Footer > Footer Layout  |  section  |  fl-footer-layout
Footer > Footer Style  |  section  |  fl-footer-style
Footer > Footer Parallax  |  section  |  fl-footer-effect
Widgets (This is a WordPress default customizer panel)  |  panel  |  widgets
Widgets > Footer Column 1  |  section  |  footer-col
Widgets > Footer Column 2  |  section  |  footer-col-2
Widgets > Footer Column 3  |  section  |  footer-col-3
Widgets > Footer Column 4  |  section  |  footer-col-4
Widgets > After Post Widget  |  section  |  after-post-widget
Code  |  panel  |  fl-code
Code > CSS Code  |  section  |  fl-css-code-section
Code > JavaScript Code  |  section  |  fl-js-code-section
Code > Head Code  |  section  |  fl-head-code-section
Code > Header Code  |  section  |  fl-header-code-section
Code > Footer Code  |  section  |  fl-footer-code-section
Settings  |  panel  |  fl-settings
Settings > Site Identity (This is a WordPress default customizer section)  |  section  |  title_tagline
Settings > Home Page Settings (This is a WordPress default customizer section)  |  section  |  static_front_page
Menus (This is a WordPress default customizer panel)  |  panel  |  nav_menus
Additional CSS (This is a WordPress default customizer section)  |  section  |  custom_css
Export/Import (This is a WordPress default customizer section)  |  section  |  fl-export-import
