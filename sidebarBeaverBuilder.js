/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  beaverbuilder: [
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
        "introduction/about-release",
        "introduction/releases-versioning",
        "introduction/accessibility",
        "introduction/translations",
        "introduction/gdpr",
        "introduction/support-policy",
      ],
    },
    {
      type: 'category',
      label: 'Account',
      link: {
        type: 'doc',
        id: 'account/index',
      },
      items: [
        {
          type: 'category',
          label: 'License',
          link: {
            type: 'doc',
            id: "account/license/index",
          },
          items: [
            "account/license/renew",
            "account/license/downgrade",
            "account/license/upgrade",
            "account/license/paypal-agreement",
            "account/license/transfer",
            "account/license/suspension",
          ],
        },
        "account/billing-info",
        "account/domain-manager",
        "account/update-email-password",
        "account/request-invoice",
        "account/suggest-new-features",
        "account/affiliate-program",
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
      },
      items: [
        "getting-started/what-can-i-do-with-beaver-builder",
        "getting-started/system-requirements",
        "getting-started/install",
        {
          type: 'category',
          label: 'BB Editor Basics',
          link: {
            type: 'generated-index',
            title: 'BB Editor Basics',
          },
          items: [
            "getting-started/bb-editor-basics/launch-builder",
            "getting-started/bb-editor-basics/user-interface",
            "getting-started/bb-editor-basics/tools-menu",
            "getting-started/bb-editor-basics/outline-panel",
            "getting-started/bb-editor-basics/global-settings",
            "getting-started/bb-editor-basics/show-or-hide-the-wordpress-page-title",
            "getting-started/bb-editor-basics/alignment",
            "getting-started/bb-editor-basics/inline-editing",
            "getting-started/bb-editor-basics/undo-redo",
            "getting-started/bb-editor-basics/copy-and-paste-modules-or-module-styles",
            "getting-started/bb-editor-basics/duplicate-your-beaver-builder-layout-to-another-page",
            "getting-started/bb-editor-basics/delete-a-module-or-column",
            "getting-started/bb-editor-basics/save-publish-discard",
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Layouts',
      link: {
        type: 'generated-index',
        title: 'Layouts',
      },
      items: [
        {
          type: 'category',
          label: 'The Advanced Tab',
          link: {
            type: "doc",
            id: "layouts/advanced-tab/index",
          },
          items: [
            "layouts/advanced-tab/spacing",
            "layouts/advanced-tab/visibility",
            "layouts/advanced-tab/animation",
            "layouts/advanced-tab/html-element",
            "layouts/advanced-tab/copy-paste",
            "layouts/advanced-tab/css-js",
          ],
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            "layouts/templates/layout-templates-overview",
            "layouts/templates/add-a-layout-template-to-your-page",
            "layouts/templates/create-and-save-a-custom-layout-template",
            "layouts/templates/manage-saved-layout-templates",
            "layouts/templates/edit-or-delete-saved-layout-templates",
            "layouts/templates/rename-title-or-slug-saved-template-row-column-module",
            "layouts/templates/categorize-and-add-thumbnails-to-saved-templates-list",
            "layouts/templates/save-a-row-column-or-module-for-reuse",
            "layouts/templates/insert-a-saved-row-column-module-into-your-layout",
            "layouts/templates/manage-saved-rows-columns-modules",
            "layouts/templates/edit-a-saved-row-column-or-module",
            "layouts/templates/convert-a-saved-row-column-module-to-global",
            "layouts/templates/convert-a-global-row-column-module-to-standard",
            "layouts/templates/add-an-image-to-an-item-on-the-saved-tab",
            "layouts/templates/delete-a-saved-row-column-module",
            "layouts/templates/export-import-content",
          ]
        },
        {
          type: 'category',
          label: 'Rows',
          items: [
            "layouts/rows/add-prebuilt-rows-to-your-content",
            "layouts/rows/work-with-rows",
            "layouts/rows/full-width-and-fixed-width",
            "layouts/rows/set-width-for-rows-and-content",
            "layouts/rows/set-global-site-wide-default-row-widths",
            "layouts/rows/full-width-rows-on-third-party-themes",
            "layouts/rows/customize-the-row-height",
            {
              type: 'category',
              label: 'Row effects',
              items: [
                "layouts/rows/row-effects/row-shape-overlays",
                "layouts/rows/row-effects/video-backgrounds-in-rows",
                "layouts/rows/row-effects/ideas-for-using-background-colors-and-effects",
                "layouts/rows/row-effects/parallax-row-backgrounds",
                "layouts/rows/row-effects/create-a-ken-burns-effect-in-a-row-background",
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Columns',
          items: [
            "layouts/columns/column-layouts-overview",
            "layouts/columns/tips-for-working-with-columns",
            "layouts/columns/insert-columns",
            "layouts/columns/edit-a-column",
            "layouts/columns/resize-or-reset-column-width",
            "layouts/columns/move-a-column",
            "layouts/columns/duplicate-a-column",
            "layouts/columns/stacking",
          ]
        },
        {
          type: 'category',
          label: 'Modules',
          link: {
            type: 'doc',
            id: 'layouts/modules/index',
          },
          items: [
            {
              type: 'category',
              label: 'Accordion',
              link: {
                type: 'doc',
                id: 'layouts/modules/accordion/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Settings',
                  link: {
                    type: 'doc',
                    id: 'layouts/modules/accordion/settings/index',
                  },
                  items: [
                    'layouts/modules/accordion/settings/items',
                    'layouts/modules/accordion/settings/style',
                  ],
                },
                'layouts/modules/accordion/link-specific-item',
                'layouts/modules/accordion/css-customization',
              ]
            },
            "layouts/modules/audio",
            "layouts/modules/bigcommerce-products",
            {
              type: 'category',
              label: 'Button',
              items: [
                "layouts/modules/button/button",
                "layouts/modules/button/make-a-button-transparent",
              ]
            },
            "layouts/modules/button-group",
            "layouts/modules/callout-and-call-to-action",
            {
              type: 'category',
              label: 'Contact Form',
              items: [
                "layouts/modules/contact-form/contact-form",
                "layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form",
              ]
            },
            "layouts/modules/content-slider",
            "layouts/modules/countdown",
            {
              type: 'category',
              label: 'Gallery',
              items: [
                "layouts/modules/gallery/gallery",
                "layouts/modules/gallery/open-a-gallery-lightbox-on-button-click",
              ]
            },
            "layouts/modules/heading",
            "layouts/modules/html",
            "layouts/modules/icon-and-icon-group",
            "layouts/modules/list",
            "layouts/modules/login-form",
            "layouts/modules/map",
            {
              type: 'category',
              label: 'Menu',
              items: [
                "layouts/modules/menu/menu",
                "layouts/modules/menu/add-a-menu-item-that-links-to-a-page-section",
              ]
            },
            "layouts/modules/number-counter",
            {
              type: 'category',
              label: 'Photo',
              items: [
                "layouts/modules/photo/photo",
                "layouts/modules/photo/display-full-captions-under-photos",
                "layouts/modules/photo/add-hover-effects-to-the-photo-module",
              ]
            },
            {
              type: 'category',
              label: 'Posts',
              items: [
                "layouts/modules/posts/posts",
                "layouts/modules/posts/posts-carousel",
                "layouts/modules/posts/posts-slider",
                "layouts/modules/posts/posts-posts-carousel-and-posts-slider-modules-examples",
                "layouts/modules/posts/increase-space-between-images-in-posts-module-gallery",
              ]
            },
            "layouts/modules/pricing-table",
            "layouts/modules/reusable-blocks",
            {
              type: 'category',
              label: 'Search',
              items: [
                "layouts/modules/search/search",
                "layouts/modules/search/limit-post-types-search-module",
              ]
            },
            "layouts/modules/separator",
            "layouts/modules/sidebar",
            "layouts/modules/slideshow",
            "layouts/modules/social-buttons",
            {
              type: 'category',
              label: 'Subscribe Form',
              items: [
                "layouts/modules/subscribe-form/subscribe-form",
                "layouts/modules/subscribe-form/configure-subscribe-form-module-for-mailchimp-double-opt-in",
                "layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form",
              ]
            },
            {
              type: 'category',
              label: 'Tabs',
              link: {
                type: 'doc',
                id: 'layouts/modules/tabs/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Settings',
                  link: {
                    type: 'doc',
                    id: 'layouts/modules/tabs/settings/index',
                  },
                  items: [
                    'layouts/modules/tabs/settings/items',
                    'layouts/modules/tabs/settings/style',
                  ],
                },
                "layouts/modules/tabs/link-specific-item",
              ]
            },
            "layouts/modules/testimonials",
            "layouts/modules/text",
            {
              type: 'category',
              label: 'Video',
              items: [
                "layouts/modules/video/video",
                "layouts/modules/video/open-a-video-in-a-lightbox",
              ]
            },
            "layouts/modules/woocommerce",
            "layouts/modules/widgets",
          ]
        },
        {
          type: 'category',
          label: 'Responsive Design',
          link: {
            type: "doc",
            id: "layouts/responsive-design/index",
          },
          items: [
            "layouts/responsive-design/editor",
            "layouts/responsive-design/breakpoints",
            "layouts/responsive-design/toggle",
            "layouts/responsive-design/disable",
            "layouts/responsive-design/responsive-columns",
          ]
        },
        {
          type: 'category',
          label: 'Post Layouts',
          items: [
            "layouts/post-layouts/how-beaver-builder-works-with-blogs-and-custom-post-types-start-here",
            "layouts/post-layouts/basics-how-wordpress-handles-blog-posts-and-archives",
            "layouts/post-layouts/wordpress-archive-types",
            "layouts/post-layouts/generated-wordpress-archives-versus-beaver-builder-layouts",
            "layouts/post-layouts/use-beaver-builder-to-lay-out-post-content",
            "layouts/post-layouts/add-rows-and-modules-to-index-archive-and-post-pages",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Styles',
      link: {
        type: 'generated-index',
        title: 'Styles',
      },
      items: [
        {
          type: 'category',
          label: 'Colors',
          items: [
            "styles/colors/color-picker",
            "styles/colors/add-a-color-palette-to-the-beaver-builder-editor",
          ]
        },
        {
          type: 'category',
          label: 'Typography',
          items: [
            "styles/typography/typography",
            "styles/typography/add-latin-extended-capabilities-for-a-google-font",
          ]
        },
        {
          type: 'category',
          label: 'Effects',
          items: [
            "styles/effects/animations",
            "styles/effects/color-gradients-for-row-and-column-backgrounds-and-overlays",
            "styles/effects/css-gradients",
            "styles/effects/borders",
            "styles/effects/radius-shadow",
            "styles/effects/rounded-corners-on-columns-and-photos",
          ]
        },
        {
          type: 'category',
          label: 'Icons',
          items: [
            "styles/icons/enable-disable-or-delete-icon-sets",
            "styles/icons/enable-font-awesome-pro-icon-sets",
            "styles/icons/font-awesome-pro-duotone-icons",
            "styles/icons/add-an-icon-to-a-menu-item",
            "styles/icons/create-and-import-a-custom-icon-set",
          ]
        },
        "styles/custom-code",
      ]
    },
    {
      type: 'category',
      label: 'Advanced Builder Techniques',
      link: {
        type: 'generated-index',
        title: 'Advanced Builder Techniques',
      },
      items: [
        "advanced-builder-techniques/css-length-height-units",
        "advanced-builder-techniques/add-a-css-id-or-class-name-to-a-module",
        "advanced-builder-techniques/add-a-pdf-file-to-your-layout",
        "advanced-builder-techniques/smooth-scrolling-links",
        "advanced-builder-techniques/smooth-scrolling-tweaks-with-code",
        "advanced-builder-techniques/restore-a-previous-version",
        "advanced-builder-techniques/keyboard-shortcuts",
        "advanced-builder-techniques/display-only-custom-layout-templates-in-beaver-builder",
        "advanced-builder-techniques/disable-inline-editing",
        "advanced-builder-techniques/disable-columns-in-columns",
        {
          type: 'category',
          label: 'Shortcodes',
          items: [
            "advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts",
            "advanced-builder-techniques/shortcodes/shortcode-reference",
            "advanced-builder-techniques/shortcodes/get-the-slug-or-id-for-a-shortcode",
            "advanced-builder-techniques/shortcodes/use-shortcodes-in-tools-menu-css-or-js",
            "advanced-builder-techniques/shortcodes/shortcode-performance",
            "advanced-builder-techniques/shortcodes/shortcodes-dont-display-for-logged-out-users-bbpress",
            "advanced-builder-techniques/shortcodes/put-thrive-leads-shortcode-into-a-button-module",
          ]
        },
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
        "management-migration/settings-overview",
        "management-migration/advanced-settings",
        "management-migration/import-export-settings",
        "management-migration/limit-page-post-lists-to-bb-layouts",
        "management-migration/control-which-post-types-can-use-beaver-builder",
        "management-migration/control-user-access-by-role",
        "management-migration/disable-wordpress-comments",
        "management-migration/add-custom-image-sizes",
        "management-migration/change-wordpress-screen-options",
        "management-migration/configure-the-beaver-builder-admin-panel-display-options",
        "management-migration/convert-content-between-wordpress-5-and-beaver-builder",
        "management-migration/anonymous-usage-data-sent-to-beaver-builder",
        "management-migration/disable-specific-modules-sitewide",
        "management-migration/enable-prerelease-updates",
        "management-migration/manually-migrate-a-beaver-builder-site",
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
        {
          type: 'category',
          label: 'Debugging ',
          items: [
            "troubleshooting/debugging/cache-clearing-tool",
            "troubleshooting/debugging/issue-fixer-clear-the-cache",
            "troubleshooting/debugging/safe-mode",
            "troubleshooting/debugging/known-beaver-builder-incompatibilities",
            "troubleshooting/debugging/plugin-conflicts",
            "troubleshooting/debugging/theme-conflict",
            "troubleshooting/debugging/enable-beaver-builder-debug-mode",
          ]
        },
        {
          type: 'category',
          label: 'Common Issues',
          items: [
            "troubleshooting/common-issues/403-forbidden-or-blocked-error",
            "troubleshooting/common-issues/404-error-when-trying-to-open-editor",
            "troubleshooting/common-issues/internal-server-500-error",
            "troubleshooting/common-issues/dreamhost",
            "troubleshooting/common-issues/title-bar-incorrect",
            "troubleshooting/common-issues/destination-folder-already-exists",
            "troubleshooting/common-issues/require-once",
            "troubleshooting/common-issues/zlib-output-compression",
            "troubleshooting/common-issues/cloudflare-and-403-errors-when-loading-background-images",
            "troubleshooting/common-issues/exceeds-php-max-input-vars",
            "troubleshooting/common-issues/http-error-when-uploading-images",
            "troubleshooting/common-issues/increase-the-wordpress-allowed-memory-size",
            "troubleshooting/common-issues/use-smtp-to-send-form-notifications",
            "troubleshooting/common-issues/i-cant-upload-the-installer-zip-file-because-it-is-unzipped-when-i-download",
            "troubleshooting/common-issues/the-uploaded-file-exceeds-the-uploadmaxfilesize-directive-in-php-ini",
            "troubleshooting/common-issues/error-when-trying-to-install-update",
            "troubleshooting/common-issues/i-migrated-a-site-but-my-image-urls-didnt-change",
            "troubleshooting/common-issues/im-getting-a-permission-denied-error",
            "troubleshooting/common-issues/i-am-getting-a-blank-screen",
            "troubleshooting/common-issues/error-settings-not-saved",
          ]
        },
        {
          type: 'category',
          label: 'Updates & License Issues',
          items: [
            "troubleshooting/updates-license/not-getting-beaver-builder-updates",
            "troubleshooting/updates-license/uninstall-or-deactivate-the-beaver-builder-plugin",
            "troubleshooting/updates-license/beaver-builder-not-working-after-upgrading",
            "troubleshooting/updates-license/manually-reinstall-beaver-builder",
          ]
        },
        {
          type: 'category',
          label: 'Miscellaneous',
          items: [
            "troubleshooting/miscellaneous/cant-find-the-beaver-builder-menu-in-the-admin-panel",
            "troubleshooting/miscellaneous/cant-open-page-in-beaver-builder",
            "troubleshooting/miscellaneous/font-awesome-icons",
            "troubleshooting/miscellaneous/reduce-disable-undo-redo-manager",
            "troubleshooting/miscellaneous/wordpress-admin-bar-is-hidden",
            "troubleshooting/miscellaneous/classic-wordpress-and-beaver-builder-text-editor-toolbars-dont-match",
            "troubleshooting/miscellaneous/background-color-or-image-doesnt-appear",
            "troubleshooting/miscellaneous/i-cant-drag-and-drop-modules",
            "troubleshooting/miscellaneous/subscribe-form-mailchimp-merge-fields-invalid",
            "troubleshooting/miscellaneous/mailchimp-subscriber-popup-form-breaks-beaver-builder",
            "troubleshooting/miscellaneous/beaver-builder-does-not-open-for-editing-on-nginx-servers",
            "troubleshooting/miscellaneous/device-previews-beaver-builder-customizer-and-beyond",
            "troubleshooting/miscellaneous/how-beaver-builder-renders-the-title-of-an-image",
            "troubleshooting/miscellaneous/my-custom-column-width-keeps-changing",
            "troubleshooting/miscellaneous/new-slideshow-images-dont-appear-on-siteground-staging-sites",
            "troubleshooting/miscellaneous/uploaded-icon-set-is-blank",
            "troubleshooting/miscellaneous/why-am-i-seeing-an-eye-icon-in-my-module-toolbar",
            "troubleshooting/miscellaneous/limit-on-adding-rows",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'White Label (Agency)',
      link: {
        type: 'generated-index',
        title: 'White Label (Agency)',
      },
      items: [
        "white-labeling/white-labeling-beaver-builder",
        "white-labeling/replace-built-in-layout-templates-with-your-own",
        "white-labeling/customize-the-help-button",
        "white-labeling/white-label-the-ajax-crash-message",
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
        {
          type: 'category',
          label: 'Custom Modules',
          link: {
            type: 'doc',
            id: 'developer/custom-modules/index',
          },
          items: [
            "developer/custom-modules/01-create-a-plugin",
            "developer/custom-modules/02-add-a-module-to-your-plugin",
            "developer/custom-modules/03-define-module-settings",
            "developer/custom-modules/04-module-settings-css-javascript",
            "developer/custom-modules/05-module-html",
            "developer/custom-modules/06-module-css",
            "developer/custom-modules/07-module-javascript",
            "developer/custom-modules/08-module-property-reference",
            "developer/custom-modules/09-module-method-reference",
            "developer/custom-modules/10-setting-fields-reference",
            "developer/custom-modules/11-responsive-fields-reference",
            "developer/custom-modules/12-repeater-fields-reference",
            "developer/custom-modules/13-sanitize-field-values",
            "developer/custom-modules/14-create-custom-fields",
            "developer/custom-modules/15-helpers",
            "developer/custom-modules/16-live-preview-reference",
            "developer/custom-modules/17-partial-refresh-reference",
            "developer/custom-modules/18-override-modules",
            "developer/custom-modules/19-localization",
          ],
        },
        "developer/iframe-ui",
        "developer/acf-blocks",
        {
          type: 'category',
          label: "How to's & Tips",
          link: {
            type: 'generated-index',
            title: "How to's & Tips",
          },
          items: [
            "developer/how-to-tips/map-module-filter-google",
            "developer/how-to-tips/display-subset-typography-controls",
            "developer/how-to-tips/data-storage",
            "developer/how-to-tips/html-css-and-javascript-reference",
            "developer/how-to-tips/theme-author-templates",
            "developer/how-to-tips/load-css-and-javascript-inline",
            "developer/how-to-tips/disable-schema-markup-beaver-builder",
            "developer/how-to-tips/disable-minification-and-caching-with-wpdebug",
            "developer/how-to-tips/add-custom-attributes-to-rows-columns-or-modules",
            "developer/how-to-tips/render-layouts-with-php",
            "developer/how-to-tips/load-google-fonts-locally-gdpr",
            "developer/how-to-tips/prevent-css-and-javascript-from-loading-on-archive-pages",
            "developer/how-to-tips/create-a-video-lightbox-for-an-amazon-s3-video",
          ]
        },
        {
          type: 'category',
          label: 'Tutorials & Guides',
          link: {
            type: 'generated-index',
            title: 'Tutorials & Guides',
          },
          items: [
            "developer/tutorials-guides/install-beaver-builder-via-composer",
            "developer/tutorials-guides/wp-cli-plugin-theme",
            "developer/tutorials-guides/remove-rename-tools-menu-items",
            "developer/tutorials-guides/customize-settings-forms",
            "developer/tutorials-guides/common-beaver-builder-plugin-filter-examples",
            "developer/tutorials-guides/add-icons-to-your-custom-modules",
            "developer/tutorials-guides/customize-row-resizing-behavior",
            "developer/tutorials-guides/customize-keyboard-shortcuts",
            "developer/tutorials-guides/change-how-css-and-javascript-are-loaded",
            "developer/tutorials-guides/create-a-custom-module-to-compare-images-with-a-slider",
            "developer/tutorials-guides/create-a-filter-to-customize-the-display-of-post-data",
            "developer/tutorials-guides/add-a-custom-shape-layer",
          ]
        },
        "developer/conditionally-hidden-content",
        {
          type: 'link',
          label: 'Hooks',
          href: 'https://hooks.wpbeaverbuilder.com/bb-plugin/'
        }
      ]
    },
  ],
};