/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  assistant: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'introduction/index',
      },
      items: [
        "introduction/faq",
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        slug: '/getting-started/',
      },
      items: [
        "getting-started/what-can-i-do",
        "getting-started/create-account",
        "getting-started/install",
        "getting-started/connect",
      ],
    },
    {
      type: 'category',
      label: 'Assistant Plugin',
      link: {
        type: 'generated-index',
        title: 'Assistant Plugin',
        slug: '/plugin/',
      },
      items: [
        "plugin/launch-assistant",
        {
          type: 'category',
          label: 'Apps',
          link: {
            type: 'generated-index',
            title: 'Apps',
            slug: '/plugin/apps/',
          },
          items: [
            "plugin/apps/home",
            "plugin/apps/code",
            "plugin/apps/comments",
            "plugin/apps/community",
            "plugin/apps/content",
            "plugin/apps/media",
            "plugin/apps/updates",
            "plugin/apps/libraries",
          ],
        },
        "plugin/user-profile",
        "plugin/app-settings",
        "plugin/limit-access",
      ],
    },
    {
      type: 'category',
      label: 'Assistant Pro Cloud',
      link: {
        type: 'generated-index',
        title: 'Assistant Pro Cloud',
        slug: '/cloud/',
      },
      items: [
        {
          type: 'category',
          label: 'Account & Settings',
          link: {
            type: 'doc',
            id: 'cloud/account-settings/index',
          },
          items: [
            "cloud/account-settings/profile-settings",
            "cloud/account-settings/change-password",
            "cloud/account-settings/seller",
            "cloud/account-settings/transfer-ownership",
            "cloud/account-settings/delete-account",
          ],
        },
        {
          type: 'category',
          label: 'Libraries',
          link: {
            type: 'doc',
            id: 'cloud/libraries/index',
          },
          items: [
            "cloud/libraries/create-library",
            "cloud/libraries/add-creative-assets",
            "cloud/libraries/view-edit-assets",
            "cloud/libraries/share-library",
            "cloud/libraries/delete-library",
          ],
        },
        {
          type: 'category',
          label: 'Collections',
          link: {
            type: 'generated-index',
            title: 'Collections',
            slug: '/cloud/collections/',
            description: 'Overview of Library Collections and how to create collections, assign assets and sort by collection.'
          },
          items: [
            "cloud/collections/create-collection",
            "cloud/collections/assign-collections",
            "cloud/collections/sort-collections",
          ],
        },
        "cloud/teams",
        "cloud/community",
        {
          type: 'category',
          label: 'Integrations',
          link: {
            type: 'generated-index',
            title: 'Integrations',
            slug: '/cloud/integrations/',
          },
          items: [
            "cloud/integrations/beaver-builder",
            "cloud/integrations/gutenberg",
            "cloud/integrations/third-party-builders",
            "cloud/integrations/woocommerce",
          ],
        },
      ],
    },
    "known-incompatibilities",
  ],
};
