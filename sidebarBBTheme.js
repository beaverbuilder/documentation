/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  bbtheme: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'introduction/index',
      },
      items: [
        "introduction/faq",
        "introduction/dev-preview",
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
      },
      items: [
        "getting-started/install-the-bb-theme-and-child-theme",
        "getting-started/do-i-need-to-install-the-beaver-builder-child-theme",
        "getting-started/manually-reinstall-bb-theme-child-theme",
        "getting-started/built-in-theme-templates-for-single-pages-and-posts",
        "getting-started/open-the-wordpress-customizer",
        "getting-started/responsive-previews",
      ]
    },
    {
      type: 'category',
      label: 'Site Settings',
      link: {
        type: 'generated-index',
        title: 'Site Settings',
      },
      items: [
        "site-settings/create-a-site-title-and-tagline",
        "site-settings/header-logo",
        "site-settings/add-a-site-icon-favicon",
        "site-settings/set-whether-the-home-page-is-a-page-or-post",
      ]
    },
    {
      type: 'category',
      label: 'Defaults for Layouts & Content',
      link: {
        type: 'generated-index',
        title: 'Defaults for Layouts & Content',
      },
      items: [
        {
          type: 'category',
          label: 'One-click Presets',
          items: [
            "defaults-for-layouts-content/presets/preset-tips",
            "defaults-for-layouts-content/presets/convert-the-premier-or-deluxe-preset-to-entirely-full-width",
          ]
        },
        {
          type: 'category',
          label: 'Full-Width & Boxed Layouts',
          items: [
            "defaults-for-layouts-content/full-width-boxed/overview-of-full-width-and-boxed-pages-and-rows",
            "defaults-for-layouts-content/full-width-boxed/set-a-full-width-or-boxed-layout",
            "defaults-for-layouts-content/full-width-boxed/set-a-full-width-header-with-boxed-content",
          ]
        },
        {
          type: 'category',
          label: 'Headers/Navigation/Menus',
          items: [
            "defaults-for-layouts-content/headers-nav-menus/set-header-layout-and-style",
            "defaults-for-layouts-content/headers-nav-menus/fixed-header-types",
            "defaults-for-layouts-content/headers-nav-menus/align-the-top-bar-columns-with-content-margins",
            "defaults-for-layouts-content/headers-nav-menus/change-size-of-fade-in-fixed-header-logo-text",
            "defaults-for-layouts-content/headers-nav-menus/merge-page-content-into-the-header",
            "defaults-for-layouts-content/headers-nav-menus/add-the-site-tagline-to-the-header",
            "defaults-for-layouts-content/headers-nav-menus/change-header-logo-size-in-nav-bottom-layout",
            "defaults-for-layouts-content/headers-nav-menus/remove-the-header-and-footer",
            "defaults-for-layouts-content/headers-nav-menus/hide-the-header-nav-menu",
            "defaults-for-layouts-content/headers-nav-menus/create-menus-and-set-menu-locations",
            "defaults-for-layouts-content/headers-nav-menus/choose-how-menus-open-responsively",
            "defaults-for-layouts-content/headers-nav-menus/set-up-a-mega-menu",
            "defaults-for-layouts-content/headers-nav-menus/add-buttons-to-your-navigation-menu",
            "defaults-for-layouts-content/headers-nav-menus/add-css-classes-to-individual-menu-items",
            "defaults-for-layouts-content/headers-nav-menus/add-shortcodes-or-html-to-your-nav-menu",
            "defaults-for-layouts-content/headers-nav-menus/center-the-nav-menu-with-nav-bottom-layout",
          ]
        },
        {
          type: 'category',
          label: 'Footers',
          items: [
            "defaults-for-layouts-content/footers/set-footer-layout-and-style-options",
            "defaults-for-layouts-content/footers/customize-the-default-theme-footer",
            "defaults-for-layouts-content/footers/force-footer-to-bottom-on-short-pages",
          ]
        },
        {
          type: 'category',
          label: 'Blog Layouts',
          items: [
            "defaults-for-layouts-content/blog-settings/configure-how-wordpress-handles-your-blog",
            "defaults-for-layouts-content/blog-settings/remove-website-field-url-from-post-comments",
          ]
        },
        {
          type: 'category',
          label: 'Sidebars',
          items: [
            "defaults-for-layouts-content/sidebars/use-the-beaver-builder-themes-sidebar-in-posts-and-pages",
            "defaults-for-layouts-content/sidebars/position-left-sidebar-below-content-in-mobile",
          ]
        },
        {
          type: 'category',
          label: 'Widgets',
          items: [
            "defaults-for-layouts-content/widgets/configure-the-widgets-in-the-primary-sidebar",
            "defaults-for-layouts-content/widgets/set-options-for-footer-widgets",
            "defaults-for-layouts-content/widgets/change-the-width-of-footer-widgets",
            "defaults-for-layouts-content/widgets/add-a-widget-area-after-the-beaver-builder-theme-top-bar",
          ]
        },
        {
          type: 'category',
          label: 'Icons',
          items: [
            "defaults-for-layouts-content/icons/where-can-i-add-social-icons",
            "defaults-for-layouts-content/icons/choose-how-font-awesome-icons-load-in-beaver-builder-theme",
            "defaults-for-layouts-content/icons/adjust-the-size-of-the-social-icons",
          ]
        },
        "defaults-for-layouts-content/shortcode-for-current-date",
        "defaults-for-layouts-content/set-woocommerce-layout",
        "defaults-for-layouts-content/add-yoast-breadcrumbs-to-the-beaver-builder-theme",
        "defaults-for-layouts-content/integrate-sensei-with-the-beaver-builder-theme",
      ]
    },
    {
      type: 'category',
      label: 'Defaults for Styles',
      link: {
        type: 'generated-index',
        title: 'Defaults for Styles',
      },
      items: [
        {
          type: 'category',
          label: 'Colors',
          items: [
            "defaults-for-styles/colors/set-a-background-color-or-image-for-the-browser-window",
            "defaults-for-styles/colors/set-a-background-color-or-image-for-content-area",
            "defaults-for-styles/colors/where-do-menu-colors-come-from",
            "defaults-for-styles/colors/change-menu-link-and-icon-colors-on-small-devices",
            "defaults-for-styles/colors/change-menu-background-color-on-small-devices",
            "defaults-for-styles/colors/add-color-presets-to-customizer",
          ]
        },
        {
          type: 'category',
          label: 'Links & Buttons',
          items: [
            "defaults-for-styles/links/change-the-default-color-for-buttons-and-links",
            "defaults-for-styles/links/set-global-default-button-styles",
            "defaults-for-styles/links/add-underlines-to-link-text-beaver-builder-theme",
          ]
        },
        {
          type: 'category',
          label: 'Typography',
          items: [
            "defaults-for-styles/typography/set-sitewide-style-options-for-headings-and-text",
            "defaults-for-styles/typography/set-responsive-default-text-styles-for-beaver-builder-layouts",
            "defaults-for-styles/typography/customizer-font-family-setting-system-ui",
            "defaults-for-styles/typography/use-a-google-font-in-headings-and-text",
            "defaults-for-styles/typography/add-web-fonts-to-your-theme-and-the-beaver-builder-plugin",
            "defaults-for-styles/typography/add-web-fonts-complex-example",
            "defaults-for-styles/typography/load-and-use-adobe-fonts",
            "defaults-for-styles/typography/load-and-use-google-fonts-not-available-in-beaver-builder",
          ]
        },
        {
          type: 'category',
          label: 'Images',
          items: [
            "defaults-for-styles/images/enable-or-disable-whether-images-appear-in-a-lightbox",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Customizer Settings',
      link: {
        type: 'generated-index',
        title: 'Customizer Settings',
      },
      items: [
        "customizer-settings/presets",
        "customizer-settings/general",
        "customizer-settings/header",
        "customizer-settings/content",
        "customizer-settings/footer",
        "customizer-settings/widgets",
        "customizer-settings/code",
        "customizer-settings/settings",
        "customizer-settings/menus",
        "customizer-settings/the-events-calendar",
        "customizer-settings/bigcommerce",
        "customizer-settings/woocommerce",
        "customizer-settings/additional-css",
        "customizer-settings/export-import",
      ],
    },
    {
      type: 'category',
      label: 'Code',
      link: {
        type: 'generated-index',
        title: 'Code',
      },
      items: [
        "code/insert-site-wide-css-or-javascript-code",
        "code/insert-google-analytics-code",
        "code/beaver-builder-theme-customizer-settings-mapped-to-css",
      ]
    },
    {
      type: 'category',
      label: 'Management/Migration',
      link: {
        type: 'generated-index',
        title: 'Management & Migration',
      },
      items: [
        "management-migration/choose-bootstrap-3-or-4",
        "management-migration/export-or-import-customizer-settings",
        "management-migration/move-parent-theme-customizer-settings-to-a-child-theme",
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
      },
      items: [
        "troubleshooting/fix-ubermenu-mobile-navigation-duplication",
        "troubleshooting/cannot-reset-color-to-default",
        "troubleshooting/background-color-in-customizer-doesnt-match-the-preview",
        "troubleshooting/jquery-modal-incompatibility",
      ]
    },
    {
      type: 'category',
      label: 'White Labeling',
      items: [
        "white-labeling/white-label-your-child-theme",
      ]
    },
    {
      type: 'category',
      label: 'Developer',
      link: {
        type: 'generated-index',
        title: 'Developer',
      },
      items: [
        "developer/add-a-page-post-or-custom-post-type-template",
        "developer/insert-beaver-builder-shortcode-into-a-theme-template-file",
        "developer/theme-action-reference",
        "developer/theme-filter-reference",
        "developer/theme-css-reference",
        "developer/remove-a-customizer-tab",
        "developer/disable-schema-markup-bb-theme",
        {
          type: 'category',
          label: 'Custom Theme Presets',
          items: [
            "developer/custom-theme-preset/add-a-custom-theme-preset",
            "developer/custom-theme-preset/add-theme-preset-general-tab-options",
            "developer/custom-theme-preset/add-theme-preset-header-tab-options",
            "developer/custom-theme-preset/add-theme-preset-content-tab-options",
            "developer/custom-theme-preset/add-theme-preset-footer-tab-options",
            "developer/custom-theme-preset/remove-an-existing-or-custom-preset",
          ]
        },
      ]
    },
  ],
};
