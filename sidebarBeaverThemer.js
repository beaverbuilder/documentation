/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  beaverthemer: [
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
        "getting-started/what-can-i-do-with-beaver-themer",
        "getting-started/beaver-themer-requirements-for-installation",
        "getting-started/install-beaver-themer",
        "getting-started/i-installed-beaver-themer-now-what",
        "getting-started/primer-on-wordpress-content-and-theme-areas-themer",
      ]
    },
    {
      type: 'category',
      label: 'Layout Types & Modules',
      link: {
        type: 'generated-index',
        title: 'Layout Types & Modules',
      },
      items: [
        {
          type: 'category',
          label: 'Header layout type',
          items: [
            "layout-types-modules/header-layout-type/themer-header-layout-type",
            "layout-types-modules/header-layout-type/tutorial-create-a-header-layout-themer",
          ]
        },
        {
          type: 'category',
          label: 'Footer layout type',
          items: [
            "layout-types-modules/footer-layout-type/themer-footer-layout-type",
          ]
        },
        {
          type: 'category',
          label: 'Archive layout type',
          items: [
            "layout-types-modules/archive-layout-type/themer-archive-layout-type",
            "layout-types-modules/archive-layout-type/themer-archive-layout-archive-title-module",
            "layout-types-modules/archive-layout-type/themer-archive-layout-archive-description-module",
            "layout-types-modules/archive-layout-type/themer-archive-layout-post-columns-gallery-list-masonry-modules",
            "layout-types-modules/archive-layout-type/example-themer-archive-layout-for-custom-post-type-categories",
            "layout-types-modules/archive-layout-type/tutorial-create-an-author-archive-themer-layout",
            "layout-types-modules/archive-layout-type/create-a-card-layout-for-posts-themer",
          ]
        },
        {
          type: 'category',
          label: 'Singular layout type',
          items: [
            "layout-types-modules/singular-layout-type/themer-singular-layout-type",
            "layout-types-modules/singular-layout-type/themer-singular-layout-attached-images-module",
            "layout-types-modules/singular-layout-type/themer-singular-layout-author-bio-module",
            "layout-types-modules/singular-layout-type/themer-singular-layout-comments-module",
            "layout-types-modules/singular-layout-type/themer-singular-layout-featured-image-module",
            "layout-types-modules/singular-layout-type/themer-singular-layout-post-content-module",
            "layout-types-modules/singular-layout-type/themer-singular-layout-post-info-module",
            "layout-types-modules/singular-layout-type/themer-singular-layout-post-navigation-module",
            "layout-types-modules/singular-layout-type/themer-singular-layout-post-title-module",
            "layout-types-modules/singular-layout-type/use-the-posts-module-to-create-related-posts",
            "layout-types-modules/singular-layout-type/add-a-singular-themer-layout-to-the-wordpress-page-template-field",
          ]
        },
        {
          type: 'category',
          label: '404 layout type',
          items: [
            "layout-types-modules/404-layout-type/themer-404-layout-type",
          ]
        },
        {
          type: 'category',
          label: 'Part layout type',
          items: [
            "layout-types-modules/part-layout-type/themer-part-layout-type",
            "layout-types-modules/part-layout-type/add-yoast-breadcrumbs-with-beaver-themer",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {
        type: 'generated-index',
        title: 'Integrations',
      },
      items: [
        {
          type: 'category',
          label: 'Advanced Custom Fields',
          link: {
            type: 'doc',
            id: 'integrations/acf/index',
          },
          items: [
            "integrations/acf/getting-started",
            "integrations/acf/options-page",
            {
              type: 'category',
              label: 'Field Types',
              link: {
                type: 'doc',
                id: 'integrations/acf/field-types/index',
              },
              items: [
                "integrations/acf/field-types/button-group",
                "integrations/acf/field-types/checkbox",
                "integrations/acf/field-types/date-picker",
                "integrations/acf/field-types/date-time-picker",
                "integrations/acf/field-types/email",
                "integrations/acf/field-types/file",
                "integrations/acf/field-types/flexible-content",
                "integrations/acf/field-types/gallery",
                "integrations/acf/field-types/google-map",
                "integrations/acf/field-types/group",
                "integrations/acf/field-types/image",
                "integrations/acf/field-types/number",
                "integrations/acf/field-types/oembed",
                "integrations/acf/field-types/page-link",
                "integrations/acf/field-types/password",
                "integrations/acf/field-types/post-object",
                "integrations/acf/field-types/radio-button",
                "integrations/acf/field-types/relationship",
                "integrations/acf/field-types/repeater",
                "integrations/acf/field-types/select",
                "integrations/acf/field-types/smart-slider",
                "integrations/acf/field-types/taxonomy",
                "integrations/acf/field-types/text-area",
                "integrations/acf/field-types/text",
                "integrations/acf/field-types/time-picker",
                "integrations/acf/field-types/true-false",
                "integrations/acf/field-types/url",
                "integrations/acf/field-types/user",
                "integrations/acf/field-types/wysiwyg",
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'WooCommerce',
          link: {
            type: 'generated-index',
            title: 'WooCommerce',
          },
          items: [
            "integrations/woocommerce/create-an-archive-themer-layout-for-woocommerce",
            "integrations/woocommerce/create-a-singular-themer-layout-for-woocommerce",
            "integrations/woocommerce/breadcrumb-module-for-woocommerce-singular-and-archive-themer-layouts",
            "integrations/woocommerce/products-module-for-woocommerce-archive-themer-layouts",
            "integrations/woocommerce/add-to-cart-button-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-description-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-images-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-meta-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-price-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-rating-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-tabs-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-title-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/product-upsells-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/related-products-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/woo-notices-module-for-woocommerce-singular-themer-layouts",
            "integrations/woocommerce/field-connections",
          ]
        },
        {
          type: 'category',
          label: 'BigCommerce',
          link: {
            type: 'generated-index',
            title: 'BigCommerce',
          },
          items: [
            "integrations/bigcommerce/beaver-themer-layouts-for-bigcommerce",
            "integrations/bigcommerce/create-an-archive-themer-layout-for-bigcommerce",
            "integrations/bigcommerce/create-a-themer-layout-to-display-a-single-bigcommerce-product",
            "integrations/bigcommerce/products-posts-module-for-bigcommerce",
            "integrations/bigcommerce/field-connections",
          ]
        },
        {
          type: 'category',
          label: 'Easy Digital Downloads',
          link: {
            type: 'generated-index',
            title: 'Easy Digital Downloads',
          },
          items: [
            "integrations/easy-digital-downloads/beaver-themer-and-the-edd-plugin",
            "integrations/easy-digital-downloads/create-an-archive-themer-layout-for-edd-download-sets",
            "integrations/easy-digital-downloads/create-a-singular-themer-layout-for-edd-download-items-themer",
            "integrations/easy-digital-downloads/field-connections",
          ]
        },
        {
          type: 'category',
          label: 'The Events Calendar',
          link: {
            type: 'doc',
            id: 'integrations/tec/index',
          },
          items: [
            "integrations/tec/getting-started",
            "integrations/tec/field-connections",
            "integrations/tec/archive-layout",
            "integrations/tec/singular-layout",
            "integrations/tec/field-connections",
            {
              type: 'category',
              label: 'Modules',
              link: {
                 type: 'doc',
                 id: "integrations/tec/modules/index",
              },
              items: [
                 "integrations/tec/modules/event-calendar",
                 "integrations/tec/modules/event-posts",
                 "integrations/tec/modules/event-cost",
                 "integrations/tec/modules/event-countdown",
                 "integrations/tec/modules/event-date-time",
                 "integrations/tec/modules/event-description",
                 "integrations/tec/modules/event-details",
                 "integrations/tec/modules/event-export-links",
                 "integrations/tec/modules/event-map",
                 "integrations/tec/modules/event-navigation",
                 "integrations/tec/modules/event-notices",
                 "integrations/tec/modules/event-organizer",
                 "integrations/tec/modules/event-related-events",
                 "integrations/tec/modules/event-tickets",
                 "integrations/tec/modules/event-title",
                 "integrations/tec/modules/event-venue",
                 "integrations/tec/modules/event-website",
              ],
           },
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Field Connections',
      link: {
         type: 'doc',
         id: 'field-connections/index',
      },
      items: [
         "field-connections/getting-started",
         "field-connections/syntax",
         "field-connections/conditionals",
         "field-connections/expressions",
         "field-connections/wordpress-data",
         "field-connections/wordpress-custom-fields",
         "field-connections/third-party",
         {
            type: 'category',
            label: 'Shortcode Examples',
            link: {
               type: 'doc',
               id: 'field-connections/examples/index',
            },
            items: [
               "field-connections/examples/conditional",
               "field-connections/examples/expressions",
               "field-connections/examples/combining",
            ]
         },     
      ]
   },
    
    
    
    {
      type: 'category',
      label: 'Locations',
      items: [
        "locations/themer-locations-reference",
      ]
    },
    {
      type: 'category',
      label: 'Conditional Logic',
      items: [
        "conditional-logic/beaver-themer-conditional-logic",
      ]
    },
    {
      type: 'category',
      label: 'Management/Compatibility',
      link: {
        type: 'generated-index',
        title: 'Management & Compatibility',
      },
      items: [
        "management-compatibility/beaver-themer-supported-themes",
        "management-compatibility/full-width-layouts-on-third-party-themes-themer",
        "management-compatibility/export-beaver-themer-layouts",
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
        "troubleshooting/themer-layouts-option-doesnt-appear-in-builder-menu",
        "troubleshooting/why-does-my-themer-layout-say-unsupported",
        "troubleshooting/message-this-post-has-a-themer-layout-assigned",
        "troubleshooting/troubleshooting-singular-layout-appears-in-post-preview-but-not-actual-post-themer",
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
        "developer/add-header-footer-and-parts-support-to-your-theme-themer",
        "developer/conditional-logic-apis",
        "developer/customize-field-connections-themer",
        "developer/add-custom-attributes-to-themer-layouts",
        "developer/customize-themer-modules",
        "developer/hide-row-or-module-when-field-connection-is-empty-themer",
        "developer/hooks-reference-themer",
        "developer/wp-cli-for-beaver-themer",
      ]
    },
  ],
};
