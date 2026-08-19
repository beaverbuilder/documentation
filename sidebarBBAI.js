/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  bbai: [
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "introduction/index",
      },
      items: ["introduction/faq"],
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/requirements",
        "getting-started/install",
        "getting-started/connect-ai-provider",
        "getting-started/mcp-vs-chat",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      items: [
        "configuration/settings",
        "configuration/usage",
        "configuration/mcp-connection",
        "configuration/design-systems",
      ],
    },
    {
      type: "category",
      label: "Design Foundations",
      link: {
        type: "doc",
        id: "design-foundations/index",
      },
      items: [
        "design-foundations/design-systems",
        "design-foundations/design-tokens",
        "design-foundations/design-kits",
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build/build-first-page",
        "build/build-with-chat",
        "build/build-with-mcp",
        "build/custom-module",
        "build/native-modules",
        "build/forms",
        "build/images",
      ],
    },
    {
      type: "category",
      label: "Developer",
      link: {
        type: "doc",
        id: "developer/index",
      },
      items: [
        "developer/modules-and-blocks",
        "developer/rest-api",
        "developer/hooks",
        "developer/field-types",
        "developer/design-kit-format",
      ],
    },
  ],
};
